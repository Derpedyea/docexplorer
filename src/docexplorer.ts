import crypto from "node:crypto";
import os from "node:os";
import path from "node:path";
import fs from "node:fs/promises";
import { crawl } from "./crawler";
import { htmlToMarkdown, inferPathPrefix } from "./openrouter";

const DEFAULT_CONCURRENCY = 5;
const MAX_CONCURRENCY = 16;
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
    // Security: Only allow http and https protocols
    if (baseUrl.protocol !== "http:" && baseUrl.protocol !== "https:") {
      console.error("Invalid URL protocol. Only HTTP and HTTPS are allowed.");
      process.exit(1);
    }
  } catch {
    console.error("Invalid URL argument.");
    process.exit(1);
  }

  // Security: Validate and sanitize the name argument
  if (!nameArg || nameArg.trim().length === 0) {
    console.error("Invalid name argument. Name cannot be empty.");
    process.exit(1);
  }
  
  if (nameArg.length > 100) {
    console.error("Invalid name argument. Name must be 100 characters or less.");
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

  if (!force && (await pathExists(cachedDocsDir))) {
    console.log(`Cache hit for ${docName} (${docId}). Copying docs into ${localDocsDir}...`);
    await copyDir(cachedDocsDir, localDocsDir);
    console.log("Done (served from cache).");
    return;
  }

  let pathPrefix = pathArg && pathArg.trim() ? pathArg.trim() : undefined;
  
  // Security: Validate pathPrefix format if provided
  if (pathPrefix) {
    if (pathPrefix.includes("..") || pathPrefix.includes("\\")) {
      console.error("Invalid path prefix. Path traversal patterns are not allowed.");
      process.exit(1);
    }
  }

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
  const pages = await crawl(baseUrl.href, 50, pathPrefix);
  if (pages.length === 0) {
    console.log("No pages discovered to process.");
    return;
  }

  const concurrency = getConcurrencyFromEnv();
  let docsWritten = 0;

  await processPagesConcurrently(
    pages,
    concurrency,
    async (page) => {
      const pageUrlObj = new URL(page.url);
      console.log(`Processing ${page.url}`);
      try {
        const directMarkdown = await fetchMarkdownIfAvailable(page.url);
        const markdown =
          directMarkdown ??
          (await htmlToMarkdown({
            apiKey,
            model,
            url: page.url,
            title: page.title,
            html: page.html,
          }));

        const trimmed = markdown.trim();

        if (isSkipMarker(trimmed)) {
          updatePrefixStats(prefixStats, pageUrlObj, false);
          console.log(`Skipping non-doc page: ${page.url}`);
          return;
        }

        updatePrefixStats(prefixStats, pageUrlObj, true);

        const filePath = buildFilePath(cwd, docName, baseUrl, pageUrlObj);
        await writeFileEnsuringDir(filePath, markdown);
        docsWritten += 1;
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
  
  // Security: Validate that the resulting path doesn't escape the docs directory
  const docsRoot = path.join(rootDir, ".mineperial", "docs", docName);
  const fullPath = dir 
    ? path.join(docsRoot, dir, file)
    : path.join(docsRoot, file);
  
  const normalizedPath = path.normalize(fullPath);
  const normalizedRoot = path.normalize(docsRoot);
  
  if (!normalizedPath.startsWith(normalizedRoot)) {
    throw new Error(`Security: Path traversal attempt detected: ${pageUrl.pathname}`);
  }
  
  return fullPath;
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
  
  // Security: Sanitize each path segment to prevent path traversal
  const sanitizedSegments = segments.map(sanitizePathSegment).filter(Boolean);
  
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

function sanitizePathSegment(segment: string): string {
  // Remove any path traversal attempts and dangerous characters
  const cleaned = segment
    .replace(/\.\./g, "") // Remove ..
    .replace(/^\.+/, "") // Remove leading dots
    .replace(/[<>:"|?*\x00-\x1f]/g, "") // Remove invalid filename characters
    .trim();
  
  // Prevent empty segments and reserved names
  if (!cleaned || cleaned === "." || cleaned === "CON" || cleaned === "PRN" || 
      cleaned === "AUX" || cleaned === "NUL" || /^COM\d$/.test(cleaned) || 
      /^LPT\d$/.test(cleaned)) {
    return "";
  }
  
  return cleaned;
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
    return DEFAULT_CONCURRENCY;
  }
  const parsed = Number.parseInt(raw, 10);
  // Security: Validate parsed value to prevent resource exhaustion
  if (!Number.isFinite(parsed) || parsed <= 0 || Number.isNaN(parsed)) {
    console.warn(`Invalid DOCEXPLORER_CONCURRENCY value: ${raw}. Using default: ${DEFAULT_CONCURRENCY}`);
    return DEFAULT_CONCURRENCY;
  }
  return Math.min(Math.max(1, parsed), MAX_CONCURRENCY);
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
    // Security: Validate URL
    const url = new URL(mdUrl);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return null;
    }
  } catch {
    return null;
  }

  try {
    // Security: Add timeout for fetch operation
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000); // 15 second timeout
    
    const response = await fetch(mdUrl, { signal: controller.signal });
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      return null;
    }
    
    // Security: Check content size
    const contentLength = response.headers.get("content-length");
    if (contentLength && parseInt(contentLength, 10) > 5 * 1024 * 1024) { // 5 MB limit
      console.warn(`Markdown file too large: ${mdUrl}`);
      return null;
    }

    const text = await response.text();
    
    // Security: Additional size check
    if (text.length > 5 * 1024 * 1024) { // 5 MB limit
      console.warn(`Markdown content too large: ${mdUrl}`);
      return null;
    }
    
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

async function loadUserConfig(): Promise<UserConfig> {
  try {
    const raw = await fs.readFile(CONFIG_PATH, "utf8");
    
    // Security: Limit config file size to prevent resource exhaustion
    if (raw.length > 1024 * 1024) { // 1 MB limit
      console.warn("Config file too large, using defaults");
      return {};
    }
    
    const parsed = JSON.parse(raw) as UserConfig;
    
    // Validate the structure
    if (typeof parsed !== "object" || parsed === null) {
      console.warn("Invalid config file format, using defaults");
      return {};
    }
    
    return parsed;
  } catch (err) {
    // Return empty config if file doesn't exist or is invalid
    return {};
  }
}

async function saveUserConfig(config: UserConfig): Promise<void> {
  const dir = path.dirname(CONFIG_PATH);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(CONFIG_PATH, JSON.stringify(config, null, 2), "utf8");
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
  await fs.mkdir(CACHE_ROOT, { recursive: true });
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
  
  // Security: Validate that dest doesn't escape expected boundaries
  const normalizedDest = path.normalize(dest);
  if (normalizedDest.includes("..")) {
    throw new Error(`Security: Invalid destination path: ${dest}`);
  }
  
  if (options?.overwrite) {
    try {
      await fs.rm(dest, { recursive: true, force: true });
    } catch (err) {
      // Ignore errors if destination doesn't exist
    }
  }
  
  await fs.mkdir(dest, { recursive: true });
  
  let entries;
  try {
    entries = await fs.readdir(src, { withFileTypes: true });
  } catch (err) {
    throw new Error(`Failed to read source directory: ${src}`);
  }
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    try {
      if (entry.isDirectory()) {
        await copyDir(srcPath, destPath, options);
      } else if (entry.isFile()) {
        await fs.copyFile(srcPath, destPath);
      }
      // Skip symlinks and other special files for security
    } catch (err) {
      console.warn(`Warning: Failed to copy ${srcPath}: ${err}`);
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
  
  let dirEntries;
  try {
    dirEntries = await fs.readdir(root, { withFileTypes: true });
  } catch (err) {
    console.warn(`Failed to read cache directory: ${err}`);
    return [];
  }
  
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
      
      // Security: Limit metadata file size
      if (raw.length > 1024 * 1024) { // 1 MB limit
        console.warn(`Skipping cache entry ${entry.name}: metadata file too large`);
        continue;
      }
      
      const parsed = JSON.parse(raw) as CacheMetadata;
      
      // Validate required fields
      if (!parsed.docId || !parsed.docName || !parsed.sourceUrl) {
        console.warn(`Skipping cache entry ${entry.name}: invalid metadata structure`);
        continue;
      }
      
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
