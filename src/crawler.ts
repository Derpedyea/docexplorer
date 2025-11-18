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
  const originUrl = new URL(baseUrl);
  const normalizedPrefix = normalizePathPrefix(pathPrefix);
  const visited = new Set<string>();
  const queue: string[] = [originUrl.href];
  const pages: CrawledPage[] = [];

  while (queue.length > 0 && pages.length < maxPages) {
    const current = queue.shift() as string;
    if (visited.has(current)) {
      continue;
    }
    visited.add(current);

    const response = await fetchWithRetry(current, 3);
    if (!response || !response.ok) {
      continue;
    }

    const html = await response.text();
    const title = extractTitle(html);

    pages.push({ url: current, html, title });

    const links = extractLinks(current, html, originUrl, normalizedPrefix);
    for (const link of links) {
      if (!visited.has(link) && !queue.includes(link) && pages.length + queue.length < maxPages) {
        queue.push(link);
      }
    }
  }

  return pages;
}

async function fetchWithRetry(url: string, maxAttempts: number): Promise<Response | null> {
  let lastError: unknown;

  for (let attempt = 0; attempt < maxAttempts; attempt++) {
    try {
      const response = await fetch(url);

      if (response.status === 429 || response.status >= 500) {
        if (attempt === maxAttempts - 1) {
          return null;
        }

        const retryAfterHeader = response.headers.get("retry-after");
        const retryAfterSeconds = retryAfterHeader
          ? Number.parseInt(retryAfterHeader, 10)
          : Number.NaN;
        const delayMs = Number.isFinite(retryAfterSeconds)
          ? retryAfterSeconds * 1000
          : 500 * Math.pow(2, attempt);

        await new Promise<void>((resolve) => setTimeout(resolve, delayMs));
        continue;
      }

      if (!response.ok) {
        return null;
      }

      return response;
    } catch (error) {
      lastError = error;
      if (attempt === maxAttempts - 1) {
        return null;
      }
      const delayMs = 500 * Math.pow(2, attempt);
      await new Promise<void>((resolve) => setTimeout(resolve, delayMs));
    }
  }

  return null;
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
  const anchorRegex = /<a\s+[^>]*href=["']([^"'#]+)["'][^>]*>/gi;
  let match: RegExpExecArray | null;

  while ((match = anchorRegex.exec(html)) !== null) {
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
