# AudioEffectCompressor

> **Class** – `AudioEffectCompressor` (inherits from `AudioEffect`)

Adds a compressor audio effect to an audio bus.  It reduces sounds that exceed a certain
threshold level, smooths out the dynamics and increases the overall loudness
without making the audio sound distorted.  The compressor is useful for
normalising the output of a music track or for making a voice‑chat signal
more consistent.

---

## Properties

| Name          | Type   | Default | Description |
|---------------|--------|---------|-------------|
| **threshold** | `float` | `-30.0` | Threshold level (dBFS).  Signals above this level will be compressed. |
| **ratio**     | `float` | `4.0`   | Compression ratio.  Higher values produce a stronger compression effect. |
| **attack**    | `float` | `0.01`  | Attack time (seconds).  How quickly the compressor reacts to signals above the threshold. |
| **release**   | `float` | `0.1`   | Release time (seconds).  How quickly the compressor stops affecting the signal after it falls below the threshold. |
| **knee**      | `float` | `0.0`   | Knee width (dB).  A softer knee makes the transition around the threshold smoother. |
| **makeup_gain** | `float` | `0.0` | Makeup gain (dB) added after compression to compensate for the level reduction. |
| **bypass**    | `bool`  | `false` | If `true`, the compressor is bypassed and the input signal passes through unchanged. |
| **enabled**   | `bool`  | `true`  | If `false`, the effect is disabled. |

---

## Functions

| Function | Description |
|----------|-------------|
| `set_threshold(float value)` | Set the threshold level (dBFS). |
| `float get_threshold() const` | Get the current threshold level. |
| `set_ratio(float value)` | Set the compression ratio. |
| `float get_ratio() const` | Get the current ratio. |
| `set_attack(float value)` | Set the attack time (seconds). |
| `float get_attack() const` | Get the attack time. |
| `set_release(float value)` | Set the release time (seconds). |
| `float get_release() const` | Get the release time. |
| `set_knee(float value)` | Set the knee width (dB). |
| `float get_knee() const` | Get the knee width. |
| `set_makeup_gain(float value)` | Set the makeup gain (dB). |
| `float get_makeup_gain() const` | Get the makeup gain. |
| `set_bypass(bool enabled)` | Enable or disable the bypass. |
| `bool is_bypassed() const` | Returns whether the effect is bypassed. |
| `set_enabled(bool enabled)` | Enable or disable the compressor effect. |
| `bool is_enabled() const` | Returns whether the effect is enabled. |

> **Note:** All setter functions immediately affect the audio output.  The values are clamped to reasonable ranges internally (e.g., attack and release times are always positive).

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when any of the compressor parameters change. |

---

## Example Usage

```gdscript
# Assuming you have an AudioEffectCompressor instance in the bus layout
var compressor := AudioEffectCompressor.new()

# Configure basic parameters
compressor.threshold = -20.0
compressor.ratio = 3.0
compressor.attack = 0.05
compressor.release = 0.15
compressor.knee = 1.0
compressor.makeup_gain = 4.0

# Add it to the audio bus
AudioServer.set_bus_effect(0, 0, compressor)   # Bus 0, first effect slot
```

The compressor will now process audio on the specified bus.

---

## Related Classes

- `AudioEffectReverb`
- `AudioEffectDelay`
- `AudioEffectEcho`

---

**Reference**: <https://docs.godotengine.org/en/stable/classes/class_audioeffectcompressor.html>