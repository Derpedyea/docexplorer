**Note:** The original HTML contains the full Godot Engine class reference for `Gradient`.  
Below is a cleaned‑up Markdown version of that page.  

---  

# Gradient

> **Inherits:** `Resource`

A `Gradient` is a resource that describes a color transition by defining a set of colored points and how to interpolate between them.  
It is useful for creating gradients that can be sampled in code or applied to materials.

---

## Overview

A gradient is a collection of *points*; each point has a *position* (between 0 and 1) and a *color*.  
You can add, remove, and reorder points, and query the resulting color at any normalized position.  

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `offset` | `int` | The offset of the gradient in the editor (internal use). |
| `interpolate_mode` | `int` | Interpolation mode: linear or smooth. Use `Gradient.INTERPOLATE_MODE_LINEAR` or `Gradient.INTERPOLATE_MODE_SMOOTH`. |
| `points` | `Array` | Array of `GradientPoint` structures. |
| `smooth` | `bool` | Whether to use smooth interpolation between points (deprecated – use `interpolate_mode`). |

---

## Methods

### `add_point(position: float, color: Color) → int`

Adds a point to the gradient and returns its index.  
Points are sorted by position after insertion.

```gdscript
var idx = gradient.add_point(0.5, Color(1, 0, 0))
```

### `clear()`

Removes all points from the gradient.

### `get_color(position: float) → Color`

Returns the interpolated color at the given **normalized** position (`0.0`–`1.0`).

```gdscript
var c = gradient.get_color(0.25)
```

### `get_point_color(index: int) → Color`

Returns the color of the point at the specified index.

### `get_point_count() → int`

Returns the number of points in the gradient.

### `get_point_position(index: int) → float`

Returns the normalized position of the point at the specified index.

### `remove_point(index: int)`

Removes the point at the specified index.

### `set_point_color(index: int, color: Color)`

Changes the color of the point at the given index.

### `set_point_position(index: int, position: float)`

Changes the normalized position of the point at the given index.

### `set_interpolate_mode(mode: int)`

Sets the interpolation mode (`Gradient.INTERPOLATE_MODE_LINEAR` or `Gradient.INTERPOLATE_MODE_SMOOTH`).

### `get_interpolate_mode() → int`

Returns the current interpolation mode.

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted whenever the gradient changes (points added, removed, reordered, or colors updated). |

---

## Example

```gdscript
var gradient = Gradient.new()
gradient.add_point(0.0, Color(1, 0, 0))   # Red
gradient.add_point(1.0, Color(0, 0, 1))   # Blue

# Sample the middle
var middle = gradient.get_color(0.5)  # Returns a purple-ish color
```

---

## Related Classes

- **`GradientTexture1D`** – Texture that uses a `Gradient` to generate a 1‑D gradient.
- **`ColorRect`** – Can display a gradient via its `gradient` property.
- **`ShaderMaterial`** – Often uses gradients to drive color transitions in shaders.

--- 

> For a deeper dive into how gradients are used in shaders or materials, see the [Shader documentation](https://docs.godotengine.org/en/stable/tutorials/shaders/index.html).  

---