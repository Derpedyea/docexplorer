**2D Antialiasing**  
================================

This document explains the anti‑aliasing techniques available for 2‑D graphics in Godot, why they are needed, and how to enable or customize them.

---

## Introduction

Because 2‑D scenes are rendered at a fixed, low resolution, edges of geometry often appear jagged – the classic “staircase” effect.  
Anti‑aliasing smooths these edges, improving visual quality at the cost of a small amount of performance overhead.

---

## Antialiasing Options

Godot supports several 2‑D anti‑aliasing methods, each with its own trade‑offs.

| Method | Description | Typical Use‑case |
|--------|-------------|-----------------|
| **None** | No anti‑aliasing. | Very low‑end devices or when you want the classic pixel‑art look. |
| **FXAA** (Fast Approximate AA) | A screen‑space algorithm that blends neighbouring pixels based on luminance. It is fast and works well on a wide range of resolutions. | General purpose; most games use this. |
| **SMAA** (Sub‑Pixel Morphological AA) | A more sophisticated screen‑space algorithm that preserves edge detail better than FXAA while keeping performance reasonable. | High‑quality 2‑D projects where detail is important. |
| **MSAA** (Multisample AA) | Samples each pixel multiple times at slightly different positions, then averages the results. Requires multisample render targets (MSR). | When you can afford the extra GPU memory and want the best visual quality. |

> **Tip** – In many projects **FXAA** is the default choice because it adds almost no visual artifacts while keeping performance low.

---

## Enabling 2‑D AA in Godot 4

1. Open **Project Settings** (`Project > Project Settings`).
2. Navigate to **Rendering → Quality → 2D**.
3. Set **Antialiasing** to one of the options above.

```
# Example – enable SMAA
Project Settings → Rendering → Quality → 2D → Antialiasing = "SMAA"
```

> The change takes effect immediately; no project restart is required.

---

## Custom 2‑D Anti‑Aliasing with Shaders

If the built‑in methods don’t meet your needs, you can write a custom shader that processes the screen output.

```glsl
shader_type canvas_item;

uniform sampler2D texture : hint_albedo;

void fragment() {
    // A very simple 3x3 blur as an anti‑aliasing demo
    vec2 tex_coord = UV;
    vec4 color = texture2D(texture, tex_coord);
    for (int x = -1; x <= 1; ++x) {
        for (int y = -1; y <= 1; ++y) {
            color += texture2D(texture, tex_coord + vec2(x, y) / vec2(IMG_SIZE));
        }
    }
    COLOR = color / 9.0;
}
```

> Use this approach only if you need custom behaviour; the built‑in options are usually sufficient.

---

## Performance Considerations

| Method | Approx. GPU cost | Approx. Memory cost | Typical FPS impact (medium‑res 1080p) |
|--------|------------------|---------------------|-------------------------------------|
| **None** | None | None | 0% |
| **FXAA** | Low | None | ~1–3% |
| **SMAA** | Medium | Small | ~3–6% |
| **MSAA** | High | High | ~7–12% |

> These values vary with your scene complexity and target platform.

---

## Summary

* 2‑D anti‑aliasing removes jagged edges and enhances visual fidelity.
* Godot offers **FXAA**, **SMAA**, **MSAA**, and **None** as built‑in options.
* Enable them through *Project Settings → Rendering → Quality → 2D → Antialiasing*.
* For specialised needs, implement a custom canvas‑item shader.

For more detailed information, see the [official Godot documentation](https://docs.godotengine.org/en/stable/tutorials/2d/2d_antialiasing.html).