# CapsuleShape2D

A 2‑D capsule shape used for physics collision.  
It is a thin, rounded rectangle – a rectangle with semicircular caps on both ends.

> **Inheritance hierarchy**  
> `Object` → `RefCounted` → `Resource` → `Shape2D` → **`CapsuleShape2D`**

---

## Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `radius` | `float` | Radius of the semicircular caps. | `16.0` |
| `height` | `float` | Length of the central rectangle (does **not** include the caps). | `32.0` |

Both properties can be set through the editor or via code:

```gdscript
var capsule = CapsuleShape2D.new()
capsule.radius = 32.0
capsule.height = 64.0
```

---

## Methods

| Method | Arguments | Return value | Description |
|--------|-----------|--------------|-------------|
| `set_radius(radius: float) -> void` | `radius` | – | Sets the capsule’s radius. |
| `get_radius() -> float` | – | `float` | Returns the current radius. |
| `set_height(height: float) -> void` | `height` | – | Sets the rectangle’s height. |
| `get_height() -> float` | – | `float` | Returns the current height. |

These methods are automatically exposed by Godot’s property system, so you can also use the property syntax (`capsule.radius`, `capsule.height`).

---

## Example Usage

```gdscript
# Create a capsule collision shape and attach it to a CollisionShape2D node
var collision_shape = CollisionShape2D.new()
var capsule = CapsuleShape2D.new()
capsule.radius = 16.0
capsule.height = 32.0
collision_shape.shape = capsule
add_child(collision_shape)
```

> *Tip:*  
> In 2‑D physics, a `CapsuleShape2D` behaves like a rectangle with rounded ends, which is useful for characters or objects that require smoother collision edges compared to a plain `RectangleShape2D`.

---

## Related Classes

- [`CapsuleShape3D`](../classes/class_capsuleshape3d.html) – 3‑D equivalent used for 3‑D physics.
- [`RectangleShape2D`](../classes/class_rectangleshape2d.html) – A simple axis‑aligned rectangle shape.
- [`CollisionShape2D`](../classes/class_collisionshape2d.html) – Node that holds a `CapsuleShape2D` for collision detection.

---

### See Also

- [PhysicsServer2D](../classes/class_physicsserver2d.html) – Low‑level 2‑D physics API.  
- [Shape2D](../classes/class_shap2d.html) – Base class for all 2‑D physics shapes.  

---