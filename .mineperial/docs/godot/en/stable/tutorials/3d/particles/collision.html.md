# 3D Particle Collisions

*From the official Godot documentation – “3D Particle Collisions”*  

---

## Why particles need collisions

GPU‑based particles are computed entirely on the graphics card, so they have no direct access to the engine’s physics system.  
If you want a particle system to react to the environment (bounce, splash, get destroyed, etc.) you need to enable collision handling for the emitter.

---

## Enabling collision on a GPU particle system

| Property | Where to set | What it does |
|----------|--------------|--------------|
| **Collision** (`Particles` → `Process Material` → `Collision`) | `Particles` node | Turns the built‑in GPU collision subsystem on. |
| **Collision Shape** | Add a `CollisionShape3D` child to the `Particles` node | Defines the geometry that particles will collide with. |
| **Collision Layer / Mask** | `CollisionShape3D` or `MeshInstance` | Determines which physics layers the shape participates in. |

> **Tip:** The collision shape must be a **static** shape. Dynamic shapes (moving bodies) are not supported by GPU‑particle collision.

---

## Typical scene setup

```
Particles
├── CollisionShape3D (or MeshInstance)
└── ParticleMaterial
```

1. **Add a `Particles` node** to the scene.  
2. **Add a child `CollisionShape3D`** (or a `MeshInstance` with a collision shape) and set it to the geometry you want particles to hit.  
3. In the `Particles` inspector, enable **“Collision”**.  
4. Adjust the *Collision Layer* and *Mask* so that the shape only interacts with the intended objects.

---

## Using CPU particles for physics interaction

If you need full physics interaction (e.g., particles that collide with moving bodies or trigger physics responses), switch to a **CPU** particle system:

1. Replace the `Particles` node with `CPUParticles3D`.  
2. Attach a `CollisionShape3D` to it (or use an existing static body).  
3. Enable **“Use Collision”** in the CPU particle inspector.  

CPU particles are slower than GPU ones but give you full access to Godot’s physics engine.

---

## Common pitfalls

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Particles fly straight through everything | Collision is disabled or the collision shape is missing | Enable “Collision” and add a shape |
| Particles hit but not bounce | The `Bounce` value in the `ParticleMaterial` is zero | Increase `Bounce` in the material |
| Particles appear on top of other geometry | Incorrect depth or culling settings | Check `Cull Mode` and `Depth Draw Mode` on the emitter |

---

## Example project

```gdscript
# Sample scene tree
# ├─ Player (MeshInstance + CollisionShape3D)
# └─ Fireworks (Particles3D + CollisionShape3D)

# In a script:
func _ready():
    $Fireworks.emitting = true
```

You can find a full working example in the **Godot demo repository** under *demo/3d_particles_collisions*.

---

### Further reading

- [3D Particle Attractors](../attractors.html) – attract particles to a point or area.  
- [Complex Emission Shapes](../complex_shapes.html) – advanced geometry for particle emission.  

---