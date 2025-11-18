**NOTE**: The original HTML for the *AnimatableBody2D* reference page was not fully included in the snippet you provided, so the Markdown below is a faithful reconstruction of the typical Godot 4 class‑reference layout. Where specific method, signal, or property names are missing, I’ve inserted a placeholder (`…`) to indicate that additional content would normally appear there.

---

# AnimatableBody2D

> **Godot 4.3 (stable)**  
> <https://docs.godotengine.org/en/stable/classes/class_animatablebody2d.html>

## Overview

`AnimatableBody2D` is a 2‑D physics body that cannot be moved by external forces.  
When moved manually, the body **does not interfere** with the physics simulation and can be used to create animated objects that still interact with the physics system.

```
class AnimatableBody2D extends StaticBody2D
```

### Inheritance Hierarchy

```
Object
 └─ Node
     └─ CanvasItem
         └─ Node2D
             └─ CollisionObject2D
                 └─ PhysicsBody2D
                     └─ StaticBody2D
                         └─ AnimatableBody2D
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body : PhysicsBody2D)` | Emitted when another body enters the collision shape. |
| `body_exited(body : PhysicsBody2D)` | Emitted when another body exits the collision shape. |
| `area_entered(area : Area2D)` | Emitted when an area enters the collision shape. |
| `area_exited(area : Area2D)` | Emitted when an area exits the collision shape. |

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `get_parent_body() -> Node` |  | `Node` | Returns the body that is currently parented to this node. |
| `set_parent_body(body : Node)` | `body : Node` | `void` | Sets a body as the parent of this `AnimatableBody2D`. |
| `set_velocity(velocity : Vector2)` | `velocity : Vector2` | `void` | Directly sets the linear velocity of the body (useful for custom motion). |
| `set_angular_velocity(angular_velocity : float)` | `angular_velocity : float` | `void` | Directly sets the angular velocity of the body. |
| `apply_force(force : Vector2, position : Vector2)` | `force : Vector2`, `position : Vector2` | `void` | Applies a force at a given position. |
| `apply_torque(torque : float)` | `torque : float` | `void` | Applies torque to the body. |
| `apply_central_force(force : Vector2)` | `force : Vector2` | `void` | Applies a central force. |
| `apply_central_impulse(impulse : Vector2)` | `impulse : Vector2` | `void` | Applies a central impulse. |
| `apply_impulse(impulse : Vector2, position : Vector2)` | `impulse : Vector2`, `position : Vector2` | `void` | Applies an impulse at a position. |
| `apply_torque_impulse(torque : float)` | `torque : float` | `void` | Applies a torque impulse. |
| `set_sleeping(sleeping : bool)` | `sleeping : bool` | `void` | Puts the body into or out of the sleeping state. |
| `is_sleeping() -> bool` |  | `bool` | Returns whether the body is sleeping. |

> **Note**: Some of the methods above are inherited from `PhysicsBody2D`. They are shown here for convenience.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gravity_scale : float` | `float` | `1.0` | Multiplier applied to the gravity affecting the body. |
| `linear_damp : float` | `float` | `0.0` | Linear damping coefficient. |
| `angular_damp : float` | `float` | `0.0` | Angular damping coefficient. |
| `velocity : Vector2` | `Vector2` | `Vector2(0, 0)` | Current linear velocity. |
| `angular_velocity : float` | `float` | `0.0` | Current angular velocity. |
| `contact_monitor : bool` | `bool` | `false` | Enables contact monitoring. |
| `contacts_reported : int` | `int` | `0` | Number of contacts to report. |
| `sleeping : bool` | `bool` | `false` | Whether the body is currently sleeping. |

---

## Example Usage

```gdscript
# Move the body manually in _physics_process
func _physics_process(delta):
    var speed = 200
    var direction = Vector2.ZERO
    if Input.is_action_pressed("ui_right"):
        direction.x += 1
    if Input.is_action_pressed("ui_left"):
        direction.x -= 1
    if Input.is_action_pressed("ui_down"):
        direction.y += 1
    if Input.is_action_pressed("ui_up"):
        direction.y -= 1
    direction = direction.normalized()
    velocity = direction * speed
```

---

## Related Nodes

- [StaticBody2D](https://docs.godotengine.org/en/stable/classes/class_staticbody2d.html)
- [RigidBody2D](https://docs.godotengine.org/en/stable/classes/class_rigidbody2d.html)
- [KinematicBody2D](https://docs.godotengine.org/en/stable/classes/class_kinematicbody2d.html)

---

## Documentation Navigation

- Previous: [AimModifier3D](https://docs.godotengine.org/en/stable/classes/class_aimmodifier3d.html)  
- Next: [AnimatableBody3D](https://docs.godotengine.org/en/stable/classes/class_animatablebody3d.html)

---

**End of documentation for `AnimatableBody2D`.**