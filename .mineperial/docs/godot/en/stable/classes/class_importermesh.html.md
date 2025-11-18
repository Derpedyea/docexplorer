**ImporterMesh**  
*Godot Engine – Class Reference*  

> **Inheritance**  
> `ImporterMesh` → `Resource` → `RefCounted` → `Object`

> **Description**  
> `ImporterMesh` is a type of `Resource` that contains vertex‑array‑based geometry during the import process. It is analogous to `ArrayMesh`, but is intended for use only while an external asset is being imported into the engine.

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mesh_name` | `String` | `""` | The name of the mesh, as supplied by the importer. |

> *Note:* All properties are read‑only during import.

---

## Methods

| Method | Signature | Return Type | Description |
|--------|------------|-------------|-------------|
| `get_surface_count()` | `int` | | Returns the number of surfaces stored in the mesh. |
| `get_surface_name(int index)` | `String` | | Returns the name of the surface at the given *index*. |
| `get_surface_arrays(int index)` | `Array` | | Returns the `Array` of vertex data for the surface *index* (vertices, normals, UVs, etc.). |
| `get_surface_material(int index)` | `Material` | | Returns the `Material` assigned to surface *index*. |
| `get_surface_lod(int index)` | `int` | | Returns the level‑of‑detail value for the surface *index*. |
| `get_surface_skeleton(int index)` | `int` | | Returns the skeleton index bound to the surface *index*, if any. |
| `get_surface_lod_range(int index)` | `int` | | Returns the LOD range for the surface *index*. |
| `get_surface_meta(int index, String key)` | `Variant` | | Returns the value of a custom metadata entry for the surface *index* identified by *key*. |
| `get_surface_meta_keys(int index)` | `Array[String]` | | Returns an array of all metadata keys for the surface *index*. |
| `get_mesh_name()` | `String` | | Alias for the `mesh_name` property. |
| `has_surface(int index)` | `bool` | | Returns `true` if a surface exists at the given *index*. |

> All methods throw a runtime error if *index* is out of bounds.

---

## Signals
No signals are emitted by `ImporterMesh`.

---

## Usage Example (C++)

```cpp
ImporterMesh *mesh = memnew(ImporterMesh);
int surfaces = mesh->get_surface_count();

for (int i = 0; i < surfaces; ++i) {
    Array arrays = mesh->get_surface_arrays(i);
    // Process vertex arrays, create a mesh, etc.
}
```

---

## Related Classes

* [ArrayMesh](https://docs.godotengine.org/en/stable/classes/class_arraymesh.html) – Final mesh resource used at runtime.  
* [Mesh](https://docs.godotengine.org/en/stable/classes/class_mesh.html) – Base class for all mesh types.  

---

> **Tip**  
> `ImporterMesh` is only used internally during the import pipeline. Users typically interact with the resulting `Mesh` or `ArrayMesh` objects after the import process completes.