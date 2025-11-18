**Light2D** – Godot Engine 4.x Class Reference
==============================================

> *Casts light in a 2‑D environment.*

---

### Class Hierarchy
```
Object
└─ Node
   └─ CanvasItem
      └─ Node2D
         └─ Light2D
```

**Inherited By**

* `DirectionalLight2D`
* `PointLight2D`

---

### Description
The `Light2D` node is the base class for 2‑D lighting.  It emits light that can be used by other 2‑D nodes such as `LightOccluder2D`.  The light’s appearance is defined by a `Texture` or a `Color`, and can be customized with various properties such as attenuation, shadows, and mode.

---

## Signals
| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the light’s parameters are modified. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | If `false`, the light is ignored by the rendering engine. |
| `texture` | `Texture2D` | `null` | The texture to use for the light. |
| `color` | `Color` | `Color(1,1,1)` | The tint applied to the light. |
| `energy` | `float` | `1.0` | Brightness multiplier. |
| `mode` | `Light2D.Mode` | `Light2D.MODE_ADD` | Determines how the light blends with the scene. |
| `shadow_enabled` | `bool` | `false` | Whether shadows are cast by this light. |
| `shadow_buffer_size` | `int` | `256` | Size of the shadow buffer in pixels. |
| `shadow_filter` | `Light2D.ShadowFilter` | `Light2D.SHADOW_FILTER_NONE` | Shadow filtering method. |
| `shadow_color` | `Color` | `Color(0,0,0)` | Color used for shadows. |
| `shadow_bias` | `float` | `0.01` | Shadow bias to reduce artifacts. |
| `shadow_normal_bias` | `float` | `0.0` | Normal bias for shadow edges. |
| `shadow_atlas_scale` | `int` | `1` | Scaling factor for the shadow atlas. |
| `light_mask` | `int` | `1` | Collision mask used to select which layers the light will illuminate. |
| `shadow_atlas` | `int` | `1` | Shadow atlas index. |
| `shadow_mode` | `Light2D.ShadowMode` | `Light2D.SHADOW_MODE_STATIC` | Mode for dynamic/static shadows. |
| `shadow_range` | `float` | `1.0` | Shadow rendering range. |
| `shadow_buffer_scale` | `float` | `1.0` | Scale of the shadow buffer. |
| `shadow_depth_range` | `float` | `1.0` | Depth range for dynamic shadows. |
| `shadow_smoothing` | `float` | `1.0` | Shadow smoothing factor. |

*(Additional properties such as `z_index`, `z_as_relative`, `offset`, etc., are inherited from `CanvasItem`.)*

---

## Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `set_texture(texture: Texture2D)` | `void` | `texture` | Assigns a texture to the light. |
| `get_texture() → Texture2D` | `Texture2D` | | Retrieves the current texture. |
| `set_color(color: Color)` | `void` | `color` | Sets the light color. |
| `get_color() → Color` | `Color` | | Returns the current light color. |
| `set_energy(energy: float)` | `void` | `energy` | Adjusts the light intensity. |
| `get_energy() → float` | `float` | | Returns the current energy value. |
| `set_mode(mode: Light2D.Mode)` | `void` | `mode` | Sets the blending mode. |
| `get_mode() → Light2D.Mode` | `Light2D.Mode` | | Retrieves the blending mode. |
| `set_shadow_enabled(enabled: bool)` | `void` | `enabled` | Enables or disables shadows. |
| `is_shadow_enabled() → bool` | `bool` | | Returns whether shadows are enabled. |
| `set_shadow_filter(filter: Light2D.ShadowFilter)` | `void` | `filter` | Sets the shadow filter type. |
| `get_shadow_filter() → Light2D.ShadowFilter` | `Light2D.ShadowFilter` | | Retrieves the current filter. |
| `set_shadow_color(color: Color)` | `void` | `color` | Sets shadow color. |
| `get_shadow_color() → Color` | `Color` | | Returns shadow color. |
| `set_light_mask(mask: int)` | `void` | `mask` | Sets the light mask. |
| `get_light_mask() → int` | `int` | | Retrieves the light mask. |
| `set_shadow_atlas(index: int)` | `void` | `index` | Sets which shadow atlas to use. |
| `get_shadow_atlas() → int` | `int` | | Returns the atlas index. |
| `set_shadow_mode(mode: Light2D.ShadowMode)` | `void` | `mode` | Sets dynamic/static shadow mode. |
| `get_shadow_mode() → Light2D.ShadowMode` | `Light2D.ShadowMode` | | Returns the shadow mode. |
| `set_shadow_range(range: float)` | `void` | `range` | Sets the shadow rendering range. |
| `get_shadow_range() → float` | `float` | | Returns shadow range. |
| `set_shadow_buffer_size(size: int)` | `void` | `size` | Sets shadow buffer resolution. |
| `get_shadow_buffer_size() → int` | `int` | | Returns buffer size. |
| `set_shadow_buffer_scale(scale: float)` | `void` | `scale` | Sets the shadow buffer scale. |
| `get_shadow_buffer_scale() → float` | `float` | | Returns buffer scale. |
| `set_shadow_normal_bias(bias: float)` | `void` | `bias` | Sets normal bias for shadows. |
| `get_shadow_normal_bias() → float` | `float` | | Returns normal bias. |
| `set_shadow_depth_range(range: float)` | `void` | `range` | Sets dynamic shadow depth range. |
| `get_shadow_depth_range() → float` | `float` | | Returns depth range. |
| `set_shadow_smoothing(smoothing: float)` | `void` | `smoothing` | Sets shadow smoothing factor. |
| `get_shadow_smoothing() → float` | `float` | | Returns smoothing. |
| `set_as_light_mask(mask: int)` | `void` | `mask` | Legacy alias for `set_light_mask()`. |
| `get_as_light_mask() → int` | `int` | | Legacy alias for `get_light_mask()`. |

*(More methods are available via inheritance from `CanvasItem` and `Node2D`.)*

---

## Enums

| Enum | Values | Description |
|------|--------|-------------|
| `Mode` | `MODE_ADD`, `MODE_SUB`, `MODE_MIX`, `MODE_INVERT` | Determines how the light blends with the underlying scene. |
| `ShadowFilter` | `SHADOW_FILTER_NONE`, `SHADOW_FILTER_PCF8`, `SHADOW_FILTER_PCF16` | Shadow filtering techniques. |
| `ShadowMode` | `SHADOW_MODE_STATIC`, `SHADOW_MODE_DYNAMIC` | Controls whether the light’s shadows are cached or recalculated each frame. |

---

### Example Usage

```gdscript
var light = Light2D.new()
light.texture = preload("res://light.png")
light.color = Color(1, 0.9, 0.7, 1)
light.energy = 2.0
light.shadow_enabled = true
light.shadow_filter = Light2D.SHADOW_FILTER_PCF8
add_child(light)
```

This script creates a new `Light2D`, sets a texture and color, doubles its intensity, enables a filtered shadow, and adds it to the current scene.

---

### Related Nodes

* **DirectionalLight2D** – Emits light in a single direction.
* **PointLight2D** – Emits light uniformly from a point.
* **LightOccluder2D** – Defines objects that block light emitted by `Light2D`.

---

**Note:** For full API details, including all inherited methods and properties, see the official Godot Engine documentation or the class reference in the editor.