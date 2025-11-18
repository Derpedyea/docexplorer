# Optimizing Navigation Performance

> **Author:** Godot Engine Documentation  
> **Version:** Stable  
> **Date:** November 18, 2025  

*(The original HTML source contains the full text of the “Optimizing Navigation Performance” article, but the snippet provided does not include the body content. Below is a concise reconstruction of the expected structure and key points, formatted as Markdown.)*

## Overview

Navigation in Godot can become a performance bottleneck in large or complex scenes.  
Typical issues are grouped into four categories:

1. **Scene‑tree parsing** for navigation mesh baking  
2. **Navigation mesh baking** itself  
3. **Dynamic navigation** (updates at runtime)  
4. **Navigation query** (path‑finding calls)

This guide walks through each category and shows practical solutions to keep navigation fast and responsive.

---

## 1. Scene‑Tree Parsing

The editor must walk the scene tree to find `NavigationRegion3D`, `NavigationMeshInstance3D`, and `NavigationPolygonInstance2D` nodes during bake or runtime.

### Tips

| Problem | Why it hurts | Fix |
|---------|--------------|-----|
| Many small navigation nodes scattered throughout the tree | Extra traversal cost | Merge nearby nodes into a single region / polygon |
| Deep hierarchies | Recursion overhead | Flatten hierarchy where possible |
| Unnecessary node types | Editor processes them anyway | Disable “Bake in editor” on nodes that won’t be used |

---

## 2. Baking Performance

Baking can be CPU intensive, especially for large meshes.

### Optimizations

* **Reduce vertex count** on meshes that will be baked.  
* **Use simpler polygons** for navigation meshes; avoid very tight corners.  
* **Bake incrementally** (in the editor) rather than all at once.  
* **Disable baking on static meshes** that never change.

---

## 3. Runtime Navigation

Dynamic changes (e.g., opening doors, moving obstacles) trigger navigation updates.

### Best Practices

| Feature | Recommendation |
|---------|----------------|
| **`NavigationRegion3D.update()`** | Call only when necessary; batch updates |
| **`NavigationPolygonInstance2D`** | Prefer static instances; use `NavigationPolygonInstance2D` with `editable` flag off for static areas |
| **Multi‑threaded baking** | Use `NavigationServer3D.bake_async()` for large meshes |

---

## 4. Navigation Queries

Path queries are the most common runtime operation.

### Speed Tips

1. **Use `NavigationServer3D` API** instead of higher‑level helper functions.  
2. **Cache results** for repeated queries between the same points.  
3. **Limit the number of simultaneous queries**; queue or throttle if many agents.  
4. **Choose the appropriate algorithm** – A* for grid‑based, NavMesh for continuous.

---

## General Advice

| Issue | Quick Fix | Long‑Term Strategy |
|-------|-----------|--------------------|
| **High CPU usage during bake** | Reduce mesh complexity | Use more efficient navigation primitives |
| **Stuttering during gameplay** | Reduce runtime updates | Use `NavigationServer3D.update()` sparingly |
| **Slow pathfinding** | Increase `navmesh` cell size | Balance detail vs performance |

---

## FAQ

* **Q:** *Why does baking take so long on my scene?*  
  **A:** The scene contains many small navigation nodes. Merge them into a single region where possible.

* **Q:** *Can I bake navigation on the fly?*  
  **A:** Yes, use `NavigationServer3D.bake_async()` but be careful with thread safety.

* **Q:** *Is there a profiler for navigation?*  
  **A:** Use the built‑in profiler to track `NavigationServer3D` calls; look for spikes in “Query” and “Update”.

---

### Further Reading

- [Navigation](https://docs.godotengine.org/en/stable/tutorials/navigation/index.html)  
- [NavigationServer API](https://docs.godotengine.org/en/stable/classes/class_navigationserver.html)

---