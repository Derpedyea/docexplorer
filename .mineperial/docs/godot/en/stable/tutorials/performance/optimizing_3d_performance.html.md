# Optimizing 3D Performance

This document provides guidelines and techniques for improving the rendering performance of 3D projects in Godot. The focus is on the **Godot 4** engine, but many concepts also apply to earlier versions.

> **Table of contents**

- [Culling](#culling)
- [Level of Detail (LOD)](#level-of-detail-lod)
- [Batching & Instancing](#batching-instancing)
- [Mesh & Geometry Optimisation](#mesh--geometry-optimisation)
- [Shader & Material Tips](#shader--material-tips)
- [Occlusion Culling](#occlusion-culling)
- [Physics & Collision Optimisation](#physics--collision-optimisation)
- [Miscellaneous](#miscellaneous)
- [References](#references)

---

## Culling

Godot automatically performs **view‑frustum culling** – objects outside the camera’s view are not rendered.  
When your scene is small or the camera’s movement is limited, culling is usually sufficient.  

For large scenes or games with many moving objects, consider:

| Technique | When to use | Notes |
|-----------|-------------|-------|
| **Static Occlusion** | Fixed geometry | Pre‑computed occlusion data |
| **Dynamic Occlusion** | Moving objects | Requires extra CPU load |
| **Level of Detail** | Far objects | Switches meshes based on distance |
| **Instancing** | Many identical meshes | Shares geometry and materials |

---

## Level of Detail (LOD)

LOD allows a single object to display different meshes or materials depending on its distance from the camera.  

1. **Create LOD meshes** – simple versions for far distances.  
2. **Add an `LOD` node** (or use the built‑in `MeshInstance` LOD feature in 4.x).  
3. **Adjust transition distances** to balance quality and performance.

**Tip:** Use *low‑poly* models for distant LODs and *high‑poly* models for close‑up.

---

## Batching & Instancing

**Batching** groups draw calls that share the same material, reducing GPU overhead.

- **Static Batching**: Combine static meshes into one large mesh.
- **GPU Instancing**: Render many copies of a mesh in one draw call.

```gdscript
# Example: enable GPU instancing
var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = preload("res://my_mesh.tres")
mesh_instance.instance_count = 1000
```

**Performance hint:** Keep the number of unique materials low; each unique material can force a new draw call.

---

## Mesh & Geometry Optimisation

- **Reduce vertex count** – Simplify meshes where possible.
- **Use proper collision shapes** – Prefer convex hulls or capsules over full mesh collisions.
- **Avoid overlapping geometry** – The GPU may waste bandwidth rendering hidden surfaces.

---

## Shader & Material Tips

- **Shader complexity**: Avoid per‑pixel operations unless necessary.
- **Batch multiple effects**: Combine small effects into a single shader.
- **Use `@export var` for parameters**: Allows tweaking without recompilation.
- **Avoid dynamic uniforms**: Keep uniform updates to a minimum per frame.

---

## Occlusion Culling

- **Static Occlusion**: Bake occlusion data into a lightmap.
- **Dynamic Occlusion**: Enable in `Project Settings > Rendering > 3D > Occlusion Culling`.  
  *Note:* This can increase CPU usage, so enable only when needed.

---

## Physics & Collision Optimisation

- **Collision layers**: Separate static and dynamic objects into different layers.
- **Physics ticks**: Reduce `physics FPS` if high accuracy is not required.
- **Broad‑phase optimisations**: Use `CollisionShape3D` instead of `CollisionPolygon3D` when possible.

---

## Miscellaneous

| Issue | Fix |
|-------|-----|
| **High FPS spikes** | Profile, isolate expensive nodes. |
| **GPU memory usage high** | Reduce texture resolutions, compress textures. |
| **Stutter on mobile** | Lower view distance, limit LOD levels. |

---

## References

- Godot Docs: <https://docs.godotengine.org/en/stable/>  
- Profiling tools: <https://docs.godotengine.org/en/stable/tutorials/performance/profiling.html>  
- Rendering pipeline guide: <https://docs.godotengine.org/en/stable/tutorials/rendering/forward_plus_renderer.html>

---