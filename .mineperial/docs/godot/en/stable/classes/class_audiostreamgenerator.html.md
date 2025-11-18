# AudioStreamGenerator – Godot Engine (stable)

> **AudioStreamGenerator**  
> A type of audio stream that allows procedural sound generation.  
> Inherits from `AudioStream`, which in turn inherits from `Resource`, `RefCounted`, and `Object`.

---

## Overview

`AudioStreamGenerator` provides a low‑level interface for generating audio on the fly.  
It is intended for use when you need to produce custom waveforms, noise, or other real‑time audio content that cannot be stored in a conventional audio file.

Typical workflow:

1. **Create an `AudioStreamGenerator`** in the editor or via script.  
2. **Obtain an `AudioStreamGeneratorPlayback`** object from an `AudioStreamPlayer` or `AudioStreamPlayer3D`.  
3. **Push audio samples** to the playback buffer in real time.  
4. The audio engine streams the data directly to the output device.

> ⚠️  *Because the buffer is filled in a separate audio thread, all operations on the buffer must be thread‑safe.*  
> Use the `push_frame()`, `push_frame_array()`, or `push_frame_queue()` methods only from the audio thread or from code that explicitly acquires the audio lock.

---

## Class Reference

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **buffer_size** | `int` | `0` | Size of the ring buffer in samples (per channel). |
| **channel_count** | `int` | `1` | Number of output channels (1 = mono, 2 = stereo). |
| **sample_rate** | `int` | `44100` | Sampling rate in Hz. |
| **stream_paused** | `bool` | `false` | Whether the stream is currently paused. |

> **Note:** `buffer_size` and `channel_count` are read‑only properties. They are set when the stream is created or when the playback object is initialized.

---

## Signals

| Signal | Description |
|--------|-------------|
| **audio_finished** | Emitted when the playback has no more frames to consume. |

---

## Methods

### `AudioStreamGenerator.new()`

Creates a new instance of `AudioStreamGenerator`.

```gdscript
var gen = AudioStreamGenerator.new()
```

### `AudioStreamGenerator.get_buffer_size() -> int`

Returns the current size of the internal ring buffer in samples.

### `AudioStreamGenerator.get_buffer_frame_count() -> int`

Returns the number of available frames in the buffer.

### `AudioStreamGenerator.get_playback() -> AudioStreamGeneratorPlayback`

Retrieves the playback object that can be used to push data.

### `AudioStreamGenerator.push_frame(frame: PackedVector2Array) -> void`

Pushes a single audio frame (mono or stereo) to the buffer.

### `AudioStreamGenerator.push_frame_array(frames: Array[PackedVector2Array]) -> void`

Pushes an array of frames to the buffer. This is more efficient for bulk data.

### `AudioStreamGenerator.push_frame_queue(queue: AudioFrameQueue) -> void`

Pushes a whole frame queue. The queue is a thread‑safe container used internally by the audio thread.

### `AudioStreamGenerator.set_buffer_size(size: int) -> void`

Sets the buffer size. Must be called before the stream is added to an `AudioStreamPlayer`.

### `AudioStreamGenerator.get_channel_count() -> int`

Returns the number of channels (1 for mono, 2 for stereo).

### `AudioStreamGenerator.get_sample_rate() -> int`

Returns the sampling rate in Hz.

### `AudioStreamGenerator.get_playback_position() -> float`

Returns the playback position in seconds.

### `AudioStreamGenerator.get_stream() -> AudioStream`

Returns the underlying audio stream (self).

---

## Usage Example

```gdscript
extends Node

var audio_player : AudioStreamPlayer
var generator : AudioStreamGenerator
var playback : AudioStreamGeneratorPlayback

func _ready():
    audio_player = AudioStreamPlayer.new()
    add_child(audio_player)

    generator = AudioStreamGenerator.new()
    generator.buffer_size = 2048   # 2048 samples (~46 ms at 44.1 kHz)
    audio_player.stream = generator

    # Start the player
    audio_player.play()
    playback = audio_player.get_stream().get_playback()

    # Generate a sine wave in a separate thread
    Thread.new().start(_generate_sine_wave)

func _generate_sine_wave():
    var freq = 440.0
    var phase = 0.0
    var dt = 1.0 / generator.sample_rate
    while playback.is_playing():
        var sample = 0.5 * sin(phase)
        playback.push_frame([sample])  # mono channel
        phase += 2.0 * PI * freq * dt
        if phase >= 2.0 * PI: phase -= 2.0 * PI
```

This script creates an `AudioStreamGenerator`, attaches it to an `AudioStreamPlayer`, and then generates a 440 Hz sine wave in a background thread.

---

## See Also

- [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html)  
- [AudioStreamPlayer3D](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer3d.html)  
- [AudioStreamGeneratorPlayback](https://docs.godotengine.org/en/stable/classes/class_audiostreamgeneratorplayback.html)

---