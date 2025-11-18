# PlaneMesh

**Godot Engine Class Reference (stable)**

---

## Overview

`PlaneMesh` is a built‑in primitive mesh that represents a flat, rectangular surface. It is primarily used for quick geometry creation in the editor or for procedural generation in code.

### Inheritance

```
PlaneMesh
 └─ PrimitiveMesh
     └─ Mesh
         └─ Resource
             └─ RefCounted
                 └─ Object
```

### Subclasses

| Class | Purpose |
|-------|---------|
| **QuadMesh** | A special case of `PlaneMesh` that always creates a 2‑pixel wide grid, useful for UI elements and billboards. |

---

## Description

> **Class representing a planar PrimitiveMesh.**

A `PlaneMesh` generates vertices, normals, UVs and indices for a rectangular grid.  
It can be customized with size, subdivisions, and whether its faces are flipped.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **size** | `Vector2` | `(1, 1)` | Width and depth of the plane in local space. |
| **subdivisions** | `Vector2i` | `(1, 1)` | Number of grid subdivisions along each axis. |
| **flip_faces** | `bool` | `false` | If `true`, normals and vertex order are flipped so that the front side faces the opposite direction. |

> *All properties are exposed in the editor and can also be accessed or modified via GDScript or C#.*

---

## Methods

| Signature | Return | Description |
|-----------|--------|-------------|
| `func get_size() -> Vector2` | `Vector2` | Returns the current size of the plane. |
| `func set_size(size: Vector2) -> void` | `void` | Sets the width/depth of the plane. |
| `func get_subdivisions() -> Vector2i` | `Vector2i` | Returns the current subdivisions. |
| `func set_subdivisions(subdivisions: Vector2i) -> void` | `void` | Sets the number of grid subdivisions. |
| `func is_flip_faces() -> bool` | `bool` | Returns whether the faces are flipped. |
| `func set_flip_faces(flip: bool) -> void` | `void` | Flips the faces of the plane. |

> These methods are inherited from `PrimitiveMesh` and provide a programmatic API for manipulating the geometry.

---

## Signals

`PlaneMesh` does not define any custom signals.

---

## Example Usage

### GDScript

```gdscript
# Create a PlaneMesh with a custom size and subdivisions
var plane_mesh := PlaneMesh.new()
plane_mesh.size = Vector2(2, 3)
plane_mesh.subdivisions = Vector2i(10, 15)
plane_mesh.flip_faces = true

# Assign the mesh to a MeshInstance
var mesh_instance := MeshInstance3D.new()
mesh_instance.mesh = plane_mesh
add_child(mesh_instance)
```

### C#

```csharp
var planeMesh = new PlaneMesh
{
    Size = new Vector2(2, 3),
    Subdivisions = new Vector2I(10, 15),
    FlipFaces = true
};

var meshInstance = new MeshInstance3D
{
    Mesh = planeMesh
};
AddChild(meshInstance);
```

---

## Documentation References

- [PrimitiveMesh](class_primtive_mesh.html)
- [Mesh](class_mesh.html)
- [QuadMesh](class_quadmesh.html)

---

**Tip:**  
When creating large or highly subdivided planes in a scene, consider using a `QuadMesh` or a custom `ArrayMesh` to avoid generating unnecessary geometry.