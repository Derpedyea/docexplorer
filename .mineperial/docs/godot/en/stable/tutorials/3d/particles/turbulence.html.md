**Particle Turbulence**  
*Godot Engine – Tutorial (Stable)*  

---

# 1. Overview  

Particle turbulence is a node that can be added to a 3‑D particle system to give the particles a more natural, chaotic motion. It works by sampling a noise texture and applying the resulting vectors as a force to each particle. This can be used on its own to create swirls or ripples, or combined with **Particle Attractors** and **Collision** nodes to craft complex, interactive effects.

> **Tip:** Turbulence can be a good replacement for a manually coded per‑particle velocity update in many scenarios, saving you CPU time and letting the engine handle the heavy lifting.

---

# 2. Adding a Turbulence node

1. In the Scene panel, select the **`Particles`** (or **`CPUParticles3D`**) node you want to affect.  
2. Click **Add Child Node** → search for **`Turbulence`** → add it.  
3. The Turbulence node will appear as a child of the particle emitter.

The node is invisible in the viewport but exposes several properties that control the noise and its effect.

---

# 3. Key properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **Noise** | `Texture` | `null` | Grayscale noise image used to drive the turbulence. A higher contrast image yields stronger directional changes. |
| **Noise Scale** | `Vector3` | `1,1,1` | How much the noise texture is stretched or compressed on each axis. |
| **Strength** | `float` | `1.0` | The magnitude of the turbulence force applied to each particle. |
| **Speed** | `float` | `1.0` | Temporal speed of the noise texture, i.e., how quickly the turbulence changes over time. |
| **UV Scale** | `Vector2` | `1,1` | Scale of the UV mapping applied to the noise texture. |
| **Blend Mode** | `Enum` | `Additive` | How the turbulence vector blends with the existing particle velocity (Add, Multiply, etc.). |
| **Frequency** | `float` | `1.0` | Controls how often the noise repeats in space. |

> **Example:**  
> A turbulence node with a high `Strength` and low `Speed` will produce a quick, jagged motion; increasing `Speed` will create a smoother, rolling effect.

---

# 4. Using a noise texture

1. Create a **Noise Texture** in the editor or import an existing PNG.  
2. Ensure the texture is **grayscale** (luma only).  
3. Assign it to the **Noise** property of the Turbulence node.  
4. Adjust **UV Scale** if you want the texture to repeat or stretch over the particle system's bounds.

You can also use Godot’s built‑in *OpenSimplexNoise* or *WaveTexture* as a procedural alternative by generating an image at runtime.

---

# 5. Combining with other particle features

- **Particle Attractors**: Use a Turbulence node alongside an attractor to give particles a swirling path towards a point or along a line.
- **Collision**: Adding a collision shape will let particles bounce or stick while still being affected by turbulence, creating dynamic splash or debris effects.
- **Trails / Trails**: Turbulence can give a trailing particle system a “wisp” appearance when combined with a small `Trail` node.

---

# 6. Practical example

Below is a minimal GDScript that sets up a Turbulence node programmatically:

```gdscript
var emitter: CPUParticles3D = CPUParticles3D.new()
add_child(emitter)

var turb = Turbulence.new()
turb.noise = preload("res://noise.png")
turb.strength = 3.0
turb.speed = 0.8
emitter.add_child(turb)
```

> **Notice**: When adding a Turbulence node under a **CPU** particle emitter, the simulation runs on the CPU; for **GPU** emitters use a **`GPUParticles3D`** node.

---

# 7. Tips & tricks

| Tip | Explanation |
|-----|-------------|
| **Use a low‑resolution noise texture** | Lower resolution textures reduce the cost of sampling and can be sufficient for subtle turbulence. |
| **Layer multiple turbulence nodes** | Stacking nodes with different scales and strengths can create richer, more chaotic motions. |
| **Animate the `Strength` property** | Modifying `Strength` over the lifetime of a particle can produce a fade‑in or fade‑out turbulence effect. |
| **Combine with color and scale modulation** | Add visual variety: let turbulence affect color or size in sync with motion. |

---

# 8. Troubleshooting

- **No effect visible**: Make sure `Noise` is assigned and `Strength` > 0.  
- **Too noisy**: Reduce `Strength` or increase `Noise Scale`.  
- **Performance hit**: Keep the noise texture small and limit the number of turbulence nodes.

---

# 9. Further reading

- [3D Particle Attractors](../attractors.html)  
- [3D Particle Trails](../trails.html)  
- [Using OpenSimplexNoise](https://docs.godotengine.org/en/stable/tutorials/2d/2d_performance.html#open-simplex-noise)

---

**End of tutorial**  

---