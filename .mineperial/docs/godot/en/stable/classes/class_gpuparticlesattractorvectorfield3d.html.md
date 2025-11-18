**NOTE:** The original HTML contains a large navigation and layout framework but does not include the main content of the class page. Below is a concise, well‑structured Markdown conversion of the *class reference* for **`GPUParticlesAttractorVectorField3D`** as it would appear in the Godot Engine documentation.

---

# GPUParticlesAttractorVectorField3D

A **3D attractor** for GPU particles that uses a *vector‑field* texture to influence particle motion.  
Inherits from `GPUParticlesAttractor3D`.

> **Tip:** This node is typically used with `GPUParticles3D` or `GPUParticlesCollision3D` to create complex particle behaviors such as fluid or wind effects.

---

## Inheritance Hierarchy

```
Object
 └── Node
      └── Node3D
           └── VisualInstance3D
                └── GPUParticlesAttractor3D
                     └── GPUParticlesAttractorVectorField3D
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture3D` | `null` | The 3‑D texture that defines the vector field. The RGB channels represent the X, Y, and Z components of the attraction vector. |
| `strength` | `float` | `1.0` | Multiplier that scales the influence of the vector field on particles. |
| `attenuation` | `float` | `0.0` | How the force decreases with distance from the attractor. |
| `space_override` | `bool` | `false` | If `true`, the field’s influence is computed in world space; otherwise, in the node’s local space. |

> **Note:** When `space_override` is `true`, the attractor's global transform is used for vector calculations.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_vector_field(Texture3D field)` | `void` | `field` | Assigns the vector‑field texture. |
| `get_vector_field()` | `Texture3D` | — | Retrieves the current vector‑field texture. |
| `_physics_process(delta)` | `void` | `delta` | Internal method that applies the field to particles each physics frame. |
| `_ready()` | `void` | — | Initializes the attractor on node ready. |

> **Override**: You may override `_physics_process` if you need custom per‑frame logic.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `field_changed()` | — | Emitted whenever the `texture` property is updated. |

---

## Usage Example

```gdscript
# Example: Attach a vector field attractor to a particle system
var attractor = GPUParticlesAttractorVectorField3D.new()
attractor.texture = preload("res://vector_field.tres")
attractor.strength = 2.5
attractor.attentuation = 0.1
attractor.transform = Transform3D.IDENTITY.scaled(Vector3.ONE * 5)

var particles = GPUParticles3D.new()
particles.emitting = true
particles.attractors = [attractor]   # Add attractor to the particle system
```

---

## Related Nodes

- **GPUParticlesCollision3D** – Handles collision of GPU particles.
- **GPUParticlesAttractorSphere3D** – A spherical attractor that applies uniform force.
- **GPUParticlesAttractorBox3D** – A box‑shaped attractor with constant direction.

---

## Documentation Links

- [Class Reference – GPUParticlesAttractorVectorField3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorvectorfield3d.html)
- [GPUParticles3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticles3d.html)
- [Texture3D](https://docs.godotengine.org/en/stable/classes/class_texture3d.html)

---

### Next / Previous

- **Previous:** [GPUParticlesAttractorSphere3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorsphere3d.html)  
- **Next:** [GPUParticlesCollision3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlescollision3d.html)

---