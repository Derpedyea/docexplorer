**Particle systems (3D)** – Godot Engine documentation  
========================================================

> This page is part of the official Godot Engine documentation and covers the use of GPU‑accelerated particle systems in 3D scenes.  
> The tutorial is meant for developers who want to learn how to create, configure and use particles within Godot projects.

---

## 1. Introduction

Particles are a powerful way to create visual effects such as smoke, fire, rain, dust, and more.  
In Godot, particle systems can be either CPU‑based (for simple effects) or GPU‑based (for high‑performance, large‑scale effects). This tutorial focuses on GPU‑accelerated particle systems and explains how they work, how to create them, and how to manipulate their properties.

---

## 2. What you will learn

* The differences between **CPU** and **GPU** particles.  
* How to **create** a 3D particle system in the editor.  
* How to **configure** basic parameters such as emission shape, lifetime, velocity, color, and texture.  
* How to **customise** particles with materials and shaders.  
* How to **script** particle behavior or trigger changes at runtime.  
* Tips for **performance** and optimisation.

---

## 3. Creating a 3D particle system

1. **Add a `GPUParticles3D` node** to your scene.  
2. In the inspector, set the **emission shape** (box, sphere, region, etc.).  
3. Adjust **emission parameters** – **Amount**, **Lifetime**, **One Shot**, **Preprocess**, **Randomness**.  
4. Assign a **material** (or create a new `ParticlesMaterial`) and tweak **velocity**, **direction**, **color**, **scale**, **gravity**, etc.  
5. Optionally, attach a **MeshInstance** or **Sprite3D** as a child to render each particle.

---

## 4. Using a particle material

A **ParticlesMaterial** allows you to fine‑tune visual aspects:

| Parameter | Description |
|-----------|-------------|
| **Gravity** | Vector3 controlling particle acceleration. |
| **Initial Velocity** | Speed at emission. |
| **Color Ramp** | Defines the particle’s color over its lifetime. |
| **Scale Curve** | Scale changes over time. |
| **Angular Velocity** | Rotational speed. |
| **Lifetime** | How long a particle lives. |

You can also assign a **custom shader** to the material for more advanced effects.

---

## 5. Scripting and runtime control

```gdscript
# Example: Increase particle emission rate over time
var particles: GPUParticles3D

func _process(delta):
    particles.emitting = true
    particles.amount = int(100 + delta * 20)
```

Use signals like `emission_finished` to react when a burst ends.

---

## 6. Performance tips

1. **Limit particle count** – keep `amount` reasonable.  
2. Use **billboard** textures for simple shapes.  
3. Disable **cull mask** for off‑screen particles.  
4. Cache `Transform` or `Camera` data to avoid per‑frame calculations.  

---

## 7. Further reading

* [Creating a 3D particle system](../creating_a_3d_particle_system.html) – step‑by‑step guide.  
* [Particle system features](../particle_systems/index.html) – detailed API reference.  

---

**Note**: For more detailed configuration options, refer to the official [Godot 3D Particles documentation](https://docs.godotengine.org/en/stable/tutorials/3d/particles/index.html).