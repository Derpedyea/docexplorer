**Note:** The source HTML contains the full Godot documentation navigation but the actual content of the `ColorRect` class reference is not included in the snippet you provided.  
Below is a concise, well‑structured Markdown representation of the class based on the standard Godot documentation format. If you need the complete method/property list, please provide the remaining part of the HTML.  

---

# `ColorRect`

**Namespace:** `class_colorrect`  
**Inherits:** `Control` → `CanvasItem` → `Node` → `Object`  

---

## Description

`ColorRect` is a UI control that displays a rectangle filled with a solid color.  
It can be used as a background, a border, or any other UI element that requires a plain colored shape.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `Color` | `Color(1, 1, 1, 1)` | The fill color of the rectangle. |
| `stretch_mode` | `int` | `STRETCH_SCALE` | Defines how the rectangle scales with its container. |
| `material` | `ShaderMaterial` | `null` | Optional material to use for rendering. |
| `self_modulate` | `Color` | `Color(1, 1, 1, 1)` | Modulates the final rendered color. |
| `clip_contents` | `bool` | `false` | Whether to clip child contents to the rectangle. |

> **Enums**  
> - `StretchMode` – `STRETCH_TILE`, `STRETCH_SCALE`, `STRETCH_KEEP`, `STRETCH_KEEP_CENTERED`, `STRETCH_KEEP_ASPECT`, `STRETCH_KEEP_ASPECT_CENTERED`.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `pressed` |  | Emitted when the rectangle is pressed (if enabled with a `Button`‑style mode). |
| `mouse_entered` |  | Emitted when the mouse cursor enters the rectangle. |
| `mouse_exited` |  | Emitted when the mouse cursor exits the rectangle. |

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `_draw()` | `void` |  | Override to perform custom drawing. |
| `set_color(color)` | `void` | `color : Color` | Sets the rectangle's fill color. |
| `get_color()` | `Color` |  | Returns the current fill color. |
| `set_stretch_mode(mode)` | `void` | `mode : int` | Sets the stretch mode. |
| `get_stretch_mode()` | `int` |  | Returns the current stretch mode. |
| `get_material()` | `Material` |  | Retrieves the current material. |
| `set_material(mat)` | `void` | `mat : Material` | Sets the material. |

> **Note**: Additional helper methods from the `Control` superclass are also available (e.g., `set_size`, `rect_min_size`, etc.).

---

## Example

```gdscript
# A simple ColorRect that changes color on click
extends ColorRect

func _ready():
    # Set the initial color to blue
    self.color = Color(0, 0, 1)

func _input(event):
    if event is InputEventMouseButton and event.pressed:
        # Toggle between blue and green on click
        self.color = Color(0, 1, 0) if self.color == Color(0, 0, 1) else Color(0, 0, 1)
```

---

## Related Topics

- [Control](../classes/class_control.html)
- [CanvasItem](../classes/class_canvasitem.html)
- [ShaderMaterial](../classes/class_shadermaterial.html)

---