## GPUParticlesCollisionSDF3D

**Godot 4.x** – 3D GPU‑particle collision shape that uses a baked signed distance field (SDF).  
It is part of the *Particles* module and inherits from `GPUParticlesCollision3D` → `VisualInstance3D` → `Node3D` → `Node`.

---

### Description

`GPUParticlesCollisionSDF3D` is a node that defines a **3‑D SDF (Signed Distance Field)** collision shape for `GPUParticles3D` nodes.  
The SDF is baked into a texture and then used by the particle system to detect and respond to collisions efficiently on the GPU.

Typical workflow:

1. Create an SDF texture in an external 3D modelling tool or using Godot’s own SDF tools.  
2. Assign the texture to the `baked_sdf` property of this node.  
3. Add the node to the scene and enable it on the `GPUParticles3D` instance that should collide with it.

---

### Inheritance Hierarchy

```
Object
 └── Node
     └── Node3D
         └── VisualInstance3D
             └── GPUParticlesCollision3D
                 └── GPUParticlesCollisionSDF3D
```

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `baked_sdf` | `Texture3D` | `null` | The 3‑D texture containing the signed distance field data. |
| `size` | `Vector3` | `Vector3(1, 1, 1)` | Scale of the SDF volume. |
| `collision_mask` | `int` | `1` | Collision mask used by the particle system. |
| `collision_layer` | `int` | `1` | Collision layer this node occupies. |
| `process_material` | `ShaderMaterial` | `null` | Optional material used to modify the SDF sampling (e.g. offset, scale). |

> **Note**: `baked_sdf` is required; if it is not set, the node will be disabled.

---

### Signals

| Signal | Description |
|--------|-------------|
| `sdf_changed()` | Emitted when the SDF texture is changed. |

---

### Methods

| Method | Return type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `set_baked_sdf(sdf: Texture3D)` | `void` | `sdf` | Assign a new SDF texture. |
| `get_baked_sdf() -> Texture3D` | `Texture3D` | – | Retrieve the current SDF texture. |
| `set_process_material(mat: Material)` | `void` | `mat` | Assign a material that can modify SDF sampling parameters. |
| `get_process_material() -> Material` | `Material` | – | Get the current process material. |
| `get_collision_layer() -> int` | `int` | – | Return the node’s collision layer. |
| `set_collision_layer(layer: int)` | `void` | `layer` | Set the node’s collision layer. |
| `get_collision_mask() -> int` | `int` | – | Return the node’s collision mask. |
| `set_collision_mask(mask: int)` | `void` | `mask` | Set the node’s collision mask. |

---

### Example Usage

```gdscript
# Create the node
var sdf_collision = GPUParticlesCollisionSDF3D.new()
add_child(sdf_collision)

# Assign an SDF texture
sdf_collision.baked_sdf = preload("res://assets/sdf_volume.tres")

# Set collision parameters
sdf_collision.collision_layer = 1
sdf_collision.collision_mask = 1

# Link to a particle system
var particles = GPUParticles3D.new()
add_child(particles)
particles.collision_shape = sdf_collision
```

---

### Related Classes

- [`GPUParticlesCollision3D`](../class_gpuparticlescollision3d.html)
- [`GPUParticlesCollisionSphere3D`](../class_gpuparticlescollisionsphere3d.html)
- [`GPUParticlesCollisionHeightField3D`](../class_gpuparticlescollisionheightfield3d.html)

---

### Additional Resources

* Godot Docs – [Particle System Basics](../tutorials/particles.html)  
* Godot Docs – [Signed Distance Field (SDF) Overview](../tutorials/sdf.html)

---

**Author:** Godot Engine Documentation Team  
**Version:** Stable (Godot 4.x)