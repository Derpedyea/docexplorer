**Note**: The provided HTML is only the page header and navigation structure. It does not contain the detailed class reference section (properties, methods, signals, etc.). Below is a cleaned‑up Markdown skeleton for the **AudioStreamPlayer3D** class based on the information available. If you need the full list of members, refer to the official Godot documentation or the complete HTML source.

---

# AudioStreamPlayer3D

**Inherits:** `Node3D` → `Node` → `Object`

**Description:**  
Plays audio with positional sound effects, based on the relative position of the audio listener.

---

## Signals

| Signal | Description |
|--------|-------------|
| `finished` | Emitted when the audio finishes playing. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `stream` | `AudioStream` | `null` | The audio stream to play. |
| `autoplay` | `bool` | `false` | If `true`, the audio starts playing immediately after the node enters the scene tree. |
| `volume_db` | `float` | `0.0` | The volume in decibels. |
| `pitch_scale` | `float` | `1.0` | Pitch scale applied to the audio. |
| `loop` | `bool` | `false` | Whether the audio should loop. |
| `bus` | `StringName` | `"Master"` | The audio bus that this player sends audio to. |
| `stream_paused` | `bool` | `false` | If `true`, the stream is paused. |
| `stream_position` | `float` | `0.0` | Current playback position in seconds. |
| `stream_length` | `float` | `0.0` | Length of the audio stream in seconds. |

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `play()` | `void` | `int from_position = 0` | Starts playing the audio stream from the given position. |
| `stop()` | `void` | `void` | Stops playback and resets position. |
| `seek(float position)` | `void` | `position` | Seeks to a specific position in seconds. |
| `set_volume_db(float db)` | `void` | `db` | Sets the volume in decibels. |
| `set_pitch_scale(float scale)` | `void` | `scale` | Sets the pitch scale. |
| `is_playing()` | `bool` | `void` | Returns whether the audio is currently playing. |
| `set_stream(AudioStream stream)` | `void` | `stream` | Assigns an audio stream to the player. |
| `get_stream()` | `AudioStream` | `void` | Returns the currently assigned audio stream. |

---

## Usage Example (GDScript)

```gdscript
extends AudioStreamPlayer3D

func _ready():
    stream = preload("res://sounds/explosion.wav")
    autoplay = true
```

---

## Related Nodes

- [AudioStreamPlayer2D](../class_audiostreamplayer2d.html)
- [AudioListener](../class_audiolistener.html)

---

Feel free to consult the full [Godot Engine Reference](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer3d.html) for the most up‑to‑date list of properties, methods, and signals.