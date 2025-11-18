# CurveTexture

> **Godot Engine – Class reference (stable)**  
> **Inheritance hierarchy**:  
> `Texture2D` → `Texture` → `Resource` → `RefCounted` → `Object`

---

## Description

A 1D texture where pixel brightness corresponds to points on a curve.  
This texture can be used to create procedural gradients or to feed custom shaders that need a one‑dimensional lookup table.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `curve` | :class:`Curve` | `null` | The curve that drives the texture. |
| `width` | :class:`int` | `128` | Width (in pixels) of the generated texture. |
| `height` | :class:`int` | `1` | Height of the texture (always 1 for a 1‑D texture). |
| `repeat` | :class:`bool` | `false` | If `true`, the texture repeats when sampled outside `[0, 1]`. |
| `filter` | :class:`bool` | `true` | If `true`, bilinear filtering is applied. |
| `flags` | :class:`int` | `0` | Texture flags (e.g., mipmaps, generate_mipmaps, etc.). |

---

## Methods

| Method | Returns | Arguments | Description |
|--------|---------|-----------|-------------|
| `set_curve(curve: Curve)` | `void` | `curve` | Assigns a curve to the texture. |
| `get_curve() -> Curve` | `Curve` | | Returns the current curve. |
| `set_width(width: int)` | `void` | `width` | Sets the width of the generated texture. |
| `get_width() -> int` | `int` | | Returns the width. |
| `set_repeat(repeat: bool)` | `void` | `repeat` | Enables or disables repeating. |
| `is_repeat() -> bool` | `bool` | | Returns whether repeating is enabled. |
| `set_filter(filter: bool)` | `void` | `filter` | Enables or disables bilinear filtering. |
| `is_filter() -> bool` | `bool` | | Returns filter status. |
| `set_flags(flags: int)` | `void` | `flags` | Sets internal texture flags. |
| `get_flags() -> int` | `int` | | Retrieves the flags. |

> *All setters automatically regenerate the texture based on the current curve.*

---

## Signals

None.

---

## Notes

* The texture updates automatically when any of its properties change.  
* Because it is a one‑dimensional texture, only the `width` can be altered; the height is fixed at 1.  
* The texture can be used in shaders via the `texture()` function with a single UV coordinate (`UV.x`).

--- 

**See also**  
- :class:`CurveXYZTexture` – a 3‑D version of the same concept.  
- :class:`Curve3D` – the curve resource used to define the shape.  

---