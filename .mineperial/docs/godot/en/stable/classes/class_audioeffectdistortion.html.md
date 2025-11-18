**AudioEffectDistortion** – Godot Engine (stable) documentation
==============================================================

This page is a class reference for the `AudioEffectDistortion` resource.  
It explains the purpose of the effect, its properties, methods, and signals.

---

## Inheritance

```text
AudioEffectDistortion  ←  AudioEffect  ←  Resource  ←  RefCounted  ←  Object
```

---

## Summary

Adds a distortion audio effect to an audio bus.  
The effect modifies the sound to create a distorted or “clipped” output.  
The class exposes several configurable parameters that control the distortion type,
drive strength, and mixing options.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `drive` | `float` | `1.0` | Determines the amount of signal drive before clipping. |
| `mix` | `float` | `1.0` | The dry/wet mix of the effect. |
| `type` | `int` (enum) | `0` | Distortion type (`CLIP`, `DEAD_BAND`, …). |

> **Note**: The full list of enumeration values for `type` is available in the
> Godot editor’s inspector for this resource.

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `set_drive(float amount)` | `void` | Sets the drive level. |
| `get_drive()` | `float` | Returns the current drive level. |
| `set_mix(float amount)` | `void` | Sets the dry/wet mix. |
| `get_mix()` | `float` | Returns the current mix value. |
| `set_type(int type)` | `void` | Sets the distortion type. |
| `get_type()` | `int` | Returns the current distortion type. |

---

## Signals

> None

---

## Usage example

```gdscript
# Create a new distortion effect
var distortion = AudioEffectDistortion.new()
distortion.drive = 2.5
distortion.mix = 0.8
distortion.type = AudioEffectDistortion.TYPE_CLIP

# Attach the effect to an AudioServer bus
AudioServer.add_bus_effect(0, distortion)
```

---

### Related Classes

* [AudioEffect](../classes/class_audioeffect.html)
* [AudioBus](../classes/class_audiobus.html)

---

For the complete API reference, including all properties, methods, and signals, visit the official Godot documentation page:  
[https://docs.godotengine.org/en/stable/classes/class_audioeffectdistortion.html](https://docs.godotengine.org/en/stable/classes/class_audioeffectdistortion.html)