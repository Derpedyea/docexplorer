**Advanced Physics Interpolation**  
*Godot Engine (stable) documentation*

---

### Overview

When a game runs with a fixed‑time‑step physics engine, the visual frame updates (render loop) and the physics simulation are separated.  
To keep objects moving smoothly, **physics interpolation** blends the previous and current physics transforms for each rendered frame.  
This page explains the default behaviour, when it’s useful, and how to fine‑tune or replace it for more complex scenarios.

---

## 1. Basics of physics interpolation

| Feature | What it does | Typical use‑case |
|---------|--------------|-------------------|
| `PhysicsDirectSpaceState` | Accesses the physics world during rendering | Custom ray casts that need up‑to‑date positions |
| `delta` | Time passed to `_process()` | Frame‑independent movement |
| `physics_process_delta_time` | Fixed physics timestep | Predictable physics simulation |

### 1.1 The default behaviour

* `Node2D`, `Node3D` and their derivatives expose an `interpolate` flag.  
  When `true`, the node’s global transform is linearly interpolated between the last and the current physics step.
* For most simple games this produces acceptable visual smoothness.

### 1.2 When the default isn’t enough

* **High speed or large physics objects** – linear interpolation can cause jitter or ghosting.  
* **Custom physics calculations** – you may need to apply your own interpolation logic or use a higher‑order algorithm.  
* **Complex animations** – blending physics with animation tracks can introduce visual artifacts.

---

## 2. Enabling and disabling interpolation

```gdscript
# Example for a RigidBody2D
extends RigidBody2D

func _ready() -> void:
    # Disable automatic interpolation to handle it manually
    set_physics_process(true)
    set_process(true)
    set_interpolated(false)   # <-- disable built‑in interpolation
```

> **Tip** – If you disable it, you’ll need to interpolate the `transform` yourself in `_process(delta)`.

---

## 3. Manual interpolation

Below is a simple helper that interpolates any `Transform2D` or `Transform3D`:

```gdscript
func interpolate_transform(previous: Transform, current: Transform, alpha: float) -> Transform:
    var interpolated = previous.looking_at(current.origin, Vector3.UP)
    interpolated.origin = previous.origin.lerp(current.origin, alpha)
    return interpolated
```

> **Note** – `alpha` is computed as  
> `alpha = (OS.get_ticks_msec() - physics_tick_end_ms) / physics_step_ms`

You can cache `previous` in `_physics_process()` and apply the interpolation in `_process()`.

---

## 4. Advanced interpolation techniques

| Technique | When to use | Example |
|-----------|-------------|---------|
| **Cubic interpolation** | Smoother curves for camera motion | `interpolate_curve` from `Tween` node |
| **Exponential smoothing** | Reduce jitter for fast‑moving objects | `smooth_value = lerp(smooth_value, target, 0.1)` |
| **Predictive interpolation** | When server updates lag behind | Estimate next position based on velocity |

### 4.1 Example: Smooth camera following

```gdscript
extends Camera2D

var target_position : Vector2
var smooth_factor : float = 0.1

func _process(delta: float) -> void:
    target_position = target.global_position
    global_position = global_position.linear_interpolate(target_position, smooth_factor)
```

---

## 5. Interpolating physics objects in 3D

For 3D you often want to blend the `global_transform` of a `RigidBody` or `KinematicBody`.  
Because 3D transforms involve rotation, use `slerp` for the basis:

```gdscript
var prev_transform : Transform
var current_transform : Transform

func _physics_process(delta):
    prev_transform = current_transform
    current_transform = global_transform

func _process(delta):
    var alpha = (OS.get_ticks_msec() - physics_tick_end_ms) / physics_step_ms
    var interpolated = Transform()
    interpolated.origin = prev_transform.origin.lerp(current_transform.origin, alpha)
    interpolated.basis = prev_transform.basis.slerp(current_transform.basis, alpha)
    global_transform = interpolated
```

---

## 6. Common pitfalls

1. **Forgetting to update `previous`** – leads to the same value being used repeatedly.  
2. **Using non‑linear interpolation with physics bodies** – may create “snap” when the velocity changes abruptly.  
3. **Mixing interpolation with animation blending** – double‑interpolates rotation, causing visual glitches.

---

## 7. Reference

- **`Node2D.set_interpolated(bool)`** – enable/disable interpolation.  
- **`Node3D.set_interpolated(bool)`** – same for 3D.  
- **`PhysicsServer`** – low‑level API for custom physics state queries.

For more information, see:

- [Using physics interpolation](/tutorials/physics/interpolation/using_physics_interpolation.html)  
- [2D and 3D physics interpolation](/tutorials/physics/interpolation/2d_and_3d_physics_interpolation.html)

---

> *This page is part of the Godot Engine documentation – see the [main docs](https://docs.godotengine.org/) for more topics.*