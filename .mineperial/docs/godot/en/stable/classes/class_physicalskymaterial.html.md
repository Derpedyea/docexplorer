**PhysicalSkyMaterial**

The `PhysicalSkyMaterial` is a Godot `Material` that defines a sky for a `Sky` resource using a set of physical parameters based on the Preetham atmospheric scattering model.

---

## Inheritance

```
PhysicalSkyMaterial
 └─ Material
      └─ Resource
           └─ RefCounted
                └─ Object
```

---

## Description

A material that defines a sky for a `Sky` resource by a set of physical properties.  
The `PhysicalSkyMaterial` uses the Preetham model for realistic sky rendering and exposes a number of parameters to control the appearance of the sky, the sun, and the atmospheric effects.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `sun_azimuth` | `float` | `0.0` | Sun’s azimuth angle in degrees (0° = North). |
| `sun_elevation` | `float` | `0.0` | Sun’s elevation angle in degrees (positive is above the horizon). |
| `turbidity` | `float` | `2.0` | Atmospheric turbidity; higher values produce hazier skies. |
| `ground_albedo` | `Color` | `Color(1, 1, 1)` | Albedo of the ground layer. |
| `sun_color` | `Color` | `Color(1, 1, 1)` | Color of the sun. |
| `horizon_color` | `Color` | `Color(0.8, 0.8, 1.0)` | Color at the horizon. |
| `zenith_color` | `Color` | `Color(0.5, 0.5, 0.7)` | Color at the zenith. |
| `exposure` | `float` | `1.0` | Overall exposure of the sky. |
| `skylight_enabled` | `bool` | `true` | Whether the skylight component is enabled. |
| `sun_intensity` | `float` | `1.0` | Intensity multiplier for the sun. |
| `use_spherical_harmonics` | `bool` | `true` | Whether to pre‑compute and use spherical harmonics. |

> **Note** – All float values are in the unit range `[0, 1]` unless otherwise specified (angles are in degrees).

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `get_sun_position()` | `Vector3` | – | Returns the unit vector pointing from the origin to the sun based on current azimuth/elevation. |
| `update()` | `void` | – | Recomputes internal parameters after any property change. |
| `get_atmospheric_params()` | `Dictionary` | – | Returns a dictionary with all current atmospheric settings. |

> *All properties can be modified at runtime and will automatically trigger `update()`.*

---

## Usage Example (GDScript)

```gdscript
var sky = PhysicalSkyMaterial.new()
sky.sun_azimuth = 45.0
sky.sun_elevation = 30.0
sky.turbidity = 3.0
sky.ground_albedo = Color(0.8, 0.7, 0.6)

var environment = Environment.new()
environment.background_mode = Environment.BG_SKY
environment.sky = Sky.new()
environment.sky.sky_material = sky

get_viewport().set_environment(environment)
```

This will create a simple sky with a sun at the specified position and atmospheric parameters.

---

## References

* [Godot 4.0 Documentation – PhysicalSkyMaterial](https://docs.godotengine.org/en/stable/classes/class_physicalskymaterial.html)  
* [Preetham, J., Stam, J., & Akenine‑Möller, T. (2001). *Real-time atmospheric scattering*](https://www.researchgate.net/publication/2296133_Real-time_atmospheric_scattering)

---