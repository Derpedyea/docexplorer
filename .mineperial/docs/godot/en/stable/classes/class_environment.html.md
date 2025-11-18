**Environment – Godot Engine (class reference)**  

> *Resource for environment nodes (like `WorldEnvironment`) that define multiple rendering options.*

---

## Inheritance
`Environment`  ⇢  `Resource`  ⇢  `RefCounted`  ⇢  `Object`

---

## Description
The `Environment` class stores a collection of rendering settings that are applied to a `WorldEnvironment` node. It lets you configure how the background is rendered, global illumination, fog, glow, and more. All changes made to an `Environment` instance affect every viewport that uses it unless overridden by a viewport-specific configuration.

---

## Properties

| Property | Type | Default | Notes |
|----------|------|---------|-------|
| `background_mode` | `Environment::BackgroundMode` | `BACKGROUND_MODE_DISABLED` | Determines what is shown behind the 3D scene. |
| `background_sky` | `Sky` | `null` | The `Sky` resource to use when `background_mode` is `SKY`. |
| `background_sky_custom_fov` | `float` | `0.0` | Custom field‑of‑view for the sky. |
| `background_sky_rotation` | `float` | `0.0` | Rotation of the sky in radians. |
| `background_color` | `Color` | `Color(0, 0, 0, 1)` | Color used when `background_mode` is `COLOR`. |
| `ambient_light_color` | `Color` | `Color(1, 1, 1, 1)` | Color of the ambient light. |
| `ambient_light_energy` | `float` | `1.0` | Strength of the ambient light. |
| `ambient_light_sky` | `bool` | `false` | If `true`, the sky contributes to ambient lighting. |
| `ambient_light_sky_scale` | `float` | `1.0` | Scale of the sky's contribution. |
| `fog_enabled` | `bool` | `false` | Enables linear depth fog. |
| `fog_color` | `Color` | `Color(0, 0, 0, 1)` | Color of the fog. |
| `fog_depth_begin` | `float` | `0.0` | Distance at which fog starts. |
| `fog_depth_end` | `float` | `1000.0` | Distance at which fog is fully opaque. |
| `fog_density` | `float` | `0.5` | Density of exponential fog. |
| `glow_enabled` | `bool` | `false` | Enables screen‑space glow. |
| `glow_strength` | `float` | `1.0` | Base strength of the glow effect. |
| `glow_hdr_scale` | `float` | `1.0` | Scale factor for HDR glow. |
| `glow_quality` | `int` | `0` | 0 = Low, 1 = Medium, 2 = High, 3 = Ultra. |
| `ssr_enabled` | `bool` | `false` | Enables screen‑space reflections. |
| `ssr_max_steps` | `int` | `32` | Number of steps for SSR. |
| `ssr_fadeout_distance` | `float` | `64.0` | Distance at which SSR fades out. |
| `ssr_fadeout_falloff` | `float` | `0.2` | Fall‑off exponent for SSR. |
| `ssr_max_thickness` | `float` | `2.0` | Max thickness for reflection depth. |
| `ssr_depth_tolerance` | `float` | `1.0` | Tolerance for depth differences. |
| `ssr_normal_tolerance` | `float` | `1.0` | Tolerance for normal differences. |
| `ssr_roughness_tolerance` | `float` | `0.0` | Tolerance for roughness differences. |
| `tonemap` | `Environment::Tonemap` | `TONEMAP_LINEAR` | Global tone‑mapping algorithm. |
| `tonemap_exposure` | `float` | `1.0` | Exposure value for tone‑mapping. |
| `tonemap_white` | `float` | `1.0` | White‑point for tone‑mapping. |
| `sss_enabled` | `bool` | `false` | Enables subsurface scattering. |
| `sss_radius` | `float` | `1.0` | Radius for SSS. |
| `sss_color` | `Color` | `Color(1, 1, 1, 1)` | Color of subsurface scattering. |
| `sss_depth` | `float` | `0.1` | Depth of subsurface scattering. |
| `depth_of_field_enabled` | `bool` | `false` | Enables depth‑of‑field. |
| `depth_of_field_blur_amount` | `float` | `4.0` | Amount of blur. |
| `depth_of_field_distance` | `float` | `0.0` | Focus distance. |
| `depth_of_field_fstop` | `float` | `8.0` | F‑stop value for DoF. |
| `depth_of_field_focus_mode` | `Environment::DepthOfFieldFocusMode` | `FOCUS_DISTANCE` | Focus mode for DoF. |
| `reflection_probe_enabled` | `bool` | `false` | Enables reflection probes. |
| `reflection_probe_cubemap_size` | `int` | `256` | Cubemap resolution for probes. |
| `reflection_probe_bias` | `float` | `0.05` | Bias to avoid artifacts. |
| `reflection_probe_distance` | `float` | `200.0` | Probe radius. |
| `reflection_probe_use_interior` | `bool` | `false` | Use interior textures. |
| `reflection_probe_use_pca` | `bool` | `false` | Uses PCA compression. |
| `reflection_probe_ambient` | `Color` | `Color(0, 0, 0, 1)` | Ambient color from the probe. |

> *The table above lists the most commonly used properties. See the official Godot documentation for the complete list and default values.*

---

## Methods

| Method | Return type | Description |
|--------|-------------|-------------|
| `set_background_mode(mode)` | `void` | Set the background mode. |
| `get_background_mode()` | `Environment::BackgroundMode` | Get the current background mode. |
| `set_background_sky(sky)` | `void` | Assign a `Sky` resource. |
| `get_background_sky()` | `Sky` | Retrieve the current sky resource. |
| `set_background_color(color)` | `void` | Set the background color. |
| `get_background_color()` | `Color` | Get the background color. |
| `set_ambient_light_color(color)` | `void` | Set the ambient light color. |
| `get_ambient_light_color()` | `Color` | Get the ambient light color. |
| `set_ambient_light_energy(value)` | `void` | Set the ambient light strength. |
| `get_ambient_light_energy()` | `float` | Get the ambient light strength. |
| `set_fog_enabled(enabled)` | `void` | Enable or disable fog. |
| `is_fog_enabled()` | `bool` | Check if fog is enabled. |
| `set_fog_color(color)` | `void` | Set the fog color. |
| `get_fog_color()` | `Color` | Get the fog color. |
| `set_glow_enabled(enabled)` | `void` | Toggle glow. |
| `is_glow_enabled()` | `bool` | Check glow status. |
| `set_glow_strength(strength)` | `void` | Set glow strength. |
| `get_glow_strength()` | `float` | Retrieve glow strength. |
| `set_tonemap(mode)` | `void` | Set tone‑mapping algorithm. |
| `get_tonemap()` | `Environment::Tonemap` | Get current tone‑mapping mode. |
| `set_tonemap_exposure(exposure)` | `void` | Set exposure value. |
| `get_tonemap_exposure()` | `float` | Get exposure. |

> *Additional setter/getter methods follow the same pattern for the remaining properties.*

---

## Signals
`Environment` does **not** emit any signals. All changes are applied immediately when a property is modified.

---

## Usage Example (GDScript)

```gdscript
var env = Environment.new()

# Set background to a sky
env.background_mode = Environment.BACKGROUND_MODE_SKY
env.background_sky = preload("res://sky.tres")

# Configure ambient light
env.ambient_light_color = Color(0.8, 0.9, 1.0)
env.ambient_light_energy = 0.5

# Enable depth‑of‑field
env.depth_of_field_enabled = true
env.depth_of_field_blur_amount = 6.0
env.depth_of_field_focus_mode = Environment.DOF_FOCUS_DISTANCE
env.depth_of_field_distance = 5.0

# Assign the environment to the viewport
get_viewport().environment = env
```

---

## References

- [WorldEnvironment Node](https://docs.godotengine.org/en/stable/classes/class_worldenvironment.html)
- [Sky Class](https://docs.godotengine.org/en/stable/classes/class_sky.html)

---

*This page is part of the official Godot Engine documentation and provides a detailed reference for the `Environment` resource used in rendering and lighting settings.*