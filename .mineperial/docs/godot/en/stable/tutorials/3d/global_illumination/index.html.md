**Global illumination**  
Godot’s Global Illumination (GI) system provides several ways to light 3D scenes with indirect lighting, including real‑time voxel GI, signed‑distance‑field GI (SDFGI), baked lightmaps, reflection probes, and a simple “faking” GI approach. The following sections give an overview of each method and how to use them in a project.

---

## 1. Introduction to global illumination  
Global illumination is the simulation of light bouncing off surfaces, creating realistic color bleed and soft shadows. Godot supports both real‑time and baked GI techniques:

* **Voxel GI** – Real‑time, dynamic lighting that works in large scenes with moving objects.  
* **SDFGI** – A newer, more efficient real‑time GI based on signed distance fields, great for static or semi‑static scenes.  
* **Lightmap GI** – Baked lighting stored in texture maps; ideal for static scenes where performance is critical.  
* **Reflection probes** – Capture the environment and reflect it on glossy surfaces.  
* **Faking GI** – A simple technique for quick visual improvement when full GI is not required.

---

## 2. Using Voxel Global Illumination  
Voxel GI divides the space into a 3D grid of voxels that store light information. To enable it:

1. Add a **VoxelGI** node to the scene.  
2. Adjust its parameters (`cell_size`, `bias`, `max_distance`, etc.) to match your level size.  
3. Add a **DirectionalLight** (or other light source) with the option **Use voxel GI** checked.

```gdscript
var voxel_gi = VoxelGI.new()
add_child(voxel_gi)
voxel_gi.cell_size = 1.0
voxel_gi.max_distance = 32.0
```

For dynamic objects, ensure they are marked as **Static** if they don’t move, or set **Update mode** to **Always** for moving objects.

---

## 3. Signed Distance Field Global Illumination (SDFGI)  
SDFGI is a more memory‑efficient real‑time method that works well with large or complex scenes. To use it:

1. Enable **SDFGI** in **Project Settings > Rendering > GI > SDFGI**.  
2. Add a **SDFGI** node (or use a **WorldEnvironment** node and enable the setting).  
3. Fine‑tune parameters such as **Cell size**, **Bias**, and **Propagation**.

SDFGI automatically updates when geometry changes, but you may need to call `SDFGI.update()` for dynamic meshes.

---

## 4. Using Lightmap Global Illumination  
Lightmap GI is a baked lighting solution:

1. Mark static geometry with **Lightmap Mode** set to **Static**.  
2. Place **DirectionalLight** or **SpotLight** nodes and check **Use Lightmaps**.  
3. In the editor, bake lightmaps via **Project → Bake → Lightmaps**.  
4. Adjust **Lightmap Size**, **Atlas Size**, and **Max Bounces** in the lightmap settings.

Baked GI is inexpensive at runtime and works well for pre‑designed scenes.

---

## 5. Reflection probes  
Reflection probes capture the environment for specular reflections:

1. Add a **ReflectionProbe** node where you want reflections.  
2. Configure `size`, `capture_mode`, and `update_mode`.  
3. Place lights and geometry inside the probe’s bounds to affect the reflection.

Use multiple probes for large scenes to limit rendering cost.

---

## 6. Faking global illumination  
For quick visual improvements without full GI:

* Use **Ambient Light** with a low intensity.  
* Enable **Environment** settings like **Background** and **Ambient Light**.  
* Add **Fog** or **Color Adjust** nodes to simulate indirect lighting.  
* Combine with **Lightmap GI** or low‑resolution Voxel GI for best results.

---

> **Tip:**  
> Mix techniques—use Voxel GI for dynamic areas and Lightmap GI for static parts—to balance quality and performance.

---