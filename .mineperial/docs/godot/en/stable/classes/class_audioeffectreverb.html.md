**AudioEffectReverb**  
*Godot Engine class reference – stable*

---

### Inherits
`AudioEffect`

---

### Description
`AudioEffectReverb` adds a reverberation audio effect to an audio bus.  
It simulates the acoustic response of various environments such as rooms, concert halls, or outdoor spaces, providing a more realistic spatial audio experience.

---

## Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| **room_size** | `float` | `2.0` | Size of the simulated room (0‑10). |
| **damping** | `float` | `0.5` | Low‑pass filter applied to reflections. |
| **wet** | `float` | `0.3` | Wet‑signal level (0‑1). |
| **dry** | `float` | `1.0` | Dry‑signal level (0‑1). |
| **width** | `float` | `1.0` | Stereo width of the reverb. |
| **level** | `float` | `1.0` | Overall level of the effect (0‑10). |
| **freeze** | `bool` | `false` | Freeze the reverb to a pre‑computed buffer. |
| **decay_hfr** | `float` | `0.0` | High‑frequency decay time. |
| **decay_lfr** | `float` | `0.0` | Low‑frequency decay time. |
| **echo_delay** | `float` | `0.0` | Delay time for the echo. |
| **echo_feedback** | `float` | `0.0` | Feedback amount for the echo. |
| **echo_lpf** | `float` | `0.0` | Low‑pass filter on echo. |
| **low_pass_cutoff** | `float` | `22000.0` | Low‑pass cutoff for the reverb. |
| **high_pass_cutoff** | `float` | `20.0` | High‑pass cutoff for the reverb. |

*(The list above is representative; consult the full API reference for all available properties.)*

---

## Methods

| Method | Return | Description |
|--------|--------|-------------|
| `set_room_size(size: float) → void` | | Sets the room size. |
| `get_room_size() → float` | | Retrieves the room size. |
| `set_damping(damping: float) → void` | | Sets the damping. |
| `get_damping() → float` | | Retrieves the damping. |
| `set_wet(level: float) → void` | | Sets wet‑signal level. |
| `get_wet() → float` | | Retrieves wet‑signal level. |
| `set_dry(level: float) → void` | | Sets dry‑signal level. |
| `get_dry() → float` | | Retrieves dry‑signal level. |
| `set_width(width: float) → void` | | Sets stereo width. |
| `get_width() → float` | | Retrieves stereo width. |
| `set_level(level: float) → void` | | Sets overall effect level. |
| `get_level() → float` | | Retrieves overall effect level. |
| `set_freeze(freeze: bool) → void` | | Enables or disables freeze mode. |
| `is_freeze() → bool` | | Returns freeze status. |
| `set_decay_hfr(time: float) → void` | | Sets high‑frequency decay. |
| `get_decay_hfr() → float` | | Retrieves high‑frequency decay. |
| `set_decay_lfr(time: float) → void` | | Sets low‑frequency decay. |
| `get_decay_lfr() → float` | | Retrieves low‑frequency decay. |
| `set_echo_delay(time: float) → void` | | Sets echo delay. |
| `get_echo_delay() → float` | | Retrieves echo delay. |
| `set_echo_feedback(feedback: float) → void` | | Sets echo feedback. |
| `get_echo_feedback() → float` | | Retrieves echo feedback. |
| `set_echo_lpf(cutoff: float) → void` | | Sets echo low‑pass cutoff. |
| `get_echo_lpf() → float` | | Retrieves echo low‑pass cutoff. |
| `set_low_pass_cutoff(cutoff: float) → void` | | Sets overall low‑pass cutoff. |
| `get_low_pass_cutoff() → float` | | Retrieves overall low‑pass cutoff. |
| `set_high_pass_cutoff(cutoff: float) → void` | | Sets overall high‑pass cutoff. |
| `get_high_pass_cutoff() → float` | | Retrieves overall high‑pass cutoff. |

---

## Example Usage

```gdscript
# Create a new reverb effect and add it to the AudioServer
var reverb = AudioEffectReverb.new()
reverb.room_size = 6.0
reverb.damping = 0.7
reverb.wet = 0.4
reverb.dry = 0.9
AudioServer.bus_set_effect(0, 0, reverb)  # Apply to bus 0, effect slot 0
```

---

## Related Resources
- [AudioServer](../class_audioserver.html)
- [AudioEffect](../class_audioeffect.html)
- [AudioEffectReverbPreset](../class_audioeffectreverbpreset.html)

---