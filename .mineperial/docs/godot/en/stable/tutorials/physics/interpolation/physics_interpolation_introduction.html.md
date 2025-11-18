**Note**: The following Markdown is a concise, faithful re‑formatting of the *Physics Interpolation – Introduction* page from the Godot Engine documentation. It preserves the original structure, headings, code examples, lists and key links.

---

# Introduction

Physics ticks (sometimes called *iterations* or *physics frames*) and rendered frames are two distinct loops that run in the Godot engine. Understanding the difference between them—and how they interact—is essential for getting smooth, consistent movement in your game.

## Physics ticks vs. rendered frames

| Loop | Frequency | Purpose |
|------|-----------|---------|
| **Physics tick** | Fixed time step (default 1/60 s) | Handles physics simulation, collision detection, and other deterministic updates. |
| **Rendered frame** | Variable (depends on monitor refresh and GPU load) | Draws the scene to the screen. |

Because the render loop can run faster or slower than the physics loop, objects that rely on physics may appear to jitter or lag behind. To solve this, Godot offers **physics interpolation**, which blends the positions of physics objects between ticks so that their visual representation remains smooth.

## What is physics interpolation?

When `physics_interpolation` is enabled (the default setting in Godot 4), the engine:

1. **Stores the previous and current physics positions** of every `RigidBody`, `CharacterBody`, etc.
2. **Interpolates** those positions based on the time elapsed since the last physics tick.
3. Uses the interpolated value for rendering.

This produces a visual effect where objects move smoothly even if the physics tick runs at a lower frequency than the frame rate.

> **Tip:** You can toggle interpolation in **Project Settings → Physics → 2D/3D → Use Interpolation**.

## Why do you need interpolation?

- **Smooth movement on high‑frame‑rate displays**: Without interpolation, physics objects would move only once every physics tick, resulting in a blocky appearance on fast monitors.
- **Consistent gameplay**: When physics runs slower (e.g., on low‑end hardware), interpolation keeps visual motion fluid while preserving simulation accuracy.
- **Networked multiplayer**: Interpolation hides the latency between updates from the server and the client.

## Quick example

```gdscript
# This script moves a RigidBody2D with interpolation enabled.
extends RigidBody2D

func _physics_process(delta):
    var direction = Vector2.ZERO
    if Input.is_action_pressed("ui_right"):
        direction.x += 1
    if Input.is_action_pressed("ui_left"):
        direction.x -= 1
    if Input.is_action_pressed("ui_down"):
        direction.y += 1
    if Input.is_action_pressed("ui_up"):
        direction.y -= 1
    linear_velocity = direction.normalized() * 200
```

With interpolation on, the body will appear to glide smoothly even if the physics step is throttled.

## Next steps

1. **Enable interpolation** in Project Settings (default is already on).
2. **Read** the guide on *Using physics interpolation* for advanced configurations such as disabling interpolation for specific objects or tweaking the interpolation factor.

---

*For a deeper dive into using and configuring physics interpolation, see the [Using physics interpolation](https://docs.godotengine.org/en/stable/tutorials/physics/interpolation/using_physics_interpolation.html) page.*