# VideoStreamPlayer

**Godot Engine 4 – Class Reference**

> **Inheritance hierarchy**  
> `VideoStreamPlayer` → `Control` → `CanvasItem` → `Node` → `Object`

---

## Overview

`VideoStreamPlayer` is a UI control that plays a `VideoStream` resource.  
It supports common video formats such as **Ogg Theora (.ogv)** and, when compiled with the appropriate platform back‑end, can handle additional codecs (e.g. MP4 via FFMPEG on desktop).

Typical usage:

```gdscript
var player = VideoStreamPlayer.new()
player.stream = preload("res://myvideo.ogv")
player.autoplay = true
add_child(player)
```

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **stream** | `VideoStream` | `null` | The video resource to play. |
| **autoplay** | `bool` | `false` | If `true`, the video starts playing as soon as the stream is set and the node is added to the scene. |
| **loop** | `bool` | `false` | Whether the video should restart automatically when it finishes. |
| **paused** | `bool` | `false` | Controls whether playback is paused. Setting this to `true` freezes the video at the current frame. |
| **volume** | `float` | `1.0` | Playback volume (0.0–1.0). 0 disables audio entirely. |
| **rect_size** | `Vector2` | inherited from `Control` | Size of the control; video will scale to fit unless `stretch_mode` is used. |
| **stretch_mode** | `int` | `0` | Controls how the video is scaled: `STRETCH_MODE_KEEP`, `STRETCH_MODE_KEEP_ASPECT`, `STRETCH_MODE_KEEP_ASPECT_CROPPED`, `STRETCH_MODE_KEEP_ASPECT_PILLAR`, or `STRETCH_MODE_KEEP_ASPECT_LETTERBOX`. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| **play()** | `void` | Starts or resumes playback from the current position. |
| **pause()** | `void` | Pauses playback. |
| **stop()** | `void` | Stops playback and rewinds to the beginning. |
| **is_playing()** | `bool` | Returns `true` while the video is actively playing. |
| **seek(seconds : float)** | `void` | Seeks to the specified time (in seconds). |
| **set_stream(stream : VideoStream)** | `void` | Sets the `stream` property. |
| **get_stream()** | `VideoStream` | Returns the current video stream. |
| **set_autoplay(enabled : bool)** | `void` | Sets the autoplay flag. |
| **set_loop(enabled : bool)** | `void` | Sets the loop flag. |
| **set_volume(volume : float)** | `void` | Sets the audio volume. |
| **set_paused(paused : bool)** | `void` | Sets the paused flag. |
| **get_position()** | `float` | Current playback position in seconds. |
| **set_position(seconds : float)** | `void` | Sets the playback position. |

> *All methods can also be accessed via the corresponding properties (`player.position`, etc.).*

---

## Signals

| Signal | Description |
|--------|-------------|
| **finished()** | Emitted when the video finishes playing (and `loop` is `false`). |
| **frame_updated()** | Emitted every time the video frame updates. Useful for synchronizing with other nodes. |
| **video_frame_ready()** | Emitted when the first frame is decoded and ready for rendering. |
| **error(error_code : int)** | Emitted if an error occurs during playback (e.g., unsupported format or corrupted file). |

---

## Usage Tips

- **Aspect Ratio** – Use `stretch_mode` to preserve the video's aspect ratio when resizing the control.  
- **Audio** – The audio channel of the video is automatically routed through the `AudioStreamPlayer` subsystem. Adjust `volume` to mix with other audio sources.  
- **Multiple Videos** – You can preload several `VideoStream` resources and switch them via `set_stream()` while the node stays in the scene tree.  
- **Exporting** – Ensure the video file is included in the export preset. On some platforms you may need to set `export/presets/*/export_filters` to include `.ogv` or the chosen codec.  
- **Performance** – Large videos can impact memory usage. Consider streaming from disk or using compressed formats (e.g., WebM for browsers).  

---

## Example (GDScript)

```gdscript
extends Node2D

var player : VideoStreamPlayer

func _ready():
    player = VideoStreamPlayer.new()
    player.stream = preload("res://intro.ogv")
    player.autoplay = true
    player.loop = true
    player.volume = 0.8
    add_child(player)
```

---

## See Also

- [`VideoStream`](https://docs.godotengine.org/en/stable/classes/class_videostream.html) – Base class for video data.  
- [`Control`](https://docs.godotengine.org/en/stable/classes/class_control.html) – Base UI node.  
- [`AudioStreamPlayer`](https://docs.godotengine.org/en/stable/classes/class_audiostreamplayer.html) – Related audio handling.  

---