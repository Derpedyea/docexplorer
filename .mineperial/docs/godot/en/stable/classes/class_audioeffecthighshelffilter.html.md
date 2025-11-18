**AudioEffectHighShelfFilter**

> Adds a high‑shelf filter to an audio bus. The filter reduces (or boosts) all frequencies above the specified cutoff frequency, applying a gain in decibels.

---

## Inheritance

```text
AudioEffectHighShelfFilter
└── AudioEffectFilter
    └── AudioEffect
        └── Resource
            └── RefCounted
                └── Object
```

---

## Properties

| Property | Type   | Description |
|----------|--------|-------------|
| `cutoff` | `float` | The cutoff frequency (in Hz) at which the filter starts to affect the audio signal. |
| `gain`   | `float` | The amount of gain (or attenuation) in decibels applied to frequencies above the cutoff. |

> Both properties can be edited directly in the inspector or via code.

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_cutoff(float freq)` | `void` | Set the cutoff frequency. |
| `get_cutoff()` | `float` | Get the current cutoff frequency. |
| `set_gain(float db)` | `void` | Set the gain in decibels. |
| `get_gain()` | `float` | Get the current gain value. |

> The gain is typically in the range of \[-40 dB, +40 dB\].

---

## Example

```gdscript
# Create an instance of the filter
var filter = AudioEffectHighShelfFilter.new()
# Set a cutoff of 2000 Hz and boost by 6 dB
filter.cutoff = 2000
filter.gain = 6

# Add to the AudioServer's bus (example: "Master")
AudioServer.add_bus_effect(0, filter, 0)   # bus 0 = Master, slot 0
```

---

## Related Classes

- **[AudioEffectLowShelfFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectlowshelffilter.html)** – Low‑shelf filter.
- **[AudioEffectHighPassFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffecthighpassfilter.html)** – High‑pass filter.
- **[AudioEffectLowPassFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectlowpassfilter.html)** – Low‑pass filter.
- **[AudioEffectFilter](https://docs.godotengine.org/en/stable/classes/class_audioeffectfilter.html)** – Base class for all filter effects.

---