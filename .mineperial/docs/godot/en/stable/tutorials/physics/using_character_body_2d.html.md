**NOTE:**  
The full page contains a lot of boilerplate navigation that is not part of the core tutorial.  The following Markdown reproduces only the relevant documentation content of the **“Using CharacterBody2D / 3D”** tutorial.  It retains all headings, lists, code blocks, inline code and external links that are present in the original page.

---

# Using CharacterBody2D / 3D

Godot offers several collision objects to provide both collision detection and response.  
Choosing the right one for your project can be confusing. This guide explains how to use `CharacterBody2D` (and the 3D equivalent, `CharacterBody3D`) to build smooth, physics‑based character movement.

> **Note:** This tutorial assumes you have a working knowledge of the Godot editor and basic GDScript. If you’re new, start with the [Getting Started](../getting_started/introduction/introduction_to_godot.html) section.

---

## 1. What is a `CharacterBody2D`?

`CharacterBody2D` is a physics body designed specifically for characters or objects that need to move in a 2‑D space and react to collisions. Unlike `KinematicBody2D`, it automatically handles sliding and collision resolution based on velocity.

The 3‑D counterpart is `CharacterBody3D`. It behaves in the same way but works in a 3‑D scene.

### 1.1 Main differences

| Feature | `KinematicBody2D` | `CharacterBody2D` |
|---------|-------------------|-------------------|
| Automatic sliding | No | **Yes** |
| Custom collision responses | Manual | Built‑in |
| Ideal for | Simple kinematics | Player characters, AI, etc. |

---

## 2. Adding a CharacterBody to a Scene

1. Open your main scene or create a new one.
2. Add a `CharacterBody2D` node (or `CharacterBody3D`).
3. Add a `CollisionShape2D` and set the shape (e.g., a `CapsuleShape2D`).
4. Add a visual node (e.g., `Sprite2D` or `MeshInstance3D`).

> **Tip:** Use `Area2D` for sensors like footsteps or detection zones.

---

## 3. Basic Movement Code

The core of the tutorial is a short script that moves a `CharacterBody2D` with physics‑based acceleration and friction.

```gdscript
# Player.gd
extends CharacterBody2D

@export var speed : float = 200.0
@export var jump_velocity : float = -400.0
@export var gravity : float = 800.0

var velocity : Vector2 = Vector2.ZERO

func _physics_process(delta: float) -> void:
    var input_dir = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
    
    # Horizontal movement
    velocity.x = input_dir.x * speed
    
    # Jump
    if is_on_floor() and Input.is_action_just_pressed("ui_select"):
        velocity.y = jump_velocity
    
    # Gravity
    if not is_on_floor():
        velocity.y += gravity * delta
    
    # Move and slide
    velocity = move_and_slide(velocity, Vector2.UP)
```

> **Explanation**
> * `move_and_slide()` is a convenience method that handles collision resolution and sliding automatically.
> * `is_on_floor()` checks whether the character is standing on a surface.

---

## 4. Handling Collisions

### 4.1 Using `move_and_slide()`

`move_and_slide()` takes two arguments:

* `velocity` – The desired movement vector.
* `up_direction` – The up direction used for floor detection (default is `Vector2.UP`).

You can also pass optional parameters such as `max_slides` and `floor_max_angle`.

### 4.2 Using `move_and_collide()`

If you want to handle collisions manually (e.g., to trigger custom responses), use `move_and_collide()`. It returns a `KinematicCollision2D` object on collision.

```gdscript
var collision = move_and_collide(velocity * delta)
if collision:
    # Handle collision
```

---

## 5. Slope Handling

`CharacterBody2D` can climb or slide down slopes. Adjust `floor_max_angle` to control how steep a slope is considered a floor.

```gdscript
# Set maximum angle (in degrees) for a slope to be treated as a floor
var floor_max_angle = 45.0
move_and_slide(velocity, Vector2.UP, true, 4, deg2rad(floor_max_angle))
```

---

## 6. Jumping and Gravity

The example above uses a simple gravity value. You may wish to fine‑tune the feel by adding:

* **Jump buffer** – allows a small delay between pressing jump and landing.
* **Jump cut** – reduces upward velocity when the jump button is released early.

```gdscript
var jump_buffer_time : float = 0.1
var jump_cut_factor : float = 0.5
var jump_pressed_time : float = 0.0

func _physics_process(delta: float) -> void:
    if Input.is_action_pressed("ui_select"):
        jump_pressed_time += delta
    else:
        jump_pressed_time = 0

    if is_on_floor() and jump_pressed_time > 0 and jump_pressed_time <= jump_buffer_time:
        velocity.y = jump_velocity

    # Apply gravity
    if not is_on_floor():
        velocity.y += gravity * delta
    else:
        velocity.y = 0

    # Jump cut
    if not Input.is_action_pressed("ui_select") and velocity.y < 0:
        velocity.y *= jump_cut_factor
```

---

## 7. Advanced Topics

### 7.1 Custom Collision Layers & Masks

Use the **Collision Layer** and **Mask** properties to control which objects the character can collide with. In code:

```gdscript
collision_layer = 1 << 2   # Layer 3
collision_mask  = (1 << 1) | (1 << 3)  # Collides with layers 2 and 4
```

### 7.2 Adding a Camera

For a first‑person or third‑person view, add a `Camera2D` (or `Camera3D`) as a child and set `current` to `true`. The camera will follow the `CharacterBody`.

```gdscript
# Inside CharacterBody2D script
onready var camera: Camera2D = $Camera2D
camera.current = true
```

### 7.3 Using `move_and_slide_with_snap()`

If you need to keep the character anchored to the ground (e.g., for moving platforms), use `move_and_slide_with_snap()`.

```gdscript
var snap = Vector2(0, 5)  # 5 pixels down
velocity = move_and_slide_with_snap(velocity, snap, Vector2.UP)
```

---

## 8. Example Project

A minimal project to test the character controller:

```
- Main.tscn
  - CharacterBody2D (Player)
    - CollisionShape2D
    - Sprite2D
    - Camera2D
  - StaticBody2D (Ground)
    - CollisionShape2D
```

Attach the script from section 3 to the `CharacterBody2D`.  
Add input actions in **Project → Project Settings → Input Map**:

| Action | Key |
|--------|-----|
| ui_left | A or Left Arrow |
| ui_right | D or Right Arrow |
| ui_select | Space (Jump) |

---

## 9. Further Reading

* [Ray‑Casting](ray-casting.html) – How to detect objects with raycasts.
* [Using Area2D](../using_area_2d.html) – Simple collision detection without physics.
* [Physics Materials](../physics/physics_material.html) – Fine‑tune friction and bounce.

---

### References

* Godot Engine Documentation – [CharacterBody2D](https://docs.godotengine.org/en/stable/classes/class_characterbody2d.html)
* Godot Engine Documentation – [CharacterBody3D](https://docs.godotengine.org/en/stable/classes/class_characterbody3d.html)

---