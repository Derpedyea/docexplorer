**VehicleWheel3D**  
*Godot Engine – Class reference (stable)*  

---

## Overview
`VehicleWheel3D` is a 3‑D physics body that represents a wheel of a `VehicleBody3D`.  
It is intended to be a child of a `VehicleBody3D` node and simulates the physical behaviour of a real wheel (steering, suspension, friction, etc.).

```
VehicleWheel3D
├── inherits : Node3D
└── parent   : VehicleBody3D
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **disabled** | `bool` | `false` | If `true`, the wheel is inactive and will not be simulated. |
| **suspension_rest_length** | `float` | `1.0` | Rest length of the suspension. |
| **suspension_stiffness** | `float` | `30.0` | Stiffness of the suspension spring. |
| **suspension_damping** | `float` | `5.0` | Damping coefficient for the suspension. |
| **wheel_radius** | `float` | `0.4` | Radius of the wheel. |
| **wheel_width** | `float` | `0.2` | Width (thickness) of the wheel. |
| **max_brake_force** | `float` | `1000.0` | Maximum brake force applied to this wheel. |
| **max_steer_angle** | `float` | `45.0` | Maximum steering angle in degrees. |
| **max_speed** | `float` | `100.0` | Maximum speed of the wheel in m/s. |
| **friction** | `float` | `1.0` | Surface friction coefficient. |
| **roll_inertia** | `float` | `1.0` | Roll inertia of the wheel. |
| **wheel_friction** | `float` | `1.0` | Lateral friction. |
| **suspension_max_distance** | `float` | `1.0` | Maximum compression distance of the suspension. |

*(The list above is illustrative; refer to the official Godot documentation for the exact properties.)*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `wheel_collided` | `Node` (collider) | Emitted when the wheel collides with a body. |
| `wheel_stopped` | – | Emitted when the wheel stops rotating. |

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `apply_brake(force)` | `void` | `float force` | Applies a braking force to this wheel. |
| `apply_steer(angle)` | `void` | `float angle` | Sets the steering angle (in degrees). |
| `apply_throttle(force)` | `void` | `float force` | Applies a forward force (throttle) to the wheel. |
| `is_in_contact()` | `bool` | – | Returns `true` if the wheel is in contact with a surface. |
| `get_contact_force()` | `float` | – | Returns the current contact force. |
| `get_wheel_velocity()` | `float` | – | Returns the wheel’s current linear velocity. |

*(Again, consult the live documentation for a complete list.)*

---

## Example Usage

```gdscript
# Attach this script to a VehicleBody3D node
@onready var wheel_front = $WheelFront
@onready var wheel_back = $WheelBack

func _physics_process(delta):
    var throttle = Input.get_action_strength("ui_up") - Input.get_action_strength("ui_down")
    var steer   = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")

    wheel_front.apply_throttle(throttle)
    wheel_back.apply_throttle(throttle)

    wheel_front.apply_steer(steer * wheel_front.max_steer_angle)
```

---

## Further Reading

* [VehicleBody3D](https://docs.godotengine.org/en/stable/classes/class_vehiclebody3d.html) – the parent node that manages the overall vehicle physics.  
* [Physics Server](https://docs.godotengine.org/en/stable/tutorials/physics/physics_server.html) – low‑level API for customizing wheel physics.  

---