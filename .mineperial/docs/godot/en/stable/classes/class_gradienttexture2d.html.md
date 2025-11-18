# GradientTexture2D

**Inherits:** `Texture2D` → `Texture` → `Resource` → `RefCounted` → `Object`

A 2‑D texture that produces a pattern by sampling a `Gradient`.  
The gradient can be edited directly in the inspector, or from script, and the
texture automatically updates when the gradient changes.

> **Note:** In Godot 4 the texture is generated from the gradient
> on‑the‑fly, so its resolution is set by the `width` and `height` properties
> and can be changed at any time. The texture is also cache‑friendly: it
> only regenerates when one of its parameters changes.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gradient` | `Gradient` | – | The gradient that determines the color distribution across the texture. |
| `width` | `int` | `256` | Width of the generated texture in pixels. |
| `height` | `int` | `256` | Height of the generated texture in pixels. |
| `flags` | `int` | `0` | Texture flags (see `ImageTexture` flags for details). |
| `repeat` | `bool` | `false` | When `true`, the gradient repeats horizontally and vertically. |

> **Tip:**  
> To create a horizontal gradient, keep `height == 1`.  
> For a vertical gradient, keep `width == 1`.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_gradient` | `func set_gradient(grad: Gradient) -> void` | Assigns a new gradient to the texture. |
| `get_gradient` | `func get_gradient() -> Gradient` | Returns the current gradient. |
| `set_width` | `func set_width(w: int) -> void` | Sets the texture width. |
| `get_width` | `func get_width() -> int` | Returns the texture width. |
| `set_height` | `func set_height(h: int) -> void` | Sets the texture height. |
| `get_height` | `func get_height() -> int` | Returns the texture height. |
| `set_repeat` | `func set_repeat(p_repeat: bool) -> void` | Enables or disables tiling of the gradient. |
| `is_repeat` | `func is_repeat() -> bool` | Checks if tiling is enabled. |
| `set_flags` | `func set_flags(p_flags: int) -> void` | Sets texture flags. |
| `get_flags` | `func get_flags() -> int` | Returns current texture flags. |

> **Internal** (not part of the public API):  
> `func _get_image() -> Image` – used by the engine to build the texture.

---

## Usage Example

```gdscript
# Create a new gradient texture
var grad_tex := GradientTexture2D.new()

# Build a simple linear gradient
var grad := Gradient.new()
grad.add_point(0.0, Color(1, 0, 0, 1))  # Red at start
grad.add_point(1.0, Color(0, 0, 1, 1))  # Blue at end

grad_tex.gradient = grad
grad_tex.width = 512
grad_tex.height = 128
grad_tex.repeat = true

# Apply to a Sprite
$Sprite.texture = grad_tex
```

The sprite will display a horizontally repeating gradient that goes from red to blue.

---

## Where to Use It

* **UI** – background gradients for panels or buttons.  
* **Particles** – color ramp for a particle system.  
* **Procedural textures** – generate noise, color bands, etc.  
* **Shader uniforms** – pass a texture that encodes a color map.

---

## Related Classes

* **`GradientTexture1D`** – 1‑D texture that samples a gradient along a single axis.  
* **`Gradient`** – the resource that stores the color stops.  
* **`Texture2D`** – base class for all 2‑D textures.

---

## Version Notes

* Added in Godot 4.0.  
* The API is stable and has no backward‑compatibility concerns in the
  transition from Godot 3.x – use `GradientTexture2D` directly in new projects.  

---