# File paths in Godot projects

This page explains how file paths work inside Godot projects.  
You’ll learn how to access paths in your projects using the `res://` and `user://` notations, and where Godot stores project‑ and editor‑related files on different platforms.

---

## 1. Path schemes

| Scheme | Meaning | Typical use |
|--------|---------|-------------|
| **`res://`** | Path inside the project’s exported resource bundle or the project directory while running in the editor. | Access to game assets (`res://assets/sprites/hero.png`). |
| **`user://`** | Path to the user‑specific data directory for the project. | Save files, autosaves, settings (`user://saves/level1.tres`). |
| **`temp://`** | (Godot 4 only) Temporary directory that is cleared on next run. | Caches or temporary files. |

### 1.1 Using the schemes in GDScript

```gdscript
# Load a texture from the project
var tex = load("res://assets/hero.png")

# Get the path to the user data directory
var user_dir = ProjectSettings.globalize_path("user://")

# Save a file
var f = FileAccess.open("user://savegame.dat", FileAccess.WRITE)
f.store_line("Hello, world!")
f.close()
```

---

## 2. Platform‑specific directories

Godot provides helper functions to obtain the absolute file system paths for `user://` and `res://`.

| Function | Returns | Example |
|----------|---------|---------|
| `ProjectSettings.globalize_path(path:String)` | Absolute path | `ProjectSettings.globalize_path("user://")` → `C:/Users/Me/AppData/Local/Godot/user/` on Windows |
| `OS.get_user_data_dir()` | Directory where user data for the current project is stored | `OS.get_user_data_dir()` → `C:/Users/Me/AppData/Local/Godot/user/` |
| `OS.get_config_path()` | Directory where the editor’s global settings are kept | `OS.get_config_path()` → `C:/Users/Me/AppData/Local/Godot/` |

> **Note**: Paths are platform‑independent. Use the helper functions to keep the code portable.

---

## 3. Where Godot stores files

| Category | Typical location (Windows) | Typical location (macOS) | Typical location (Linux) |
|----------|----------------------------|--------------------------|--------------------------|
| **Project files** | `<project root>/` | `<project root>/` | `<project root>/` |
| **Export templates** | `C:/Users/Me/AppData/Local/Godot/export/` | `~/Library/Application Support/Godot/export/` | `~/.local/share/godot/export/` |
| **Editor config** | `C:/Users/Me/AppData/Local/Godot/config/` | `~/Library/Application Support/Godot/config/` | `~/.config/godot/` |
| **Project data (user://)** | `C:/Users/Me/AppData/Local/Godot/user/<project_name>/` | `~/Library/Application Support/Godot/<project_name>/` | `~/.local/share/godot/<project_name>/` |

---

## 4. Best practices

- **Use `res://` for everything that is part of the game asset bundle.**  
  This includes textures, scenes, scripts, audio, etc.

- **Use `user://` for anything that changes at runtime or is user‑specific.**  
  Autosaves, configuration files, high‑score lists, etc.

- **Avoid hard‑coding platform paths** – always use the `ProjectSettings` and `OS` helper methods.

- **When working with exported binaries, `user://` becomes a real file system directory on the target platform.**  
  Make sure you don’t overwrite important user files.

---

## 5. Common pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| **FileNotFoundError** | Trying to load a file with a wrong `res://` path | Double‑check the relative path from the project root. |
| **Missing user data** | Using `res://` instead of `user://` to store runtime data | Switch to `user://` or use `OS.get_user_data_dir()` to write. |
| **Cross‑platform path bugs** | Hard‑coding directory separators (`/` vs `\`) | Use `ProjectSettings.globalize_path()` or `Path.join()` equivalents. |

---

## 6. References

- [Godot 4 Manual – File System](https://docs.godotengine.org/en/stable/tutorials/io/files.html)  
- [Godot 4 API – OS](https://docs.godotengine.org/en/stable/classes/class_os.html)  
- [Godot 4 API – ProjectSettings](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html)

---