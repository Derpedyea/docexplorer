import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

export type HtmlToMarkdownOptions = {
  apiKey: string;
  model: string;
  url: string;
  title?: string;
  html: string;
};

const MAX_HTML_CHARS = 80000;

export async function htmlToMarkdown(options: HtmlToMarkdownOptions): Promise<string> {
  const openrouter = createOpenRouter({
    apiKey: options.apiKey,
  });

  const truncatedHtml = truncateHtml(options.html);
  const prompt = buildPrompt({ ...options, html: truncatedHtml });

  const model = openrouter(options.model, {
    extraBody: {
      transforms: ["middle-out"],
      provider: {
        only: ["groq"],
        allow_fallbacks: false,
      },
    },
  });

  const response = await streamText({
    model,
    prompt,
  });

  await response.consumeStream();
  return response.text;
}

export async function inferPathPrefix(options: {
  apiKey: string;
  model: string;
  baseUrl: string;
}): Promise<string | undefined> {
  // Security: Validate base URL
  let url: URL;
  try {
    url = new URL(options.baseUrl);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      throw new Error("Only HTTP and HTTPS protocols are allowed");
    }
  } catch {
    return undefined;
  }

  const openrouter = createOpenRouter({
    apiKey: options.apiKey,
  });

  let html: string;
  try {
    // Security: Add timeout for fetch operation
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    
    const resp = await fetch(options.baseUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!resp.ok) {
      return undefined;
    }
    
    // Security: Check content size
    const contentLength = resp.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 5 * 1024 * 1024) { // 5 MB limit
      console.warn("Response too large for path prefix inference");
      return undefined;
    }
    
    html = await resp.text();
    
    // Security: Additional check for HTML size
    if (html.length > 5 * 1024 * 1024) { // 5 MB limit
      console.warn("HTML too large for path prefix inference");
      return undefined;
    }
  } catch {
    return undefined;
  }

  const origin = new URL(options.baseUrl);
  const paths = collectSamplePaths(origin, html, 40);
  if (paths.length === 0) {
    return undefined;
  }

  const promptParts: string[] = [];
  promptParts.push("You are helping choose a documentation path prefix.");
  promptParts.push(
    "Given this base URL and a list of internal pathnames, choose the shortest path prefix that most likely represents the documentation section (for example '/docs' or '/documentation' or '/guide')."
  );
  promptParts.push(
    "Only return a single path prefix string, or '__NO_PREFIX__' if there is no clear docs section. Do not add any explanation."
  );
  promptParts.push("");
  promptParts.push(`Base URL: ${options.baseUrl}`);
  promptParts.push("Paths:");
  for (const p of paths) {
    promptParts.push(p);
  }

  const prompt = promptParts.join("\n");

  const model = openrouter(options.model);
  const response = await streamText({
    model,
    prompt,
  });

  await response.consumeStream();
  const raw = (await response.text).trim();
  if (!raw || raw === "__NO_PREFIX__") {
    return undefined;
  }

  const firstLine = raw.split(/\r?\n/)[0].trim();
  if (!firstLine) {
    return undefined;
  }

  const prefix = firstLine.startsWith("/") ? firstLine : `/${firstLine}`;
  
  // Security: Validate the returned prefix
  if (prefix.includes("..") || prefix.includes("\\")) {
    console.warn("Invalid path prefix returned by model");
    return undefined;
  }
  
  return prefix;
}

function buildPrompt(options: HtmlToMarkdownOptions): string {
  const parts: string[] = [];
  parts.push("You are a documentation classifier and formatter.");
  parts.push(
    "First, decide if this page is actual technical product documentation (such as API reference, configuration, tutorials, how-to guides, or conceptual docs) as opposed to marketing pages, landing pages, blog posts, pricing pages, generic navigation, or legal pages."
  );
  parts.push('If it is not documentation, respond with exactly "__SKIP_NON_DOC__" and nothing else.');
  parts.push(
    "If it is documentation, convert the page HTML into clean, well-structured Markdown. Preserve headings, lists, code blocks, inline code, and important links, and use descriptive headings and subsections where appropriate."
  );
  parts.push("");
  parts.push(`URL: ${options.url}`);
  if (options.title) {
    parts.push(`Title: ${options.title}`);
  }
  parts.push("");
  parts.push("HTML content:");
  parts.push(options.html);

  return parts.join("\n");
}

function truncateHtml(html: string): string {
  if (html.length <= MAX_HTML_CHARS) {
    return html;
  }
  return html.slice(0, MAX_HTML_CHARS);
}

function collectSamplePaths(origin: URL, html: string, max: number): string[] {
  const paths: string[] = [];
  const seen = new Set<string>();
  // Security: Use non-backtracking regex to prevent ReDoS
  const anchorRegex = /<a\s+[^>]*?href=["']([^"'#]+?)["'][^>]*?>/gi;
  let match: RegExpExecArray | null;
  
  // Security: Limit iterations to prevent infinite loops on malicious HTML
  let iterations = 0;
  const MAX_ITERATIONS = 10000;

  while ((match = anchorRegex.exec(html)) !== null && paths.length < max && iterations < MAX_ITERATIONS) {
    iterations++;
    const href = match[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:")) {
      continue;
    }

    let url: URL;
    try {
      if (href.startsWith("http://") || href.startsWith("https://")) {
        url = new URL(href);
      } else {
        url = new URL(href, origin.href);
      }
    } catch {
      continue;
    }

    if (url.origin !== origin.origin) {
      continue;
    }

    const pathname = url.pathname || "/";
    if (seen.has(pathname)) {
      continue;
    }
    seen.add(pathname);
    paths.push(pathname);
  }

  return paths;
}
