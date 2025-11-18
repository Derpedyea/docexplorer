**BoxMesh**  
==============

*Inheritance hierarchy:* `PrimitiveMesh` → `Mesh` → `Resource` → `RefCounted` → `Object`  

---

### Description
`BoxMesh` generates an axis‑aligned box primitive mesh.  
The box’s UV layout is laid out so that each face uses a different portion of the UV space.  
You can modify the size of the box by setting its `size` property, which accepts a `Vector3` that represents the width, height and depth of the box.

---

### Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `Vector3` | `(1, 1, 1)` | The dimensions of the box along the X, Y and Z axes. |

---

### Methods
| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_size(size: Vector3)` | `void` | `size` | Sets the dimensions of the box. |
| `get_size() -> Vector3` | `Vector3` | – | Returns the current dimensions of the box. |
| `get_mesh()` | `ArrayMesh` | – | Returns a low‑level `ArrayMesh` representation of the primitive. (Inherited from `PrimitiveMesh`). |

> **Note:** `BoxMesh` is a procedural mesh; you can use it directly in a `MeshInstance3D` or any node that accepts a `Mesh` resource.

---

### Signals
_None_

---

### Usage example (GDScript)

```gdscript
# Create a box with custom size
var box_mesh := BoxMesh.new()
box_mesh.size = Vector3(2, 1, 3)

var mesh_instance := MeshInstance3D.new()
mesh_instance.mesh = box_mesh
add_child(mesh_instance)
```

---

### API Reference

*All members listed above are exposed in the class reference page.  
For detailed documentation on properties, methods, and inheritance, refer to the official Godot Engine documentation.*