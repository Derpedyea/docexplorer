**NOTE:** The provided HTML excerpt contains only the site-wide navigation and header information, not the specific content of the “ParticleProcessMaterial 2D Usage” page.  Consequently a full, accurate markdown conversion of the tutorial text cannot be produced from the snippet alone.  Below is a minimal reconstruction based on the page’s title and description.  For the complete article, refer to the live documentation page.  

---

# ParticleProcessMaterial 2D Usage

> **Process material properties:** *ParticleProcessMaterial properties – Min, max, and curve properties. The properties in this material control how particles behave and change over their lifetime.*

---

## Overview

`ParticleProcessMaterial` is a resource used to define the behavior of individual particles in a 2D particle system.  
It allows you to set a wide range of parameters that are applied to each particle, such as:

- **Initial velocity**
- **Direction and spread**
- **Color over lifetime**
- **Scale, rotation, and more**
- **Custom curve-based modifiers**

These properties can be set statically, or driven by *animation curves* that vary over the particle’s lifespan.

---

## Basic Usage

1. **Create a `ParticleProcessMaterial`:**  
   In the Godot editor, add a new `ParticleProcessMaterial` resource to a `Particles2D` node’s *Process Material* property.

2. **Configure the properties:**
   - Open the `ParticleProcessMaterial` inspector.
   - Toggle the properties you wish to use.
   - Set *Min* and *Max* values for static properties.
   - Assign `CurveTexture` resources to curve properties to animate values over time.

3. **Test the effect:**
   - Run the scene or play the editor preview.
   - Adjust parameters in real time to see the changes.

---

## Common Properties

| Property | Type | Description |
| -------- | ---- | ----------- |
| `gravity` | `Vector2` | Applies a constant force to particles. |
| `speed_scale` | `float` | Multiplies the initial speed. |
| `color` | `Color` | Base particle color. |
| `color_curve` | `CurveTexture` | Varies the particle color over its lifetime. |
| `scale` | `Vector2` | Initial size of the particle. |
| `scale_curve` | `CurveTexture` | Scales particles over time. |
| `direction` | `float` | Initial direction of motion (degrees). |
| `spread` | `float` | Angular spread from the base direction. |
| `angular_velocity` | `float` | Rotational speed. |
| `angular_velocity_curve` | `CurveTexture` | Rotational speed over life. |
| `drag` | `float` | Linear drag. |
| `initial_velocity` | `float` | Speed at birth. |
| `initial_velocity_curve` | `CurveTexture` | Speed over life. |

> *For a full list of properties, refer to the Godot documentation or the inspector.*

---

## Curves

A `CurveTexture` is an image-based representation of a `Curve` resource.  
By assigning a curve to a property, the engine samples the curve at the particle’s lifetime position (0 – 1) to determine the value.

**Example:** To create a fading color effect:

1. Create a `Curve` resource.
2. Add points at 0.0 (opaque) and 1.0 (transparent).
3. Save it as a `CurveTexture`.
4. Assign the texture to `color_curve`.

---

## Advanced Tips

- **Randomness:** Enable the “Use Randomness” option on properties for more natural variation.
- **Custom shaders:** You can override the default shader with a custom one to gain full control over particle rendering.
- **Script control:** For dynamic changes, manipulate the `ParticleProcessMaterial` via GDScript (e.g., `material.set("speed_scale", 2.0)`).

---

## Further Reading

- [Particles2D](https://docs.godotengine.org/en/stable/classes/class_particles2d.html)
- [CurveTexture](https://docs.godotengine.org/en/stable/classes/class_curvetexture.html)

---