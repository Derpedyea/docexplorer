**AudioEffect**  
*Godot Engine – Class Reference*  
<https://docs.godotengine.org/en/stable/classes/class_audioeffect.html>

---

## Overview

`AudioEffect` is a base class for all audio processing effects in Godot.  
It is a `Resource` that is stored on the audio bus layout and can be used to
alter audio signals in a variety of ways (amplification, distortion,
reverb, etc.).

```
Inheritance tree
└── Resource
    └── RefCounted
        └── Object
            └── AudioEffect
```

### Inherited By

| Class | Description |
|-------|-------------|
| `AudioEffectAmplify` | Amplifies audio signal |
| `AudioEffectCapture` | Captures audio from a bus |
| `AudioEffectChorus` | Adds chorus effect |
| `AudioEffectCompressor` | Compresses dynamic range |
| `AudioEffectDelay` | Adds delay/reverb |
| `AudioEffectDistortion` | Applies distortion |
| `AudioEffectEQ` | Equalizer for 7 bands |
| `AudioEffectFilter` | Low‑pass/high‑pass filter |
| `AudioEffectReverb` | Reverberation effect |
| `AudioEffectWahWah` | Wah‑wah filter |

> **Note:** The full list of subclasses is available in the [class index](/classes/).

---

## Documentation Structure

The Godot API reference pages follow a consistent structure:

1. **Class Description** – Brief overview of purpose and usage.
2. **Signals** – Signals emitted by the class.
3. **Properties** – List of exposed properties with getters/setters.
4. **Methods** – Public methods, with signatures and brief descriptions.
5. **Inheritance** – Visual tree or textual representation.

---

## Using `AudioEffect`

1. **Create an instance** (either in code or via the editor's Audio Bus Layout):
   ```gdscript
   var eq = AudioEffectEQ.new()
   ```
2. **Configure properties**:
   ```gdscript
   eq.set_band_gain(0, 3.0)  # Boost first band by 3 dB
   ```
3. **Attach to an audio bus**:
   ```gdscript
   AudioServer.set_bus_effect(0, 0, eq)  # bus 0, effect 0
   ```

---

## See Also

- [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html) – Controls bus layout and routing.
- [AudioEffectCapture](https://docs.godotengine.org/en/stable/classes/class_audioeffectcapture.html)
- [AudioEffectReverb](https://docs.godotengine.org/en/stable/classes/class_audioeffectreverb.html)

---

*For detailed property and method tables, consult the full class page in the Godot documentation.*