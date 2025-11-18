**LabelSettings**  
*Godot Engine (stable) – Class Reference*

---

### Overview

`LabelSettings` is a resource that provides a common set of settings to customize the text in a `Label` node. It encapsulates font, alignment, and visual properties so that multiple labels can share the same configuration.

> **Inheritance**  
> `Resource` → `RefCounted` → `Object`

---

## Properties

| Property | Type | Default | Description |
|---|---|---|---|
| `font` | `Font` | `null` | Font resource used by the label. |
| `font_size` | `int` | `0` | Point size of the font. 0 means automatic scaling. |
| `font_res_size` | `int` | `0` | Resolution size for the font; used for scaling. |
| `font_outline_size` | `int` | `0` | Thickness of the font outline. |
| `font_outline_color` | `Color` | `Color(0, 0, 0, 0)` | Color of the outline. |
| `font_color` | `Color` | `Color(1, 1, 1, 1)` | Primary font color. |
| `font_color2` | `Color` | `Color(0, 0, 0, 0)` | Secondary font color for gradients. |
| `font_shadow_offset` | `Vector2` | `Vector2(0, 0)` | Offset of the text shadow. |
| `font_shadow_color` | `Color` | `Color(0, 0, 0, 0)` | Shadow color. |
| `use_color` | `bool` | `true` | Whether the label uses the `font_color` property. |
| `use_outline` | `bool` | `false` | Whether the label draws the outline. |
| `use_shadow` | `bool` | `false` | Whether the label draws a shadow. |
| `h_align` | `TextServer.HAlign` | `LEFT` | Horizontal alignment of the text. |
| `v_align` | `TextServer.VAlign` | `TOP` | Vertical alignment of the text. |
| `wrap_mode` | `TextServer.WrapMode` | `WORD_BOUNDARY` | Text wrap behavior. |
| `autowrap_mode` | `TextServer.AutowrapMode` | `AUTOWRAP_WORD_BOUNDARY` | Automatic line wrapping. |
| `clip_text` | `bool` | `false` | Whether to clip text that overflows the bounding box. |
| `ellipsize_mode` | `TextServer.EllipsizeMode` | `ELLIPSIZE_NONE` | How to truncate overflowing text. |
| `custom_constants` | `Dictionary` | `{}` | Custom constants for the text server. |
| `custom_multiline` | `bool` | `false` | Whether to enable multiline text rendering. |
| `use_kerning` | `bool` | `true` | Whether to use kerning information. |

> **Note:** Enumerated types such as `TextServer.HAlign` can be accessed via the `TextServer` class in GDScript or C#. For example:

```gdscript
label_settings.h_align = TextServer.HAlign.CENTER
```

---

## Methods

`LabelSettings` does not expose public methods beyond the standard `Resource` API. It is primarily a data holder used by `Label`, `RichTextLabel`, and other UI nodes.

---

## Usage Example

```gdscript
# Create a new LabelSettings instance
var settings = LabelSettings.new()
settings.font = preload("res://fonts/Arial.ttf")
settings.font_size = 24
settings.font_color = Color(1, 0.8, 0.6)
settings.h_align = TextServer.HAlign.CENTER
settings.v_align = TextServer.VAlign.MIDDLE

# Apply to a Label node
var label = Label.new()
label.set_label_settings(settings)
label.text = "Hello, Godot!"
```

---

### Related Resources

- [Label](../classes/class_label.html) – Node that displays text using a `LabelSettings` resource.
- [RichTextLabel](../classes/class_richtextlabel.html) – Rich text display node with its own settings.
- [TextServer](../classes/class_textserver.html) – Low‑level text rendering API used by `LabelSettings`.

---

### See Also

- [Font](../classes/class_font.html) – Font resource type used by `LabelSettings`.
- [TextServer](../classes/class_textserver.html) – Enumerations for alignment, wrapping, ellipsize, etc.

---