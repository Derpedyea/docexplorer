# ParticleProcessMaterial

**Inherits:** `Material < Resource < RefCounted < Object > >`  
**Description:**  
ParticleProcessMaterial defines particle properties for `GPUParticles2D` or `GPUParticles3D` nodes.

> This is a class reference page from the Godot Engine documentation.  
> The full documentation includes detailed explanations of each property, method, and signal, as well as usage examples and reference tables.

---

## Overview

`ParticleProcessMaterial` is a resource that can be assigned to `GPUParticles2D` and `GPUParticles3D` nodes to control the physical behaviour and visual appearance of particles. It provides a wide range of parameters, such as velocity, angle, size, color, lifetime, and many others, allowing developers to create complex particle effects entirely through the engine’s visual editor or via scripting.

---

## Properties

Below is a concise list of the most commonly used properties. For the complete set and their default values, refer to the original documentation.

| Property | Type | Description |
|----------|------|-------------|
| **gravity** | `Vector3` | Force applied to particles each frame. |
| **initial_velocity** | `float` | Base speed of particles at spawn time. |
| **lifetime** | `float` | How long each particle lives in seconds. |
| **scale** | `float` | Initial scale of particles. |
| **color_ramp** | `GradientTexture` | Modulates the particle color over its lifetime. |
| **color_random** | `float` | Randomness factor applied to particle color. |
| **speed_scale** | `float` | Global multiplier for all velocity-related properties. |
| **angular_velocity** | `float` | Base spin speed of particles. |
| **angular_velocity_random** | `float` | Randomness for angular velocity. |
| **drag** | `float` | Deceleration applied to particles. |
| **emission_shape** | `int` (enum) | Shape from which particles are emitted (point, box, sphere, etc.). |
| **emission_rect_extents** | `Vector3` | Extents of the emission rectangle for `box` shape. |
| **emission_point_size** | `float` | Size of the emission point. |
| **direction** | `Vector3` | Initial direction of particle emission. |
| **spread** | `float` | Angular spread of emission in degrees. |
| **turbulence** | `float` | Randomness added to velocity over time. |
| **turbulence_random** | `float` | Randomness factor for turbulence. |
| **gravity_curve** | `CurveTexture` | Modulates gravity over lifetime. |
| **speed_curve** | `CurveTexture` | Modulates speed over lifetime. |
| **angle_curve** | `CurveTexture` | Modulates angle over lifetime. |
| **angular_velocity_curve** | `CurveTexture` | Modulates angular velocity over lifetime. |
| **scale_curve** | `CurveTexture` | Modulates scale over lifetime. |
| **color_curve** | `CurveTexture` | Modulates color over lifetime. |
| **lifetime_randomness** | `float` | Randomness factor applied to lifetime. |
| **use_local_coordinates** | `bool` | Whether to treat particle motion relative to the owning node. |
| **emission_active** | `bool` | Whether the emitter is currently emitting particles. |

> *Note:* Many additional optional properties exist for advanced effects (e.g., `initial_velocity_curve`, `velocity_curve`, `linear_accel_curve`, etc.). Each property often has a corresponding “randomness” counterpart to add stochastic variation.

---

## Methods

| Method | Description |
|--------|-------------|
| **set_process_material()** | Assign a `ParticleProcessMaterial` to a particle node. |
| **get_process_material()** | Retrieve the assigned `ParticleProcessMaterial`. |
| **set_emission_shape(shape)** | Set the emission shape enum. |
| **set_direction(Vector3 dir)** | Set the initial emission direction. |
| **set_lifetime(float sec)** | Set the lifetime of particles. |
| **set_initial_velocity(float vel)** | Set the starting velocity of particles. |
| **set_scale(float scale)** | Set the initial scale of particles. |
| **set_color_ramp(GradientTexture ramp)** | Set the color gradient over lifetime. |

> *For a complete list of methods and signals, see the original class reference page.*

---

## Example Usage

```gdscript
# Create a new ParticleProcessMaterial
var material = ParticleProcessMaterial.new()
material.lifetime = 2.0
material.initial_velocity = 100
material.direction = Vector3.UP
material.gravity = Vector3(0, -9.8, 0)
material.color_ramp = preload("res://ramp.tres")

# Assign it to a GPUParticles3D node
var particles = GPUParticles3D.new()
particles.process_material = material
particles.emitting = true
```

---

## See Also

- [GPUParticles2D](../class_gpu_particles2d.html)  
- [GPUParticles3D](../class_gpu_particles3d.html)  
- [ParticlesMaterial](../class_particlesmaterial.html) – the older CPU‑based particle material.

---