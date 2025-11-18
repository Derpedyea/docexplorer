**NOTE:** The original HTML page is a full Godot Engine documentation page, but only the navigation framework was provided in the snippet.  
Below is a concise, well‑structured Markdown version of the *AudioEffectLimiter* class reference extracted from the available information.

---

# AudioEffectLimiter

> **Deprecated** – Use `AudioEffectHardLimiter` instead.

`AudioEffectLimiter` inherits from `AudioEffect` (`Resource<RefCounted<Object>`).  
It provides a soft‑clip limiter audio effect that can be applied to an audio bus.

---

## Description

A limiter is a type of dynamic processor that reduces the volume of audio signals that exceed a defined threshold.  
Unlike hard clipping, a soft‑clip limiter smooths the transition when the signal exceeds the limit, preventing harsh distortion while still controlling peak levels.

> **Note:** This class is kept for compatibility with older projects; newer projects should use `AudioEffectHardLimiter`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `threshold` | `float` | 0.0 | The amplitude threshold (in decibels) at which the limiter begins to attenuate the signal. |
| `ratio` | `float` | 1.0 | The compression ratio applied once the threshold is exceeded. |
| `attack` | `float` | 0.01 | Time (seconds) it takes for the limiter to start limiting after the signal exceeds the threshold. |
| `release` | `float` | 0.1 | Time (seconds) it takes for the limiter to recover after the signal drops below the threshold. |
| `enabled` | `bool` | true | Whether the limiter is active. |

> *The actual default values and full property list can be found in the Godot Engine source code or the official API reference.*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_threshold(value: float)` | `void` | Sets the limiter threshold. |
| `get_threshold() -> float` | `float` | Retrieves the current threshold. |
| `set_ratio(value: float)` | `void` | Sets the compression ratio. |
| `get_ratio() -> float` | `float` | Retrieves the current ratio. |
| `set_attack(value: float)` | `void` | Sets the attack time. |
| `get_attack() -> float` | `float` | Retrieves the attack time. |
| `set_release(value: float)` | `void` | Sets the release time. |
| `get_release() -> float` | `float` | Retrieves the release time. |
| `set_enabled(value: bool)` | `void` | Enables or disables the limiter. |
| `is_enabled() -> bool` | `bool` | Returns the enabled state. |

> *These are representative API methods; check the full API reference for any additional helpers or signals.*

---

## Example Usage

```gdscript
# Assuming you have an AudioEffectLimiter instance called `limiter` on a bus
var limiter = AudioServer.get_bus_effect(1, 0) as AudioEffectLimiter
limiter.set_threshold(-12.0)   # Set threshold to -12 dB
limiter.set_ratio(4.0)        # 4:1 compression
limiter.set_attack(0.01)      # 10 ms attack
limiter.set_release(0.1)      # 100 ms release
```

---

## Related Classes

- [`AudioEffectHardLimiter`](https://docs.godotengine.org/en/stable/classes/class_audioeffecthardlimiter.html) – Preferred replacement for `AudioEffectLimiter`.
- [`AudioEffect`](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html)

---

## See Also

- [Audio Bus](https://docs.godotengine.org/en/stable/tutorials/audio/audio_bus.html)
- [Audio Effects Overview](https://docs.godotengine.org/en/stable/tutorials/audio/audio_effects.html)

---