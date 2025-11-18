# AudioEffectLowPassFilter

**Class** – `AudioEffectLowPassFilter`  
**Inherits** – `AudioEffectFilter` → `AudioEffect` → `Resource` → `RefCounted` → `Object`

Adds a low‑pass filter to the audio bus.  
It reduces the amplitude of frequencies that are higher than the filter’s cutoff frequency, effectively “cutting off” the high‑frequency content of the signal that passes through the bus.

> **Tip** – The filter’s behaviour can be tuned with the *cutoff* and *resonance* properties.  
> For a smoother fade‑out of high frequencies, raise the resonance; for a more abrupt cutoff, lower it.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `cutoff_hz` | `float` | `20000.0` | Cutoff frequency in hertz. Frequencies above this value are attenuated. |
| `resonance` | `float` | `0.0` | Resonance of the filter (Q factor). A higher value creates a sharper peak just before the cutoff. |

*Both properties are exposed to the Inspector and can be animated.*

---

## Methods

| Method | Arguments | Returns | Description |
|--------|-----------|---------|-------------|
| `set_cutoff_hz(cutoff_hz: float) -> void` | `cutoff_hz`: Desired cutoff frequency. | `void` | Sets the filter’s cutoff frequency. |
| `get_cutoff_hz() -> float` | – | `float` | Returns the current cutoff frequency. |
| `set_resonance(resonance: float) -> void` | `resonance`: Desired resonance value. | `void` | Sets the filter’s resonance. |
| `get_resonance() -> float` | – | `float` | Returns the current resonance. |

> **Note** – These methods are wrappers around the internal audio DSP implementation and are not exposed to the GDScript engine directly.  
> Use the property setters (`AudioEffectLowPassFilter.cutoff_hz = 5000`) instead of calling the setter methods manually unless you are extending the class in C++.

---

## Signals

None.

---

## Usage

```gdscript
# Create a low‑pass filter on an AudioBus
var lowpass = AudioEffectLowPassFilter.new()
AudioServer.set_bus_effect(1, 0, lowpass)  # apply to bus index 1, effect index 0

# Adjust cutoff in realtime
lowpass.cutoff_hz = 1200  # 1.2 kHz
lowpass.resonance = 0.5   # moderate resonance
```

> The filter can be added through the Godot Editor’s **AudioBus** panel or by code.  
> When used on a bus that mixes multiple audio streams, it will affect all of them uniformly.

---

## See Also

* [`AudioEffectHighPassFilter`](class_audioeffecthighpassfilter.html) – The complementary high‑pass filter.  
* [`AudioEffectBandPassFilter`](class_audioeffectbandpassfilter.html) – Allows a band of frequencies while cutting the rest.  
* [`AudioEffectLowShelfFilter`](class_audioeffectlowshelffilter.html) – Attenuates frequencies above a cutoff without a sharp roll‑off.  

---

*Source: Godot Engine documentation – Class Reference.*