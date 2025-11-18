**Introduction to global illumination**

Global illumination (GI) is a catch‑all term for lighting systems that simulate **both direct lighting** (light that comes straight from a source) *and indirect lighting* (light that bounces off surfaces and illuminates other parts of the scene).

In Godot, several GI technologies are available:

* **Baked GI** – pre‑computed light and shadows that are stored in lightmaps or textures.  
* **Realtime GI** – calculates light contributions on the fly. The main realtime methods in Godot are:
  * **Voxel GI** – a voxel‑based light‑probe system that works well for large, dynamic scenes.  
  * **SDFGI** – a screen‑space approximation that is fast and works in the forward renderer.  
* **Reflection probes** – capture environment reflections for static and dynamic objects.

---

## Global illumination basics

### 1. Direct vs. Indirect lighting

| Light | Path | Result |
|-------|------|--------|
| **Direct** | Source → surface | Visible light and shadows |
| **Indirect** | Source → surface → bounce → other surfaces | Softer, more realistic illumination |

### 2. The Godot lighting pipeline

* **Light sources** – Spot, Omni, Directional, Area, etc.  
* **GI modes** – Each light can be set to use **Baked**, **Realtime**, or **Mixed**.  
* **Lightmaps** – 2‑D or 3‑D textures that store pre‑computed light.  
* **Environment** – Global settings for ambient light, fog, and sky.

---

## Using Voxel global illumination

Voxel GI works by discretizing the scene into a 3‑D grid of voxels and propagating light through that grid.  
Steps to enable it:

1. **Create a VoxelGI node**  
   *Add the node to the scene, usually as a child of a spatial root.*  

2. **Configure the grid**  
   ```gdscript
   var voxel_gi = VoxelGI.new()
   voxel_gi.size = Vector3(20, 20, 20)          # world units
   voxel_gi.voxel_size = 0.5                   # voxel resolution
   voxel_gi.lightmask = 0x01                   # which lights affect the grid
   add_child(voxel_gi)
   ```

3. **Bake the scene**  
   *From the editor, press **Bake** → **Bake VoxelGI** or call `voxel_gi.bake()` via script.*

4. **Fine‑tune**  
   *Adjust `cell_size`, `max_distance`, and `quality` for performance vs. fidelity.*

### Performance tips

* Keep the voxel size large enough to avoid excessive memory usage.  
* Disable VoxelGI for small scenes where a lightmapper suffices.  
* Use the **Voxel GI** debug overlay to see voxel density and light propagation.

---

## Baked global illumination

Baked GI uses a **lightmapper** to pre‑compute lighting information and store it in lightmaps or cubemaps.

1. **Enable lightmapping** for the static geometry.  
2. **Configure the lightmapper** (e.g., Progressive, Path Tracing, or Ray Tracing).  
3. **Bake** the scene from **Project → Project Settings → Rendering**.

Baked GI is ideal for static environments because it offloads most lighting calculations to the GPU, giving very realistic results without runtime cost.

---

## Mixed and real‑time GI

Godot allows mixing baked and realtime lighting:

* Static objects use **baked** light for efficiency.  
* Dynamic objects use **realtime** GI to react to moving lights.

When a dynamic object moves, the engine updates the surrounding voxel grid or light probe cache to reflect changes.

---

## Common pitfalls & troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| No GI effect after baking | Lightmapper not running | Ensure light sources are set to *Static* and the *Baked* flag is enabled |
| Performance drop | Voxel grid too dense | Increase `voxel_size` or lower `quality` |
| Incorrect shadows | Lightmap resolution too low | Increase *Lightmap Size* in the **Spatial** node |
| Artifacts around edges | Lightmask mis‑configured | Verify `lightmask` matches the intended light sources |

---

## Further reading

* [Using Voxel GI](../global_illumination/using_voxel_gi.html) – detailed tutorial on setting up and optimizing Voxel GI.  
* [SDFGI](../global_illumination/sdfgi.html) – explanation and usage of the screen‑space GI system.  
* [Lightmapping](../global_illumination/lightmapping.html) – step‑by‑step guide to baking lightmaps in Godot.  

---