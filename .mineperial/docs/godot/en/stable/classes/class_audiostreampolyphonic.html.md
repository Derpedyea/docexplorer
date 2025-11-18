# AudioStreamPolyphonic

**Inherits:** `AudioStream`  

---

## Description

`AudioStreamPolyphonic` is an audio stream that allows the user to play multiple custom sound streams simultaneously from code, using a single audio player. This is useful for polyphonic audio playback (e.g., music with multiple tracks, sound effects layered over background music, or real‑time synthesized audio).

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `max_polyphony` | `int` | `-1` (unlimited) | The maximum number of simultaneous voices that can play. Setting `-1` allows unlimited voices. |
| `stream` | `AudioStream` | `null` | The underlying audio stream resource. |
| `volume_db` | `float` | `0.0` | Volume in decibels. |
| `pitch_scale` | `float` | `1.0` | Pitch scale multiplier. |
| `loop` | `bool` | `false` | Whether to loop the stream. |
| `stream_position` | `float` | `0.0` | Current position of the stream in seconds. |
| `stream_length` | `float` | `0.0` | Length of the stream in seconds. |

*(Note: The actual Godot API may expose additional internal properties not listed here.)*

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `play()` | `void` | `-` | Starts playback of the stream. |
| `stop()` | `void` | `-` | Stops playback. |
| `is_playing()` | `bool` | `-` | Returns whether the stream is currently playing. |
| `get_position()` | `float` | `-` | Returns the current playback position in seconds. |
| `seek(position)` | `void` | `position: float` | Seeks to a specific position in the stream. |
| `set_stream(stream)` | `void` | `stream: AudioStream` | Assigns a new audio stream resource. |
| `get_stream()` | `AudioStream` | `-` | Retrieves the current audio stream resource. |
| `set_max_polyphony(count)` | `void` | `count: int` | Sets the maximum number of simultaneous voices. |
| `get_max_polyphony()` | `int` | `-` | Returns the current max polyphony setting. |
| `set_pitch_scale(scale)` | `void` | `scale: float` | Adjusts the pitch scale. |
| `get_pitch_scale()` | `float` | `-` | Retrieves the current pitch scale. |
| `set_volume_db(volume)` | `void` | `volume: float` | Sets the volume in decibels. |
| `get_volume_db()` | `float` | `-` | Retrieves the current volume in decibels. |
| `set_loop(loop)` | `void` | `loop: bool` | Enables or disables looping. |
| `get_loop()` | `bool` | `-` | Checks whether looping is enabled. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `finished()` | `void` | Emitted when the stream reaches its end and stops (if not looping). |

---

## Usage Example

```gdscript
var polyphonic := AudioStreamPolyphonic.new()
polyphonic.set_stream(preload("res://sounds/music.ogg"))
polyphonic.set_max_polyphony(4)   # Allow up to 4 overlapping voices
polyphonic.play()
```

---

> **Note**: This reference is based on the stable Godot 4.x API. Always refer to the official documentation for the most up-to-date information.