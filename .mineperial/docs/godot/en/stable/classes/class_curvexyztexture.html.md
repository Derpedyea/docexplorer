**CurveXYZTexture – Godot Engine 4.x Documentation**  
*Class reference page (source: <https://docs.godotengine.org/en/stable/classes/class_curvexyztexture.html>)*  

---

## Overview

`CurveXYZTexture` is a special 1‑D texture that stores a 3‑D point for every pixel along its width.  
The three color channels (red, green, blue) represent the **x, y, z** coordinates of a point on three `Curve` resources.  
This texture can be used to drive shaders, particle systems or any other logic that requires a continuous mapping from a scalar value `t` to a 3‑D point.

### Inheritance hierarchy
```
Object
 └─ Resource
     └─ Texture
         └─ Texture2D
             └─ CurveXYZTexture
```

## Description

```
A 1‑D texture where the red, green, and blue color channels correspond to points on three curves.
```

- **t‑parameter** – The horizontal axis of the texture represents a value `t` in the range `[0, 1]`.  
- **Result** – Sampling the texture at a given `t` returns a `Vector3` whose components are derived from the three curves.  

The class is mainly useful for generating a look‑up table that maps a scalar to a 3‑D vector.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `curve_x` | `Curve` | `null` | The curve used to generate the **X** component. |
| `curve_y` | `Curve` | `null` | The curve used to generate the **Y** component. |
| `curve_z` | `Curve` | `null` | The curve used to generate the **Z** component. |
| `width` | `int` | `0` | Number of samples (pixels) along the texture’s width. A non‑zero value forces the texture to be regenerated when the curves change. |

> **Note:** Changing any of the curves or the `width` will automatically regenerate the texture.

## Methods

### `set_curve_x(curve: Curve) → void`
Sets the X‑coordinate curve.

### `get_curve_x() → Curve`
Returns the current X‑coordinate curve.

### `set_curve_y(curve: Curve) → void`
Sets the Y‑coordinate curve.

### `get_curve_y() → Curve`
Returns the current Y‑coordinate curve.

### `set_curve_z(curve: Curve) → void`
Sets the Z‑coordinate curve.

### `get_curve_z() → Curve`
Returns the current Z‑coordinate curve.

### `set_width(width: int) → void`
Defines how many samples the texture should contain. A width of `0` uses a default value.

### `get_width() → int`
Returns the current texture width.

### `get_texture() → Texture2D`
Returns the generated `Texture2D` object that can be used directly in a material or shader.

## Signals

This class does not emit signals.

## Example: Using `CurveXYZTexture` in a shader

```gdscript
# 1. Create the curves
var curve_x = Curve.new()
curve_x.add_point(0, 0)
curve_x.add_point(0.5, 1)
curve_x.add_point(1, 0)

var curve_y = Curve.new()
curve_y.add_point(0, 0)
curve_y.add_point(0.5, -1)
curve_y.add_point(1, 0)

var curve_z = Curve.new()
curve_z.add_point(0, 0)
curve_z.add_point(0.5, 0)
curve_z.add_point(1, 1)

# 2. Create the texture
var xyz_tex = CurveXYZTexture.new()
xyz_tex.width = 256
xyz_tex.curve_x = curve_x
xyz_tex.curve_y = curve_y
xyz_tex.curve_z = curve_z

# 3. Use it in a material
var mat = ShaderMaterial.new()
mat.shader = preload("res://my_shader.shader")
mat.set_shader_param("curve_tex", xyz_tex)

# 4. Sample in the shader
/* In your shader code */
uniform sampler1D curve_tex;
vec3 sample = texture(curve_tex, t).rgb;
```

## Further Reading

- [Texture2D](../classes/class_texture2d.html) – Base class for all 2‑D textures.  
- [Curve](../classes/class_curve.html) – The class used to define each coordinate curve.  

---

*This page is part of the stable Godot Engine class reference. For the latest version, see the [Godot 4.2 documentation](https://docs.godotengine.org/en/latest/classes/class_curvexyztexture.html).*

