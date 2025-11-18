# Custom resource format loaders

*Author: Godot Engine Documentation*  
*Last updated: Stable version of Godot Engine*  

---

## Overview

`ResourceFormatLoader` is a factory interface that handles loading of file assets in Godot. Resources are the core data containers used throughout the engine. When the `load()` method is called on a given file path, the loader will:

1. Check if the resource has already been loaded.
2. If so, return the previously loaded instance.
3. Otherwise, parse the file, create a `Resource` object, and cache it for future use.

This page explains how to create and register custom resource format loaders in Godot, enabling support for new file types and extending the engine’s import pipeline.

---

## Table of Contents

- [Introduction](#introduction)
- [Using the Built‑In Loader System](#using-the-built‑in-loader-system)
- [Creating a Custom Loader](#creating-a-custom-loader)
  - [Extending `ResourceFormatLoader`](#extending-resourceformatloader)
  - [Implementing Required Methods](#implementing-required-methods)
  - [Registering the Loader](#registering-the-loader)
- [Practical Example](#practical-example)
  - [Sample Loader for `.myres` Files](#sample-loader-for-myres-files)
  - [Integrating with the Editor](#integrating-with-the-editor)
- [Advanced Topics](#advanced-topics)
  - [Handling Dependencies and Caching](#handling-dependencies-and-caching)
  - [Error Handling and Logging](#error-handling-and-logging)
  - [Unloading and Memory Management](#unloading-and-memory-management)
- [Reference](#reference)

---

### Introduction

In Godot, a **resource** is a self‑contained data object that can be stored as a file on disk (e.g., textures, scenes, scripts). The engine provides several built‑in resource loaders for common file formats (PNG, TSCN, GDScript, etc.).  
When you want the engine to recognize a new file type—say, a proprietary level format—you must implement a custom loader that tells the engine:

- **What file extensions** it handles.
- **How to parse** the file and produce a `Resource` instance.
- **How to serialize** the resource back to disk (optional).

---

### Using the Built‑In Loader System

Each resource type in Godot has an associated `ResourceFormatLoader` implementation. The engine queries all registered loaders in order of priority; the first that recognises a file path will load it.

You can view the list of default loaders via the **Editor → Project Settings → General → Files → Loaders** tab. Custom loaders are inserted into this chain via code, usually in a plugin or an engine module.

---

### Creating a Custom Loader

#### Extending `ResourceFormatLoader`

Create a new class that inherits from `ResourceFormatLoader`:

```gdscript
class_name MyResourceLoader
extends ResourceFormatLoader
```

If you prefer C++ or GDScript, the interface is the same: implement the virtual methods defined by the base class.

#### Implementing Required Methods

| Method | Purpose |
|--------|---------|
| `get_recognized_extensions()` | Return an array of file extensions the loader accepts. |
| `get_resource_type(path)` | Return a string indicating the type of resource this file represents. |
| `get_dependencies(path, add_path=false)` | Optional: list other resources referenced by the file. |
| `load(path, original_path="")` | Read the file at `path` and return an instance of the resource. |
| `get_resource_name(path)` | Optional: a human‑readable name for the resource. |
| `get_resource_uid(path)` | Optional: a unique identifier for the file. |
| `get_resource_uid(path, uid)` | Optional: fetch UID from the file. |

A minimal GDScript implementation:

```gdscript
func get_recognized_extensions() -> Array:
    return ["myres"]

func get_resource_type(path: String) -> String:
    return "MyCustomResource"

func load(path: String, original_path: String="") -> Resource:
    var file = FileAccess.open(path, FileAccess.READ)
    if file == null:
        return null
    var data = file.get_string()
    file.close()
    var res = MyCustomResource.new()
    res.parse(data)
    return res
```

#### Registering the Loader

Register the loader during engine startup or in an editor plugin:

```gdscript
var loader = MyResourceLoader.new()
ResourceLoader.add_resource_format_loader(loader)
```

Use `remove_resource_format_loader()` to unregister if needed.

---

### Practical Example

#### Sample Loader for `.myres` Files

Assume you want to load a simple text‑based resource containing key‑value pairs:

```
name = "Level1"
difficulty = 3
```

**Custom resource class (`MyCustomResource.gd`):**

```gdscript
class_name MyCustomResource
extends Resource

export var name: String
export var difficulty: int

func parse(content: String) -> void:
    for line in content.split("\n", true):
        var parts = line.split("=", true)
        if parts.size() == 2:
            var key = parts[0].strip()
            var value = parts[1].strip()
            match key:
                "name":
                    name = value
                "difficulty":
                    difficulty = int(value)
```

**Loader (`MyResourceLoader.gd`):** (as shown above, just return `MyCustomResource`.)

**Registering in a plugin:**

```gdscript
tool
extends EditorPlugin

func _enter_tree() -> void:
    var loader = MyResourceLoader.new()
    ResourceLoader.add_resource_format_loader(loader)
```

Now the editor will treat `.myres` files as instances of `MyCustomResource`, making them available in the inspector.

#### Integrating with the Editor

After registration:

1. Place a `.myres` file in the project’s `res://` directory.
2. The editor will display it as a resource.  
3. You can drag‑drop it onto nodes expecting a `MyCustomResource` or use it in scripts.

---

### Advanced Topics

#### Handling Dependencies and Caching

If your resource references other files (e.g., a `.png` texture), implement `get_dependencies()` to let the engine know. This allows proper re‑loading when dependencies change.

#### Error Handling and Logging

Return `null` from `load()` when parsing fails, or use `push_error()` to output diagnostics. This helps the editor report import failures.

#### Unloading and Memory Management

Implement `free()` on your resources normally. Custom loaders do not need to manage memory beyond what `Resource` provides, but if you cache heavy data inside the loader, consider removing it in `ResourceLoader.remove_resource_format_loader()`.

---

## Reference

- **Godot Engine API – `ResourceFormatLoader`**  
  https://docs.godotengine.org/en/stable/classes/class_resourceformatloader.html
- **EditorPlugin** – registering custom loaders.  
  https://docs.godotengine.org/en/stable/classes/class_editorplugin.html
- **ResourceLoader** – global loader registration.  
  https://docs.godotengine.org/en/stable/classes/class_resourceloader.html

---