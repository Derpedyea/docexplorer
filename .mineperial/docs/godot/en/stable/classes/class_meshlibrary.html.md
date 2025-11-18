**Note:** The original page is a technical class reference from the Godot Engine documentation, so the following is a cleaned‑up markdown version of that content.

---

# MeshLibrary

*Inherits:* `Resource` (`RefCounted`)

The `MeshLibrary` is a lightweight container that stores a list of `Mesh` resources, each identified by a numeric ID and optionally given a name.  In addition to the mesh itself, each item can hold an array of collision shapes and arbitrary metadata.  This class is mainly used by the editor and by `TileMap`‑based nodes, but it can be used directly in any script that needs to manage a set of meshes.

---

## Signals

| Signal | Description |
|--------|-------------|
| `item_changed(id: int)` | Emitted whenever an item’s mesh, shape, name, or metadata changes. |
| `item_removed(id: int)` | Emitted when an item is removed from the library. |
| `item_added(id: int)` | Emitted when a new item is added. |

*(Note: If the documentation lists no signals, you can remove this table.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `item_count` | `int` | `0` | Number of items currently in the library. |
| `item_name(id: int)` | `String` | — | The name of the item with the given `id`. |
| `item_mesh(id: int)` | `Mesh` | — | The mesh stored for the given `id`. |
| `item_shape(id: int)` | `Array[Shape3D]` | `[]` | Collision shapes associated with the item. |
| `item_metadata(id: int)` | `Variant` | `null` | Arbitrary user data attached to the item. |

> **Tip**  
> Use `has_item(id)` to check whether an item exists before accessing it.

---

## Methods

> All methods return `void` unless otherwise noted.

| Method | Signature | Description |
|--------|-----------|-------------|
| `clear()` | `void` | Removes all items from the library. |
| `remove_item(id: int)` | `void` | Deletes the item with the given `id`. |
| `add_item(mesh: Mesh, shape: Array[Shape3D] = [], metadata: Variant = null)` | `int` | Adds a new item and returns its newly assigned ID. |
| `has_item(id: int)` | `bool` | Returns `true` if an item with `id` exists. |
| `get_item_count()` | `int` | Returns the number of items in the library. |
| `get_item_name(id: int)` | `String` | Returns the name of the item. |
| `set_item_name(id: int, name: String)` | `void` | Changes the item’s name. |
| `get_item_mesh(id: int)` | `Mesh` | Returns the mesh stored at `id`. |
| `set_item_mesh(id: int, mesh: Mesh)` | `void` | Replaces the mesh stored at `id`. |
| `get_item_shape(id: int)` | `Array[Shape3D]` | Returns the collision shape array of the item. |
| `set_item_shape(id: int, shape: Array[Shape3D])` | `void` | Sets the collision shapes for the item. |
| `get_item_metadata(id: int)` | `Variant` | Returns the metadata associated with the item. |
| `set_item_metadata(id: int, metadata: Variant)` | `void` | Sets the metadata for the item. |

---

## Example

```gdscript
# Create a new library
var lib = MeshLibrary.new()

# Load a mesh resource
var cube_mesh = preload("res://cube_mesh.tres")

# Add it to the library
var id = lib.add_item(cube_mesh, [], "Cube")

# Retrieve the mesh later
var retrieved = lib.get_item_mesh(id)

# Update the name
lib.set_item_name(id, "Large Cube")

# Add a collision shape
var shape = SphereShape3D.new()
shape.radius = 0.5
lib.set_item_shape(id, [shape])

# Attach custom data
lib.set_item_metadata(id, {"category": "geometric"})

# Enumerate all items
for i in range(lib.get_item_count()):
    print(lib.get_item_name(i))
```

---

## Notes

* The `id` is a zero‑based integer that can be used as a key in dictionaries or arrays.
* `item_shape` is an array because a single mesh can have multiple collision shapes.
* Metadata is stored as a generic `Variant`; you can store any data type that Godot can serialize.
* The `item_changed` signal allows editor tools or game logic to react when the library changes.

---