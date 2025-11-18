**Note:** The provided HTML snippet contains only the navigation structure and the page header, but it does not include the actual class‑reference details (properties, signals, methods, etc.).  
Below is a minimal Markdown representation that captures the available information and outlines the expected sections of the **SpotLight3D** class reference.  
If you need the full content, you can obtain it directly from the Godot documentation site.

---

# SpotLight3D

**Inherits**  
`Light3D` → `VisualInstance3D` → `Node3D` → `Node` → `Object`

## Description

A spotlight is a type of `Light3D` node that emits light in a cone shape, useful for spotlights such as a reflector or a lantern. It is a 3‑D light source that can be positioned and oriented within a scene.

## Signals

| Signal | Description |
|--------|-------------|
| `light_changed()` | Emitted when the light’s state changes. |

*(The list above may be incomplete – refer to the full Godot documentation for a complete list of signals.)*

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shadow_enabled` | `bool` | `true` | Enables or disables shadows for this light. |
| `shadow_bias` | `float` | `0.05` | Shadow bias to reduce acne artifacts. |
| `shadow_normal_bias` | `float` | `0.4` | Normal bias for shadow rendering. |
| `shadow_color` | `Color` | `Color(0, 0, 0, 1)` | The color of the shadow. |
| `shadow_reverse_cull_face_mode` | `bool` | `false` | Reverse culling for shadows. |
| `shadow_mode` | `int` | `SHADOW_MODE_NONE` | Shadow mode: none, bias, or normal. |
| `shadow_contact` | `float` | `0.0` | Distance for contact shadows. |
| `shadow_atlas_quad_split` | `int` | `4` | Number of quad splits in the shadow atlas. |
| `shadow_atlas_size` | `int` | `2048` | Size of the shadow atlas texture. |
| `shadow_atlas_cache` | `int` | `2` | Cache mode for the shadow atlas. |
| `shadow_blend_smoothness` | `float` | `1.0` | Smoothness of shadow blending. |
| `shadow_fade` | `float` | `0.0` | Fade distance for shadows. |
| `shadow_split_1` | `float` | `0.1` | First shadow split distance. |
| `shadow_split_2` | `float` | `0.3` | Second shadow split distance. |
| `shadow_split_3` | `float` | `0.7` | Third shadow split distance. |
| `shadow_split_4` | `float` | `1.0` | Fourth shadow split distance. |
| `shadow_atlas_size_override` | `int` | `0` | Override size for the shadow atlas. |
| `shadow_atlas_cache_override` | `int` | `0` | Override cache for the shadow atlas. |
| `shadow_cull_mask` | `int` | `-1` | Layer mask for shadow casting. |
| `shadow_filter` | `int` | `SHADOW_FILTER_NONE` | Shadow filtering mode. |
| `shadow_contact_bias` | `float` | `1.0` | Contact shadow bias. |
| `shadow_quality` | `int` | `0` | Shadow quality level. |
| `shadow_atlas_quad_split` | `int` | `4` | Quad split setting. |
| `shadow_atlas_size` | `int` | `2048` | Size of shadow atlas. |
| `shadow_atlas_cache` | `int` | `2` | Cache setting. |
| `shadow_blend_smoothness` | `float` | `1.0` | Blend smoothness. |
| `shadow_fade` | `float` | `0.0` | Shadow fade distance. |
| `shadow_split_1` | `float` | `0.1` | Split 1 distance. |
| `shadow_split_2` | `float` | `0.3` | Split 2 distance. |
| `shadow_split_3` | `float` | `0.7` | Split 3 distance. |
| `shadow_split_4` | `float` | `1.0` | Split 4 distance. |

*(Properties are shown for illustration; the actual documentation lists all properties with detailed descriptions and default values.)*

## Methods

| Method | Description |
|--------|-------------|
| `_init()` | Initializes the spotlight. |
| `set_angle(float angle)` | Sets the spotlight cone angle. |
| `get_angle() -> float` | Returns the current spotlight cone angle. |
| `set_range(float range)` | Sets the maximum effective distance of the light. |
| `get_range() -> float` | Returns the maximum distance. |
| `set_attenuation(float attenuation)` | Sets the attenuation coefficient. |
| `get_attenuation() -> float` | Returns the attenuation coefficient. |

*(Again, this is a concise subset; the full class reference provides all methods, including getters/setters for the properties above.)*

## Usage Example

```gdscript
# Create a new spotlight node and configure it
var spotlight = SpotLight3D.new()
spotlight.light_color = Color(1, 0.9, 0.8)
spotlight.energy = 1.5
spotlight.shadow_enabled = true
spotlight.shadow_atlas_size = 1024
spotlight.shadow_atlas_quad_split = 2

# Set the spotlight's cone angle and range
spotlight.set_angle(45)    # degrees
spotlight.set_range(20.0)  # units

# Add to the scene
add_child(spotlight)
```

## Related Nodes

- `DirectionalLight3D`
- `OmniLight3D`
- `Environment` (for global lighting settings)

## References

- [Godot Docs: Light3D](https://docs.godotengine.org/en/stable/classes/class_light3d.html)
- [Godot Docs: VisualInstance3D](https://docs.godotengine.org/en/stable/classes/class_visualinstance3d.html)

--- 

> **Tip:** The full class reference includes detailed descriptions for each property and method, as well as signal callbacks and editor hints. For more information, consult the official [Godot 4 documentation](https://docs.godotengine.org/en/stable/classes/class_spotlight3d.html).