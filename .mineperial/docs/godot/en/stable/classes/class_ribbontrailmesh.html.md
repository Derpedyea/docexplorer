**RibbonTrailMesh**

> **Inheritance**  
> `PrimitiveMesh < Mesh < Resource < RefCounted < Object`

## Description
`RibbonTrailMesh` represents a straight ribbon‑shaped primitive mesh with variable width.  
It is commonly used to create particle trails, smoke, or any object that looks like a stretched ribbon along a path.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | `float` | `1.0` | Width of the ribbon at the start point. |
| `length` | `float` | `1.0` | Length of the ribbon along its axis. |
| `subdivisions` | `int` | `16` | Number of segments along the length. |
| `material` | `Material` | `null` | Material applied to the mesh. |

> *All properties can be edited in the Godot editor or set programmatically via the API.*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_width(float width)` | Sets the start width of the ribbon. |
| `get_width()` | Returns the current width. |
| `set_length(float length)` | Sets the total length of the ribbon. |
| `get_length()` | Returns the current length. |
| `set_subdivisions(int count)` | Sets the number of subdivisions. |
| `get_subdivisions()` | Returns the current subdivision count. |
| `set_material(Material material)` | Assigns a material to the mesh. |
| `get_material()` | Retrieves the assigned material. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `mesh_updated()` | None | Emitted when the ribbon geometry is regenerated. |

---

## Usage Example (GDScript)

```gdscript
var trail = RibbonTrailMesh.new()
trail.width = 2.0
trail.length = 10.0
trail.subdivisions = 32
trail.material = preload("res://materials/trail.tres")

var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = trail
add_child(mesh_instance)
```

---

## References

- [PrimitiveMesh](https://docs.godotengine.org/en/stable/classes/class_primitivesmesh.html)  
- [Mesh](https://docs.godotengine.org/en/stable/classes/class_mesh.html)  
- [Material](https://docs.godotengine.org/en/stable/classes/class_material.html)  

---