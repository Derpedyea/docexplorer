**The Compositor**  
*(Godot Engine – stable documentation)*  

The compositor is a new feature in Godot 4 that gives you fine‑grained control over the rendering pipeline for a Viewport. It is configured on a **WorldEnvironment** node and can be used to apply a variety of visual effects—such as post‑processing, tonemapping, anti‑aliasing, or custom shader pipelines—on the final image before it is presented to the screen.

---

## 1.  Overview

* A **Compositor** is a collection of rendering stages that are executed after the main rendering pass but before the final image is displayed.
* It is enabled automatically for every `Viewport` that has a `WorldEnvironment` node with a **Compositor** resource attached.
* The compositor runs on the GPU, so all stages can be implemented as shaders, which keeps the CPU workload minimal.

---

## 2.  Setting Up a Compositor

1. **Create a WorldEnvironment node**  
   ```gdscript
   var env = WorldEnvironment.new()
   add_child(env)
   ```
2. **Create a Compositor resource**  
   *In the editor*:  
   * Right‑click → **New Resource** → *Compositor*  
   * Assign it to `WorldEnvironment.compositor`.
3. **Add a Pipeline**  
   * In the resource inspector, click **Add Pipeline**.
   * Choose a *Pipeline* type (e.g., *Forward*, *Deferred*, *Custom*).

---

## 3.  Built‑in Pipelines

* **Forward+** – default pipeline, good for most projects.  
* **Deferred** – better for many lights and complex scenes.  
* **Mobile** – lightweight pipeline for mobile devices.  
* **Compatibility** – emulates older OpenGL 2.0 behavior.

> *Tip:* The `WorldEnvironment` node can be reused across multiple Viewports if you want a consistent look.

---

## 4.  Adding Custom Passes

A compositor pipeline is made up of a sequence of *passes*. Each pass is a shader that takes the output of the previous pass as input. To add a pass:

1. **Create a Compositor Pass**  
   ```gdscript
   var pass = CompositorPass.new()
   ```
2. **Set the shader**  
   * Use a `ShaderMaterial` or a custom script that extends `ShaderMaterial`.  
3. **Insert into the pipeline**  
   ```gdscript
   pipeline.add_pass(pass, index)  # index is optional
   ```

Example – a simple bloom pass:

```gdscript
var bloom = CompositorPass.new()
bloom.shader = preload("res://shaders/bloom.shader")
pipeline.add_pass(bloom)
```

---

## 5.  Common Use Cases

| Effect | Typical Pipeline | Notes |
|--------|------------------|-------|
| Depth‑of‑field | Custom or Forward+ | Requires depth buffer. |
| Screen‑space reflections | Deferred | Expensive; enable only if needed. |
| Motion blur | Custom | Needs velocity buffer. |
| Color grading | Custom | Use `Color` or `ToneMapping` passes. |
| Post‑processing (e.g., vignette) | Custom | Can be combined with any pipeline. |

---

## 6.  Example: Full‑Custom Pipeline

Below is a minimal example that shows how to create a custom pipeline with two passes: a color adjustment and a blur.

```gdscript
func _ready():
    var env = WorldEnvironment.new()
    add_child(env)

    var comp = Compositor.new()
    env.compositor = comp

    var pipeline = CompositorPipeline.new()
    comp.add_pipeline(pipeline)

    # 1️⃣ Color adjust
    var color_pass = CompositorPass.new()
    color_pass.shader = preload("res://shaders/color_adjust.shader")
    pipeline.add_pass(color_pass)

    # 2️⃣ Blur
    var blur_pass = CompositorPass.new()
    blur_pass.shader = preload("res://shaders/blur.shader")
    pipeline.add_pass(blur_pass)
```

Each shader should use the following convention:

```glsl
shader_type canvas_item;

uniform sampler2D tex;          // Input texture
uniform vec4 color_adjust;      // Example uniform

void fragment() {
    vec4 color = texture(tex, UV);
    // apply effect
    COLOR = color * color_adjust;
}
```

---

## 7.  Debugging and Profiling

* The **Debug** tab in the editor’s **WorldEnvironment** panel shows each pass and its execution time.  
* Use the **Render** panel in the **Profile** mode to see GPU usage per pass.

---

## 8.  Further Reading

* **Post‑Processing in Godot 4** – a deeper dive into shaders and passes.  
* **Godot Rendering Pipelines** – explanation of the built‑in pipelines.  
* **Shader Reference** – syntax and built‑ins for writing compositor shaders.

---

### TL;DR

The compositor lets you plug in arbitrary shader passes into the rendering pipeline. Configure it via a `WorldEnvironment` node, choose a pipeline (built‑in or custom), and add passes as needed to achieve your visual look.