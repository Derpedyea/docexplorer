**SegmentShape2D**  
===================

A 2‑D line segment shape used for physics collision.  
This shape is intended for use in physics bodies and collision shapes.  

Inheritance hierarchy
---------------------

```
Resource ← RefCounted ← Object ← Shape2D ← SegmentShape2D
```

**Description**
---------------

`SegmentShape2D` represents a straight line segment defined by two points
(`start` and `end`).  It can be used with `Physics2DDirectSpaceState` queries
or assigned to a `CollisionShape2D` node to provide a simple linear collider.

**Properties**

| Name   | Type    | Default | Description |
|--------|---------|---------|-------------|
| `start` | `Vector2` | `(0, 0)` | The start point of the segment, in local coordinates. |
| `end`   | `Vector2` | `(0, 0)` | The end point of the segment, in local coordinates. |

> **Note**: Changing the `start` or `end` properties automatically updates the
> shape in the physics engine.

**Methods**

| Method | Arguments | Returns | Description |
|--------|-----------|---------|-------------|
| `set_points(start, end)` | `Vector2 start`, `Vector2 end` | `void` | Sets the start and end points of the segment in one call. |
| `get_start()` | `‑` | `Vector2` | Returns the current start point. |
| `get_end()` | `‑` | `Vector2` | Returns the current end point. |

**Example Usage (GDScript)**

```gdscript
# Create a segment shape that extends from (10, 0) to (30, 0)
var shape = SegmentShape2D.new()
shape.start = Vector2(10, 0)
shape.end = Vector2(30, 0)

var collision = CollisionShape2D.new()
collision.shape = shape
add_child(collision)
```

**Example Usage (C#)**

```csharp
var shape = new SegmentShape2D();
shape.Start = new Vector2(10, 0);
shape.End = new Vector2(30, 0);

var collision = new CollisionShape2D { Shape = shape };
AddChild(collision);
```

**Related Classes**

- `CollisionShape2D`
- `Physics2DDirectSpaceState`
- `RectangleShape2D`
- `CircleShape2D`

**Next**

- [`SeparationRayShape2D`](../class_separationrayshape2d.html)

**Previous**

- [`ScriptExtension`](../class_scriptextension.html)

--- 

**References**

- Official Godot Engine documentation: https://docs.godotengine.org/en/stable/classes/class_segmentshape2d.html  
- Godot Engine API Reference (stable)

---