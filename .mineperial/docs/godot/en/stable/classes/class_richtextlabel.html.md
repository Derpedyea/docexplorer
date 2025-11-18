**RichTextLabel** – Godot 4 class reference  
===========================================

A control that displays text with a limited subset of BBCode markup, images,
and basic formatting. It can be used to show multiline text, to embed
images inside text, or to create rich UI widgets such as chat boxes,
tooltips, or dialog boxes.

---

### Inheritance

```
RichTextLabel ← Control ← CanvasItem ← Node ← Object
```

---

### Overview

* Can parse BBCode (e.g. `[color=red]red text[/color]`).
* Supports inline images via `[img]` tags.
* Text is automatically wrapped if `autowrap_mode` is enabled.
* Offers rich styling: bold, italics, underline, strikethrough,
  superscript, subscript, etc.
* Text can be animated or scrolled with a `RichTextEffect`.
* Supports custom signals when the user clicks on a link or image.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bbcode_enabled` | `bool` | `true` | Enable or disable BBCode parsing. |
| `autowrap_mode` | `int` (`RichTextLabel::AutowrapMode`) | `AUTOWRAP_WORD_BOUND` | Wrap mode for multiline text. |
| `outline_size` | `int` | `0` | Size of the outline around text. |
| `outline_color` | `Color` | `Color(0, 0, 0, 1)` | Color of the text outline. |
| `fit_content` | `bool` | `false` | If `true`, the control resizes to fit its content. |
| `selectable` | `bool` | `false` | Allow the text to be selected by the mouse. |
| `scroll_active` | `bool` | `false` | Enable automatic scrolling for long text. |
| `scroll_delay` | `float` | `0.2` | Delay before scrolling starts (seconds). |
| `scroll_speed` | `float` | `20.0` | Pixels per second during scroll. |
| `parse_mode` | `int` (`RichTextLabel::ParseMode`) | `PARSE_MODE_BBCODE` | Mode used to parse the text. |
| `language` | `String` | `""` | Language to use for the text (for localization). |
| `alignment` | `int` (`RichTextLabel::Alignment`) | `ALIGN_LEFT` | Text alignment within the control. |
| `margin_left` / `margin_top` / `margin_right` / `margin_bottom` | `int` | `0` | Margin inside the control. |
| `custom_fonts` | `Dictionary` | `{}` | Dictionary of custom fonts to be used. |
| `default_color` | `Color` | `Color(1,1,1,1)` | Default text color. |
| `placeholder` | `String` | `""` | Text to show when no content is set. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `meta_clicked(meta: Variant)` | `meta` | Emitted when a clickable meta tag is clicked. |
| `link_clicked(url: String)` | `url` | Emitted when a link (`[url]`) is clicked. |
| `image_clicked(path: String)` | `path` | Emitted when an image (`[img]`) is clicked. |
| `scroll_started()` | | Emitted when auto‑scroll starts. |
| `scroll_finished()` | | Emitted when auto‑scroll ends. |

---

## Methods

> **Note**: All methods below are available directly on `RichTextLabel`.  
> The signatures shown are the GDScript equivalents.

```gdscript
func _ready() -> void
```
Called when the node enters the scene tree.

```gdscript
func get_bbcode() -> String
```
Return the current BBCode text displayed.

```gdscript
func set_bbcode(bbcode: String) -> void
```
Set the BBCode string to display.

```gdscript
func clear() -> void
```
Clear all text and formatting.

```gdscript
func append_bbcode(bbcode: String) -> void
```
Append BBCode to the current text.

```gdscript
func append_text(text: String) -> void
```
Append plain text to the current content.

```gdscript
func get_line_count() -> int
```
Return the number of lines in the label.

```gdscript
func get_text() -> String
```
Return plain text without BBCode tags.

```gdscript
func set_text(text: String) -> void
```
Set plain text (BBCode tags are removed).

```gdscript
func add_custom_effect(effect: RichTextEffect) -> void
```
Add a custom effect to the label (e.g., glow, shadow).

```gdscript
func get_total_height() -> int
```
Return the total height of the rendered content.

```gdscript
func get_total_width() -> int
```
Return the total width of the rendered content.

```gdscript
func set_custom_stylebox(stylebox: StyleBox) -> void
```
Override the default stylebox used for the control.

```gdscript
func set_custom_font(font: Font, size: int = -1) -> void
```
Set a custom font for the whole label or for a specific size.

```gdscript
func set_custom_font_size(size: int) -> void
```
Set the default font size (applied when `size` is `-1`).

```gdscript
func set_selectable(enable: bool) -> void
```
Toggle whether the label’s text can be selected.

```gdscript
func set_autowrap(mode: int) -> void
```
Set the autowrap mode.

```gdscript
func set_outline_size(size: int) -> void
```
Set the outline thickness of the text.

```gdscript
func set_outline_color(color: Color) -> void
```
Set the outline color.

```gdscript
func set_default_color(color: Color) -> void
```
Set the default text color.

```gdscript
func set_margin(margin_name: String, value: int) -> void
```
Set any of the four margins (`margin_left`, etc.).

```gdscript
func get_scroll_offset() -> int
```
Return the current scroll offset in pixels.

```gdscript
func set_scroll_offset(offset: int) -> void
```
Set the scroll offset manually.

```gdscript
func set_scroll_speed(speed: float) -> void
```
Set pixels per second scroll speed.

```gdscript
func set_scroll_delay(delay: float) -> void
```
Set delay before scrolling starts.

```gdscript
func set_language(lang: String) -> void
```
Set the language for localization.

```gdscript
func set_alignment(alignment: int) -> void
```
Set text alignment (`ALIGN_LEFT`, `ALIGN_CENTER`, `ALIGN_RIGHT`).

```gdscript
func get_paragraphs() -> Array
```
Return an array of parsed paragraph objects (internal use).

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `AutowrapMode` | enum | `AUTOWRAP_NONE`, `AUTOWRAP_WORD_BOUND`, `AUTOWRAP_AROUND`, `AUTOWRAP_WORD` |
| `Alignment` | enum | `ALIGN_LEFT`, `ALIGN_CENTER`, `ALIGN_RIGHT` |
| `ParseMode` | enum | `PARSE_MODE_BBCODE`, `PARSE_MODE_RAW` |
| `BBCodeTag` | enum | `BBCODE_COLOR`, `BBCODE_SIZE`, `BBCODE_BOLD`, `BBCODE_ITALIC`, ... |
| `Meta` | ... | Meta tag types used in signals |

---

## Example Usage

```gdscript
# Add a RichTextLabel to a scene
var label = RichTextLabel.new()
label.position = Vector2(50, 20)
label.bbcode_enabled = true
label.autowrap_mode = RichTextLabel.AutowrapMode.AUTOWRAP_WORD_BOUND
label.set_default_color(Color(1, 0.5, 0))
label.set_bbcode("[b]Hello[/b], [i]world[/i]! [url=https://godotengine.org]Godot[/url]")

# Add a custom effect (e.g., glow)
var glow = RichTextEffect.new()
glow.effect_name = "glow"
# … configure effect …
label.add_custom_effect(glow)

add_child(label)
```

---

## BBCode Reference

| BBCode Tag | Description | Example |
|------------|-------------|---------|
| `[b]text[/b]` | Bold | `[b]Bold Text[/b]` |
| `[i]text[/i]` | Italic | `[i]Italic Text[/i]` |
| `[u]text[/u]` | Underline | `[u]Underlined[/u]` |
| `[color=hex]text[/color]` | Color | `[color=#ff0000]Red[/color]` |
| `[size=20]text[/size]` | Font size | `[size=20]Large Text[/size]` |
| `[url=link]text[/url]` | Hyperlink | `[url=https://godotengine.org]Godot[/url]` |
| `[img=path]` | Inline image | `[img=res://icon.png]` |
| `[quote]text[/quote]` | Blockquote | `[quote]A quote[/quote]` |
| `[center]text[/center]` | Centered | `[center]Centered Text[/center]` |
| `[right]text[/right]` | Right‑aligned | `[right]Right Text[/right]` |
| `[left]text[/left]` | Left‑aligned | `[left]Left Text[/left]` |

---

## Autowrap Modes

* `AUTOWRAP_NONE` – No wrapping; text may overflow.
* `AUTOWRAP_WORD_BOUND` – Wrap at word boundaries.
* `AUTOWRAP_AROUND` – Wrap around the bounding rectangle.
* `AUTOWRAP_WORD` – Wrap at any word boundary, even inside words.

---

## Styling with Fonts

You can provide a custom font per character size:

```gdscript
var font = DynamicFont.new()
font.font_data = load("res://fonts/Roboto.ttf")
font.size = 16
label.set_custom_font(font)
```

If you need a different font for a specific size, add it to the `custom_fonts`
dictionary:

```gdscript
label.custom_fonts[20] = load("res://fonts/AnotherFont.tres")
```

---

## Scrolling Text

Enable scrolling:

```gdscript
label.scroll_active = true
label.scroll_delay = 1.0
label.scroll_speed = 50.0
```

You can also control it manually:

```gdscript
label.set_scroll_offset(100)   # Start 100px down
label.set_scroll_speed(100)    # Fast scroll
```

---

## Custom Effects

Create a custom effect by subclassing `RichTextEffect`:

```gdscript
class MyGlow extends RichTextEffect:
    var glow_color = Color(1,1,0)
    func _process_custom_fx(chars, pos, prev_pos, custom_fx):
        # ... modify `chars` to add glow
        return true

var effect = MyGlow.new()
label.add_custom_effect(effect)
```

---

### Common Pitfalls

* **Text not wrapping** – Ensure `autowrap_mode` is set and `fit_content`
  is `false` if you want the label to respect its size.
* **Missing images** – Image paths must be absolute or start with
  `res://` or `user://`. They are parsed at runtime.
* **Scrolling disabled** – Set `scroll_active = true`. Otherwise,
  `scroll_started()` and `scroll_finished()` will never emit.

---

### See Also

* [`RichTextEffect`](https://docs.godotengine.org/en/stable/classes/class_richtexteffect.html) – Define custom visual effects.
* [`RichTextLabel`](https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html) – Full API reference.