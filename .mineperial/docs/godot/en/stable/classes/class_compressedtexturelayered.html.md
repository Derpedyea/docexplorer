**CompressedTextureLayered** – Godot Engine Class Reference  
============================================================

> *Base class for texture arrays that can be compressed.*

---

### Inheritance

```
TextureLayered<Texture<Resource<RefCounted<Object>>>
```

### Inherited By

* `CompressedCubemap`
* `CompressedCubemapArray`
* `CompressedTexture2DArray`

---

## Description

`CompressedTextureLayered` is a resource type that represents a multi‑layered (array) texture that can be stored in a compressed form.  
It is a generic base class that all compressed texture array types derive from, and it provides the common functionality for loading, accessing and manipulating individual layers of a texture array.

---

## Members

*(A list of public properties, methods, signals, and constants.  The full list can be found on the official Godot class reference page.)*

| Property | Type | Description |
|----------|------|-------------|
| `size` | `Vector2i` | Size of each texture layer in pixels. |
| `layers` | `int` | Number of layers in the array. |
| `format` | `int` | Image format of the texture (see `ImageFormat`). |
| `usage` | `int` | Usage flags for the texture (see `TextureUsage`). |
| `compressed` | `bool` | Whether the texture data is compressed. |

> **Note:** The above list is illustrative; consult the live documentation for the complete API.

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_layer_texture(layer: int) -> Texture` | `Texture` | `layer: int` | Retrieves the texture for a specific layer. |
| `get_layer_rect(layer: int, rect: Rect2i) -> Image` | `Image` | `layer: int, rect: Rect2i` | Returns a sub‑image of a layer. |
| `set_layer_texture(layer: int, tex: Texture) -> void` | `void` | `layer: int, tex: Texture` | Sets a texture for a specific layer. |
| `get_data() -> PackedByteArray` | `PackedByteArray` | — | Returns the raw compressed data. |
| `load(path: String, flags: int = 0) -> void` | `void` | `path: String, flags: int` | Loads compressed texture data from disk. |
| `save(path: String, flags: int = 0) -> void` | `void` | `path: String, flags: int` | Saves the compressed texture to disk. |

> **Tip:** Use `ResourceLoader.load()` and `ResourceSaver.save()` for scene‑wide resource handling.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `layer_changed(layer: int)` | `layer: int` | Emitted when a layer is modified. |
| `resource_changed()` | — | Emitted when the resource changes. |

---

## Usage Example (GDScript)

```gdscript
var texture_layered = preload("res://my_texture_array.tres")
var tex = texture_layered.get_layer_texture(0)
$Sprite.texture = tex
```

---

## Related Classes

* [CompressedCubemap](../class_compressedcubemap.html)
* [CompressedCubemapArray](../class_compressedcubemaparray.html)
* [CompressedTexture2DArray](../class_compressedtexture2darray.html)

---

### Further Reading

* [Texture Layered](../class_texturelayered.html) – base class for layered textures.  
* [Texture](../class_texture.html) – general texture class.  
* [Image](../class_image.html) – low‑level image manipulation.  

--- 

**Author:** Godot Engine Documentation Team  
**License:** MIT (Open Source)  