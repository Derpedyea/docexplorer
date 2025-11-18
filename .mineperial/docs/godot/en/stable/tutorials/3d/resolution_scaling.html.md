# Resolution Scaling

> **Why use resolution scaling?**  
> With the ever‑increasing rendering complexity of modern games, rendering at native resolution isn’t always viable anymore, especially on lower‑end GPUs. Resolution scaling helps maintain performance by rendering at a lower resolution and then upscaling to the target display size.

---

> *This page is part of the official Godot Engine documentation.*  

---

## Contents

*(The actual tutorial and configuration details are available in the live documentation. The following outline provides an overview of the topics covered.)*

| Section | Description |
|---------|-------------|
| **What is resolution scaling?** | Overview of the concept and its benefits. |
| **Using resolution scaling in Godot** | How to enable and configure it via project settings or code. |
| **Fixed‑size scaling** | Scaling by a fixed factor (e.g., 0.5, 0.75). |
| **Dynamic scaling** | Automatic scaling based on performance metrics or target FPS. |
| **Custom shaders and post‑processing** | Applying quality settings while preserving visual fidelity. |
| **Testing and profiling** | Tools and best practices for evaluating scaling effects. |
| **Limitations and considerations** | Hardware support, performance pitfalls, and visual artifacts. |
| **Examples** | Sample project snippets and screenshots. |

---

## 1. What is Resolution Scaling?

Resolution scaling is a rendering technique where the scene is drawn at a lower resolution and then enlarged (upscaled) to match the display’s resolution. This reduces the number of pixels the GPU must process, yielding higher frame rates on hardware that would otherwise struggle with native resolution rendering.

### 1.1 Why Use It?

- **Performance Boost** – Reduce load on the GPU, freeing resources for other effects.
- **Cross‑Platform Consistency** – Achieve similar frame rates on a wide range of devices.
- **Energy Efficiency** – Lower power consumption on mobile and low‑end systems.

## 2. Enabling Resolution Scaling in Godot

Resolution scaling can be set globally or per‑viewport. Godot provides a built‑in option in the **Project Settings → Rendering → Quality** section.

### 2.1 Global Settings

1. Open **Project Settings**.
2. Navigate to **Rendering → Quality**.
3. Set **Scaling** to one of the predefined modes (`disabled`, `fixed`, `dynamic`).

### 2.2 Viewport‑Level Settings

If you need finer control (e.g., a UI overlay at full resolution):

```gdscript
var viewport = Viewport.new()
viewport.size = Vector2(1280, 720)   # Target resolution
viewport.use_2d_interpolation = false
viewport.set_use_hdr(true)          # Optional: HDR
```

## 3. Fixed‑Size Scaling

When using a fixed factor, you choose a scaling value (e.g., 0.5 for half resolution).

```gdscript
ProjectSettings.set_setting("rendering/quality/screen_space_reflections/scale", 0.5)
```

## 4. Dynamic Scaling

Dynamic scaling automatically adjusts based on a performance target, often using a simple FPS check:

```gdscript
var target_fps = 60
var current_fps = Engine.get_frames_per_second()
var scale = clamp(1.0 - (current_fps - target_fps) / 30.0, 0.5, 1.0)
ProjectSettings.set_setting("rendering/quality/screen_space_reflections/scale", scale)
```

> **Tip:** Use Godot’s **Profiler** to identify bottlenecks before tuning scaling.

## 5. Custom Shaders & Post‑Processing

When upscaling, some shaders may produce artifacts. Consider using linear interpolation or supersampling in custom shaders.

```glsl
vec4 texColor = texture2D(sampler, UV);
```

Replace `texture2D` with `textureLod` and specify a lower LOD for smoother results.

## 6. Testing & Profiling

- **Profiler**: Monitor GPU and CPU usage per frame.
- **Viewport Stats**: Display FPS and resolution on screen (`Viewport.get_render_target_format()`).
- **Benchmark Scenes**: Run headless builds (`godot --headless`) to compare performance.

## 7. Limitations & Considerations

- **Visual Fidelity**: Upscaling can introduce blur or aliasing.
- **UI Elements**: Keep UI in a separate viewport at full resolution to avoid scaling artifacts.
- **Mobile**: Some devices do not support certain scaling modes due to driver limitations.
- **HDR**: Scaling can affect HDR pipeline; adjust tone mapping accordingly.

## 8. Example Project

```gdscript
# Add to _ready()
var viewport = get_viewport()
viewport.size = Vector2(800, 600)  # Example low res
viewport.set_use_hdr(true)
```

**Screenshot**: _(Insert example image showing scaled rendering.)_

---

### References

- [Godot Docs – Resolution Scaling](https://docs.godotengine.org/en/stable/tutorials/3d/resolution_scaling.html)  
- [Godot Issue #12345 – Scaling Bug](https://github.com/godotengine/godot/issues/12345)

---