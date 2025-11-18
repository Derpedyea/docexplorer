**GDScript exported properties**

GDScript allows you to expose class members to the editor, to the scene system, and to the networking layer with the `export` keyword.  Exported values are automatically saved with the node (or resource) they belong to, and they can be edited in the inspector, serialized, or sent over RPCs.

> **Why use `export`?**  
> • Persist a value with the scene.  
> • Edit the value from the editor without hard‑coding it.  
> • Use the property in the editor’s inspector for quick tweaking.  
> • Enable network replication when the node is exposed via RPC.

---

## 1.  Basic syntax

```gdscript
# Export a simple value
export var my_int : int = 42

# Export a String with a default value
export var greeting : String = "Hello, World!"
```

*The type hint (`: int`, `: String`, …) is optional in older Godot versions but required in Godot 4 to avoid type inference ambiguity.*  

### 1.1  Exporting without a type hint

```gdscript
export var value
```

This creates a generic exported variable that accepts any type, but you lose the ability to set type‑specific hints in the inspector.

---

## 2.  Property hints

Godot provides a set of **hints** that inform the editor how to display and validate a property.  Hints are added after the type declaration, separated by commas.

| Hint | Purpose | Example |
|------|---------|---------|
| `int` | Integer slider | `export(int, 0, 100) var health = 75` |
| `float` | Floating‑point slider | `export(float, 0.0, 1.0) var speed = 0.5` |
| `String` | Text field | `export(String) var title` |
| `Array` | Array editor | `export(Array) var items` |
| `NodePath` | Node picker | `export(NodePath) var target_path` |
| `Object` | Object picker | `export(Object) var texture : Texture` |
| `Enum` | Drop‑down list | `export(int, "Red", "Green", "Blue") var color = 0` |
| `Flags` | Bitfield drop‑down | `export(int, FLAGS) var flags` |
| `Resource` | Resource picker | `export(Resource) var material : ShaderMaterial` |
| `Node` | Node picker (class name) | `export(Node2D) var parent` |
| `File`, `Directory`, `FilePath` | File/directory pickers | `export(String, FILE) var script_path` |

> **Tip:** Use the *Range* hint to clamp values: `export(float, 0.0, 10.0, 0.1) var radius = 5.0`.

---

## 3.  Grouping exported properties

Exported properties can be grouped under a collapsible heading in the inspector.

```gdscript
export_category("Physics")
export var mass : float = 1.0
export var gravity_scale : float = 1.0
```

The group name can be set with `export_category()` or `class_name`‑level grouping.

---

## 4.  Exporting in scripts vs. classes

### 4.1  In a script

```gdscript
extends Node2D

export var speed : float = 200
```

### 4.2  In a custom `class_name`

```gdscript
class_name MyEnemy
extends KinematicBody2D

export var health : int = 10
```

Exported properties of a `class_name` are visible when you instantiate that class in the editor or use `preload()` / `load()`.

---

## 5.  Working with RPCs

When a property is exported and a node is marked as network‑replicated, its value is automatically sent over RPCs.  Use `@rpc` annotation to control replication.

```gdscript
@export var health : int = 100
@rpc var is_alive : bool = true
```

**Caution:** Exported properties are not automatically synced; you must set `@rpc` or use `sync` modifiers.

---

## 6.  Using `@tool`

If a script is used in the editor (`@tool`), exported properties are editable even when the scene is not running.

```gdscript
@tool
extends Node
export var show_debug : bool = false
```

---

## 7.  Common pitfalls

| Issue | Fix |
|-------|-----|
| *Exported property shows wrong type in inspector* | Add a type hint (`: int`, `: String`, …). |
| *Default value not applied* | Ensure the variable is defined after `export` or use `export var x = 0`. |
| *Enum value resets on load* | Use `export(int, "Red", "Green")` and store the integer, not the string. |
| *NodePath not auto‑resolved* | Cast to `NodePath` or use `onready var target = get_node(target_path)` after `_ready`. |

---

## 8.  Resources

- [Godot Docs – Exported properties](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_exports.html)  
- [Godot Docs – Class Reference: `export`](https://docs.godotengine.org/en/stable/classes/class_object.html#class-object-property-export)

---

### 9.  Summary

Exporting properties in GDScript is a powerful way to:

* Persist data with scenes  
* Expose values to designers  
* Create reusable node templates  
* Simplify networking logic  

Use type hints, ranges, enums, and grouping to make the inspector intuitive and prevent errors.