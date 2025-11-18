**3D Particle Trails – Godot Engine Documentation**  
*(Based on the Godot 3.5–stable documentation)*

---

## Overview

Particle trails in Godot allow you to create a visual “trace” that follows each particle as it moves.  
The engine provides several built‑in trail types:

| Trail type | Description |
|------------|-------------|
| **Line** | A simple line connecting particle positions. |
| **Ribbon** | A textured ribbon that follows the particle’s path. |
| **Sprite** | Individual sprite frames that are instantiated along the trail. |

---

## 1. Particle Trail Parameters

When a **Particles** node has trails enabled, a *trail* configuration can be attached to it.  
The trail has the following properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | float | `0.1` | Width of the trail in world units. |
| `height` | float | `1.0` | Height (for ribbon trails). |
| `length` | float | `1.0` | How long a single trail segment remains alive. |
| `smooth` | bool | `true` | Whether to smooth the trail between points. |
| `texture` | Resource | – | Texture to use for sprite/ribbon trails. |
| `color` | Color | `White` | Base color of the trail. |
| `fade_mode` | enum | `Fade` | Fade mode (e.g., `Fade`, `Additive`). |

> **Tip** – Use the *Color Ramp* node to animate the trail color over its lifetime.

---

## 2. Setting up Particle Trails

1. **Create a Particle System**  
   Add a `Particles` node to your scene and configure the emission shape, amount, lifetime, etc.

2. **Enable Trails**  
   In the particle inspector, find the **Trail** section and enable the checkbox.

3. **Choose a Trail Type**  
   Select the desired trail type (`Line`, `Ribbon`, or `Sprite`) from the drop‑down list.

4. **Configure Parameters**  
   Adjust the properties listed above to get the look you want.

5. **Optional – Custom Trail Mesh**  
   For advanced users, you can replace the default trail mesh with a custom `MeshInstance3D` via code:

   ```gdscript
   # Assume `particle` is your Particles node
   var trail_mesh = preload("res://my_custom_trail.tres")
   particle.set_trail_mesh(trail_mesh)
   ```

---

## 3. Example: A Simple Spark Trail

```gdscript
func _ready():
    var particles = $Particles
    particles.emitting = true
    particles.set_trail_enabled(true)
    particles.set_trail_type(Particles.TrailType.LINE)
    particles.set_trail_width(0.05)
    particles.set_trail_length(0.8)
    particles.set_trail_color(Color(1, 0.8, 0.2, 1))
```

*This script turns on a short, golden line trail for a particle system.*

---

## 4. Common Troubleshooting

| Issue | Fix |
|-------|-----|
| Trail invisible | Ensure the particle system’s **Visibility** is set to *true* and the trail texture is visible. |
| Trail too long / short | Adjust the `length` property. |
| Performance hit | Reduce the particle count or disable `smooth` for complex scenes. |

---

## 5. Related Articles

- [Particle Turbulence](../turbulence.html) – Add wind or turbulence to particles.  
- [Particle Sub‑Emitters](../subemitters.html) – Create secondary particle systems.  

---