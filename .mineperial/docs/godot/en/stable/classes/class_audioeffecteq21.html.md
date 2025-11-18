**AudioEffectEQ21** – Godot Engine class reference  
====================================================

`AudioEffectEQ21` is a 21‑band equalizer audio effect that can be attached to an audio bus.  
It allows you to control individual frequency bands ranging from **22 Hz to 22 kHz**.

---

### Inheritance

```
AudioEffectEQ21
   └─ AudioEffectEQ
      └─ AudioEffect
         └─ Resource
            └─ RefCounted
               └─ Object
```

---

### Public Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `band_gain` | `PackedFloat32Array` | 0 dB for all bands | Array containing the gain (in dB) for each of the 21 frequency bands. |
| `band_frequency` | `PackedFloat32Array` | 22 Hz to 22 kHz (evenly spaced) | Array containing the centre frequency of each band. |
| `band_q` | `PackedFloat32Array` | 1.0 | Array containing the Q factor for each band. |
| `db_range` | `int` | 30 | Maximum dB change (±30 dB). |

> **Note:** The frequency layout is fixed; you can only adjust gain and Q per band.

---

### Public Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_band_gain(band: int) → float` | `float` | `band` | Returns the current gain of the specified band. |
| `set_band_gain(band: int, gain: float)` | `void` | `band, gain` | Sets the gain (in dB) for the specified band. |
| `get_band_q(band: int) → float` | `float` | `band` | Returns the current Q factor of the specified band. |
| `set_band_q(band: int, q: float)` | `void` | `band, q` | Sets the Q factor for the specified band. |
| `get_band_frequency(band: int) → float` | `float` | `band` | Returns the centre frequency of the specified band. *(Read‑only)* |
| `get_band_count() → int` | `int` | – | Returns the number of bands (21). |

---

### Example Usage (GDScript)

```gdscript
var eq = AudioEffectEQ21.new()
# Set the 10th band to +6 dB
eq.set_band_gain(9, 6.0)   # index 0‑based
# Set Q factor of the 10th band to 1.5
eq.set_band_q(9, 1.5)
# Add to a bus
AudioServer.get_bus_effects(0).push_back(eq)
```

---

### Documentation Links

- **Godot Docs**: [AudioEffectEQ21](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq21.html)  
- Related classes: [AudioEffectEQ](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq.html), [AudioEffectEQ6](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq6.html), [AudioEffectEQ10](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq10.html)

---

This class is part of the Godot Engine's audio DSP system. Use it to craft precise equalization curves for your project’s audio mix.