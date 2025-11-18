import crypto from "node:crypto";
import os from "node:os";
import path from "node:path";
import fs from "node:fs/promises";
import { crawl } from "./crawler";
import { htmlToMarkdown, inferPathPrefix } from "./openrouter";

const DEFAULT_CONCURRENCY = 5;
const MAX_CONCURRENCY = 16;
const DEFAULT_MAX_PAGES = 20_000;
const MAX_MAX_PAGES = 20_000;
const ALLOWED_PROTOCOLS = new Set(["http:", "https:"]);
const MAX_PATH_SEGMENT_LENGTH = 64;
const CACHE_VERSION = 1;
const LOCAL_DOCS_ROOT = path.join(".mineperial", "docs");
const DOCEXPLORER_HOME = path.join(os.homedir(), ".mineperial", "docsexplorer");
const CACHE_ROOT = path.join(DOCEXPLORER_HOME, "cache");
const CACHE_METADATA_FILENAME = "metadata.json";
const CONFIG_PATH = path.join(DOCEXPLORER_HOME, "config.json");

type CacheMetadata = {
  version: number;
  docId: string;
  docName: string;
  sourceUrl: string;
  pathPrefix?: string;
  model: string;
  createdAt: string;
  pagesIndexed: number;
  docsStored: number;
};

type UserConfig = {
  openrouterApiKey?: string;
};

async function main() {
  const [, , commandOrName, ...rest] = process.argv;

  if (!commandOrName || commandOrName === "help" || commandOrName === "--help") {
    printUsage();
    return;
  }

  if (commandOrName === "index") {
    await handleIndex(rest);
    return;
  }

  if (commandOrName === "list") {
    await handleList();
    return;
  }

  if (commandOrName === "pull") {
    await handlePull(rest);
    return;
  }

  if (commandOrName === "push") {
    await handlePush(rest);
    return;
  }

  if (commandOrName === "set-api-key") {
    await handleSetApiKey(rest);
    return;
  }

  const legacyArgs = [commandOrName, ...rest];
  if (legacyArgs.length >= 2) {
    console.warn(
      "Legacy invocation detected. Prefer `bun run docexplorer index <name> <url> [pathPrefix]`."
    );
    await handleIndex(legacyArgs);
    return;
  }

  console.error(`Unknown command: ${commandOrName}`);
  printUsage();
  process.exit(1);
}

function printUsage(): void {
  console.log(`Usage:
  bun run docexplorer index <name> <url> [pathPrefix] [--force]
  bun run docexplorer list
  bun run docexplorer pull <docId-or-name>
  bun run docexplorer push
  bun run docexplorer set-api-key <apiKey>

Environment variables:
  OPENROUTER_API_KEY (overrides stored key)
  OPENROUTER_MODEL (default: openai/gpt-oss-safeguard-20b)
  DOCEXPLORER_CONCURRENCY (default: ${DEFAULT_CONCURRENCY}, max ${MAX_CONCURRENCY})
`);
}

async function handleIndex(args: string[]): Promise<void> {
  if (args.length < 2) {
    console.error("Usage: bun run docexplorer index <name> <url> [pathPrefix] [--force]");
    process.exit(1);
  }

  const [nameArg, urlArg, ...rest] = args;
  let pathArg: string | undefined;
  let force = false;

  for (const token of rest) {
    if (token === "--force") {
      force = true;
    } else if (!pathArg) {
      pathArg = token;
    } else {
      console.warn(`Ignoring extra argument: ${token}`);
    }
  }

  const apiKey = await resolveApiKey();
  if (!apiKey) {
    console.error(
      "Missing OpenRouter API key. Set OPENROUTER_API_KEY or run `bun run docexplorer set-api-key <apiKey>`."
    );
    process.exit(1);
  }

  let baseUrl: URL;
  try {
    baseUrl = new URL(urlArg);
  } catch {
    console.error("Invalid URL argument.");
    process.exit(1);
  }

  if (!ALLOWED_PROTOCOLS.has(baseUrl.protocol)) {
    console.error("Only http(s) URLs are supported.");
    process.exit(1);
  }

  const docName = sanitizeName(nameArg);
  const model = process.env.OPENROUTER_MODEL || "openai/gpt-oss-safeguard-20b";
  const cwd = process.cwd();
  const cacheRoot = await ensureCacheRoot();
  const docId = computeDocId(docName, baseUrl.href, pathArg);
  const cacheDir = path.join(cacheRoot, docId);
  const cachedDocsDir = path.join(cacheDir, "docs");
  const localDocsDir = path.join(cwd, LOCAL_DOCS_ROOT, docName);
  const backendBaseUrl = getBackendBaseUrlFromEnv();

  if (!force && (await pathExists(cachedDocsDir))) {
    console.log(`Cache hit for ${docName} (${docId}). Copying docs into ${localDocsDir}...`);
    await copyDir(cachedDocsDir, localDocsDir);
    console.log("Done (served from cache).");
    return;
  }

  if (!force && backendBaseUrl) {
    const servedFromShared = await maybeServeFromRemoteCache({
      backendBaseUrl,
      docId,
      docName,
      baseUrl,
      cwd,
      localDocsDir,
      cacheDir,
    });
    if (servedFromShared) {
      return;
    }
  }

  let pathPrefix = pathArg && pathArg.trim() ? pathArg.trim() : undefined;

  if (!pathPrefix) {
    console.log("No path prefix provided; asking model to infer docs path prefix...");
    try {
      const inferred = await inferPathPrefix({
        apiKey,
        model,
        baseUrl: baseUrl.href,
      });
      if (inferred) {
        pathPrefix = inferred;
        console.log(`Inferred docs path prefix: ${pathPrefix}`);
      } else {
        console.log("Could not infer a docs path prefix; crawling entire origin.");
      }
    } catch (err) {
      console.error("Failed to infer docs path prefix; crawling entire origin.", err);
    }
  }

  console.log(`Crawling documentation from ${baseUrl.href}`);

  const prefixStats: PrefixStatsMap = {};
  const pages = await crawl(baseUrl.href, getMaxPagesFromEnv(), pathPrefix);
  if (pages.length === 0) {
    console.log("No pages discovered to process.");
    return;
  }

  const concurrency = getConcurrencyFromEnv();
  const pagesForBackend: {
    url: string;
    title?: string;
    contentMarkdown: string;
  }[] = [];
  let docsWritten = 0;

  await processPagesConcurrently(
    pages,
    concurrency,
    async (page) => {
      const pageUrlObj = new URL(page.url);
      console.log(`Processing ${page.url}`);
      try {
        const directMarkdown = await fetchMarkdownIfAvailable(page.url);
        let markdown =
          directMarkdown ??
          (await htmlToMarkdown({
            apiKey,
            model,
            url: page.url,
            title: page.title,
            html: page.html,
          }));

        let trimmed = markdown.trim();

        if (isSkipMarker(trimmed)) {
          const shouldForceDoc =
            !directMarkdown && isLikelyDocPage(page.url, page.title, page.html);

          if (shouldForceDoc) {
            console.log(
              `LLM classified as non-doc but heuristics consider this a doc page; reprocessing as doc: ${page.url}`
            );
            markdown = await htmlToMarkdown({
              apiKey,
              model,
              url: page.url,
              title: page.title,
              html: page.html,
              forceTreatAsDoc: true,
            });
            trimmed = markdown.trim();
            if (isSkipMarker(trimmed)) {
              updatePrefixStats(prefixStats, pageUrlObj, false);
              console.log(`Skipping non-doc page after forced-doc retry: ${page.url}`);
              return;
            }
          } else {
            updatePrefixStats(prefixStats, pageUrlObj, false);
            console.log(`Skipping non-doc page: ${page.url}`);
            return;
          }
        }

        updatePrefixStats(prefixStats, pageUrlObj, true);

        const filePath = buildFilePath(cwd, docName, baseUrl, pageUrlObj);
        await writeFileEnsuringDir(filePath, markdown);
        docsWritten += 1;
        pagesForBackend.push({
          url: page.url,
          title: page.title ?? undefined,
          contentMarkdown: markdown,
        });
      } catch (error) {
        console.error(`Failed to process ${page.url}:`, error);
      }
    }
  );

  const suggestedPrefix = suggestPathPrefixFromStats(prefixStats);
  if (suggestedPrefix) {
    console.log(
      `Suggested docs path prefix for ${baseUrl.origin}: ${suggestedPrefix}`
    );
  }

  if (docsWritten === 0) {
    console.warn("No documentation pages were saved; skipping cache update.");
    return;
  }

  const metadata: CacheMetadata = {
    version: CACHE_VERSION,
    docId,
    docName,
    sourceUrl: baseUrl.href,
    pathPrefix,
    model,
    createdAt: new Date().toISOString(),
    pagesIndexed: pages.length,
    docsStored: docsWritten,
  };

  await saveDocsetToCache(localDocsDir, cacheDir, metadata);
  console.log(`Cached docset as ${docId}. Done.`);

  if (backendBaseUrl) {
    await uploadDocsetToBackend(backendBaseUrl, metadata, pagesForBackend);
  }
}

async function handleList(): Promise<void> {
  const entries = await readAllCacheEntries();
  if (entries.length === 0) {
    console.log("No cached docsets found. Run `bun run docexplorer index ...` first.");
    return;
  }

  console.log("Cached docsets:\n");
  for (const entry of entries) {
    console.log(
      `- ${entry.docId}\n    name: ${entry.docName}\n    url: ${entry.sourceUrl}\n    pathPrefix: ${entry.pathPrefix ?? "(none)"}\n    cached: ${entry.createdAt}\n    docs stored: ${entry.docsStored}`
    );
  }
}

async function handlePull(args: string[]): Promise<void> {
  const identifier = args[0];
  if (!identifier) {
    console.error("Usage: bun run docexplorer pull <docId-or-name>");
    process.exit(1);
  }

  const entries = await readAllCacheEntries();
  if (entries.length === 0) {
    console.error("No cached docsets available.");
    return;
  }

  let entry = entries.find((e) => e.docId === identifier);
  if (!entry) {
    const sanitized = sanitizeName(identifier);
    const matches = entries.filter((e) => e.docName === sanitized);
    if (matches.length === 1) {
      entry = matches[0];
    } else if (matches.length > 1) {
      console.error(
        `Multiple cached docsets share that name. Please specify one of the following IDs: ${matches
          .map((m) => m.docId)
          .join(", ")}`
      );
      return;
    } else {
      console.error(`No cached docset found for identifier: ${identifier}`);
      return;
    }
  }

  const cacheDocsDir = path.join(await ensureCacheRoot(), entry.docId, "docs");
  if (!(await pathExists(cacheDocsDir))) {
    console.error("Cached docs not found on disk. Try re-indexing with --force.");
    return;
  }

  const destDir = path.join(process.cwd(), LOCAL_DOCS_ROOT, entry.docName);
  await copyDir(cacheDocsDir, destDir);
  console.log(`Copied cached docset '${entry.docName}' (id ${entry.docId}) into ${destDir}.`);
}

async function handlePush(args: string[]): Promise<void> {
  if (args.length > 0) {
    console.error("Usage: bun run docexplorer push");
    process.exit(1);
  }

  const backendBaseUrl = getBackendBaseUrlFromEnv();
  if (!backendBaseUrl) {
    console.error(
      "Cannot push docsets because no backend URL is configured and no default backend is available.",
    );
    process.exit(1);
  }

  const entries = await readAllCacheEntries();
  if (entries.length === 0) {
    console.log("No cached docsets found. Run `bun run docexplorer index ...` first.");
    return;
  }

  const cacheRoot = await ensureCacheRoot();

  for (const entry of entries) {
    const cacheDir = path.join(cacheRoot, entry.docId);
    const docsDir = path.join(cacheDir, "docs");

    if (!(await pathExists(docsDir))) {
      console.warn(
        `Skipping docset ${entry.docName} (${entry.docId}) because its cached docs directory is missing.`,
      );
      continue;
    }

    console.log(
      `Building payload for docset '${entry.docName}' (id ${entry.docId}) from cached Markdown files...`,
    );

    const pages = await readPagesFromDocsDir(docsDir, entry.sourceUrl);

    if (pages.length === 0) {
      console.warn(
        `Skipping docset ${entry.docName} (${entry.docId}) because no Markdown files were found in the cache.`,
      );
      continue;
    }

    const metadata: CacheMetadata = {
      version: CACHE_VERSION,
      docId: entry.docId,
      docName: entry.docName,
      sourceUrl: entry.sourceUrl,
      pathPrefix: entry.pathPrefix,
      model: entry.model,
      createdAt: entry.createdAt,
      pagesIndexed: entry.pagesIndexed,
      docsStored: entry.docsStored,
    };

    console.log(
      `Pushing ${pages.length} pages for docset '${entry.docName}' (id ${entry.docId}) to backend...`,
    );
    await uploadDocsetToBackend(backendBaseUrl, metadata, pages);
  }
}

async function handleSetApiKey(args: string[]): Promise<void> {
  const key = args[0];
  if (!key) {
    console.error("Usage: bun run docexplorer set-api-key <apiKey>");
    process.exit(1);
  }

  const trimmed = key.trim();
  if (!trimmed) {
    console.error("API key cannot be empty.");
    process.exit(1);
  }

  const config = await loadUserConfig();
  config.openrouterApiKey = trimmed;
  await saveUserConfig(config);
  console.log("Saved OpenRouter API key to local config.");
}

async function readPagesFromDocsDir(
  docsDir: string,
  sourceUrl: string,
): Promise<BackendPage[]> {
  const pages: BackendPage[] = [];

  async function walk(currentDir: string): Promise<void> {
    const dirEntries = await fs.readdir(currentDir, { withFileTypes: true });
    for (const entry of dirEntries) {
      const fullPath = path.join(currentDir, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".md")) {
        const relativePath = path.relative(docsDir, fullPath);
        let contents: string;
        try {
          contents = await fs.readFile(fullPath, "utf8");
        } catch {
          continue;
        }

        if (!contents) {
          continue;
        }

        const url = buildPageUrlFromRelativePath(relativePath, sourceUrl);
        const title = inferTitleFromMarkdown(contents);

        pages.push({
          url,
          title: title ?? undefined,
          contentMarkdown: contents,
        });
      }
    }
  }

  await walk(docsDir);
  return pages;
}

function buildPageUrlFromRelativePath(relativePath: string, sourceUrl: string): string {
  const normalized = relativePath.split(path.sep).join("/");

  if (!normalized || normalized === "index.md") {
    return sourceUrl;
  }

  const segments = normalized.split("/");
  const last = segments[segments.length - 1];

  let relativeForUrl: string;

  if (last.toLowerCase() === "index.md") {
    const dir = segments.slice(0, -1).join("/");
    relativeForUrl = dir ? `${dir}/` : "";
  } else {
    const withoutExt = last.replace(/\.md$/i, "");
    const dir = segments.slice(0, -1).join("/");
    relativeForUrl = dir ? `${dir}/${withoutExt}` : withoutExt;
  }

  try {
    const url = new URL(relativeForUrl || "./", sourceUrl);
    return url.toString();
  } catch {
    return sourceUrl;
  }
}

function inferTitleFromMarkdown(markdown: string): string | undefined {
  const lines = markdown.split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      continue;
    }
    const match = /^#\s+(.+)$/.exec(trimmed);
    if (match && match[1].trim()) {
      return match[1].trim();
    }
  }
  return undefined;
}

function sanitizeName(name: string): string {
  const lower = name.toLowerCase().trim();
  const replaced = lower.replace(/[^a-z0-9-_]+/g, "-");
  return replaced.replace(/^-+|-+$/g, "") || "docs";
}

function buildFilePath(
  rootDir: string,
  docName: string,
  baseUrl: URL,
  pageUrl: URL
): string {
  const { dir, file } = urlPathToDirAndFile(baseUrl, pageUrl);
  if (dir) {
    return path.join(rootDir, ".mineperial", "docs", docName, dir, file);
  }
  return path.join(rootDir, ".mineperial", "docs", docName, file);
}

function urlPathToDirAndFile(
  baseUrl: URL,
  pageUrl: URL
): { dir: string; file: string } {
  let pathname = pageUrl.pathname;

  if (pathname === baseUrl.pathname || pathname === "") {
    return { dir: "", file: "index.md" };
  }

  if (pathname.startsWith("/")) {
    pathname = pathname.slice(1);
  }

  if (pathname.endsWith("/")) {
    pathname = pathname.slice(0, -1);
  }

  if (pathname === "") {
    return { dir: "", file: "index.md" };
  }

  const segments = pathname.split("/");
  const sanitizedSegments = segments
    .map((segment) => sanitizePathSegment(segment))
    .filter((segment): segment is string => Boolean(segment));

  if (sanitizedSegments.length === 0) {
    return { dir: "", file: "index.md" };
  }

  if (sanitizedSegments.length === 1) {
    // Top-level page: make it a folder with index.md
    return { dir: sanitizedSegments[0], file: "index.md" };
  }

  const file = sanitizedSegments[sanitizedSegments.length - 1] + ".md";
  const dir = sanitizedSegments.slice(0, -1).join("/");
  return { dir, file };
}

function sanitizePathSegment(segment: string): string | undefined {
  const trimmed = segment.trim();
  if (!trimmed) {
    return undefined;
  }

  const normalized = trimmed
    .normalize("NFKC")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .slice(0, MAX_PATH_SEGMENT_LENGTH);

  if (!normalized || normalized === "." || normalized === "..") {
    return crypto.createHash("sha1").update(trimmed).digest("hex").slice(0, 8);
  }

  return normalized;
}

type PrefixStats = { doc: number; nonDoc: number };
type PrefixStatsMap = Record<string, PrefixStats>;

function updatePrefixStats(
  stats: PrefixStatsMap,
  pageUrl: URL,
  isDoc: boolean
): void {
  const segments = pageUrl.pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return;
  }

  for (let i = 0; i < segments.length; i++) {
    const prefix = "/" + segments.slice(0, i + 1).join("/");
    const entry = (stats[prefix] ??= { doc: 0, nonDoc: 0 });
    if (isDoc) {
      entry.doc += 1;
    } else {
      entry.nonDoc += 1;
    }
  }
}

function suggestPathPrefixFromStats(
  stats: PrefixStatsMap
): string | undefined {
  let bestPrefix: string | undefined;
  let bestScore = 0;

  for (const [prefix, value] of Object.entries(stats)) {
    const { doc, nonDoc } = value;
    const total = doc + nonDoc;

    if (!prefix || prefix === "/") {
      continue;
    }

    // Require at least 2 doc pages and more docs than non-docs
    if (doc < 2 || doc <= nonDoc) {
      continue;
    }

    const purity = doc / total;
    const depth = prefix.split("/").filter(Boolean).length;
    const score = purity * doc + depth * 0.1;

    if (score > bestScore) {
      bestScore = score;
      bestPrefix = prefix;
    }
  }

  return bestPrefix;
}

function getConcurrencyFromEnv(): number {
  const raw = process.env.DOCEXPLORER_CONCURRENCY;
  if (!raw) {
    return 5;
  }
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return 5;
  }
  return Math.min(parsed, 16);
}

function getMaxPagesFromEnv(): number {
  const raw = process.env.DOCEXPLORER_MAX_PAGES;
  if (!raw) {
    return DEFAULT_MAX_PAGES;
  }
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return DEFAULT_MAX_PAGES;
  }
  return Math.min(parsed, MAX_MAX_PAGES);
}

async function processPagesConcurrently<T>(
  items: T[],
  concurrency: number,
  worker: (item: T) => Promise<void>
): Promise<void> {
  if (items.length === 0) return;
  const queue = [...items];

  const runWorker = async () => {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) {
        return;
      }
      await worker(item);
    }
  };

  const workers: Promise<void>[] = [];
  const count = Math.max(1, concurrency);
  for (let i = 0; i < count; i++) {
    workers.push(runWorker());
  }
  await Promise.all(workers);
}

async function fetchMarkdownIfAvailable(pageUrl: string): Promise<string | null> {
  let mdUrl: string;
  try {
    mdUrl = buildMarkdownUrl(pageUrl);
  } catch {
    return null;
  }

  try {
    const response = await fetch(mdUrl);
    if (!response.ok) {
      return null;
    }

    const text = await response.text();
    if (!text.trim()) {
      return null;
    }
    return text;
  } catch {
    return null;
  }
}

function buildMarkdownUrl(pageUrl: string): string {
  const url = new URL(pageUrl);
  if (url.pathname.endsWith("/")) {
    url.pathname = url.pathname.slice(0, -1) + ".md";
  } else if (!url.pathname.endsWith(".md")) {
    url.pathname = url.pathname + ".md";
  }
  return url.toString();
}

async function writeFileEnsuringDir(filePath: string, contents: string): Promise<void> {
  const dir = path.dirname(filePath);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(filePath, contents, "utf8");
}

function isSkipMarker(markdown: string): boolean {
  if (!markdown) {
    return false;
  }

  const trimmed = markdown.trim();
  if (!trimmed) {
    return false;
  }

  if (trimmed === "__SKIP_NON_DOC__") {
    return true;
  }

  const unwrapped = trimmed.replace(/^[`*]+/, "").replace(/[`*]+$/, "");
  return unwrapped === "__SKIP_NON_DOC__" || unwrapped === "SKIP_NON_DOC";
}

function isLikelyDocPage(
  url: string,
  title: string | undefined,
  html: string
): boolean {
  const urlLower = url.toLowerCase();
  const titleLower = (title ?? "").toLowerCase();

  const docPathHints = [
    "/docs/",
    "/doc/",
    "/documentation",
    "/guide",
    "/guides/",
    "/manual",
    "/tutorial",
    "/tutorials",
    "/api/",
    "/reference",
    "/classes/",
    "/class_",
  ];

  if (docPathHints.some((hint) => urlLower.includes(hint))) {
    return true;
  }

  const docTitleKeywords = [
    "docs",
    "documentation",
    "manual",
    "guide",
    "tutorial",
    "reference",
    "api",
    "class reference",
    "godot",
  ];

  if (docTitleKeywords.some((kw) => titleLower.includes(kw))) {
    return true;
  }

  const codeMatchCount = (html.match(/<pre|<code/gi) ?? []).length;
  const headingCount = (html.match(/<h[1-6][^>]*>/gi) ?? []).length;
  const hasTechnicalTerms =
    /parameter|parameters|returns|class\s+[A-Z][A-Za-z0-9_]+/.test(html);

  if (codeMatchCount >= 2 && headingCount >= 2) {
    return true;
  }

  if ((codeMatchCount >= 1 || headingCount >= 1) && hasTechnicalTerms) {
    return true;
  }

  return false;
}

async function loadUserConfig(): Promise<UserConfig> {
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf8");
    const parsed = JSON.parse(raw) as UserConfig;
    return parsed ?? {};
  } catch {
    return {};
  }
}

async function saveUserConfig(config: UserConfig): Promise<void> {
  const dir = path.dirname(CONFIG_PATH);
  await fs.mkdir(dir, { recursive: true, mode: 0o700 });
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), {
    encoding: "utf8",
    mode: 0o600,
  });
}

async function resolveApiKey(): Promise<string | undefined> {
  const fromEnv = process.env.OPENROUTER_API_KEY;
  if (fromEnv && fromEnv.trim()) {
    return fromEnv.trim();
  }

  const config = await loadUserConfig();
  const fromConfig = config.openrouterApiKey;
  if (fromConfig && fromConfig.trim()) {
    return fromConfig.trim();
  }

  return undefined;
}

async function ensureCacheRoot(): Promise<string> {
  await fs.mkdir(CACHE_ROOT, { recursive: true, mode: 0o700 });
  return CACHE_ROOT;
}

function computeDocId(docName: string, url: string, pathPrefix?: string): string {
  const hash = crypto
    .createHash("sha256")
    .update(docName)
    .update("|")
    .update(url)
    .update("|")
    .update(pathPrefix ?? "")
    .digest("hex");
  return hash.slice(0, 16);
}

type BackendPage = {
  url: string;
  title?: string;
  contentMarkdown: string;
};

type MaybeServeFromRemoteCacheOptions = {
  backendBaseUrl: string;
  docId: string;
  docName: string;
  baseUrl: URL;
  cwd: string;
  localDocsDir: string;
  cacheDir: string;
};

function getBackendBaseUrlFromEnv(): string | undefined {
  const raw = process.env.DOCEXPLORER_BACKEND_URL;
  const defaultUrl = "https://docexplorer.derped.dev";

  const trimmed = raw?.trim();

  if (trimmed) {
    try {
      const envUrl = new URL(trimmed);
      if (!ALLOWED_PROTOCOLS.has(envUrl.protocol)) {
        console.warn(
          `Ignoring DOCEXPLORER_BACKEND_URL with unsupported protocol: ${trimmed}`,
        );
      } else {
        return envUrl.toString().replace(/\/$/, "");
      }
    } catch {
      console.warn(`Ignoring invalid DOCEXPLORER_BACKEND_URL value: ${trimmed}`);
    }
  }

  try {
    const fallback = new URL(defaultUrl);
    if (!ALLOWED_PROTOCOLS.has(fallback.protocol)) {
      return undefined;
    }
    return fallback.toString().replace(/\/$/, "");
  } catch {
    return undefined;
  }
}

async function maybeServeFromRemoteCache(
  options: MaybeServeFromRemoteCacheOptions,
): Promise<boolean> {
  const base = options.backendBaseUrl.replace(/\/$/, "");
  const docsetUrl = `${base}/api/docsets/${encodeURIComponent(options.docId)}`;

  let docsetResponse;
  try {
    docsetResponse = await fetch(docsetUrl);
  } catch (error) {
    console.warn("Failed to contact shared cache backend:", error);
    return false;
  }

  if (docsetResponse.status === 404) {
    return false;
  }

  if (!docsetResponse.ok) {
    console.warn(
      `Shared cache backend returned ${docsetResponse.status} for docset lookup`,
    );
    return false;
  }

  let docsetJson: unknown;
  try {
    docsetJson = await docsetResponse.json();
  } catch (error) {
    console.warn("Failed to parse shared cache docset response:", error);
    return false;
  }

  const docset = (docsetJson as { docset?: unknown }).docset as
    | {
        id?: string;
        docId?: string;
        docName?: string;
        sourceUrl?: string;
        pathPrefix?: string | null;
        model?: string;
        createdAt?: string;
        pagesIndexed?: number;
        docsStored?: number;
      }
    | undefined;

  if (!docset) {
    console.warn("Shared cache response for docset did not include docset data.");
    return false;
  }

  const sourceUrl =
    typeof docset.sourceUrl === "string" && docset.sourceUrl.trim()
      ? docset.sourceUrl
      : options.baseUrl.href;

  let remoteBaseUrl: URL;
  try {
    remoteBaseUrl = new URL(sourceUrl);
  } catch {
    remoteBaseUrl = options.baseUrl;
  }

  const pagesUrl = `${base}/api/docsets/${encodeURIComponent(
    options.docId,
  )}/pages`;

  let pagesResponse;
  try {
    pagesResponse = await fetch(pagesUrl);
  } catch (error) {
    console.warn("Failed to read pages from shared cache backend:", error);
    return false;
  }

  if (!pagesResponse.ok) {
    console.warn(
      `Shared cache backend returned ${pagesResponse.status} when listing pages`,
    );
    return false;
  }

  let pagesJson: unknown;
  try {
    pagesJson = await pagesResponse.json();
  } catch (error) {
    console.warn("Failed to parse shared cache pages response:", error);
    return false;
  }

  const pages = (pagesJson as { pages?: unknown }).pages as
    | { id?: number; pageUrl?: string; title?: string | null }[]
    | undefined;

  if (!pages || pages.length === 0) {
    console.warn("Shared cache docset exists but has no pages.");
    return false;
  }

  try {
    await fs.rm(options.localDocsDir, { recursive: true, force: true });
  } catch {
    // best-effort cleanup
  }

  let docsWritten = 0;

  for (const summary of pages) {
    const pageId = summary?.id;
    const pageUrl = summary?.pageUrl;

    if (!pageId || !pageUrl) {
      continue;
    }

    const pageDetailUrl = `${base}/api/docsets/${encodeURIComponent(
      options.docId,
    )}/pages/${encodeURIComponent(String(pageId))}`;

    let pageDetailResponse;
    try {
      pageDetailResponse = await fetch(pageDetailUrl);
    } catch (error) {
      console.warn("Failed to read page from shared cache backend:", error);
      continue;
    }

    if (!pageDetailResponse.ok) {
      continue;
    }

    let pageDetailJson: unknown;
    try {
      pageDetailJson = await pageDetailResponse.json();
    } catch {
      continue;
    }

    const page = (pageDetailJson as { page?: unknown }).page as
      | {
          pageUrl?: string;
          title?: string | null;
          contentMarkdown?: string;
        }
      | undefined;

    if (!page || typeof page.contentMarkdown !== "string") {
      continue;
    }

    let pageUrlObj: URL;
    try {
      pageUrlObj = new URL(pageUrl);
    } catch {
      try {
        pageUrlObj = new URL(pageUrl, sourceUrl);
      } catch {
        continue;
      }
    }

    const filePath = buildFilePath(
      options.cwd,
      options.docName,
      remoteBaseUrl,
      pageUrlObj,
    );
    await writeFileEnsuringDir(filePath, page.contentMarkdown);
    docsWritten += 1;
  }

  if (docsWritten === 0) {
    console.warn("Shared cache docset had no usable pages.");
    return false;
  }

  const metadata: CacheMetadata = {
    version: CACHE_VERSION,
    docId: options.docId,
    docName: options.docName,
    sourceUrl,
    pathPrefix:
      typeof docset.pathPrefix === "string" && docset.pathPrefix.trim()
        ? docset.pathPrefix
        : undefined,
    model:
      typeof docset.model === "string" && docset.model.trim()
        ? docset.model
        : "unknown",
    createdAt:
      typeof docset.createdAt === "string" && docset.createdAt.trim()
        ? docset.createdAt
        : new Date().toISOString(),
    pagesIndexed:
      typeof docset.pagesIndexed === "number" && Number.isFinite(docset.pagesIndexed)
        ? docset.pagesIndexed
        : docsWritten,
    docsStored:
      typeof docset.docsStored === "number" && Number.isFinite(docset.docsStored)
        ? docset.docsStored
        : docsWritten,
  };

  await saveDocsetToCache(options.localDocsDir, options.cacheDir, metadata);

  console.log(
    `Served ${docsWritten} docs for ${options.docName} from shared cache (${options.docId}).`,
  );

  return true;
}

async function uploadDocsetToBackend(
  backendBaseUrl: string,
  metadata: CacheMetadata,
  pages: BackendPage[],
): Promise<void> {
  if (!pages.length) {
    return;
  }

  const base = backendBaseUrl.replace(/\/$/, "");
  const url = `${base}/api/docsets`;

  const payload = {
    docId: metadata.docId,
    docName: metadata.docName,
    sourceUrl: metadata.sourceUrl,
    pathPrefix: metadata.pathPrefix,
    model: metadata.model,
    createdAt: metadata.createdAt,
    pagesIndexed: metadata.pagesIndexed,
    docsStored: metadata.docsStored,
    pages,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.warn(
        `Failed to upload docset to shared cache backend (status ${response.status}).`,
      );
      try {
        const text = await response.text();
        if (text) {
          console.warn(text);
        }
      } catch {
        // ignore
      }
      return;
    }

    console.log("Uploaded docset to shared cache backend.");
  } catch (error) {
    console.warn("Failed to upload docset to shared cache backend:", error);
  }
}

async function pathExists(target: string): Promise<boolean> {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function copyDir(src: string, dest: string, options?: { overwrite?: boolean }): Promise<void> {
  if (!(await pathExists(src))) {
    throw new Error(`Source directory does not exist: ${src}`);
  }
  if (options?.overwrite) {
    await fs.rm(dest, { recursive: true, force: true });
  }
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isSymbolicLink()) {
      console.warn(`Skipping symbolic link during copy: ${srcPath}`);
      continue;
    }
    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath, options);
    } else if (entry.isFile()) {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function saveDocsetToCache(
  localDocsDir: string,
  cacheDir: string,
  metadata: CacheMetadata
): Promise<void> {
  if (!(await pathExists(localDocsDir))) {
    throw new Error(`Expected local docs at ${localDocsDir}, but directory does not exist.`);
  }
  await fs.rm(cacheDir, { recursive: true, force: true });
  await fs.mkdir(cacheDir, { recursive: true });
  const cacheDocsDir = path.join(cacheDir, "docs");
  await copyDir(localDocsDir, cacheDocsDir);
  await fs.writeFile(
    path.join(cacheDir, CACHE_METADATA_FILENAME),
    JSON.stringify(metadata, null, 2),
    "utf8"
  );
}

async function readAllCacheEntries(): Promise<CacheMetadata[]> {
  const root = await ensureCacheRoot();
  const entries: CacheMetadata[] = [];
  const dirEntries = await fs.readdir(root, { withFileTypes: true });
  for (const entry of dirEntries) {
    if (!entry.isDirectory()) {
      continue;
    }
    const metadataPath = path.join(root, entry.name, CACHE_METADATA_FILENAME);
    if (!(await pathExists(metadataPath))) {
      continue;
    }
    try {
      const raw = await fs.readFile(metadataPath, "utf8");
      const parsed = JSON.parse(raw) as CacheMetadata;
      entries.push(parsed);
    } catch (err) {
      console.warn(`Skipping cache entry ${entry.name}: ${err}`);
    }
  }
  return entries.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
