# AudioEffectPhaser

**Inherits:** `AudioEffect`

Adds a phaser audio effect to an audio bus.  
A phaser combines the original signal with a copy that is slightly out‑of‑phase with the original. The resulting audio is a characteristic sweep‑like effect often used in music production.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mix` | `float` | `0.5` | The dry/wet mix of the effect. `0.0` is full dry (no effect), `1.0` is full wet (only the effect). |
| `rate` | `float` | `1.0` | Modulation rate in Hz. Higher values produce a faster sweep. |
| `depth` | `float` | `0.5` | Depth of the modulation. Determines how far the phase shift deviates. |
| `feedback` | `float` | `0.0` | Feedback amount. Can be negative or positive. |
| `stages` | `int` | `4` | Number of all‑pass filter stages. More stages give a richer, more pronounced effect. |
| `width` | `float` | `0.5` | Stereo width. `0.0` is mono, `1.0` is full stereo. |

---

## Methods

| Method | Description |
|--------|-------------|
| `get_mix() -> float` | Returns the current mix value. |
| `set_mix(value: float)` | Sets the mix value. |
| `get_rate() -> float` | Returns the current modulation rate. |
| `set_rate(value: float)` | Sets the modulation rate. |
| `get_depth() -> float` | Returns the current modulation depth. |
| `set_depth(value: float)` | Sets the modulation depth. |
| `get_feedback() -> float` | Returns the current feedback amount. |
| `set_feedback(value: float)` | Sets the feedback amount. |
| `get_stages() -> int` | Returns the number of all‑pass filter stages. |
| `set_stages(value: int)` | Sets the number of stages. |
| `get_width() -> float` | Returns the current stereo width. |
| `set_width(value: float)` | Sets the stereo width. |

---

## Usage

```gdscript
# Create a phaser effect and add it to a bus
var phaser = AudioEffectPhaser.new()
AudioServer.add_bus_effect(0, phaser)

# Adjust parameters
phaser.mix = 0.7
phaser.rate = 2.0
phaser.depth = 0.8
phaser.feedback = 0.3
phaser.stages = 6
phaser.width = 0.9
```

---

## See Also

* [AudioEffect](../class_audioeffect.html) – Base class for all audio bus effects.  
* [AudioEffectFilter](../class_audioeffectfilter.html) – General filter effect.  
* [AudioEffectChorus](../class_audioeffectchorus.html) – Chorus effect.  
* [AudioEffectDelay](../class_audioeffectdelay.html) – Delay effect.  

---