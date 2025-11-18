**Note:** The provided HTML contains only the overall documentation layout and navigation, but not the actual content of the *Image* class reference.  
Below is a concise Markdown representation of the typical structure you would find on the Godot Engine documentation page for `Image`.  If you need the full method list, properties, and detailed descriptions, you should consult the official page at the URL above.

---

# Image

> Native image datatype. Contains image data which can be converted to an `ImageTexture` and provides commonly used image processing functions.

## Inherits

```
Resource → RefCounted → Object
```

## Overview

`Image` is a resource class that holds raw pixel data. It can be used to:

- Load, save, and modify image files in various formats (PNG, JPG, BMP, etc.).
- Create images programmatically (e.g., generate textures, render to texture).
- Manipulate pixel data for shaders, procedural textures, or custom image processing.

## Basic Usage

```gdscript
var img = Image.new()
img.load("res://texture.png")
img.flip_y()        # Flip the image vertically
var tex = ImageTexture.new()
tex.create_from_image(img)
```

## Methods

| Method | Description |
|--------|-------------|
| `create(width: int, height: int, use_mipmaps: bool, format: Image.Format) -> void` | Creates a new image of the specified dimensions and format. |
| `load(path: String) -> Error` | Loads an image from a file. |
| `save_png(path: String) -> Error` | Saves the image as a PNG file. |
| `get_width() -> int` | Returns the image width. |
| `get_height() -> int` | Returns the image height. |
| `get_pixel(x: int, y: int) -> Color` | Returns the color of the pixel at the specified coordinates. |
| `set_pixel(x: int, y: int, color: Color) -> void` | Sets the color of the pixel at the specified coordinates. |
| `flip_y() -> void` | Flips the image vertically. |
| `convert(format: Image.Format) -> void` | Converts the image to a different format. |
| `resize(width: int, height: int, filter: Image.Interpolation) -> void` | Resizes the image using the specified interpolation filter. |
| `blend_rect(src: Image, rect: Rect2i, dst_pos: Vector2i) -> void` | Blits a rectangle from `src` into this image at the given destination. |
| `lock() -> void` / `unlock() -> void` | Locks/unlocks pixel data for direct manipulation. |
| `is_empty() -> bool` | Checks if the image has no data. |
| ... | **(Full list of methods and properties can be found in the official reference)** |

> *For a complete list of methods, properties, signals, and constants, refer to the official Godot Engine documentation.*

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `size` | `Vector2i` | Read‑only. The image dimensions. |
| `format` | `Image.Format` | The pixel format (e.g., `FORMAT_RGBA8`, `FORMAT_RGB8`, etc.). |
| `mipmaps` | `bool` | Whether the image contains mipmaps. |
| `has_alpha` | `bool` | Whether the image includes an alpha channel. |

## Enums

### `Image.Format`

```gdscript
enum Format {
    FORMAT_L8,         # 8‑bit luminance
    FORMAT_LA8,        # 8‑bit luminance + alpha
    FORMAT_RGBA8,      # 8‑bit RGBA
    FORMAT_RGB8,       # 8‑bit RGB
    FORMAT_RGB9E5,     # 32‑bit HDR
    FORMAT_DXT1,       # DXT1 compression
    FORMAT_DXT3,       # DXT3 compression
    FORMAT_DXT5,       # DXT5 compression
    FORMAT_ETC2_RGBA8, # ETC2 compressed RGBA
    FORMAT_ETC2_RGB8,  # ETC2 compressed RGB
    FORMAT_ASTC_4x4,   # ASTC compressed 4x4
    FORMAT_ASTC_8x8    # ASTC compressed 8x8
}
```

### `Image.Interpolation`

```gdscript
enum Interpolation {
    INTERPOLATE_NEAREST, # Nearest‑neighbour
    INTERPOLATE_BILINEAR,# Bilinear filtering
    INTERPOLATE_CUBIC,   # Cubic filtering
    INTERPOLATE_LANCZOS  # Lanczos filtering
}
```

## Example: Creating a Simple Texture

```gdscript
var img = Image.new()
img.create(64, 64, false, Image.Format.RGB8)
img.lock()
for x in range(64):
    for y in range(64):
        var color = (x < 32) ? Color(1, 0, 0) : Color(0, 0, 1)
        img.set_pixel(x, y, color)
img.unlock()

var tex = ImageTexture.new()
tex.create_from_image(img)
$Sprite.texture = tex
```

---

**Reference:**  
[Godot Engine Documentation – Image Class](https://docs.godotengine.org/en/stable/classes/class_image.html)