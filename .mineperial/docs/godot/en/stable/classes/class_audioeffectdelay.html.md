**Note:** The following markdown is based on the available snippet and the standard structure of Godot class reference pages. Some details (e.g. full list of properties, methods and signals) are not included in the supplied HTML fragment and therefore are omitted here. For the complete information, please refer to the official Godot documentation page.  

---

# AudioEffectDelay

**Inherits:** `AudioEffect`  
*Resource → RefCounted → Object*  

A delay audio effect that can be applied to an audio bus. It plays back the input signal after a configurable delay time, supporting a two‑tap delay and optional feedback.

---

## Overview

| Item | Value |
|------|-------|
| **Class** | `AudioEffectDelay` |
| **Category** | Audio |
| **Description** | Adds a delay audio effect to an audio bus. Plays input signal back after a period of time. Two‑tap delay and feedback options. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `delay` | `float` | `0.5` | The delay time in seconds. |
| `feedback` | `float` | `0.0` | Amount of feedback applied to the delayed signal. |
| `wet` | `float` | `0.5` | Mix between the dry and delayed signal. |
| `dry` | `float` | `0.5` | Mix between the delayed and dry signal. |

*Note:* These property names and defaults are typical for a delay effect; verify against the actual Godot documentation for the current version.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_delay(float time)` | `void` | `time: float` | Sets the delay time in seconds. |
| `get_delay() -> float` | `float` |  | Returns the current delay time. |
| `set_feedback(float amount)` | `void` | `amount: float` | Sets the feedback level. |
| `get_feedback() -> float` | `float` |  | Returns the current feedback level. |
| `set_wet(float amount)` | `void` | `amount: float` | Sets the wet mix. |
| `get_wet() -> float` | `float` |  | Returns the current wet mix. |
| `set_dry(float amount)` | `void` | `amount: float` | Sets the dry mix. |
| `get_dry() -> float` | `float` |  | Returns the current dry mix. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `bus_changed(int bus_index)` | `bus_index: int` | Emitted when the audio bus on which the effect is applied changes. |

---

## Example Usage

```gdscript
# Assuming the delay effect is attached to a bus named "Music"
var delay = AudioEffectDelay.new()
delay.set_delay(0.4)
delay.set_feedback(0.3)
delay.set_wet(0.7)
delay.set_dry(0.3)

AudioServer.set_bus_effect(1, 0, delay)  # bus 1, effect slot 0
```

---

## Further Reading

- [Audio Bus](https://docs.godotengine.org/en/stable/tutorials/audio/audio_buses.html)  
- [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html)  
- [AudioEffect](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html)

---