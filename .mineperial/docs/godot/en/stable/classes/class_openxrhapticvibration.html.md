**OpenXRHapticVibration**

> *OpenXR haptic feedback resource that defines a vibration‑based effect.*

---

## Inherits
`OpenXRHapticBase<Resource<RefCounted<Object>>>`

---

## Description
`OpenXRHapticVibration` is a Godot resource that allows you to configure a vibration‑based haptic effect for OpenXR controllers. The resource contains the parameters that describe how long the vibration should last, its amplitude, and whether it should loop.

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `amplitude` | `float` | `1.0` | Vibration strength (0.0 – 1.0). |
| `duration` | `float` | `0.5` | Length of a single pulse in seconds. |
| `frequency` | `float` | `0.0` | Frequency in Hz (0.0 for no frequency modulation). |
| `loop` | `bool` | `false` | If `true`, repeats until stopped. |

> **Note:** All values are clamped to a valid range by the engine.

---

## Methods
| Method | Signature | Description |
|--------|------------|-------------|
| `play()` | `void` | Starts the vibration using the current property values. |
| `stop()` | `void` | Stops the vibration immediately. |
| `is_playing()` | `bool` | Returns `true` if the effect is currently running. |

---

## Usage example (GDScript)

```gdscript
# preload the resource
var vibration = preload("res://my_vibration.tres")

func _ready():
    # Set custom parameters
    vibration.amplitude = 0.8
    vibration.duration  = 1.0
    vibration.frequency = 50.0
    vibration.loop      = true

    # Play the haptic effect
    vibration.play()
```

---

## Related classes

* [OpenXRHapticBase](../class_openxrhapticbase.html) – Base class for all haptic feedback resources.
* [OpenXRInteractionProfile](../class_openxrinteractionprofile.html) – Defines input bindings for XR devices.

---

## References

* [OpenXR API documentation](https://www.khronos.org/registry/OpenXR/specs/1.0/html/xrspec.html)
* Godot XR module source on GitHub: https://github.com/godotengine/godot/blob/master/modules/openxr/

---