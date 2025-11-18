**DPITexture**  
*Experimental: This class may be changed or removed in future versions.*

---

## Inheritance

```
Texture2D
 └─ Texture
     └─ Resource
         └─ RefCounted
             └─ Object
```

---

## Overview

`DPITexture` is an automatically scalable `Texture2D` that is generated from an SVG image. It allows you to use vector graphics as textures that maintain visual quality at any resolution or DPI.

> **Note** – Being an experimental class, its API may evolve or be removed in future Godot releases.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `src` | `String` | Path to the SVG file used to generate the texture. |
| `dpi_scale` | `float` | Scaling factor based on device DPI. |

> *The actual list of properties may differ; refer to the Godot Class Reference for the most up-to-date details.*

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `set_source(String path)` | `void` | `path` | Sets the SVG source file. |
| `get_source() -> String` | `String` | – | Returns the current SVG source path. |
| `refresh()` | `void` | – | Re-renders the texture from the current SVG source. |

> *Additional methods are available in the full API documentation.*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `texture_changed()` | – | Emitted when the underlying texture is regenerated. |

---

## Usage Example (GDScript)

```gdscript
var dpi_texture = DPITexture.new()
dpi_texture.set_source("res://icon.svg")
dpi_texture.refresh()

# Assign to a Sprite node
var sprite = Sprite2D.new()
sprite.texture = dpi_texture
```

---

## References

- [Godot 4.0 Class Reference – DPITexture](https://docs.godotengine.org/en/stable/classes/class_dpitexture.html)
- [SVG Texture Handling](https://docs.godotengine.org/en/stable/tutorials/2d/svg_texture_handling.html)

---