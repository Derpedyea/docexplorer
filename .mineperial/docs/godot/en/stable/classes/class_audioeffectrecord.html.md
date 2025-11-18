**AudioEffectRecord**  
=====================

`AudioEffectRecord` is a Godot audio effect that records the sound coming from an audio bus.

> **Inherits:** `AudioEffect`

---

## Overview

* **Purpose** – Capture audio from an audio bus into a buffer that can be saved or processed.
* **Typical usage** – Add this effect to a bus, enable recording, and later retrieve the audio data for export or analysis.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `recording` | `bool` | `false` | Whether recording is currently active. |
| `buffer_size` | `int` | `0` | Size of the internal buffer in samples. |
| `buffer_length` | `int` | `0` | Maximum length of the buffer in seconds. |

> *Note:* The buffer automatically expands to hold the recorded audio up to the specified length.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_recording` | `func set_recording(enable: bool)` | Start or stop recording. |
| `is_recording` | `func is_recording() -> bool` | Returns the current recording state. |
| `set_buffer_size` | `func set_buffer_size(size: int)` | Set the buffer size in samples. |
| `get_buffer_size` | `func get_buffer_size() -> int` | Get the current buffer size. |
| `set_buffer_length` | `func set_buffer_length(length: int)` | Set the maximum recording length (seconds). |
| `get_buffer_length` | `func get_buffer_length() -> int` | Get the maximum recording length. |
| `get_record_buffer` | `func get_record_buffer() -> PackedByteArray` | Retrieve the recorded audio as a byte array. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `recorded` | Emitted when a recording session has finished and the buffer is ready. |

---

## Example

```gdscript
# Enable recording on a bus named "Master"
var bus_index = AudioServer.get_bus_index("Master")
var record_effect = AudioServer.get_bus_effect(bus_index, 0) as AudioEffectRecord

record_effect.set_recording(true)
# ... do some audio playback ...
record_effect.set_recording(false)

var audio_data = record_effect.get_record_buffer()
# `audio_data` now contains raw PCM samples that can be saved to a file.
```

---

## Notes

* Recording is performed on a per‑bus basis; each bus can have at most one `AudioEffectRecord`.
* The recorded data is stored in a `PackedByteArray` of signed 16‑bit PCM samples at the engine’s default sample rate (currently 48 kHz).
* The effect does not alter the audio output; it only captures a copy.

---

For more detailed information, see the official Godot documentation page:  
[AudioEffectRecord – Godot Docs](https://docs.godotengine.org/en/stable/classes/class_audioeffectrecord.html)