**Note**: The original page is a Godot Engine class reference for `CompressedTexture2DArray`.  
Below is a concise Markdown rendition of the key information available from the provided HTML. If you need the complete API list, methods, properties, and detailed documentation, please refer to the official Godot docs at the original URL.

---

# CompressedTexture2DArray

> **Description**  
> An array of 2‑dimensional textures, optionally compressed.

**Inheritance hierarchy**

```
Object
 └── RefCounted
     └── Resource
         └── Texture
             └── TextureLayered
                 └── CompressedTextureLayered
                     └── CompressedTexture2DArray
```

---

## Overview

`CompressedTexture2DArray` is a specialized texture type that stores multiple 2‑D texture layers in a single GPU resource. It is useful for:

* **Efficient batching** – render multiple textures with a single draw call.
* **Texture atlasing** – store many small textures in one large texture array.
* **Dynamic texture generation** – create or modify layers at runtime.

> **Tip**: Use `create()` to allocate the array and `set_layer()` or `get_layer()` to manipulate individual layers.

---

## Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `size` | `Vector2i` | The dimensions of each layer. |
| `format` | `int` | The pixel format (e.g., `Image.FORMAT_RGBA8`). |
| `layer_count` | `int` | Number of layers in the array. |

> **Note**: Properties are read‑write and can be accessed or modified via the Godot editor or GDScript.

---

## Core Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `create(size, format, layer_count)` | `void` | Allocates the array with the specified size, format, and number of layers. |
| `set_layer(layer, image)` | `void` | Sets a specific `Image` as a layer. |
| `get_layer(layer)` | `Image` | Retrieves the `Image` of the specified layer. |
| `set_layer_name(layer, name)` | `void` | Assigns a name to a layer. |
| `get_layer_name(layer)` | `String` | Returns the name of a layer. |
| `get_layers()` | `int` | Returns the total number of layers. |
| `has_alpha()` | `bool` | Indicates if any layer contains an alpha channel. |
| `duplicate()` | `CompressedTexture2DArray` | Creates a copy of the texture array. |
| `copy_from(texture)` | `void` | Copies data from another texture array. |

> **Usage example** (GDScript):

```gdscript
var tex_array = CompressedTexture2DArray.new()
tex_array.create(Vector2i(64, 64), Image.FORMAT_RGBA8, 4)

for i in range(tex_array.layer_count):
    var img = Image.new()
    img.load("res://layer_%d.png" % i)
    tex_array.set_layer(i, img)
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the texture array is modified. |

---

## Suggested Resources

* [TextureLayered Class Reference](../class_texture_layered.html) – Base class for layered textures.  
* [Image Class Reference](../class_image.html) – For creating and manipulating image data.  
* [Texture Class Reference](../class_texture.html) – General texture behavior.

---

### Further Reading

- [Godot Engine Documentation – Texture Types](https://docs.godotengine.org/en/stable/tutorials/visuals/texture.html)  
- [Godot Engine Documentation – Image Format](https://docs.godotengine.org/en/stable/classes/class_image.html#class-image)  

---