# Font

> **Abstract base class for fonts and font variations.**

---

## Inheritance

```
Resource ← RefCounted ← Object ← Font
```

**Inherited by**

- `FontFile`
- `FontVariation`
- `SystemFont`

---

## Description

`Font` is the base class for all font types used in Godot. It provides a uniform interface for rendering text, querying font metrics, and manipulating font properties. The class is abstract – concrete font implementations (e.g., `FontFile`, `FontVariation`, `SystemFont`) provide the actual data and rendering logic.

---

## Signals

| Signal | Description | Parameters |
|--------|-------------|------------|
| `theme_changed` | Emitted when the theme changes and the font must be reloaded. | — |

---

## Methods

> *All methods are listed in the order they appear in the official documentation. Names prefixed with `_` are internal.*

| Return Type | Method | Parameters | Description |
|-------------|--------|------------|-------------|
| `int` | `get_height()` | `float size` | Returns the line height for the specified font size. |
| `int` | `get_ascent()` | `float size` | Returns the ascent metric for the font at the specified size. |
| `int` | `get_descent()` | `float size` | Returns the descent metric for the font at the specified size. |
| `int` | `get_underline_position()` | `float size` | Returns the position of the underline relative to baseline. |
| `int` | `get_underline_thickness()` | `float size` | Returns the thickness of the underline. |
| `float` | `get_spacing(int index, float size)` | `int index`, `float size` | Returns the spacing value for the given index (`0` = general, `1` = character, `2` = line, etc.). |
| `int` | `get_kerning(int from, int to, float size)` | `int from`, `int to`, `float size` | Returns the kerning value between two character codes. |
| `int` | `get_advance(int character, float size)` | `int character`, `float size` | Returns the advance width of a character. |
| `Rect2` | `get_bounding_rect(String text, float size)` | `String text`, `float size` | Returns the bounding rectangle for the given text. |
| `int` | `get_string_width(String text, float size)` | `String text`, `float size` | Returns the pixel width of a string. |
| `Vector2` | `get_string_size(String text, float size)` | `String text`, `float size` | Returns the pixel size of a string (width × height). |
| `Dictionary` | `get_glyphs()` | – | Returns a dictionary mapping Unicode code points to glyph data. |
| `String` | `get_name()` | – | Returns the internal name of the font. |
| `void` | `set_ascent(int ascent)` | `int ascent` | Sets the ascent metric for the font. |
| `void` | `set_descent(int descent)` | `int descent` | Sets the descent metric for the font. |
| `void` | `set_underline_position(int position)` | `int position` | Sets the underline position. |
| `void` | `set_underline_thickness(int thickness)` | `int thickness` | Sets the underline thickness. |
| `void` | `set_spacing(int index, int value)` | `int index`, `int value` | Sets spacing for the given index. |
| `void` | `set_kerning(int from, int to, int value)` | `int from`, `int to`, `int value` | Sets kerning between two characters. |
| `void` | `set_advance(int character, int value)` | `int character`, `int value` | Sets advance width for a character. |
| `void` | `set_bounding_rect(Rect2 rect)` | `Rect2 rect` | Sets the bounding rectangle used for text layout. |
| `void` | `set_string_width(int width)` | `int width` | Sets the string width used for text layout. |
| `void` | `set_string_size(Vector2 size)` | `Vector2 size` | Sets the string size used for text layout. |
| `void` | `set_glyphs(Dictionary glyphs)` | `Dictionary glyphs` | Sets the glyph mapping for the font. |

> **Note:** Many of the setter methods are protected and intended to be overridden by subclasses.

---

## Properties

| Type | Property | Default | Description |
|------|----------|---------|-------------|
| `int` | `ascent` | `0` | Font ascent value. |
| `int` | `descent` | `0` | Font descent value. |
| `int` | `underline_position` | `0` | Underline position from baseline. |
| `int` | `underline_thickness` | `0` | Thickness of the underline. |
| `int` | `spacing` | `0` | General spacing value. |
| `int` | `line_spacing` | `0` | Spacing between lines. |
| `int` | `character_spacing` | `0` | Spacing between characters. |
| `Dictionary` | `glyphs` | `{}` | Mapping of Unicode code points to glyph data. |

---

## Enums

```gdscript
enum FontType {
    TYPE_BITMAP,
    TYPE_VECTOR,
    TYPE_SYSTEM
}
```

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `MAX_GLYPH_CACHE_SIZE` | `1024` | Maximum number of glyphs cached. |
| `DEFAULT_CHAR` | `32` | Default Unicode space character. |

---

## Example Usage

```gdscript
var font = load("res://myfont.tres") as Font
var size = 18.0

# Get metrics
var ascent = font.get_ascent(size)
var descent = font.get_descent(size)
var height = font.get_height(size)

# Measure text
var width = font.get_string_width("Hello, Godot!", size)

# Draw a string
var canvas = CanvasItem.new()
canvas.draw_string(font, Vector2(0, ascent), "Hello, Godot!", size)
```

---

## See Also

- [FontFile](../classes/class_fontfile.html)
- [FontVariation](../classes/class_fontvariation.html)
- [SystemFont](../classes/class_systemfont.html)

---