**AudioEffectFilter – Godot Engine (stable) documentation**

---

# AudioEffectFilter

> **Class**: `AudioEffectFilter`  
> **Inherits**: `AudioEffect`  
> **Namespace**: Godot

`AudioEffectFilter` is a base class for all filter‑type audio effects in Godot.  
It is used to modify the frequency spectrum of an audio stream by applying a
low‑pass, high‑pass, band‑pass, or shelving filter.  
Concrete subclasses include:

- `AudioEffectLowPassFilter`
- `AudioEffectHighPassFilter`
- `AudioEffectBandPassFilter`
- `AudioEffectBandLimitFilter`
- `AudioEffectHighShelfFilter`
- `AudioEffectLowShelfFilter`
- `AudioEffectParametricEQ`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cutoff` | `float` | `2000.0` | Cut‑off frequency (in Hz).  The frequency at which the filter starts to attenuate. |
| `resonance` | `float` | `0.0` | Resonance (Q‑factor).  Determines the sharpness of the filter’s peak at the cutoff frequency. |
| `mode` | `int` | `0` | Filter mode: <br>• `0` – Low‑pass<br>• `1` – High‑pass<br>• `2` – Band‑pass<br>• `3` – Band‑limit<br>• `4` – High‑shelf<br>• `5` – Low‑shelf |

> **Note:** The values above are placeholders.  Refer to the Godot API reference for the exact default values and accepted ranges.

---

## Methods

### `get_cutoff() -> float`
Returns the current cut‑off frequency.

### `set_cutoff(value: float) -> void`
Sets the cut‑off frequency.  
The value must be between `20.0` and `22050.0` Hz (human hearing range).

### `get_resonance() -> float`
Returns the current resonance (Q‑factor).

### `set_resonance(value: float) -> void`
Sets the resonance.  
Typical values range from `0.0` to `10.0`.

### `get_mode() -> int`
Returns the current filter mode (see **Properties** above).

### `set_mode(mode: int) -> void`
Sets the filter mode.

---

## Signals

| Signal | Description |
|--------|-------------|
| `cutoff_changed(cutoff: float)` | Emitted when the cut‑off frequency changes. |
| `resonance_changed(resonance: float)` | Emitted when the resonance changes. |
| `mode_changed(mode: int)` | Emitted when the filter mode changes. |

---

## Usage Example (GDScript)

```gdscript
# Create a low‑pass filter
var filter = AudioEffectLowPassFilter.new()
filter.cutoff = 1200.0
filter.resonance = 1.2

# Attach to an AudioServer
var bus_index = AudioServer.get_bus_index("Master")
AudioServer.add_bus_effect(bus_index, filter)
```

---

## Related Classes

- [`AudioEffect`](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html) – Base class for all audio effects.
- [`AudioEffectEQ6`](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq6.html) – 6‑band equalizer.
- [`AudioEffectReverb`](https://docs.godotengine.org/en/stable/classes/class_audioeffectreverb.html) – Reverb effect.

---

## See Also

- [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html) – Global audio server API.  
- [AudioEffectFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectfilter.html) (this page)  
- [AudioEffectBandPassFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectbandpassfilter.html)  

---

**Version:** stable (4.x)

---