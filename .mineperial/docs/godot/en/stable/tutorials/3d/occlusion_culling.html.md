**Occlusion Culling**  
=====================

> In a 3D rendering engine, occlusion culling is the process of performing hidden geometry removal. This page explains the benefits and pitfalls of occlusion culling, how to enable it in Godot, and provides practical tips for using it effectively.

---

## Table of contents

1. [What is occlusion culling?](#what-is-occlusion-culling)  
2. [Benefits & pitfalls](#benefits--pitfalls)  
3. [How to enable occlusion culling in Godot](#how-to-enable-occlusion-culling-in-godot)  
   * [Prerequisites](#prerequisites)  
   * [Creating an Occluder](#creating-an-occluder)  
   * [Creating an Occludable](#creating-an-occludable)  
   * [Configuring the Occlusion Culling node](#configuring-the-occlusion-culling-node)  
4. [Using the occlusion map](#using-the-occlusion-map)  
5. [Advanced tips](#advanced-tips)  
6. [Common pitfalls](#common-pitfalls)  
7. [FAQ](#faq)  

---

## What is occlusion culling?

Occlusion culling tells the engine which objects are not visible because they are hidden behind other geometry. By not sending these objects to the GPU for rendering, the engine can save memory bandwidth, reduce overdraw, and improve frame rates, especially in complex scenes.

---

## Benefits & pitfalls

| Benefit | Description |
|---------|-------------|
| **Reduced draw calls** | Fewer meshes are sent to the GPU. |
| **Lower overdraw** | Pixels that would have been overwritten are not processed. |
| **Improved performance on mobile** | Important for large outdoor scenes or VR. |

| Pitfall | How to avoid it |
|---------|-----------------|
| **Overly complex occluders** | Keep occluders simple; use convex shapes or low‑poly models. |
| **Dynamic objects** | Objects that move frequently are best left unoccluded or handled with dynamic occlusion layers. |
| **Cache misses** | If the occlusion map is not updated often enough, you can get stale data. |

---

## How to enable occlusion culling in Godot

### Prerequisites

* Godot 3.x or newer.
* A scene with a `Camera` node and a `WorldEnvironment` (optional).
* Sufficient geometry to benefit from occlusion culling.

### Creating an Occluder

1. Add a `Occluder` node (e.g., `StaticOccluder3D`) to the scene.  
2. Assign a mesh to the `Occluder` node:
   ```gdscript
   var occluder_mesh : MeshInstance3D = MeshInstance3D.new()
   occluder_mesh.mesh = BoxMesh.new()
   occluder_mesh.transform.origin = Vector3(0, 1, 0)
   add_child(occluder_mesh)
   ```
3. Mark the mesh as *occluder* by selecting **Occluder** in the **Visibility** tab of the inspector.

### Creating an Occludable

Any `MeshInstance3D` node can be occludable. To enable occlusion for a mesh:

```gdscript
var occludable = MeshInstance3D.new()
occludable.mesh = YourMesh.new()
occludable.set_layer_mask(1)  # default layer
occludable.cull_mode = MeshInstance3D.CULL_DISABLED  # keep it visible for the occlusion pass
add_child(occludable)
```

### Configuring the Occlusion Culling node

Godot automatically manages occlusion culling, but you can tweak the global settings:

* **WorldEnvironment** → **Occlusion Culling**:
  * **Enable** – toggle global occlusion.
  * **Range** – maximum distance to consider for occlusion.
  * **Update Mode** – static or dynamic.

---

## Using the occlusion map

The **OcclusionMap** node provides a visual representation of the occlusion volume:

1. Add an `OcclusionMap` node to the scene.  
2. In the inspector, choose the **Camera** you want to use.  
3. Press **Generate** to see a 2‑D slice of the occlusion volume.  
4. Use this to debug occluder placement and coverage.

---

## Advanced tips

| Tip | Explanation |
|-----|-------------|
| **Combine occluders** | Group multiple occluders into a single `StaticOccluderCollection3D` to reduce draw calls. |
| **Use multi‑layer occlusion** | Set different layers for static and dynamic occluders; switch the camera’s `occlusion_layer_mask` accordingly. |
| **Limit occlusion to the farthest camera** | In VR, enable occlusion only on the dominant eye to save resources. |

---

## Common pitfalls

* **Too many small occluders** – Merge them into larger ones.  
* **Dynamic objects set as occluders** – They will never be culled unless you update the occlusion map every frame, which is expensive.  
* **Missing occluders** – Objects that appear “floating” or invisible may not have occluders in place.

---

## FAQ

**Q:** *Will occlusion culling work with `VoxelGI` or `SDFGI`?*  
**A:** Yes, but you need to enable it in the environment settings and keep the occluder layers consistent.

**Q:** *Can I turn off occlusion for specific objects?*  
**A:** Use the `occlusion_layer` and `occlusion_mask` properties to exclude objects from the culling pass.

**Q:** *Does occlusion culling affect baked lightmaps?*  
**A:** No, occlusion culling is purely a runtime feature; it does not interfere with static lightmapping.

--- 

For more detailed information and examples, refer to the official Godot documentation: <https://docs.godotengine.org/en/stable/tutorials/3d/occlusion_culling.html>