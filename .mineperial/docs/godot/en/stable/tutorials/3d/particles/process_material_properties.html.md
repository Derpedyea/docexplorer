**Process material properties** – *Godot Engine Documentation*  

---  

## 1. Overview  

`ParticleProcessMaterial` controls how particles behave and evolve over their lifetime.  
Every property in the material can be defined with a **Min/Max** pair (for a range of random values) or with a **Curve** (to vary the value over time).  

---

## 2. Properties

| Property | Type | Description | Min / Max / Curve |
|----------|------|-------------|-------------------|
| **Direction** | `Vector3` | Initial direction of particles. | Min / Max |
| **Initial Velocity** | `float` | Speed at birth. | Min / Max |
| **Spread** | `float` | Angle (in degrees) of random spread around `Direction`. | Min / Max |
| **Gravity** | `Vector3` | Constant acceleration applied to all particles. | Vector3 |
| **Radial Acceleration** | `float` | Force pulling particles toward (positive) or away from (negative) the emitter. | Min / Max |
| **Tangential Acceleration** | `float` | Force tangential to radial direction. | Min / Max |
| **Angle** | `float` | Rotation angle of the particle sprite. | Min / Max |
| **Axis** | `Vector3` | Axis used for `Angle` and `Angular Velocity`. | Vector3 |
| **Scale** | `float` | Size of the particle. | Min / Max |
| **Scale Curve** | `Curve` | Varies the scale over lifetime. | Curve |
| **Rotation** | `float` | Initial rotation of the particle sprite. | Min / Max |
| **Rotation Curve** | `Curve` | Varies rotation over lifetime. | Curve |
| **Start Color** | `Color` | Color at birth. | Min / Max |
| **End Color** | `Color` | Color at death. | Min / Max |
| **Lifetime** | `float` | Time a particle lives. | Min / Max |
| **Speed Scale** | `float` | Global multiplier for velocity-related properties. | Min / Max |
| **Randomness** | `float` | Randomness factor for all properties. | Min / Max |
| **Randomness Curve** | `Curve` | Varies randomness over lifetime. | Curve |
| **Direction Curve** | `Curve3D` | Varies direction over lifetime. | Curve3D |
| **Angular Velocity** | `float` | Rotational speed of the particle. | Min / Max |
| **Angular Velocity Curve** | `Curve` | Varies angular velocity over lifetime. | Curve |
| **Damping** | `float` | Damping factor applied to velocity. | Min / Max |
| **Damping Curve** | `Curve` | Varies damping over lifetime. | Curve |

> **Note**: If a property is not needed, simply leave the Min/Max equal and leave the Curve empty.

---

## 3. Using a `ParticleProcessMaterial`

1. Create a new **Particle Process Material** resource in the FileSystem dock.  
2. Assign it to the **Process Material** property of a `CPUParticles3D` or `GPUParticles3D` node.  
3. Adjust the properties in the Inspector or via script:

```gdscript
var mat = CPUParticles3D.new()
mat.process_material = preload("res://my_material.tres")

# Example: increase initial velocity
mat.initial_velocity = 200
mat.initial_velocity_min = 150
mat.initial_velocity_max = 250
```

---

## 4. Practical Tips

- **Using Curves**  
  - A **Curve** can be edited in the Curve Editor.  
  - Drag nodes to shape the curve; the X‑axis represents the normalized particle lifetime (0 → 1).  
  - Curves are useful for fade‑in/fade‑out, acceleration bursts, or scaling animations.

- **Min/Max Ranges**  
  - Setting `Min = Max` yields a fixed value.  
  - Wide ranges produce more varied, natural effects.

- **Randomness**  
  - `Randomness` applies a random offset to all properties based on the `Randomness Curve`.  
  - Useful for jitter and more organic motion.

---

## 5. Common Use‑Cases

| Use‑Case | Recommended Properties | Example Effect |
|----------|-----------------------|----------------|
| **Spark** | `Initial Velocity`, `Spread`, `Gravity`, `Lifetime`, `Start Color`/`End Color`, `Scale` | Fast, short‑lived bright particles |
| **Dust** | `Gravity`, `Radial Acceleration`, `Scale`, `Angular Velocity`, `Start Color` | Slow, drifting, slightly rotating dust |
| **Explosion** | `Initial Velocity`, `Spread`, `Randomness`, `Start Color`/`End Color`, `Lifetime`, `Scale Curve` | Burst of particles with varying speeds and fade |

---

## 6. Reference

- **Godot Docs – Particle Process Material**: https://docs.godotengine.org/en/stable/classes/class_particleprocessmaterial.html  
- **Godot Docs – Particle Properties**: https://docs.godotengine.org/en/stable/tutorials/3d/particles/particle_properties.html

---  

Feel free to experiment with the properties to create your own particle effects!