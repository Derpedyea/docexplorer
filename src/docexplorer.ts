#!/usr/bin/env bun
import crypto from "node:crypto";
import os from "node:os";
import path from "node:path";
import fs from "node:fs/promises";
import { crawl } from "./crawler";
import { htmlToMarkdown, inferPathPrefix } from "./openrouter";
import ora from "ora";
import chalk from "chalk";
import Table from "cli-table3";
import { select, input, confirm } from "@inquirer/prompts";

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
  defaultModel?: string;
  concurrency?: number;
  maxPages?: number;
};

async function main() {
  const [, , commandOrName, ...rest] = process.argv;

  if (!commandOrName) {
    await showInteractiveMenu();
    return;
  }

  if (commandOrName === "help" || commandOrName === "--help") {
    printUsage();
    return;
  }

  if (commandOrName === "config" || commandOrName === "settings") {
    await handleConfig();
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

  if (commandOrName === "list-remote") {
    await handleListRemote(rest);
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
      chalk.yellow("Legacy invocation detected. Prefer `bun run docexplorer index <name> <url> [pathPrefix]`.")
    );
    await handleIndex(legacyArgs);
    return;
  }

  console.error(chalk.red(`Unknown command: ${commandOrName}`));
  printUsage();
  process.exit(1);
}

async function showInteractiveMenu() {
  console.log(chalk.bold.cyan("\n📚 DocExplorer CLI\n"));

  const choice = await select({
    message: "What would you like to do?",
    choices: [
      { name: "Index Documentation", value: "index" },
      { name: "List Cached Docsets", value: "list" },
      { name: "Pull from Remote", value: "pull" },
      { name: "Push to Remote", value: "push" },
      { name: "Configuration", value: "config" },
      { name: "Exit", value: "exit" },
    ],
  });

  switch (choice) {
    case "index": {
      const name = await input({ message: "Docset Name (e.g., 'react-docs'):" });
      const url = await input({ message: "Source URL:" });
      const prefix = await input({ message: "Path Prefix (optional):" });
      const args = [name, url];
      if (prefix.trim()) args.push(prefix);
      await handleIndex(args);
      break;
    }
    case "list":
      await handleList();
      break;
    case "pull": {
      const id = await input({ message: "Docset ID or Name:" });
      if (id) await handlePull([id]);
      break;
    }
    case "push":
      await handlePush([]);
      break;
    case "config":
      await handleConfig();
      break;
    case "exit":
      process.exit(0);
  }
}

async function handleConfig() {
  const currentConfig = await loadUserConfig();
  
  const choice = await select({
    message: "Configuration Settings",
    choices: [
      { name: `Set OpenRouter API Key (${currentConfig.openrouterApiKey ? 'Set' : 'Not Set'})`, value: "apikey" },
      { name: `Set Default Model (${currentConfig.defaultModel || 'Default'})`, value: "model" },
      { name: `Set Concurrency (${currentConfig.concurrency || DEFAULT_CONCURRENCY})`, value: "concurrency" },
      { name: `Set Max Pages (${currentConfig.maxPages || DEFAULT_MAX_PAGES})`, value: "maxpages" },
      { name: "Back to Menu", value: "back" },
    ],
  });

  if (choice === "back") {
    if (!process.argv[2]) await showInteractiveMenu();
    return;
  }

  if (choice === "apikey") {
    const key = await input({ 
      message: "Enter OpenRouter API Key:",
      default: currentConfig.openrouterApiKey 
    });
    if (key.trim()) {
      currentConfig.openrouterApiKey = key.trim();
      await saveUserConfig(currentConfig);
      console.log(chalk.green("API Key saved."));
    }
  }

  if (choice === "model") {
    const model = await input({ 
      message: "Enter Default Model:",
      default: currentConfig.defaultModel || "openai/gpt-oss-safeguard-20b"
    });
    if (model.trim()) {
      currentConfig.defaultModel = model.trim();
      await saveUserConfig(currentConfig);
      console.log(chalk.green("Default model saved."));
    }
  }

  if (choice === "concurrency") {
    const val = await input({ 
      message: `Enter Concurrency (1-${MAX_CONCURRENCY}):`,
      default: (currentConfig.concurrency || DEFAULT_CONCURRENCY).toString(),
      validate: (val) => {
        const num = parseInt(val, 10);
        return num > 0 && num <= MAX_CONCURRENCY ? true : `Please enter a number between 1 and ${MAX_CONCURRENCY}`;
      }
    });
    currentConfig.concurrency = parseInt(val, 10);
    await saveUserConfig(currentConfig);
    console.log(chalk.green("Concurrency limit saved."));
  }

  if (choice === "maxpages") {
    const val = await input({ 
      message: `Enter Max Pages (1-${MAX_MAX_PAGES}):`,
      default: (currentConfig.maxPages || DEFAULT_MAX_PAGES).toString(),
      validate: (val) => {
        const num = parseInt(val, 10);
        return num > 0 && num <= MAX_MAX_PAGES ? true : `Please enter a number between 1 and ${MAX_MAX_PAGES}`;
      }
    });
    currentConfig.maxPages = parseInt(val, 10);
    await saveUserConfig(currentConfig);
    console.log(chalk.green("Max pages limit saved."));
  }

  // Re-show config menu
  await handleConfig();
}

function printUsage(): void {
  console.log(`Usage:
  ${chalk.green("bun run docexplorer")} (Interactive Mode)
  ${chalk.green("bun run docexplorer config")} (or 'settings')
  ${chalk.green("bun run docexplorer index <name> <url> [pathPrefix] [--force]")}
  ${chalk.green("bun run docexplorer list")}
  ${chalk.green("bun run docexplorer list-remote [query] [--limit <n>] [--offset <n>]")}
  ${chalk.green("bun run docexplorer pull <docId-or-name>")}
  ${chalk.green("bun run docexplorer push")}
  ${chalk.green("bun run docexplorer set-api-key <apiKey>")}

Environment variables:
  OPENROUTER_API_KEY (overrides stored key)
  OPENROUTER_MODEL (default: openai/gpt-oss-safeguard-20b)
  DOCEXPLORER_CONCURRENCY (default: ${DEFAULT_CONCURRENCY}, max ${MAX_CONCURRENCY})
`);
}

async function handleIndex(args: string[]): Promise<void> {
  if (args.length < 2) {
    console.error(chalk.red("Usage: bun run docexplorer index <name> <url> [pathPrefix] [--force]"));
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
      console.warn(chalk.yellow(`Ignoring extra argument: ${token}`));
    }
  }

  const apiKey = await resolveApiKey();
  if (!apiKey) {
    console.error(
      chalk.red("Missing OpenRouter API key. Set OPENROUTER_API_KEY or run `bun run docexplorer config`.")
    );
    process.exit(1);
  }

  let baseUrl: URL;
  try {
    baseUrl = new URL(urlArg);
  } catch {
    console.error(chalk.red("Invalid URL argument."));
    process.exit(1);
  }

  if (!ALLOWED_PROTOCOLS.has(baseUrl.protocol)) {
    console.error(chalk.red("Only http(s) URLs are supported."));
    process.exit(1);
  }

  const config = await loadUserConfig();
  const docName = sanitizeName(nameArg);
  const model = process.env.OPENROUTER_MODEL || config.defaultModel || "openai/gpt-oss-safeguard-20b";
  const cwd = process.cwd();
  const cacheRoot = await ensureCacheRoot();
  const docId = computeDocId(docName, baseUrl.href, pathArg);
  const cacheDir = path.join(cacheRoot, docId);
  const cachedDocsDir = path.join(cacheDir, "docs");
  const localDocsDir = path.join(cwd, LOCAL_DOCS_ROOT, docName);
  const backendBaseUrl = getBackendBaseUrlFromEnv();

  if (!force && (await pathExists(cachedDocsDir))) {
    console.log(chalk.green(`Cache hit for ${docName} (${docId}). Copying docs into ${localDocsDir}...`));
    await copyDir(cachedDocsDir, localDocsDir);
    console.log(chalk.green("Done (served from cache)."));
    return;
  }

  if (!force && backendBaseUrl) {
    const spinner = ora("Checking shared cache...").start();
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
      spinner.succeed("Served from shared cache.");
      return;
    }
    spinner.stop();
  }

  let pathPrefix = pathArg && pathArg.trim() ? pathArg.trim() : undefined;

  if (!pathPrefix) {
    const spinner = ora("Inferring docs path prefix...").start();
    try {
      const inferred = await inferPathPrefix({
        apiKey,
        model,
        baseUrl: baseUrl.href,
      });
      if (inferred) {
        pathPrefix = inferred;
        spinner.succeed(`Inferred docs path prefix: ${pathPrefix}`);
      } else {
        spinner.info("Could not infer a docs path prefix; crawling entire origin.");
      }
    } catch (err) {
      spinner.fail("Failed to infer docs path prefix; crawling entire origin.");
      console.error(err);
    }
  }

  console.log(chalk.blue(`Crawling documentation from ${baseUrl.href}`));

  const prefixStats: PrefixStatsMap = {};
  const spinner = ora("Crawling pages...").start();
  const pages = await crawl(baseUrl.href, getMaxPagesFromEnv(), pathPrefix);
  if (pages.length === 0) {
    spinner.warn("No pages discovered to process.");
    return;
  }
  spinner.succeed(`Discovered ${pages.length} pages.`);

  const concurrency = getConcurrencyFromEnv();
  const pagesForBackend: {
    url: string;
    title?: string;
    contentMarkdown: string;
  }[] = [];
  let docsWritten = 0;

  console.log(chalk.gray(`Processing with concurrency: ${concurrency}`));
  const processSpinner = ora(`Processing ${pages.length} pages...`).start();
  let processedCount = 0;
  
  await processPagesConcurrently(
    pages,
    concurrency,
    async (page) => {
      const pageUrlObj = new URL(page.url);
      processedCount++;
      processSpinner.text = `Processing ${processedCount}/${pages.length}: ${page.url}`;
      
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
              return;
            }
          } else {
            updatePrefixStats(prefixStats, pageUrlObj, false);
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
        // console.error(`Failed to process ${page.url}:`, error);
      }
    }
  );
  processSpinner.succeed(`Processed ${pages.length} pages. Written ${docsWritten} docs.`);

  const suggestedPrefix = suggestPathPrefixFromStats(prefixStats);
  if (suggestedPrefix) {
    console.log(
      chalk.blue(`Suggested docs path prefix for ${baseUrl.origin}: ${suggestedPrefix}`)
    );
  }

  if (docsWritten === 0) {
    console.warn(chalk.yellow("No documentation pages were saved; skipping cache update."));
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
  console.log(chalk.green(`Cached docset as ${docId}. Done.`));

  if (backendBaseUrl) {
    const uploadSpinner = ora("Uploading to backend...").start();
    await uploadDocsetToBackend(backendBaseUrl, metadata, pagesForBackend);
    uploadSpinner.succeed("Uploaded to backend.");
  }
}

async function handleList(): Promise<void> {
  const entries = await readAllCacheEntries();
  if (entries.length === 0) {
    console.log(chalk.yellow("No cached docsets found. Run `bun run docexplorer index ...` first."));
    return;
  }

  const table = new Table({
    head: [chalk.cyan('ID'), chalk.cyan('Name'), chalk.cyan('URL'), chalk.cyan('Pages'), chalk.cyan('Cached')],
    colWidths: [18, 20, 40, 10, 25]
  });

  for (const entry of entries) {
    table.push([
      entry.docId,
      entry.docName,
      entry.sourceUrl,
      entry.docsStored,
      new Date(entry.createdAt).toLocaleString()
    ]);
  }

  console.log(table.toString());
}

async function handleListRemote(args: string[]): Promise<void> {
  const backendBaseUrl = getBackendBaseUrlFromEnv();
  if (!backendBaseUrl) {
    console.error(chalk.red("No backend URL configured. Set DOCEXPLORER_BACKEND_URL."));
    return;
  }

  let query = "";
  let limit = 50;
  let offset = 0;

  // Simple arg parsing
  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--limit" && args[i + 1]) {
      limit = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === "--offset" && args[i + 1]) {
      offset = parseInt(args[i + 1], 10);
      i++;
    } else if (!args[i].startsWith("--")) {
      query = args[i];
    }
  }

  const spinner = ora("Fetching remote docsets...").start();
  try {
    const url = new URL(`${backendBaseUrl}/api/docsets`);
    if (query) url.searchParams.set("q", query);
    url.searchParams.set("limit", limit.toString());
    url.searchParams.set("offset", offset.toString());

    const res = await fetch(url.toString());
    if (!res.ok) {
      throw new Error(`Status ${res.status}`);
    }

    const data = await res.json() as { docsets: any[] };
    spinner.stop();

    if (!data.docsets || data.docsets.length === 0) {
      console.log(chalk.yellow("No remote docsets found."));
      return;
    }

    const table = new Table({
      head: [chalk.cyan('ID'), chalk.cyan('Name'), chalk.cyan('URL'), chalk.cyan('Pages'), chalk.cyan('Created')],
      colWidths: [18, 20, 40, 10, 25]
    });

    for (const doc of data.docsets) {
      table.push([
        doc.id,
        doc.name,
        doc.sourceUrl,
        doc.docsStored,
        new Date(doc.createdAt).toLocaleString()
      ]);
    }

    console.log(table.toString());

  } catch (err) {
    spinner.fail("Failed to fetch remote docsets");
    console.error(err);
  }
}

async function handlePull(args: string[]): Promise<void> {
  const identifier = args[0];
  if (!identifier) {
    console.error(chalk.red("Usage: bun run docexplorer pull <docId-or-name>"));
    process.exit(1);
  }

  const spinner = ora("Resolving docset...").start();
  const entries = await readAllCacheEntries();
  const backendBaseUrl = getBackendBaseUrlFromEnv();

  let localEntry = entries.find((e) => e.docId === identifier);
  if (!localEntry) {
    const sanitized = sanitizeName(identifier);
    const matches = entries.filter((e) => e.docName === sanitized);
    if (matches.length === 1) {
      localEntry = matches[0];
    }
  }

  let targetDocId: string | undefined = localEntry?.docId;
  let targetName: string | undefined = localEntry?.docName ?? identifier;

  // If we don't have a local ID, and it looks like an ID, assume it is
  if (!targetDocId && /^[a-f0-9]{16}$/.test(identifier)) {
    targetDocId = identifier;
    targetName = undefined; // We don't know name yet, will learn from remote
  }

  let remoteMetadata: CacheMetadata | undefined;

  if (backendBaseUrl) {
    try {
      if (targetDocId) {
        // Check specific ID
        const res = await fetch(`${backendBaseUrl}/api/docsets/${targetDocId}`);
        if (res.ok) {
           const json = await res.json() as { docset: any };
           if (json.docset) {
             remoteMetadata = mapRemoteToMetadata(json.docset);
           }
        }
      } else if (targetName) {
        // Search by name
        const res = await fetch(`${backendBaseUrl}/api/docsets?q=${encodeURIComponent(targetName)}`);
        if (res.ok) {
          const json = await res.json() as { docsets: any[] };
          const matches = json.docsets.filter(d => sanitizeName(d.name) === sanitizeName(targetName!));
          if (matches.length === 1) {
            remoteMetadata = mapRemoteToMetadata(matches[0]);
            targetDocId = remoteMetadata.docId;
          } else if (matches.length > 1) {
            spinner.fail(`Multiple remote docsets match name '${targetName}'. Please use ID: ${matches.map(m => m.id).join(', ')}`);
            return;
          }
        }
      }
    } catch (e) {
      // ignore network errors, proceed with local
    }
  }

  if (!localEntry && !remoteMetadata) {
    spinner.fail(`Docset '${identifier}' not found locally or remotely.`);
    return;
  }

  let shouldPullRemote = false;

  if (remoteMetadata) {
    if (!localEntry) {
      shouldPullRemote = true;
    } else {
      const localDate = new Date(localEntry.createdAt);
      const remoteDate = new Date(remoteMetadata.createdAt);
      if (remoteDate.getTime() > localDate.getTime()) {
        spinner.info(`Found newer version on remote (${remoteDate.toLocaleString()} vs ${localDate.toLocaleString()}).`);
        shouldPullRemote = true;
      } else {
         // spinner.info("Local version is up to date.");
      }
    }
  }

  if (shouldPullRemote && backendBaseUrl && targetDocId) {
    spinner.start(`Downloading ${remoteMetadata?.docName ?? targetDocId} from remote...`);
    const downloadedMeta = await downloadRemoteDocsetAndCache(backendBaseUrl, targetDocId);
    if (downloadedMeta) {
      localEntry = downloadedMeta;
      spinner.succeed("Downloaded and cached remote version.");
    } else {
      spinner.warn("Failed to download remote version, falling back to local if available.");
    }
  }

  if (!localEntry) {
    spinner.fail("Failed to retrieve docset.");
    return;
  }

  // Install to local docs
  const cacheDocsDir = path.join(await ensureCacheRoot(), localEntry.docId, "docs");
  if (!(await pathExists(cacheDocsDir))) {
    spinner.fail("Cached docs not found on disk. Try re-indexing with --force.");
    return;
  }

  const destDir = path.join(process.cwd(), LOCAL_DOCS_ROOT, localEntry.docName);
  spinner.start(`Installing to ${destDir}...`);
  await copyDir(cacheDocsDir, destDir, { overwrite: true });
  spinner.succeed(`Installed docset '${localEntry.docName}' (id ${localEntry.docId}) to ${destDir}.`);
}

async function handlePush(args: string[]): Promise<void> {
  if (args.length > 0) {
    console.error(chalk.red("Usage: bun run docexplorer push"));
    process.exit(1);
  }

  const backendBaseUrl = getBackendBaseUrlFromEnv();
  if (!backendBaseUrl) {
    console.error(
      chalk.red("Cannot push docsets because no backend URL is configured and no default backend is available."),
    );
    process.exit(1);
  }

  const spinner = ora("Preparing to push docsets...").start();
  const entries = await readAllCacheEntries();
  if (entries.length === 0) {
    spinner.warn("No cached docsets found. Run `bun run docexplorer index ...` first.");
    return;
  }

  const cacheRoot = await ensureCacheRoot();

  for (const entry of entries) {
    spinner.text = `Processing ${entry.docName}...`;
    const cacheDir = path.join(cacheRoot, entry.docId);
    const docsDir = path.join(cacheDir, "docs");

    if (!(await pathExists(docsDir))) {
      spinner.warn(`Skipping docset ${entry.docName} (${entry.docId}) because its cached docs directory is missing.`);
      continue;
    }

    // console.log(
    //   `Building payload for docset '${entry.docName}' (id ${entry.docId}) from cached Markdown files...`,
    // );

    const pages = await readPagesFromDocsDir(docsDir, entry.sourceUrl);

    if (pages.length === 0) {
      spinner.warn(
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

    spinner.text = `Pushing ${pages.length} pages for docset '${entry.docName}'...`;
    await uploadDocsetToBackend(backendBaseUrl, metadata, pages);
    spinner.succeed(`Pushed ${entry.docName}`);
  }
  spinner.stop();
}

async function handleSetApiKey(args: string[]): Promise<void> {
  const key = args[0];
  if (!key) {
    console.error(chalk.red("Usage: bun run docexplorer set-api-key <apiKey>"));
    process.exit(1);
  }

  const trimmed = key.trim();
  if (!trimmed) {
    console.error(chalk.red("API key cannot be empty."));
    process.exit(1);
  }

  const config = await loadUserConfig();
  config.openrouterApiKey = trimmed;
  await saveUserConfig(config);
  console.log(chalk.green("Saved OpenRouter API key to local config."));
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
    if (raw) {
      const parsed = Number.parseInt(raw, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        return Math.min(parsed, MAX_CONCURRENCY);
      }
    }
    return DEFAULT_CONCURRENCY;
  }
  
  function getMaxPagesFromEnv(): number {
    const raw = process.env.DOCEXPLORER_MAX_PAGES;
    if (raw) {
      const parsed = Number.parseInt(raw, 10);
      if (Number.isFinite(parsed) && parsed > 0) {
        return Math.min(parsed, MAX_MAX_PAGES);
      }
    }
    return DEFAULT_MAX_PAGES;
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
            chalk.yellow(`Ignoring DOCEXPLORER_BACKEND_URL with unsupported protocol: ${trimmed}`),
          );
        } else {
          return envUrl.toString().replace(/\/$/, "");
        }
      } catch {
        console.warn(chalk.yellow(`Ignoring invalid DOCEXPLORER_BACKEND_URL value: ${trimmed}`));
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

  function mapRemoteToMetadata(docset: any): CacheMetadata {
    return {
      version: CACHE_VERSION,
      docId: docset.id,
      docName: docset.name,
      sourceUrl: docset.sourceUrl,
      pathPrefix: docset.pathPrefix,
      model: docset.model,
      createdAt: docset.createdAt,
      pagesIndexed: docset.pagesIndexed,
      docsStored: docset.docsStored,
    };
  }

  async function downloadRemoteDocsetAndCache(
    backendBaseUrl: string,
    docId: string
  ): Promise<CacheMetadata | null> {
    const base = backendBaseUrl.replace(/\/$/, "");

    // 1. Fetch Metadata
    let docsetResponse;
    try {
      docsetResponse = await fetch(`${base}/api/docsets/${encodeURIComponent(docId)}`);
    } catch (error) {
      console.warn(chalk.yellow("Failed to fetch docset metadata:", error));
      return null;
    }
    if (!docsetResponse.ok) return null;

    const docsetJson = await docsetResponse.json() as { docset?: any };
    if (!docsetJson.docset) return null;
    const metadata = mapRemoteToMetadata(docsetJson.docset);

    // 2. Fetch Pages List
    let pagesResponse;
    try {
       pagesResponse = await fetch(`${base}/api/docsets/${encodeURIComponent(docId)}/pages`);
    } catch (error) {
       console.warn(chalk.yellow("Failed to fetch pages list:", error));
       return null;
    }
    if (!pagesResponse.ok) return null;
    const pagesJson = await pagesResponse.json() as { pages?: { id: number; pageUrl: string }[] };
    const pages = pagesJson.pages;
    if (!pages || pages.length === 0) return null;

    // 3. Prepare Cache Dir
    const cacheRoot = await ensureCacheRoot();
    const cacheDir = path.join(cacheRoot, docId);
    const cacheDocsDir = path.join(cacheDir, "docs");
    await fs.rm(cacheDir, { recursive: true, force: true });
    await fs.mkdir(cacheDocsDir, { recursive: true });

    // 4. Download Pages
    let docsWritten = 0;
    const remoteBaseUrl = new URL(metadata.sourceUrl); 

    for (const summary of pages) {
      const pageId = summary.id;
      if (!pageId) continue;

      try {
        const pageDetailRes = await fetch(`${base}/api/docsets/${encodeURIComponent(docId)}/pages/${pageId}`);
        if (!pageDetailRes.ok) continue;
        
        const pageDetail = await pageDetailRes.json() as { page: { pageUrl: string; contentMarkdown: string } };
        if (!pageDetail.page || !pageDetail.page.contentMarkdown) continue;

        let pageUrlObj: URL;
        try {
           pageUrlObj = new URL(pageDetail.page.pageUrl);
        } catch {
           try {
             pageUrlObj = new URL(pageDetail.page.pageUrl, metadata.sourceUrl);
           } catch {
             continue;
           }
        }

        const { dir, file } = urlPathToDirAndFile(remoteBaseUrl, pageUrlObj);
        let targetPath = path.join(cacheDocsDir, file);
        if (dir) {
          targetPath = path.join(cacheDocsDir, dir, file);
        }

        await writeFileEnsuringDir(targetPath, pageDetail.page.contentMarkdown);
        docsWritten++;

      } catch (e) {
        // ignore
      }
    }

    if (docsWritten === 0) {
      // Clean up if failed
      await fs.rm(cacheDir, { recursive: true, force: true });
      return null;
    }

    metadata.docsStored = docsWritten;

    // 5. Save Metadata
    await fs.writeFile(
       path.join(cacheDir, CACHE_METADATA_FILENAME),
       JSON.stringify(metadata, null, 2),
       "utf8"
    );

    return metadata;
  }
  
  async function maybeServeFromRemoteCache(
    options: MaybeServeFromRemoteCacheOptions,
  ): Promise<boolean> {
    const metadata = await downloadRemoteDocsetAndCache(options.backendBaseUrl, options.docId);
    if (!metadata) return false;
    
    const cacheDocsDir = path.join(options.cacheDir, "docs");
    await copyDir(cacheDocsDir, options.localDocsDir, { overwrite: true });

    console.log(
      chalk.green(`Served ${metadata.docsStored} docs for ${options.docName} from shared cache (${options.docId}).`),
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
          chalk.yellow(`Failed to upload docset to shared cache backend (status ${response.status}).`),
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
  
      console.log(chalk.green("Uploaded docset to shared cache backend."));
    } catch (error) {
      console.warn(chalk.yellow("Failed to upload docset to shared cache backend:", error));
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
        console.warn(chalk.yellow(`Skipping symbolic link during copy: ${srcPath}`));
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
        console.warn(chalk.yellow(`Skipping cache entry ${entry.name}: ${err}`));
      }
    }
    return entries.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  }
  
  main().catch((error) => {
    console.error(error);
    process.exit(1);
  });
