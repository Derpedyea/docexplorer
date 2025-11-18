**AudioEffectPitchShift**  
*Godot Engine – class reference (stable)*  

---  

### Inheritance  
`AudioEffectPitchShift` inherits from `AudioEffect`, which in turn inherits from `Resource` → `RefCounted` → `Object`.

### Description  
Adds a pitch‑shifting audio effect to an audio bus.  
Raises or lowers the pitch of the original sound without changing its playback speed.  
Use it to create effects such as a “chip‑munk” voice, slow‑motion audio, or musical pitch modulation.

---

## Properties  

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `pitch_scale` | `float` | `1.0` | The factor by which the pitch is multiplied. `1.0` is the original pitch. Values > 1 shift the audio up; values < 1 shift it down. |
| `enabled` | `bool` | `true` | Enables or disables the effect. Inherited from `AudioEffect`. |

*(Both properties are exported, so they appear in the Inspector.)*

---

## Methods  

| Method | Return type | Parameters | Description |
|--------|------------|------------|-------------|
| `get_pitch_scale()` | `float` | – | Returns the current pitch scale. |
| `set_pitch_scale(pitch_scale: float)` | `void` | `pitch_scale` | Sets the pitch scale. |
| `get_enabled()` | `bool` | – | Returns whether the effect is enabled. |
| `set_enabled(enable: bool)` | `void` | `enable` | Enables or disables the effect. |
| `get_class_name()` | `String` | – | Returns `"AudioEffectPitchShift"`. |

*Note: The `enabled` methods are inherited from `AudioEffect` but can be overridden to expose the property in the editor.*

---

## Example – Adding the Effect to a Bus  

```gdscript
# Assuming you already have an AudioServer and a bus index
var bus_idx = AudioServer.get_bus_index("Master")

# Create the effect
var pitch_shift = AudioEffectPitchShift.new()

# Add it to the bus
AudioServer.add_bus_effect(bus_idx, pitch_shift)

# Set the pitch (e.g., 1.5× higher)
pitch_shift.pitch_scale = 1.5
```

You can also adjust `pitch_scale` at runtime to create dynamic pitch‑shifted audio (e.g., for a “slow‑motion” effect).

---

## Signals  

`AudioEffectPitchShift` does **not** emit any custom signals.

--- 

### Related Classes  
- [`AudioEffectReverb`](../classes/class_audioeffectreverb.html) – Adds reverberation to a bus.  
- [`AudioEffectEcho`](../classes/class_audioeffectecho.html) – Adds echo to a bus.  

---  

### Quick Reference

| Feature | Access |
|---------|--------|
| Pitch scale | `audio_effect.pitch_scale` |
| Enable/disable | `audio_effect.enabled` |
| Add to bus | `AudioServer.add_bus_effect(bus_index, audio_effect)` |

Use the inspector or script to tweak these properties during gameplay or in the editor.