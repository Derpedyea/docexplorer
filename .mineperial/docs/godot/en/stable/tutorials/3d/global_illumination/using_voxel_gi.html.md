# Using Voxel Global Illumination

VoxelGI is a form of fully real‑time global illumination, intended to be used for small/medium‑scale 3D scenes. VoxelGI is fairly demanding on the GPU, so it’s best used when targeting dedicated hardware with enough power to handle its real‑time voxel‑based lighting pipeline.  

> **Note:** This documentation covers the Godot 3.x implementation of VoxelGI. The API and settings may change in future Godot 4.x releases.

> **Related Topics**  
> * [Signed distance field global illumination (SDFGI)](using_sdfgi.html)  
> * [Global illumination overview](introduction_to_global_illumination.html)  

## 1. What is VoxelGI?

VoxelGI is a voxel‑based global illumination system that:
* Precomputes light data in a voxel grid at runtime.
* Stores the result in a 3‑D texture.
* Allows dynamic lighting and shadows for moving lights and objects.

Unlike lightmaps, VoxelGI works in real time and can be updated each frame (or at a lower frequency) to reflect scene changes.

## 2. Adding a VoxelGI node

1. Open the 3D editor and select the root node of your scene (usually a `Spatial` node).  
2. Add a **VoxelGI** node as a child.  
   * Drag and drop, or click **+** → *VoxelGI* from the Add Node dialog.  
3. In the **Inspector**, configure the following properties:

| Property | Description |
|----------|-------------|
| **Size** | Size of the voxel grid in world units. |
| **Resolution** | Number of voxels per dimension (e.g., 32, 64, 128). Higher resolution gives more detail but costs more GPU memory. |
| **Camera** | The `Camera` node that will be used for the view frustum culling. |
| **Light Mask** | Which light layers affect the VoxelGI. |
| **Enable Occlusion** | Toggle volumetric occlusion for more realistic shadows. |
| **Update Mode** | Determines how often the voxel grid is updated: `Realtime`, `Idle`, or `Manual`. |

> **Tip:** For large scenes, use `Idle` or `Manual` to reduce performance impact. Call `VoxelGI.update()` in your script when you need a fresh GI update.

## 3. Using VoxelGI in a Scene

1. **Place lights**: Add at least one `DirectionalLight`, `OmniLight`, or `SpotLight`.  
   * Ensure the lights are on the same layer as the VoxelGI’s *Light Mask*.  
2. **Set the camera**: Assign the active camera to the VoxelGI node to let it know which frustum to bake.  
3. **Bake**: On editor load the VoxelGI will automatically bake once. For dynamic changes, trigger a manual bake.  

```gdscript
# Example: Force an update each frame
extends Spatial

func _process(delta):
    $VoxelGI.update()
```

## 4. Performance Considerations

| Factor | Effect |
|--------|--------|
| **Resolution** | Higher resolution → higher memory and GPU usage. |
| **Update Mode** | `Realtime` can be expensive; switch to `Idle` or `Manual` for static scenes. |
| **Occlusion** | Enabling occlusion adds extra passes. Disable if performance is critical. |
| **Voxel Size** | Larger voxels reduce detail but improve speed. |

**Guidelines:**
* Start with a resolution of 64 for small scenes.  
* Profile your project in the editor’s **Profiler** panel.  
* If the frame rate drops below 30 fps, reduce the resolution or switch to `Idle` updates.

## 5. Limitations

* Only works in the **Forward+** renderer (Godot 3.5+).  
* Requires a **dedicated GPU**; integrated GPUs may struggle.  
* Dynamic objects must have the same collision layer as the VoxelGI to be included in the lighting.  
* Works best with scenes that fit comfortably in a voxel grid (≈ 256 × 256 × 256 voxels).

## 6. Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| GI appears flat or missing | VoxelGI is not updated | Call `update()` or switch to `Realtime`. |
| Performance spikes | High resolution or occlusion | Reduce resolution or disable occlusion. |
| Light leaks | Light layer mismatch | Ensure lights and VoxelGI share the same *Light Mask* layer. |

## 7. Further Reading

* **VoxelGI**: <https://docs.godotengine.org/en/stable/classes/class_voxelgi.html>  
* **Global illumination**: <https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/introduction_to_global_illumination.html>  

---

**Next**: <a href="using_sdfgi.html">Signed distance field global illumination (SDFGI)</a>  
**Previous**: <a href="introduction_to_global_illumination.html">Introduction to global illumination</a>