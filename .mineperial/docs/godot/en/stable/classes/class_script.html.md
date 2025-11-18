**Script** – Godot Engine documentation  
===========================================

> *Inherits:* `Resource< RefCounted<Object`  
> *Inherited By:* `CSharpScript`, `GDScript`, `ScriptExtension`  

A **Script** is a resource that represents a user‑defined class in Godot. It is the base for all scripting languages that can be attached to nodes, such as GDScript, C# and custom GDExtension scripts.

---

## Class Overview

| Property | Type | Description |
|----------|------|-------------|
| `filename` | `String` | Full path to the script file. |
| `source_code` | `String` | Raw script source code (if available). |
| `path` | `String` | Relative path of the script resource. |
| `singleton` | `bool` | Whether this script is a singleton (autoload). |
| `engine_type` | `int` | Internal flag for the engine type. |
| `custom` | `bool` | Indicates a custom script type. |

> **Note:** The table above is illustrative; actual properties can be found in the full class reference.

---

## Methods

The `Script` class exposes a small set of methods that allow introspection and manipulation of scripts.

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_source()` | `String get_source()` | Returns the script source code. |
| `set_source(String)` | `void set_source(String)` | Replaces the script source code. |
| `reload()` | `bool reload()` | Reloads the script from disk. |
| `get_language()` | `Language get_language()` | Returns the scripting language (e.g., GDScript, C#, etc.). |
| `is_tool()` | `bool is_tool()` | Returns `true` if the script is marked as a tool script. |
| `get_script_source()` | `String get_script_source()` | Returns the script source code after compilation. |
| `new()` | `Object new()` | Creates an instance of the script (if it is a class). |

> **Tip:** Use `Script.new()` to instantiate a script as a node or resource at runtime.

---

## Inherited Classes

* `CSharpScript` – A .NET/C# script implementation.  
* `GDScript` – The default Godot scripting language.  
* `ScriptExtension` – Extension class to add custom scripting back‑ends.

---

## Quick Reference

```gdscript
# GDScript example
var my_script = preload("res://my_script.gd")
var instance = my_script.new()
```

```csharp
// C# example
var script = GD.Load<Script>("res://MyScript.cs");
var instance = script.New();
```

---

### Further Reading

* [ScriptReference – Godot 4 Docs](https://docs.godotengine.org/en/stable/classes/class_script.html)  
* [Scripting Overview](https://docs.godotengine.org/en/stable/tutorials/scripting/index.html)  
* [GDScript Basics](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/overview.html)

---