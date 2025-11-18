**AudioEffectNotchFilter**  
===========================

*Audio effect that attenuates a narrow band of frequencies (notch filter).*

---

### Inherits

* `AudioEffectFilter`  
  (which itself inherits from `AudioEffect`, `Resource`, `RefCounted`, and `Object`)

---

### Description

`AudioEffectNotchFilter` applies a parametric notch filter to an audio bus.  
The filter attenuates frequencies in a tight band centered on a user‑specified frequency.  
The width of the attenuation is controlled by the **Q** (quality) factor – a higher Q gives a narrower notch.

---

### Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| `frequency` | `float` | `1000.0` | Center frequency of the notch in hertz (Hz). |
| `Q` | `float` | `1.0` | Quality factor that controls the bandwidth of the notch. Larger values produce a sharper, narrower attenuation. |

*All properties are exposed to the editor and can be animated.*

---

### Methods

`AudioEffectNotchFilter` does not provide additional public methods beyond those inherited from `AudioEffectFilter`.  
Typical usage is to adjust the properties from script or the Audio Server inspector.

Example (GDScript):

```gdscript
# Assuming `bus_name` is the name of the audio bus you want to modify
var bus_index = AudioServer.get_bus_index(bus_name)
var filter = AudioServer.get_bus_effect(bus_index, 0) as AudioEffectNotchFilter
filter.frequency = 4000.0
filter.Q = 5.0
```

---

### Signals

None.  

--- 

### See also

* [AudioEffectFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectfilter.html) – Base class for all audio filter effects.  
* [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html) – Controls audio buses and their effects.  

--- 

> **Tip**: The notch filter is useful for removing unwanted frequencies, such as audio artifacts or specific resonances in a mix. Adjust `Q` carefully; very high values can produce a “dead‑zone” that may be perceptible to the listener.