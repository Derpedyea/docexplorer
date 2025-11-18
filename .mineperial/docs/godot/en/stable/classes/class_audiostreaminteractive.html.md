**AudioStreamInteractive – Godot Engine Documentation**  
*(class reference – stable release)*  

---

## Overview

`AudioStreamInteractive` is a `AudioStream` resource that allows you to play music in an interactive way by stitching together multiple audio clips using a transition table. This is useful for dynamic background music that can adapt to gameplay or narrative events.

### Inheritance hierarchy
```
Object
 └─ RefCounted
     └─ Resource
         └─ AudioStream
             └─ AudioStreamInteractive
```

---

## Description

> *Audio stream that can playback music interactively, combining clips and a transition table.*

`AudioStreamInteractive` exposes a base stream and an array of clip streams. A two‑dimensional transition table determines how the audio engine should move from one clip to another. The class also exposes a number of properties to fine‑tune playback, looping, volume, pitch, and more.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `stream` | `AudioStream` | The base stream that acts as a fallback or a default track. |
| `clips` | `Array[AudioStream]` | List of clip streams that can be used during playback. |
| `transition_table` | `Array[Array[int]]` | Two‑dimensional matrix that defines which clip can transition to which other clip. The matrix contains indices that reference the `clips` array. |
| `mix_rate` | `float` | The mix rate (in Hz) at which the audio is processed. |
| `loop` | `bool` | Whether the music should loop. |
| `autoplay` | `bool` | Whether the music should start playing automatically when the scene is entered. |
| `stream_position` | `float` | Current playback position (in seconds). |
| `stream_paused` | `bool` | Pauses or resumes playback. |
| `stream_volume` | `float` | Volume multiplier for the stream. |
| `stream_pitch_scale` | `float` | Pitch scale applied to the stream. |

> **Note**: All properties are exported so they can be edited in the inspector.

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `add_clip(index: int, stream: AudioStream) -> void` | `void` | `index`, `stream` | Inserts a clip into the `clips` array at the given index. |
| `remove_clip(index: int) -> void` | `void` | `index` | Removes the clip at `index`. |
| `get_clip(index: int) -> AudioStream` | `AudioStream` | `index` | Returns the clip stream at `index`. |
| `set_transition(from_index: int, to_index: int, value: int) -> void` | `void` | `from_index`, `to_index`, `value` | Sets a transition value (typically 0 or 1) in the `transition_table`. |
| `play() -> void` | `void` |  | Starts playback. |
| `stop() -> void` | `void` |  | Stops playback. |
| `pause() -> void` | `void` |  | Pauses playback. |
| `is_playing() -> bool` | `bool` |  | Returns whether the stream is currently playing. |
| `get_next_clip_index() -> int` | `int` |  | Returns the next clip index according to the transition table. |
| `set_next_clip_index(index: int) -> void` | `void` | `index` | Manually sets the next clip index for the next transition. |
| `set_autoplay(value: bool) -> void` | `void` | `value` | Enables or disables autoplay. |

> For a complete list of methods, see the API reference in the Godot editor or on the official documentation.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `finished` | | Emitted when the stream finishes playing (and is not looping). |

---

## Example Usage

```gdscript
# preload the interactive music resource
var music_resource = preload("res://interactive_music.tres")

# create an AudioStreamPlayer node and assign the resource
var player = AudioStreamPlayer.new()
player.stream = music_resource
add_child(player)

# configure the player
player.autoplay = true
player.volume_db = -3

# start playback
player.play()
```

You can also modify the transition table at runtime:

```gdscript
var music = player.stream as AudioStreamInteractive

# change transition from clip 0 to clip 1
music.set_transition(0, 1, 1)

# set clip 2 as the next clip to play
music.set_next_clip_index(2)
```

---

## Related Classes

- [`AudioStream`](/classes/class_audiostream.html)
- [`AudioStreamPlayer`](/classes/class_audiostreamplayer.html)
- [`AudioStreamGenerator`](/classes/class_audiostreamgenerator.html)

---

> *For detailed information on each property, method, and signal, refer to the official Godot documentation or the inspector in the editor.*