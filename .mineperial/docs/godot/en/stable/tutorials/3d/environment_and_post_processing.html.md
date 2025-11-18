# Environment and post-processing

**Godot 4** introduces a new, fully‑featured *Environment* resource that controls the world‑space appearance of a scene, together with a completely revamped post‑processing pipeline.  Below is a high‑level overview of the key concepts, settings and effects that you’ll find in the official documentation.

> *Note: this page was originally written for the stable release of Godot 4. 0 and has since been updated to reflect the latest changes in the 4.x series.*

---

## 1. The Environment Resource

The Environment resource is the central place where you set everything that shapes the visual output of a viewport:

| Feature | What it does | Typical use‑case |
|---------|--------------|------------------|
| **Background** | Color, sky, or image | Sky‑box rendering, simple gradient backgrounds |
| **Ambient light** | Global light level & color | Warm / cool ambient tones, daylight cycles |
| **Fog** | Linear or exponential volumetric fog | Atmospheric depth, horror ambience |
| **Glow** | Bloom & tone‑mapping | Soft light bleed, high‑intensity highlights |
| **Exposure** | Automatic or manual HDR exposure | Dynamic lighting, HDR scenes |
| **Post‑process** | Bloom, motion blur, vignette, etc. | Cinematic effects, stylised rendering |

In Godot 4 you create an Environment resource (`Environment` node or `WorldEnvironment` node) and adjust these settings in the Inspector.  The resource can be reused across multiple viewports, allowing you to switch worlds or camera modes without recreating the same configuration every time.

---

## 2. Setting an Environment on a Viewport

1. **Add a `WorldEnvironment` node** to your scene or to the root of a sub‑scene you want to render with a different style.
2. **Create an `Environment` resource** by clicking **+** → **Environment** in the Inspector, or point the `Environment` property to an existing `.tres` file.
3. Adjust the settings in the **Environment** panel.  
   The **WorldEnvironment** node will now control everything that gets rendered through its `Viewport`.

You can also modify a viewport’s environment on the fly from script:

```gdscript
var env = preload("res://my_environment.tres")
var viewport = get_viewport()
viewport.environment = env
```

---

## 3. Post‑processing Effects

Godot 4 ships with a rich set of built‑in post‑processing options that you can toggle per `Environment`.  Below are the most commonly used ones:

| Effect | Description | How to enable |
|--------|-------------|---------------|
| **Bloom** | Adds soft glowing highlights to bright areas | `Bloom` → `Enabled = true` |
| **Motion Blur** | Blurs fast‑moving objects | `Motion Blur` → `Enabled = true` |
| **Vignette** | Darkens the corners of the view | `Vignette` → `Enabled = true` |
| **Depth of Field** | Creates a realistic camera focus effect | `DOF` → `Enabled = true` |
| **Color Correction** | Adjusts tone‑mapping, exposure and colour grading | `Color Correction` → `Enabled = true` |
| **SDF‑Outline** | Adds a stylised outline to 3‑D objects | `SDF‑Outline` → `Enabled = true` |
| **Lens Distortion** | Simulates barrel/pincushion distortion | `Lens Distortion` → `Enabled = true` |
| **Noise** | Adds screen noise for retro or glitch look | `Noise` → `Enabled = true` |

You can also enable **multiple effects simultaneously**; the order of processing is fixed, but you can tweak parameters for each one to create a wide range of looks.

---

## 4. Creating Custom Post‑Processing Shaders

For more advanced visual styles you can write custom post‑process shaders.  The `PostProcessMaterial` resource allows you to attach a `ShaderMaterial` to the environment:

```gdscript
var post_mat = preload("res://my_post_process.tres")
var env = get_viewport().environment
env.post_process = post_mat
```

The shader has a built‑in `_input` and `_output` varyings for the screen texture, which lets you modify the final image:

```glsl
shader_type canvas_item;

void fragment() {
    vec4 color = texture(SCREEN_TEXTURE, SCREEN_UV);
    // Example: invert colours
    color.rgb = 1.0 - color.rgb;
    COLOR = color;
}
```

---

## 5. Performance Tips

| Tip | Explanation |
|-----|-------------|
| **Disable unnecessary effects** | Each effect has a small performance cost; turn off bloom or DOF if you’re targeting mobile. |
| **Use the `Environment` resource per‑scene** | Reusing an environment across many viewports avoids costly recreation. |
| **Profile the viewport** | Use the built‑in debugger’s `Render` panel to see how much each post‑process step contributes to the FPS drop. |
| **Use `WorldEnvironment` sparingly** | Heavy post‑processing can cause frame‑rate drops on low‑end hardware. |

---

## 6. Common Use‑Cases

- **Sky‑box**: Set the background to a `Sky` resource for realistic environments.  
- **Day‑night cycle**: Animate the ambient light color and intensity over time.  
- **Retro‑pixel**: Enable `Noise` and `Vignette`, and set a low resolution `Viewport` with upscaling.  
- **Cinematic**: Combine `DOF`, `Bloom`, and `Lens Distortion` to mimic a film look.  
- **VR**: Keep post‑process to a minimum; heavy bloom can cause motion sickness.

---

## 7. Further Reading

- [Godot 4 Documentation – Rendering](https://docs.godotengine.org/en/stable/tutorials/rendering/index.html)  
- [Godot 4 Tutorials – Volumetric Fog and Fog Volumes](https://docs.godotengine.org/en/stable/tutorials/3d/volumetric_fog.html)  
- [Godot 4 Tutorials – Bloom and Motion Blur](https://docs.godotengine.org/en/stable/tutorials/3d/post_processing.html)  

---