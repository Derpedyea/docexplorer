# ReferenceRect

A **ReferenceRect** is a UI control that draws a rectangular border around its rectangle. It is typically used for debugging layouts or designing user interfaces where a visual outline of a node is helpful.

> **Inheritance hierarchy:**  
> `ReferenceRect` → `Control` → `CanvasItem` → `Node` → `Object`

---

## Description

`ReferenceRect` provides a simple, non‑interactive visual aid. It renders a colored rectangle border only—no background or fill. This makes it ideal for:

* Quickly spotting the bounds of UI elements while designing scenes.
* Visual debugging of layout issues.
* Prototyping UI components before adding functional controls.

The control exposes properties to adjust its appearance (border width, color, visibility, etc.) and can be toggled on or off.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `border_color` | `Color` | `Color(1, 1, 1, 1)` | The color of the border. |
| `border_width` | `int` | `1` | The thickness of the border in pixels. |
| `draw_border` | `bool` | `true` | Whether to render the border. |
| `draw_fill` | `bool` | `false` | (Deprecated) Use `draw_border` instead. |
| `modulate` | `Color` | `Color(1,1,1,1)` | Modulates the color of the border. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_draw_border(draw: bool)` | `void` | Enables or disables the border drawing. |
| `is_draw_border() → bool` | `bool` | Returns whether the border is currently being drawn. |
| `set_border_color(color: Color)` | `void` | Sets the border color. |
| `get_border_color() → Color` | `Color` | Retrieves the current border color. |
| `set_border_width(width: int)` | `void` | Sets the border thickness. |
| `get_border_width() → int` | `int` | Returns the current border width. |
| `get_minimum_size() → Vector2` | `Vector2` | Overridden to return the minimum size based on border width. |

> *Note:* Methods inherited from `Control` (e.g., `set_size`, `rect_position`, etc.) are fully available.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `draw()` | `()` | Emitted when the control needs to be redrawn. Use to customize rendering if needed. |

---

## Example Usage

```gdscript
extends Control

func _ready():
    var rect = ReferenceRect.new()
    rect.border_color = Color(0.5, 0.8, 0.2, 1)
    rect.border_width = 4
    rect.rect_min_size = Vector2(200, 100)
    add_child(rect)
```

This snippet creates a `ReferenceRect` with a green border, 4 pixels thick, and a minimum size of 200×100 pixels, then adds it to the current control node.

---

## When to Use

* During UI prototyping, to see the layout boundaries.
* In debugging scenes to track the exact dimensions of UI nodes.
* As a temporary visual overlay while developing custom controls.

When the border is no longer needed, simply set `draw_border` to `false` or remove the node from the scene.

---

### Related Classes

* **Control** – Base class for all UI nodes.
* **Button**, **Panel**, **Container** – Common UI controls that may be wrapped in a `ReferenceRect` for visual debugging.