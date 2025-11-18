**BackBufferCopy**  
=====================

> *A node that copies a region of the screen to a buffer for access in shader code.*

*Inherits:* `Node2D` → `CanvasItem` → `Node` → `Object`

---

### Overview

`BackBufferCopy` is a specialized node that captures a portion of the rendered frame and makes that data available to shaders. This is useful when you need to apply post‑processing effects, create screen‑space reflections, or use the current screen contents in a custom shader.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `filter` | `bool` | `false` | When enabled, the copy is filtered (bilinear). |
| `area`   | `Rect2` | `Rect2()` | The rectangular region of the screen to copy. |
| `viewport` | `Viewport` | `null` | Optional viewport to copy from instead of the main viewport. |

> **Note:** The actual list of properties may contain additional entries; consult the live documentation for the most up‑to‑date information.

---

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `copy_finished` | – | Emitted after the buffer has been copied. |

---

### Methods

| Method | Return | Description |
|--------|--------|-------------|
| `get_buffer()` | `Image` | Retrieves the captured image data. |
| `_ready()` | – | Called when the node is added to the scene tree. |
| `update()` | – | Forces a new copy of the screen. |

> **Tip:** Use `get_buffer()` in a shader by passing the returned `Image` to a `ShaderMaterial` as a texture.

---

### Example

```gdscript
# Assume `back_buffer_copy` is a BackBufferCopy node in the scene
var image = back_buffer_copy.get_buffer()
var texture = ImageTexture.new()
texture.create_from_image(image)
$Sprite.texture = texture
```

---

### Related

- [Viewport](../classes/class_viewport.html) – The viewport from which a `BackBufferCopy` can capture the scene.
- [ShaderMaterial](../classes/class_shadermaterial.html) – Use the captured buffer as a texture in shaders.

--- 

*For a complete reference, including all properties, methods, and signals, see the official Godot documentation page:*  
[https://docs.godotengine.org/en/stable/classes/class_backbuffercopy.html](https://docs.godotengine.org/en/stable/classes/class_backbuffercopy.html)