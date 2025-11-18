**AudioStreamSynchronized** – Godot 4 class reference

---

### Overview

`AudioStreamSynchronized` is a subclass of `AudioStream` that allows you to combine several audio sub‑streams and play them in perfect sync.  
Each sub‑stream can have its own start delay, and the entire composite stream can be looped.

---

### Inheritance

```
AudioStreamSynchronized
└── AudioStream
    └── Resource
        └── RefCounted
            └── Object
```

---

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `streams` | `Array[AudioStream]` | The sub‑streams that are played together. |
| `loop` | `bool` | If `true`, the synchronized stream restarts after the last sub‑stream ends. |

> **Note:** `streams` is usually modified via the provided methods rather than directly.

---

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_stream` | `add_stream(stream: AudioStream, start_delay: float = 0.0) : void` | Adds a sub‑stream at the end of the list. `start_delay` is the offset (in seconds) before the stream starts playing. |
| `remove_stream` | `remove_stream(index: int) : void` | Removes the sub‑stream at `index`. |
| `get_stream` | `get_stream(index: int) : AudioStream` | Returns the sub‑stream at `index`. |
| `clear_streams` | `clear_streams() : void` | Removes all sub‑streams. |
| `is_synchronized` | `is_synchronized() : bool` | Returns `true` if the stream contains more than one sub‑stream. |

> These methods can be called from GDScript or C#; see the language bindings for exact syntax.

---

### Signals

| Signal | Description |
|--------|-------------|
| `stream_finished()` | Emitted when all sub‑streams have finished playing (and the stream is not looping). |

---

### Example

```gdscript
# Create a synchronized stream
var sync = AudioStreamSynchronized.new()

# Load two sub‑streams
var music = preload("res://music.ogg")
var effect = preload("res://effect.wav")

# Add them with different start delays
sync.add_stream(music, start_delay=0.0)   # plays immediately
sync.add_stream(effect, start_delay=1.5)  # starts 1.5 s later

# Assign to an AudioStreamPlayer and play
var player = AudioStreamPlayer.new()
player.stream = sync
add_child(player)
player.play()
```

---

### Further Reading

* [AudioStream](https://docs.godotengine.org/en/stable/classes/class_audiostream.html) – Base class for all audio streams.  
* [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html) – Node that plays an `AudioStream`.  

---