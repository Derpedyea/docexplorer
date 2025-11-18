# 3D Particle attractors  

Particle attractors are nodes that apply a force to all particles within their reach.  
They pull particles closer or push them away based on the direction of that force.  
There are several built‑in attractor types that can be added to a `GPUParticles3D` or `CPUParticles3D` node.

---

## Attractor node types

| Node | What it does | Typical use |
|------|--------------|-------------|
| `PointAttractor3D` | A point‑source of attraction or repulsion. | Focusing particles into a spot or pushing them away from a point. |
| `SphereAttractor3D` | A spherical volume that attracts or repels. | Simulating a force field or a gravity well. |
| `CurveAttractor3D` | A curve‑shaped attractor following a `Curve3D`. | Guiding particles along a path (e.g. a winding river). |
| `VelocityFieldAttractor3D` | A custom velocity field defined by a `ShaderMaterial`. | Complex, user‑defined forces. |

All attractors expose the same basic properties:

| Property | Type | Description |
|----------|------|-------------|
| `strength` | `float` | Determines how strong the attraction/repulsion is. Negative values push away. |
| `radius` | `float` | The radius of influence (point attractors ignore this, but the other nodes use it). |
| `direction` | `Vector3` | For linear attractors; defines the direction of the force. |
| `use_local_coords` | `bool` | If `true`, the attractor uses its own local space. |

---

## Adding an attractor to a particle system

1. **Create a particle node** (`GPUParticles3D` or `CPUParticles3D`).  
2. **Add an attractor node** as a child of the particle node.  
3. **Configure its properties** in the Inspector.  

```gdscript
# Example: A sphere attractor that pulls particles inward
var attractor = SphereAttractor3D.new()
attractor.strength = 50.0
attractor.radius = 5.0
add_child(attractor)
```

You can add multiple attractors; Godot sums all forces before applying them to each particle.

---

## Practical examples

### 1. A central gravity well

- Add a `SphereAttractor3D` to a `GPUParticles3D`.
- Set `strength` to a positive value (e.g., `80.0`) and `radius` to cover the whole emitter.
- Particles will spiral inward, creating a “black hole” effect.

### 2. An explosion push

- Add a `PointAttractor3D` at the center of the explosion.
- Set `strength` to a large negative number (e.g., `-200.0`) to push particles outward.
- Reset or disable the attractor after the effect.

### 3. Follow a path

- Create a `Curve3D` resource.
- Add a `CurveAttractor3D` and assign the curve.
- Adjust `strength` to pull particles along the curve.

---

## Tips & caveats

* **Performance:** Attractors add overhead per particle. Use only as many as necessary.
* **Local vs Global coordinates:** For moving attractors, `use_local_coords = true` keeps the force relative to the attractor’s transform.
* **Compatibility:** 2D attractors exist for `GPUParticles2D` and `CPUParticles2D` with similar properties.
* **Combining with turbulence:** If you also use turbulence, the resulting motion may be more chaotic.

---

## Further reading

* [3D Particle collisions](../collision.html) – How particles interact with the environment.  
* [Particle turbulence](../turbulence.html) – Adding randomness to particle motion.  

--- 

*Author: Godot Documentation Team*