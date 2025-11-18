**Label**  
---  

### Overview

- **Inherits**: `Control` → `CanvasItem` → `Node` → `Object`  
- **Purpose**: A control node for displaying plain text. It provides extensive options for horizontal and vertical alignment, text wrapping, and styling.

---

### Core Features

| Feature | Details |
|---------|---------|
| **Text rendering** | Renders UTF‑8 strings with support for basic formatting tags (`<b>`, `<i>`, `<u>`, etc.). |
| **Alignment** | Horizontal (`HALIGN_LEFT`, `HALIGN_CENTER`, `HALIGN_RIGHT`, `HALIGN_FILL`) and vertical (`VALIGN_TOP`, `VALIGN_CENTER`, `VALIGN_BOTTOM`, `VALIGN_FILL`) options. |
| **Wrapping** | Text can be wrapped automatically based on the control’s width, or clipped. |
| **Font & color** | Uses a `DynamicFont` or `BitmapFont`. Text color can be set via a `Color` property. |
| **Margins** | Padding and margins are adjustable to fine‑tune the text layout within the control. |

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `String` | `""` | The raw string to display. |
| `theme_override_font` | `Font` | `null` | Font used if overriding the theme. |
| `theme_override_font_size` | `int` | `12` | Size of the overridden font. |
| `theme_override_color` | `Color` | `Color(1,1,1,1)` | Text color override. |
| `align` | `int` (`HALIGN_*`) | `HALIGN_LEFT` | Horizontal alignment. |
| `valign` | `int` (`VALIGN_*`) | `VALIGN_TOP` | Vertical alignment. |
| `autowrap_mode` | `int` (`AUTOWRAP_*`) | `AUTOWRAP_WORD_SMART` | Text wrapping behavior. |
| `clip_text` | `bool` | `false` | Whether to clip text that overflows the control’s rectangle. |
| `custom_colors` | `Dictionary` | `{}` | Custom color overrides (e.g., `"font_color"`). |
| `custom_fonts` | `Dictionary` | `{}` | Custom font overrides. |
| `rect_min_size` | `Vector2` | `Vector2(0,0)` | Minimum size of the control. |

*(Full list of properties can be found in the official Godot class reference.)*

---

### Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `get_text()` | `String` | – | Returns the current text. |
| `set_text(String text)` | – | `text` | Sets the displayed text. |
| `get_font()` | `Font` | – | Returns the font used. |
| `set_font(Font font)` | – | `font` | Sets a custom font. |
| `get_font_size()` | `int` | – | Returns the font size. |
| `set_font_size(int size)` | – | `size` | Sets the font size. |
| `get_text_width()` | `int` | – | Returns the width of the rendered text. |
| `get_text_height()` | `int` | – | Returns the height of the rendered text. |
| `draw()` | – | – | (Override) Draws the text inside the control. |

*(For the full API, consult the Godot documentation.)*

---

### Signals

| Signal | Description |
|--------|-------------|
| `text_changed()` | Emitted when the `text` property changes. |
| `theme_changed()` | Emitted when the theme overrides are modified. |

---

### Example Usage

```gdscript
var label = Label.new()
label.text = "Hello, Godot!"
label.align = Label.HORIZONTAL_ALIGNMENT_CENTER
label.valign = Label.VERTICAL_ALIGNMENT_CENTER
label.rect_min_size = Vector2(200, 50)
add_child(label)
```

---

### Documentation Links

- [Godot Docs – Class Reference: Label](https://docs.godotengine.org/en/stable/classes/class_label.html)  
- [Godot Docs – Class Reference: Control](https://docs.godotengine.org/en/stable/classes/class_control.html)  

---