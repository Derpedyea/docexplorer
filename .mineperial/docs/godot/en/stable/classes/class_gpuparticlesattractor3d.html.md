# GPUParticlesAttractor3D

> **Abstract base class** for 3‑D particle attractors.

> **Inheritance hierarchy**

```
Object
 └─ Node
     └─ Node3D
         └─ VisualInstance3D
             └─ GPUParticlesAttractor3D
```

> **Inherited by**

* `GPUParticlesAttractorBox3D`
* `GPUParticlesAttractorSphere3D`
* `GPUParticlesAttractorVectorField3D`

---

## Overview

`GPUParticlesAttractor3D` is an abstract node that can be attached to a `GPUParticles3D` emitter to influence particle motion with a custom attractor field.  
The actual behaviour is defined by the concrete subclasses (Box, Sphere, Vector Field), which expose additional properties specific to their shape.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shape` | `int` | `SHAPE_NONE` | The attractor shape. Subclasses expose specific shape enums. |
| `radius` | `float` | `1.0` | Radius of the influence area. |
| `strength` | `float` | `1.0` | Attraction strength (positive pulls, negative repels). |
| `enabled` | `bool` | `true` | Whether the attractor is active. |
| `normal` | `Vector3` | `Vector3.UP` | Normal direction for planar attractors. |
| `size` | `Vector3` | `Vector3.ONE` | Size for box attractors. |
| `center` | `Vector3` | `Vector3.ZERO` | Center point for spherical attractors. |

> *Note*: Many of these properties are only available on specific derived classes and are not shown here.

---

## Signals

| Signal | Description |
|--------|-------------|
| `attractor_changed()` | Emitted when any attractor parameter changes. |

---

## Methods

| Method | Return type | Description |
|--------|-------------|-------------|
| `get_attractor_type() -> int` | Returns the type of attractor. |
| `set_attractor_type(type: int) -> void` | Sets the type of attractor. |
| `get_global_transform() -> Transform3D` | Returns the global transform of the attractor. |
| `is_active() -> bool` | Returns whether the attractor is currently active. |
| `set_active(active: bool) -> void` | Enables or disables the attractor. |
| `apply_to_particles(particles: GPUParticles3D) -> void` | Applies the attractor effect to the given particle system. |

> **Inherited methods** – All methods from `VisualInstance3D`, `Node3D`, and `Node` are available.

---

## Usage Example

```gdscript
# Example: Using a sphere attractor to pull particles towards a point
var sphere := GPUParticlesAttractorSphere3D.new()
sphere.radius = 5
sphere.strength = 2
sphere.center = Vector3(0, 3, 0)
add_child(sphere)

var emitter := GPUParticles3D.new()
# ... configure the emitter ...
add_child(emitter)
```

---

## References

* [Godot Docs – GPUParticles3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticles3d.html)
* [Godot Docs – GPUParticlesAttractorBox3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorbox3d.html)
* [Godot Docs – GPUParticlesAttractorSphere3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorsphere3d.html)
* [Godot Docs – GPUParticlesAttractorVectorField3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorvectorfield3d.html)

---