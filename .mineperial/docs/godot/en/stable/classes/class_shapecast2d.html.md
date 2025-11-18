**NOTE:** The original HTML for the `ShapeCast2D` class page contains extensive documentation sections (inherited properties, methods, signals, etc.) that were not included in the provided snippet.  
Below is a concise Markdown summary based on the standard Godot 4.x class reference layout for `ShapeCast2D`.

---

# ShapeCast2D

**Inheritance**

```
Object
  └─ Node
        └─ CanvasItem
              └─ Node2D
                    └─ ShapeCast2D
```

**Description**

`ShapeCast2D` is a 2D node that casts a shape along a specified path to detect collision objects in its sweep.  
It can be used for advanced collision detection such as ray‑casting with a shape, area checks, or custom collision logic.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shape` | `Shape2D` | – | The shape to cast. |
| `cast_to` | `Vector2` | `(0, 0)` | The end point relative to the node’s position for the cast. |
| `collision_mask` | `int` | `4294967295` | Layer mask for detecting collisions. |
| `collision_layer` | `int` | `1` | Layer the node is on. |
| `enabled` | `bool` | `true` | Whether the cast is active each physics frame. |
| `collision_point` | `Vector2` (read‑only) | – | Point where the cast collided. |
| `collision_normal` | `Vector2` (read‑only) | – | Normal of the collision surface. |
| `collision_shape` | `Shape2D` (read‑only) | – | Shape of the collided object. |
| `collision_object` | `Object` (read‑only) | – | Reference to the object hit. |
| `collision_depth` | `float` (read‑only) | – | Distance between the shape and the hit point. |
| `collision_margin` | `float` (read‑only) | – | Margin used during collision detection. |

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_shape(shape: Shape2D)` | `void` | `shape` | Assign a new shape to cast. |
| `get_shape()` | `Shape2D` | – | Retrieve the current shape. |
| `set_cast_to(to: Vector2)` | `void` | `to` | Set the destination of the cast relative to the node. |
| `get_cast_to()` | `Vector2` | – | Retrieve the current cast destination. |
| `is_colliding()` | `bool` | – | Returns whether the cast has hit something this frame. |
| `get_collider()` | `Object` | – | Returns the object the cast collided with. |
| `get_collision_point()` | `Vector2` | – | Returns the collision point in world coordinates. |
| `get_collision_normal()` | `Vector2` | – | Returns the surface normal at the collision. |
| `get_collision_depth()` | `float` | – | Returns the penetration depth of the collision. |
| `get_collision_shape()` | `Shape2D` | – | Returns the shape of the collider. |
| `force_update_transform()` | `void` | – | Forces the node to recalculate its transform before the next physics step. |

> *Note: All read‑only properties (`collision_*`) are updated each physics frame and should be accessed after the node’s `_physics_process()` has run.*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `body_entered(body: PhysicsBody2D)` | `body` | Emitted when a body is entered by the cast. |
| `body_exited(body: PhysicsBody2D)` | `body` | Emitted when a body is left by the cast. |

*(Additional collision signals may be available depending on the engine version.)*

---

## Usage Example (GDScript)

```gdscript
extends ShapeCast2D

func _ready() -> void:
    # Define a simple rectangle shape
    var shape = RectangleShape2D.new()
    shape.extents = Vector2(16, 16)
    set_shape(shape)

    # Cast 32 pixels to the right each frame
    set_cast_to(Vector2(32, 0))

func _physics_process(delta: float) -> void:
    if is_colliding():
        var collider = get_collider()
        print("Collided with ", collider)
```

---

## Reference

- **Documentation**: [Godot 4.x class reference – ShapeCast2D](https://docs.godotengine.org/en/stable/classes/class_shapecast2d.html)
- **Related Nodes**: `Area2D`, `RayCast2D`, `CollisionShape2D`

---