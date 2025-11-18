# CylinderMesh

**Godot Engine Documentation – Stable Version**

> Class representing a cylindrical `PrimitiveMesh`.  
> This class can be used to create and manipulate a mesh that has the shape of a cylinder.

---

## Inheritance

```
PrimitiveMesh
 └─ Mesh
   └─ Resource
     └─ RefCounted
       └─ Object
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **height** | `float` | `2.0` | The height of the cylinder. |
| **radius** | `float` | `1.0` | The radius of the cylinder. |
| **radial_segments** | `int` | `16` | Number of segments around the cylinder’s circumference. |
| **rings** | `int` | `1` | Number of rings along the height. |
| **smooth_faces** | `bool` | `true` | Whether the faces are smoothed. |
| **generate_uv** | `bool` | `true` | Whether to generate UVs for the mesh. |

> **Note:** All properties are exported, so they can be edited in the inspector and persisted in scenes.

---

## Methods

### `set_height(float height)`
Set the height of the cylinder.

### `get_height() -> float`
Returns the current height.

### `set_radius(float radius)`
Set the radius of the cylinder.

### `get_radius() -> float`
Returns the current radius.

### `set_radial_segments(int segments)`
Set the number of radial segments.

### `get_radial_segments() -> int`
Returns the number of radial segments.

### `set_rings(int rings)`
Set the number of rings along the height.

### `get_rings() -> int`
Returns the number of rings.

### `set_smooth_faces(bool smooth)`
Enable or disable face smoothing.

### `is_smooth_faces() -> bool`
Check whether smoothing is enabled.

### `set_generate_uv(bool generate)`
Enable or disable UV generation.

### `is_generate_uv() -> bool`
Check whether UVs are generated.

### `generate_mesh() -> void`
Rebuilds the mesh from the current properties.  
This method is automatically called when a property changes.

---

## Signals

None.

---

## Usage Example

```gdscript
var cylinder = CylinderMesh.new()
cylinder.height = 3.0
cylinder.radius = 1.5
cylinder.radial_segments = 32
cylinder.rings = 4

var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = cylinder
add_child(mesh_instance)
```

---

## Related Classes

- **CylinderShape3D** – Physics shape that matches this mesh.
- **MeshInstance3D** – Node that can render any `Mesh` resource, including `CylinderMesh`.
- **SurfaceTool** – Low‑level tool for generating custom cylindrical geometry.

---

## See Also

- [PrimitiveMesh](https://docs.godotengine.org/en/stable/classes/class_primitivemesh.html)
- [Mesh](https://docs.godotengine.org/en/stable/classes/class_mesh.html)
- [SurfaceTool](https://docs.godotengine.org/en/stable/classes/class_surfacetool.html)

---