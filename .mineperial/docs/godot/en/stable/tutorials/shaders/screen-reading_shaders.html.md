**Screen‑reading Shaders**  
================================

> *Introduction: It is often desired to make a shader that reads from the same screen to which it’s writing. 3D APIs, such as OpenGL or DirectX, make this very difficult because of internal hardware restrictions. Godot provides two ways to work around this limitation: the built‑in `SCREEN_TEXTURE` sampler (Godot 4) and manually rendering to a viewport texture.*

---

### 1.  Why screen‑reading is hard

In most graphics APIs a shader that is writing to the screen cannot read from the same render target in the same render pass.  
Typical workarounds:

| Technique | When it works | Drawbacks |
|-----------|---------------|-----------|
| **Double buffering** | Separate render passes | Requires an extra pass, can be slow |
| **Viewport textures** | Render scene to a separate viewport | Extra node, more memory |
| **Built‑in screen sampler (Godot 4)** | Read from the screen directly in the fragment shader | Only available in Godot 4 and later |

Godot abstracts the hardware details and lets you read the screen through a simple variable.

---

### 2.  Reading the screen with `SCREEN_TEXTURE` (Godot 4)

```glsl
shader_type canvas_item;

void fragment() {
    // Grab the color of the pixel that will be rendered on the screen.
    vec4 screen_color = SCREEN_TEXTURE.get_color(SCREEN_UV);

    // Do something with it – here we simply invert the colors.
    COLOR = vec4(1.0) - screen_color;
}
```

* `SCREEN_TEXTURE` is an automatically supplied sampler that points to the current frame’s image.  
* `SCREEN_UV` contains the UV coordinates of the fragment being rendered.

> **Tip:** Use `SCREEN_PIXEL_SIZE` if you need the size of a pixel in screen space.

---

### 3.  Using a viewport texture

If you need more control or you’re on Godot 3.x (which lacks `SCREEN_TEXTURE`) you can render a node to a separate `Viewport` and then sample from its `ViewportTexture`.

```
Viewport
    └── Node3D / Sprite / …
```

```glsl
shader_type canvas_item;

uniform sampler2D screen_tex : hint_screen_texture;

void fragment() {
    vec4 tex = texture(screen_tex, UV);
    // Example effect – apply a simple blur
    float blur = 0.1;
    vec2 offset = vec2(blur, 0.0);
    COLOR = (texture(screen_tex, UV - offset) +
             texture(screen_tex, UV) +
             texture(screen_tex, UV + offset)) / 3.0;
}
```

* In the editor you set the `screen_tex` uniform to the `ViewportTexture` exported by the viewport node.

---

### 4.  A more complex example: a screen‑focusing blur

```glsl
shader_type canvas_item;

uniform float amount : hint_range(0.0, 1.0) = 0.5;
uniform vec2 dir = vec2(1.0, 0.0);   // horizontal blur by default

void fragment() {
    vec2 uv = SCREEN_UV;
    vec4 col = vec4(0.0);
    for (int i = -8; i <= 8; i++) {
        float t = float(i) / 8.0;
        col += texture(SCREEN_TEXTURE, uv + dir * t * amount);
    }
    COLOR = col / 17.0;
}
```

* `amount` controls the blur radius.  
* `dir` lets you blur horizontally or vertically.

---

### 5.  Caveats & performance notes

| Issue | Explanation | Suggested workaround |
|-------|-------------|-----------------------|
| **Artifacts on the same surface** | Reading from the screen while writing to it in the same pass can produce visual glitches. | Render the effect in a separate pass or to an off‑screen texture. |
| **Performance hit** | Sampling the screen every fragment is expensive. | Keep the effect simple, or use lower resolution textures (`texture_screen()` or `screen_tex` with a small viewport). |
| **Godot 3.x compatibility** | `SCREEN_TEXTURE` is not available. | Use a `Viewport` + `ViewportTexture` approach. |

---

### 6.  Quick checklist for screen‑reading shaders

- [ ] **Godot 4** → use `SCREEN_TEXTURE`.  
- [ ] **Godot 3.x** → use a `Viewport` and assign the texture to a uniform.  
- [ ] Keep the shader lightweight – avoid per‑pixel expensive math.  
- [ ] Test on target devices; screen reading can be slower on mobile GPUs.

---

### 7.  Next steps

1. **Try it in your project** – apply the blur shader to a `ColorRect` that covers the screen.  
2. **Experiment with other effects** – colour grading, motion blur, screen‑space reflections.  
3. **Read the related docs**:  
   * [Screen‑space shaders](https://docs.godotengine.org/en/stable/tutorials/shaders/screen_shaders.html)  
   * [Godot 4 Shader Reference](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference.html)  

Happy shader‑crafting!