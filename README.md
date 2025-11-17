# docexplorer

CLI tool for crawling external documentation sites, converting pages to Markdown via OpenRouter, and materializing the docs into each of your local projects while sharing a system-wide cache.

## Installation

### Prerequisites

- Node.js / Bun installed
- An OpenRouter API key

### Install dependencies

```bash
bun install
```

### Build the CLI

```bash
bun run build
```

This compiles TypeScript into `dist/docexplorer.js`, which is what the CLI entry point uses.

### Optional: Install globally

From the project root:

```bash
npm link
```

This makes a global `docexplorer` command available on your PATH. You can then run `docexplorer ...` from any project directory.

If you do not want to link globally, you can always run via Bun directly from this repo:

```bash
bun run docexplorer -- <command> [...args]
```

Example:

```bash
bun run docexplorer -- index my-doc https://example.com/docs
```

> Note: the `--` separates Bun arguments from docexplorer arguments.

## Configuration

### OpenRouter API key

`docexplorer` needs an OpenRouter API key to call the model that converts HTML into Markdown and infers docs path prefixes.

You can configure the key in two ways:

1. **Environment variable (takes precedence)**

   - Set `OPENROUTER_API_KEY` in your shell or OS-level environment.

2. **Stored user config (persistent)**

   - Run:

     ```bash
     docexplorer set-api-key <your-openrouter-api-key>
     ```

   - Or, from this repo without global install:

     ```bash
     bun run docexplorer -- set-api-key <your-openrouter-api-key>
     ```

   - This writes a small JSON config file at:

     - POSIX: `~/.mineperial/docsexplorer/config.json`
     - Windows: `C:\Users\<you>\.mineperial\docsexplorer\config.json`

Resolution order:

1. `OPENROUTER_API_KEY` environment variable (if set and non-empty)
2. `openrouterApiKey` in `config.json`
3. If neither is set, `index` will exit with an error and ask you to configure a key.

### Other environment variables

- `OPENROUTER_MODEL`
  - Default: `openai/gpt-oss-safeguard-20b`
  - Controls which model is used for HTML→Markdown conversion and docs-path inference.
- `DOCEXPLORER_CONCURRENCY`
  - Default: `5`, maximum `16`
  - Controls how many pages are processed in parallel when crawling.

## Cache and docs layout

### Global cache location

All cached docsets are stored under a per-user cache directory:

- POSIX: `~/.mineperial/docsexplorer/cache`
- Windows: `C:\Users\<you>\.mineperial\docsexplorer\cache`

Each indexed docset is stored in a subdirectory named by a stable document ID:

```text
~/.mineperial/docsexplorer/cache/
  <docId>/
    docs/            # Cached Markdown files
    metadata.json    # CacheMetadata describing the docset
```

The `docId` is derived from the doc name, base URL, and optional path prefix.

### Per-project docs directory

When you run `docexplorer` from a project root, it writes documentation into a hidden folder inside that repo:

```text
<your-project>/
  .mineperial/
    docs/
      <docName>/
        ... Markdown tree ...
```

- `docName` is a sanitized version of the name you pass to `index`.
- The directory structure mirrors the source site structure (paths become nested folders with `index.md` or `<page>.md`).

Because the cache is global and shared, you can:

- Index a site once from project A.
- Reuse the cached docset in project B by running `index` or `pull` with the same name/ID.

## CLI commands

### `index`

```bash
docexplorer index <name> <url> [pathPrefix] [--force]
```

- **`name`**: A human-friendly name (e.g. `openrouter`, `nextjs`, `my-service`). It is sanitized into `docName`.
- **`url`**: Base URL of the documentation site (e.g. `https://example.com/docs`).
- **`pathPrefix`** (optional): Restrict crawling to paths under this prefix (e.g. `/docs`, `/guide`).
- **`--force`** (optional): Ignore any existing cache entry and re-crawl/re-convert the docs.

Behavior:

1. Resolves your OpenRouter API key (env var or stored config).
2. Computes a `docId` from `docName`, `url`, and `pathPrefix`.
3. Checks the global cache at `~/.mineperial/docsexplorer/cache/<docId>/docs`.
   - If present and `--force` is not provided, it copies the cached docs into the current project’s `.mineperial/docs/<docName>` folder.
   - If absent or `--force` is set, it crawls the site, converts pages to Markdown, writes them into `.mineperial/docs/<docName>`, then saves them into the global cache.
4. Attempts to infer a docs `pathPrefix` automatically using the model if you do not supply one.

### `list`

```bash
docexplorer list
```

Prints all cached docsets from the global cache, including:

- `docId`
- `name` (sanitized `docName`)
- Source URL
- Path prefix (if any)
- Cached timestamp
- Number of stored docs

### `pull`

```bash
docexplorer pull <docId-or-name>
```

Copies an already-cached docset from the global cache into the current project’s `.mineperial/docs` directory.

- `docId-or-name` can be either:
  - The exact `docId`, or
  - A `docName` that uniquely matches one cached entry.

If multiple entries share the same `docName`, you’ll be asked to disambiguate by ID.

### `set-api-key`

```bash
docexplorer set-api-key <apiKey>
```

Stores your OpenRouter API key into the user config file at `~/.mineperial/docsexplorer/config.json`.

- The stored key is used whenever `OPENROUTER_API_KEY` is not set in the environment.
- If you later set `OPENROUTER_API_KEY`, that value overrides the stored config for that process.

Example:

```bash
docexplorer set-api-key sk-or-...
```

## Development

- Source code lives in `src/`.
- The main entry point is `src/docexplorer.ts`.
- Build with:

  ```bash
  bun run build
  ```

After changes to the CLI logic, rebuild before using the globally linked binary.
