**SliderJoint3D**  
===================

*Inheritance:* `Joint3D < Node3D < Node < Object>`

A **physics joint** that restricts the movement of a 3D physics body along a single axis relative to another physics body.

---

### Signals
| Signal | Description |
|--------|-------------|
| `body_entered(body)` | Emitted when a body enters the joint’s area. |
| `body_exited(body)` | Emitted when a body exits the joint’s area. |
| *(Add other signals as defined in the API.)* |

---

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `axis` | `Vector3` | `Vector3(1, 0, 0)` | The axis of translation. |
| `use_limit` | `bool` | `false` | Enable translational limits. |
| `limit_min` | `float` | `0.0` | Minimum translation limit. |
| `limit_max` | `float` | `0.0` | Maximum translation limit. |
| `motor_enabled` | `bool` | `false` | Enable motor. |
| `motor_speed` | `float` | `0.0` | Target speed of the motor. |
| `motor_force` | `float` | `0.0` | Max force applied by the motor. |
| *(Add other properties as defined in the API.)* |

---

### Methods
| Method | Description |
|--------|-------------|
| `get_joint_type()` | Returns the type of the joint (`Joint3D.JointType.SLIDER`). |
| `set_axis(axis: Vector3)` | Sets the translation axis. |
| `get_axis() -> Vector3` | Returns the current translation axis. |
| `set_use_limit(use: bool)` | Enables or disables translational limits. |
| `is_limit_enabled() -> bool` | Returns whether limits are enabled. |
| `set_limit_min(min: float)` | Sets the minimum translational limit. |
| `get_limit_min() -> float` | Gets the minimum translational limit. |
| `set_limit_max(max: float)` | Sets the maximum translational limit. |
| `get_limit_max() -> float` | Gets the maximum translational limit. |
| `set_motor_enabled(enabled: bool)` | Enables or disables the motor. |
| `is_motor_enabled() -> bool` | Returns whether the motor is enabled. |
| `set_motor_speed(speed: float)` | Sets the motor target speed. |
| `get_motor_speed() -> float` | Retrieves the motor target speed. |
| `set_motor_force(force: float)` | Sets the maximum motor force. |
| `get_motor_force() -> float` | Retrieves the maximum motor force. |
| *(Add other methods as defined in the API.)* |

---

### Example Usage (GDScript)

```gdscript
var joint = SliderJoint3D.new()
joint.set_axis(Vector3(0, 1, 0))
joint.set_limit_min(-2.0)
joint.set_limit_max(2.0)
joint.set_motor_enabled(true)
joint.set_motor_speed(5.0)
joint.set_motor_force(10.0)

# Attach to two RigidBodies
add_child(joint)
joint.node_a = body_a
joint.node_b = body_b
```

---

> **Note:** For complete, up‑to‑date information, refer to the official Godot Engine documentation or the full class reference on the Godot website.