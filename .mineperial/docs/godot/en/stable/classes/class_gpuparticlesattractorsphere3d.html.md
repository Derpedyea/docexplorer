**GPUParticlesAttractorSphere3D**  
===============================

*This page is part of the Godot Engine class reference (stable). It describes the `GPUParticlesAttractorSphere3D` node, a 3‑D, spheroid‑shaped particle attractor used with `GPUParticles3D`.*

---

## Inheritance Tree

```
Object
 └─ Node
     └─ Node3D
         └─ VisualInstance3D
             └─ GPUParticlesAttractor3D
                 └─ GPUParticlesAttractorSphere3D
```

---

## Description

`GPUParticlesAttractorSphere3D` is a node that creates a spheroid‑shaped field which attracts or repels particles emitted by `GPUParticles3D`. The shape is defined by two radii (horizontal and vertical), so it can represent a true sphere or an ellipsoid.

> **Note:** The attractor works only when attached to a scene that contains at least one `GPUParticles3D` node. The attractor automatically applies to every particle that is within its volume.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `1.0` | Horizontal radius of the spheroid. |
| `height` | `float` | `1.0` | Vertical radius (height) of the spheroid. |
| `strength` | `float` | `1.0` | Attraction strength (positive pulls particles toward the center, negative pushes them away). |
| `use_local_coordinates` | `bool` | `true` | Whether the attractor’s shape is defined in local space or world space. |

> All properties are exported, meaning they can be edited in the Inspector and are usable from GDScript/C# via the usual property syntax.

---

## Methods

> `GPUParticlesAttractorSphere3D` does not define any additional methods beyond those inherited from its parent classes. It relies on the base `GPUParticlesAttractor3D` functionality to interact with the particle system.

---

## Signals

> None.

---

## Usage Example (GDScript)

```gdscript
# Add a spheroid attractor to a scene
var attractor = GPUParticlesAttractorSphere3D.new()
attractor.radius = 5.0
attractor.height = 3.0
attractor.strength = 10.0
add_child(attractor)

# Connect the attractor to a particle system
var particles = GPUParticles3D.new()
particles.emitting = true
add_child(particles)
```

---

## Related Classes

- [`GPUParticlesAttractor3D`](class_gpuparticlesattractor3d.html) – Base class for 3D particle attractors.  
- [`GPUParticlesAttractorBox3D`](class_gpuparticlesattractorbox3d.html) – Box-shaped attractor.  
- [`GPUParticlesAttractorVectorField3D`](class_gpuparticlesattractorvectorfield3d.html) – Vector field attractor.

---

## References

- Godot Engine Manual: <https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorsphere3d.html>  
- API Reference: <https://docs.godotengine.org/en/stable/classes/class_gpuparticlesattractorsphere3d.html>

---