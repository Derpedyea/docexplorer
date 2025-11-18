# AudioEffectBandPassFilter

`AudioEffectBandPassFilter` is a built‑in Godot audio effect that applies a band‑pass filter to an audio bus.  
The filter attenuates frequencies outside a specified frequency range while preserving frequencies inside that range.  

> **Note** – This class inherits from `AudioEffectFilter`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cutoff_hz` | `float` | `2000.0` | The centre frequency (in Hz) of the pass‑band. |
| `width_hz` | `float` | `1000.0` | The bandwidth (in Hz) around the centre frequency that is passed. |
| `resonance` | `float` | `0.0` | The resonance (Q‑factor) of the filter. A higher value sharpens the filter edges. |
| `mix` | `float` | `1.0` | Dry‑wet mix (0 = all dry, 1 = all wet). |

> **Tip:** Adjust `mix` to blend the filtered signal with the original signal.

---

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `set_cutoff_hz(float hz)` | – | Sets the centre frequency of the filter. |
| `get_cutoff_hz() -> float` | `float` | Returns the centre frequency. |
| `set_width_hz(float hz)` | – | Sets the bandwidth of the filter. |
| `get_width_hz() -> float` | `float` | Returns the bandwidth. |
| `set_resonance(float q)` | – | Sets the resonance (Q‑factor). |
| `get_resonance() -> float` | `float` | Returns the resonance. |
| `set_mix(float value)` | – | Sets the dry/wet mix level. |
| `get_mix() -> float` | `float` | Returns the mix level. |

---

## Usage

1. **Add the effect** to an audio bus in the Audio Bus panel.  
2. **Adjust the properties** either in the inspector or via code.  
3. **Play audio** through that bus to hear the band‑pass effect.

```gdscript
var bus_index = AudioServer.get_bus_index("Music")
var effect = AudioEffectBandPassFilter.new()
AudioServer.add_bus_effect(bus_index, effect, 0)
effect.set_cutoff_hz(440)
effect.set_width_hz(200)
effect.set_mix(0.8)
```

---

## Related classes

- [`AudioEffectFilter`](../class_audioeffectfilter.html) – Base class for filter effects.  
- [`AudioEffectLowPassFilter`](../class_audioeffectlowpassfilter.html) – Low‑pass filter.  
- [`AudioEffectHighPassFilter`](../class_audioeffecthighpassfilter.html) – High‑pass filter.

---

*This documentation is based on Godot 4.x stable API reference. For the latest changes, see the official [Godot documentation](https://docs.godotengine.org).*