**AudioStreamPlayer2D** – Godot Engine Documentation
======================================================

> **Inherits**: `Node2D` → `CanvasItem` → `Node` → `Object`

A node that plays an `AudioStream` in 2‑D space.  
The sound is automatically attenuated based on the distance from the listener, so it will be quieter when the player is far away and louder when it is close.

---

## Overview

`AudioStreamPlayer2D` is a lightweight audio node that can be placed anywhere in your 2‑D scene tree.  
It supports all the standard audio features (volume, pitch, looping, autoplay, etc.) and works with the global `AudioServer`.

---

## Signals

| Signal | Description |
|--------|-------------|
| `finished()` | Emitted when the current stream has finished playing (if not looping). |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `stream` | `AudioStream` | `null` | The audio stream to play. |
| `stream_paused` | `bool` | `false` | Pauses the playback of the stream. |
| `volume_db` | `float` | `0.0` | Volume in decibels. |
| `pitch_scale` | `float` | `1.0` | Pitch multiplier. |
| `autoplay` | `bool` | `false` | Start playback automatically when the node is ready. |
| `loop` | `bool` | `false` | Whether the stream should loop when it reaches its end. |
| `playback_position` | `float` | `0.0` | Current playback position (seconds). |
| `playing` | `bool` | `false` | Read‑only flag indicating if the node is currently playing. |
| `stream_active` | `bool` | `false` | Read‑only flag indicating if the stream is active (has been started at least once). |

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `play(float from_position = 0.0)` | `float from_position` | `void` | Starts playback of the stream from the specified position. If `from_position` is omitted, playback starts from the beginning. |
| `stop()` | `void` | `void` | Stops the stream and resets the position to 0. |
| `set_stream(AudioStream stream)` | `AudioStream stream` | `void` | Sets the audio stream to play. |
| `get_stream()` | `void` | `AudioStream` | Returns the currently assigned stream. |
| `set_volume_db(float db)` | `float db` | `void` | Sets the volume in decibels. |
| `get_volume_db()` | `void` | `float` | Returns the current volume in decibels. |
| `set_pitch_scale(float scale)` | `float scale` | `void` | Sets the pitch multiplier. |
| `get_pitch_scale()` | `void` | `float` | Returns the current pitch scale. |
| `set_autoplay(bool enable)` | `bool enable` | `void` | Enables or disables autoplay. |
| `is_autoplay()` | `void` | `bool` | Returns whether autoplay is enabled. |
| `set_loop(bool enable)` | `bool enable` | `void` | Enables or disables looping. |
| `is_looping()` | `void` | `bool` | Returns whether looping is enabled. |
| `set_stream_paused(bool pause)` | `bool pause` | `void` | Pauses or resumes playback. |
| `is_stream_paused()` | `void` | `bool` | Returns whether the stream is paused. |
| `set_playback_position(float position)` | `float position` | `void` | Sets the current playback position in seconds. |
| `get_playback_position()` | `void` | `float` | Returns the current playback position. |

> **Note**: Some methods may have additional overloads or accept optional parameters; see the Godot API reference for exact signatures.

---

## Example Usage

```gdscript
# Assuming this script is attached to an AudioStreamPlayer2D node
extends AudioStreamPlayer2D

func _ready():
    # Load an audio file
    stream = preload("res://sounds/explosion.wav")
    volume_db = -5          # 5 dB quieter
    pitch_scale = 1.2       # Slightly higher pitch
    autoplay = false        # We'll play manually
    loop = false

func play_explosion():
    if not playing:
        play()
```

```gdscript
# Alternatively, play a sound from code without a dedicated node
var player = AudioStreamPlayer2D.new()
player.stream = preload("res://sounds/explosion.wav")
player.volume_db = -5
player.pitch_scale = 1.2
player.loop = false
get_tree().root.add_child(player)
player.play()
```

---

## Attenuation

The node automatically applies distance‑based volume attenuation using the global audio settings.  
The attenuation is calculated based on the node’s position and the `AudioListener2D` (usually attached to the player or camera).  
Adjust `AudioServer.set_bus_effect` or `AudioStream.set_stream` parameters to fine‑tune spatial behavior.

---

## Common Use Cases

- **Ambient Sounds** – Place a looping background music node that follows the player.
- **SFX** – Quick one‑shot sounds like gunshots, footsteps, or explosions.
- **Dialogue** – 2‑D positioned voices that fade with distance.

---

## References

- [Godot Engine API – AudioStreamPlayer2D](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer2d.html)
- [Godot Docs – Audio](https://docs.godotengine.org/en/stable/tutorials/audio/index.html)

---