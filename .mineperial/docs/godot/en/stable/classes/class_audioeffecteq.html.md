# AudioEffectEQ

Base class for audio equalizers. Gives you control over frequencies.  
Use the derived classes **AudioEffectEQ10**, **AudioEffectEQ21**, or **AudioEffectEQ6** for a specific number of bands.

---

## Inheritance

```
Object ← RefCounted ← Resource ← AudioEffect ← AudioEffectEQ
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `band_count` | `int` | 6 | Read‑only number of frequency bands supported by this instance. |
| `band_gains` | `PackedFloat32Array` | `[]` | Current gain (dB) for each band. |
| `band_center_frequencies` | `PackedFloat32Array` | `[]` | Center frequency (Hz) for each band. |
| `band_qs` | `PackedFloat32Array` | `[]` | Quality factor (Q) for each band. |
| `enabled` | `bool` | `true` | Enables or disables the effect. |

> **Note**: The arrays are indexed from `0` to `band_count-1`.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_band_gain(index : int, gain : float)` | `void` | Sets the gain in decibels for the band at *index*. |
| `get_band_gain(index : int) -> float` | `float` | Returns the gain (dB) for the band at *index*. |
| `set_band_center_frequency(index : int, freq : float)` | `void` | Sets the center frequency (Hz) for the band at *index*. |
| `get_band_center_frequency(index : int) -> float` | `float` | Returns the center frequency (Hz) for the band at *index*. |
| `set_band_q(index : int, q : float)` | `void` | Sets the quality factor for the band at *index*. |
| `get_band_q(index : int) -> float` | `float` | Returns the quality factor for the band at *index*. |
| `get_band_count() -> int` | `int` | Returns the total number of bands. |
| `set_bands(gains : PackedFloat32Array, center_frequencies : PackedFloat32Array, qs : PackedFloat32Array)` | `void` | Bulk sets all band parameters. Each array must match `band_count`. |
| `get_bands() -> Dictionary` | `Dictionary` | Returns a dictionary containing `gains`, `center_frequencies`, and `qs` arrays. |

---

## Example

```gdscript
# Create an EQ with 6 bands
var eq = AudioEffectEQ.new()

# Set a boost on the 3rd band
eq.set_band_gain(2, 6.0)        # +6 dB
eq.set_band_center_frequency(2, 1000.0)  # 1 kHz
eq.set_band_q(2, 1.0)           # Q factor

# Add to an AudioEffectInstance
var bus = AudioServer.get_bus_index("Master")
AudioServer.add_bus_effect(bus, eq)
```

---

## See Also

- [AudioEffect](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html) – Base class for all audio effects.
- [AudioEffectEQ10](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq10.html) – 10‑band equalizer.
- [AudioEffectEQ21](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq21.html) – 21‑band equalizer.
- [AudioEffectEQ6](https://docs.godotengine.org/en/stable/classes/class_audioeffecteq6.html) – 6‑band equalizer.

---