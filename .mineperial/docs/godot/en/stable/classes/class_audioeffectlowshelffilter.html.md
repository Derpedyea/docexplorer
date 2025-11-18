**AudioEffectLowShelfFilter**

> Adds a low‑shelf filter to the audio bus.  
> The filter reduces all frequencies below the cutoff frequency while optionally boosting or cutting the low‑frequency content.

---

### Inheritance

```
AudioEffectLowShelfFilter
 └─ AudioEffectFilter
     └─ AudioEffect
         └─ Resource
             └─ RefCounted
                 └─ Object
```

---

### Properties

| Property   | Type | Default | Description |
|------------|------|---------|-------------|
| `cutoff`   | `float` | 500.0 | Frequency (Hz) at which the filter starts to affect the signal. |
| `resonance` | `float` | 1.0 | Controls the bandwidth of the filter (Q‑factor). |
| `gain`    | `float` | 0.0 | Gain (in dB) applied to the low‑frequency range. |

> **Notes**  
> • The actual valid range for these properties is defined in the Godot API and can be queried via the editor or the `@export var` syntax.  
> • The default values above are illustrative – always refer to the live editor to see the current defaults.

---

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_cutoff()` | `float` | Returns the current cutoff frequency. |
| `set_cutoff(value: float)` | `void` | Sets a new cutoff frequency. |
| `get_resonance()` | `float` | Returns the current resonance. |
| `set_resonance(value: float)` | `void` | Sets a new resonance. |
| `get_gain()` | `float` | Returns the current gain in dB. |
| `set_gain(value: float)` | `void` | Sets a new low‑shelf gain. |

> These methods are thin wrappers around the exported properties and are included for API consistency.

---

### Signals

No signals are emitted by `AudioEffectLowShelfFilter`.

---

### Example Usage (GDScript)

```gdscript
# Get the index of the bus you want to modify
var bus_index = AudioServer.get_bus_index("Master")

# Create a new low‑shelf filter and add it to the bus
var filter = AudioEffectLowShelfFilter.new()
AudioServer.add_bus_effect(bus_index, filter)

# Adjust the filter parameters
filter.cutoff = 200.0        # 200 Hz
filter.resonance = 0.75      # moderate resonance
filter.gain = -6.0           # cut low frequencies by 6 dB
```

---

### See Also

- [AudioEffectHighShelfFilter](../class_audioeffecthighshelffilter.html) – The counterpart that boosts high frequencies.  
- [AudioEffectLowPassFilter](../class_audioeffectlowpassfilter.html) – A simple low‑pass filter.  
- [AudioServer](../class_audioserver.html) – Manage audio buses and effects.

---

*This page is part of the Godot Engine documentation and describes the `AudioEffectLowShelfFilter` class available in the stable version of the engine.*