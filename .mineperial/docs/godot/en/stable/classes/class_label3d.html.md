**Label3D – Godot Engine Documentation (Stable)**

---

### Overview

`Label3D` is a node that displays plain text in 3D space. It inherits from:

```
GeometryInstance3D
  └─ VisualInstance3D
        └─ Node3D
              └─ Node
                    └─ Object
```

---

### Description

A **Label3D** node renders a 3D text label. By adjusting its properties, you can control:

- **Text** – The string to display.
- **Font** – The font resource or custom font settings.
- **Alignment** – Horizontal and vertical text alignment.
- **Color** – Text color and transparency.
- **Size & Scale** – Font size and 3D scaling.
- **Billboard** – Whether the label faces the camera automatically.
- **Shadow** – Drop shadow or outline effects.

---

### Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | `String` | The displayed text. |
| `custom_font` | `Font` | Optional custom font. |
| `font_size` | `int` | Size in points. |
| `horizontal_alignment` | `Enum` | Left, center, right. |
| `vertical_alignment` | `Enum` | Top, center, bottom. |
| `color` | `Color` | Text color. |
| `modulate` | `Color` | Global color modulation. |
| `billboard_mode` | `Enum` | Normal, disabled, or enabled. |
| `use_shadows` | `bool` | Enables shadow rendering. |

*(See the full list in the official Godot API reference.)*

---

### Key Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_text()` | `void set_text(String text)` | Sets the label text. |
| `get_text()` | `String get_text()` | Retrieves the current text. |
| `set_font_size()` | `void set_font_size(int size)` | Sets the font size. |
| `get_font_size()` | `int get_font_size()` | Gets the current font size. |
| `set_custom_font()` | `void set_custom_font(Font font)` | Assigns a custom font. |
| `get_custom_font()` | `Font get_custom_font()` | Retrieves the custom font. |
| `set_billboard_mode()` | `void set_billboard_mode(Mode mode)` | Configures billboard behavior. |
| `get_billboard_mode()` | `Mode get_billboard_mode()` | Returns current billboard mode. |

*(For complete API details, refer to the Godot documentation.)*

---

### Usage Example (GDScript)

```gdscript
extends Label3D

func _ready():
    text = "Hello, World!"
    font_size = 24
    color = Color(1, 0, 0)  # Red
```

---

### See Also

- [Label (2D)](../class_label.html) – 2D text display node.
- [TextServer](../class_textserver.html) – Underlying text rendering backend.
- [Control](../class_control.html) – GUI-related nodes.

---

### Notes

* The `Label3D` node is useful for in‑world captions, floating health bars, or any scenario where text must be rendered within a 3D scene.
* For performance considerations, consider using `World3D` shaders or `MeshInstance3D` with `TextMesh` if you need dynamic 3D text with complex materials.

---