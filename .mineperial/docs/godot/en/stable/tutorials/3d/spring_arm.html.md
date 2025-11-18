**Third‑person camera with spring arm**  
*(Godot Engine documentation – stable)*  

---

## 1. Introduction

In 3‑D games the camera usually follows and rotates around a character or vehicle.  
Godot makes this easy by using a **SpringArm3D** node to keep the camera at a fixed distance while automatically avoiding collisions with geometry.  

---

## 2. Scene setup

1. Create a new scene and add a **Character** root node (e.g. `KinematicBody3D` or `CharacterBody3D`).  
2. Add a **SpringArm3D** as a child of the character.  
3. Add a **Camera3D** as a child of the SpringArm.

```
Character
 ├─ SpringArm3D
 │    └─ Camera3D
```

### 2.1 SpringArm3D parameters

| Parameter | Purpose | Example value |
|-----------|---------|---------------|
| `length` | Distance from the parent to the camera | `4.0` |
| `anchor` | Where the arm attaches to the character (`base`, `center`, `head`, …) | `center` |
| `limit` | Collision distance threshold | `0.2` |

> **Tip** – Set `spring_offset` to `0.0` if you want the camera to be exactly at the length.

### 2.2 Camera3D parameters

| Parameter | Purpose | Example value |
|-----------|---------|---------------|
| `current` | Makes this camera the active one | `true` |
| `rotation` | Initial rotation (e.g. looking slightly downwards) | `-π/8` on the X‑axis |

---

## 3. Camera controls

Add a script to the character that handles mouse‑driven rotation and optionally vertical limits.

```gdscript
@tool
extends CharacterBody3D

@export var camera_speed : float = 0.5
@export var vertical_limit : float = 45.0 # degrees

var spring : SpringArm3D
var camera : Camera3D

func _ready() -> void:
    spring = $SpringArm3D
    camera = spring.get_node("Camera3D")

func _unhandled_input(event: InputEvent) -> void:
    if event is InputEventMouseMotion:
        _rotate_camera(event.relative)

func _rotate_camera(delta: Vector2) -> void:
    # Horizontal rotation
    rotate_y(-delta.x * camera_speed * 0.01)

    # Vertical rotation – clamp to avoid flipping
    var new_rot = spring.rotation_degrees
    new_rot.x = clamp(new_rot.x - delta.y * camera_speed * 0.01, -vertical_limit, vertical_limit)
    spring.rotation_degrees = new_rot
```

**What this does**

* `rotate_y` rotates the character horizontally around the Y axis.  
* The SpringArm’s `rotation_degrees` is updated to tilt the camera up/down while clamping the value to keep the view from flipping over the top.

---

## 4. Optional – Auto‑align with character movement

If you want the camera to always face the same direction the character is moving in, you can add the following to `_physics_process`:

```gdscript
func _physics_process(delta: float) -> void:
    var velocity = Vector3.ZERO
    if Input.is_action_pressed("move_forward"):
        velocity.z -= 1
    if Input.is_action_pressed("move_back"):
        velocity.z += 1
    if Input.is_action_pressed("move_left"):
        velocity.x -= 1
    if Input.is_action_pressed("move_right"):
        velocity.x += 1

    if velocity.length() > 0.1:
        velocity = velocity.normalized() * SPEED
        move_and_slide(velocity, Vector3.UP)

        # Align spring arm to movement direction
        var target = transform.basis.xform(velocity).normalized()
        var target_yaw = atan2(-target.x, -target.z)
        rotation.y = lerp_angle(rotation.y, target_yaw, 0.1)
```

---

## 5. Putting it together

1. **Create the scene** as described above.  
2. **Add the script** to the character node.  
3. **Configure input actions** (e.g. `move_forward`, `move_back`, `move_left`, `move_right`) in **Project → Project Settings → Input Map**.  
4. **Run** and test the camera.  
   * The camera should stay at a fixed distance, avoid obstacles automatically, and rotate smoothly with mouse movement.

---

## 6. Further reading

* [Godot 3.5 – Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html)  
* [Godot 3.5 – SpringArm3D](https://docs.godotengine.org/en/stable/classes/class_springarm3d.html)  
* [Godot 4.0 – Camera3D](https://docs.godotengine.org/en/stable/classes/class_camera3d.html)  
* [Godot 4.0 – SpringArm3D](https://docs.godotengine.org/en/stable/classes/class_springarm3d.html)

---