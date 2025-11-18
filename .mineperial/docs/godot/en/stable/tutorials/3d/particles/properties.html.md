**3D Particle system properties**  
*(Godot Engine – stable documentation)*

> This page documents the properties that control a 3‑D particle emitter in Godot.  
> The properties are grouped into several categories: **Emitter properties**, **Process material properties**, and **Extremities** (e.g. bounding box, shapes).  Each property is described with its type, default value, and behaviour.

---

## 1. Emitter properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `emitting` | `bool` | `false` | If checked, the particle system will be processed and rendered. |
| `amount` | `int` | `1` | Number of particles to emit per frame. |
| `lifetime` | `float` | `1.0` | Lifetime of each particle in seconds. |
| `one_shot` | `bool` | `false` | If true, particles are emitted only once when the emitter starts. |
| `preprocess` | `float` | `0.0` | Amount of time to run the emitter before it is shown. Useful for “pre‑filling” a particle trail. |
| `randomness` | `float` | `0.0` | Degree of randomness applied to the emission direction. |
| `speed_scale` | `float` | `1.0` | Global multiplier for particle speed. |
| `gravity` | `Vector3` | `Vector3.ZERO` | Global gravity applied to all particles. |
| `direction` | `Vector3` | `Vector3.RIGHT` | Base direction of emission. |
| `spread` | `float` | `0.0` | Angular spread (degrees) of emitted particles. |
| `emission_shape` | `enum` | `Points` | Shape of the emitter (points, sphere, box, etc.). |
| `emission_sphere_radius` | `float` | `1.0` | Radius for spherical emitters. |
| `emission_box_extents` | `Vector3` | `Vector3(1,1,1)` | Size for box emitters. |
| `emission_point_count` | `int` | `0` | Number of emission points (for point emitters). |
| `emission_point_radius` | `float` | `0.0` | Radius of a point emitter. |
| `emission_shape` | `enum` | `Points` | Shape of the emitter (see above). |
| `process_material` | `ParticleProcessMaterial` | `null` | The material used to control per‑particle behaviour. |

> **Note:** Many properties can also be overridden in the attached *ParticleProcessMaterial* for fine‑grained control.

---

## 2. Process material properties

The **ParticleProcessMaterial** is a resource that defines how individual particles behave over time.  It contains properties that can be animated via keyframes.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `velocity` | `float` | `1.0` | Base velocity of the particle. |
| `velocity_rand` | `float` | `0.0` | Randomness of velocity. |
| `direction` | `Vector3` | `Vector3.ZERO` | Directional vector. |
| `direction_rand` | `float` | `0.0` | Randomness of direction. |
| `gravity` | `Vector3` | `Vector3.ZERO` | Gravity applied to each particle. |
| `angular_velocity` | `float` | `0.0` | Initial angular velocity. |
| `angular_velocity_rand` | `float` | `0.0` | Randomness of angular velocity. |
| `scale` | `Vector3` | `Vector3.ONE` | Initial scale of each particle. |
| `scale_rand` | `Vector3` | `Vector3.ZERO` | Randomness of scale. |
| `color` | `Color` | `Color(1,1,1,1)` | Initial colour. |
| `color_rand` | `Vector4` | `Vector4.ZERO` | Randomness of colour (RGBA). |
| `hue_variation` | `float` | `0.0` | Hue variation. |
| `hue_variation_rand` | `float` | `0.0` | Randomness of hue. |
| `size` | `float` | `1.0` | Size of the particle sprite. |
| `size_rand` | `float` | `0.0` | Randomness of size. |
| `custom_data` | `Vector4` | `Vector4.ZERO` | Custom data per particle, accessible from shaders. |

---

## 3. Example: Simple smoke effect

```gdscript
# Create a ParticleSystem node
var ps = ParticleSystem.new()
ps.emitting = true
ps.amount = 200
ps.lifetime = 3.0
ps.one_shot = false

# Basic emission shape
ps.emission_shape = ParticleSystem.EMISSION_SHAPE_SPHERE
ps.emission_sphere_radius = 1.5

# Process material
var mat = ParticleProcessMaterial.new()
mat.gravity = Vector3.DOWN * 9.8
mat.velocity = 5.0
mat.velocity_rand = 0.5
mat.scale = Vector3.ONE
mat.scale_rand = Vector3(0.5, 0.5, 0.5)
ps.process_material = mat

# Add to the scene
add_child(ps)
```

> **Tip:** To see how a property affects the particles, you can tweak it live in the Inspector while the editor is running.

---

## 4. Further Reading

- [Process material properties](https://docs.godotengine.org/en/stable/tutorials/3d/particles/process_material_properties.html) – detailed description of all process‑material parameters.
- [Particles](https://docs.godotengine.org/en/stable/tutorials/3d/particles/index.html) – overview of particle usage in Godot 3D.
- [3D Particle system tutorials](https://docs.godotengine.org/en/stable/tutorials/3d/particles/tutorials.html).

---

**End of page**