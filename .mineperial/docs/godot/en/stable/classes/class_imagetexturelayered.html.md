**ImageTextureLayered**  
========================

`ImageTextureLayered` is a low‑level texture type used by Godot to store multiple images (layers).  
It inherits from `TextureLayered<Texture<Resource<RefCounted<Object>>>` and is the base class for the following texture types:

* `Cubemap`
* `CubemapArray`
* `Texture2DArray`

---

### Overview

* Stores **multiple `Image` objects** (layers) in a single texture resource.  
* Supports common texture operations such as setting image data per layer, querying dimensions, and adjusting format/alpha handling.  
* Available in **GDScript** as a `Resource`, and can be used directly in the editor or through code.

---

### Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the texture data is modified. |

---

### Methods

| Return | Method | Parameters | Notes |
|--------|--------|------------|-------|
| `int` | `get_width()` |  | Width of the texture in pixels. |
| `int` | `get_height()` |  | Height of the texture in pixels. |
| `int` | `get_layer_count()` |  | Number of image layers. |
| `Size2i` | `get_size()` |  | Size of the texture as a `Vector2i`. |
| `void` | `set_size(Size2i size)` | `size`: Desired width/height | Resizes all layers to the specified size. |
| `Image` | `get_image_layer(int layer)` | `layer`: Layer index | Returns the `Image` instance for the requested layer. |
| `void` | `set_image_layer(int layer, Image image)` | `layer`, `image`: Layer to replace | Replaces a layer with a new image. |
| `Image.TextureFormat` | `get_format()` |  | Returns the pixel format used. |
| `void` | `set_format(Image.TextureFormat format)` | `format` | Sets the pixel format. |
| `Image.AlphaMode` | `get_alpha_mode()` |  | Returns the alpha handling mode. |
| `void` | `set_alpha_mode(Image.AlphaMode mode)` | `mode` | Sets the alpha handling mode. |
| `void` | `generate_mipmaps()` |  | Generates mipmaps for the texture. |
| `void` | `release()` |  | Releases the texture from GPU memory. |
| `ImageTextureLayered` | `duplicate()` |  | Returns a deep copy of the texture. |

*(The actual Godot API offers additional helper methods such as `create_from_images()`, `set_storage()`, `get_storage()`, etc., which are omitted here for brevity.)*

---

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `width` | `int` | Read‑only. Texture width. |
| `height` | `int` | Read‑only. Texture height. |
| `layer_count` | `int` | Read‑only. Number of layers. |
| `size` | `Size2i` | Read‑only. Texture dimensions. |
| `format` | `Image.TextureFormat` | Read/Write. Pixel format. |
| `alpha_mode` | `Image.AlphaMode` | Read/Write. Alpha channel handling. |
| `usage_flags` | `uint32` | Read/Write. Bitmask describing texture usage. |

---

### Example

```gdscript
# Create a 256x256 texture with 4 layers
var tex := ImageTextureLayered.new()
tex.set_size(Vector2i(256, 256))

# Fill each layer with a different colored image
for i in range(4):
    var img = Image.new()
    img.create(256, 256, false, Image.FORMAT_RGBA8)
    img.fill(Color(1, 0, 0, 1) if i == 0 else
             Color(0, 1, 0, 1) if i == 1 else
             Color(0, 0, 1, 1) if i == 2 else
             Color(1, 1, 0, 1))
    tex.set_image_layer(i, img)

# Use the texture on a Material
var mat = StandardMaterial3D.new()
mat.albedo_texture = tex
```

---

### Related Documentation

* [Image](../class_image.html) – low‑level image class used to supply data to `ImageTextureLayered`.  
* [TextureLayered](../class_texturerectlayered.html) – generic base class for layered textures.  
* [Texture](../class_texture.html) – general texture API.  

---