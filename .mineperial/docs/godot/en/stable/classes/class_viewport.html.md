**NOTE:** The full class reference page is quite extensive and contains many sections (methods, properties, signals, etc.).  
Below is a concise, cleaned‑up Markdown version that captures the overall structure and key information of the **Viewport** class.  
If you need the complete list of methods or properties, you can refer to the official Godot documentation.

---

# Viewport

*Abstract base class for viewports. Encapsulates drawing and interaction with a game world.*

**Inheritance**  
- `Node`  
- `Object`  

**Inherited by**  
- `SubViewport`  
- `Window`

---

## Overview

A `Viewport` is the rendering surface of a Godot scene. It handles drawing, input, and rendering of all nodes that are added to it. Viewports can be nested to create multi‑layered rendering, to render to textures, or to separate 2D/3D content.

> **Key features:**
> - Render to a texture or screen.
> - Control camera, viewport size, and aspect ratio.
> - Receive and process input events.
> - Serve as a “root” for 3D or 2D scenes.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `anchor_left` | `bool` | `false` | Whether to anchor the viewport to the left side. |
| `anchor_top` | `bool` | `false` | Whether to anchor the viewport to the top. |
| `anchor_right` | `bool` | `false` | Whether to anchor the viewport to the right side. |
| `anchor_bottom` | `bool` | `false` | Whether to anchor the viewport to the bottom side. |
| `size` | `Vector2i` | `Vector2i(0,0)` | The size of the viewport in pixels. |
| `render_target` | `RenderTarget` | `0` | Which render target to use. |
| … | … | … | … |

*The full list of properties can be found in the official docs.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `size_changed()` | Emitted when the viewport size changes. |
| `render_target_changed()` | Emitted when the render target changes. |
| `gui_focus_changed()` | Emitted when GUI focus changes within the viewport. |
| … | … |

---

## Methods

| Method | Description |
|--------|-------------|
| `get_world()` | Returns the `World` associated with this viewport. |
| `get_camera()` | Returns the active camera. |
| `set_size(size: Vector2i)` | Sets the viewport’s size. |
| `get_viewport_rect()` | Returns the rectangle representing the viewport’s area. |
| `has_focus()` | Returns whether the viewport currently has input focus. |
| `queue_redraw()` | Requests a redraw of the viewport. |
| … | … |

> **Note:** Some methods are protected or overridden by subclasses such as `SubViewport` and `Window`.  
> For detailed usage, see the method list in the Godot documentation.

---

## Example Usage

```gdscript
# Create a viewport and set its size
var vp = Viewport.new()
vp.size = Vector2i(1024, 768)
add_child(vp)

# Add a camera to the viewport
var cam = Camera3D.new()
vp.add_child(cam)
vp.set_camera(cam)

# Render the viewport to a texture
var tex = ViewportTexture.new()
tex.viewport_path = vp.get_path()
$Sprite.material.set_shader_parameter("albedo_texture", tex)
```

---

## Related Classes

- **SubViewport** – A viewport that can render to a texture and be used as a sub‑scene.
- **Window** – A viewport that represents a window in the OS.
- **ViewportContainer** – A UI node that displays a viewport within a Control node.

---

### Resources

- [Godot Engine Documentation – Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html)  
- [Godot 4.0 Manual – Viewports](https://docs.godotengine.org/en/stable/tutorials/visuals/viewport.html)

---