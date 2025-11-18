**TextureProgressBar** – Godot Engine (stable) documentation

---

## Overview

`TextureProgressBar` is a texture‑based progress bar.  
It is useful for loading screens, life or stamina bars, and any UI element that needs to display a value as a partially filled texture.

> **Inheritance hierarchy**  
> `TextureProgressBar` → `Range` → `Control` → `CanvasItem` → `Node` → `Object`

---

## Description

`TextureProgressBar` works like a normal `ProgressBar`, but instead of drawing a solid block it draws a user‑supplied texture.  
The texture is sliced according to the current progress value. The class supports two texture types:

- **Full texture** – the whole image is stretched to fill the bar.
- **Normal / normal‑map** – can be used for effects such as light and shading.

You can set the texture via the `texture` property, and control the direction (horizontal/vertical) with `fill_mode` and `orientation`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture2D` | `null` | The texture to display. |
| `fill_mode` | `int` | `1` | Determines how the texture is sliced (`TextureProgressBar.FILL_LEFT_TO_RIGHT`, etc.). |
| `orientation` | `int` | `1` | Direction in which the bar grows (`TextureProgressBar.HORIZONTAL`, `VERTICAL`). |
| `custom_constants/` | – | – | (See the API reference for additional constants.) |

*(Additional properties inherited from `Range`, `Control`, and `CanvasItem` are available.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_minimum_size()` | `Vector2` | Returns the minimum size required for the control. |
| `set_texture(Texture2D)` | – | Assigns a texture to the bar. |
| `get_texture()` | `Texture2D` | Retrieves the current texture. |
| *...* | – | (Other inherited methods such as `set_value()`, `set_min()`, `set_max()`, etc.) |

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed` | Emitted when the bar’s value changes. |

---

## Usage Example (GDScript)

```gdscript
var progress_bar : TextureProgressBar = $TextureProgressBar
progress_bar.texture = preload("res://ui/bar.png")
progress_bar.value = 50   # 50% progress
```

---

## Related Classes

- [ProgressBar](class_progressbar.html)
- [TextureRect](class_texturerect.html)
- [Control](class_control.html)

--- 

**Note**: This page is part of the official Godot Engine class reference and contains detailed API documentation for the `TextureProgressBar` class.