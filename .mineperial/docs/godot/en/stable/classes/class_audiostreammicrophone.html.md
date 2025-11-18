**AudioStreamMicrophone**

`AudioStreamMicrophone` is an `AudioStream` resource that plays back the real‑time audio captured from a microphone (or any audio input device).  It can be used directly in an `AudioStreamPlayer` node to stream live microphone audio, or it can be queried from code to access the raw PCM data.

---

## Inheritance

```
Resource
 └─ RefCounted
     └─ Object
         └─ AudioStream
             └─ AudioStreamMicrophone
```

---

## Description

* Captures audio from a chosen input device.
* Supports mono or stereo recording.
* Allows you to set the sample rate and buffer size.
* Can be started/stopped from code or via the editor.
* Useful for voice‑chat, live audio visualisation, or custom sound‑processing pipelines.

---

## Properties

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| `channels` | `int` | `1` | Number of audio channels (1 = mono, 2 = stereo). |
| `buffer_size` | `int` | `4096` | Size of the circular buffer in samples. |
| `record` | `bool` | `false` | When `true`, the microphone is actively recording. |
| `rate` | `int` | `44100` | Sample rate (Hz). |
| `device` | `String` | `""` | Name of the input device to use. If empty, the default device is chosen. |

*All properties are exposed in the editor and can be exported (`@export`).*

---

## Methods

| Method | Return | Description |
| ------ | ------ | ----------- |
| `bool is_ready()` | | Returns `true` if the stream is fully initialized and has data. |
| `AudioStreamPlayback get_stream()` | `AudioStreamPlayback` | Retrieves the underlying `AudioStreamPlaybackMicrophone`. |
| `int get_buffer_size()` | | Returns the configured buffer size. |
| `void set_buffer_size(int size)` | | Sets the buffer size (must be a power of two). |
| `int get_channels()` | | Returns the number of channels. |
| `void set_channels(int channels)` | | Sets the number of channels. |
| `int get_rate()` | | Returns the sample rate. |
| `void set_rate(int rate)` | | Sets the sample rate. |
| `String get_device()` | | Returns the currently selected device name. |
| `void set_device(String device)` | | Sets the input device to capture from. |
| `bool is_recording()` | | Returns whether the stream is actively recording. |
| `void set_recording(bool active)` | | Enables or disables the microphone capture. |
| `PoolIntArray get_buffer()` | | Returns the captured audio buffer (interleaved PCM samples). |
| `float get_db()` | | Current level in decibels (useful for visualisation). |

> **Note**: Methods that change the stream (`set_*`) must be called **before** the stream is added to an `AudioStreamPlayer` or before `recording` is started.

---

## Signals

| Signal | Arguments | Description |
| ------ | --------- | ----------- |
| `buffer_updated` | `PoolIntArray buffer` | Emitted whenever the internal buffer receives a new chunk of data. |
| `device_changed` | `String device` | Emitted when the selected input device changes. |

---

## Example Usage

```gdscript
# Example: stream microphone audio into a player

var mic_stream : AudioStreamMicrophone = AudioStreamMicrophone.new()
mic_stream.set_channels(2)          # stereo
mic_stream.set_rate(48000)          # 48 kHz
mic_stream.set_buffer_size(8192)    # 8 k samples

var player = AudioStreamPlayer.new()
player.stream = mic_stream
add_child(player)

# Start recording
mic_stream.set_recording(true)

# Optional: monitor dB level
func _process(_delta):
    var db = mic_stream.get_db()
    $DebugLabel.text = str(db, " dB")
```

You can also connect to `buffer_updated` if you need to analyse or modify the raw PCM:

```gdscript
mic_stream.connect("buffer_updated", self, "_on_buffer")
func _on_buffer(buffer):
    # `buffer` is a PoolIntArray of 16‑bit samples.
    # Process or play it elsewhere.
```

---

## Compatibility

* Works on all platforms supported by Godot 4 that provide a microphone input (Windows, macOS, Linux, Android, iOS, Web).
* On the Web, the user must grant microphone permission in the browser.
* For desktop builds, you can also query available input devices via `AudioServer.get_input_device_list()`.

---

## References

* [AudioStream](https://docs.godotengine.org/en/stable/classes/class_audiostream.html)
* [AudioStreamPlaybackMicrophone](https://docs.godotengine.org/en/stable/classes/class_audiostreamplaybackmicrophone.html)
* [AudioStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html)

---