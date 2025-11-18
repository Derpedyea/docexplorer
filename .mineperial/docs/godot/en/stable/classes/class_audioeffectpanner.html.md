**AudioEffectPanner** – Godot Engine Documentation (Stable)  
===========================================================

> **Class**: `AudioEffectPanner`  
> **Inherits**: `AudioEffect` → `Resource` → `RefCounted` → `Object`  
> **Description**: Adds a panner audio effect to an audio bus. It allows you to pan a sound left or right in a stereo mix. The panner controls how much of an audio signal is sent to each channel of the output.

---

## Overview

`AudioEffectPanner` is a simple, single‑parameter effect that can be applied to any audio bus in Godot’s AudioServer.  It is useful for spatialising sounds in 2‑D or 3‑D environments where you want to simulate a source that is off‑center.

---

## Properties

| Property | Type   | Default | Notes |
|----------|--------|---------|-------|
| `pan` | `float` | `0.0` | Range `-1.0` (full left) → `1.0` (full right). Values outside this range are clamped. |

> **Tip** – In the editor you can change `pan` using a slider in the AudioBus’s inspector.

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `get_pan()` | `float` | – | Returns the current panning value. |
| `set_pan(pan: float)` | `void` | `pan` | Sets the panning value. The value is clamped to the `-1.0 … 1.0` range. |

> **Note** – The effect is processed in real time, so calling `set_pan()` will immediately affect any audio routed through the bus.

---

## Example

```gdscript
# Get the audio bus that contains the sound you want to pan.
var bus_index = AudioServer.get_bus_index("Music")

# Create a new panner effect.
var panner = AudioEffectPanner.new()
panner.set_pan(-0.3)          # 30% left

# Add it to the bus.
AudioServer.add_effect(bus_index, panner)
```

In the editor you can also drag a `AudioEffectPanner` from the *AudioBus* panel into the bus’s effect list and adjust its `pan` slider.

---

## Related Classes

- [AudioEffect](../classes/class_audioeffect.html) – Base class for all audio effects.  
- [AudioEffectReverb](../classes/class_audioeffectreverb.html) – Add reverb to a bus.  
- [AudioEffectEcho](../classes/class_audioeffectecho.html) – Add echo to a bus.  

---

## Further Reading

- **Audio Server** – [AudioServer](../classes/class_audioserver.html)  
- **Audio Buses** – How to manage audio buses in the editor.  
- **Audio Spatialization** – For 3‑D panning and positional audio.  

---