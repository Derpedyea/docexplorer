**ArrayMesh – Godot Engine (stable)**  
*Documentation – Class Reference*

---

# ArrayMesh

`ArrayMesh` is a mesh type that allows you to construct a surface from raw arrays of vertex data.  
It inherits from:

```
Object → RefCounted → Resource → Mesh
```

> **Description**  
> The `ArrayMesh` class is used to create a mesh by specifying arrays that hold vertex
> data (positions, normals, UVs, colors, etc.). Once created, an `ArrayMesh` can be
> assigned to a `MeshInstance3D` (or `MeshInstance`) and rendered by Godot.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `material` | `Material` | Material assigned to the mesh surface. |
| `surface_count` | `int` | Number of surfaces the mesh contains. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `changed` | – | Emitted whenever the mesh data changes. |

---

## Methods

### `create_from_arrays(array_index: int, arrays: Array, format: int = 0, flags: int = 0) → void`

Builds a surface from the given arrays.

* `array_index`: Index of the surface to create.
* `arrays`: Array of vertex data. The array order is defined by `ArrayMesh::ArrayType`.
* `format`: Optional bitmask for custom vertex format.
* `flags`: Optional surface flags (e.g., `RESTART`, `CULL_FRONT`).

**Example**

```gdscript
var mesh = ArrayMesh.new()
var vertices = PoolVector3Array([Vector3(0,0,0), Vector3(1,0,0), Vector3(0,1,0)])
var indices = PoolIntArray([0,1,2])

mesh.create_from_arrays(0, [vertices, PoolIntArray()])
```

### `get_surface_count() → int`

Returns the number of surfaces in this mesh.

### `get_surface_material(surface_index: int) → Material`

Returns the material assigned to the surface.

### `set_surface_material(surface_index: int, material: Material) → void`

Assigns a material to a surface.

### `get_surface_format(surface_index: int) → int`

Returns the vertex format of the surface.

### `set_surface_format(surface_index: int, format: int) → void`

Sets a custom format for the surface.

### `surface_get_array_index(array_index: int) → int`

Gets the index of the surface.

### `surface_get_arrays(surface_index: int) → Array`

Returns the arrays of vertex data for the surface.

### `surface_set_arrays(surface_index: int, arrays: Array) → void`

Sets vertex arrays for a surface.

### `surface_set_material(surface_index: int, material: Material) → void`

Sets the material for a surface.

### `add_surface_from_arrays(format: int, arrays: Array, flags: int = 0) → int`

Adds a new surface from arrays and returns the new surface index.

### `surface_remove(surface_index: int) → void`

Removes a surface.

### `clear_surfaces() → void`

Deletes all surfaces.

### `get_name() → String`

Returns the name of the mesh resource.

### `set_name(name: String) → void`

Sets a name for the mesh resource.

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `ARRAY_VERTEX` | 0 | Vertex positions. |
| `ARRAY_NORMAL` | 1 | Vertex normals. |
| `ARRAY_TANGENT` | 2 | Vertex tangents. |
| `ARRAY_COLOR` | 3 | Vertex colors. |
| `ARRAY_TEX_UV` | 4 | Primary UV coordinates. |
| `ARRAY_TEX_UV2` | 5 | Secondary UV coordinates. |
| `ARRAY_BONES` | 6 | Bone indices for skinning. |
| `ARRAY_WEIGHTS` | 7 | Bone weights for skinning. |
| `ARRAY_INDEX` | 8 | Indices for indexed drawing. |
| `ARRAY_FORMAT_MAX` | 9 | Maximum format index. |

---

## Usage Example

```gdscript
# Create an ArrayMesh with a single triangle
var mesh = ArrayMesh.new()

var vertices = PoolVector3Array([
    Vector3(0, 0, 0),
    Vector3(1, 0, 0),
    Vector3(0, 1, 0)
])

var indices = PoolIntArray([0, 1, 2])

var arrays = [vertices, PoolIntArray()]
mesh.add_surface_from_arrays(ArrayMesh.ARRAY_FORMAT_VERTEX, arrays)

var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = mesh
```

---

### References

* [Godot Docs – Class Reference](https://docs.godotengine.org/en/stable/classes/class_arraymesh.html)  
* [Mesh](https://docs.godotengine.org/en/stable/classes/class_mesh.html)  
* [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

---

**Note:** For more details about the array format and flags, see the `ArrayMesh.ArrayType` enumeration and the `Mesh.Surface` constants in the documentation.