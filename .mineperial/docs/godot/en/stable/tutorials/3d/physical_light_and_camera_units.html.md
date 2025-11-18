**Physical light and camera units**  

---

## Why use physical light and camera units?

Godot uses arbitrary units for many physical properties that apply to light and camera – such as color, energy, field of view, and exposure. By default these are scaled in a way that can feel unintuitive when working with real‑world measurements. Switching to *physical* units lets you:

* Use real‑world values (W/m², lux, meters, degrees, etc.).  
* Make lighting and camera behaviour match expectations from other engines or real life.  
* Avoid the “magic numbers” that come with default “Godot” units.  

---

## Physical light units

| Property | Default Godot unit | Physical unit | Conversion notes |
|----------|--------------------|---------------|------------------|
| **Energy** | arbitrary | *W/m²* (luminosity) | Use the “Physical Light” mode on a `Light3D` node. |
| **Color temperature** | arbitrary | Kelvin | `Light3D.color_temperature` works in Kelvin when in physical mode. |
| **Range** | arbitrary | meters | `Light3D.range` is automatically scaled to meters. |
| **Attenuation** | arbitrary | inverse-square | The default attenuation curve is linear; enable “Physical” to use inverse‑square fall‑off. |

### Enabling physical mode

1. Select your light node (`DirectionalLight`, `SpotLight`, `OmniLight`, etc.).  
2. In the **Inspector** tab, toggle **Physical** under the *Light* section.  
3. Adjust the *Energy* value to a realistic number, e.g. `1000` for a strong spotlight.

---

## Physical camera units

| Property | Default Godot unit | Physical unit | Notes |
|----------|--------------------|---------------|-------|
| **Field of view** | degrees | degrees | Remains the same, but the interpretation is now tied to the camera’s focal length in mm. |
| **Projection** | Perspective | Perspective | Switching to *Physical* mode will adjust the projection to use the focal length. |
| **Near / Far clip** | arbitrary | meters | The camera’s near and far planes are expressed in meters in physical mode. |

### Setting a realistic focal length

1. With the `Camera3D` selected, check **Physical** under the *Projection* section.  
2. Enter a focal length (e.g., `35` for a standard medium‑telephoto lens).  
3. The resulting FOV will be automatically calculated from this value.

---

## Exposure and HDR

*Physical* lights work best with *High Dynamic Range* (HDR). Enable HDR in the project settings or by setting an `Environment` node’s `use_exposure` to `true`.  

**Exposure** is now expressed in *lux* (lm/m²). Use the `Environment.exposure_value` to set a base exposure that matches the lighting conditions of your scene.

---

## Practical example

```gdscript
# Set up a directional light with a realistic sun
var sun = DirectionalLight3D.new()
sun.light_physical = true
sun.energy = 2000          # 2000 W/m² (approx. daylight)
sun.color_temperature = 5500   # Kelvin
add_child(sun)

# Set up a camera with a 50 mm lens
var cam = Camera3D.new()
cam.projection = Camera3D.PROJECTION_PERSPECTIVE
cam.camera_physical = true
cam.focal_length = 50.0
cam.near = 0.1
cam.far = 1000.0
add_child(cam)
```

---

## Summary

* Switching to **physical** units brings a level of realism to lighting and camera setups in Godot.  
* Light and camera parameters map directly to real‑world measurements, simplifying asset import and scene composition.  
* Remember to enable HDR and use appropriate exposure settings for best results.