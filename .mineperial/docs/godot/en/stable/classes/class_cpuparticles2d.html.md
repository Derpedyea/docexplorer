**CPUParticles2D** – Godot Engine 4.x documentation

---

### Overview
`CPUParticles2D` is a CPU‑based 2‑D particle emitter used to create a variety of particle systems and effects. It is part of the `Node2D` hierarchy and inherits from `CanvasItem` → `Node` → `Object`.

> **Note**: For GPU‑accelerated particle effects, see `GPUParticles2D`.

---

### Inheritance
```
Object
  └─ Node
      └─ CanvasItem
          └─ CPUParticles2D
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `ready` | Emitted when the node is added to the scene tree. |
| `finished` | Emitted when all particles have finished emitting. |

*(*Actual signal list may vary – check the official docs for the full table.*)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amount` | `int` | `100` | Number of particles to emit. |
| `lifetime` | `float` | `1.0` | Lifetime of each particle in seconds. |
| `speed_scale` | `float` | `1.0` | Multiplies the speed of all particles. |
| `preprocess` | `float` | `0.0` | Number of seconds of pre‑processing time before the emitter starts. |
| `texture` | `Texture2D` | `null` | Texture to use for each particle. |
| `emitting` | `bool` | `false` | Whether the emitter is actively emitting particles. |
| `process_material` | `ShaderMaterial` | `null` | Material used to process particles on the CPU. |

*(*The real property list is longer; this is a trimmed example.*)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `restart()` | `void` | Restarts the particle system from the beginning. |
| `set_amount(int)` | `void` | Set the number of particles. |
| `get_amount()` | `int` | Retrieve the current amount. |
| `set_lifetime(float)` | `void` | Set particle lifetime. |
| `get_lifetime()` | `float` | Retrieve particle lifetime. |
| `set_speed_scale(float)` | `void` | Scale particle speed. |
| `get_speed_scale()` | `float` | Retrieve current speed scale. |
| `set_preprocess(float)` | `void` | Set pre‑processing time. |
| `get_preprocess()` | `float` | Retrieve pre‑processing time. |
| `set_emitting(bool)` | `void` | Enable/disable emission. |
| `is_emitting()` | `bool` | Check if emitting. |
| `set_texture(Texture2D)` | `void` | Assign texture. |
| `get_texture()` | `Texture2D` | Get current texture. |
| `set_process_material(ShaderMaterial)` | `void` | Set processing material. |
| `get_process_material()` | `ShaderMaterial` | Get current processing material. |

*(*See the full method reference for additional overloads and helper functions.*)*

---

## Enums

```gdscript
enum BlendMode { 
    ADD,         # Additive blending
    SUBTRACT,    # Subtractive blending
    MULTIPLY,    # Multiplicative blending
    MIX           # Default blending
}
```

---

## Usage Example

```gdscript
var particles = CPUParticles2D.new()
particles.texture = preload("res://particle.png")
particles.amount = 200
particles.lifetime = 2.0
particles.emitting = true
add_child(particles)
```

---

### Related Nodes

- **GPUParticles2D** – GPU‑based 2‑D particle emitter.
- **CPUParticles3D** – CPU‑based 3‑D particle emitter.

---