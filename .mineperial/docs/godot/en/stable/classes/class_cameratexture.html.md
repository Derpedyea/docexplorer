# CameraTexture

*Inherited from:* `Texture2D`

`CameraTexture` is a special type of texture that exposes the live feed of a camera device as a 2D texture.  
It is typically created from a `CameraFeed` instance and can be used like any other texture in materials, UI controls, or custom shaders.

---

## Description

`CameraTexture` provides a live, continuously‑updating image that reflects what a camera feed is currently capturing.  
The texture is updated automatically each frame that the camera delivers a new image.

> **Note**  
> • The texture does not persist between scenes; you need to keep a reference to the same `CameraTexture` instance if you want to reuse it.  
> • `CameraTexture` is only available on platforms that expose a `CameraFeed` (desktop webcams, mobile device cameras, etc.).

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `width` | `int` | Read‑only width of the current frame. |
| `height` | `int` | Read‑only height of the current frame. |
| `format` | `Image.Format` | Read‑only pixel format of the texture. |

> *All properties are read‑only; they reflect the underlying `CameraFeed`.  To change the feed, use the `CameraFeed` API.*

---

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `CameraTexture.new()` | `CameraTexture` | Creates a new texture that will be bound to a `CameraFeed`. |
| `CameraTexture.set_feed(feed : CameraFeed)` | `void` | Associates the texture with a `CameraFeed`. After calling this, the texture will automatically update with the feed’s frames. |
| `CameraTexture.is_ready()` | `bool` | Returns `true` if the texture has successfully received at least one frame and can be sampled. |
| `CameraTexture.get_image()` | `Image` | Returns a snapshot of the current frame as a Godot `Image`. The image is a copy and does *not* share memory with the texture. |
| `CameraTexture.get_texture()` | `ImageTexture` | (Deprecated) Returns the underlying `ImageTexture` that holds the current frame. Prefer using the object itself. |
| `CameraTexture.get_resolution()` | `Vector2i` | Returns the current resolution of the texture as a 2‑component vector. |

> **Example Usage (GDScript)**  
> ```gdscript
> var feed : CameraFeed = CameraFeed.new()
> feed.camera_id = 0            # Select the first camera device
> feed.start()
>
> var tex : CameraTexture = CameraTexture.new()
> tex.set_feed(feed)
>
> var sprite : Sprite2D = Sprite2D.new()
> sprite.texture = tex
> add_child(sprite)
> ```
> The sprite will now show the live camera feed.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `texture_ready()` | – | Emitted when the texture has received its first frame. |

---

## See Also

- **CameraFeed** – The class that manages the actual camera device and its configuration.  
- **ImageTexture** – A static texture that can be used as a fallback if you need to freeze the feed.  
- **Viewport** – For advanced use‑cases such as rendering the camera feed to a 3D surface.

---

> **Platform Support**  
> * Windows / macOS / Linux – using the system’s webcam.  
> * Android / iOS – using the device’s built‑in cameras.  
> * Web – may be available via WebRTC APIs (Godot 4.3+).

---