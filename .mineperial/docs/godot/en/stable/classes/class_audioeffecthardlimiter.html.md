# AudioEffectHardLimiter

**Inherits:** `AudioEffect`

Adds a hard‑limiter audio effect to an audio bus.

> A limiter is an effect designed to prevent a signal from exceeding a specified threshold. When the signal tries to go above the threshold the limiter reduces the signal immediately (hard limiting) so that the output stays within the desired level.

---

## Properties

| Name      | Type   | Description |
|-----------|--------|-------------|
| `enabled` | `bool` | Enables or disables the limiter. |
| `threshold` | `float` | The threshold level in dB (default = −1 dB). |
| `ratio` | `float` | The compression ratio used for the limiter (default = 10.0). |
| `attack` | `float` | Attack time in milliseconds (default = 10 ms). |
| `release` | `float` | Release time in milliseconds (default = 100 ms). |

---

## Signals

None.

---

## Methods

| Method | Description |
|--------|-------------|
| `set_enabled(enable: bool)` | Enables or disables the limiter. |
| `is_enabled() -> bool` | Returns whether the limiter is currently enabled. |
| `set_threshold(threshold_db: float)` | Sets the threshold in decibels. |
| `get_threshold() -> float` | Returns the current threshold value. |
| `set_ratio(ratio: float)` | Sets the compression ratio. |
| `get_ratio() -> float` | Returns the compression ratio. |
| `set_attack(ms: float)` | Sets the attack time (ms). |
| `get_attack() -> float` | Returns the attack time. |
| `set_release(ms: float)` | Sets the release time (ms). |
| `get_release() -> float` | Returns the release time. |

> *Note:* These methods are exposed through Godot’s property system, so they can also be accessed/edited directly in the Inspector.

---

## Usage Example

```gdscript
# Add a limiter to the "Master" bus
var bus_index = AudioServer.get_bus_index("Master")
var limiter = AudioEffectHardLimiter.new()
AudioServer.add_bus_effect(bus_index, limiter, 0)  # add at priority 0

# Configure the limiter
limiter.threshold = -0.5
limiter.ratio = 4
limiter.attack = 5
limiter.release = 80
```

---

## Documentation Links

- [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html)
- [AudioEffect](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html)

---