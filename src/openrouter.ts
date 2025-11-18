import { createOpenRouter } from "@openrouter/ai-sdk-provider";
import { streamText } from "ai";

export type HtmlToMarkdownOptions = {
  apiKey: string;
  model: string;
  url: string;
  title?: string;
  html: string;
  forceTreatAsDoc?: boolean;
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

  const maxAttempts = 3;
  let lastError: unknown;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const response = await streamText({
        model,
        prompt,
      });

      await response.consumeStream();
      return response.text;
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts - 1) {
        throw error;
      }
      const delayMs = 1000 * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error("Failed to convert HTML to Markdown after retries.");
}

export async function inferPathPrefix(options: {
  apiKey: string;
  model: string;
  baseUrl: string;
}): Promise<string | undefined> {
  const openrouter = createOpenRouter({
    apiKey: options.apiKey,
  });

  let html: string;
  try {
    const resp = await fetch(options.baseUrl);
    if (!resp.ok) {
      return undefined;
    }
    html = await resp.text();
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
  return prefix;
}

function buildPrompt(options: HtmlToMarkdownOptions): string {
  const parts: string[] = [];

  if (options.forceTreatAsDoc) {
    parts.push("You are a documentation formatter.");
    parts.push(
      "This page is known to be technical product documentation (such as API reference, configuration, tutorials, how-to guides, or conceptual docs)."
    );
    parts.push(
      "Do not try to decide whether it is documentation; assume that it is. Do not respond with '__SKIP_NON_DOC__'. Always convert the page HTML into clean, well-structured Markdown."
    );
    parts.push(
      "Preserve as much of the original content as possible. Do not summarise sections, do not omit content, and do not add placeholder text such as '(details omitted)' or '(rest of page)'."
    );
    parts.push(
      "Do not invent explanations or commentary that are not present in the HTML. Do not add meta notes like 'the full content of the page was not provided' or 'meta description'."
    );
  } else {
    parts.push("You are a documentation classifier and formatter.");
    parts.push(
      "First, decide if this page is actual technical product documentation (such as API reference, configuration, tutorials, how-to guides, or conceptual docs) as opposed to marketing pages, landing pages, blog posts, pricing pages, generic navigation, or legal pages."
    );
    parts.push(
      "Use '__SKIP_NON_DOC__' only for clearly non-documentation pages. When the page is mixed or ambiguous but contains any substantial technical explanation, examples, configuration details, or reference material, treat it as documentation instead of skipping."
    );
    parts.push(
      'If it is not documentation, respond with exactly "__SKIP_NON_DOC__" and nothing else.'
    );
    parts.push(
      "If it is documentation, convert the page HTML into clean, well-structured Markdown. Preserve headings, lists, code blocks, inline code, and important links, and use descriptive headings and subsections where appropriate."
    );
    parts.push(
      "When converting documentation, preserve as much of the original content as possible. Do not summarise whole sections into one sentence, do not omit content, and do not add placeholder text such as '(details omitted)' or '(rest of page)'."
    );
    parts.push(
      "Do not invent explanations or commentary that are not present in the HTML. Do not add meta notes like 'the full content of the page was not provided' or 'meta description'."
    );
  }

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
  const anchorRegex = /<a\s+[^>]*href=["']([^"'#]+)["'][^>]*>/gi;
  let match: RegExpExecArray | null;

  while ((match = anchorRegex.exec(html)) !== null && paths.length < max) {
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
