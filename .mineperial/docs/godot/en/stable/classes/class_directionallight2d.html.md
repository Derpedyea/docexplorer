# DirectionalLight2D

**Inherits:** `Light2D < Node2D < CanvasItem < Node < Object`  

A **DirectionalLight2D** is a type of `Light2D` node that models an infinite number of light sources, as if a light were coming from a distant direction. It is commonly used to simulate sunlight or other distant light sources in a 2D scene.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture2D` | `null` | The texture used by the light. |
| `energy` | `float` | `1.0` | The intensity of the light. |
| `color` | `Color` | `Color(1,1,1)` | The color tint of the light. |
| `shadow_enabled` | `bool` | `false` | Enables or disables shadows for this light. |
| `shadow_buffer_size` | `int` | `256` | Size of the shadow buffer. |
| `shadow_color` | `Color` | `Color(0,0,0)` | Color of the shadow. |
| `shadow_offset` | `Vector2` | `Vector2(0,0)` | Offset of the shadow. |
| `shadow_ignore_texture` | `bool` | `false` | Ignores texture when rendering shadows. |
| `shadow_filter` | `int` | `0` | Filter mode for shadows (e.g., `ShadowFilter.NONE`, `ShadowFilter.PCF5`, etc.). |
| `light_direction` | `Vector2` | `Vector2(0,-1)` | Direction from which the light originates. |
| `light_energy` | `float` | `1.0` | Light energy factor (may duplicate `energy`). |

> **Note:** Some properties might have aliases or additional parameters in newer Godot releases.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `light_changed` | `()`: None | Emitted when the light's parameters change. |
| `shadow_changed` | `()`: None | Emitted when shadow-related settings change. |

---

## Methods

> All methods are inherited from `Light2D` unless overridden.

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_light_direction()` | `Vector2` | `()` | Returns the current light direction. |
| `set_light_direction(direction : Vector2)` | `void` | `direction : Vector2` | Sets the light direction. |
| `get_shadow_filter()` | `int` | `()` | Returns the shadow filter type. |
| `set_shadow_filter(filter : int)` | `void` | `filter : int` | Sets the shadow filter type. |
| `get_shadow_color()` | `Color` | `()` | Returns the shadow color. |
| `set_shadow_color(color : Color)` | `void` | `color : Color` | Sets the shadow color. |
| `get_shadow_offset()` | `Vector2` | `()` | Returns the shadow offset. |
| `set_shadow_offset(offset : Vector2)` | `void` | `offset : Vector2` | Sets the shadow offset. |

---

## Usage

```gdscript
# Example: Creating a DirectionalLight2D in GDScript
var dir_light = DirectionalLight2D.new()
dir_light.texture = preload("res://light_texture.png")
dir_light.energy = 2.0
dir_light.color = Color(1, 0.95, 0.8)
dir_light.shadow_enabled = true
dir_light.shadow_filter = DirectionalLight2D.SHADOW_FILTER_PCF5
add_child(dir_light)
```

---

## Related Nodes

- [Light2D](https://docs.godotengine.org/en/stable/classes/class_light2d.html)
- [DirectionalLight3D](https://docs.godotengine.org/en/stable/classes/class_directionallight3d.html)

---