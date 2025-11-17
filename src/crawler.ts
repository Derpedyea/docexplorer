export type CrawledPage = {
  url: string;
  html: string;
  title?: string;
};

export async function crawl(
  baseUrl: string,
  maxPages: number,
  pathPrefix?: string
): Promise<CrawledPage[]> {
  // Security: Validate baseUrl
  let originUrl: URL;
  try {
    originUrl = new URL(baseUrl);
    if (originUrl.protocol !== "http:" && originUrl.protocol !== "https:") {
      throw new Error("Only HTTP and HTTPS protocols are allowed");
    }
  } catch (err) {
    throw new Error(`Invalid base URL: ${baseUrl}`);
  }
  
  // Security: Limit max pages to prevent resource exhaustion
  const MAX_ALLOWED_PAGES = 1000;
  const effectiveMaxPages = Math.min(maxPages, MAX_ALLOWED_PAGES);
  
  const normalizedPrefix = normalizePathPrefix(pathPrefix);
  const visited = new Set<string>();
  const queue: string[] = [originUrl.href];
  const pages: CrawledPage[] = [];
  
  // Security: Add timeout for the entire crawl operation
  const crawlStartTime = Date.now();
  const MAX_CRAWL_TIME_MS = 30 * 60 * 1000; // 30 minutes

  while (queue.length > 0 && pages.length < effectiveMaxPages) {
    // Security: Check if crawl has exceeded time limit
    if (Date.now() - crawlStartTime > MAX_CRAWL_TIME_MS) {
      console.warn("Crawl operation exceeded time limit");
      break;
    }
    
    const current = queue.shift() as string;
    if (visited.has(current)) {
      continue;
    }
    visited.add(current);

    let response: Response;
    try {
      // Security: Add timeout for individual fetch operations
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      response = await fetch(current, { signal: controller.signal });
      clearTimeout(timeoutId);
    } catch {
      continue;
    }

    if (!response.ok) {
      continue;
    }
    
    // Security: Limit response size to prevent memory exhaustion
    const contentLength = response.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 10 * 1024 * 1024) { // 10 MB limit
      console.warn(`Skipping ${current}: content too large`);
      continue;
    }

    const html = await response.text();
    
    // Security: Additional check for HTML size
    if (html.length > 10 * 1024 * 1024) { // 10 MB limit
      console.warn(`Skipping ${current}: HTML too large`);
      continue;
    }
    
    const title = extractTitle(html);

    pages.push({ url: current, html, title });

    const links = extractLinks(current, html, originUrl, normalizedPrefix);
    for (const link of links) {
      if (!visited.has(link) && !queue.includes(link) && pages.length + queue.length < effectiveMaxPages) {
        queue.push(link);
      }
    }
  }

  return pages;
}

function extractTitle(html: string): string | undefined {
  const match = html.match(/<title>([^<]*)<\/title>/i);
  if (!match) {
    return undefined;
  }
  return match[1].trim();
}

function extractLinks(
  currentUrl: string,
  html: string,
  originUrl: URL,
  pathPrefix?: string
): string[] {
  const links: string[] = [];
  // Security: Use non-backtracking regex to prevent ReDoS
  const anchorRegex = /<a\s+[^>]*?href=["']([^"'#]+?)["'][^>]*?>/gi;
  let match: RegExpExecArray | null;
  
  // Security: Limit iterations to prevent infinite loops on malicious HTML
  let iterations = 0;
  const MAX_ITERATIONS = 10000;

  while ((match = anchorRegex.exec(html)) !== null && iterations < MAX_ITERATIONS) {
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
        url = new URL(href, currentUrl);
      }
    } catch {
      continue;
    }

    if (url.origin !== originUrl.origin) {
      continue;
    }

    if (pathPrefix && !url.pathname.startsWith(pathPrefix)) {
      continue;
    }

    links.push(url.href);
  }

  return links;
}

function normalizePathPrefix(prefix?: string): string | undefined {
  if (!prefix) return undefined;
  let p = prefix.trim();
  if (!p) return undefined;
  if (!p.startsWith("/")) {
    p = "/" + p;
  }
  // Do not force trailing slash; just match startsWith
  return p;
}
