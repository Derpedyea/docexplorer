**SubViewport**

> *Godot 4.x* – Class reference for `SubViewport`

---

### Inheritance
```
Viewport → Node → Object
```

### Description
`SubViewport` isolates a rectangular region of a scene and renders it to a texture. Unlike a regular `Viewport`, it does **not** create a window or draw directly to the screen. It can be used to render a 3D or 2D scene to a `ViewportTexture`, for UI overlays, live‑preview panes, or any situation where you need a separate rendering target embedded inside another scene.

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `Vector2i` | `Vector2i(0, 0)` | The pixel size of the viewport. |
| `stretch` | `bool` | `false` | If `true`, the viewport contents will be stretched to fit its container. |
| `transparent_bg` | `bool` | `false` | If `true`, the background will be transparent (useful for overlaying on top of other UI). |
| `render_target_v_flip` | `bool` | `false` | Flip the render target vertically. |
| `render_target_3d` | `bool` | `false` | Enables 3D rendering inside this viewport. |
| `render_target_2d` | `bool` | `true` | Enables 2D rendering inside this viewport. |
| `render_target_clear_mode` | `int` | `0 (CLEAR_MODE_ALWAYS)` | How the viewport clears its buffer each frame. |
| `render_target_update_mode` | `int` | `2 (UPDATE_MODE_ALWAYS)` | When the viewport updates (e.g. every frame, when visible, etc.). |
| `render_target_msaa` | `int` | `0 (MSAA_DISABLED)` | Multisample anti‑aliasing level. |
| `render_target_vflip` | `bool` | `false` | Whether the output is vertically flipped. |
| `render_target_use_hdr` | `bool` | `false` | Enable HDR for this viewport. |
| `render_target_v_sync` | `bool` | `true` | Synchronise rendering with the vertical sync. |

> **Note**: The full list of properties can be found in the Godot editor’s inspector or by hovering over the field names in the script editor.

---

## Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `get_texture()` | `ViewportTexture` | Returns a texture that can be used to display the rendered contents. |
| `set_size(Vector2i size)` | `void` | Sets the viewport size. |
| `set_stretch(bool enable)` | `void` | Enables or disables stretching. |
| `set_use_hdr(bool enable)` | `void` | Enables or disables HDR rendering. |
| `set_render_target_v_flip(bool enable)` | `void` | Flips the output vertically. |
| `set_render_target_clear_mode(int mode)` | `void` | Sets the clear mode (`CLEAR_MODE_ALWAYS`, `CLEAR_MODE_NEVER`, `CLEAR_MODE_BEGIN`). |
| `set_render_target_update_mode(int mode)` | `void` | Sets the update mode (`UPDATE_MODE_ALWAYS`, `UPDATE_MODE_WHEN_VISIBLE`, `UPDATE_MODE_DISABLED`). |
| `set_render_target_msaa(int level)` | `void` | Sets the MSAA level. |

> For full API details, refer to the Godot editor’s script documentation or the official API reference.

---

## Signals
| Signal | Arguments | Description |
|--------|-----------|-------------|
| `viewport_changed` | – | Emitted when the viewport’s rendering parameters change (size, clear mode, etc.). |
| `size_changed` | `Vector2i new_size` | Emitted when the viewport’s size changes. |

---

## Usage Example

```gdscript
# Create a SubViewport programmatically
var sub_viewport = SubViewport.new()
sub_viewport.size = Vector2i(512, 512)
sub_viewport.stretch = true
add_child(sub_viewport)

# Add a simple 3D scene
var camera = Camera3D.new()
sub_viewport.add_child(camera)
camera.current = true

# Retrieve the rendered texture
var viewport_tex = sub_viewport.get_texture()
# This texture can now be used in a MeshInstance, Sprite2D, etc.
```

---

### Common Use‑Cases

* **UI Overlays** – Render a 3D mini‑map or live camera feed to a 2D UI panel.
* **Live Previews** – Display a live preview of a camera or particle system inside an editor tool.
* **Split‑Screen** – Render multiple game worlds or players to separate viewports within a single scene.
* **Dynamic Textures** – Use `SubViewportTexture` to create procedural textures that update in real time.

---

### Related Nodes

* [`ViewportContainer`](https://docs.godotengine.org/en/stable/classes/class_viewportcontainer.html) – A UI container that automatically adjusts a viewport’s size to fit its parent.
* [`SubViewportContainer`](https://docs.godotengine.org/en/stable/classes/class_subviewportcontainer.html) – Convenience node for embedding a `SubViewport` in the UI.

---

**Further Reading**

* [Viewport](https://docs.godotengine.org/en/stable/classes/class_viewport.html) – Base class for all viewports.
* [ViewportTexture](https://docs.godotengine.org/en/stable/classes/class_viewporttexture.html) – Texture type that displays a viewport’s output.