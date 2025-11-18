# ConcavePolygonShape2D

`ConcavePolygonShape2D` – a 2‑D shape representing an arbitrary concave polygon used for physics collision.

> **Inheritance**  
> `ConcavePolygonShape2D` ← `Shape2D` ← `Resource` ← `RefCounted` ← `Object`

---

## Description

`ConcavePolygonShape2D` is a physics shape that stores a list of vertices that define a concave polygon. The vertices are interpreted as a closed polyline (the first and last points are implicitly connected). This shape is typically used for complex collision areas that cannot be represented by a simple convex shape.

> *The shape is created internally by `CollisionPolygon2D` when the polygon is not convex. It can also be edited manually in the editor or via script.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **polygon** | `PackedVector2Array` | `[]` | The list of points defining the polygon. The points are interpreted in the local space of the node that uses this shape. |

> **Note**: Modifying the polygon will automatically update the underlying collision shape.

---

## Methods

| Method | Return type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `set_polygon(polygon: PackedVector2Array)` | `void` | `polygon` | Sets the polygon vertices. |
| `get_polygon() -> PackedVector2Array` | `PackedVector2Array` |  | Returns the current polygon vertices. |

---

## Signals

None.

---

## Usage example (GDScript)

```gdscript
@tool
extends CollisionPolygon2D

func _ready():
    # Define a simple concave shape (e.g. a star)
    var points = [
        Vector2(0, 0),
        Vector2(50, -100),
        Vector2(100, 0),
        Vector2(0, 50),
        Vector2(-100, 0),
        Vector2(-50, -100),
    ]
    polygon = points
```

---

## See Also

* [ConcavePolygonShape3D](https://docs.godotengine.org/en/stable/classes/class_concavepolygonshape3d.html)

---