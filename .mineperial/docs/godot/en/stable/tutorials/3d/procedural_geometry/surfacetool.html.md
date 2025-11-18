**Using the SurfaceTool**

The **SurfaceTool** class in Godot provides a convenient interface for creating geometry procedurally.  
It is similar to the `ImmediateMesh` class but offers a higher‑level API that makes it easier to build complex shapes from scratch.

---

## Overview

* **Set per‑vertex attributes** (position, normal, UV, color, etc.) one by one.
* **Choose a primitive** (triangles, lines, quads) to build the surface.
* **Build** the mesh into a `Mesh` object once all vertices and indices are added.
* **Upload** the mesh to a `MeshInstance` or other geometry‑display node.

---

## Basic Usage

```gdscript
var surf = SurfaceTool.new()
surf.begin(Mesh.PRIMITIVE_TRIANGLES)

// Add a vertex with normal, UV, and color
surf.set_normal(Vector3(0, 1, 0))
surf.set_uv(Vector2(0, 0))
surf.set_color(Color(1, 0, 0))
surf.add_vertex(Vector3(-1, 0, -1))

// … (add more vertices) …

surf.index(0)
surf.index(1)
surf.index(2)

var mesh = surf.commit()   # Returns an ArrayMesh
var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = mesh
```

### Steps

1. **Create** a `SurfaceTool` instance.
2. **Call** `begin()` with the primitive type.
3. For each vertex:
   - Set optional attributes (`set_normal()`, `set_uv()`, `set_color()`, etc.).
   - Add the vertex with `add_vertex()`.
4. **Index** the vertices with `index()` (for indexed primitives).
5. **Finish** with `commit()` to generate a usable mesh.

---

## Common Methods

| Method | Description |
|--------|-------------|
| `begin(primitive, material = null)` | Starts a new surface. |
| `add_vertex(pos)` | Adds a vertex position. |
| `set_normal(normal)` | Sets the current normal for subsequent vertices. |
| `set_uv(uv)` | Sets the current UV coordinate. |
| `set_color(color)` | Sets the current vertex color. |
| `index(idx)` | Adds an index to the current surface. |
| `commit()` | Finalizes the surface and returns the generated `Mesh`. |
| `create_from_array_mesh(mesh)` | Initializes the tool from an existing `ArrayMesh`. |
| `clear()` | Clears all current data. |

---

## Practical Example: Procedural Plane

```gdscript
func create_plane(size: float, segments: int) -> Mesh:
    var surf = SurfaceTool.new()
    surf.begin(Mesh.PRIMITIVE_TRIANGLES)

    var half = size / 2
    for x in range(segments + 1):
        for z in range(segments + 1):
            var vx = -half + x * size / segments
            var vz = -half + z * size / segments
            surf.set_uv(Vector2(x / segments, z / segments))
            surf.set_normal(Vector3.UP)
            surf.add_vertex(Vector3(vx, 0, vz))
    # Add indices (two triangles per quad)
    for x in range(segments):
        for z in range(segments):
            var i0 = x * (segments + 1) + z
            var i1 = i0 + 1
            var i2 = i0 + segments + 1
            var i3 = i2 + 1
            surf.index(i0); surf.index(i2); surf.index(i1)
            surf.index(i1); surf.index(i2); surf.index(i3)

    return surf.commit()
```

---

## Tips

* **Batch operations** – Use `begin()`/`commit()` only once per surface for efficiency.
* **Materials** – You can pass a material to `begin()` so the mesh uses it automatically.
* **Normals** – If you skip normals, Godot will generate them automatically when you commit.
* **UVs** – Useful for texturing; omit them if the mesh will be untextured.
* **Colors** – Per‑vertex colors allow simple shading without textures.

---

## Related Resources

* [Using ImmediateMesh](../immediatemesh.html)
* [MeshDataTool](../meshdatatool.html)

---