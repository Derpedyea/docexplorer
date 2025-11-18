**Using the MeshDataTool**

The `MeshDataTool` class in Godot allows you to access and manipulate the vertex, normal, UV, and index data of a mesh. Unlike the `ArrayMesh` and `SurfaceTool`, it does not generate geometry directly; instead it provides a convenient API for editing an existing mesh at runtime—useful for tessellation, simplification, deformation, or other dynamic modifications.

> **Why use `MeshDataTool`?**  
> • Read and write vertex data in a straightforward way.  
> • Iterate over faces, edges, and vertices.  
> • Compute normals, tangents, or perform other mesh‑related calculations.

---

## 1. Basic usage

```gdscript
var mesh : ArrayMesh = Mesh.new()          # your mesh source
var mdt : MeshDataTool = MeshDataTool.new()

# Load a surface (typically the first one)
if mdt.create_from_surface(mesh, 0) == OK:
    # Now you can query or modify vertices
    var vtx = mdt.get_vertex(0)
    # ...
```

### 1.1 Reading mesh data

| Method | Description |
|--------|-------------|
| `get_vertex(idx)` | Returns the position of vertex *idx* as a `Vector3`. |
| `get_normal(idx)` | Returns the normal of vertex *idx*. |
| `get_tangent(idx)` | Returns the tangent of vertex *idx*. |
| `get_uv(idx)` | Returns the UV coordinate of vertex *idx*. |
| `get_index(idx)` | Returns the index of face *idx* (three indices per face). |

### 1.2 Writing mesh data

| Method | Description |
|--------|-------------|
| `set_vertex(idx, pos)` | Sets the position of vertex *idx*. |
| `set_normal(idx, normal)` | Sets the normal of vertex *idx*. |
| `set_tangent(idx, tangent)` | Sets the tangent of vertex *idx*. |
| `set_uv(idx, uv)` | Sets the UV of vertex *idx*. |
| `set_index(face, idx, val)` | Sets the *idx*-th component of *face* (0,1,2). |

After modifying the data you must call `mesh = mdt.commit_to_surface(mesh, 0)` to write the changes back.

---

## 2. Common operations

### 2.1 Tessellating a quad

```gdscript
# Example: split each quad into two triangles
for face in range(mdt.get_face_count()):
    var v0 = mdt.get_vertex(mdt.get_face_vertex(face, 0))
    var v1 = mdt.get_vertex(mdt.get_face_vertex(face, 1))
    var v2 = mdt.get_vertex(mdt.get_face_vertex(face, 2))
    var v3 = mdt.get_vertex(mdt.get_face_vertex(face, 3))

    # remove original face
    mdt.remove_face(face)

    # add two new faces
    mdt.add_face([v0, v1, v2])
    mdt.add_face([v0, v2, v3])
```

### 2.2 Simplifying a mesh

A simple vertex‑count reduction example: iterate over all vertices and remove those that are too close to their neighbor.

```gdscript
var to_remove = []
for i in range(mdt.get_vertex_count()):
    if i + 1 < mdt.get_vertex_count():
        if mdt.get_vertex(i).distance_to(mdt.get_vertex(i+1)) < 0.01:
            to_remove.append(i)

for idx in to_remove.sorted().rev():   # remove from the end
    mdt.remove_vertex(idx)
```

### 2.3 Deforming a mesh

Apply a sinusoidal wave to a plane:

```gdscript
for i in range(mdt.get_vertex_count()):
    var pos = mdt.get_vertex(i)
    pos.y += sin(pos.x * 4.0 + OS.get_ticks_msec() / 500.0) * 0.2
    mdt.set_vertex(i, pos)
```

---

## 3. Things to keep in mind

* **Performance** – `MeshDataTool` copies data into CPU memory; large meshes can be expensive to load and modify.
* **Topology** – Removing vertices or faces changes indices, so you must be careful when iterating.
* **Normal calculation** – After significant topology changes call `mdt.calculate_normals()` (or `mdt.generate_normals()`) to update normals correctly.

---

## 4. Related tools

| Class | Purpose |
|-------|---------|
| `ArrayMesh` | Build a mesh from scratch using arrays. |
| `SurfaceTool` | More convenient, high‑level API for constructing a mesh. |
| `MeshDataTool` | Read/write and modify an existing mesh’s raw data. |

---

### Next steps

* [Using the SurfaceTool](surfacetool.html) – Learn how to build geometry from scratch.  
* [ArrayMesh](arraymesh.html) – Direct access to mesh data without intermediate tools.

---

**References**

* Godot documentation: <https://docs.godotengine.org/en/stable/tutorials/3d/procedural_geometry/meshdatatool.html>