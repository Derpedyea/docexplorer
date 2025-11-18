**3D Antialiasing**  
*(Godot Engine – Stable documentation)*

---

### Introduction

In 3‑D scenes rendered at a limited resolution, aliasing artifacts often appear as a “staircase” effect on surface edges (also known as *jaggies*). Antialiasing techniques reduce or eliminate these visual glitches by smoothing or blending the pixel colours that form the edges of geometry. Godot offers several built‑in antialiasing options that can be enabled per‑project or per‑viewport.

---

### Antialiasing Types Available in Godot

| Method | Description | Typical use case |
|--------|-------------|-----------------|
| **FXAA** | Fast Approximate Anti‑Aliasing – a shader‑based post‑process effect that is cheap and works well on most scenes. | General purpose when performance is a concern. |
| **SMAA** | Subpixel Morphological Anti‑Aliasing – more accurate than FXAA and still lightweight. | Projects that need higher quality edge smoothing without heavy cost. |
| **MSAA** | Multi‑Sample Anti‑Aliasing – hardware‑based, performed in the rendering pipeline. | When you have a powerful GPU and want high quality with minimal post‑processing. |
| **SSAA** | Supersample Anti‑Aliasing – renders the scene at a higher resolution and then downsamples. | High‑end projects requiring the best possible image quality; most performance expensive. |
| **TAA** | Temporal Anti‑Aliasing – uses motion vectors to reduce aliasing over time. | When you need to blend motion‑dependent edges, especially in fast‑moving scenes. |

---

### Enabling Antialiasing

#### Project‑Wide Settings

1. Open **Project → Project Settings**.  
2. Navigate to `Rendering > Quality`.  
3. Under *Anti‑Aliasing*, choose the desired mode from the dropdown: `Disabled`, `FXAA`, `SMAA`, `MSAA`, `SSAA`, or `TAA`.  
4. (Optional) Adjust the `MSAA` sample count (`2×, 4×, 8×`) if using MSAA.

> **Tip:**  
> *Changing the antialiasing type will affect all viewports that use the default `Viewport` settings.*

#### Per‑Viewport Settings

If you have custom `Viewport` nodes:

```gdscript
var viewport = Viewport.new()
viewport.anti_aliasing = Viewport.ANTIALIASING_SMAA   # or any other constant
```

You can also override the global setting by setting `viewport.use_xr` or `viewport.usage`.

---

### Performance Considerations

| Antialiasing | Approx. Cost | GPU Support |
|--------------|--------------|-------------|
| **FXAA** | Very low | All |
| **SMAA** | Low | All |
| **MSAA** | Medium–High | Requires 2×, 4×, 8× samples (GPU dependent) |
| **SSAA** | Very High | Requires enough VRAM for higher resolution buffer |
| **TAA** | Medium | Requires motion vectors, may introduce ghosting |

When targeting mobile devices, **FXAA** or **SMAA** are generally the safest choices. On desktop GPUs with good memory bandwidth, **MSAA 4×** or **TAA** can yield a good balance between quality and performance.

---

### Advanced Tuning

#### MSAA

- Set the `msaa` property in the `Project Settings > Rendering > Quality` section.  
- For 3D scenes using `WorldEnvironment`, you can enable *MSAA* in the environment’s *Quality* tab.

#### TAA

- Requires motion vectors. Enable `rendering/quality/taa/enable` in the settings.  
- Adjust `rendering/quality/taa/sharpness` to control edge strength.

#### Custom Shaders

If you need bespoke edge detection or blending, you can write a fragment shader that implements an antialiasing algorithm. The shader can be attached to a `CanvasItem` and rendered in a separate pass.

---

### Known Issues & Workarounds

| Issue | Description | Workaround |
|-------|-------------|------------|
| **Ghosting in TAA** | Fast moving objects may show trailing pixels. | Reduce TAA sharpness, or use FXAA/SMAA for moving objects. |
| **SMAA not supported on some mobile GPUs** | Some older devices lack the required texture support. | Disable SMAA or fallback to FXAA. |
| **MSAA disables anti‑aliasing on UI elements** | UI may appear jagged if not rendered with the same pipeline. | Render UI in a separate viewport with matching MSAA settings. |

---

### References

- [Godot 3.x Rendering Documentation](https://docs.godotengine.org/en/stable/tutorials/rendering/index.html)  
- [Viewport Documentation](https://docs.godotengine.org/en/stable/classes/class_viewport.html)  
- [Project Settings Reference – Rendering](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html#rendering)

---