**Internal rendering architecture**

> This page is a high‑level overview of Godot 4's internal renderer design.  
> It does not apply to previous Godot versions. The goal of this page is to document design decisions taken to best suit the needs of the community and to provide a reference for contributors and developers who want to understand or extend Godot’s rendering pipeline.  

---  

## Table of Contents  

* [Introduction](#introduction)  
* [Overview](#overview)  
* [Core concepts](#core-concepts)  
* [Pipeline stages](#pipeline-stages)  
* [Rendering APIs](#rendering-apis)  
* [Performance considerations](#performance-considerations)  
* [Extending the renderer](#extending-the-renderer)  
* [Related documentation](#related-documentation)  

---  

### Introduction  

*(The original page contains a detailed introduction to the rendering architecture, covering the motivation for a new renderer in Godot 4, the overall structure, and how it differs from the 3.x renderer.)*  

---  

### Overview  

*(A diagram and textual description of the high‑level rendering pipeline: from scene graph traversal → culling → rasterization → shading → post‑processing, and how the renderer interfaces with the GPU.)*  

---  

### Core concepts  

* **Render pipeline** – the sequence of passes the renderer performs for each frame.  
* **Render resources** – buffers, textures, shaders, and pipeline state objects.  
* **Render threads** – how Godot splits work between the main thread and GPU/worker threads.  
* **Deferred / Forward+** – explanation of the two main rendering modes and their trade‑offs.  

---  

### Pipeline stages  

| Stage | Purpose | Key components | Notes |
|-------|---------|----------------|-------|
| Scene traversal | Walk the scene tree to collect visible objects | `Viewport`, `Camera`, `Light`, `MeshInstance` | Uses a spatial index for culling |
| Culling | Remove objects outside the view frustum or occluded | `OcclusionCuller` | Configurable thresholds |
| Rasterization | Convert geometry into fragments | GPU pipeline, shaders | Separate pipelines for forward and deferred |
| Shading | Apply material shading and lighting | `Shader`, `Material`, `Light`, `Environment` | Global illumination, IBL |
| Post‑processing | Apply screen‑space effects | `PostProcessEffect`, `FXAA`, `Bloom` | Optional per‑viewport |

---  

### Rendering APIs  

* **Vulkan** – the default backend for modern hardware, offering fine‑grained control and multi‑threaded command buffer generation.  
* **OpenGL 3.3/4.3** – a fallback backend for older GPUs and mobile devices.  
* **Direct3D 11/12** – support for Windows platforms (not the default in Godot 4).  

Each backend implements the same abstract renderer interface (`RenderingDevice`) and can be swapped at build time.  

---  

### Performance considerations  

* **Batching** – grouping draw calls by material to reduce state changes.  
* **Instancing** – rendering many copies of the same mesh in a single draw call.  
* **Threading** – work is distributed between rendering, physics, and main logic threads.  
* **GPU profiling** – use built‑in `RenderingServer.get_render_info()` and external tools.  

---  

### Extending the renderer  

1. **Custom shaders** – write `GodotShader` or `OpenGL` shaders using the new GDScript shader language.  
2. **Custom passes** – add a `RenderPass` subclass to the pipeline for post‑processing or special effects.  
3. **Pipeline overrides** – replace or extend `RenderingServer` methods in a plugin.  
4. **Profiling hooks** – expose custom metrics via the `RenderingServer` API.  

---  

### Related documentation  

* [Rendering pipeline details](https://docs.godotengine.org/en/stable/tutorials/renderer/architecture.html)  
* [Shader language reference](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_language.html)  
* [GDExtension C++ API](https://docs.godotengine.org/en/stable/tutorials/gdextension/)  

---  

> **Note**: This markdown is a condensed summary of the original documentation page. For the full technical details, including code snippets, diagrams, and in‑depth explanations, refer to the official Godot Engine documentation.