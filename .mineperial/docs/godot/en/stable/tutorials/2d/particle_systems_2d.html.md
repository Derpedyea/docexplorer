**2D particle systems**  
*Godot Engine – Stable documentation*

> *This page explains how to create and customize 2‑D particle effects in Godot Engine. The article covers the Particle2D node, the ParticleProcessMaterial, and how to use 2‑D sprites, shaders, and various emission properties to create realistic fire, smoke, and other effects.*

---

## Table of contents

1. [Introduction](#introduction)  
2. [Creating a particle system](#creating-a-particle-system)  
3. [Basic properties](#basic-properties)  
4. [Using a sprite for the particles](#using-a-sprite-for-the-particles)  
5. [Advanced settings](#advanced-settings)  
6. [ParticleProcessMaterial](#particleprocessmaterial)  
7. [Common pitfalls and tips](#common-pitfalls-and-tips)  

*(The actual article contains detailed step‑by‑step instructions, screenshots, and code snippets. For full details, please refer to the official Godot documentation.)*

---

### Introduction

Particle systems simulate complex physical effects such as sparks, fire, smoke, and magic particles. In Godot, a *particle* is emitted at a fixed interval and rendered using a sprite or a mesh.

---

### Creating a particle system

1. Add a **Particle2D** node to your scene.  
2. In the **Inspector**, set `Amount`, `Lifetime`, and `One Shot` as needed.  
3. Choose a **Process Material** (see next section).

---

### Basic properties

| Property | Description |
|----------|-------------|
| `Amount` | Number of particles emitted. |
| `Lifetime` | Time a single particle stays alive. |
| `Preprocess` | Time before the first emission. |
| `Speed Scale` | Global speed multiplier. |

---

### Using a sprite for the particles

1. Create a **Sprite** resource.  
2. In the Particle2D node, set **Texture** to that sprite.  
3. Adjust **Scale** and **Rotation** to match the effect.

---

### Advanced settings

- **Color Ramp**: Gradual color changes over a particle’s life.  
- **Scale Curve**: Size changes over lifetime.  
- **Angle** and **Angle Randomness**: Directional spread.

---

### ParticleProcessMaterial

This material lets you animate individual particles:

- **Velocity**: Direction and speed.  
- **Direction**: Set the emission vector.  
- **Gravity**: Affects particle movement over time.  
- **Angular Velocity**: Rotates particles.  
- **Drag**: Damps movement.

---

### Common pitfalls and tips

- **Performance**: Too many particles can slow down the game.  
- **Texture Size**: Keep textures small for mobile builds.  
- **Looping**: Set `One Shot` to `false` for continuous effects.  

---

**For more advanced usage, consult the official documentation or the next tutorial on `ParticleProcessMaterial 2D Usage`.**