# GPUParticles2D

**Inherits**  
`Node2D` &lt; `CanvasItem` &lt; `Node` &lt; `Object`

---

## Overview

`GPUParticles2D` is a 2D particle emitter node designed to create a wide range of particle systems and effects using the GPU for efficient rendering. It provides a rich set of properties and options for controlling the appearance, behavior, and lifecycle of particles.

---

## Key Features

- **GPU‑accelerated** particle system – high performance, low CPU load
- **Extensive customization** via properties, materials, and shaders
- Supports **modulated textures, colors, and shapes**
- **Lifetime, velocity, spread, and damping** control
- **Emission shape** options: points, rectangles, circles, etc.
- **Randomness** and **spread** for natural variation
- **Process mode** and **emission rate** settings
- Built‑in **restart** and **one‑shot** emission modes
- **Lifetime** and **speed scale** modifiers
- Integration with the Godot **Material** system
- **Custom scripts** can be attached for advanced behavior

---

## Usage

1. **Add a `GPUParticles2D` node** to your scene.
2. Configure its properties in the inspector or via code.
3. Assign a **texture** and/or **material** to define the particle appearance.
4. Set the **emission parameters** (rate, lifetime, speed, etc.).
5. Optionally, write a script to control emission programmatically.
6. Run or play the scene to see the particles in action.

---

## Important Properties

| Property | Type | Description |
|----------|------|-------------|
| `emitting` | `bool` | Whether the particle system is currently emitting. |
| `amount` | `int` | Number of particles emitted in one burst. |
| `lifetime` | `float` | Lifetime of each particle in seconds. |
| `one_shot` | `bool` | Emit once and then stop. |
| `pre_process_time` | `float` | Time to pre‑process before emission starts. |
| `explosiveness` | `float` | How often particles are emitted in bursts. |
| `speed_scale` | `float` | Multiplier for particle speed. |
| `gravity` | `Vector2` | Gravity vector applied to all particles. |
| `direction` | `float` | Main emission direction in degrees. |
| `spread` | `float` | Spread angle around the main direction. |
| `color` | `Color` | Base color of particles. |
| `color_ramp` | `Gradient` | Color gradient over particle lifetime. |
| `initial_velocity` | `float` | Initial speed of each particle. |
| `turbulent_flow` | `float` | Amount of turbulence. |
| `scale` | `Vector2` | Scale of particle sprite. |
| `scale_curve` | `Curve` | Scale curve over lifetime. |
| `custom_aabb` | `AABB` | Custom axis-aligned bounding box for emission. |
| `emission_shape` | `Enum` | Shape of the emission area (point, rectangle, etc.). |

*(This table is not exhaustive; refer to the Godot documentation for a full list of properties.)*

---

## Signals

| Signal | Description |
|--------|-------------|
| `particle_process_finished()` | Emitted when the last particle of a one‑shot emission finishes. |
| `emission_finished()` | Emitted when the emitter stops after a one‑shot emission. |

---

## Example Code

```gdscript
extends GPUParticles2D

func _ready():
    # Configure basic properties
    amount = 100
    lifetime = 2.0
    one_shot = false
    emitting = true

    # Set a material if needed
    var mat = ShaderMaterial.new()
    mat.shader = preload("res://particles_shader.tres")
    material = mat
```

---

## Resources

- [Godot Docs: GPUParticles2D](https://docs.godotengine.org/en/stable/classes/class_gpuparticles2d.html)

---