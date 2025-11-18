**CanvasItemMaterial**  
=======================

> **Inherited from**: `Material`  
> **Category**: Rendering → 2D → Materials  
> **Godot version**: Stable (current)

---

### Overview
`CanvasItemMaterial` is a resource that can be applied to any `CanvasItem` (e.g. `Sprite`, `TextureRect`, `Control`, etc.) to alter how its texture is displayed.  
It allows you to:

* Replace the original texture with a custom one.  
* Apply filtering, wrapping and mip‑mapping options.  
* Use a shader for advanced visual effects.

The material is *lightweight* – it does not create a new shader; it simply provides a small set of parameters that the engine can use to modify the appearance of the `CanvasItem`.

---

## Inheritance Diagram

```
Resource
 └── RefCounted
      └── Object
           └── Material
                └── CanvasItemMaterial
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture2D` | `null` | The texture to be used by this material. If `null`, the item’s original texture is used. |
| `texture_filter` | `int` | `CanvasItemMaterial.TEXTURE_FILTER_DEFAULT` | Controls how the texture is filtered (`FILTER_NEAREST`, `FILTER_LINEAR`, etc.). |
| `texture_repeat` | `bool` | `false` | Whether the texture repeats when it extends beyond the item’s bounds. |
| `texture_wrap` | `int` | `CanvasItemMaterial.WRAP_MODE_CLAMP_TO_EDGE` | The wrapping mode (`CLAMP_TO_EDGE`, `REPEAT`, etc.). |
| `shader` | `Shader` | `null` | A custom shader that replaces the built‑in material shader. |
| `shader_params` | `Dictionary` | `{}` | Uniforms for the shader; keys are uniform names, values are the corresponding values. |

> **Note**: The enum values (e.g. `TEXTURE_FILTER_LINEAR`) are defined on the class itself and can be accessed with `CanvasItemMaterial.TEXTURE_FILTER_LINEAR`.

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_texture(texture: Texture2D) -> void` | `void set_texture(Texture2D texture)` | Assigns a texture to the material. |
| `get_texture() -> Texture2D` | `Texture2D get_texture()` | Returns the current texture. |
| `set_shader(shader: Shader) -> void` | `void set_shader(Shader shader)` | Attaches a custom shader. |
| `get_shader() -> Shader` | `Shader get_shader()` | Returns the attached shader. |
| `set_shader_parameter(name: String, value: Variant) -> void` | `void set_shader_parameter(String name, Variant value)` | Sets a single uniform value. |
| `get_shader_parameter(name: String) -> Variant` | `Variant get_shader_parameter(String name)` | Retrieves the current value of a uniform. |
| `set_texture_filter(mode: int) -> void` | `void set_texture_filter(int mode)` | Sets the texture filtering mode. |
| `get_texture_filter() -> int` | `int get_texture_filter()` | Returns the current texture filtering mode. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `texture_changed()` | Emitted when the `texture` property changes. |
| `shader_changed()` | Emitted when a new shader is set. |

---

## Usage Example

```gdscript
# Create a CanvasItemMaterial
var mat = CanvasItemMaterial.new()
mat.texture = preload("res://sprites/brick.png")
mat.texture_filter = CanvasItemMaterial.TEXTURE_FILTER_LINEAR
mat.texture_repeat = true

# Apply to a Sprite
var sprite = Sprite2D.new()
sprite.texture = preload("res://sprites/brick.png")
sprite.material = mat
```

If you want to add a custom shader:

```gdscript
var shader = Shader.new()
shader.code = "shader_type canvas_item;\nvoid fragment(){COLOR = vec4(1.0, 0.0, 0.0, 1.0);}"
mat.shader = shader
```

---

## See Also

* [`Material`](https://docs.godotengine.org/en/stable/classes/class_material.html)
* [`CanvasItem`](https://docs.godotengine.org/en/stable/classes/class_canvasitem.html)
* [`Shader`](https://docs.godotengine.org/en/stable/classes/class_shader.html)

---