**PhysicsBody3D** – Godot Engine documentation  
=================================================

> **Abstract base class for 3‑D game objects affected by physics.**  
> Inherits from: `CollisionObject3D` → `Node3D` → `Node` → `Object`

> **Derived classes**  
> • `CharacterBody3D`  
> • `PhysicalBone3D`  
> • `RigidBody3D`  
> • `StaticBody3D`

---

## Overview

`PhysicsBody3D` is the root class for any object that participates in the 3‑D physics simulation. It provides common functionality such as mass, friction, gravity scale, collision layers/masks, and integration methods. The class is abstract and cannot be instantiated directly; use one of the concrete subclasses instead.

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body: Node)` | Emitted when another physics body enters this body’s collision shape. |
| `body_exited(body: Node)` | Emitted when another physics body exits this body’s collision shape. |
| `body_shape_entered(body_id: int, body: Node, local_shape_index: int, body_shape_index: int)` | Emitted when a body’s shape enters this body’s shape. |
| `body_shape_exited(body_id: int, body: Node, local_shape_index: int, body_shape_index: int)` | Emitted when a body’s shape exits this body’s shape. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collision_layer` | `int` | `1` | The physics layer mask this body belongs to. |
| `collision_mask` | `int` | `1` | The physics layers this body can collide with. |
| `gravity_scale` | `float` | `1.0` | Multiplier for global gravity applied to this body. |
| `linear_damp` | `float` | `0.0` | Linear damping (friction). |
| `angular_damp` | `float` | `0.0` | Angular damping. |
| `sleeping` | `bool` | `false` | Whether the body is sleeping (inactive). |
| `sleep_mode` | `PhysicsBody3D.SleepMode` | `PhysicsBody3D.SLEEP_MODE_DEFAULT` | Mode that controls when the body can sleep. |
| `freeze` | `bool` | `false` | Whether the body is frozen in place. |
| `linear_velocity` | `Vector3` | `Vector3(0, 0, 0)` | Current linear velocity. |
| `angular_velocity` | `Vector3` | `Vector3(0, 0, 0)` | Current angular velocity. |

---

## Methods

### Movement / Integration

| Method | Signature | Description |
|--------|-----------|-------------|
| `apply_central_impulse(impulse: Vector3)` | `void` | Apply a central impulse to the body. |
| `apply_torque_impulse(torque: Vector3)` | `void` | Apply a torque impulse. |
| `move_and_slide(velocity: Vector3, up_direction: Vector3 = Vector3(0, 1, 0), stop_on_slope: bool = true, max_slides: int = 4, floor_snap: Vector3 = Vector3.ZERO, safe_margin: float = 0.01, floor_max_angle: float = 0.785398)` | `Vector3` | Move the body using sliding integration. |
| `move_and_collide(velocity: Vector3, safe_margin: float = 0.01, infinite_inertia: bool = true, exclude: Array[Node] = [], use_raycast: bool = true)` | `KinematicCollision3D` | Move and collide; returns collision information. |
| `set_linear_velocity(velocity: Vector3)` | `void` | Set the linear velocity. |
| `get_linear_velocity() -> Vector3` | `Vector3` | Get the linear velocity. |
| `set_angular_velocity(velocity: Vector3)` | `void` | Set the angular velocity. |
| `get_angular_velocity() -> Vector3` | `Vector3` | Get the angular velocity. |
| `sleep()` | `void` | Put the body to sleep. |
| `wake_up()` | `void` | Wake the body from sleep. |

### Collision Shape & Debugging

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_collision_shape()` | `PhysicsShape3D` | Returns the collision shape attached to this body. |
| `set_collision_layer(mask: int)` | `void` | Set collision layer. |
| `add_collision_shape(shape: PhysicsShape3D, transform: Transform3D = Transform3D.IDENTITY)` | `void` | Attach a shape. |
| `remove_collision_shape(shape: PhysicsShape3D)` | `void` | Detach a shape. |
| `is_sleeping() -> bool` | `bool` | Query sleep state. |

### Miscellaneous

| Method | Signature | Description |
|--------|-----------|-------------|
| `_process(delta: float)` | `void` | Called each frame (if `_process()` is overridden). |
| `_physics_process(delta: float)` | `void` | Called each physics step. |
| `_input(event: InputEvent)` | `void` | Handle input events. |

---

## Constants

```gdscript
enum SleepMode {
    SLEEP_MODE_DEFAULT,  # Use the default physics server setting
    SLEEP_MODE_ON,       # Never sleep
    SLEEP_MODE_OFF       # Can sleep
}
```

---

## Inheritance Diagram

```
Object
 └─ Node
     └─ Node3D
         └─ CollisionObject3D
             └─ PhysicsBody3D
                 ├─ RigidBody3D
                 ├─ StaticBody3D
                 ├─ CharacterBody3D
                 └─ PhysicalBone3D
```

---

## Usage Example (GDScript)

```gdscript
extends RigidBody3D

func _ready() -> void:
    # Set mass and initial velocity
    mass = 2.0
    linear_velocity = Vector3(0, 5, 0)

func _physics_process(delta: float) -> void:
    # Apply a constant downward force
    apply_central_impulse(Vector3.DOWN * 9.8 * mass * delta)
```

---

## References

- [Godot Docs – CollisionObject3D](https://docs.godotengine.org/en/stable/classes/class_collisionobject3d.html)  
- [Godot Docs – RigidBody3D](https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html)  
- [Godot Docs – StaticBody3D](https://docs.godotengine.org/en/stable/classes/class_staticbody3d.html)  

---

*This page was autogenerated from the official Godot Engine documentation.*