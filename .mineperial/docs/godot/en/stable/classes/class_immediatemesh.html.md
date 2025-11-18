**ImmediateMesh**  
*Godot Engine documentation*  

> A mesh type optimized for creating geometry manually, similar to OpenGL 1.x immediates.  
> Unlike `ArrayMesh`, you build the geometry step‑by‑step in code by issuing drawing commands (begin/end, vertex attributes, etc.). The mesh is not intended for static geometry that will be reused many times – for that use an `ArrayMesh` or `SurfaceTool`.  

---

## Inheritance

```
Object
 └─ RefCounted
    └─ Resource
       └─ Mesh
          └─ ImmediateMesh
```

---

## Basic usage

```gdscript
var im = ImmediateMesh.new()
im.begin(Mesh.PRIMITIVE_TRIANGLES, null)   # start a new surface
im.set_uv(Vector2(0,0))
im.set_normal(Vector3(0,0,1))
im.add_vertex(Vector3(0,0,0))

im.set_uv(Vector2(1,0))
im.set_normal(Vector3(0,0,1))
im.add_vertex(Vector3(1,0,0))

im.set_uv(Vector2(0,1))
im.set_normal(Vector3(0,0,1))
im.add_vertex(Vector3(0,1,0))

im.end()                                   # finish the surface
```

Attach the mesh to a `MeshInstance3D` (or `MeshInstance` in 2D) to render it.

---

## Available methods

| Method | Description |
|--------|-------------|
| **new()** | Creates a new `ImmediateMesh`. |
| **begin(primitive: int, texture: Texture2D = null)** | Starts a new surface. `primitive` can be one of the `Mesh.PRIMITIVE_*` constants. |
| **end()** | Ends the current surface. |
| **add_vertex(vertex: Vector3)** | Adds a vertex to the current surface. |
| **set_normal(normal: Vector3)** | Sets the normal for the next vertex. |
| **set_tangent(tangent: Plane)** | Sets the tangent for the next vertex. |
| **set_binormal(binormal: Plane)** | Sets the binormal for the next vertex. |
| **set_uv(uv: Vector2)** | Sets the UV coordinate for the next vertex. |
| **set_uv2(uv2: Vector2)** | Sets a secondary UV coordinate. |
| **set_color(color: Color)** | Sets the vertex color. |
| **set_skeleton_bone_index(bone_index: int)** | Sets the bone index for the vertex (used in skinned meshes). |
| **set_skin_index(skin_index: int)** | Sets the skin index for the vertex. |
| **set_custom_attribute(index: int, value: Variant)** | Sets a custom vertex attribute. |
| **set_custom_index(index: int, value: int)** | Sets a custom index for the vertex. |
| **set_custom_array(array: Array)** | Sets a custom array for the vertex. |
| **get_surface_count() → int** | Returns the number of surfaces in the mesh. |
| **get_surface_material(surface: int) → Material** | Retrieves the material of a surface. |
| **surface_set_material(surface: int, material: Material)** | Assigns a material to a surface. |
| **surface_get_format(surface: int) → int** | Returns the format flags of a surface. |
| **surface_set_format(surface: int, format: int)** | Sets the format flags. |
| **surface_set_array(surface: int, array: Array)** | Replaces a surface’s array. |
| **surface_get_array(surface: int) → Array** | Returns the surface array. |
| **surface_get_array_index_offset(surface: int) → int** | Returns the index offset. |
| **surface_set_array_index_offset(surface: int, offset: int)** | Sets the index offset. |
| **get_aabb() → AABB** | Returns an axis‑aligned bounding box. |
| **get_bone_count() → int** | Number of bones. |
| **get_bone_name(bone: int) → StringName** | Name of a bone. |
| **set_bone_pose(bone: int, pose: Transform3D)** | Sets the pose of a bone. |

> **Note**: The `ImmediateMesh` is a *runtime* mesh. Once you `end()` a surface, you can no longer modify it until you start a new one.

---

## Common pitfalls

* **Performance** – `ImmediateMesh` is slow for large or frequently modified geometry. For dynamic but non‑immediate use, prefer `ArrayMesh` or `SurfaceTool` and update them in bulk.
* **Memory** – Each vertex is stored as a separate `PoolVector` entry. Avoid creating too many small surfaces.
* **Thread‑safety** – Meshes are not thread‑safe; perform all operations on the main thread unless you are using a dedicated `Thread` with proper locking.

---

## Related classes

- **ArrayMesh** – more efficient for static or large meshes.  
- **SurfaceTool** – helper for building `ArrayMesh` or `ImmediateMesh`.  
- **MeshInstance3D** – node that displays a `Mesh`.  
- **Skeleton3D** – for skinned meshes.  

---

## Example: Procedural quad

```gdscript
func create_quad(size: float = 1.0) -> ImmediateMesh:
    var mesh = ImmediateMesh.new()
    mesh.begin(Mesh.PRIMITIVE_TRIANGLES, null)

    var half = size * 0.5
    var normal = Vector3(0, 0, 1)

    # Vertex order: bottom left, top left, top right, bottom right
    var verts = [
        Vector3(-half, -half, 0), Vector3(-half, half, 0),
        Vector3(half, half, 0),   Vector3(half, -half, 0)
    ]
    var uvs = [
        Vector2(0, 1), Vector2(0, 0),
        Vector2(1, 0), Vector2(1, 1)
    ]

    for i in range(4):
        mesh.set_normal(normal)
        mesh.set_uv(uvs[i])
        mesh.add_vertex(verts[i])

    mesh.end()
    return mesh
```

Use it:

```gdscript
var quad = create_quad(2.0)
var instance = MeshInstance3D.new()
instance.mesh = quad
add_child(instance)
```

---

## Resources

* [Godot docs: `ImmediateMesh`](https://docs.godotengine.org/en/stable/classes/class_immediatemesh.html)  
* [Godot docs: `Mesh`](https://docs.godotengine.org/en/stable/classes/class_mesh.html)  
* [Godot docs: `ArrayMesh`](https://docs.godotengine.org/en/stable/classes/class_arraymesh.html)  

---