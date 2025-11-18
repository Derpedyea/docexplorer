**Note:** The actual content of the `CompressedTexture2D` class reference page is not included in the provided HTML snippet.  
Below is a cleaned‑up Markdown representation of the typical structure you would find on that page, based on the Godot Engine documentation conventions.

---

# CompressedTexture2D

> **Texture with 2 dimensions, optionally compressed**  
> The `CompressedTexture2D` class represents a 2‑D texture loaded from a `.ctex` file, which can be either an uncompressed image or a compressed format specific to Godot.

**Inherits**

```
CompressedTexture2D
 └─ Texture2D
      └─ Texture
           └─ Resource
                └─ RefCounted
                     └─ Object
```

## Description

`CompressedTexture2D` is used for efficient texture storage and loading. It supports several compressed image formats (such as ETC, ASTC, etc.) and can be configured in the Godot editor or via code. The compressed texture data is stored in a `.ctex` file, which can be generated automatically by the engine when a texture is imported.

## Signals

| Signal | Description |
|--------|-------------|
| `texture_changed` | Emitted when the texture data is updated. |
| `resized` | Emitted when the texture size changes. |

> *Note: The exact signal list can be found in the official Godot documentation or by inspecting the class in the editor.*

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | `int` | `0` | Texture width in pixels. |
| `height` | `int` | `0` | Texture height in pixels. |
| `format` | `int` | `0` | Compression format identifier. |
| `flags` | `int` | `0` | Texture flags (e.g. mipmaps, repeat, etc.). |
| `resource_path` | `String` | `""` | Path to the underlying `.ctex` file. |

> **Tip:** Use `get_*` and `set_*` methods to query and modify these properties at runtime.

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_data()` | `Image` | Returns the uncompressed pixel data of the texture. |
| `get_compressed()` | `PoolByteArray` | Returns the compressed binary data. |
| `load_from_file(path: String)` | `bool` | Loads a texture from the specified file. |
| `save_to_file(path: String)` | `bool` | Saves the current texture to a `.ctex` file. |
| `set_size(width: int, height: int)` | `void` | Changes the texture size. |
| `create_from_image(image: Image, flags: int = 0)` | `void` | Generates a compressed texture from an `Image` object. |

> **Documentation links**  
> • [Godot Docs – CompressedTexture2D](https://docs.godotengine.org/en/stable/classes/class_compressedtexture2d.html)  
> • [Image Class](https://docs.godotengine.org/en/stable/classes/class_image.html)  

## Usage Example

```gdscript
# Load a compressed texture
var ct = CompressedTexture2D.new()
if ct.load_from_file("res://my_texture.ctex"):
    var sprite = Sprite2D.new()
    sprite.texture = ct
    add_child(sprite)
```

## Related Classes

- **CompressedTexture2DArray** – Array of compressed 2‑D textures.  
- **CompressedCubemap** – Compressed 3‑D cubemap texture.  
- **CompressedCubemapArray** – Array of compressed cubemaps.

---

**For more information, refer to the Godot Engine class reference pages.**