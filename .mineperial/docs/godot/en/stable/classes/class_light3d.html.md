**Light3D**  
*Godot Engine – Class Reference*

---

### Inheritance
```
VisualInstance3D
  ↳ Node3D
    ↳ Node
      ↳ Object
```

The `Light3D` class is the base for the various 3D light nodes:

- `DirectionalLight3D`
- `OmniLight3D`
- `SpotLight3D`

---

### Description
`Light3D` is an abstract node that provides the common interface and properties for all 3D light types in Godot. It handles basic lighting parameters such as color, energy, shadows, and light culling, and serves as the parent for the concrete light subclasses.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **color** | `Color` | `Color(1, 1, 1, 1)` | The base color of the light. |
| **energy** | `float` | `1.0` | Intensity multiplier of the light. |
| **light_projector** | `Texture` | `null` | (Spot and Omni lights only) A projector texture to shape the light. |
| **shadow_enabled** | `bool` | `false` | Whether this light casts shadows. |
| **shadow_bias** | `float` | `0.05` | Bias to avoid shadow acne. |
| **shadow_normal_bias** | `float` | `0.4` | Normal bias to reduce shadow artifacts. |
| **shadow_blur** | `float` | `1.0` | Amount of shadow blur. |
| **shadow_depth_range** | `float` | `1.0` | Depth range for shadow rendering. |
| **shadow_mode** | `enum` | `ShadowModeEnum::ShadowModeNone` | Shadow rendering mode. |
| **shadow_color** | `Color` | `Color(0, 0, 0, 1)` | Color used for the shadow. |
| **shadow_max_distance** | `float` | `1.0` | Maximum distance of shadows from the light. |
| **shadow_filter** | `int` | `0` | Filter mode for shadows. |
| **shadow_split_1/2/3** | `float` | `0.0` | Split distances for cascaded shadow maps. |
| **shadow_split_1_range/2_range/3_range** | `float` | `0.0` | Split ranges for cascaded shadow maps. |
| **shadow_split_1_shadow_atlas_scale/2/3** | `int` | `1` | Atlas scale for cascaded splits. |
| **shadow_split_1_bias/2_bias/3_bias** | `float` | `0.05` | Bias for cascaded splits. |
| **shadow_split_1_normal_bias/2_normal_bias/3_normal_bias** | `float` | `0.4` | Normal bias for cascaded splits. |
| **shadow_split_1_shadow_atlas_size/2/3** | `int` | `0` | Shadow atlas size for cascaded splits. |
| **shadow_split_1_use_custom_cull_mask/2/3** | `bool` | `false` | Custom cull mask usage for cascaded splits. |
| **shadow_cull_mask** | `int` | `0xffffffff` | Bitmask for which objects cast shadows. |
| **shadow_atlas_size** | `int` | `4096` | Size of the shadow atlas. |
| **shadow_atlas_quadrants** | `int` | `1` | Number of atlas quadrants. |
| **shadow_atlas_2d_range** | `float` | `1.0` | 2D range for the shadow atlas. |
| **shadow_atlas_2d_size** | `int` | `1024` | 2D size for the shadow atlas. |
| **shadow_atlas_2d_offset** | `float` | `0.0` | 2D offset for the shadow atlas. |
| **shadow_atlas_2d_max_distance** | `float` | `1.0` | 2D maximum distance for the shadow atlas. |
| **shadow_atlas_2d_filter** | `int` | `0` | 2D filter mode for the shadow atlas. |
| **shadow_atlas_2d_bias** | `float` | `0.05` | 2D bias for the shadow atlas. |
| **shadow_atlas_2d_normal_bias** | `float` | `0.4` | 2D normal bias for the shadow atlas. |
| **shadow_atlas_2d_depth_range** | `float` | `1.0` | 2D depth range for the shadow atlas. |
| **shadow_atlas_2d_max_shadow_atlas_scale** | `int` | `1` | 2D max scale for the shadow atlas. |
| **shadow_atlas_2d_cull_mask** | `int` | `0xffffffff` | 2D cull mask for the shadow atlas. |
| **shadow_atlas_2d_use_custom_cull_mask** | `bool` | `false` | Whether the 2D cull mask is custom. |
| **shadow_atlas_2d_max_distance** | `float` | `1.0` | 2D max distance for the shadow atlas. |
| **shadow_atlas_2d_shadow_atlas_scale** | `int` | `1` | 2D shadow atlas scale. |
| **shadow_atlas_2d_shadow_atlas_size** | `int` | `4096` | 2D shadow atlas size. |
| **shadow_atlas_2d_cull_mask** | `int` | `0xffffffff` | 2D cull mask for shadows. |
| **shadow_atlas_2d_use_custom_cull_mask** | `bool` | `false` | Custom 2D cull mask. |
| **shadow_atlas_2d_shadow_atlas_scale** | `int` | `1` | 2D atlas scale. |
| **shadow_atlas_2d_shadow_atlas_size** | `int` | `4096` | 2D atlas size. |
| **shadow_atlas_2d_cull_mask** | `int` | `0xffffffff` | 2D cull mask. |
| **shadow_atlas_2d_use_custom_cull_mask** | `bool` | `false` | Use custom mask. |
| **shadow_atlas_2d_shadow_atlas_scale** | `int` | `1` | 2D atlas scale. |
| **shadow_atlas_2d_shadow_atlas_size** | `int` | `4096` | 2D atlas size. |

*(Note: Only the most frequently used properties are listed here; the full list is available in the Godot documentation.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `_init()` | `void` | Called when the node is created. |
| `get_baked_lightmap()` | `Array` | Returns baked lightmap data. |
| `set_baked_lightmap()` | `void` | Assigns baked lightmap data. |
| `get_shadow_range()` | `float` | Returns shadow range. |
| `set_shadow_range()` | `void` | Sets shadow range. |
| `get_shadow_bias()` | `float` | Returns shadow bias. |
| `set_shadow_bias()` | `void` | Sets shadow bias. |
| `get_shadow_normal_bias()` | `float` | Returns normal bias. |
| `set_shadow_normal_bias()` | `void` | Sets normal bias. |
| `get_shadow_blur()` | `float` | Returns shadow blur. |
| `set_shadow_blur()` | `void` | Sets shadow blur. |
| `get_shadow_max_distance()` | `float` | Returns maximum shadow distance. |
| `set_shadow_max_distance()` | `void` | Sets maximum shadow distance. |
| `get_shadow_filter()` | `int` | Returns the shadow filter type. |
| `set_shadow_filter()` | `void` | Sets the shadow filter type. |
| `get_shadow_mode()` | `int` | Returns the shadow mode. |
| `set_shadow_mode()` | `void` | Sets the shadow mode. |
| `is_shadow_enabled()` | `bool` | Checks if shadow is enabled. |
| `set_shadow_enabled()` | `void` | Enables or disables shadows. |
| `set_light_projector()` | `void` | Assigns a projector texture. |
| `get_light_projector()` | `Texture` | Retrieves the projector texture. |

*(Full method list is available in the Godot class reference.)*

---

## Signals

- `light_changed` – Emitted when light parameters change.

---

## Usage Example

```gdscript
# Create a directional light
var light = DirectionalLight3D.new()
light.light_color = Color(1, 0.95, 0.8)
light.energy = 2.0
light.shadow_enabled = true
add_child(light)
```

---

> **Tip**  
> Use `Light3D` as a base class if you want to create a custom light node that inherits common functionality from the built‑in light types.

---