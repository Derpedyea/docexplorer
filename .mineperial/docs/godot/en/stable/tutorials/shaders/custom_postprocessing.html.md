**Custom post-processing**  
*Godot Engine (stable) documentation – tutorials → shaders → custom postprocessing*

---

## Introduction

Godot comes with a number of built‑in post‑processing effects such as Bloom, Depth‑of‑Field (DOF), and Screen‑Space Ambient Occlusion (SSAO).  
For advanced use cases that require custom visual effects or unique screen‑wide processing, you can write your own post‑processing shaders and apply them after the main scene has rendered.

The tutorial explains how to set up a post‑processing pipeline in Godot, how to create a custom shader, and how to apply it to the screen using a `Viewport` and a `ShaderMaterial`.

---

## Basic Setup

1. **Create a viewport** that matches the screen size.  
2. Set the viewport to use a `RenderTarget` and enable **HDR** if needed.  
3. Add a `CanvasLayer` or `TextureRect` to the main scene and set its texture to the viewport’s render target.  
4. Create a `ShaderMaterial` with a fragment shader that receives the viewport texture and processes it.

---

## Shader Example

```glsl
shader_type canvas_item;

// The viewport texture to process
uniform sampler2D screen_tex : hint_albedo;

// Example: simple vignette effect
void fragment() {
    vec2 uv = SCREEN_UV;
    float dist = distance(uv, vec2(0.5));
    vec4 color = texture(screen_tex, uv);
    color.rgb *= smoothstep(0.8, 0.5, dist); // darken edges
    COLOR = color;
}
```

Attach the material to the `TextureRect` that displays the viewport, and you’ll see the effect applied after the scene renders.

---

## Common Use‑Cases

- **Color grading**: adjust hue/saturation/lightness per‑screen.
- **Dynamic resolution**: render at lower resolution and upscale.
- **Special effects**: glitch, pixelation, or custom bloom.
- **Screen‑space distortion**: simulate water or heat haze.

---

## Tips

- **Performance**: Keep shader logic lightweight; use `highp` only when necessary.
- **Multiple passes**: Chain several `Viewport` nodes with different shaders if you need multi‑step effects.
- **Debugging**: Use `print()` statements in GDScript to verify that the viewport texture is correctly passed to the shader.

---

## Further Reading

- [Advanced post‑processing](https://docs.godotengine.org/en/stable/tutorials/shaders/advanced_postprocessing.html)
- [Using a SubViewport as a texture](https://docs.godotengine.org/en/stable/tutorials/shaders/using_viewport_as_texture.html)

---