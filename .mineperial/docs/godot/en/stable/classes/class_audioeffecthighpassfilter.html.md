**AudioEffectHighPassFilter**  
*Godot Engine – Class Reference*

---

### Inheritance
`AudioEffectHighPassFilter`  ↳ `AudioEffectFilter` ↳ `AudioEffect` ↳ `Resource` ↳ `RefCounted` ↳ `Object`

---

### Description
Adds a high‑pass filter to an audio bus.  
The filter attenuates frequencies below the value set in the `cutoff_hz` property.  
It is implemented with a simple bi‑quad algorithm.

---

### Properties

| Property | Type | Default | Notes |
|----------|------|---------|-------|
| `cutoff_hz` | `float` | `2000.0` | Frequency in hertz below which sound is cut. |
| `resonance` | `float` | `0.707` | Q‑factor controlling resonance at the cutoff. |

> **Tip** – Adjust `cutoff_hz` to filter out low‑frequency noise or to shape the audio content.

---

### Methods

| Method | Return | Description |
|--------|--------|-------------|
| `set_cutoff_hz(hz : float) → void` | | Sets the cutoff frequency. |
| `get_cutoff_hz() → float` | | Retrieves the current cutoff frequency. |
| `set_resonance(q : float) → void` | | Sets the filter’s resonance. |
| `get_resonance() → float` | | Retrieves the current resonance. |

---

### Signals
No signals are defined for this class.

---

### Example Usage (GDScript)

```gdscript
# Create the filter
var high_pass = AudioEffectHighPassFilter.new()
high_pass.cutoff_hz = 400.0   # Cut all frequencies below 400 Hz
high_pass.resonance = 1.0     # Slight resonance boost

# Add to an existing audio bus layout
var bus_layout = AudioServer.get_bus_layout()
bus_layout.add_effect("High Pass", high_pass)
```

> **Note** – The filter is most effective on bass‑heavy tracks where you want to remove rumble.

---

### See Also
- [AudioEffectLowPassFilter](class_audioeffectlowpassfilter.html) – Opposite filter that removes high frequencies.  
- [AudioEffectHighShelfFilter](class_audioeffecthighshelffilter.html) – A shelving filter that boosts or cuts above a cutoff.  

---