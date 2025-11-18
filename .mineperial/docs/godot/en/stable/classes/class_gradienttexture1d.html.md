**GradientTexture1D – Godot Engine Documentation**

---

## Overview

`GradientTexture1D` is a 1‑D texture class that generates a texture by sampling a `Gradient`.  
It inherits from:

```
Texture2D
→ Texture
→ Resource
→ RefCounted
→ Object
```

### Description

A **1D texture** that uses colors from a `Gradient` to create a continuous color ramp.  
The texture is typically used for shaders, UI elements, or any situation where a one‑dimensional gradient is required.

---

## Signals

| Signal | Description |
|--------|-------------|
| **texture_changed** | Emitted when the gradient or texture size changes. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | `int` | `256` | Width of the generated texture. |
| `height` | `int` | `1` | Height of the generated texture (always 1 for a 1‑D texture). |
| `gradient` | `Gradient` | `null` | The gradient used to sample colors. |
| `fill_mode` | `int` | `Gradient.FILL_MODE_STRETCH` | How the gradient is stretched or repeated across the texture. |

> **Note**: The `gradient` property is exposed to the editor; changing it automatically updates the texture.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_width(width)` | `void` | `int width` | Sets the texture width and updates the texture. |
| `set_gradient(gradient)` | `void` | `Gradient gradient` | Assigns a new gradient and regenerates the texture. |
| `set_fill_mode(mode)` | `void` | `int mode` | Sets how the gradient is mapped across the texture. |
| `get_texture()` | `Texture` | | Retrieves the generated `Texture2D`. |

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `FILL_MODE_STRETCH` | `0` | Stretch the gradient to fill the entire width. |
| `FILL_MODE_REPEAT` | `1` | Repeat the gradient pattern across the width. |
| `FILL_MODE_TILE` | `2` | Tile the gradient with its original spacing. |

---

## Usage Example (GDScript)

```gdscript
var grad_tex := GradientTexture1D.new()
grad_tex.width = 512
grad_tex.gradient = Gradient.new()
grad_tex.gradient.add_point(0.0, Color(1, 0, 0))
grad_tex.gradient.add_point(1.0, Color(0, 0, 1))
grad_tex.update()

$Sprite.texture = grad_tex
```

---

## Related Resources

- [Gradient](../class_gradient.html)
- [GradientTexture2D](../class_gradienttexture2d.html)

---

### References

- Official Godot Engine Documentation: <https://docs.godotengine.org/en/stable/classes/class_gradienttexture1d.html>