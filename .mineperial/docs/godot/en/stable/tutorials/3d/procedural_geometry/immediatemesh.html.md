**Using ImmediateMesh** – Godot Engine (stable) documentation

---

The `ImmediateMesh` class provides a convenient way to create dynamic geometry at runtime using an OpenGL‑style API. It is ideal for meshes that need to be updated every frame, such as simple procedural shapes or visual effects.

---

### Table of Contents
1. [What is ImmediateMesh?](#what-is-immediatemesh)
2. [Creating an ImmediateMesh](#creating-an-immediatemesh)
3. [Adding Geometry](#adding-geometry)
4. [Using with a MeshInstance](#using-with-a-meshinstance)
5. [Performance Tips](#performance-tips)
6. [Example: Procedural Grid](#example-procedural-grid)
7. [References](#references)

---

## What is ImmediateMesh?
`ImmediateMesh` is a subclass of `Mesh` that lets you build geometry by issuing drawing commands in code, similar to the deprecated `Immediate Mode` in OpenGL. Unlike `SurfaceTool` or `ArrayMesh`, you do not need to store vertex arrays; instead you call methods such as `begin()`, `vertex()`, `normal()`, `color()`, and `end()` to define the mesh on the fly.

```gdscript
var im = ImmediateMesh.new()
im.begin(Mesh.PRIMITIVE_TRIANGLES)
im.color(Color(1, 0, 0))
im.vertex(Vector3(0, 0, 0))
im.vertex(Vector3(1, 0, 0))
im.vertex(Vector3(0, 1, 0))
im.end()
```

---

## Creating an ImmediateMesh
```gdscript
var immediate = ImmediateMesh.new()
var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = immediate
add_child(mesh_instance)
```

* `new()` – creates an empty `ImmediateMesh` object.
* `mesh` – assign it to a `MeshInstance3D` (or `MeshInstance` in 2D) to render it.

---

## Adding Geometry
1. **Begin** – specify the primitive type (`Mesh.PRIMITIVE_TRIANGLES`, `Mesh.PRIMITIVE_LINES`, etc.)  
2. **Set attributes** – `color()`, `normal()`, `uv()`, etc.  
3. **Define vertices** – `vertex()`.  
4. **End** – finalize the primitive.

```gdscript
immediate.begin(Mesh.PRIMITIVE_TRIANGLES)
immediate.color(Color(1, 0, 0))
immediate.vertex(Vector3(0, 0, 0))
immediate.vertex(Vector3(1, 0, 0))
immediate.vertex(Vector3(0, 1, 0))
immediate.end()
```

You can call `immediate.begin()` multiple times to build complex meshes with different primitives.

---

## Using with a MeshInstance
Once the `ImmediateMesh` is constructed, you can manipulate it each frame:

```gdscript
func _process(delta):
    immediate.clear()   # Optional: clear previous data
    immediate.begin(Mesh.PRIMITIVE_LINES)
    # … add geometry …
    immediate.end()
```

Because `ImmediateMesh` is dynamic, you should rebuild it only when necessary to avoid unnecessary CPU overhead.

---

## Performance Tips
* **Avoid per-frame allocation** – create the `ImmediateMesh` once and reuse it.
* **Batch vertices** – use a single `begin()`/`end()` block for many vertices to reduce state changes.
* **Limit complexity** – keep the number of vertices low; `ArrayMesh` or `SurfaceTool` are better for static, high‑poly meshes.
* **Use `clear()` sparingly** – if you need to modify the mesh, `clear()` resets all data; use `set_surface_tool()` or `ArrayMesh` for more efficient updates.

---

## Example: Procedural Grid
```gdscript
var mesh = ImmediateMesh.new()
var instance = MeshInstance3D.new()
instance.mesh = mesh
add_child(instance)

func _ready():
    build_grid(10, 10)

func build_grid(cols: int, rows: int):
    mesh.clear()
    mesh.begin(Mesh.PRIMITIVE_LINES)
    for x in range(cols):
        for y in range(rows):
            var start = Vector3(x, 0, y)
            var end_x = Vector3(x+1, 0, y)
            var end_z = Vector3(x, 0, y+1)
            mesh.color(Color(1, 1, 1))
            mesh.vertex(start)
            mesh.vertex(end_x)
            mesh.vertex(start)
            mesh.vertex(end_z)
    mesh.end()
```

---

## References

* [Godot Documentation – ImmediateMesh](https://docs.godotengine.org/en/stable/classes/class_immediateshader.html)
* [Godot Docs – SurfaceTool](https://docs.godotengine.org/en/stable/tutorials/3d/procedural_geometry/surfacetool.html)

---