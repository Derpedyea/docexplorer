# HSeparator

**Inherits**: `Separator < Control < CanvasItem < Node < Object`

A horizontal line used for separating other controls. The `HSeparator` node draws a thin horizontal line that can be customized via its style properties.

---

## Description

`HSeparator` is a simple GUI control that renders a horizontal divider. It inherits from `Separator`, which provides basic line drawing functionality, and ultimately from `Control`, allowing it to be placed in any 2‑D UI layout. The separator can be styled with a custom theme or directly via its style properties.

---

## Signals

| Signal | Description | Parameters |
|--------|-------------|------------|
| `pressed()` | Emitted when the separator is pressed (if `mouse_filter` is set to `MouseFilterEnum.STOP`). | |
| `drag_started()` | Emitted when a drag operation starts (if the separator is configured as a draggable handle). | |
| `dragged(Vector2 delta)` | Emitted while dragging; `delta` is the drag vector. | `delta : Vector2` |
| `drag_ended()` | Emitted when a drag operation ends. | |

> *Note:* The above signals are part of the generic `Control`/`Separator` API. `HSeparator` itself does not emit additional signals beyond those defined in its ancestors.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `line_color` | `Color` | `Color(1, 1, 1, 1)` | The color of the line. |
| `thickness` | `int` | `1` | Thickness of the line in pixels. |
| `style` | `StyleBox` | – | Custom style box used for drawing. |
| `mouse_filter` | `MouseFilterEnum` | `MOUSE_FILTER_IGNORE` | Determines how mouse events are processed. |

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `is_pressed()` | `bool` | – | Returns whether the separator is currently pressed. |
| `set_line_color(Color)` | – | `color : Color` | Sets the line color. |
| `set_thickness(int)` | – | `thickness : int` | Sets the line thickness. |
| `get_line_color()` | `Color` | – | Returns the current line color. |
| `get_thickness()` | `int` | – | Returns the current line thickness. |

> *Note:* Additional methods are inherited from `Separator`, `Control`, and `CanvasItem`. These include functions for theme overrides, size calculations, and input handling.

---

## Usage Example

```gdscript
# Create a horizontal separator programmatically
var sep = HSeparator.new()
sep.set_thickness(3)
sep.set_line_color(Color(0.8, 0.2, 0.2))
add_child(sep)
```

In the editor, drag the `HSeparator` node into a `VBoxContainer` or any layout to create a visual divider between UI elements.

---

## Related Nodes

- **VSeparator** – Vertical equivalent of `HSeparator`.
- **Control** – Base class for all UI components.
- **Separator** – The generic separator base class that handles drawing of a line.

---

For more details on styling and advanced use, refer to the [Control](../classes/class_control.html) documentation and the theme editor.