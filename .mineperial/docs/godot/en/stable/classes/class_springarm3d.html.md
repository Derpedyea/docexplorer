**SpringArm3D**

*Class reference – Godot Engine (stable)*  

---

### Inheritance

```
SpringArm3D
 └─ Node3D
     └─ Node
         └─ Object
```

### Description

`SpringArm3D` casts a ray (or a shape) along its local Z‑axis and automatically moves all its child nodes to the nearest collision point.  
It is typically used for third‑person cameras, where the arm length can smoothly retract when an obstacle blocks the view of the target.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collision_mask` | `int` | `0` | Physics layers that the arm can collide with. |
| `collision_layer` | `int` | `0` | Physics layer of the arm itself. |
| `collision_point` | `Vector3` | `Vector3(0,0,0)` | The point where the arm ends after collision detection. |
| `length` | `float` | `1.0` | Desired length of the arm before collision. |
| `snap` | `float` | `0.1` | Distance to snap children to the collision point. |
| `target_position` | `Vector3` | `Vector3(0,0,0)` | The position the arm attempts to reach. |
| `use_collision` | `bool` | `true` | Whether to enable collision detection. |
| `use_smooth` | `bool` | `true` | Whether to smoothly interpolate between positions. |

> **Note:** The actual property list may vary; refer to the official Godot documentation for the full table.

---

## Methods

| Method | Returns | Parameters | Description |
|--------|---------|------------|-------------|
| `get_collision_point()` | `Vector3` | – | Returns the current collision point. |
| `set_length(length: float)` | – | `length` | Sets the desired arm length. |
| `get_length()` | `float` | – | Gets the current arm length. |
| `force_update()` | – | – | Forces a physics update and recomputation of the collision point. |

> **Tip:** You can adjust the arm’s behaviour by overriding `_process()` or `_physics_process()` if you need custom timing.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `collision_detected` | `Vector3 collision_point` | Emitted when the arm’s ray hits an object. |
| `collision_exited` | – | Emitted when the arm stops colliding with any object. |

---

### Usage Example (GDScript)

```gdscript
extends SpringArm3D

func _ready():
    length = 4.0
    collision_mask = 1 << 1  # collide with layer 1

func _physics_process(delta):
    # Smoothly adjust length based on some condition
    if Input.is_action_pressed("ui_accept"):
        length = lerp(length, 2.0, delta * 5)
```

---

### Further Reading

- **[Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html)** – Often used together with `SpringArm3D` for smooth third‑person camera setups.  
- **[CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)** – For customizing collision shapes used by the arm.

---

*For a complete API reference, see the official Godot Engine class reference.*