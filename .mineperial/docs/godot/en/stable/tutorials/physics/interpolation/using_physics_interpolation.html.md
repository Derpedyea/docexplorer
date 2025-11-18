**Using physics interpolation**  
===============================

*Source:* <https://docs.godotengine.org/en/stable/tutorials/physics/interpolation/using_physics_interpolation.html>  

---  

## Overview

Physics interpolation smooths the motion of objects that move on the physics thread so that the visual representation stays fluid even when the physics tick is slower than the render frame rate.  
This tutorial explains how to enable and use interpolation in a Godot project, what the built‑in helper does, and the common pitfalls to watch out for.

> ⚠️ **Caveat** – interpolation only works for objects that are updated inside `_physics_process()`. If you move a node directly inside `_process()` you’ll need to handle the interpolation manually.

---

## 1. Enabling physics interpolation

### 1.1. Project‑wide setting

1. Open **Project → Project Settings**.  
2. Go to the **Physics** section → **General** → **Use physics interpolation**.  
3. Check the box.  

### 1.2. Per‑node setting

If you need interpolation only for a specific node:

```gdscript
# In the node’s script
func _ready():
    # Enable interpolation for this node
    set_physics_interpolation_enabled(true)
```

---

## 2. How Godot implements interpolation

When interpolation is enabled, the engine records the previous and the new global transform of each interpolated node at each physics tick. During rendering Godot blends the two transforms using the ratio `(1.0 - delta)` where `delta` is the frame‑time since the last physics tick.

The engine automatically interpolates:

- `Node2D.global_position`  
- `Node3D.global_transform`  
- `Node2D.global_rotation`  
- `Node3D.global_rotation`  

If you modify other properties manually (e.g., a custom `Vector3` stored in a script) you have to implement your own interpolation logic.

---

## 3. Common use‑case example

Suppose you have a `KinematicBody2D` moving with a rigid‑body‑like velocity:

```gdscript
extends KinematicBody2D

var velocity : Vector2 = Vector2.ZERO

func _physics_process(delta):
    # Apply input
    velocity.x = Input.get_action_strength("ui_right") - Input.get_action_strength("ui_left")
    velocity.y = Input.get_action_strength("ui_down") - Input.get_action_strength("ui_up")

    # Move the body
    move_and_slide(velocity * 200)
```

With physics interpolation enabled the sprite will move smoothly even if the physics tick runs at 30 Hz and the render FPS is 60 Hz.

---

## 4. Caveats & troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| **Jittery movement** | Interpolation is disabled for the node | Enable it in Project Settings or via script |
| **Camera lag** | Camera follows a node that isn’t interpolated | Call `camera.set_follow_smoothing(0.1)` or enable interpolation on the target |
| **Non‑linear motion** | Using `lerp()` inside `_process()` on the same property that Godot interpolates | Remove the manual lerp; let the engine do it |
| **Physics bugs** | Interpolation used on a node that is also manipulated by a physics body in a non‑linear way | Disable interpolation or override `_get_physics_interpolated()` |

---

## 5. Advanced topics

* **Custom interpolation** – override `_get_physics_interpolated()` in a script to provide your own interpolation for non‑transform properties.  
* **Multiple interpolation steps** – if you need to interpolate more than one property per node, store the previous values yourself and blend them in `_process()` based on `Engine.get_physics_interpolation_fraction()`.  
* **Performance** – interpolation adds a small overhead. Disable it on nodes that are already perfectly synced or on nodes that are rarely visible.

---

## 6. Next steps

* Read the companion page on **Advanced physics interpolation** for more complex scenarios (e.g., ragdoll physics, networked games).  
* Experiment with the **Physics Interpolation Demo** that ships with Godot 4 to see the difference in real time.  

--- 

*Author: Godot Docs team – Version: stable*