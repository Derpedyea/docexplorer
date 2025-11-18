**AudioEffectEQ10**  
*Godot Engine Documentation – Class Reference (Stable)*

---

### Inheritance

```
AudioEffectEQ10 ← AudioEffectEQ ← AudioEffect ← Resource ← RefCounted ← Object
```

---

### Overview

`AudioEffectEQ10` is a 10‑band equalizer audio effect that can be added to an audio bus.  
It gives fine‑grained control over the frequency spectrum from **31 Hz** to **16 kHz**, with each band adjustable in 0.1 dB increments.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `band0`  | `float` | `0.0` | Gain for band 0 (≈31 Hz) |
| `band1`  | `float` | `0.0` | Gain for band 1 |
| `band2`  | `float` | `0.0` | Gain for band 2 |
| `band3`  | `float` | `0.0` | Gain for band 3 |
| `band4`  | `float` | `0.0` | Gain for band 4 |
| `band5`  | `float` | `0.0` | Gain for band 5 |
| `band6`  | `float` | `0.0` | Gain for band 6 |
| `band7`  | `float` | `0.0` | Gain for band 7 |
| `band8`  | `float` | `0.0` | Gain for band 8 |
| `band9`  | `float` | `0.0` | Gain for band 9 |

> **Note**  
> The frequency centers of the bands (in Hz) are:  
> 31, 62, 125, 250, 500, 1000, 2000, 4000, 8000, 16000.

---

### Methods

| Method | Description |
|--------|-------------|
| `set_band_gain(int band, float gain)` | Sets the gain (in dB) for the specified band (0‑9). |
| `get_band_gain(int band) → float` | Returns the current gain for the specified band. |
| `set_band_center_frequency(int band, float frequency)` | Sets the center frequency for the specified band. |
| `get_band_center_frequency(int band) → float` | Returns the center frequency of the specified band. |
| `set_band_width(int band, float width)` | Sets the bandwidth of the specified band. |
| `get_band_width(int band) → float` | Returns the bandwidth of the specified band. |

> **All numeric parameters** are in decibels (dB) or hertz (Hz) as appropriate.  
> Band indices are zero‑based (0 – 9).

---

### Usage Example

```gdscript
# Create the equalizer
var eq = AudioEffectEQ10.new()

# Apply it to a bus
AudioServer.set_bus_effect(0, 0, eq)  # bus 0, effect 0

# Boost the 5 kHz band by 3 dB
eq.set_band_gain(4, 3.0)

# Narrow the 1 kHz band
eq.set_band_width(5, 0.5)
```

---

### Related Classes

* [`AudioEffectEQ21`](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq21.html) – 21‑band equalizer.  
* [`AudioEffectReverb`](https://docs.godotengine.org/en/stable/classes/class_audioeffectreverb.html) – Reverb effect.  
* [`AudioEffectStereoPan`](https://docs.godotengine.org/en/stable/classes/class_audioeffectstereopan.html) – Stereo panning.

---

### See Also

* [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html) – Global audio server functions.  
* [AudioEffect](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html) – Base class for all audio effects.

---