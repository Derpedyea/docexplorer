**NOTE:** The following markdown is a condensed representation of the official Godot Engine `RigidBody3D` class reference.  
It is intended to provide a clear, navigable, and readable overview of the class’s API, properties, and signals.  

---

# `RigidBody3D`

> **A 3‑D physics body that is moved by the physics simulation.**

```
RigidBody3D ← PhysicsBody3D ← CollisionObject3D ← Node3D ← Node ← Object
```

Inherited by: `VehicleBody3D`

> For more detailed information or to explore the full API, visit the
> [official Godot docs](https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html).

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_shape_entered(int body_id, Node body, int local_shape, int body_shape)` | Emitted when another body collides with this body. |
| `body_shape_exited(int body_id, Node body, int local_shape, int body_shape)` | Emitted when a collision ends. |
| `sleeping_state_changed()` | Emitted when the body changes sleeping state. |

---

## Properties

| Category | Property | Type | Default | Description |
|----------|----------|------|---------|-------------|
| **Physics** | `mass` | `float` | `1.0` | Mass of the body (in kilograms). |
| | `friction` | `float` | `0.5` | Friction coefficient. |
| | `bounce` | `float` | `0.0` | Bounciness coefficient. |
| | `linear_damp` | `float` | `0.0` | Linear damping (drag). |
| | `angular_damp` | `float` | `0.0` | Angular damping. |
| | `gravity_scale` | `float` | `1.0` | Scale of gravity applied to this body. |
| | `linear_velocity` | `Vector3` | `Vector3(0,0,0)` | Current linear velocity. |
| | `angular_velocity` | `Vector3` | `Vector3(0,0,0)` | Current angular velocity. |
| | `mode` | `enum` | `RigidBody3D.MODE_RIGID` | The mode of the body (e.g., `MODE_RIGID`, `MODE_STATIC`, `MODE_KINEMATIC`, `MODE_CHARACTER`). |
| | `continuous_cd` | `bool` | `false` | Enable continuous collision detection. |
| | `contact_monitor` | `bool` | `false` | Enables reporting of contacts. |
| | `max_contacts_reported` | `int` | `4` | Maximum number of contacts to report when monitoring. |
| | `sleeping` | `bool` | `false` | Whether the body is sleeping. |
| | `sleeping_threshold` | `float` | `0.01` | Velocity threshold for sleeping. |
| | `physics_material_override` | `PhysicsMaterial` | `null` | Override physics material. |
| | `lock_rotation_x/y/z` | `bool` | `false` | Lock rotation around respective axis. |
| | `freeze` | `bool` | `false` | Freeze the body in place. |

---

## Methods

> All methods are available in GDScript, C#, C++ (via GDExtension), and other supported languages.

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_linear_velocity(Vector3 velocity)` | void | Sets the linear velocity. |
| `get_linear_velocity()` | `Vector3` | Returns the current linear velocity. |
| `set_angular_velocity(Vector3 velocity)` | void | Sets the angular velocity. |
| `get_angular_velocity()` | `Vector3` | Returns the current angular velocity. |
| `apply_impulse(Vector3 impulse)` | void | Adds an instantaneous impulse at the body’s center of mass. |
| `apply_force(Vector3 force)` | void | Adds a continuous force. |
| `apply_torque(Vector3 torque)` | void | Adds a torque. |
| `apply_central_impulse(Vector3 impulse)` | void | Adds an impulse at the center of mass. |
| `apply_central_force(Vector3 force)` | void | Adds a continuous force at the center of mass. |
| `apply_torque_impulse(Vector3 torque)` | void | Adds an instantaneous torque. |
| `get_contact_count()` | `int` | Returns the number of contacts reported (if monitoring is enabled). |
| `get_contact_local_position(int contact_index)` | `Vector3` | Local position of a contact point. |
| `get_contact_local_normal(int contact_index)` | `Vector3` | Local normal of a contact point. |
| `get_contact_collider(int contact_index)` | `Node` | Node that is in contact. |
| `get_contact_collider_id(int contact_index)` | `int` | Unique ID of the collider. |
| `get_contact_collider_shape(int contact_index)` | `int` | Shape index of the collider. |
| `get_contact_collider_velocity_at_position(int contact_index)` | `Vector3` | Velocity of the collider at the contact point. |
| `get_contact_impulse(int contact_index)` | `float` | Impulse applied during the collision. |
| `set_deferred(String property, Variant value)` | void | Deferred property setting (e.g., `"mode"`, `"mass"`). |
| `force_sleep(bool sleep)` | void | Forces the body to sleep or wake. |

> **Notes**  
> - Use `set_deferred()` when changing properties during a physics step.  
> - `MODE_CHARACTER` is optimized for characters that use `move_and_slide()` or `move_and_collide()`.

---

## Usage Examples

```gdscript
# Basic RigidBody3D setup
var rb = RigidBody3D.new()
rb.mass = 5
rb.friction = 0.8
rb.bounce = 0.3
rb.gravity_scale = 1.5
rb.linear_damp = 0.1
rb.angular_damp = 0.2
add_child(rb)

# Apply an impulse in the +Z direction
rb.apply_impulse(Vector3(0, 0, 10))
```

```gdscript
# Responding to collision events
func _on_body_shape_entered(body_id, body, local_shape, body_shape):
    print("Collision with body %s" % body.name)
```

```gdscript
# Using contact monitoring
rb.contact_monitor = true
rb.max_contacts_reported = 8

func _physics_process(delta):
    var contacts = rb.get_contact_count()
    for i in range(contacts):
        var pos = rb.get_contact_local_position(i)
        var normal = rb.get_contact_local_normal(i)
        var collider = rb.get_contact_collider(i)
        print("Contact %d with %s at %s" % [i, collider.name, pos])
```

---

## Related Topics

- [PhysicsBody3D](https://docs.godotengine.org/en/stable/classes/class_physicsbody3d.html)
- [VehicleBody3D](https://docs.godotengine.org/en/stable/classes/class_vehiclebody3d.html)
- [CollisionObject3D](https://docs.godotengine.org/en/stable/classes/class_collisionobject3d.html)
- [PhysicsMaterial](https://docs.godotengine.org/en/stable/classes/class_physicsmaterial.html)

---

*This document is auto‑generated from the Godot 4 class reference. For the most up‑to‑date information, always refer to the online docs.*