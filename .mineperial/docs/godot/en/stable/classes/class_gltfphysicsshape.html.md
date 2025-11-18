# GLTFPhysicsShape

**Inherits**: `Resource` → `RefCounted` → `Object`

Represents a physics shape as defined by the `OMI_physics_shape` or `OMI_collider` glTF extensions. This class is used internally by Godot’s GLTF importer to construct physics bodies from 3D model data.

---

## Overview

| Property | Type | Description |
|----------|------|-------------|
| `shape_type` | `int` | The type of the physics shape (e.g. box, sphere, convex hull). |
| `shape_data` | `Dictionary` | Detailed data for the shape (dimensions, points, etc.). |

> *Note:* The exact values for `shape_type` correspond to the enumerated types used by the GLTF importer. You can inspect the `shape_data` dictionary to obtain shape-specific parameters.

---

## Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `get_shape_type()` | – | `int` | Returns the numeric identifier of the shape type. |
| `get_shape_data()` | – | `Dictionary` | Returns the shape's detailed data. |
| `set_shape_data(dict data)` | `data : Dictionary` | – | Sets the shape data dictionary. |

> **Usage Example (GDScript)**
> ```gdscript
> var physics_shape = load("res://my_shape.glb").get_node("PhysicsShape")
> var type = physics_shape.get_shape_type()
> var data = physics_shape.get_shape_data()
> print("Shape type: ", type)
> ```

---

## Properties

```gdscript
# Read‑only
export(int) var shape_type
export(Dictionary) var shape_data
```

- **`shape_type`** – Enumerated value indicating whether the shape is a box, sphere, capsule, or a custom convex mesh.
- **`shape_data`** – Dictionary containing parameters such as `size`, `radius`, or an array of vertices for convex shapes.

---

## Related Classes

- **`GLTFPhysicsBody`** – Represents a physics body that can contain one or more `GLTFPhysicsShape` objects.
- **`GLTFImporter`** – Handles loading of GLTF files and conversion of embedded physics extensions into Godot resources.

---

## Practical Tips

* **When importing a glTF file**: The importer automatically generates `GLTFPhysicsShape` resources for any colliders defined in the file. These can be inspected in the Godot editor under the “Import” tab.
* **Custom shapes**: For advanced collision setups, you can manually construct a `GLTFPhysicsShape` in code, set its `shape_type`, and populate `shape_data` with your own vertex arrays.

---

> For more detailed information, including the full list of available shape types and how to parse the `shape_data` dictionary, refer to the official Godot documentation or the source code of the GLTF importer.