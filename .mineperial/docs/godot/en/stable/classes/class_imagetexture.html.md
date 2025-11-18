# ImageTexture

A `Texture2D` based on an `Image`.  
For an image to be displayed, an `ImageTexture` must hold a valid image and be properly configured with its flags and format.

---

## Inheritance

```
ImageTexture
└── Texture2D
    └── Texture
        └── Resource
            └── RefCounted
                └── Object
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `image` | `Image` | The source image data used to generate the texture. |
| `flags` | `int` | Texture flags (e.g., `FLAG_FILTER`, `FLAG_REPEAT`, etc.). |
| `size` | `Vector2i` | Width and height of the texture in pixels. |
| `format` | `int` | Pixel format of the image (e.g., `Image.FORMAT_RGBA8`). |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `create_from_image(image, flags=0, format=Image.FORMAT_RGBA8)` | `void` | Generates the texture from the supplied `Image`. |
| `set_image(image)` | `void` | Sets the internal image data. |
| `get_image()` | `Image` | Retrieves the internal image. |
| `set_flags(flags)` | `void` | Sets texture flags. |
| `get_flags()` | `int` | Returns the current flags. |
| `set_size(size)` | `void` | Sets the size of the texture. |
| `get_size()` | `Vector2i` | Returns the current size. |
| `set_format(format)` | `void` | Sets the pixel format. |
| `get_format()` | `int` | Returns the current pixel format. |

---

## Usage Example (GDScript)

```gdscript
var img = Image.new()
img.load("res://path_to_image.png")     # Load image data
var tex = ImageTexture.new()
tex.set_image(img)                      # Assign image to texture
# Optionally configure flags, format, etc.
```

---

*For more detailed information, refer to the full Godot Engine class reference page.*