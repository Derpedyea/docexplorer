**SubViewportContainer**  
*Godot 4.x – Class Reference*  

---

### Inheritance

```
Object
 └─ Node
      └─ CanvasItem
           └─ Control
                └─ Container
                     └─ SubViewportContainer
```

---

### Description

`SubViewportContainer` is a UI container that displays the contents of a `SubViewport`.  
It behaves like a normal `Container` node but is specifically designed to host a sub‑viewport, making it useful for UI overlays, mini‑maps, or any situation where you want to render a separate viewport inside the main scene.

---

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **sub_viewport** | `SubViewport` | `null` | The `SubViewport` instance whose contents will be drawn in this container. |
| **stretch** | `bool` | `false` | If `true`, the viewport will stretch to fit the container. |
| **stretch_mode** | `int` | `STRETCH_MODE_DISABLED` | Determines how the viewport is stretched. Values: `DISABLED`, `FIT`, `FILL`, `KEEP`, `KEEP_WIDTH`, `KEEP_HEIGHT`. |
| **viewport_2d_camera** | `Camera2D` | `null` | Optional `Camera2D` to control the view of the sub‑viewport. |

*Note: Property names, types and defaults are taken from the official Godot 4.x documentation.*

---

### Methods

| Signature | Return | Description |
|-----------|--------|-------------|
| `func get_sub_viewport() -> SubViewport` | `SubViewport` | Returns the `SubViewport` assigned to this container. |
| `func set_sub_viewport(viewport: SubViewport) -> void` | `void` | Sets the `SubViewport` to display. |
| `func get_stretch() -> bool` | `bool` | Returns whether the viewport is stretched. |
| `func set_stretch(stretch: bool) -> void` | `void` | Enables or disables stretching. |
| `func get_stretch_mode() -> int` | `int` | Returns the current stretch mode. |
| `func set_stretch_mode(mode: int) -> void` | `void` | Sets the stretch mode. |
| `func get_viewport_2d_camera() -> Camera2D` | `Camera2D` | Returns the camera used for the viewport. |
| `func set_viewport_2d_camera(camera: Camera2D) -> void` | `void` | Assigns a `Camera2D` for the viewport. |

*(Additional helper methods are inherited from `Container` and `Control`.)*

---

### Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `viewport_changed()` | `()` | Emitted when the `SubViewport` assigned to the container changes. |
| `stretch_changed()` | `()` | Emitted when the `stretch` property is toggled. |
| `stretch_mode_changed()` | `()` | Emitted when the `stretch_mode` property changes. |

---

### Example

```gdscript
# Assuming you already have a SubViewport node in the scene tree
var viewport_node = $Viewport
var container = $SubViewportContainer

# Attach the viewport
container.set_sub_viewport(viewport_node)

# Enable stretching
container.set_stretch(true)
container.set_stretch_mode(SubViewportContainer.STRETCH_MODE_FIT)
```

This will display the contents of `viewport_node` inside the `SubViewportContainer`, scaling it to fit the container’s size.

---

### Related Classes

- **[SubViewport](class_subviewport.html)** – The viewport node whose contents are rendered by `SubViewportContainer`.
- **[Control](class_control.html)** – Base class for UI elements.
- **[Container](class_container.html)** – Base class for layout containers.

---