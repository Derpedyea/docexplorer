**AudioStreamPlayer**

*Inherits:* `Node < Object`

---

### Overview
The `AudioStreamPlayer` node plays an audio stream non‑positionally.  
It is ideal for UI sounds, menu music, background tracks, or any audio that does not need 3‑D spatialization.

> *Tip:* Use `AudioStreamPlayer2D` or `AudioStreamPlayer3D` if you need positional audio.

---

#### Key Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `stream` | `AudioStream` | `null` | The audio stream to play. |
| `volume_db` | `float` | `0` | Volume in decibels. |
| `autoplay` | `bool` | `false` | Whether the stream starts automatically when the node is added to the scene. |
| `stream_paused` | `bool` | `false` | Pauses or resumes playback of the stream. |
| `stream_loop` | `bool` | `false` | Whether the stream should loop. |
| `bus` | `String` | `"Master"` | The audio bus the stream will be routed to. |
| `mix_target` | `int` | `MIX_TARGET_STEREO` | Determines how the audio is mixed (stereo, mono, etc.). |

> See the *Audio* section of the Godot manual for details on buses and mix targets.

---

#### Core Functions
| Function | Return Type | Parameters | Description |
|----------|-------------|------------|-------------|
| `play()` | `void` | – | Begins playback from the current position. |
| `play(int from_position)` | `void` | `from_position` (int) | Begins playback from a specified sample position. |
| `stop()` | `void` | – | Stops playback and resets the stream to the beginning. |
| `set_stream(AudioStream stream)` | `void` | `stream` | Assigns a new audio stream to play. |
| `get_stream()` | `AudioStream` | – | Returns the currently assigned stream. |
| `set_volume_db(float db)` | `void` | `db` | Sets the volume in decibels. |
| `get_volume_db()` | `float` | – | Returns the current volume. |
| `set_bus(String bus)` | `void` | `bus` | Sets the audio bus to use. |
| `get_bus()` | `String` | – | Returns the current bus name. |

> Additional helper methods such as `set_loop`, `set_paused`, and `set_stream_paused` are available in the full API.

---

#### Signals
| Signal | Parameters | Description |
|--------|------------|-------------|
| `finished()` | – | Emitted when the audio stream has finished playing (and is not looping). |

---

#### Usage Example (GDScript)

```gdscript
extends AudioStreamPlayer

func _ready():
    stream = preload("res://audio/background_music.ogg")
    volume_db = -10
    autoplay = true
```

---

#### Related Nodes
- [AudioStreamPlayer2D](../classes/class_audiostreamplayer2d.html)
- [AudioStreamPlayer3D](../classes/class_audiostreamplayer3d.html)
- [AudioStreamPlayer3D](../classes/class_audiostreamplayer3d.html)

---