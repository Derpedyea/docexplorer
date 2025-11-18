# GPUParticlesCollisionSphere3D

**Inherits:** `GPUParticlesCollision3D`

---

## Overview

`GPUParticlesCollisionSphere3D` is a 3‑D collision shape that can be used with `GPUParticles3D` nodes.  
When a particle enters the sphere, the collision is handled by the GPU, making it an efficient way to create spherical obstacles or boundaries for GPU‑based particle systems.

---

## Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| `radius` | `float` | `1.0` | The radius of the sphere in world units. |
| `enabled` | `bool` | `true` | (Inherited from `CollisionObject3D`) Whether the collision shape is active. |
| `collision_layer` | `int` | `1` | (Inherited) Collision layer mask. |
| `collision_mask` | `int` | `1` | (Inherited) Mask of layers this collision shape will detect. |

> **Note**: `enabled`, `collision_layer` and `collision_mask` are inherited from `GPUParticlesCollision3D` / `CollisionObject3D`.

---

## Methods

> **No additional methods are defined for this class; it relies on the API inherited from its parent classes.**

---

## Signals

> **None**

---

## Usage Example

```gdscript
# Create a particle emitter
var emitter = GPUParticles3D.new()
emitter.amount = 500
emitter.process_material = ParticlesMaterial.new()

# Add a spherical collision shape
var collision = GPUParticlesCollisionSphere3D.new()
collision.radius = 2.0
add_child(emitter)
add_child(collision)
```

In this example, any particles emitted by the `GPUParticles3D` node will be affected by the spherical collision defined by `collision`.

---

## References

- [GPUParticles3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticles3d.html)
- [GPUParticlesCollision3D](https://docs.godotengine.org/en/stable/classes/class_gpuparticlescollision3d.html)

---