# CSGPolygon3D

**Extrudes a 2D polygon shape to create a 3D mesh.**

> *Inherits:* `CSGPrimitive3D` → `CSGShape3D` → `GeometryInstance3D` → `VisualInstance3D` → `Node3D` → `Node` → `Object`

---

## Overview

`CSGPolygon3D` is a node that lets you define a 2‑D shape and extrude it into a 3‑D mesh. The shape is defined by an array of 2‑D points, and the extrusion depth determines the height of the resulting mesh. This node is part of the Constructive Solid Geometry (CSG) system in Godot, which allows combining simple shapes to form more complex geometry at runtime.

> *See also:* [CSGPrimitive3D](https://docs.godotengine.org/en/stable/classes/class_csgprimitive3d.html) for a more general discussion of CSG nodes.

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `polygon` | `PackedVector2Array` | `[]` | The array of 2‑D points that define the 2‑D polygon. |
| `depth` | `float` | `1.0` | The extrusion depth along the Z‑axis. |
| `closed` | `bool` | `true` | Whether the polygon’s outline is closed. |
| `csg_mode` | `int` | `CSG_MODE_UNION` | How this polygon interacts with other CSG nodes (Union, Subtract, Intersect). |
| `material` | `Material` | `null` | The material used to render the mesh. |
| `smooth_faces` | `bool` | `false` | Whether to smooth the resulting faces. |
| `face_count` | `int` | `0` | The number of faces generated (read‑only). |

*(Additional properties inherited from `CSGPrimitive3D` and `CSGShape3D` are omitted for brevity.)*

## Key Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `create_mesh()` | `Mesh` | – | Generates a `Mesh` instance from the current polygon and extrusion depth. |
| `clear()` | – | – | Removes all vertices from the polygon. |
| `add_point(position: Vector2)` | – | `position` | Adds a point to the polygon array. |
| `remove_point(index: int)` | – | `index` | Removes the point at the specified index. |
| `is_valid()` | `bool` | – | Checks whether the current polygon is valid (e.g., at least three points, no self‑intersections). |

*(Additional methods inherited from `CSGPrimitive3D` and `CSGShape3D` are omitted.)*

## Usage Example

```gdscript
# Create a CSGPolygon3D node in a scene
var polygon = CSGPolygon3D.new()
polygon.depth = 2.0
polygon.polygon = [
    Vector2(0, 0),
    Vector2(3, 0),
    Vector2(3, 2),
    Vector2(0, 2)
]
add_child(polygon)
polygon.create_mesh()
```

This will create a simple rectangular extrusion of height 2 units.

---

## API Reference

The full API of `CSGPolygon3D` (including inherited members) can be inspected in the Godot editor’s **Integrated Class Reference** or by opening the documentation page for the class.

---

### Notes

* The `CSGPolygon3D` node automatically updates its mesh when the `polygon` array or `depth` is modified.
* For more complex shapes or better control over vertices, consider using `CSGMesh3D` with a custom `ArrayMesh`.

---

**References**

* Official Godot documentation: [CSGPolygon3D Class Reference](https://docs.godotengine.org/en/stable/classes/class_csgpolygon3d.html)