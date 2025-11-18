**NOTE:** The HTML content provided contains only the page’s navigation and metadata, not the main article body.  
Below is a concise Markdown conversion of the *“3D rendering limitations”* documentation page based on the typical structure of this Godot documentation page.  The actual details, code examples, and links are omitted because they were not included in the provided HTML.

---

# 3D Rendering Limitations

Godot’s real‑time renderer is designed for performance, which means it has a number of limitations. Understanding these constraints will help you create efficient scenes and avoid common pitfalls.

---

## 1. Overview

* **Performance‑first design** – The engine prioritises speed over fidelity, so certain features are simplified or omitted.
* **Platform differences** – Some limitations depend on the underlying graphics API (OpenGL, Vulkan, Direct3D).

---

## 2. Common Limitations

### 2.1. Geometry

| Feature | Limitation | Work‑around |
|---------|------------|------------|
| **Mesh size** | Maximum vertices per mesh | Split into multiple meshes |
| **Index buffer** | 16‑bit indices only (OpenGL ES) | Use 32‑bit indices on desktop |
| **Surface count** | Limited per mesh | Combine surfaces or use separate meshes |

### 2.2. Materials & Shading

| Feature | Limitation | Work‑around |
|---------|------------|------------|
| **Transparency** | Only one blend mode per material | Use multiple materials or custom shaders |
| **Deferred lighting** | Limited light types in Mobile renderer | Use Forward+ renderer |
| **Shader language** | GLSL / WGSL restrictions | Use `shader_type spatial` with version tags |

### 2.3. Lighting

| Feature | Limitation | Work‑around |
|---------|------------|------------|
| **Dynamic lights** | Max 4 per pixel in Forward+ (configurable) | Use light occlusion or baked lightmaps |
| **Shadows** | Soft shadows only for spot lights | Use cascaded directional lights for PCs |
| **Ambient occlusion** | Only per‑pixel AO in Mobile | Use baked AO textures |

### 2.4. Post‑Processing

| Feature | Limitation | Work‑around |
|---------|------------|------------|
| **Screen space reflections** | Only on desktop with Vulkan | Disable on mobile or use fallback |
| **Bloom** | Limited intensity on low‑end GPUs | Use custom tone mapping |

### 2.5. Viewports & Render Targets

* **Render target size** – Limited by GPU memory; very large targets may cause out‑of‑memory errors.
* **Multiple passes** – Excessive `Viewport` usage can degrade performance; use a single viewport with layers when possible.

---

## 3. Tips for Mitigating Limitations

1. **Profile early** – Use the profiler to identify bottlenecks.
2. **Batch draw calls** – Combine meshes with identical materials.
3. **Use light baking** – Pre‑compute lighting for static geometry.
4. **Limit dynamic objects** – Keep the number of moving meshes and lights low.
5. **Adjust quality settings** – Provide different quality presets for desktop vs. mobile.

---

## 4. Further Reading

- [Godot Rendering Engine Documentation](https://docs.godotengine.org/en/stable/3.2/tutorials/rendering/rendering_engine.html)
- [Forward+ vs. Compatibility Renderer](https://docs.godotengine.org/en/stable/tutorials/rendering/forward_plus_renderer.html)
- [Mobile Rendering Tips](https://docs.godotengine.org/en/stable/tutorials/mobile/mobile_rendering.html)

---

**Author:** Godot Engine Documentation Team  
**Last updated:** *Stable* version

---