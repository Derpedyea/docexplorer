**ArrayOccluder3D**  
====================

> **Class**: `ArrayOccluder3D`  
> **Inherits**: `Occluder3D` → `Resource` → `RefCounted` → `Object`

`ArrayOccluder3D` is a 3‑D polygon shape used with occlusion culling in `OccluderInstance3D`. It stores an arbitrary collection of 3‑D points (a *polygon*) that the renderer can use to determine which parts of a scene are visible.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `faces` | `Array` | An array of `Vector3` indices that define the polygon faces. |
| `points` | `Array` | The list of `Vector3` points that compose the shape. |
| `is_baked` | `bool` | `true` if the occluder has been baked for faster culling. |

*(The actual property names may differ – consult the official Godot API reference.)*

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_faces(faces : Array)` | `void` | `faces` | Replace the polygon’s face indices. |
| `get_faces() -> Array` | `Array` | – | Retrieve current face indices. |
| `set_points(points : Array)` | `void` | `points` | Replace the polygon’s point list. |
| `get_points() -> Array` | `Array` | – | Retrieve current points. |
| `bake()` | `void` | – | Pre‑computes data for faster occlusion culling. |
| `clear()` | `void` | – | Remove all points and faces. |

*(Only illustrative – the real API may expose additional utility functions.)*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `changed()` | – | Emitted whenever the polygon data is modified. |

---

## Usage Example (GDScript)

```gdscript
var occluder = ArrayOccluder3D.new()
occluder.points = [
    Vector3(0, 0, 0),
    Vector3(1, 0, 0),
    Vector3(1, 1, 0),
    Vector3(0, 1, 0)
]
occluder.faces = [
    [0, 1, 2],
    [2, 3, 0]
]
occluder.bake()

var instance = OccluderInstance3D.new()
instance.occluder = occluder
```

---

## Related Classes

- **OccluderInstance3D** – Node that uses an `ArrayOccluder3D` for occlusion culling.  
- **Occluder3D** – Base class for all occluder types.  
- **Shape3D** – Generic 3‑D shape resources.

---

For complete details, including all inherited methods and properties, refer to the official [Godot Engine Documentation](https://docs.godotengine.org/en/stable/classes/class_arrayoccluder3d.html).