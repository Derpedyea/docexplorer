**Advanced Post‑processing** – Godot Engine documentation (stable)

> *Introduction:*  
> This tutorial describes an advanced method for post‑processing in Godot. In particular, it explains how to write a post‑processing shader that uses the depth buffer. You should also understand the limitations and how to set up the necessary resources.

---

## Table of contents

1. [Prerequisites](#prerequisites)  
2. [Post‑processing basics](#post-processing-basics)  
3. [Depth‑buffer usage](#depth-buffer-usage)  
4. [Shader implementation](#shader-implementation)  
5. [Examples and visual results](#examples-and-visual-results)  
6. [Further reading](#further-reading)

---

### Prerequisites

- Basic knowledge of Godot’s 3D rendering pipeline.  
- Familiarity with Godot’s shader language (`ShaderMaterial`).  
- A project with a viewport that outputs a depth texture.

---

### Post‑processing basics

Post‑processing is performed **after** the scene has been rendered. In Godot it is typically implemented via a *Viewport* that draws the scene, then a second viewport or a `ColorRect` that runs a shader on that texture.

```text
Scene
 └─ Camera
 └─ Viewport
      └─ ViewportTexture
          └─ ShaderMaterial (post‑process)
```

---

### Depth‑buffer usage

The depth buffer stores the distance from the camera to each pixel. By sampling this buffer in a shader you can create effects that depend on depth, such as:

* Depth‑based blurs  
* Depth‑of‑field  
* Bokeh or focus rings  
* Fog based on distance  

In Godot you can request the depth texture from a `Viewport` by enabling the **“Enable Depth Texture”** option in its settings. The texture can then be accessed in a shader via the built‑in sampler `DEPTH_TEXTURE`.

```glsl
// Example: sample depth
float depth = texture(DEPTH_TEXTURE, UV).r;
```

---

### Shader implementation

A minimal depth‑based post‑processing shader might look like this:

```glsl
shader_type canvas_item;

uniform sampler2D SCREEN_TEXTURE : hint_screen_texture;
uniform sampler2D DEPTH_TEXTURE : hint_depth_texture;

void fragment() {
    vec4 color = texture(SCREEN_TEXTURE, UV);
    float depth = texture(DEPTH_TEXTURE, UV).r;

    // Simple depth‑based darkening
    color.rgb *= smoothstep(0.2, 0.8, depth);
    COLOR = color;
}
```

*Steps to set it up:*

1. Add a `Viewport` node that renders the main scene.  
2. Enable **Depth Texture** in the viewport’s properties.  
3. Create a `CanvasItem` (e.g., `ColorRect`) covering the screen.  
4. Attach a `ShaderMaterial` with the shader above.  
5. Assign the viewport texture to `SCREEN_TEXTURE` and the depth texture to `DEPTH_TEXTURE`.

---

### Examples and visual results

| Effect | Description | Screenshot |
|--------|-------------|------------|
| Depth blur | Blurs objects further away | *[image]* |
| Depth‑of‑field | Focus on near objects | *[image]* |
| Bokeh | Circular out‑of‑focus highlights | *[image]* |

*(Replace *[image]* with actual screenshots from a running project.)*

---

### Further reading

- [Custom post‑processing](https://docs.godotengine.org/en/stable/tutorials/shaders/custom_postprocessing.html) – Related tutorial.  
- [Viewport](https://docs.godotengine.org/en/stable/tutorials/rendering/viewport.html) – How to use viewports.  
- [Godot Shading Language](https://docs.godotengine.org/en/stable/tutorials/shaders/shading_language.html) – Shader basics.  

---