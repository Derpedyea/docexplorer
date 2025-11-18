# Project organization

> *Since Godot has no restrictions on project structure or filesystem usage, organizing files when learning the engine can seem challenging. This tutorial suggests a workflow which should make your projects easier to read, maintain and share.*  

*(Source: <https://docs.godotengine.org/en/stable/tutorials/best_practices/project_organization.html>)*  

---

## Introduction

When you start a new Godot project, you’re free to lay out all of your assets, scenes and scripts however you like.  
However, as a project grows, a sensible file hierarchy makes it far easier to:

* Find resources quickly.
* Keep unrelated assets separated.
* Share work with teammates or open‑source contributors.
* Avoid accidental name clashes.

This guide proposes a **conventional folder layout**, a naming convention, and some best‑practice rules for ignoring unnecessary files in version control or the editor’s import cache.

---

## Organization

The most common structure groups items by *function* rather than by file type.  
A typical project might look like this:

```
/project_root
├── addons/          # 3rd‑party modules (plugins, extensions, etc.)
│   └── my_plugin/   # Plugin files
├── assets/
│   ├── audio/
│   │   └── music/
│   ├── fonts/
│   ├── images/
│   │   ├── sprites/
│   │   └── ui/
│   ├── materials/
│   ├── particles/
│   └── shaders/
├── docs/            # Documentation or README files
├── scenes/          # .tscn files
│   ├── ui/
│   ├── levels/
│   └── characters/
├── scripts/         # .gd, .cs, .gdextension files
│   ├── core/        # Base classes
│   ├── ui/
│   └── gameplay/
├── shaders/
├── icons/           # Project icon files
├── .import/         # Auto‑generated import data (ignored)
├── .godot/          # Temporary data (ignored)
├── project.godot
└── README.md
```

### Notes

* **`addons/`** – Keeps third‑party plugins separate from your project assets.
* **`assets/`** – Stores raw assets. Sub‑folders keep textures, audio, fonts, etc. grouped.
* **`scenes/`** – Holds every scene file. Grouping by purpose (`ui`, `levels`, `characters`) keeps the root tidy.
* **`scripts/`** – Source code is kept in a hierarchy that mirrors the scene layout.  
  `core/` may contain reusable base classes or helpers.
* **`shaders/`** – A dedicated place for shader files that are used across many scenes.

Feel free to adjust the hierarchy to fit your workflow, but keep the idea of *function‑based grouping*.

---

## Style guide

Consistency in names and case makes navigation intuitive.

| Item | Recommended name | Example | Why it matters |
|------|------------------|---------|----------------|
| **Scenes** | `snake.tscn`, `enemy.tscn` | `player.tscn` | Lower‑case, underscore‑separated, descriptive |
| **Scripts** | `player.gd`, `enemy.gd` | `ui_controller.gd` | Same pattern as scenes |
| **Resources** | `my_material.tres` | `terrain.mat` | Keep file extensions consistent |
| **Folders** | `assets/`, `scenes/`, `scripts/` | `assets/audio/` | Lower‑case, singular nouns |
| **Constants** | `const MAX_SPEED = 200` | `const PLAYER_HEALTH = 100` | Upper‑case with underscores |

*Avoid spaces or camel‑case in file names; this reduces confusion across operating systems.*

---

## Importing

### Ignoring specific folders

Godot automatically generates a `.import/` folder that holds cached data for each asset.  
It is large and can be regenerated at any time, so you should **exclude it from version control**.

The same applies to the hidden `.godot/` folder used by the editor.  
Add the following lines to your `.gitignore` (or equivalent):

```gitignore
/.godot/
/.import/
/.godot/*
!.godot/project.godot
```

* `!` unignores the main project file so you can keep project settings under version control.*

If you are using a different VCS, add equivalent ignore rules.  

---

## Case sensitivity

* **Windows** is case‑insensitive but case‑preserving.  
  `Player.tscn` and `player.tscn` are treated as the same file, which can lead to subtle bugs when moving projects to Unix‑like systems.

* **Linux / macOS (when using case‑sensitive filesystem)** will treat those as distinct files.

**Recommendation**: Use a consistent case (usually lower‑case) for all filenames and keep the same case in code references (e.g., `load("res://scenes/player.tscn")`).

---