**PointMesh** – Godot Engine (stable) documentation  
=====================================================

> A `PointMesh` is a primitive mesh composed of a single point.  
> Instead of relying on a `MeshInstance3D` to display a single vertex, this mesh type provides an efficient way to create point‑based geometry.

Inheritance
------------

```
class PointMesh
    └─ PrimitiveMesh
```

### Overview

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `0.1` | The radius of the point. This defines the visual size of the point when rendered. |

### Methods

| Method | Description |
|--------|-------------|
| `set_radius(float radius)` | Sets the radius of the point. |
| `get_radius() -> float` | Returns the current radius. |
| `get_vertex_count() -> int` | Returns `1` – the point mesh contains only one vertex. |
| `get_aabb() -> AABB` | Returns the axis‑aligned bounding box for the point. |

### Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the mesh data changes. |

### Example

```gdscript
var point_mesh = PointMesh.new()
point_mesh.radius = 0.2

var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = point_mesh
add_child(mesh_instance)
```

> The above script creates a point mesh with a radius of `0.2`, attaches it to a `MeshInstance3D`, and adds it to the current scene.

---

#### See also

- [PrimitiveMesh](../class_primitivesmesh.html)  
- [Mesh](../class_mesh.html)  
- [MeshInstance3D](../class_meshinstance3d.html)

--- 

*(This page is part of the Godot Engine class reference documentation.)*