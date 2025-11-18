**PanoramaSkyMaterial**  
*Godot Engine documentation – Class reference*

---

### Overview
`PanoramaSkyMaterial` is a resource used to provide a special texture to a `Sky`, usually an HDR panorama.  
It inherits from:

```
Material < Resource < RefCounted < Object
```

---

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `panorama` | `ImageTexture` | – | The panoramic image used for the sky. |
| `panorama_burn` | `float` | `0.0` | Amount of burn applied to the panorama. |
| `panorama_brightness` | `float` | `1.0` | Brightness multiplier for the panorama. |
| `panorama_contrast` | `float` | `1.0` | Contrast multiplier for the panorama. |
| `panorama_saturation` | `float` | `1.0` | Saturation multiplier for the panorama. |
| `panorama_exposure` | `float` | `1.0` | Exposure value for HDR images. |

*(All properties are exposed to the editor and can be edited directly in the Inspector.)*

---

### Methods
| Method | Return type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `set_panorama(ImageTexture panorama)` | `void` | `panorama` | Sets the panoramic texture. |
| `get_panorama()` | `ImageTexture` | – | Returns the current panoramic texture. |
| `set_panorama_burn(float value)` | `void` | `value` | Sets the burn amount. |
| `get_panorama_burn()` | `float` | – | Returns the burn amount. |
| `set_panorama_brightness(float value)` | `void` | `value` | Sets brightness. |
| `get_panorama_brightness()` | `float` | – | Returns brightness. |
| `set_panorama_contrast(float value)` | `void` | `value` | Sets contrast. |
| `get_panorama_contrast()` | `float` | – | Returns contrast. |
| `set_panorama_saturation(float value)` | `void` | `value` | Sets saturation. |
| `get_panorama_saturation()` | `float` | – | Returns saturation. |
| `set_panorama_exposure(float value)` | `void` | `value` | Sets exposure. |
| `get_panorama_exposure()` | `float` | – | Returns exposure. |

---

### Signals
*(None)*

---

### Constants
*(None)*

---

### Example Usage

```gdscript
# Create a new PanoramaSkyMaterial
var sky_material = PanoramaSkyMaterial.new()
sky_material.panorama = preload("res://my_hdr.hdr")

# Adjust some parameters
sky_material.panorama_brightness = 1.2
sky_material.panorama_exposure = 0.8

# Apply it to a Sky node
var sky = Sky.new()
sky.material = sky_material
```

---

### Notes
* The material automatically updates when any of its properties are changed.  
* It can be used with Godot’s *WorldEnvironment* node to render an HDR sky.  
* For optimal performance, use a 16‑bit HDR image and keep its dimensions a power of two.  

---

For more information, see the full class reference in the Godot documentation or the API reference page.