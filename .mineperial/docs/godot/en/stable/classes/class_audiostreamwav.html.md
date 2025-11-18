**AudioStreamWAV** – Godot Engine Class Reference  
==============================================

> *Godot 4.x (stable)*  

`AudioStreamWAV` is a subclass of `AudioStream` that stores sound samples loaded from WAV files. It can be used to play audio data directly from a `.wav` file or from raw PCM data that you create at runtime.

---

## Inheritance

```
Resource ← RefCounted ← Object
               └─ AudioStream
                    └─ AudioStreamWAV
```

---

## Description

`AudioStreamWAV` holds the audio data of a WAV file in an internal `PackedByteArray`.  
You can load a WAV file at design‑time by dragging it into the inspector or by calling `AudioStreamWAV.load("res://my_sound.wav")` in code.  
When played through an `AudioStreamPlayer` or an `AudioStreamPlayer2D`, the engine handles decoding and playback automatically.

> **Note:** `AudioStreamWAV` only supports uncompressed PCM WAV files (no compressed formats such as MP3 or Ogg). For compressed audio, use `AudioStreamOggVorbis` or `AudioStreamMP3`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `PackedByteArray` | – | Raw audio data in PCM format. Use `set_data()` or `load()` to modify. |
| `bit_rate` | `int` | – | Bits per sample (e.g. 16, 24). |
| `loop` | `bool` | `false` | Whether playback should loop. |
| `loop_start` | `int` | `0` | Sample index where the loop starts. |
| `loop_end` | `int` | `0` | Sample index where the loop ends (0 = end of stream). |
| `format` | `int` | – | One of `AudioStream.WAV_FORMAT_*` (e.g., `WAV_FORMAT_PCM`). |
| `channels` | `int` | `1` | Number of audio channels (1 = mono, 2 = stereo). |
| `mix_rate` | `int` | – | Sample rate in Hz (e.g., 44100). |

> *All properties are exported and can be edited in the Inspector.*

---

## Methods

| Signature | Return | Description |
|-----------|--------|-------------|
| `func load(path: String) -> bool` | `bool` | Loads a WAV file from the given resource path. Returns `true` on success. |
| `func set_data(data: PackedByteArray) -> void` | `void` | Replaces the internal audio buffer. |
| `func get_data() -> PackedByteArray` | `PackedByteArray` | Returns the current audio buffer. |
| `func set_loop(loop: bool) -> void` | `void` | Enables or disables looping. |
| `func is_looping() -> bool` | `bool` | Returns the current loop state. |
| `func set_loop_start(sample: int) -> void` | `void` | Sets the loop start index (in samples). |
| `func get_loop_start() -> int` | `int` | Returns the loop start index. |
| `func set_loop_end(sample: int) -> void` | `void` | Sets the loop end index. |
| `func get_loop_end() -> int` | `int` | Returns the loop end index. |
| `func get_mix_rate() -> int` | `int` | Returns the sample rate in Hz. |
| `func set_mix_rate(rate: int) -> void` | `void` | Sets the sample rate. |
| `func get_channels() -> int` | `int` | Returns the channel count. |
| `func set_channels(count: int) -> void` | `void` | Sets the number of channels. |
| `func get_format() -> int` | `int` | Returns the WAV format constant. |
| `func set_format(fmt: int) -> void` | `void` | Sets the WAV format. |

> *All methods are available in GDScript, C#, and GDNative.*

---

## Signals

None.

---

## Example Usage

### GDScript

```gdscript
# Load a WAV file and play it in a loop
var stream = AudioStreamWAV.new()
stream.load("res://sfx/laser.wav")
stream.set_loop(true)

var player = AudioStreamPlayer.new()
player.stream = stream
add_child(player)
player.play()
```

### C#

```csharp
var stream = new AudioStreamWAV();
stream.Load("res://sfx/laser.wav");
stream.Loop = true;

var player = new AudioStreamPlayer();
player.Stream = stream;
AddChild(player);
player.Play();
```

---

## Related Classes

- [`AudioStream`](https://docs.godotengine.org/en/stable/classes/class_audiostream.html) – Base class for all audio streams.  
- [`AudioStreamPlayer`](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html) – Node that plays an `AudioStream`.  
- [`AudioStreamPlayer2D`](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer2d.html) – 2D spatialized audio playback.  

---