# Creating movies

Godot can record non‑real‑time video and audio from any 2D or 3D project.  
This **offline rendering** feature is handy for:

- Capturing a game trailer or walkthrough
- Generating cinematics that use in‑game lighting
- Producing animated cut‑scenes without real‑time rendering overhead
- Recording debug footage of a scene

The guide below walks you through setting up a project for offline rendering and running the recorder from the editor or a script.

---

## 1.  What you need

| Item | Notes |
|------|-------|
| **Godot 4.x** | The offline rendering system is only available in Godot 4. |
| **A project** | Any 2D or 3D scene that you want to capture. |
| **A camera node** | The camera from which frames will be rendered. |
| **Audio source** | If you want sound in the final file, add an `AudioStreamPlayer` or an `AudioStreamPlayer3D`. |
| **Export template** | For the command‑line exporter (`godot --headless`) you need an export template installed. |

> **Tip:** Disable any UI that you do not want in the final video (e.g. HUD, debug overlays) by hiding or removing those nodes during recording.

---

## 2.  Setting up the scene

1. **Add a `Camera3D` or `Camera2D`**  
   Position the camera so that the entire shot is visible.  
   In 3D you can use `Camera3D`; in 2D use `Camera2D`.

2. **(Optional) Add an `AudioStreamPlayer`**  
   Load an audio stream or a music track.  
   Make sure it is playing during the recording.

3. **Set a `Viewport` for rendering**  
   Godot renders to the visible viewport by default.  
   If you want a custom resolution, create a `Viewport` node, attach a `Camera` to it and set the `size` property.

4. **Add a `Timer` or script to start/stop recording**  
   The recorder can be controlled via script using `ProjectSettings.set_setting("rendering/quality/driver/driver_type")`? (Not required for basic usage.)  
   The most common way is to use the `RenderServer` API, but the editor exposes a simple **Export → Offline Movie** action.

---

## 3.  Using the built‑in recorder

### 3.1 From the editor

1. Open the **Project** → **Export** dialog.  
2. Click **Add…** and choose **Offline Movie**.  
3. Configure the following fields:
   * **Output File** – Path to the resulting video (e.g. `demo.mp4`).  
   * **Resolution** – Width × height.  
   * **FPS** – Frames per second.  
   * **Start / Stop time** – In seconds or use a `Timer`.  
   * **Audio** – Check “Include audio” if an `AudioStreamPlayer` is present.  
   * **Use 3D** – If you are rendering a 3D scene.

4. Press **Export**.  
   Godot will run in headless mode, render each frame, and write it to the chosen file.

> **Note**: The editor will pause the game while recording.

### 3.2 From a script

You can trigger recording from a script so that it works both in the editor and in an exported build.

```gdscript
# Example: Record a 5‑second 1080p video from a node called "Camera3D"
func _ready():
    var exporter = PackedScene.new()
    var movie = EditorExportPlugin.new()
    movie.set_output_file("res://demo.mp4")
    movie.set_framerate(60)
    movie.set_resolution(1920, 1080)
    movie.set_start_time(0.0)
    movie.set_stop_time(5.0)
    movie.set_camera("Camera3D")
    movie.set_audio_enabled(true)
    movie.start()
```

> **Tip:** Use `yield(get_tree().create_timer(duration), "timeout")` before calling `movie.stop()` if you are controlling the recording from a coroutine.

---

## 4.  Exporting the movie

After the recording finishes the file is written to the project’s `export` directory by default.  
You can then convert or edit the video with external tools (FFmpeg, Premiere, etc.).

---

## 5.  Common pitfalls

| Issue | Fix |
|-------|-----|
| **Audio is silent** | Ensure the `AudioStreamPlayer` is set to “autoplay” or started manually before recording. |
| **Resolution is wrong** | Set the `size` of the `Viewport` or adjust the “Resolution” field in the export dialog. |
| **Movie is too slow or choppy** | Reduce the frame rate or increase the rendering quality. |
| **Headless build crashes** | Make sure the export templates are installed and the script is not using editor‑only APIs. |

---

## 6.  Advanced options

* **Custom post‑processing** – Apply shader passes to the viewport before writing frames.  
* **Multiple cameras** – Export from several camera nodes by looping over them in a script.  
* **Automated pipeline** – Use a shell script to call `godot --headless` with `--export` arguments for CI or batch rendering.

---

## 7.  Further reading

* [Playing videos](https://docs.godotengine.org/en/stable/tutorials/animation/playing_videos.html) – How to embed recorded clips in a running project.  
* [Animation](https://docs.godotengine.org/en/stable/tutorials/animation/index.html) – For creating camera animations to drive the recorder.  
* [Rendering](https://docs.godotengine.org/en/stable/tutorials/rendering/index.html) – Optimising render settings for offline capture.

---