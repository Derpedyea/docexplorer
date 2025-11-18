# PackedScene

> **Godot Engine (Stable) Documentation – Class Reference**

`PackedScene` is a *resource* that represents a serialized scene file.  
It provides a lightweight interface for loading, instantiating, and inspecting scenes.

> **Inheritance**

```
Resource
└── RefCounted
    └── Object
```

---

## Overview

A `PackedScene` holds the data necessary to create an instance of a scene.  
Typical use‑cases include:

- Instancing a scene from a file (`instance()`, `instantiate()`)
- Checking whether a scene can be added as a child of a particular node (`can_be_added_to_parent()`)
- Modifying scene metadata and properties before instantiation

---

## Constructors

| Constructor | Description |
|-------------|-------------|
| `PackedScene()` | Creates a new, empty packed scene. |

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `resource_path` | `String` | The file path of the packed scene resource. |
| `editor_data` | `bool` | **Editor‑only** – indicates whether the scene contains editor‑only data. |

---

## Public Methods

```gdscript
# Packs a given root node into the scene.
func pack(scene: Node) -> void

# Instantiates the packed scene and returns its root node.
func instantiate() -> Node

# Returns the scene's name (if it was packed from a file).
func get_name() -> String

# Sets the scene's name.
func set_name(name: String) -> void

# Determines whether the scene can be added to the specified parent node.
func can_be_added_to_parent(parent: Node) -> bool

# Checks if this packed scene contains placeholder data.
func is_placeholder() -> bool

# Returns the placeholder object if it exists.
func get_placeholder() -> Object

# Retrieves the number of nodes in the scene.
func get_node_count() -> int

# Accesses metadata attached to the packed scene.
func get_meta(key: String) -> Variant
func set_meta(key: String, value: Variant) -> void
func has_meta(key: String) -> bool
func clear_meta() -> void

# Returns the resource's class name.
func get_class() -> String
```

> **Example (GDScript)**

```gdscript
var packed = preload("res://player.tscn")
var instance = packed.instantiate()
add_child(instance)
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the packed scene has been altered (e.g., after `pack()`). |

---

## Notes

- **Persistence** – A `PackedScene` can be saved to a `.tscn` or `.scn` file.  
  Loading the file creates a new `PackedScene` instance that can be used in scripts.
- **Editor‑only data** – The `editor_data` flag is ignored at runtime. It allows the engine to store editor‑specific information that should not be loaded into a built game.
- **Placeholders** – When a scene fails to load, `PackedScene` may contain a *placeholder* node to preserve the scene tree. `is_placeholder()` and `get_placeholder()` help to detect and handle such cases.

---

## References

- [Godot Docs – PackedScene Class](https://docs.godotengine.org/en/stable/classes/class_packedscene.html)  
- [Godot Docs – Scene Instancing](https://docs.godotengine.org/en/stable/tutorials/scripting/scene_instancing.html)

---