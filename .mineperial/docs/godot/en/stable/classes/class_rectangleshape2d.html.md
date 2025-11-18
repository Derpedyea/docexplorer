**RectangleShape2D**

*Inherits:* `Shape2D`

A 2‑D rectangle shape used for physics collision.  
It is typically attached to a `CollisionShape2D` node to give a 2‑D physics body a rectangular hitbox.

---

## Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **extents** | `Vector2` | Half‑size of the rectangle (distance from the center to each side). | `(0, 0)` |

> **Note:**  
> - `extents` is exposed in the editor and can be edited directly in the inspector.  
> - The rectangle is axis‑aligned; it has no rotation.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_extents()` | `Vector2` | – | Returns the current extents of the rectangle. |
| `set_extents(extents: Vector2)` | `void` | `extents` | Sets the rectangle’s extents. |
| `set_shape(shape: RectangleShape2D)` *(inherited from `Shape2D`)* | `void` | `shape` | Assigns a shape to a `CollisionShape2D` node. |

> **Inherited from `Shape2D`**  
> `get_type()` – Returns the shape type identifier.  
> `duplicate()` – Creates a copy of the shape.

---

## Example (GDScript)

```gdscript
# Create a new RectangleShape2D in code
var rect_shape = RectangleShape2D.new()
rect_shape.extents = Vector2(50, 30)

# Assign it to a CollisionShape2D
var collision = CollisionShape2D.new()
collision.shape = rect_shape
add_child(collision)
```

---

## Related Documentation

- [CollisionShape2D](https://docs.godotengine.org/en/stable/classes/class_collisionshape2d.html) – Node that uses a `Shape2D`.  
- [Shape2D](https://docs.godotengine.org/en/stable/classes/class_shape2d.html) – Base class for 2‑D collision shapes.  
- [PhysicsBody2D](https://docs.godotengine.org/en/stable/classes/class_physicsbody2d.html) – Node types that use collision shapes.

---