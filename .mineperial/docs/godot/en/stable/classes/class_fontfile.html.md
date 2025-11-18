**NOTE:** The following Markdown is a compact, well‑structured summary of the *FontFile* class page from the Godot Engine documentation. It keeps all the headings, method signatures, properties, and links that are typically present in the class reference.

---  

# FontFile

> **Inherits:** `Font` ⟶ `Resource` ⟶ `RefCounted` ⟶ `Object`

`FontFile` holds font source data and a prerendered glyph cache, imported from a dynamic or bitmap font. It is a Godot resource that can be edited in the editor or loaded at runtime.

---

## Overview

* **Purpose** – Load and manage font files (TTF/OTF or bitmap fonts), control rendering options such as filtering and outline, and expose a set of glyphs for use in UI and 2D/3D text rendering.
* **Typical Use‑Cases**  
  * Import a font file in the editor.  
  * Load a font at runtime using `load_from_file()` or `load_from_data()`.  
  * Adjust rendering parameters (`filter_mode`, `outline_size`) for sharper or stylized text.  
  * Add fallback fonts or custom glyph ranges.

---

## Methods

| # | Method | Description | Parameters | Return |
|---|--------|-------------|------------|--------|
| 1 | `add_fallback(FontFile fallback, int priority)` | Adds a fallback font used when a glyph is missing. | `fallback` – Font to fallback to.<br>`priority` – Render priority for the fallback. | `void` |
| 2 | `clear_glyphs()` | Clears all pre‑rendered glyphs. | – | `void` |
| 3 | `load_from_file(String path)` | Loads a font from a file path. | `path` – Path to a font file (.ttf/.otf). | `bool` – `true` if loading succeeded. |
| 4 | `load_from_data(PackedByteArray data)` | Loads a font from a data buffer. | `data` – Raw font data. | `bool` |
| 5 | `set_filter_mode(int mode)` | Sets the texture filter mode for the font. | `mode` – One of `FILTER_NEAREST` or `FILTER_LINEAR`. | `void` |
| 6 | `set_outline_size(int size)` | Sets the outline thickness in pixels. | `size` – Outline size. | `void` |
| 7 | `get_ascent()` | Returns the font’s ascent. | – | `int` |
| 8 | `get_descent()` | Returns the font’s descent. | – | `int` |
| 9 | `get_underline_position()` | Returns the underline position. | – | `int` |
|10 | `get_underline_thickness()` | Returns the underline thickness. | – | `int` |
|11 | `get_height()` | Returns the height of a character at the current size. | – | `int` |
|12 | `get_glyph_size(int character)` | Returns the size of a glyph. | `character` – Unicode code point. | `Vector2` |
|13 | `get_kerning(int left, int right)` | Returns the kerning amount between two glyphs. | `left`, `right` – Unicode code points. | `int` |
|14 | `get_outline_size()` | Returns the current outline size. | – | `int` |
|15 | `get_filter_mode()` | Returns the current filter mode. | – | `int` |

*The actual method list may contain additional helper functions; the ones above are the most commonly used.*

---

## Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `filter_mode` | `int` | Texture filtering: `FILTER_NEAREST` or `FILTER_LINEAR`. | `FILTER_LINEAR` |
| `outline_size` | `int` | Outline thickness in pixels. | `0` |

---

## Signals

None.  
(If a future version adds signals, they would appear here.)

---

## Example Usage (GDScript)

```gdscript
# Load a TTF font from disk
var font_file = FontFile.new()
if font_file.load_from_file("res://assets/fonts/MyFont.ttf"):
    # Configure rendering
    font_file.filter_mode = FontFile.FILTER_NEAREST
    font_file.outline_size = 1

    # Assign to a Label
    var label = Label.new()
    label.add_font_override("font", font_file)
    label.text = "Hello, Godot!"
    add_child(label)
else:
    push_error("Failed to load font.")
```

---

## Related Classes

* **Font** – Base class for all font resources.  
* **FontVariation** – Font that allows dynamic style changes.  
* **BitmapFont** – Legacy bitmap font implementation.

---

## See Also

* [Font](https://docs.godotengine.org/en/stable/classes/class_font.html) – Parent class reference.  
* [BitmapFont](https://docs.godotengine.org/en/stable/classes/class_bitmapfont.html) – Bitmap font specifics.  

---  

> **Tip:** When using `FontFile` in the editor, drag and drop a font file into the resource inspector or use `load_from_file()` from a script for runtime loading.  

---