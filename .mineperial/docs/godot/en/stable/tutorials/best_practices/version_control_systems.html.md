**Version control systems**  
*Godot Engine documentation – best practices*

---

## Introduction  

Godot is designed to play nicely with version control systems (VCS).  
Scene files (`*.tscn`, `*.scn`), scripts (`*.gd`, `*.cs`, etc.) and all other
resources are plain text and mergeable, so a team can collaborate without
conflicts.  
The engine also ships with a built‑in **Git** integration that lets you run
common Git commands directly from the editor, but the same workflow works
with any other VCS.

---

## Version control plugins  

The Godot editor bundles a small set of plugins that let you interact with
common VCS tools from inside the IDE.  

### Official Git plugin  
* **What it does** – Shows the state of the current repository, lets you
  commit, push, pull, view logs and perform merges from the editor UI.  
* **Installation** – The plugin is enabled by default, but you can toggle
  it in `Project → Project Settings → Editor → Version Control → Enable
  Git`.  
* **Features** –  
  * Commit message entry with file diff preview.  
  * Branch switcher & merge tool.  
  * Revert and stash support.  
  * Integration with the Asset Library so that imported assets can be
  tracked.

> Note: If you prefer the command line or another editor, you can always
> use Git on the command line. The built‑in plugin only simplifies the
> most common actions.

---

## Files to exclude from VCS  

| Folder / File | Reason | Typical `.gitignore` entry |
|---------------|--------|----------------------------|
| `*.import/`   | Generated import cache, binary blobs that can be recreated | `*.import/` |
| `*.godot/`    | Project‑specific configuration (e.g. editor settings). These files are human‑readable and should be committed so that collaborators have the same editor state. | *include* |
| `*.project.godot` | Main project configuration (contains editor settings, paths, etc.). Commit this file. | *include* |
| `*.project.godot.backup` | Auto‑generated backups; never commit. | `*.project.godot.backup` |
| `*.tres` (binary resources) | If you have resources that are large or binary (e.g. `.png`, `.wav`), you may use **Git LFS** instead of committing them normally. | *handled by LFS* |
| `*.md5` | Checksum files; usually regenerated. | `*.md5` |
| `*.import.cache` | Temporary import cache. | `*.import.cache` |
| `*.import/` | Import cache directory. | `*.import/` |

> **Tip:** Use a global `.gitignore` file for common assets such as `Thumbs.db`,
> `__MACOSX/`, and IDE/editor config folders (`*.sublime-workspace`,
> `.idea/`, etc.).

---

## Working with Git on Windows  

Git on Windows can automatically convert line endings, which can lead to
unwanted diffs if your project contains a lot of binary files.  
The recommended settings for a Godot project are:

```bash
# Disable automatic CRLF conversion for all repos
git config --global core.autocrlf false

# Make sure the editor itself uses the same line ending style
# (by default Godot uses Unix LF)
```

If you have a mixture of Windows and *nix developers, you may also set:

```bash
git config --global core.eol lf
```

This keeps all line endings in the repository as LF, which is what the
editor expects.

---

## Git LFS  

Large binary assets such as textures, audio and 3D models can quickly
inflate a Git repository. Godot recommends using **Git Large File Storage
(LFS)** for these files.

1. Install Git LFS: `git lfs install`  
2. Track the asset types you need:

```bash
git lfs track "*.png"
git lfs track "*.jpg"
git lfs track "*.wav"
git lfs track "*.ogg"
git lfs track "*.tres"
git lfs track "*.scn"
```

3. Add the generated `.gitattributes` file to the repo:

```bash
git add .gitattributes
git commit -m "Add LFS tracking"
```

Now Git will store the binary contents outside the normal history, keeping
the repo lightweight while still allowing the assets to be checked out
correctly.

---

### Summary  

* Commit the human‑readable project configuration (`*.project.godot`,
  `*.godot/`).
* Exclude the generated import cache (`*.import/`).
* Use the editor’s built‑in Git plugin for quick commits and branch
  management, or work directly from the command line.
* On Windows, keep `core.autocrlf` and `core.eol` set to `false`/`lf` to
  avoid line‑ending conflicts.
* Enable **Git LFS** for large binary assets to keep the repository fast.

---