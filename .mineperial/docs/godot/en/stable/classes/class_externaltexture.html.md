**ExternalTexture**  
====================

> **Inherits**: `Texture2D` → `Texture` → `Resource` → `RefCounted` → `Object`

---

### Overview

`ExternalTexture` is a Godot 4 texture class that displays the content of an external buffer.  
It is useful when you need to use a texture that is produced outside of Godot (for example, from a rendering pipeline, a video stream, or a native library) and want to use it inside the engine as a normal `Texture2D`.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **data** | `ArrayBufferView` | – | The raw image data. |
| **size** | `Vector2i` | `Vector2i(0, 0)` | Width and height in pixels. |
| **format** | `int` | `Image.FORMAT_RGBA8` | Pixel format (`Image.FORMAT_*` constants). |
| **flags** | `int` | `0` | Flags controlling the texture creation (`Image.FLAG_*`). |

> **Note**: All properties are read‑only from the Godot editor. They must be set via code.

---

## Methods

### `set_external_buffer(buffer: ArrayBufferView, size: Vector2i, format: int, flags: int = 0) -> void`

* Binds an external buffer to the texture.  
* **Parameters**  
  * `buffer` – The source pixel data.  
  * `size` – The dimensions of the buffer.  
  * `format` – One of the `Image.FORMAT_*` constants.  
  * `flags` – Optional flags (e.g. `Image.FLAG_MIPMAPS`, `Image.FLAG_REPEAT`).

### `get_external_buffer() -> ArrayBufferView`

* Returns the currently bound external buffer.  

### `get_size() -> Vector2i`

* Returns the current texture size.  

### `get_format() -> int`

* Returns the pixel format of the texture.  

### `get_flags() -> int`

* Returns the current flags of the texture.  

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the external buffer is updated. |

---

## Example: Using ExternalTexture in GDScript

```gdscript
# preload an external buffer (e.g., from a native module)
var raw_data: ArrayBufferView = NativeAPI.get_video_frame()

# create the external texture
var ext_tex = ExternalTexture.new()
ext_tex.set_external_buffer(raw_data, Vector2i(1920, 1080), Image.FORMAT_RGB8)

# use the texture on a sprite
var sprite = Sprite2D.new()
sprite.texture = ext_tex
add_child(sprite)
```

---

## Practical Use‑Case

1. **Video playback** – Wrap each video frame into an `ExternalTexture` and update it each frame.  
2. **GPU‑accelerated rendering** – Pass a GPU buffer from a compute shader directly to an `ExternalTexture` for display.  
3. **Custom image processing** – Generate an image on the CPU and bind it to an `ExternalTexture` to use within the scene.

---

### Limitations

* The texture **cannot** be saved to disk using `ResourceSaver`; it must be regenerated each time.  
* Updating the buffer must be done on the **main thread** or via `call_deferred()` because Godot’s rendering API is not thread‑safe.  

---

### Related Classes

* `ImageTexture` – Texture that loads image data from an `Image`.  
* `ViewportTexture` – Texture that represents a viewport’s output.  
* `VideoStreamTexture` – Texture used for video playback.

---

### References

* [Godot Docs – ExternalTexture](https://docs.godotengine.org/en/stable/classes/class_externaltexture.html)  
* [Image Class – FORMAT_* constants](https://docs.godotengine.org/en/stable/classes/class_image.html)  
* [NativeScript API – Working with ArrayBuffers](https://docs.godotengine.org/en/stable/tutorials/platform/native.html)

---