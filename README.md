# docexplorer

CLI tool for crawling external documentation sites, converting pages to Markdown via OpenRouter, and materializing the docs into each of your local projects. It supports a system-wide local cache and can sync with a remote backend to share docsets across your team.

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

## Quick Start (Interactive Mode)

Simply run the tool without arguments to enter the interactive menu:

```bash
bun run docexplorer
```

This will guide you through indexing, listing, pulling, pushing, and configuring the tool.

## Configuration

### OpenRouter API Key

`docexplorer` needs an OpenRouter API key to call the model that converts HTML into Markdown and infers docs path prefixes.

1. **Environment variable (takes precedence)**
   - Set `OPENROUTER_API_KEY` in your shell.

2. **Stored user config (persistent)**
   - Run `docexplorer config` (or `set-api-key`) to save it to `~/.mineperial/docsexplorer/config.json`.

### Backend URL (Optional)

To share docsets with a team or across machines, you can configure a backend URL (pointing to a running `docgrabber-backend` instance).

- **Environment variable**: `DOCEXPLORER_BACKEND_URL`
- **Default**: `https://docexplorer.derped.dev`

### Other Environment Variables

- `OPENROUTER_MODEL`
  - Default: `openai/gpt-oss-safeguard-20b`
  - Controls the model used for HTML→Markdown conversion.
- `DOCEXPLORER_CONCURRENCY`
  - Default: `5`, maximum `16`
  - Controls parallel processing of pages.
- `DOCEXPLORER_MAX_PAGES`
  - Default: `20000`
  - Limit on the number of pages to crawl per site.

## Cache and Docs Layout

### Global Cache
Cached docsets are stored in:
- POSIX: `~/.mineperial/docsexplorer/cache`
- Windows: `C:\Users\<you>\.mineperial\docsexplorer\cache`

### Project Docs
When running `index` or `pull`, docs are written to:
```text
<your-project>/
  .mineperial/
    docs/
      <docName>/
        ... Markdown tree ...
```

## CLI Commands

### `index`
Crawl a site and create a local docset.

```bash
docexplorer index <name> <url> [pathPrefix] [--force]
```
- `name`: Friendly name (e.g. `nextjs`).
- `url`: Base URL (e.g. `https://nextjs.org/docs`).
- `pathPrefix`: Optional path to restrict crawling (e.g. `/docs`).
- `--force`: Re-crawl even if cached.

### `list`
List all docsets in your local global cache.

```bash
docexplorer list
```

### `list-remote`
List docsets available on the configured backend.

```bash
docexplorer list-remote [query] [--limit <n>] [--offset <n>]
```

### `pull`
Install a docset into your current project. Checks local cache first, then tries to download from the backend.

```bash
docexplorer pull <docId-or-name>
```

### `push`
Upload all locally cached docsets to the configured backend.

```bash
docexplorer push
```

### `config`
Open the interactive configuration menu to set API keys, defaults, and limits.

```bash
docexplorer config
```

### `set-api-key`
Quickly set the OpenRouter API key in the persistent config.

```bash
docexplorer set-api-key <apiKey>
```

## Development

- Source code: `src/`
- Entry point: `src/docexplorer.ts`
- Build: `bun run build`
