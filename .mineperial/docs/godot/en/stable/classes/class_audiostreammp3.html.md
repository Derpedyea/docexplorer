# AudioStreamMP3

> **Class**: `AudioStreamMP3`  
> **Inherits**: `AudioStream` → `Resource` → `RefCounted` → `Object`

---

## Description
`AudioStreamMP3` is an audio stream driver that handles MP3 audio files.  
Use the `data` property to load an MP3 file at runtime.  
*Note: This class can be used only if the engine is compiled with the MP3 decoder support.*

> *See the documentation for details on enabling MP3 support and the API limitations.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `data` | `PackedByteArray` | `[]` | The raw MP3 data to decode. |
| `loop` | `bool` | `false` | Whether to loop the audio. |
| `mix_rate` | `int` | `44100` | Sample rate of the audio. |
| `bitrate` | `int` | `0` | Bitrate of the MP3 file (read‑only). |
| `channels` | `int` | `0` | Number of audio channels (read‑only). |
| `format` | `int` | `0` | Audio format flags (read‑only). |
| `buffering` | `int` | `0` | Buffer size in milliseconds (read‑only). |

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `set_data(PackedByteArray data)` | `void` | Loads MP3 data from a byte array. |
| `get_data()` | `PackedByteArray` | Returns the loaded MP3 data. |
| `is_valid()` | `bool` | Returns `true` if the MP3 data is valid and can be played. |
| `get_bitrate()` | `int` | Returns the bitrate of the loaded MP3. |
| `get_channels()` | `int` | Returns the channel count. |
| `get_mix_rate()` | `int` | Returns the sample rate. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `finished()` | Emitted when the stream reaches the end. |

---

## Example Usage

```gdscript
var mp3 = AudioStreamMP3.new()
mp3.data = FileAccess.get_file_as_bytes("res://music/song.mp3")
var player = AudioStreamPlayer.new()
player.stream = mp3
add_child(player)
player.play()
```

---

## Notes

* MP3 decoding is performed on a separate thread; make sure to keep the audio data in memory while the stream is used.  
* The class only supports Ogg and MP3 streams that are compliant with the embedded decoder; highly compressed or proprietary codecs may not work.  
* For large audio files consider using a streamed approach or converting to a more efficient format like Vorbis.

---