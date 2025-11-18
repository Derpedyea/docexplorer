# Basic XR Locomotion

> For basic locomotion we’re going to continue using our Godot XR Tools library.  
> The library contains both basic movement features as more advanced features.

---

## Adding our player body

The first step is to add a *player body* to your scene.  
Create a new **`XRNode`** node (or **`PlayerBody3D`** if you’re using Godot 4.0+).  
Attach the XR Tools locomotion script to this node so it can handle user input and movement.

```gdscript
# Example: attaching the locomotion script
var locomotion = preload("res://addons/godot-xr-tools/xr_player_body.gd").new()
add_child(locomotion)
```

---

## Setting up the scene

1. **Create a new scene** – choose *Node3D* as the root.  
2. **Add an `XROrigin3D` node** to represent the VR origin.  
3. **Attach a `Camera3D`** as a child of the origin to serve as the viewpoint.  
4. **Add a `CollisionShape3D`** and `RigidBody3D`/`CharacterBody3D` for the player.  
5. **Enable `Headset` and `Controller` nodes** under the origin for tracking.

```
Scene Tree
├─ XROrigin3D
│  ├─ Camera3D
│  ├─ CollisionShape3D
│  ├─ PlayerBody3D
│  └─ XRController3D (left)
│  └─ XRController3D (right)
```

---

## Basic locomotion features

The XR Tools library offers two simple locomotion styles:

| Feature | Description | Usage |
|---------|-------------|-------|
| **Teleport** | Instant reposition to a valid surface | Triggered by a controller button |
| **Snap‑turn** | Rotate the player in discrete increments | Triggered by a thumb‑stick or analog input |

### Teleport

1. Enable the `Teleport` component in the `PlayerBody3D`.  
2. Configure the maximum range, cooldown, and visual feedback (reticle).  
3. Map a controller button to start the teleport gesture.

```gdscript
# Teleport example
onready var teleport = $Teleport

func _input(event):
    if event.is_action_pressed("ui_accept"):
        teleport.start()
```

### Snap‑turn

```gdscript
# Snap‑turn example
onready var snap_turn = $SnapTurn

func _physics_process(delta):
    var input = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
    if abs(input) > 0.1:
        snap_turn.turn(input * 45)  # 45° increments
```

---

## Fine‑tuning movement

| Parameter | Typical value | Effect |
|-----------|---------------|--------|
| **Move speed** | `2.0 m/s` | Determines walking pace |
| **Gravity** | `9.8 m/s²` | Affects jump height and fall speed |
| **Jump force** | `5.0` | Controls jump arc |

You can tweak these values directly on the `PlayerBody3D` node or expose them in a script.

```gdscript
# Adjusting movement parameters
var move_speed = 3.0
var gravity = 12.0
var jump_force = 6.0
```

---

## Adding animation (optional)

If your player model has animations, attach an `AnimationPlayer` to the `PlayerBody3D`.  
Connect the locomotion signals (e.g., `started_moving`, `stopped_moving`) to play the correct animation.

```gdscript
onready var anim = $AnimationPlayer

func _on_moved():
    anim.play("Run")

func _on_stopped():
    anim.play("Idle")
```

---

## Testing

1. Export the project for your target XR platform (OpenXR, Oculus, etc.).  
2. Run the build and verify that teleport, snap‑turn, and walking work as expected.  
3. Fine‑tune the parameters until the motion feels natural.

---

## Further reading

- [XR Tools documentation](https://github.com/godotxr/godot-xr-tools)  
- [Godot 4.0 XR Features](https://docs.godotengine.org/en/stable/tutorials/xr/index.html)  
- [Advanced locomotion techniques](https://docs.godotengine.org/en/stable/tutorials/xr/advanced_xr_locomotion.html)

--- 

*This tutorial is part of the official Godot Engine documentation.*