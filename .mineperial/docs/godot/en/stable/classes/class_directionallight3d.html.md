# DirectionalLight3D

**Inherited from:**  
`Light3D` → `VisualInstance3D` → `Node3D` → `Node` → `Object`

---

## Description
A directional light is a type of `Light3D` node that models an infinitely distant light source, like the Sun. The light’s direction, color, energy, and shadow settings are configurable. It emits parallel light rays and does not cast positional shadows – only directional ones.

---

## Signals
| Signal | Description |
|--------|-------------|
| `light_changed()` | Emitted when the light’s properties (color, energy, etc.) are modified. |

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shadow` | `bool` | `true` | Enables or disables the generation of shadows for this light. |
| `shadow_bias` | `float` | `0.05` | Bias applied to shadow calculations to reduce shadow acne. |
| `shadow_normal_bias` | `float` | `1.0` | Normal bias for directional shadows. |
| `shadow_color` | `Color` | `Color(1, 1, 1, 1)` | The color of the shadow. |
| `shadow_atlas_size` | `int` | `1024` | Size of the shadow atlas texture. |
| `shadow_atlas_quadrant_subdiv` | `int` | `1` | Subdivision of the atlas for directional shadow mapping. |
| `shadow_depth_range` | `float` | `200.0` | Depth range for shadows. |
| `shadow_normal_bias` | `float` | `1.0` | Bias applied to the normals when rendering shadows. |
| `shadow_smoothness` | `float` | `1.0` | Smoothness of shadows. |
| `shadow_map_size` | `int` | `1024` | Size of each shadow map. |
| `shadow_blur` | `float` | `0.0` | Blur applied to shadows. |
| `shadow_split_margin` | `float` | `0.5` | Margin for shadow splitting. |
| `shadow_split_1` | `float` | `0.5` | Distance of the first split. |
| `shadow_split_2` | `float` | `0.7` | Distance of the second split. |
| `shadow_split_3` | `float` | `0.85` | Distance of the third split. |
| `shadow_cascade_blending_mode` | `int` | `0` | Blend mode between cascades. |
| `shadow_cascade_split_1` | `float` | `0.5` | Distance of the first cascade split. |
| `shadow_cascade_split_2` | `float` | `0.7` | Distance of the second cascade split. |
| `shadow_cascade_split_3` | `float` | `0.85` | Distance of the third cascade split. |
| `shadow_cascade_split_4` | `float` | `0.95` | Distance of the fourth cascade split. |
| `shadow_cascade_blend` | `float` | `0.2` | Blend factor for cascade transitions. |
| `shadow_cascade_1` | `bool` | `true` | Enable first cascade. |
| `shadow_cascade_2` | `bool` | `true` | Enable second cascade. |
| `shadow_cascade_3` | `bool` | `true` | Enable third cascade. |
| `shadow_cascade_4` | `bool` | `true` | Enable fourth cascade. |

*(Full list of properties can be found in the official Godot Engine documentation.)*

---

## Methods
| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_light()` | `Variant` | `()` | Returns the current light resource. |
| `set_light(resource)` | `void` | `resource : Variant` | Assigns a light resource to the node. |
| `get_shadow()` | `bool` | `()` | Returns whether shadows are enabled. |
| `set_shadow(enabled)` | `void` | `enabled : bool` | Enables or disables shadows. |
| `get_shadow_bias()` | `float` | `()` | Returns current shadow bias. |
| `set_shadow_bias(bias)` | `void` | `bias : float` | Sets the shadow bias value. |
| `get_shadow_normal_bias()` | `float` | `()` | Returns the normal bias for shadows. |
| `set_shadow_normal_bias(normal_bias)` | `void` | `normal_bias : float` | Sets the normal bias for shadows. |
| `get_shadow_color()` | `Color` | `()` | Returns the current shadow color. |
| `set_shadow_color(color)` | `void` | `color : Color` | Sets the shadow color. |
| `get_shadow_atlas_size()` | `int` | `()` | Returns the size of the shadow atlas. |
| `set_shadow_atlas_size(size)` | `void` | `size : int` | Sets the shadow atlas size. |
| `get_shadow_atlas_quadrant_subdiv()` | `int` | `()` | Returns the quadrant subdivision value. |
| `set_shadow_atlas_quadrant_subdiv(subdiv)` | `void` | `subdiv : int` | Sets the atlas quadrant subdivision. |
| `get_shadow_depth_range()` | `float` | `()` | Returns the depth range used for shadows. |
| `set_shadow_depth_range(range)` | `void` | `range : float` | Sets the depth range for shadows. |
| `get_shadow_blur()` | `float` | `()` | Returns the current blur value for shadows. |
| `set_shadow_blur(blur)` | `void` | `blur : float` | Sets the shadow blur amount. |
| `get_shadow_cascade_split_1()` | `float` | `()` | Returns the split distance for cascade 1. |
| `set_shadow_cascade_split_1(split)` | `void` | `split : float` | Sets the split distance for cascade 1. |
| `get_shadow_cascade_split_2()` | `float` | `()` | Returns the split distance for cascade 2. |
| `set_shadow_cascade_split_2(split)` | `void` | `split : float` | Sets the split distance for cascade 2. |
| `get_shadow_cascade_split_3()` | `float` | `()` | Returns the split distance for cascade 3. |
| `set_shadow_cascade_split_3(split)` | `void` | `split : float` | Sets the split distance for cascade 3. |
| `get_shadow_cascade_split_4()` | `float` | `()` | Returns the split distance for cascade 4. |
| `set_shadow_cascade_split_4(split)` | `void` | `split : float` | Sets the split distance for cascade 4. |
| `get_shadow_cascade_blend()` | `float` | `()` | Returns the blend factor between cascades. |
| `set_shadow_cascade_blend(blend)` | `void` | `blend : float` | Sets the cascade blend factor. |
| `get_shadow_cascade_1()` | `bool` | `()` | Returns whether cascade 1 is enabled. |
| `set_shadow_cascade_1(enabled)` | `void` | `enabled : bool` | Enables or disables cascade 1. |
| `get_shadow_cascade_2()` | `bool` | `()` | Returns whether cascade 2 is enabled. |
| `set_shadow_cascade_2(enabled)` | `void` | `enabled : bool` | Enables or disables cascade 2. |
| `get_shadow_cascade_3()` | `bool` | `()` | Returns whether cascade 3 is enabled. |
| `set_shadow_cascade_3(enabled)` | `void` | `enabled : bool` | Enables or disables cascade 3. |
| `get_shadow_cascade_4()` | `bool` | `()` | Returns whether cascade 4 is enabled. |
| `set_shadow_cascade_4(enabled)` | `void` | `enabled : bool` | Enables or disables cascade 4. |

*(A full list of all available methods is available in the official API reference.)*

---

## Example Usage

```gdscript
# Create a directional light in code
var light = DirectionalLight3D.new()
light.light_energy = 1.5
light.shadow = true
light.shadow_bias = 0.05
light.shadow_cascade_split_1 = 0.7
light.shadow_cascade_split_2 = 0.9
light.shadow_cascade_split_3 = 0.95

# Add to the scene
add_child(light)
```

---

## See Also
- [Light3D](https://docs.godotengine.org/en/stable/classes/class_light3d.html)  
- [DirectionalLight2D](https://docs.godotengine.org/en/stable/classes/class_directionallight2d.html)  

---