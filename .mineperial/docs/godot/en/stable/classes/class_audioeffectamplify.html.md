**Note:** The original HTML page contains the full class reference for `AudioEffectAmplify`.  
Below is a cleaned‑up Markdown representation of the most important parts of that page.  
Feel free to adjust the property names or values if you have a more recent or specific version of the Godot documentation.

---

# AudioEffectAmplify

> **Godot Engine 4.x class reference** – Adds an amplifying audio effect to an audio bus.  
> It increases or decreases the volume being routed through the audio bus.

---

## Inherits
- `AudioEffect`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `gain_db` | `float` | `0.0` | The amplification factor expressed in decibels. Positive values boost the signal, negative values attenuate it. |
| `enabled` | `bool` | `true` | Whether the effect is currently active. |

> *All properties are exposed to the editor and can be changed at runtime via GDScript or C++.*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_gain_db(float db)` | `void` | Sets the amplification in dB. |
| `get_gain_db()` | `float` | Returns the current amplification in dB. |
| `set_enabled(bool enable)` | `void` | Enables or disables the effect. |
| `is_enabled()` | `bool` | Returns whether the effect is active. |

> *No additional methods are required for typical use; the effect is usually configured in the Audio bus panel.*

---

## Signals

*None.*

---

## Example usage (GDScript)

```gdscript
# Create an AudioEffectAmplify instance and add it to a bus
var amplify = AudioEffectAmplify.new()
var bus_index = AudioServer.get_bus_index("Master")
AudioServer.add_bus_effect(bus_index, amplify)

# Set amplification to +6 dB (double the volume)
amplify.set_gain_db(6.0)
```

---

## Related documentation

- [AudioServer](https://docs.godotengine.org/en/stable/classes/class_audioserver.html) – The global audio manager.
- [AudioEffect](https://docs.godotengine.org/en/stable/classes/class_audioeffect.html) – Base class for all audio bus effects.
- [Audio bus tutorial](https://docs.godotengine.org/en/stable/tutorials/audio/bus_system.html)

---

**Tip:** When you need to temporarily mute a bus, you can set the gain to a large negative value (e.g., `-80.0` dB) or disable the effect entirely with `set_enabled(false)`.

---