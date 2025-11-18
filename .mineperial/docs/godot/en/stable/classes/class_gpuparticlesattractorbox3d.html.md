**Note:** The original page contains the full Godot class reference for `GPUParticlesAttractorBox3D`. The following Markdown provides a cleaned‑up version of that reference. Sections are arranged to mirror the structure of the official documentation: inheritance, description, properties, methods, signals, and notes about usage.

---

# GPUParticlesAttractorBox3D

> **Inherits:** `GPUParticlesAttractor3D` → `VisualInstance3D` → `Node3D` → `Node` → `Object`

A **box‑shaped attractor** that influences the motion of particles emitted by `GPUParticles3D` nodes.  
It can be used to pull or repel particles within a defined rectangular volume in 3‑D space.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `Vector3` | `Vector3(1, 1, 1)` | Dimensions of the attraction box (in local space). |
| `offset` | `Vector3` | `Vector3(0, 0, 0)` | Position offset of the box relative to the node’s origin. |
| `strength` | `float` | `1.0` | Strength of the attraction force. Positive values attract; negative values repel. |
| `attenuation` | `float` | `1.0` | Attenuation of the force over distance (0 – no attenuation, 1 – full). |
| `enabled` | `bool` | `true` | Whether the attractor is active. |
| `gravity_scale` | `float` | `1.0` | Scale factor for the attractor’s gravity influence. |

> **Tip:** Adjust the `size` to match the visual bounds of a collider or the desired volume of influence.  
> The `offset` is useful when the attractor node is positioned at the center of a larger scene object.

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_size(size: Vector3)` | `void` | Sets the size of the attractor box. |
| `get_size() -> Vector3` | `Vector3` | Returns the current box size. |
| `set_offset(offset: Vector3)` | `void` | Sets the positional offset of the box. |
| `get_offset() -> Vector3` | `Vector3` | Returns the current offset. |
| `set_strength(strength: float)` | `void` | Sets the attractor force strength. |
| `get_strength() -> float` | `float` | Retrieves the current strength value. |
| `set_attenuation(atten: float)` | `void` | Sets the attenuation factor. |
| `get_attenuation() -> float` | `float` | Retrieves the attenuation value. |

> **Note:** These methods are wrappers around the underlying property setters/getters. You can also access the properties directly in GDScript or C#.

---

## Signals

No custom signals are emitted by this class.

---

## Example Usage

```gdscript
# GDScript
extends GPUParticlesAttractorBox3D

func _ready():
    size = Vector3(2, 3, 4)
    offset = Vector3(0, 1, 0)
    strength = 5.0
    attenuation = 0.8
```

```csharp
// C#
public override void _Ready()
{
    Size = new Vector3(2, 3, 4);
    Offset = new Vector3(0, 1, 0);
    Strength = 5.0f;
    Attenuation = 0.8f;
}
```

Attach this node to your scene, then add a `GPUParticles3D` node that references the attractor in its **Attractors** list. Particles within the box will be pulled or repelled according to the defined strength and attenuation.

---

## Related Nodes

- `GPUParticlesAttractorSphere3D` – spherical attractor
- `GPUParticlesAttractorMesh3D` – mesh‑based attractor
- `GPUParticlesAttractorDirectional` – directional attractor (deprecated)

---

## Documentation References

- [Godot Engine Manual – Particles](https://docs.godotengine.org/en/stable/tutorials/3d/particles.html)
- [Class Reference – GPUParticlesAttractor3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractor3d.html)

---