**Project Settings**  
*Source: <https://docs.godotengine.org/en/stable/tutorials/editor/project_settings.html>*

---

# Project Settings

Godot projects store a wide variety of configuration options that control everything from physics to rendering, window behaviour, and more. These settings can be tweaked from the *Project → Project Settings* menu in the editor, read at runtime from your scripts, or edited directly in the `project.godot` file.

---

## Changing project settings

Open the settings dialog by selecting **Project > Project Settings** (or by pressing `Ctrl+Shift+P` and searching for *Project Settings*).  
The dialog is organized into a tree of categories:

- **Application** – window title, icon, and startup behaviour
- **Input Map** – key bindings and action remapping
- **Rendering** – quality, shadows, and GPU settings
- **Physics** – engine tick, collision layers, and solver
- **Window** – size, fullscreen mode, DPI scaling
- … and many more.

Each setting has a tooltip describing its purpose. You can search the dialog using the search bar at the top.

---

## Reading project settings

Settings can be queried at runtime via the `ProjectSettings` singleton:

```gdscript
var full_screen = ProjectSettings.get_setting("display/window/size/fullscreen")
var mouse_sensitivity = ProjectSettings.get_setting("input/sensitivity")
```

If a setting is missing or has a wrong type, `get_setting()` will return `null` or raise a warning. Use the `has_setting()` method to test existence first.

```gdscript
if ProjectSettings.has_setting("physics/3d/solver/iterations"):
    var iters = ProjectSettings.get_setting("physics/3d/solver/iterations")
```

---

## Manually editing `project.godot`

Every project’s settings are persisted in `project.godot` (or `project.godot.save` for some older versions). It is a plain text file with an INI‑like syntax:

```
[application]
config/name="My Game"
config/description="..."

[display/window]
size/width=1024
size/height=768
size/fullscreen=false

[physics/2d]
collision/use_kinematic=true
```

You may edit this file manually (e.g., to set default values for exported templates). When modifying it directly, be careful not to break the syntax – the editor will detect errors and refuse to load the project if it cannot parse the file.

---

## Advanced project settings

Below are the main advanced categories you’ll typically adjust. For a full list, consult the editor or the online reference.

| Category | Typical Settings | Typical Usage |
|----------|------------------|---------------|
| **Application** | `config/name`, `config/icon`, `config/disable_3d` | Sets the application name, icon, or disables the 3D subsystem for 2D projects. |
| **Display / Window** | `size/width`, `size/height`, `borderless`, `fullscreen`, `window/scale_mode` | Controls window dimensions, fullscreen mode, and UI scaling. |
| **Audio** | `audio/driver/name`, `audio/volume/max` | Chooses audio backend and global volume. |
| **Input** | `input/keyboard/mouse_sensitivity`, `input/map/Action` | Configures default keybindings and custom actions. |
| **Physics** | `physics/3d/solver/iterations`, `physics/2d/collision/accuracy` | Tweaks physics simulation quality. |
| **Rendering** | `rendering/quality/shader/normal_map`, `rendering/quality/texture_filter` | Adjusts visual quality, shader support, and texture filtering. |

> **Tip**  
> Use the **Project Settings** dialog’s **Reset** button to restore a setting to its default value.

---

### References

- [Project Settings API](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html) – GDScript/VisualScript interface for querying settings at runtime.
- [project.godot file format](https://docs.godotengine.org/en/stable/tutorials/editor/project_settings.html#manually-editing-project-godot) – Syntax and sections for manual editing.

---