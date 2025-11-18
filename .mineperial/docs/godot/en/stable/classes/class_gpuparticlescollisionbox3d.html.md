**GPUParticlesCollisionBox3D**  
*Godot Engine – Class Reference (stable)*

---

## Overview

`GPUParticlesCollisionBox3D` is a 3‑D collision shape that can be attached to `GPUParticles3D` nodes.  
It creates an axis‑aligned box that blocks or reflects particles emitted by a GPU particle system.

### Inheritance

```
GPUParticlesCollisionBox3D
└─ GPUParticlesCollision3D
   └─ VisualInstance3D
      └─ Node3D
         └─ Node
            └─ Object
```

---

## Description

> A **box‑shaped** 3‑D collision shape affecting `GPUParticles3D` nodes.

The collision box can be positioned, scaled and rotated in the same way as any other `Node3D`.  
Particles that intersect the box will bounce (if physics mode is enabled) or simply stop, depending on the `GPUParticlesCollision3D` settings.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `extents` | `Vector3` | `Vector3(0.5, 0.5, 0.5)` | Half‑size of the box on each axis. |
| `collision_layer` | `int` | `1` | Bitmask for the collision layers. |
| `collision_mask` | `int` | `1` | Bitmask for the layers that can collide with this shape. |

> **Note:** `extents` is *not* affected by the node’s scale – the scale is applied automatically to the shape.

---

## Methods

```gdscript
func set_extents(extents: Vector3) -> void
```
Set the half‑size of the box.

```gdscript
func get_extents() -> Vector3
```
Return the current half‑size of the box.

```gdscript
func set_collision_layer(layer: int) -> void
```
Set the collision layer bitmask.

```gdscript
func get_collision_layer() -> int
```
Get the current collision layer bitmask.

```gdscript
func set_collision_mask(mask: int) -> void
```
Set the collision mask bitmask.

```gdscript
func get_collision_mask() -> int
```
Get the current collision mask bitmask.
```

> All property setters/getters are also available as *signals* (e.g. `extents_changed`) if you need to react to changes.

---

## Signals

*None* – this class does not emit its own signals. It inherits any relevant signals from `GPUParticlesCollision3D`.

---

## Example Usage

```gdscript
# Create a collision box and add it to the scene
var box = GPUParticlesCollisionBox3D.new()
box.extents = Vector3(2, 1, 3)    # 4x2x6 size
add_child(box)

# Attach a GPU particle emitter
var particles = GPUParticles3D.new()
particles.emitting = true
particles.process_material = ParticlesMaterial.new()
add_child(particles)
```

The box will now interact with the particles emitted by `particles`. Adjust `extents`, `collision_layer` and `collision_mask` to fine‑tune the effect.

---

## See Also

- [`GPUParticlesCollision3D`](../class_gpuparticlescollision3d.html)
- [`GPUParticlesCollisionHeightField3D`](../class_gpuparticlescollisionheightfield3d.html)

---