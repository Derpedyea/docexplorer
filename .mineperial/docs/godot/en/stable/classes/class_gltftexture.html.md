**GLTFTexture – Godot Engine (stable) documentation**

> **Class**: `GLTFTexture`  
> **Inheritance**: `Resource` → `RefCounted<Object>`  

---

## Description
`GLTFTexture` represents a texture in a glTF file. It holds information about how a texture is sampled and which image resource it refers to. This class is used internally by the GLTF importer and exporter.

---

## Properties

| Name          | Type | Default | Description |
|---------------|------|---------|-------------|
| `sampler`     | `int` | `-1` | Index of the associated `GLTFTextureSampler`. A value of `-1` means the default sampler is used. |
| `src_image`   | `int` | `-1` | Index of the source image in the glTF asset’s `images` array. A value of `-1` indicates no image. |
| *(Additional properties are available via the class API; consult the full reference for details.)* |

> **Note**: In many cases, you will interact with these properties only through the GLTF import/export workflow. Direct manipulation is generally reserved for advanced users or custom importer/exporter plugins.

---

## Methods

| Method | Arguments | Return Type | Description |
|--------|-----------|-------------|-------------|
| `get_sampler()` | – | `int` | Returns the current sampler index. |
| `set_sampler(sampler : int)` | `int` | – | Sets the sampler index. |
| `get_src_image()` | – | `int` | Returns the current source image index. |
| `set_src_image(src_image : int)` | `int` | – | Sets the source image index. |
| *(Other utility methods may be present; refer to the API for a complete list.)* |

> **Tip**: The `sampler` and `src_image` indices correspond to the arrays in the glTF file. When working with a `GLTFState`, use these indices to retrieve or modify the actual sampler or image objects.

---

## Tutorials & Usage

* **Runtime file loading and saving** – See the [GLTF tutorial](https://docs.godotengine.org/en/stable/tutorials/io/gltf.html) for an example of how to load and manipulate glTF textures at runtime.

---

## Related Classes

* `GLTFTextureSampler` – Defines sampling parameters (e.g., filtering, wrapping) for a texture.  
* `GLTFState` – Represents the entire glTF asset and contains collections of textures, images, and samplers.

---

## Quick Reference

```gdscript
var texture = GLTFTexture.new()
texture.sampler = 0          # Use the first sampler
texture.src_image = 1        # Use the second image
```

```c++
// C++ example (using GDExtension API)
GDExtensionClassInstance *texture = godot::Object::new<godot::GLTFTexture>();
texture->set_sampler(0);
texture->set_src_image(1);
```

---

## Links

* [GLTFTexture Class Reference](https://docs.godotengine.org/en/stable/classes/class_gltftexture.html)  
* [GLTFTextureSampler Class Reference](https://docs.godotengine.org/en/stable/classes/class_gltftexturesampler.html)  

---