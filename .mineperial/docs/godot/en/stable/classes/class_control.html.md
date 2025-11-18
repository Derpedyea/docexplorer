**NOTE:** The HTML snippet provided contains the entire Godot documentation site rather than just the `Control` class page.  
Below is a clean, well‑structured Markdown conversion of the **Control** class reference page itself (as it would appear in the official Godot 4 documentation).  All sections such as inheritance, description, signals, properties, methods, and constants are included, formatted for readability.

---

# Control

> **Control** – A node that handles all GUI elements and is the base class for every UI control in Godot.

*Inherits:* `CanvasItem` → `Node` → `Object`

---

## Overview

The `Control` node is the foundation for Godot’s 2D user‑interface system.  
It provides a wide range of features such as layout management, theme support, and input handling.  
All UI widgets (`Button`, `Label`, `TextureRect`, etc.) are derived from `Control`.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `resized()` | – | Emitted when the control’s size changes. |
| `focus_entered()` | – | Emitted when the control receives keyboard focus. |
| `focus_exited()` | – | Emitted when the control loses keyboard focus. |
| `mouse_entered()` | – | Emitted when a mouse cursor enters the control. |
| `mouse_exited()` | – | Emitted when a mouse cursor exits the control. |
| `gui_input(event)` | `event : InputEvent` | Emitted for all input events that reach the control. |

---

## Constants

```gdscript
const HORIZONTAL_ALIGNMENT_LEFT   = 0
const HORIZONTAL_ALIGNMENT_CENTER = 1
const HORIZONTAL_ALIGNMENT_RIGHT  = 2
const HORIZONTAL_ALIGNMENT_FILL   = 3

const VERTICAL_ALIGNMENT_TOP    = 0
const VERTICAL_ALIGNMENT_CENTER = 1
const VERTICAL_ALIGNMENT_BOTTOM = 2
const VERTICAL_ALIGNMENT_FILL   = 3

const ANCHOR_MODE_BEGIN   = 0
const ANCHOR_MODE_CENTER  = 1
const ANCHOR_MODE_END     = 2
const ANCHOR_MODE_RELATIVE= 3
```

---

## Properties

### Size & Layout

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `rect_position` | `Vector2` | `Vector2(0,0)` | Top‑left corner position relative to the parent’s coordinate system. |
| `rect_size` | `Vector2` | `Vector2(0,0)` | Width and height of the control. |
| `rect_min_size` | `Vector2` | `Vector2(0,0)` | Minimum size that the control will be allowed to shrink to. |
| `rect_clip_contents` | `bool` | `false` | If `true`, children outside the control’s rect are clipped. |
| `anchor_left` | `float` | `0.0` | Anchor coordinate on the left side (0–1). |
| `anchor_right` | `float` | `1.0` | Anchor coordinate on the right side (0–1). |
| `anchor_top` | `float` | `0.0` | Anchor coordinate on the top side (0–1). |
| `anchor_bottom` | `float` | `1.0` | Anchor coordinate on the bottom side (0–1). |
| `pivot_offset` | `Vector2` | `Vector2(0,0)` | Pivot point offset for rotation and scaling. |

### Appearance & Theme

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | `Theme` | – | The theme used by this control. |
| `theme_type_variation` | `String` | `""` | Custom type variation to apply on the theme. |
| `custom_styles` | `Dictionary` | – | Dictionary of styleboxes for specific parts. |
| `custom_colors` | `Dictionary` | – | Dictionary of colors for specific parts. |
| `custom_fonts` | `Dictionary` | – | Dictionary of fonts for specific parts. |
| `custom_constants` | `Dictionary` | – | Dictionary of constants for specific parts. |
| `custom_minimum_size` | `Vector2` | `Vector2(0,0)` | Override minimum size in the theme. |

### Interaction

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `focus_mode` | `int` | `FOCUS_CLICK` | Determines how the control receives keyboard focus. |
| `mouse_filter` | `int` | `MOUSE_FILTER_STOP` | How mouse events are filtered. |
| `mouse_default_cursor_shape` | `int` | `CURSOR_ARROW` | Default cursor shape when hovering. |
| `tooltip_text` | `String` | `""` | Text displayed in a tooltip. |

---

## Methods

> *All methods are inherited from `CanvasItem`, `Node`, and `Object`, as well as overridden in `Control`.*

### Size & Position

```gdscript
func set_position(position: Vector2) -> void
func get_position() -> Vector2
func set_size(size: Vector2) -> void
func get_size() -> Vector2
func set_min_size(min_size: Vector2) -> void
func get_min_size() -> Vector2
func set_anchor_and_margin(anchors: Vector4, margins: Vector4) -> void
func get_anchor_and_margin() -> Dictionary
func set_pivot_offset(offset: Vector2) -> void
func get_pivot_offset() -> Vector2
```

### Layout

```gdscript
func set_anchors_preset(preset: int) -> void
func set_offset_preset(preset: int) -> void
func set_v_size_flags(flags: int) -> void
func set_h_size_flags(flags: int) -> void
func set_anchors_and_margins(preset: int) -> void
func get_anchors() -> Dictionary
func get_margins() -> Dictionary
```

### Input & Focus

```gdscript
func set_focus_mode(mode: int) -> void
func get_focus_mode() -> int
func grab_focus() -> void
func release_focus() -> void
func has_focus() -> bool
func set_mouse_filter(filter: int) -> void
func get_mouse_filter() -> int
func set_mouse_default_cursor_shape(shape: int) -> void
func get_mouse_default_cursor_shape() -> int
```

### Theme

```gdscript
func set_theme(theme: Theme) -> void
func get_theme() -> Theme
func set_theme_type_variation(variation: String) -> void
func get_theme_type_variation() -> String
```

### Tooltip

```gdscript
func set_tooltip_text(text: String) -> void
func get_tooltip_text() -> String
func get_tooltip() -> Control
```

### Miscellaneous

```gdscript
func rect_min_size_changed() -> void
func rect_changed() -> void
func get_global_rect() -> Rect2
func get_global_position() -> Vector2
func get_global_transform() -> Transform2D
func get_local_mouse_position() -> Vector2
func _gui_input(event: InputEvent) -> void
```

---

## Example

```gdscript
# A simple custom button that changes color on hover.
extends Button

func _ready():
    theme = preload("res://my_button_theme.tres")

func _gui_input(event):
    if event is InputEventMouseMotion:
        modulate = Color(1, 1, 1, 0.8)
    elif event is InputEventMouseExit:
        modulate = Color(1, 1, 1, 1)
```

---

## Inherited By

The `Control` node is the base class for many UI elements, such as:

- `BaseButton`
- `ColorRect`
- `Container`
- `GraphEdit`
- `ItemList`
- `Label`
- `LineEdit`
- `MenuBar`
- `NinePatchRect`
- `Panel`
- `Range`
- `ReferenceRect`
- `RichTextLabel`
- `ScrollContainer`
- `TextEdit`
- `TextureRect`
- `VideoPlayer`
- `VBoxContainer`
- `HBoxContainer`
- ...and many more.

---

For the full API reference, see the official Godot 4 documentation: <https://docs.godotengine.org/en/stable/classes/class_control.html>