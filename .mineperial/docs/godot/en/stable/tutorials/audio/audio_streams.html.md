# Audio streams

This tutorial explains how to use Godot’s audio system through **AudioStream** resources and the various **AudioStreamPlayer** nodes.  
It covers the different audio stream types, how to load and play sounds, and some best‑practice tips for working with audio in 2D and 3D scenes.

> *This is a shortened, markdown‑only version of the original Godot documentation page.*

---

## Introduction

* As you might have already read in [Audio buses](../audio_buses.html), sound is sent to each bus via an `AudioStreamPlayer` node.  
* There are three main kinds of `AudioStreamPlayer` nodes:

| Node | Use case | Notes |
|------|----------|-------|
| `AudioStreamPlayer` | Generic audio playback (no positional data) | Used for UI sound or music |
| `AudioStreamPlayer2D` | 2‑D positional audio | Plays relative to the `AudioListener2D` (usually the Camera2D) |
| `AudioStreamPlayer3D` | 3‑D positional audio | Plays relative to the `AudioListener3D` (usually the Camera3D) |

Each player node loads an `AudioStream` resource – a container that holds the sound data and playback settings.

---

## Audio stream types

| Stream | File format | When to use |
|--------|--------------|-------------|
| `AudioStreamSample` | WAV, OGG, FLAC, etc. | Short, in‑memory samples (e.g. button clicks) |
| `AudioStreamWAV` | WAV | Small, non‑streaming files |
| `AudioStreamOGGVorbis` | OGG | Larger files that should be streamed from disk |
| `AudioStreamMP3` | MP3 | Large music files (if MP3 support is enabled) |
| `AudioStreamAudio` (custom) | N/A | Custom audio formats via GDExtension |

> **Tip** – If you need to play a short sound repeatedly, use `AudioStreamSample` for best performance.  
> For long background music, use `AudioStreamOGGVorbis` (OGG) or `AudioStreamMP3` to keep RAM usage low.

---

## Creating an AudioStream

1. **Import the audio file** into Godot’s FileSystem dock (right‑click → “Import” if needed).  
2. Select the file and in the inspector choose **Audio Stream** → *Import as* → pick one of the stream types (the editor will automatically guess the type).  
3. Set the default bus, loop, volume, etc. in the inspector.

Example – Import a 1‑second “click” sound as a sample:

```text
res://sounds/click.wav
```

---

## Using an `AudioStreamPlayer`

```gdscript
extends Node

@onready var click_player : AudioStreamPlayer = $ClickPlayer

func _ready() -> void:
    click_player.stream = preload("res://sounds/click.wav")
    click_player.play()
```

* `AudioStreamPlayer`: create a new node, assign the stream, call `play()` whenever you need the sound.  
* For 2‑D or 3‑D sound, use the respective player nodes and optionally set the `position` property.

---

## 2‑D positional audio

```gdscript
var player := AudioStreamPlayer2D.new()
player.stream = preload("res://sounds/footstep.wav")
player.position = Vector2(32, 64)
add_child(player)
player.play()
```

* The `AudioListener2D` automatically follows the main camera unless you specify a custom listener.  
* Use the *pan* property to control stereo balance manually.

---

## 3‑D positional audio

```gdscript
var player := AudioStreamPlayer3D.new()
player.stream = preload("res://sounds/explosion.ogg")
player.transform.origin = Vector3(0, 1, 0)
add_child(player)
player.play()
```

* The sound’s perceived volume and panning are computed from the relative position to the `AudioListener3D`.  
* Adjust `max_distance` and `attenuation` for realistic fall‑off.

---

## Mixing multiple streams

1. Create one `AudioStreamPlayer` node per sound (or reuse nodes).  
2. Use different audio buses (`Master`, `Music`, `SFX`, etc.) to control volume and apply effects globally.  
3. Example: to play music in a loop on a dedicated bus:

```gdscript
var music : AudioStreamPlayer = AudioStreamPlayer.new()
music.bus = "Music"
music.stream = preload("res://music/theme.ogg")
music.loop = true
add_child(music)
music.play()
```

---

## Advanced features

| Feature | Description |
|---------|-------------|
| **Streaming** | For large files, set `stream` to an `AudioStreamOggVorbis`. The file will be decoded on‑the‑fly. |
| **Audio buses** | Route audio through buses for mixing, applying effects (reverb, echo), and dynamic volume control. |
| **3‑D reverb** | Attach a `AudioEffectReverb` to the `Master` bus for 3‑D reverb. |
| **Pitch and playback rate** | `pitch_scale`, `playback_speed` modify pitch without changing duration. |
| **Randomized playback** | Use `AudioStreamPlayer`'s `random_pitch` or code to pick random clips for variety. |

---

## Common pitfalls

| Issue | Fix |
|-------|-----|
| *“File not found”* error | Make sure the file path is correct and the file is imported in Godot. |
| Audio silent after import | Verify the bus is not muted and the volume is set. |
| Low performance with many simultaneous streams | Use `AudioStreamSample` for short sounds, reuse players, and limit simultaneous playback. |

---

## Summary

* Use `AudioStreamPlayer` nodes to play sounds in your scenes.  
* Pick the appropriate stream type for the file size and playback behavior.  
* Route sounds through audio buses for easy mixing and global effects.

---

For more details, see the official [AudioStreams](https://docs.godotengine.org/en/stable/tutorials/audio/audio_streams.html) page on the Godot documentation site.