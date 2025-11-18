**ConvexPolygonShape3D – Godot Engine 4.x Documentation**

---

## Overview

`ConvexPolygonShape3D` is a 3‑D physics collision shape that represents a convex polyhedron.  
It is intended for use with physics bodies and collision detection in Godot’s 3‑D engine.  

### Inheritance

```
Shape3D
 └─ Resource
      └─ RefCounted
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `points` | `PoolVector3Array` | `[]` | A list of the shape’s vertices, in local space. The points must form a convex hull. |
| `points_count` | `int` | `0` | The number of vertices in the shape. This is a read‑only alias for `points.size()`. |
| `margin` | `float` | `0.04` | The collision margin used by the physics engine. |

> **Note**: The order of points matters; they are interpreted in counter‑clockwise order to determine the outward normal.

---

## Methods

### `get_points() → PoolVector3Array`

Returns the array of points that define the convex polyhedron.

### `set_points(points: PoolVector3Array) → void`

Sets the vertices of the shape.  
The array must contain at least 4 non‑collinear points to form a valid convex shape.

### `add_point(point: Vector3) → void`

Adds a vertex to the shape and re‑builds the convex hull.

### `remove_point(index: int) → void`

Removes the vertex at the given index.

### `clear() → void`

Clears all points from the shape.

---

## Signals

- `changed()` – Emitted when the shape’s points are modified.

---

## Example Usage

```gdscript
# Create a convex shape with a simple tetrahedron
var shape = ConvexPolygonShape3D.new()
shape.points = PoolVector3Array([
    Vector3(1, 1, 1),
    Vector3(-1, -1, 1),
    Vector3(-1, 1, -1),
    Vector3(1, -1, -1)
])

var collision = CollisionShape3D.new()
collision.shape = shape
add_child(collision)
```

---

## API Reference

| Member | Signature | Description |
|--------|-----------|-------------|
| `points` | `PoolVector3Array` | The shape’s vertex list. |
| `margin` | `float` | The collision margin. |
| `points_count` | `int` (read‑only) | Number of vertices. |
| `get_points()` | `PoolVector3Array` | Returns current points. |
| `set_points(points)` | `void` | Sets new points. |
| `add_point(point)` | `void` | Adds a point. |
| `remove_point(index)` | `void` | Removes a point by index. |
| `clear()` | `void` | Clears all points. |
| `changed()` | Signal | Emitted when shape changes. |

---

### Remarks

* The shape must remain convex; the physics engine does not automatically check convexity but will fail silently if the hull is not convex.
* For static collision shapes, it is more efficient to use `BoxShape3D` or `ConvexPolygonShape3D` with a small number of vertices.  
* Complex shapes can be composed by adding multiple `CollisionShape3D` nodes as children of a `StaticBody3D`.

---

**Reference**  
[Godot Engine Documentation – ConvexPolygonShape3D](https://docs.godotengine.org/en/stable/classes/class_convexpolygonshape3d.html)