# The .gdextension file

The **.gdextension** file is a simple, human‑readable configuration file that tells the Godot engine how to load a GDExtension.  
It lives in the root of a GDExtension project (or inside a project that uses the extension) and contains a set of sections that describe the library, the modules to expose, and various build‑time options.

Below is a quick‑start guide that covers the most common sections and how to write one.

---

## 1. Structure of a `.gdextension` file

The file is composed of *sections*, each delimited by a heading surrounded by square brackets.  Each section contains key‑value pairs that define the behaviour of the extension.

```
[general]
# Required fields:
name = "my_extension"
class_name = "MyExtensionClass"
api_version = "0.1"

[paths]
# Optional paths, relative to the .gdextension file.
root_path = "res://"
shared_library = "libmy_extension.so"

[entry_point]
# The name of the function called by Godot to initialise the extension.
init = "my_extension_init"

[modules]
# Names of the modules that Godot should load.
modules = [
    "my_module1",
    "my_module2"
]

[dependencies]
# External libraries required for the extension.
deps = [
    "libc.so",
    "libfoo.so"
]

```

> **Tip**: Every section is optional except `[general]`.  The engine will silently ignore missing sections.

### 1.1 `[general]`

| Key | Description | Example |
|-----|-------------|---------|
| `name` | A unique name for the extension. | `my_extension` |
| `class_name` | (Optional) The name that will be added to the GDScript class library. | `MyExtensionClass` |
| `api_version` | A semantic version number that is used for compatibility checks. | `0.1` |
| `script` | If you want to expose a GDScript file directly, provide its path. | `res://my_script.gd` |
| `use_custom_runtime` | `true`/`false` – whether to use a custom runtime. | `false` |

### 1.2 `[paths]`

This section tells Godot where to find the shared library and other assets.

| Key | Description | Example |
|-----|-------------|---------|
| `root_path` | The root folder of the extension. | `res://` |
| `shared_library` | Path to the compiled shared library (`.dll`, `.so`, `.dylib`). | `libmy_extension.so` |
| `editor_library` | Path to a separate library used only when running the editor. | `libmy_extension_editor.so` |

### 1.3 `[entry_point]`

Defines the function that the engine will call when loading the extension.

| Key | Description | Example |
|-----|-------------|---------|
| `init` | Name of the init function. | `my_extension_init` |
| `deinit` | (Optional) Cleanup function. | `my_extension_deinit` |

### 1.4 `[modules]`

List all modules that the extension provides.  
Each module can expose classes, enums, and functions to GDScript.

```
modules = [
    "my_module1",
    "my_module2"
]
```

Each module is defined in a separate `.gdextension_module` file.

### 1.5 `[dependencies]`

External shared libraries that your extension needs.

```
deps = [
    "libfoo.so",
    "libbar.so"
]
```

These will be loaded automatically before the extension.

---

## 2. Creating a minimal `.gdextension` file

```ini
# my_extension.gdextension
[general]
name = "my_extension"
class_name = "MyExtensionClass"
api_version = "0.1"

[paths]
root_path = "res://"
shared_library = "libmy_extension.so"

[entry_point]
init = "my_extension_init"
```

Place this file in the root of your extension folder.  
When the editor starts, it will read the file, load `libmy_extension.so`, and call `my_extension_init()`.

---

## 3. Advanced usage

### 3.1 Multiple shared libraries

If you want a separate library for the editor, add:

```ini
[paths]
shared_library = "libmy_extension.so"
editor_library = "libmy_extension_editor.so"
```

### 3.2 Exposing modules

Create a module file, e.g. `my_module1.gdextension_module`:

```ini
[gdextension_module]
name = "my_module1"
script = "res://modules/my_module1.gd"
```

Add the module name to the `modules` list in the main file.

### 3.3 Using `preload` in GDScript

Once the extension is loaded, its classes become available:

```gdscript
var my_obj = preload("res://my_extension.gd").new()
```

---

## 4. Common pitfalls

| Issue | Fix |
|-------|-----|
| Library not found | Ensure `shared_library` path is correct and the file exists. |
| `init` function missing | Define `my_extension_init()` in your C/C++ code. |
| Wrong API version | Update `api_version` to match the engine’s API version or use a compatible fallback. |

---

## 5. Resources

- [GDExtension documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension/index.html)
- [Godot Engine source code](https://github.com/godotengine/godot)

---

*End of the .gdextension file tutorial.*