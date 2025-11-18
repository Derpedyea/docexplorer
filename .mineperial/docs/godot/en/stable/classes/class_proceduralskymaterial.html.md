**ProceduralSkyMaterial**  
*Godot Engine – Class Reference*  

---  

## Overview  

`ProceduralSkyMaterial` is a material that defines a simple sky for a `Sky` resource.  
It inherits from `Material`, which in turn inherits from `Resource`, `RefCounted` and `Object`.  

The material generates a background that mimics a real sky using procedural techniques, allowing the user to adjust various atmospheric parameters directly in the editor or via code.

---

## Inheritance

```
Object
 └─ RefCounted
     └─ Resource
         └─ Material
             └─ ProceduralSkyMaterial
```

---

## Description  

`ProceduralSkyMaterial` provides a way to create an effective background for a scene without needing an external sky texture.  
The material is composed of a number of adjustable parameters that control the appearance of the sky, including color gradients, cloud coverage, atmosphere thickness, and more.

---

## Properties  

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **sky_color** | `Color` | `Color(0.2, 0.4, 0.6)` | The base color of the sky. |
| **ground_color** | `Color` | `Color(0.1, 0.1, 0.1)` | Color of the ground horizon. |
| **cloud_color** | `Color` | `Color(1, 1, 1)` | Color used for cloud layers. |
| **cloud_scatter** | `float` | `0.5` | Controls how scattered the clouds appear. |
| **cloud_speed** | `float` | `0.1` | Speed at which clouds move across the sky. |
| **sun_direction** | `Vector3` | `Vector3(0.0, 1.0, 0.0)` | Direction of the sun in world space. |
| **sun_color** | `Color` | `Color(1.0, 0.9, 0.7)` | Color of the sunlight. |
| **sun_intensity** | `float` | `1.0` | Intensity of the sun light. |
| **fog_enabled** | `bool` | `false` | Whether atmospheric fog is enabled. |
| **fog_color** | `Color` | `Color(0.5, 0.5, 0.5)` | Color of the atmospheric fog. |
| **fog_density** | `float` | `0.05` | Density of the fog. |
| **turbidity** | `float` | `2.0` | Controls atmospheric scattering. |

> *Note*: The property list above is illustrative; see the Godot documentation for the most current and detailed property descriptions.

---

## Methods  

| Method | Return Type | Parameters | Description |
|--------|------------|------------|-------------|
| **set_sun_direction(Vector3 direction)** | `void` | `direction` | Sets the direction of the sun. |
| **get_sun_direction()** | `Vector3` | `–` | Returns the current sun direction. |
| **set_sky_color(Color color)** | `void` | `color` | Sets the base sky color. |
| **get_sky_color()** | `Color` | `–` | Retrieves the sky color. |
| **set_cloud_properties(float scatter, float speed)** | `void` | `scatter`, `speed` | Sets cloud scatter and speed. |
| **set_fog_enabled(bool enabled)** | `void` | `enabled` | Enables or disables fog. |
| **is_fog_enabled()** | `bool` | `–` | Returns whether fog is enabled. |

> *More methods are available for fine‑tuning the sky appearance; refer to the official Godot API reference for the complete list.*

---

## Signals  

No signals are defined for `ProceduralSkyMaterial`.

---

## Example Usage  

```gdscript
# Create a new procedural sky
var sky = ProceduralSkyMaterial.new()
sky.solar_direction = Vector3(-0.3, 1.0, 0.7)
sky.solar_color = Color(1.0, 0.95, 0.8)
sky.sky_color = Color(0.05, 0.4, 0.7)
sky.cloud_color = Color(1.0, 1.0, 1.0)
sky.turbidity = 3.0
sky.fog_enabled = true
sky.fog_color = Color(0.3, 0.4, 0.5)
sky.fog_density = 0.07

# Assign to a Sky resource
var sky_resource = Sky.new()
sky_resource.material = sky

# Set as the environment background
var env = Environment.new()
env.background_mode = Environment.BG_SKY
env.background_sky = sky_resource
get_viewport().world.environment = env
```

---

## Related Classes  

- **Sky** – The resource that holds a sky material.  
- **Environment** – Controls the global rendering environment (including background).  
- **Color** – Utility type used for colors.  
- **Vector3** – Used for directional vectors.

---

## Further Reading  

- [Godot Docs: Environment](https://docs.godotengine.org/en/stable/classes/class_environment.html)  
- [Godot Docs: Sky](https://docs.godotengine.org/en/stable/classes/class_sky.html)  
- [Godot Docs: Color](https://docs.godotengine.org/en/stable/classes/class_color.html)  
- [Godot Docs: Vector3](https://docs.godotengine.org/en/stable/classes/class_vector3.html)

---