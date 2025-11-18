# Reducing stutter from shader (pipeline) compilations

*Pipeline (shader) compilation is an expensive operation that can cause noticeable stutter, especially on low‑end hardware or when many shaders are created or modified at runtime. This guide explains what triggers pipeline compilation, how you can avoid it, and what tricks Godot offers to keep frame‑times smooth.*

---

## What is a pipeline compilation?

When Godot draws something it has to create a *pipeline* that describes how the GPU will render that object.  
A pipeline is built from a vertex shader, a fragment shader, and a number of optional stages (geometry, tessellation, compute, …).  
The process is:

1. **Shader source → GLSL / SPIR‑V** – the shader code is compiled into a format the GPU can understand.  
2. **Linking** – the compiled stages are linked together.  
3. **State validation** – the engine checks that all the resources (textures, samplers, uniform buffers…) match the pipeline.  

If any part of this process changes, the entire pipeline must be rebuilt. That rebuild is what we call a *pipeline compilation*.

> **Why it matters** – a single compilation can take 10 ms or more on a mobile GPU. If it happens during a frame it can drop the frame‑rate and cause a noticeable hitch.

---

## When does it happen?

| Trigger | Description |
|---------|-------------|
| **Creating a new material** | Instantiating a `ShaderMaterial` or `StandardMaterial3D` for the first time triggers a compile. |
| **Changing a shader’s code** | Editing the source of a `Shader` in the editor or via code causes a new compile. |
| **Changing a shader uniform type** | Adding or removing a uniform, or changing its type, forces a re‑link. |
| **Switching a material on a mesh** | When a mesh gets a new material that hasn't been compiled before. |
| **Changing render‑pipeline flags** | E.g. toggling “use hardware skinning” or “use a different vertex format”. |
| **Using a dynamic “material_override”** | Every change to the override material can trigger a compile if the material is new. |

You can spot the cost in the editor’s **Profiler** → **Rendering** section – look for the *Pipeline Compile* counter.

---

## How to avoid stutters

### 1. **Preload all shaders and materials**

If you know a shader will be used, load it at project start (or at scene load) so that its pipeline is compiled before the first frame that needs it.

```gdscript
# preload.shd
var my_shader = preload("res://shaders/diffuse.tres")
var my_material = preload("res://materials/diffuse_material.tres")
```

**Tip:** Use `preload()` instead of `load()` to make sure the resource is cached immediately.

### 2. **Cache material instances**

Instead of creating a new `ShaderMaterial` every frame, keep a single instance and reuse it.

```gdscript
var mesh_material : ShaderMaterial

func _ready():
    mesh_material = preload("res://materials/diffuse.tres")
    $MeshInstance.material_override = mesh_material
```

### 3. **Avoid runtime shader changes**

If you only need a few parameter tweaks, expose them as *uniforms* and change the values with `set_shader_parameter()` instead of re‑creating the whole shader.

```gdscript
# Changing a color
mesh_material.set_shader_parameter("diffuse_color", Color(1, 0, 0))
```

### 4. **Use default pipelines for static objects**

Godot ships with a handful of built‑in pipelines that are highly optimised. When possible, stick to those rather than writing a custom shader.

| Object type | Recommended pipeline |
|-------------|----------------------|
| Static meshes | `StandardMaterial3D` (forward+ renderer) |
| UI elements | `CanvasItemMaterial` |
| Particles | `ParticlesMaterial` |

### 5. **Disable features that trigger new pipelines**

Some render‑options force the engine to use a different pipeline:

- **Skinning** – if you can pre‑sparse a static mesh, turn off skinning.
- **Transparency** – the “Transparent” flag will use a different pipeline. Keep it enabled only when needed.
- **Light mapping** – light‑mapped meshes have their own pipeline.

### 6. **Profile early, fix early**

Run the **Godot Profiler** with the *Rendering* module enabled. Look for spikes in *Pipeline Compile* time. Once identified, replace the offending material or shader with a pre‑compiled one.

### 7. **Keep shaders small**

A large shader with many branches or complex math will take longer to compile. Where possible, split logic into multiple simple shaders or use the “shader variant” feature to keep a single pipeline but vary only uniform values.

### 8. **Use the GPU pipeline cache (Godot 4.2+)**

Godot 4.2 introduced the ability to cache pipelines on disk. Enable it in *Project Settings → Rendering → Pipelines → Cache pipelines*.

```gdscript
# On project startup
RenderServer.pipeline_cache_set_path("user://pipeline_cache")
```

The engine will reuse cached pipelines on subsequent runs, reducing compilation time dramatically.

---

## Practical example

```gdscript
# preload_my_materials.gd
extends Node

var red_shader : Shader
var blue_shader : Shader
var red_material : ShaderMaterial
var blue_material : ShaderMaterial

func _ready():
    # Pre‑compile
    red_shader   = preload("res://shaders/red.tres")
    blue_shader  = preload("res://shaders/blue.tres")
    red_material = ShaderMaterial.new()
    blue_material = ShaderMaterial.new()
    red_material.shader = red_shader
    blue_material.shader = blue_shader

    # Assign to a mesh
    var mesh = $MeshInstance
    mesh.material_override = red_material
```

Whenever you want to switch colors, simply change the uniform:

```gdscript
# Switch to blue
mesh.material_override.shader = blue_shader
```

No recompilation occurs because the shader objects were already compiled in `_ready()`.

---

## Summary

1. **Know the cost** – pipeline compilation is heavy.  
2. **Preload resources** – load all needed shaders and materials before they’re first used.  
3. **Reuse material instances** – avoid creating new `ShaderMaterial`s at runtime.  
4. **Avoid dynamic changes** – use uniforms instead of re‑creating shaders.  
5. **Leverage built‑in pipelines** – use Godot’s default materials where possible.  
6. **Profile and cache** – use the profiler to spot issues and enable pipeline caching in Godot 4.2+.

By following these practices you’ll keep your project running smoothly without the annoying hitches caused by on‑the‑fly shader compilations.