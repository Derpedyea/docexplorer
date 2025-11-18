**Note:** The supplied HTML does not contain the actual body of the “Using SDFGI” tutorial – it only includes the site header, navigation and surrounding boilerplate.  
Below is a minimal Markdown skeleton that reflects the structure of a typical Godot Engine documentation page for this topic. If you have the full HTML body, replace the placeholders with the corresponding content.

```markdown
# Signed Distance Field Global Illumination (SDFGI)

> **Author:** Godot Engine Documentation  
> **Version:** Stable

> *Signed distance field global illumination (SDFGI) is a novel technique available in Godot 4.0. It provides semi‑real‑time global illumination that scales to any world size and works with procedural geometry.*

---

## Overview

SDFGI is a GPU‑based global illumination system that approximates light bounces using signed distance fields. It is designed to be fast, scalable and to work with any scene size, making it suitable for large open‑world projects.

---

## Enabling SDFGI

1. **Open Project Settings**  
   *Menu → Project → Project Settings → Rendering → Global Illumination.*

2. **Turn on SDFGI**  
   *Check `SDFGI` under `SDFGI` settings.*

3. **Adjust Parameters**  
   - `Cell Size` – Determines voxel resolution.  
   - `Bounces` – Number of light bounces.  
   - `Use Volumetric Light` – Toggle volumetric lighting integration.

4. **Apply and Restart**  
   *After changing these settings, restart the editor to apply them.*

---

## Using SDFGI in a Scene

```gdscript
# Example: Adding a Directional Light to a SDFGI‑enabled scene

var light = DirectionalLight3D.new()
light.shadow_enabled = true
add_child(light)
```

> **Tip:** Keep the light’s intensity moderate; SDFGI automatically accounts for indirect lighting.

---

## Performance Tips

- **Adjust Cell Size:** A larger cell size reduces memory usage but can make lighting less accurate.  
- **Limit Bounces:** More bounces increase quality but add computational cost.  
- **Use `SDFGI` only where needed:** If a scene is small and static, a voxel GI may be more efficient.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| SDFGI flickers during gameplay | Increase `Cell Size` or reduce `Bounces`. |
| High memory usage | Decrease `Cell Size` or disable `Volumetric Light`. |

---

## Further Reading

- [Using Lightmap Global Illumination](../using_lightmap_gi.html)  
- [Using Voxel Global Illumination](../using_voxel_gi.html)

---

> *For more details, consult the full Godot Engine manual and community forums.*