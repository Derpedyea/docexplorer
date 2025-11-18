# RigidBody2D

`RigidBody2D` is a 2‑D physics body that is moved by Godot’s physics simulation.  
It is a descendant of `PhysicsBody2D` → `CollisionObject2D` → `Node2D` → `CanvasItem` → `Node` → `Object`.

---

## Overview

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mode` | `int` (see *Mode* enum) | `MODE_RIGID` | How the body behaves in the physics world. |
| `mass` | `float` | `1.0` | Mass of the body. |
| `center_of_mass` | `Vector2` | `Vector2(0,0)` | Position of the center of mass relative to the body. |
| `inertia` | `float` | `1.0` | Moment of inertia. |
| `gravity_scale` | `float` | `1.0` | Scale factor for gravity. |
| `linear_velocity` | `Vector2` | `Vector2(0,0)` | Current linear velocity. |
| `angular_velocity` | `float` | `0.0` | Current angular velocity. |
| `linear_damp` | `float` | `0.0` | Linear damping. |
| `angular_damp` | `float` | `0.0` | Angular damping. |
| `sleeping` | `bool` | `false` | Whether the body is currently sleeping. |
| `contact_monitor` | `bool` | `false` | If `true`, the body will emit signals when other bodies contact it. |
| `max_contacts_reported` | `int` | `0` | Number of contacts to report if `contact_monitor` is `true`. |
| `physics_material_override` | `PhysicsMaterial` | `null` | Optional physics material that overrides the default one. |
| `collision_layer` | `int` | `1` | Layer mask for collisions. |
| `collision_mask` | `int` | `1` | Mask for which layers this body will collide with. |

> **Note**  
> `mode` determines how the body is simulated:
> * `MODE_STATIC` – immovable; does not react to forces.  
> * `MODE_KINEMATIC` – moved via script; does not affect other bodies.  
> * `MODE_RIGID` – fully simulated by physics.  
> * `MODE_CHARACTER` – a special rigid body designed for character movement (sliding, slope handling).

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `body_entered(body: Node)` | `body` – the body that entered this one | Emitted when a body first collides with this `RigidBody2D`. |
| `body_exited(body: Node)` | `body` – the body that exited | Emitted when a body leaves contact. |
| `sleeping_state_changed(is_sleeping: bool)` | `is_sleeping` – whether the body has started/stopped sleeping | Emitted when the body’s sleeping state changes. |
| `shape_entered(body_id: int, body: Node, local_shape: int, local_id: int, local_shape_id: int)` | - | Emitted when a shape enters collision. |
| `shape_exited(body_id: int, body: Node, local_shape: int, local_id: int, local_shape_id: int)` | - | Emitted when a shape leaves collision. |

---

## Enumerations

```gdscript
enum Mode {
    MODE_STATIC = 0,
    MODE_KINEMATIC = 1,
    MODE_RIGID = 2,
    MODE_CHARACTER = 3
}
```

---

## Methods

> **Important**: Many methods require the physics process to be called, otherwise they will have no effect.

| Method | Signature | Description |
|--------|-----------|-------------|
| `apply_impulse(force: Vector2, position: Vector2)` | `void` | Apply a force impulse at a position relative to the body’s center. |
| `apply_torque_impulse(torque: float)` | `void` | Apply a torque impulse. |
| `apply_central_impulse(force: Vector2)` | `void` | Apply a central impulse (no torque). |
| `apply_central_force(force: Vector2)` | `void` | Apply a central force (continuous). |
| `apply_force(force: Vector2, position: Vector2)` | `void` | Apply a continuous force at a position. |
| `apply_torque(torque: float)` | `void` | Apply a continuous torque. |
| `get_direct_state()` | `PhysicsDirectBodyState2D` | Get a low‑level direct access to the body’s physics state. |
| `set_linear_velocity(velocity: Vector2)` | `void` | Sets the body’s linear velocity. |
| `get_linear_velocity()` | `Vector2` | Returns the current linear velocity. |
| `set_angular_velocity(velocity: float)` | `void` | Sets the body’s angular velocity. |
| `get_angular_velocity()` | `float` | Returns the current angular velocity. |
| `set_mode(mode: int)` | `void` | Sets the physics mode. |
| `get_mode()` | `int` | Returns the current physics mode. |
| `set_sleeping(is_sleeping: bool)` | `void` | Put the body to sleep or wake it up. |
| `is_sleeping()` | `bool` | Returns the body’s sleeping state. |
| `set_contact_monitor(enable: bool)` | `void` | Enable or disable contact monitoring. |
| `is_contact_monitoring()` | `bool` | Returns whether contact monitoring is enabled. |
| `set_max_contacts_reported(max_contacts: int)` | `void` | Sets maximum number of contact reports. |
| `get_max_contacts_reported()` | `int` | Returns current max contact reports. |
| `set_use_custom_integrator(enable: bool)` | `void` | Enable a custom physics integration for this body. |
| `is_using_custom_integrator()` | `bool` | Returns whether a custom integrator is used. |
| `set_physics_material_override(material: PhysicsMaterial)` | `void` | Override physics material. |
| `get_physics_material_override()` | `PhysicsMaterial` | Returns current override. |

> *All vector values are in world units.*  
> *Force and torque are applied in Newton‑meters or equivalent units.*

---

## Usage Example

```gdscript
# A simple RigidBody2D that jumps when the player presses space.
extends RigidBody2D

export var jump_impulse : Vector2 = Vector2(0, -400)

func _input(event):
    if event.is_action_pressed("ui_accept"):      # “Space” by default
        apply_impulse(Vector2.ZERO, jump_impulse)
```

---

## Common Pitfalls

* **Sleeping bodies**: If a body goes to sleep, it will no longer respond to forces until it is woken (`set_sleeping(false)`).  
* **Mass and inertia**: If you change the mass or inertia while the body is moving, you must call `set_mode(MODE_RIGID)` again to force an update.  
* **Collision layers**: Mis‑configured layers will prevent the body from interacting with others. Remember to set `collision_layer` and `collision_mask` correctly.

---

## Further Reading

* [PhysicsBody2D](https://docs.godotengine.org/en/stable/classes/class_physicsbody2d.html) – Base class for all 2‑D physics bodies.  
* [PhysicsDirectBodyState2D](https://docs.godotengine.org/en/stable/classes/class_physicsdirectbodystate2d.html) – Low‑level API for custom integration.  
* [PhysicsMaterial](https://docs.godotengine.org/en/stable/classes/class_physicsmaterial.html) – Customize friction, bounce, etc.  

--- 

**End of RigidBody2D reference**