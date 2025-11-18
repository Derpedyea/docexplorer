**High dynamic range lighting**  
*Godot Engine documentation – Stable*  

---

## 1. Introduction  

High Dynamic Range (HDR) lighting allows a scene to contain very bright and very dark areas at the same time, producing more realistic lighting and better visual quality.  
In Godot 4.x HDR is enabled by default in the Forward+ renderer, but you need to turn on the *HDR* flag in your project and enable the correct settings in the *Environment* resource.

> **Why use HDR?**  
> • Realistic light bleed and light‑mapped reflections.  
> • Better support for physically‑based shading.  
> • Allows you to use *emissive* materials that actually brighten the image.

---

## 2. Enabling HDR in a Project  

1. **Project Settings**  
   *Open* `Project → Project Settings → Rendering → Quality`.  
   *Set* `Forward+ → HDR` to **True**.

2. **Environment**  
   In the viewport or a dedicated *World3D* node, add an `Environment` resource.  
   * Set the mode to **Default**.  
   * Under *Tonemapper* choose **Filmic** (or *Linear* if you want a linear look).  

3. **Camera**  
   If you want a *high* range for the final output, change the camera's `Exposure` parameters (found in the *Environment* → *Tone Mapping* section).  
   * `Camera → Exposure → Min EV` / `Max EV` define the range that will be captured before tonemapping.  

4. **Viewport**  
   For a custom viewport, enable `HDR` in its settings (`Viewport → HDR`).

---

## 3. Lighting Nodes & HDR  

| Node | Key HDR settings | Notes |
|------|-------------------|-------|
| **DirectionalLight** | `Shadow Mode` → **Baked**/`PCF`  <br> `Light Buffer` → **HDR** | Use the *Energy* slider to control brightness (0–10+). |
| **OmniLight** | `Shadow Mode` → **Baked**<br> `Light Buffer` → **HDR** | Works best with a high energy value (e.g., 10–20). |
| **SpotLight** | `Shadow Mode` → **Baked**<br> `Light Buffer` → **HDR** | Use *Outer Cone* and *Inner Cone* to control fall‑off. |

> **Tip:**  
> If a light appears too washed out, lower its *Energy* or enable *Use Shadow* to give it a more realistic intensity.

---

## 4. Emission and Material Settings  

HDR works best with *physically‑based* materials.

```gdscript
# Example shader for an emissive object
shader_type spatial;

uniform vec4 emission_color : hint_color;
uniform float emission_energy : hint_range(0.0, 10.0);

void fragment() {
    ALBEDO = vec3(0.0);
    EMISSION = emission_color.rgb * emission_energy;
}
```

* In the material inspector, set `Emission` to a bright color and increase the `Emission Energy` slider.  
* Ensure the material's `Blend Mode` is *Normal* (the default).

---

## 5. Post‑Processing for HDR  

Godot’s built‑in **Tonemap** and **Bloom** nodes can enhance HDR visuals.

```gdscript
# Adding a Bloom effect to a viewport
var bloom = Bloom.new()
bloom.intensity = 0.5
bloom.threshold = 0.6
bloom.soft_knee = 0.5
get_viewport().add_child(bloom)
```

* Adjust `intensity` for the amount of glow.  
* `threshold` controls which bright pixels trigger bloom.  

---

## 6. Sample Scene Setup  

1. **World3D**  
   * Add a `World3D` node.  
   * Create and assign an `Environment` resource (see section 2).  

2. **Ground**  
   * Add a `MeshInstance` with a `QuadMesh`.  
   * Use a standard material with a low *Albedo*.

3. **Light Source**  
   * Add a `DirectionalLight` (or `OmniLight`).  
   * Set `Energy` to ~10.  
   * Enable *HDR* in the light buffer.  

4. **Emissive Object**  
   * Add a `MeshInstance` (e.g., a `SphereMesh`).  
   * Assign the shader from section 4.  

5. **Camera**  
   * Position the camera so it sees both the light and the emissive object.  

Run the project; you should see the emissive object shine and the light bounce realistically.

---

## 7. Common Issues  

| Problem | Fix |
|---------|-----|
| Lights appear *white* or *washed out* | Increase *Energy* and enable *Use Shadow* |
| Emission not visible | Ensure HDR is enabled in Project Settings and the Environment |
| Performance drop | Use *Low‑Resolution* shadow maps or disable *Bloom* for mobile |

---

## 8. Resources & Further Reading  

- [Godot Documentation – Rendering](https://docs.godotengine.org/en/stable/tutorials/3d/rendering.html)  
- [Godot Docs – Materials](https://docs.godotengine.org/en/stable/tutorials/3d/materials.html)  
- [Godot Docs – Environment](https://docs.godotengine.org/en/stable/tutorials/3d/environment.html)  

---

### Summary  

HDR in Godot gives you a richer lighting palette and more realistic material interaction.  
By turning on HDR in project settings, configuring an Environment, properly setting light buffers, and using emissive materials with a suitable tonemapper, you can create scenes that look vibrant and lifelike.