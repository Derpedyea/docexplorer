**VehicleBody3D**  
---  

VehicleBody3D is a **3D physics body** that simulates the behavior of a car. It inherits from `RigidBody3D`, which in turn inherits from `PhysicsBody3D`, `CollisionObject3D`, `Node3D`, and `Node`.  

---

### Inheritance hierarchy
```
Node
 └── Node3D
      └── CollisionObject3D
           └── PhysicsBody3D
                └── RigidBody3D
                     └── VehicleBody3D
```

### Key features
- Simulates a vehicle chassis with configurable mass, friction, and suspension properties.  
- Works together with `VehicleWheel3D` nodes that model the car’s wheels.  
- Provides automatic steering, braking, and torque control via exposed properties and methods.  

### Core properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `engine_force` | `float` | `0.0` | Forward/backward force applied to the car. |
| `brake` | `float` | `0.0` | Braking force. |
| `steering` | `float` | `0.0` | Steering angle for the front wheels. |
| `wheel_damping_compression` | `float` | `10.0` | Damping when the wheel compresses. |
| `wheel_damping_relaxation` | `float` | `10.0` | Damping when the wheel relaxes. |
| `wheel_radius` | `float` | `0.5` | Radius of the wheel. |
| `wheel_friction_slip` | `float` | `0.0` | Slip factor for wheel friction. |
| `wheel_spinning_speed` | `float` | `0.0` | Current wheel spin speed (read‑only). |

### Core methods
| Method | Return type | Arguments | Description |
|--------|------------|-----------|-------------|
| `set_engine_force(float value)` | `void` | `value` | Set the engine force applied to the vehicle. |
| `get_engine_force()` | `float` | — | Returns the current engine force. |
| `set_brake(float value)` | `void` | `value` | Set the brake force. |
| `get_brake()` | `float` | — | Returns the current brake value. |
| `set_steering(float value)` | `void` | `value` | Set the steering angle. |
| `get_steering()` | `float` | — | Returns the current steering angle. |

### Usage example (GDScript)

```gdscript
extends VehicleBody3D

func _physics_process(delta):
    var input = Input.get_action_strength("move_forward") - Input.get_action_strength("move_backward")
    set_engine_force(2000 * input)

    var steer_input = Input.get_action_strength("turn_right") - Input.get_action_strength("turn_left")
    set_steering(steer_input)

    if Input.is_action_just_pressed("brake"):
        set_brake(10)
    else:
        set_brake(0)
```

### Related classes
- **VehicleWheel3D** – Represents a single wheel attached to a `VehicleBody3D`.  
- **VehicleCamouflage3D** (if applicable) – Optional visual component.

### Documentation links
- [VehicleBody3D API reference](https://docs.godotengine.org/en/stable/classes/class_vehiclebody3d.html)  
- [VehicleWheel3D API reference](https://docs.godotengine.org/en/stable/classes/class_vehiclewheel3d.html)

---  

> **Tip:** Pair a `VehicleBody3D` with four `VehicleWheel3D` nodes (two front, two rear) and adjust their properties for realistic suspension and handling.  

*(This markdown is a concise summary of the class reference; for full details visit the official Godot docs.)*