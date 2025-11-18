**AudioEffectChorus**

> *Adds a chorus audio effect to an audio bus.*

---

### Inheritance
```
AudioEffectChorus ← AudioEffect ← Resource ← RefCounted ← Object
```

---

## Description
The `AudioEffectChorus` class implements a chorus filter.  
The effect simulates multiple copies of a signal that are slightly delayed and
frequency‑modulated, creating a thicker, “chorused” sound.  
It works by generating a set of delayed voices that are modulated over time
using a low‑frequency oscillator.

---

## Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| `rate`   | `float`| 1.5     | Modulation rate in Hz. |
| `depth`  | `float`| 0.002   | Modulation depth in seconds (delay). |
| `count`  | `int`  | 3       | Number of voices (chorus layers). |
| `dry`    | `float`| 0.5     | Dry mix (unprocessed signal). |
| `wet`    | `float`| 0.5     | Wet mix (processed signal). |
| `phase`  | `float`| 0.0     | Phase offset for the LFO (0 – 1). |
| `feedback` | `float` | 0.0  | Amount of output fed back into the input. |

> All values can be adjusted at runtime via the editor or scripting.

---

## Signals
None.

---

## Example Usage (GDScript)

```gdscript
# Assume you have an AudioEffectChorus instance attached to an AudioBus
var chorus : AudioEffectChorus = AudioServer.get_bus_effect(2, 0) as AudioEffectChorus

# Tune the chorus
chorus.rate = 1.2
chorus.depth = 0.003
chorus.count = 4
chorus.dry = 0.4
chorus.wet = 0.6
chorus.phase = 0.5
```

---

## API Reference

### Properties (Get/Set)

```gdscript
var rate : float
var depth : float
var count : int
var dry : float
var wet : float
var phase : float
var feedback : float
```

---

### Methods

> All methods are inherited from `AudioEffect`; no additional public methods are exposed.

---

### Related Classes

- [AudioEffectEcho](../class_audiobeffectecho.html) – Adds echo.
- [AudioEffectReverb](../class_audiobeffectreverb.html) – Adds reverb.
- [AudioEffectLowPassFilter](../class_audiobeffectlowpassfilter.html) – Adds a low‑pass filter.

---