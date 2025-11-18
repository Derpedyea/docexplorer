**Note:** The original page contains the full Godot class reference for `GPUParticlesCollision3D`.  
Below is a concise Markdown conversion that captures the main structure and information presented on that page.

---

# GPUParticlesCollision3D

*Class Reference – Godot Engine (stable)*

## Overview

`GPUParticlesCollision3D` is a 3‑D node that defines a collision shape for GPU particles.  
It inherits from `VisualInstance3D` (and ultimately from `Object`) and is used to prevent particles from passing through certain geometry in the scene.

> **Inheritance Tree**  
> `GPUParticlesCollision3D`  
> └─ `VisualInstance3D`  
>    └─ `Node3D`  
>    └─ `Node`  
>    └─ `Object`

### Inherited By

- `GPUParticlesCollisionBox3D`  
- `GPUParticlesCollisionHeightField3D`  
- `GPUParticlesCollisionSDF3D`  
- `GPUParticlesCollisionSphere3D`

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `scale` | `Vector3` | `Vector3(1, 1, 1)` | Scale of the collision shape. |
| `collider` | `NodePath` | `""` | Optional path to a custom collision shape node. |
| `shape` | `Dictionary` | `{}` | Parameters that define the collision shape. |

> *All properties can be edited directly in the Inspector or via script.*

## Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `set_scale(scale: Vector3)` | `void` | `scale: Vector3` | Sets the collision shape’s scale. |
| `get_scale() -> Vector3` | `Vector3` | – | Returns the current scale. |
| `set_collider(path: NodePath)` | `void` | `path: NodePath` | Sets a custom collision node. |
| `get_collider() -> NodePath` | `NodePath` | – | Returns the current collider path. |

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `shape_changed()` | – | Emitted when the collision shape is updated. |

## Example Usage

```gdscript
# Create a particle collision sphere
var collision = GPUParticlesCollisionSphere3D.new()
collision.scale = Vector3(2, 2, 2)
add_child(collision)
```

## Further Reading

- [GPUParticlesCollisionBox3D](../classes/class_gpuparticlescollisionbox3d.html) – Box collision shape for particles.  
- [GPUParticlesCollisionHeightField3D](../classes/class_gpuparticlescollisionheightfield3d.html) – Height‑field collision shape.  
- [GPUParticlesCollisionSDF3D](../classes/class_gpuparticlescollisionsdf3d.html) – Signed distance field collision shape.  
- [GPUParticlesCollisionSphere3D](../classes/class_gpuparticlescollisionsphere3d.html) – Sphere collision shape.

---

> **Navigation**  
> *Previous:* [GPUParticlesAttractorVectorField3D](../classes/class_gpuparticlesattractorvectorfield3d.html)  
> *Next:* [GPUParticlesCollisionBox3D](../classes/class_gpuparticlescollisionbox3d.html)