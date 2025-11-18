**AudioStreamRandomizer**

> A Godot class that wraps a pool of audio streams and plays a random one with optional pitch and volume variation.

---

### Inheritance
```
AudioStreamRandomizer  →  AudioStream  →  Resource  →  RefCounted  →  Object
```

### Description
`AudioStreamRandomizer` picks a random `AudioStream` from a pool each time it is requested.  
It can modify the pitch and the volume of the chosen stream within user‑defined ranges, allowing for a more natural and less repetitive audio experience.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **stream** | `Array[AudioStream]` | `[]` | The array of audio streams that will be randomly selected from. |
| **pitch_scale_min** | `float` | `1.0` | Minimum pitch multiplier for a chosen stream. |
| **pitch_scale_max** | `float` | `1.0` | Maximum pitch multiplier for a chosen stream. |
| **volume_db_min** | `float` | `0.0` | Minimum volume adjustment in dB. |
| **volume_db_max** | `float` | `0.0` | Maximum volume adjustment in dB. |
| **randomize_seed** | `int` | `0` | Seed value used for deterministic randomization. Set to `0` to use a random seed each play. |

> **Note:** All numeric properties are exported, so they can be set directly from the Inspector or via code.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_streams(streams: Array[AudioStream])` | `void` | Replaces the current stream pool with a new array. |
| `add_stream(stream: AudioStream)` | `void` | Appends a single stream to the pool. |
| `remove_stream(stream: AudioStream)` | `void` | Removes the specified stream from the pool. |
| `get_random_stream() -> AudioStream` | `AudioStream` | Returns a random stream from the pool after applying pitch and volume adjustments. |
| `_get_stream() -> AudioStream` | `AudioStream` | Internal method used by the audio server to fetch the stream to be played. |

---

## Usage Example

```gdscript
# Create a randomizer in the editor or via code
var randomizer = AudioStreamRandomizer.new()

# Populate with a few clips
randomizer.add_stream(preload("res://sfx/shot1.wav"))
randomizer.add_stream(preload("res://sfx/shot2.wav"))
randomizer.add_stream(preload("res://sfx/shot3.wav"))

# Set pitch/volume ranges for variety
randomizer.pitch_scale_min = 0.9
randomizer.pitch_scale_max = 1.1
randomizer.volume_db_min  = -3.0
randomizer.volume_db_max  = 0.0

# Use as a standard AudioStream with an AudioStreamPlayer
var player = AudioStreamPlayer.new()
player.stream = randomizer
add_child(player)

# Play on demand
func _on_fire_pressed():
    player.play()
```

---

## Practical Use Cases

* **Sound Effects:** Give a more organic feel to repeated sounds (e.g., footsteps, gunfire) without manually shuffling clips in code.
* **Music Tracks:** Randomize background music snippets for variety in endless or procedural games.
* **Ambient Audio:** Combine a handful of atmospheric sounds and let the engine pick one at random each time the player enters a new area.

---

## Related Classes

- **[AudioStream](https://docs.godotengine.org/en/stable/classes/class_audiostream.html)** – Base class for all audio stream types.  
- **[AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html)** – Node to play an `AudioStream`.  
- **[AudioStreamRandomizer](https://docs.godotengine.org/en/stable/classes/class_audiostreamsynchronized.html)** – Synchronized audio stream counterpart.

---

## Quick Reference

| Property | Usage | Example |
|----------|-------|---------|
| `stream` | Set via inspector or code | `randomizer.stream = [preload("res://a.wav"), preload("res://b.wav")]` |
| `pitch_scale_min/max` | Control pitch variance | `randomizer.pitch_scale_min = 0.8` |
| `volume_db_min/max` | Control volume variance | `randomizer.volume_db_max = -2.5` |
| `randomize_seed` | Seed for deterministic behaviour | `randomizer.randomize_seed = 42` |

---

### Tips

* Keep the pool size small (3‑5 clips) for memory efficiency, unless you truly need many variations.
* Use a low `volume_db_min` for subtle ambience and a higher `volume_db_max` for occasional loud effects.
* When used with an `AudioStreamPlayer`, you can call `play()` repeatedly without worrying about duplicate sound overlap.

---