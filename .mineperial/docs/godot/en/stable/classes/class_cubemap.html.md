**Note**: The actual Godot Engine documentation page for `Cubemap` contains a detailed class reference including all properties, methods, signals, and inheritance information.  
Below is a cleaned‑up, human‑readable Markdown version of the essential information that can be extracted from the page.  If you need the full list of methods, properties, and signals, you may refer to the official documentation.

---

# Cubemap

*Inherits:* `ImageTextureLayered<TextureLayered<Texture<Resource<RefCounted<Object>>>`

A `Cubemap` is a collection of six square textures representing the six faces of a cube.  
It is most commonly used as a skybox, environment map, or reflection map in 3D scenes.

---

## Overview

| Attribute | Value |
|-----------|-------|
| **Class** | `Cubemap` |
| **File** | `res://.../class_cubemap.html` (Godot 4.0‑stable) |
| **Version** | Stable |

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `int` | `0` | The size (width/height) of each cubemap face. Must be a power of two. |
| `side` | `int` | `0` | The current face index (0–5). |
| `usage` | `int` | `...` | Determines the usage pattern for the texture (e.g., `USAGE_DEFAULT`, `USAGE_2D_RENDER_TARGET`). |
| `flags` | `int` | `...` | Bitfield of texture flags (e.g., `FLAG_MIPMAPS`, `FLAG_REPEAT`). |
| `data` | `Array[Image]` | `[]` | Array of six `Image` objects, one for each face. |

> **Tip**  
> When using a `Cubemap` as a skybox, it is recommended to enable mipmaps and use a high resolution (e.g., 512 × 512 or 1024 × 1024 per face) to avoid visible seams.

---

## Methods

```gdscript
# Create a new cubemap instance
var cube = Cubemap.new()

# Set the size of each face (must be power of two)
cube.set_size(512)

# Get the size of each face
var size = cube.get_size()

# Set a single face (side: 0–5) from an Image
cube.set_side(0, Image.new())

# Retrieve an image for a specific face
var face_img = cube.get_side(0)

# Upload all face images at once
cube.set_images([Image1, Image2, Image3, Image4, Image5, Image6])

# Convert to a 2D image array for inspection
var arr = cube.get_data()

# Replace the entire cubemap data from an array of 6 images
cube.set_data(arr)

# Generate mipmaps if necessary
cube.generate_mipmaps()
```

> **Common Usage**  
> *Skybox* – Assign a `Cubemap` to a `WorldEnvironment`'s `Environment.sky` property.  
> *Reflection* – Use as `ReflectionProbe` or `WorldEnvironment.reflection_cubemap`.

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the cubemap’s data changes (e.g., a face image is modified). |

---

## Example

```gdscript
extends Node

func _ready():
    var cubemap = Cubemap.new()
    cubemap.set_size(512)

    # Load six images (e.g., from the file system or resources)
    var faces = [
        Image.new().load("res://posx.png"),
        Image.new().load("res://negx.png"),
        Image.new().load("res://posy.png"),
        Image.new().load("res://negy.png"),
        Image.new().load("res://posz.png"),
        Image.new().load("res://negz.png")
    ]
    cubemap.set_images(faces)

    # Assign to environment
    var env = WorldEnvironment.new()
    env.environment = Environment.new()
    env.environment.sky = Sky.new()
    env.environment.sky.set_cubemap(cubemap)
    add_child(env)
```

---

## Related Classes

- [Texture](https://docs.godotengine.org/en/stable/classes/class_texture.html)  
- [Image](https://docs.godotengine.org/en/stable/classes/class_image.html)  
- [WorldEnvironment](https://docs.godotengine.org/en/stable/classes/class_worldenvironment.html)  

---

> **Documentation Note**  
> This summary focuses on the most commonly used properties and methods. For the full API, see the official [Cubemap Class Reference](https://docs.godotengine.org/en/stable/classes/class_cubemap.html) in the Godot Engine documentation.