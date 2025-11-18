**CompressedTexture3D**  
========================

`CompressedTexture3D` is the VRAM‑compressed counterpart of an `Image` (or `Image3D`).  
It allows you to store 3‑D textures in a compressed format for efficient memory usage
while still being usable by the rendering pipeline.

---

### Inheritance

```
CompressedTexture3D  →  Texture3D
```

---

### Description

A `CompressedTexture3D` holds 3‑dimensional texture data in a compressed form.  
It can be created from an `Image` or directly from raw compressed data, and it
supports mip‑map generation, different usage flags, and various pixel formats.

---

### Signals

| Signal | Description |
|--------|-------------|
| – | *No signals are emitted by this class.* |

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `width` | `int` | `0` | Texture width in texels. |
| `height` | `int` | `0` | Texture height in texels. |
| `depth` | `int` | `0` | Texture depth in texels. |
| `format` | `int` | – | Pixel format (`Image.FORMAT_*`). |
| `usage_bits` | `int` | – | Usage flags (`Texture.UsageBit.*`). |
| `flags` | `int` | – | Additional compression flags. |

> **Note** – The full list of properties can be found in the Godot class reference.

---

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `create(width: int, height: int, depth: int, format: int, usage_bits: int)` | `void` | Allocate a new texture with the given dimensions and format. |
| `set_size(width: int, height: int, depth: int)` | `void` | Resize the texture. |
| `set_data(image: Image)` | `void` | Upload image data to the texture; the image is internally compressed. |
| `get_data() -> PackedByteArray` | `PackedByteArray` | Retrieve the compressed texture data. |
| `generate_mipmaps()` | `void` | Create mip‑map levels for the texture. |
| `get_size() -> Vector3i` | `Vector3i` | Return the current size of the texture. |
| `is_compressed() -> bool` | `bool` | Check whether the texture data is compressed. |

> **Tip** – Use `Image.create()` to prepare a raw image before passing it to `set_data()`.  
> For example:

```gdscript
var img = Image.new()
img.create(64, 64, false, Image.FORMAT_RGBA8)
var tex = CompressedTexture3D.new()
tex.create(64, 64, 1, Image.FORMAT_RGBA8, Texture.UsageBit.TEXTURE_3D)
tex.set_data(img)
```

---

### Virtual Methods

| Method | Description |
|--------|-------------|
| `get_data()` | Virtual override that returns the texture’s data. |
| `get_size()` | Virtual override that returns the texture’s size. |

---

### Related Classes

- **Texture3D** – Base class for 3‑D textures.  
- **Image** – 2‑D image class; use `Image.get_data()` to obtain raw pixel data.  
- **Image3D** – 3‑D image class (Godot 4.2+).  
- **CompressedTextureLayered** – Similar API but for layered 2‑D textures.  

--- 

> **Documentation source**: Godot Engine 4.x class reference – [CompressedTexture3D](https://docs.godotengine.org/en/stable/classes/class_compressedtexture3d.html).