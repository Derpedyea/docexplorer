# CanvasTexture

**Inheritance hierarchy**

```
CanvasTexture
  └─ Texture2D
       └─ Texture
            └─ Resource
                 └─ RefCounted
                      └─ Object
```

---

## Description

`CanvasTexture` is a 2D texture that can be dynamically rendered to from code.  
It can be used as an alternative to `ImageTexture` when you need to modify pixel data at runtime (e.g., drawing shapes, using a `CanvasItem` as a render target, or generating procedural textures).  
In addition to the main image, a `CanvasTexture` may also contain optional normal and specular maps for use with shaders that support them.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| **new** | `new()` | Creates a new instance of the texture. |
| **set_size** | `set_size(size: Vector2i)` | Sets the size of the texture in pixels. |
| **get_size** | `get_size() → Vector2i` | Returns the current size of the texture. |
| **lock** | `lock()` | Locks the texture for drawing. |
| **unlock** | `unlock()` | Unlocks the texture and updates the GPU data. |
| **get_canvas_item** | `get_canvas_item() → CanvasItem` | Returns the `CanvasItem` that renders into this texture. |
| **get_width** | `get_width() → int` | Returns the width in pixels. |
| **get_height** | `get_height() → int` | Returns the height in pixels. |
| **set_normal_map** | `set_normal_map(normal: Image)` | Sets a normal‑map image. |
| **set_specular_map** | `set_specular_map(specular: Image)` | Sets a specular‑map image. |
| **has_normal_map** | `has_normal_map() → bool` | Returns `true` if a normal map is set. |
| **has_specular_map** | `has_specular_map() → bool` | Returns `true` if a specular map is set. |
| **set_filter** | `set_filter(filter: bool)` | Enables or disables texture filtering. |
| **has_filter** | `has_filter() → bool` | Returns whether filtering is enabled. |
| **set_repeat** | `set_repeat(repeat: bool)` | Enables or disables texture repeating. |
| **has_repeat** | `has_repeat() → bool` | Returns whether repeating is enabled. |

> **Note**: The method names and signatures are based on the public API exposed in Godot 4.0.  
> The actual list may contain additional helper functions; consult the official documentation for full details.

---

## Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **size** | `Vector2i` | Size of the texture in pixels. | `Vector2i(0, 0)` |
| **normal_map** | `Image` | Normal‑map image. | `null` |
| **specular_map** | `Image` | Specular‑map image. | `null` |
| **filter** | `bool` | Whether texture filtering is enabled. | `true` |
| **repeat** | `bool` | Whether texture repeating is enabled. | `false` |

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted whenever the texture contents are updated. |

---

## Usage Example (GDScript)

```gdscript
extends Node2D

var canvas_tex : CanvasTexture

func _ready():
    # Create a 256x256 texture
    canvas_tex = CanvasTexture.new()
    canvas_tex.set_size(Vector2i(256, 256))

    # Create a canvas item to draw onto the texture
    var canvas = CanvasItem.new()
    canvas_tex.set_canvas_item(canvas)

    # Draw something
    canvas.lock()
    var img = Image.new()
    img.create(256, 256, false, Image.FORMAT_RGBA8)
    img.fill(Color(1, 0, 0, 1))  # fill with red
    canvas_tex.set_image(img)   # (pseudo‑code)
    canvas.unlock()

    # Use the texture in a sprite
    var sprite = Sprite2D.new()
    sprite.texture = canvas_tex
    add_child(sprite)
```

> **Tip**: For efficient dynamic drawing, lock the texture, modify the pixel buffer via `Image`, and then unlock it. The `CanvasItem` associated with the texture automatically updates the GPU representation.

---

## Reference Links

- [Godot Docs – CanvasTexture](https://docs.godotengine.org/en/stable/classes/class_canvastexture.html)  
- [Godot Docs – Texture2D](https://docs.godotengine.org/en/stable/classes/class_texture2d.html)  

---