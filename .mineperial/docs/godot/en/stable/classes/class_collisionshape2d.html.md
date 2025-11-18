# CollisionShape2D

**Inheritance**  
`Node2D < CanvasItem < Node < Object >`

---

## Description

`CollisionShape2D` is a node that supplies a `Shape2D` to its parent `CollisionObject2D`.  
It is used to define the collision area of an object in 2D space and can be enabled or disabled at runtime.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shape` | `Shape2D` | `null` | The shape used for collision. |
| `disabled` | `bool` | `false` | If `true`, the shape is ignored during collision detection. |
| `owner` | `Node` | `null` | Node that owns the shape (for editor use). |
| `transform` | `Transform2D` | identity | Transform applied to the shape. |

> **Note**: The `transform` property is inherited from `CanvasItem` and determines the position, rotation, and scale of the shape relative to its parent.

---

## Methods

| Method | Description |
|--------|-------------|
| `set_shape(Shape2D shape)` | Assigns a new shape. |
| `get_shape() -> Shape2D` | Returns the current shape. |
| `set_disabled(bool disabled)` | Enables or disables collision for this shape. |
| `is_disabled() -> bool` | Returns the disabled state. |
| `get_shape_index() -> int` | Returns the index of the shape in the parent collision object (if applicable). |
| `_get_class()` | Returns the class name (internal). |
| `_set_class_name()` | Sets the class name (internal). |

---

## Signals

| Signal | Description |
|--------|-------------|
| `shape_changed()` | Emitted when the `shape` property is modified. |
| `shape_disabled_changed()` | Emitted when the `disabled` property changes. |

---

## Usage Example

```gdscript
# Example: Creating a rectangular collision shape for a sprite
var collision_shape = CollisionShape2D.new()
collision_shape.shape = RectangleShape2D.new()
collision_shape.shape.extents = Vector2(32, 32)
add_child(collision_shape)
```

---

## Related Classes

* `CollisionObject2D`
* `CollisionPolygon2D`
* `Shape2D`
* `RectangleShape2D`
* `CircleShape2D`
* `ConvexPolygonShape2D`
* `ConcavePolygonShape2D`

---