**Using Lightmap global illumination**  
*Godot Engine documentation – stable*

---

### Introduction
Baked lightmaps provide a workflow for adding indirect (or fully‑baked) lighting to a scene. Unlike VoxelGI and SDFGI, baked lightmaps are inexpensive at runtime and work well on low‑end PCs and mobile devices, making them a good choice when you want high quality, static indirect lighting without the overhead of real‑time GI.

> **Why use a baked lightmap?**  
> • Pre‑computed lighting that is cheap to sample at runtime.  
> • Works with any renderer (Forward+, Mobile, Compatibility).  
> • Allows for fine‑tuned light distribution and shadow detail.  

---

### Prerequisites
* Godot 3.x (the documentation below is for the stable 3.x release).  
* A scene that already uses a `WorldEnvironment` or a `Spatial` with a `DirectionalLight`.  
* Meshes with a *UV2* layer (the second set of UVs) for lightmap texture generation.  
* A `LightmapGI` node placed as a child of the `WorldEnvironment` or a dedicated `Spatial` node.

---

## 1. Setting up LightmapGI

1. **Add a `LightmapGI` node**  
   * Create a new `Spatial` node and rename it to *LightmapGI*.  
   * In the Inspector, set the *Bake* property to *Lightmap*.

2. **Configure the lightmap size**  
   * `Cell Size`: Defines the resolution of each cell in the lightmap grid.  
   * `Cell Count`: How many cells the GI will use.  
   * `Baked Texture Size`: Overall texture size of the baked lightmap (e.g., 1024, 2048).

3. **Define the bake mode**  
   * `Static`: Only static objects (not moving) are baked.  
   * `Dynamic`: Include dynamic objects in the bake (slower but allows moving lights).  

4. **Set the bake parameters**  
   * `Indirect Energy`: Adjust how bright baked indirect light is.  
   * `Ambient Energy`: Control ambient lighting contribution.  
   * `Shadow Bias`, `Shadow Normal Bias`: Fine‑tune shadow quality.

5. **Enable or disable lightmap baking**  
   * `Use Baked Lightmap`: Toggle to use the baked result during runtime.  

---

## 2. Preparing the Scene

### 2.1. UV2 Layout
* Baked lightmaps use a second UV channel (`UV2`).  
* Make sure all static meshes have proper UV2 seams to avoid light seams.  
* In the Mesh Import settings, enable **Generate Lightmap UVs**.

### 2.2. Light sources
* **DirectionalLight**: Typically used for sun.  
  * In the Light properties, set *Mode* to **Static** or **Dynamic** as required.  
  * Enable *Use Shadows* for realistic occlusion.

* **PointLight** / **SpotLight**  
  * Set `Bake Mode` to *Static* for static objects, *Dynamic* otherwise.  

* **Environment**  
  * Use a `WorldEnvironment` node with an `Environment` resource.  
  * Under **Background**, set a suitable `Background Mode` (e.g., `Color` or `Sky`).  

---

## 3. Baking the Lightmap

1. **Open the `LightmapGI` node** and click the **Bake** button in the Inspector.  
2. In the **Bake Settings** dialog:  
   * Choose *Bake All* to recompute the whole lightmap.  
   * Or use **Bake Selected** to re‑bake only selected objects.  
3. The baking process writes a lightmap texture to the `LightmapGI` node’s *Lightmap* property.  
4. Once baked, enable **Use Baked Lightmap** to apply it at runtime.

> **Tip**  
> If you need to tweak the scene, simply modify lights or geometry, then re‑bake.

---

## 4. Using LightmapGI in a Scene

```gdscript
# Example: Toggling the LightmapGI
var lightmap_gi : LightmapGI = $WorldEnvironment/LightmapGI

func _ready():
    # Disable the lightmap on start
    lightmap_gi.use_baked_lightmap = false

func _process(delta):
    # Toggle on/off with the 'L' key
    if Input.is_action_just_pressed("toggle_lightmap"):
        lightmap_gi.use_baked_lightmap = !lightmap_gi.use_baked_lightmap
```

---

## 5. Advanced Topics

### 5.1. Dynamic Lights with LightmapGI
* LightmapGI can blend with dynamic lights if `Use Dynamic Lighting` is enabled in the `WorldEnvironment`.  
* However, dynamic light influence is limited to the baked lightmap’s resolution.

### 5.2. Performance Considerations
* Larger lightmap sizes give higher quality but increase memory usage.  
* For mobile, keep the overall texture size ≤ 2048x2048 and use fewer cells.  

### 5.3. Troubleshooting
| Issue | Cause | Fix |
|-------|-------|-----|
| Light seams | Poor UV2 layout | Re‑generate lightmap UVs or fix seams in the 3D model |
| Dark shadows | Shadow bias too high | Reduce `Shadow Bias` or `Shadow Normal Bias` |
| Slow bake | Large scene or many lights | Increase `Cell Size`, reduce `Cell Count` or split the scene |

---

## 6. Related Resources

* [VoxelGI](https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/voxel_gi.html) – real‑time voxel based GI.  
* [SDFGI](https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/using_sdfgi.html) – signed distance field GI.  
* [Reflection Probes](https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/reflection_probes.html) – for reflective surfaces.  

---

### Conclusion

Baked lightmaps in Godot provide a powerful way to deliver realistic, high‑quality indirect lighting on a wide range of hardware. By carefully preparing UVs, configuring the `LightmapGI` node, and balancing bake parameters, you can achieve stunning visual results with minimal runtime cost.