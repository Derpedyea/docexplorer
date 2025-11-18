**CompressedCubemapArray** – Godot Engine 4.x (stable) documentation  
==============================================================

> *Inherited from:* **CompressedTextureLayered\< TextureLayered\< Texture\< Resource\< RefCounted\< Object**  

**Description**  
A cubemap array that is loaded from a file. The resource can be optionally compressed, which makes it suitable for runtime loading of multiple cubemaps (e.g., for environment maps, reflection probes, etc.). The class exposes the same API as a regular `TextureLayered` but with added support for compression and cubemap‑specific features such as face selection and mip‑mapping.

---

## Overview

The `CompressedCubemapArray` class provides a GPU‑optimized texture representation for cubemap arrays. It inherits the full set of methods from `CompressedTextureLayered`, which in turn inherits from `TextureLayered` → `Texture` → `Resource` → `RefCounted` → `Object`.

Typical usage involves loading a compressed cubemap array from a `.tres` or `.res` file, assigning it to a `Material`, or creating it procedurally in GDScript/C++.

---

## Key Features

- **Compression** – Supports standard image‑compression formats (DXT, ASTC, etc.) for each face of each cube.
- **Layered Access** – Allows per‑layer (per cubemap) read/write operations.
- **Mip‑maps** – Auto‑generation and use of mip‑maps for better performance at distance.
- **Dynamic Updates** – Can be updated at runtime (e.g., for changing environment lighting).

---

## Example (GDScript)

```gdscript
# Load a compressed cubemap array from a resource file
var cube_array : CompressedCubemapArray = preload("res://assets/env_cubemap.tres")

# Assign to a spatial material
var mat : SpatialMaterial = SpatialMaterial.new()
mat.set_cubemap_array(cube_array)

# Use the material on a mesh
var mesh_instance : MeshInstance3D = $MeshInstance
mesh_instance.mesh.surface_set_material(0, mat)
```

---

## Methods

| Method | Description |
|--------|-------------|
| **_get_layer_count() → int** | Returns the number of cubemaps in the array. |
| **_get_cubemap_layer(index: int) → Cubemap** | Returns a single cubemap from the array. |
| **_set_compression_mode(mode: CompressionMode)** | Sets the compression format used for the array. |
| **_generate_mipmaps()** | Generates mip‑maps for all layers. |

*Note: Full method list is available in the online reference; this table contains the most commonly used functions.*

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| **size** | `int` | Width/height of each cubemap face. |
| **layer_count** | `int` | Number of cubemaps in the array. |
| **format** | `int` | Pixel format of the texture (see `Image.Format`). |
| **compression** | `int` | Compression mode (see `Texture.COMPRESSION_*`). |
| **flags** | `int` | Texture flags (e.g., `Texture.FLAG_MIPMAPS`, `Texture.FLAG_ANISOTROPY`). |

---

## Signals

| Signal | Description |
|--------|-------------|
| **ready()** | Emitted when the texture is fully loaded and ready for rendering. |

---

## Usage Tips

- **Performance** – Keep the face resolution low if the cubemap is used only for reflections; high resolution is unnecessary for distant environment maps.
- **Compression Choice** – Use `DXT1` for opaque cubemaps, `DXT5` or `ASTC` for cubemaps that contain alpha or high‑dynamic‑range data.
- **Updating on GPU** – If you need to change a cubemap layer at runtime, call `texture.set_layer_data(layer, face, image)` and then `texture.generate_mipmaps()`.

---

## Related Resources

- [CompressedCubemap](../class_compressedcubemap.html) – Single cubemap with optional compression.
- [CompressedTexture2D](../class_compressedtexture2d.html) – 2‑D texture class with compression support.
- [TextureLayered](../class_texture_layered.html) – Base class for layered textures.

---