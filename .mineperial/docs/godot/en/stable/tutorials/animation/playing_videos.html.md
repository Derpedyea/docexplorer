**Playing videos**

This guide explains how to use the **VideoStreamPlayer** node in Godot to play video files inside your projects.

---

## Supported playback formats

| Format | Codec | Notes |
|--------|-------|-------|
| **Ogg Theora** | Video | Only supported natively in the core engine. |
| **MP4** | H.264 (video) + AAC (audio) | Supported when the platform’s native video player is used. |
| **WebM** | VP9 / VP8 | Supported on desktop platforms via the native player. |

> **Tip**: For cross‑platform projects it’s safest to ship video files as **Ogg Theora**. Other formats can be converted at export time using `godot-convert` or a 3rd‑party tool.

---

## Adding a VideoStreamPlayer node

1. In the **Scene** panel, add a new **VideoStreamPlayer** node.  
2. In the **Inspector**, set the **Stream** property to a `VideoStream` resource.  
3. Drag a video file into the **Project → Filesystem** panel. Godot will automatically create a `VideoStream` resource for it.  
4. Assign the resource to the **Stream** property.

```
# Example: attaching a video to a node
var video_player : VideoStreamPlayer = $VideoStreamPlayer
```

---

## Playing a video

The node provides a small API for controlling playback.

| Method | Description |
|--------|-------------|
| `play()` | Start playback from the beginning (or from the current position if `pause_mode` is `RESTART`). |
| `stop()` | Stop playback and reset the position. |
| `pause()` | Pause playback; use `play()` to resume. |
| `seek(position : float)` | Jump to a specific time in seconds. |
| `get_stream()` | Return the attached `VideoStream`. |

```gdscript
func _ready():
    $VideoStreamPlayer.play()

func _on_SomeButton_pressed():
    $VideoStreamPlayer.pause()
```

---

## Looping

```gdscript
$VideoStreamPlayer.stream.loop_mode = true
```

If the video’s format supports looping natively (e.g. `.ogg` with `loop_mode = true`), you can enable it directly in the inspector.

---

## Seeking and tracking progress

```gdscript
func _process(delta):
    var time = $VideoStreamPlayer.get_time()      # current playhead time in seconds
    var duration = $VideoStreamPlayer.get_duration()
    # e.g. update a progress bar
    progress_bar.value = time / duration * 100
```

---

## Audio track

`VideoStreamPlayer` can play the audio track embedded in the video. To mute it:

```gdscript
$VideoStreamPlayer.volume_db = -80   # effectively mute
```

If you need separate control over the audio, consider using a `AudioStreamPlayer` and `VideoStream` that contains only video data.

---

## Rendering options

| Setting | Options | Notes |
|---------|---------|-------|
| **Use as texture** | `true / false` | When `true`, the video frame is rendered as a texture on the node’s viewport. |
| **Keep aspect ratio** | `true / false` | Maintains the video’s original width/height ratio. |
| **Stretch mode** | `Scale`, `Keep`, `KeepAspect`, `KeepAspectCentered` | Controls how the video stretches to fit the viewport. |

---

## Platform‑specific caveats

- **Web**: Only the WebM format is supported by browsers. Godot will fallback to the native HTML5 `<video>` element if needed.  
- **iOS / Android**: Use the native video player (`MediaPlayer` on Android, `AVPlayer` on iOS) for best performance.  
- **Exported projects**: Ensure that the video files are included in the export preset. On mobile, place them in the `res://` folder.

---

## Example: Play a video when a button is pressed

```gdscript
extends Node2D

@onready var video : VideoStreamPlayer = $VideoStreamPlayer
@onready var button : Button = $Button

func _ready():
    button.pressed.connect(_on_button_pressed)

func _on_button_pressed():
    if video.playing:
        video.stop()
    else:
        video.play()
```

---

## Common pitfalls

- **Missing codecs** – On some platforms, the default media codec may not support the chosen format. Test on all target platforms.  
- **Large video files** – They can increase export size dramatically. Use compression tools if necessary.  
- **Performance** – Streaming large videos in real time can be CPU intensive. Consider pre‑processing them into a lower resolution.

---

## Further reading

- [VideoStream](https://docs.godotengine.org/en/stable/classes/class_videostream.html) – Resource that holds the video data.  
- [VideoStreamPlayer](https://docs.godotengine.org/en/stable/classes/class_videostreamplayer.html) – Node that plays a `VideoStream`.  
- [Exporting](https://docs.godotengine.org/en/stable/tutorials/export/index.html) – Make sure video files are marked as “Export” in the project settings.  

---