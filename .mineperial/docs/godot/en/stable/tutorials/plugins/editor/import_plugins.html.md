**Import plugins** – Godot Engine Documentation (stable)  

---  

# Import plugins  

> An *import plugin* is a special type of editor tool that allows custom resources to be imported by Godot and treated as first‑class resources. The editor itself comes bundled with a number of plugins, such as the `TextureImporter` or `AnimationImporter`, but you can write your own to support new file formats or to modify the import pipeline.  

---  

## Table of contents  

1. [Getting started](#getting-started)  
2. [Plugin structure](#plugin-structure)  
3. [The `EditorImportPlugin` API](#editorimportplugin-api)  
   - 3.1. [Required methods](#required-methods)  
   - 3.2. [Optional methods](#optional-methods)  
4. [Creating a simple plugin](#creating-a-simple-plugin)  
   - 4.1. Project layout  
   - 4.2. `plugin.cfg`  
   - 4.3. GDScript implementation (`my_import_plugin.gd`)  
5. [Adding import options](#adding-import-options)  
6. [Handling files in `import()`](#handling-files-in-import)  
7. [Registering the plugin](#registering-the-plugin)  
8. [Debugging and testing](#debugging-and-testing)  
9. [Further reading](#further-reading)  

---  

## 1. Getting started  

1. **Create a folder** under `res://addons/` – e.g. `res://addons/my_importer/`.  
2. Inside it add a script that extends `EditorImportPlugin`.  
3. Add a `plugin.cfg` file to describe the plugin.  
4. Enable the plugin from **Project → Project Settings → Plugins**.  

---  

## 2. Plugin structure  

```
res://addons/my_importer/
├─ plugin.cfg
├─ my_import_plugin.gd
└─ (any helper scripts/assets you need)
```

*`plugin.cfg`* must contain at least the following keys:

```
[plugin]
name="My Importer"
description="Import .xyz files as CustomResource."
author="Your Name"
version=1
script="my_import_plugin.gd"
```  

---  

## 3. The `EditorImportPlugin` API  

`EditorImportPlugin` is a subclass of `EditorPlugin`.  
Only a handful of methods are required; the rest are optional helpers.  

### 3.1. Required methods  

| Method | Purpose |
|--------|---------|
| `get_importer_name()` | Return a unique identifier for the importer. |
| `get_visible_name()` | User‑friendly name shown in the import dialog. |
| `get_priority()` | Determines import order if multiple plugins support the same extension. |
| `get_import_options()` | Returns an array of `Dictionary` objects that describe user‑configurable options. |
| `import(path, original_path, flags, options, platform, gen_files)` | The core routine that loads the source file, creates resources, and writes them to disk. |

### 3.2. Optional methods  

* `get_import_order()`
* `get_imported_extension()`
* `get_imported_class()`
* `get_imported_path()`
* `get_imported_file()`  
(see the Godot docs for detailed signatures.)

---  

## 4. Creating a simple plugin  

### 4.1. Project layout  

```
res://addons/my_importer/
├─ plugin.cfg
└─ my_import_plugin.gd
```

### 4.2. `plugin.cfg`

```ini
[plugin]
name="XYZ Importer"
description="Converts .xyz files to a custom resource."
author="Your Name"
version=1
script="my_import_plugin.gd"
```

### 4.3. GDScript implementation  

```gdscript
# my_import_plugin.gd
tool
extends EditorImportPlugin

# Unique key for this importer
func get_importer_name() -> String:
    return "xyz_importer"

# Name shown in the editor
func get_visible_name() -> String:
    return "XYZ Importer"

# Import priority
func get_priority() -> int:
    return 1

# Options that can be configured by the user
func get_import_options(_importer_path: String) -> Array:
    return [
        {
            "name": "scale",
            "default_value": 1.0,
            "property_hint": PROPERTY_HINT_RANGE,
            "hint_string": "0.01,10.0,0.01"
        },
        {
            "name": "generate_mesh",
            "default_value": true
        }
    ]

# The actual import function
func import(source_file: String, save_path: String, flags: int, options: Dictionary,
           platform: String, gen_files: Array) -> int:

    # Read the raw .xyz file (replace with real parser)
    var data = FileAccess.open(source_file, FileAccess.READ)
    if data == null:
        push_error("Failed to open %s" % source_file)
        return FAILED

    var content = data.get_as_text()
    data.close()

    # Process the data – here we just create a dummy Resource
    var res = Resource.new()
    res.set("content", content)
    res.set("scale", options.get("scale", 1.0))

    # Save the resource as a .tres
    var err = ResourceSaver.save("%s.tres" % save_path, res)
    if err != OK:
        push_error("Could not save resource: %s" % err)
        return err

    # Optionally generate a Mesh (example)
    if options.get("generate_mesh", true):
        var mesh = ArrayMesh.new()
        # ... build mesh from data ...
        gen_files.append("%s.mesh" % save_path)
        ResourceSaver.save("%s.mesh" % save_path, mesh)

    return OK
```

---  

## 5. Adding import options  

Use `get_import_options()` to expose configurable settings.  
Each option is a dictionary with keys such as:

* `name` – internal key
* `default_value`
* `property_hint` – e.g. `PROPERTY_HINT_RANGE`
* `hint_string` – range or enum values  
These appear in the *Import* panel of the editor.  

---  

## 6. Handling files in `import()`  

* `source_file` – path of the original file in the file system.  
* `save_path` – path where the plugin should write its output, **without extension**.  
* `flags` – flags set by the user (e.g. `ImportPlugin.FLAG_...`).  
* `options` – dictionary of values selected in the import panel.  
* `platform` – string identifying the target platform.  
* `gen_files` – an array you can append to if you generate additional files.  

The function must return `OK`, `FAILED`, or a custom error code.  

---  

## 7. Registering the plugin  

Once the folder is in place, enable it:

1. Go to **Project → Project Settings → Plugins**.  
2. Find “XYZ Importer” and click **Enable**.  
3. The plugin will now appear in the **Import** tab for files with the extensions you support (add `"extensions": ["xyz"]` in `plugin.cfg` if needed).  

---  

## 8. Debugging and testing  

* Use `print()` or `push_warning()` to output to the editor console.  
* Reload the plugin after changes:  
  * In the editor, disable and re‑enable the plugin.  
  * Or use `Project > Project Settings > Plugins > Reload`.  
* If the import fails, check the **Editor Output** tab for error messages.  

---  

## 9. Further reading  

* [EditorPlugin documentation](https://docs.godotengine.org/en/stable/classes/class_editorplugin.html)  
* [ResourceSaver](https://docs.godotengine.org/en/stable/classes/class_resourcesaver.html)  
* [FileAccess](https://docs.godotengine.org/en/stable/classes/class_fileaccess.html)  

---  

*This page is part of the Godot Engine documentation and is intended as a reference for developers creating editor extensions.*