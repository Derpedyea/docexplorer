**InputEventMIDI**  
=================================

`InputEventMIDI` is a class in the Godot Engine that represents a MIDI message from a MIDI device (e.g., a musical keyboard). It inherits from `InputEvent`, which in turn derives from `Resource` → `RefCounted`.

---

## Overview

- **Purpose**: Store and provide information about MIDI messages such as note events, control changes, pitch bends, etc.
- **Typical Use**: Capture and process MIDI input in a Godot project, for example in a music or rhythm game, or for controlling other in‑game parameters via a MIDI controller.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `channel` | `int` | The MIDI channel (0‑15) on which the event was received. |
| `control` | `int` | For control change messages, the controller number (0‑127). |
| `data1` | `int` | The first data byte of the MIDI message (e.g., note number or control value). |
| `data2` | `int` | The second data byte of the MIDI message (e.g., velocity or second control value). |
| `message_type` | `int` | The type of the MIDI message (e.g., `NOTE_ON`, `NOTE_OFF`, `CONTROL_CHANGE`, etc.). |
| `is_valid` | `bool` | Indicates whether the stored MIDI event is valid. |
| `timestamp` | `int` | Timestamp (in milliseconds) when the message was received. |

> *Note:* The exact enumeration values for `message_type` correspond to the MIDI message constants defined in Godot’s `Midi` module.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `from_raw_data(data: PackedByteArray) -> void` | `void` | `data` | Parses raw MIDI data bytes into the event’s properties. |
| `is_note_on() -> bool` | `bool` | – | Returns `true` if the message is a `NOTE_ON`. |
| `is_note_off() -> bool` | `bool` | – | Returns `true` if the message is a `NOTE_OFF`. |
| `is_control_change() -> bool` | `bool` | – | Returns `true` if the message is a `CONTROL_CHANGE`. |
| `to_string() -> String` | `String` | – | Returns a human‑readable string representation of the event. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `midi_event_received` | `event: InputEventMIDI` | Emitted when a new MIDI event is captured. |

---

## Example: Listening to MIDI Input

```gdscript
# In a script attached to an Node that receives input
func _input(event):
    if event is InputEventMIDI:
        print("MIDI Event: ", event.to_string())
        if event.is_note_on():
            _handle_note_on(event.data1, event.data2)
```

---

## Related Classes

- [InputEvent](../classes/class_inputevent.html) – Base class for all input events.
- [Midi](../classes/class_midi.html) – Helper class for working with MIDI data and devices.

---

*For the full API reference, consult the official Godot Engine documentation: <https://docs.godotengine.org/en/stable/classes/class_inputeventmidi.html>*