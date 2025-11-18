**GLTFLight**  
================

> *A resource that represents a light as defined by the KHR_lights_punctual glTF extension.*

---

### Inheritance

```text
Resource ← RefCounted ← Object ← GLTFLight
```

---

### Description

`GLTFLight` is a *light* representation used when importing or exporting glTF 2.0 files that employ the **KHR_lights_punctual** extension.  It stores all the attributes that a glTF light can expose (type, color, intensity, radius, attenuation, etc.) and is exposed to the Godot engine through the `GLTFDocumentExtension` system.  

> **Tutorials**  
> *Runtime file loading and saving* – see the [glTF tutorial](https://docs.godotengine.org/en/stable/tutorials/3d/glTF.html).

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `int` (`LightType`) | `LightType.SINGLE` | The light type (point, spot, directional). |
| `color` | `Color` | `Color(1, 1, 1)` | Light color. |
| `energy` | `float` | `1.0` | Intensity multiplier. |
| `range` | `float` | `0.0` | Maximum radius for point and spot lights (0 = infinite). |
| `spot_angle` | `float` | `45.0` | Cone angle for spot lights. |
| `spot_attenuation` | `float` | `1.0` | Attenuation for spot lights. |
| `cast_shadow` | `bool` | `true` | Whether the light casts shadows. |
| `shadow_mode` | `int` (`ShadowMode`) | `ShadowMode.PCF_2X2` | Shadow filtering mode. |
| `shadow_strength` | `float` | `1.0` | Shadow intensity. |
| `shadow_bias` | `float` | `0.01` | Bias for shadow map. |
| `shadow_normal_bias` | `float` | `0.5` | Normal bias for shadow map. |
| `shadow_smooth` | `float` | `1.0` | Shadow softness. |

> **Enums**  
> ```
> enum LightType { POINT, SPOT, DIRECTIONAL }
> enum ShadowMode { NONE, PCF_2X2, PCF_4X4, PCF_8X8 }
> ```

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `get_type()` | `int` | Returns the current `LightType`. |
| `set_type(int type)` | `void` | Sets the light type. |
| `get_color()` | `Color` | Returns the current light color. |
| `set_color(Color color)` | `void` | Sets the light color. |
| `get_energy()` | `float` | Returns the energy value. |
| `set_energy(float energy)` | `void` | Sets the energy. |
| `get_range()` | `float` | Returns the range. |
| `set_range(float range)` | `void` | Sets the range. |
| `get_spot_angle()` | `float` | Returns spot cone angle. |
| `set_spot_angle(float angle)` | `void` | Sets spot angle. |
| `get_spot_attenuation()` | `float` | Returns spot attenuation. |
| `set_spot_attenuation(float att)` | `void` | Sets spot attenuation. |
| `is_cast_shadow()` | `bool` | Returns whether shadows are enabled. |
| `set_cast_shadow(bool cast)` | `void` | Enables/disables shadow casting. |
| `get_shadow_mode()` | `int` | Returns current shadow mode. |
| `set_shadow_mode(int mode)` | `void` | Sets shadow mode. |
| `get_shadow_strength()` | `float` | Returns shadow strength. |
| `set_shadow_strength(float strength)` | `void` | Sets shadow strength. |
| `get_shadow_bias()` | `float` | Returns shadow bias. |
| `set_shadow_bias(float bias)` | `void` | Sets shadow bias. |
| `get_shadow_normal_bias()` | `float` | Returns normal bias. |
| `set_shadow_normal_bias(float bias)` | `void` | Sets normal bias. |
| `get_shadow_smooth()` | `float` | Returns shadow smoothness. |
| `set_shadow_smooth(float smooth)` | `void` | Sets shadow smoothness. |

> **Example: Creating a point light resource**
> ```gdscript
> var light = GLTFLight.new()
> light.type = GLTFLight.LightType.POINT
> light.color = Color(1, 0.8, 0.6)
> light.energy = 2.0
> light.range = 15.0
> ```
> The light can then be attached to a `GLTFNode` or exported as part of a glTF scene.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `changed()` | — | Emitted when any property value changes. |

---

### Usage in glTF Import/Export

* **Import** – The `GLTFDocumentExtension` automatically constructs a `GLTFLight` when encountering a light node in the source glTF file, mapping glTF properties to the above fields.  
* **Export** – A `GLTFLight` instance attached to a node will be serialized back into the glTF file as a **KHR_lights_punctual** extension payload.

---

### References

* [glTF 2.0 Specification – KHR_lights_punctual](https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/KHR_lights_punctual)  
* Godot's GLTF import/export documentation: [https://docs.godotengine.org/en/stable/tutorials/3d/glTF.html](https://docs.godotengine.org/en/stable/tutorials/3d/glTF.html)

---