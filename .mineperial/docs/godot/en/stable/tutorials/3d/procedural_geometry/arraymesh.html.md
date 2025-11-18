**Using the ArrayMesh**  
---  

*This tutorial explains how to create a procedural 3D geometry in Godot by building an `ArrayMesh` with the `add_surface_from_arrays()` function. The tutorial walks through the required parameters, shows how to create vertex and index arrays, and provides an example script that generates a simple cube.*

---

## 1. Introduction

When working with procedural geometry, Godot’s `ArrayMesh` class is the most flexible way to define custom meshes in code. The core operation is `add_surface_from_arrays()`, which takes a set of arrays describing vertices, normals, UVs, colors, indices, and more.

## 2. Building an ArrayMesh

### 2.1 The `add_surface_from_arrays()` method

```gdscript
mesh.add_surface_from_arrays(
    primitive,
    arrays,
    blend_shapes = PoolStringArray(),
    material = null,
    compress = true
)
```

| Parameter | Description |
|-----------|-------------|
| `primitive` | `Mesh.PRIMITIVE_TRIANGLES`, `PRIMITIVE_LINES`, etc. |
| `arrays` | `Array` containing `ARRAY_VERTEX`, `ARRAY_NORMAL`, `ARRAY_TEX_UV`, etc. |
| `blend_shapes` | Optional blend shape names. |
| `material` | Optional material for the surface. |
| `compress` | If `true`, the mesh data will be compressed in the engine. |

### 2.2 Example: Creating a Cube

```gdscript
var cube = ArrayMesh.new()
var vertices = PoolVector3Array([
    Vector3(-1, -1, -1),
    Vector3( 1, -1, -1),
    Vector3( 1,  1, -1),
    Vector3(-1,  1, -1),
    Vector3(-1, -1,  1),
    Vector3( 1, -1,  1),
    Vector3( 1,  1,  1),
    Vector3(-1,  1,  1)
])

var indices = PoolIntArray([
    0, 1, 2, 2, 3, 0,      # Back
    4, 5, 6, 6, 7, 4,      # Front
    0, 4, 7, 7, 3, 0,      # Left
    1, 5, 6, 6, 2, 1,      # Right
    3, 2, 6, 6, 7, 3,      # Top
    0, 1, 5, 5, 4, 0       # Bottom
])

var arrays = []
arrays.resize(ArrayMesh.ARRAY_MAX)
arrays[ArrayMesh.ARRAY_VERTEX] = vertices
arrays[ArrayMesh.ARRAY_INDEX] = indices

cube.add_surface_from_arrays(ArrayMesh.PRIMITIVE_TRIANGLES, arrays)
```

Attach this mesh to a `MeshInstance` and you will see a procedural cube.

## 3. Adding Materials

You can assign a material to the surface:

```gdscript
var mat = SpatialMaterial.new()
mat.albedo_color = Color(1, 0, 0)
cube.surface_set_material(0, mat)
```

## 4. Working with Vertex Attributes

`ArrayMesh` supports several vertex attributes:

- `ARRAY_VERTEX` – positions
- `ARRAY_NORMAL` – normals
- `ARRAY_TANGENT` – tangents
- `ARRAY_COLOR` – vertex colors
- `ARRAY_TEX_UV`, `ARRAY_TEX_UV2` – UV coordinates
- `ARRAY_BONES`, `ARRAY_WEIGHTS`, `ARRAY_INDICES` – skinning
- `ARRAY_INDEX` – index buffer

Each attribute is a `PoolVector*Array`. Only the attributes you fill will be used.

## 5. Updating Mesh Data

If you need to modify a mesh after creation, use:

```gdscript
var surface = mesh.get_surface_count()
var arrays = mesh.surface_get_arrays(surface)
# modify arrays[ArrayMesh.ARRAY_VERTEX] etc.
mesh.surface_update_region(surface, 0, arrays[ArrayMesh.ARRAY_VERTEX].size(), arrays)
```

## 6. Performance Tips

- Keep vertex data in `PoolVector` arrays to reduce memory usage.
- Call `mesh.build()` only when all surfaces are added; it performs optimization and compression.
- Use `ArrayMesh.ARRAY_MAX` to allocate the array and assign only the needed indices.

## 7. Further Reading

- [Using the MeshDataTool](https://docs.godotengine.org/en/stable/tutorials/3d/procedural_geometry/meshdatatool.html) – manipulating meshes at a lower level.
- [Procedural Geometry](https://docs.godotengine.org/en/stable/tutorials/3d/procedural_geometry/index.html) – overview of generating geometry programmatically.