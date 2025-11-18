**Note:** The supplied HTML is incomplete; it contains only the page header and the side‑navigation menu but not the actual content of the `Mesh` class reference (properties, methods, signals, etc.). Therefore, this Markdown is a simplified representation of what a typical class‑reference page would contain, based on the visible metadata and the known structure of Godot’s documentation.

---

# Mesh

**Inherits:** `Resource` → `RefCounted` → `Object`  
**Inherited By:** `ArrayMesh`, `ImmediateMesh`, `PlaceholderMesh`, `PrimitiveMesh`

> A *Mesh* is a type of `Resource` that contains vertex array–based geometry.  
> It represents a piece of 3D geometry that can be rendered, stored, and manipulated within the engine.  

---

## Description

Meshes form the core of 3D rendering in Godot. They store vertex data, normals, UVs, and other attributes in *surface* blocks. A single `Mesh` can contain multiple surfaces, allowing for multi‑material or multi‑render‑layer geometry.  
Typical use cases include:

- Static geometry (e.g. walls, floors).
- Procedurally generated geometry (via `ArrayMesh` or `ImmediateMesh`).
- Placeholder geometry for editor preview.
- Primitive shapes (boxes, spheres, etc.) via `PrimitiveMesh`.

---

## Surface Data

A surface is an array of data that defines one part of a mesh. Each surface can have:

| Type | Description |
|------|-------------|
| `ARRAY_VERTEX` | 3‑D vertex positions. |
| `ARRAY_NORMAL` | Surface normals. |
| `ARRAY_TANGENT` | Tangent vectors. |
| `ARRAY_COLOR` | Vertex colors. |
| `ARRAY_TEX_UV` | Primary UV coordinates. |
| `ARRAY_TEX_UV2` | Secondary UV coordinates. |
| `ARRAY_BONES` | Bone indices (for skinning). |
| `ARRAY_WEIGHTS` | Bone weights. |
| `ARRAY_INDEX` | Index buffer. |
| `ARRAY_MESH` | Meshes used for sub‑meshes. |

Surface format is defined by the constant `ARRAY_FLAG_USE_3D_NORMALS`, `ARRAY_FLAG_USE_2D_UV`, etc.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_surface_from_arrays` | `void add_surface_from_arrays(int primitive, PoolIntArray arrays)` | Adds a new surface. |
| `clear_surfaces` | `void clear_surfaces()` | Removes all surfaces. |
| `create_local_mesh` | `Mesh create_local_mesh()` | Returns a copy of the mesh that can be modified without affecting the original. |
| `get_surface_count` | `int get_surface_count()` | Returns the number of surfaces. |
| `get_surface_material` | `Material get_surface_material(int index)` | Gets the material assigned to a surface. |
| `set_surface_material` | `void set_surface_material(int index, Material material)` | Assigns a material to a surface. |
| `get_mesh` | `Mesh get_mesh()` | Returns the underlying `Mesh` data (used internally). |
| `resource_changed` | `void resource_changed()` | Emits when the resource is altered. |
| ... | *See full list in the reference.* | |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | `String` | `""` | The human‑readable name of the mesh. |
| `surface_count` | `int` | `0` | Number of surfaces. |
| `primitive_type` | `int` | `Mesh.PRIMITIVE_TRIANGLES` | Default primitive type for new surfaces. |
| ... | *see full list* | | |

---

## Signals

- `changed()` – Emitted when any part of the mesh data changes.

---

## Example (C++)

```cpp
ArrayMesh *mesh = memnew(ArrayMesh);
Array surface_arrays;

// Populate arrays (vertices, normals, etc.)
surface_arrays.resize(ArrayMesh::ARRAY_MAX);
surface_arrays[ArrayMesh::ARRAY_VERTEX] = PoolVector3Array(vertices);
surface_arrays[ArrayMesh::ARRAY_NORMAL] = PoolVector3Array(normals);
surface_arrays[ArrayMesh::ARRAY_INDEX]  = PoolIntArray(indices);

mesh->add_surface_from_arrays(Mesh::PRIMITIVE_TRIANGLES, surface_arrays);
```

---

## Resources

- [ArrayMesh](../classes/class_arraymesh.html) – Dynamically build meshes.
- [ImmediateMesh](../classes/class_immediatemesh.html) – Runtime procedural drawing.
- [PrimitiveMesh](../classes/class_primitivemesh.html) – Built‑in geometric primitives.
- [MeshLibrary](../classes/class_meshlibrary.html) – Store multiple meshes for reuse.

---

> **Note:** For full API details, including all properties, methods, constants, and signals, refer to the official Godot 4 class reference page.

---