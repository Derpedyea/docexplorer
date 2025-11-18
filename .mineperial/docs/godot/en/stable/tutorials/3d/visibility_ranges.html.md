**Visibility ranges (HLOD)**  
*Godot Engine (stable) documentation*

---

**Overview**  
Along with Mesh level of detail (LOD) and Occlusion culling, visibility ranges are another tool to improve performance in large, complex 3D scenes.

---

### What are visibility ranges?
Visibility ranges allow you to control at what distance certain 3D objects are rendered or hidden. This can help reduce draw calls and improve rendering performance.

> *Tip:* Combine visibility ranges with LOD and occlusion culling for maximum efficiency.

---

### Setting up visibility ranges in a scene

1. **Select a node**  
   Choose the node you want to assign a visibility range to (e.g., a `MeshInstance3D`).

2. **Add the `VisibilityRange`**  
   In the Inspector, click **Add Component → Visibility Range**.

3. **Configure the range**  
   - `Min Distance`: Objects become visible starting from this distance.  
   - `Max Distance`: Objects disappear beyond this distance.  
   - `Cull Mode`: Choose between *Fade* or *Hide* to control how objects disappear.

4. **Test**  
   Move the camera around to see the visibility changes in real time.

---

### Example code

```gdscript
# Assume you have a MeshInstance3D with a VisibilityRange component
var vr : VisibilityRange = $VisibilityRange
vr.min_distance = 5.0
vr.max_distance = 20.0
vr.cull_mode = VisibilityRange.CULL_MODE_FADE
```

---

### Best practices

- **Use HLOD**: Group multiple objects into a single node with a visibility range, then swap it with a simplified version at distance.
- **Balance distances**: Too wide a range may still load heavy objects; too narrow may cause popping.
- **Test on target hardware**: Performance gains depend on scene complexity and GPU capabilities.

---

### Related topics

- [Mesh level of detail (LOD)](../../tutorials/3d/mesh_lod.html)
- [Occlusion culling](../../tutorials/3d/occlusion_culling.html)

---

*For more details on visibility ranges and how they integrate with Godot’s rendering pipeline, see the full documentation on the Godot Engine website.*