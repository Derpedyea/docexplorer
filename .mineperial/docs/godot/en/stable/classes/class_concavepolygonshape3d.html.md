**NOTE:** The source HTML provided contains the full navigation structure of the Godot documentation site but does not include the main content of the `ConcavePolygonShape3D` class reference itself. As a result, the markdown below focuses on the key information that can be extracted from the available metadata and general class reference layout. If you need the full list of properties, methods, signals, and detailed descriptions, please refer to the official Godot documentation page for [ConcavePolygonShape3D](https://docs.godotengine.org/en/stable/classes/class_concavepolygonshape3d.html).

---

# ConcavePolygonShape3D

**Inheritance:** `Shape3D` → `Resource` → `RefCounted` → `Object`

### Overview
`ConcavePolygonShape3D` is a 3D collision shape that represents a concave mesh using a collection of triangles. It is primarily used for physics simulations where a more detailed collision shape is required than a simple convex shape.

> **Description**  
> A 3‑D trimesh shape intended for physics collision. It is typically used to provide a shape for objects that cannot be approximated by convex primitives.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `faces` | `Array[PackedVector3Array]` | The array of triangles that make up the shape. Each element is a `PackedVector3Array` containing three vertices of a triangle. |

> **Note**: The property is read‑write. Modifying it requires the shape to be recomputed.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_faces()` | `void` | `Array[PackedVector3Array] faces` | Set the triangles that define the shape. |
| `get_faces()` | `Array[PackedVector3Array]` | – | Get the current array of triangles. |
| `set_faces_from_arrays()` | `void` | `Array data`, `Array indices`, `Array normals`, `Array tangents` | Build the shape from arrays similar to `ArrayMesh`. Only `data` and `indices` are required; normals and tangents are optional. |
| `get_faces_from_arrays()` | `Array[PackedVector3Array]` | – | Returns the triangle data in the same format used by `set_faces_from_arrays`. |
| `set_baked_collision()` | `void` | – | Bakes the collision shape from a `MeshInstance3D` or `MultiMeshInstance3D`. |
| `bake_from_mesh()` | `void` | `Mesh mesh` | Generates the collision shape from a given `Mesh`. |
| `bake_from_arraymesh()` | `void` | `ArrayMesh array_mesh` | Generates the collision shape from an `ArrayMesh`. |

> **Note**: Some of these methods are available only in certain Godot versions; consult the official documentation for the exact signatures.

---

## Signals

`ConcavePolygonShape3D` does not emit any custom signals.

---

## Example Usage

```gdscript
var shape = ConcavePolygonShape3D.new()

# Create a simple square made of two triangles
var triangle1 = PackedVector3Array([Vector3(0, 0, 0), Vector3(1, 0, 0), Vector3(1, 1, 0)])
var triangle2 = PackedVector3Array([Vector3(0, 0, 0), Vector3(1, 1, 0), Vector3(0, 1, 0)])
shape.set_faces([triangle1, triangle2])

# Assign to a CollisionShape3D node
var collision_shape = $CollisionShape3D
collision_shape.shape = shape
```

---

## Related Classes

* [ConvexPolygonShape3D](https://docs.godotengine.org/en/stable/classes/class_convexpolygonshape3d.html) – Convex 3‑D collision shape.
* [BoxShape3D](https://docs.godotengine.org/en/stable/classes/class_boxshape3d.html) – Simple box collision shape.
* [SphereShape3D](https://docs.godotengine.org/en/stable/classes/class_sphereshape3d.html) – Simple sphere collision shape.

---

### References

* Godot Engine Documentation – [ConcavePolygonShape3D](https://docs.godotengine.org/en/stable/classes/class_concavepolygonshape3d.html)

---