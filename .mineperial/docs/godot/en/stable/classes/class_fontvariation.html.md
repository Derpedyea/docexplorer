# FontVariation

*Inherits:* `Font` → `Resource` → `RefCounted` → `Object`

`FontVariation` is a Godot 4 class that allows you to create a customized instance of a font with extra settings such as OpenType variations, simulated bold/italic styles, and various rendering options.

---

## Description

A variation of a font that can modify the underlying font’s style, size, weight, stretch, oversampling, and more. It also supports arbitrary OpenType variation coordinates.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `font` | `Font` | – | The base font to apply variations to. |
| `size` | `int` | `24` | Font pixel size. |
| `bold` | `bool` | `false` | Whether to render a simulated bold style. |
| `italic` | `bool` | `false` | Whether to render a simulated italic style. |
| `stretch` | `int` | `100` | Horizontal stretch as a percentage (100 = normal). |
| `oversampling` | `int` | `3` | Number of extra samples used for anti‑aliasing. |
| `antialiasing` | `int` | `1` | Anti‑aliasing mode: `0 = none`, `1 = msdf`, `2 = subpixel` |
| `fallback` | `Font` | `null` | Font to use when a glyph is missing in the main font. |
| `variation` | `Dictionary` | `{}` | OpenType variation coordinates (e.g., `{"wght": 400, "wdth": 100}`). |

---

## Methods

### `get_font() → Font`

Returns the base font used for this variation.

```gdscript
var base_font = font_variation.get_font()
```

---

### `set_font(font: Font) → void`

Sets the base font.

```gdscript
font_variation.set_font(my_font)
```

---

### `get_size() → int`

Gets the current font size.

```gdscript
var sz = font_variation.get_size()
```

---

### `set_size(size: int) → void`

Sets the font size.

```gdscript
font_variation.set_size(36)
```

---

### `is_bold() → bool`

Returns whether the simulated bold flag is active.

```gdscript
var bold = font_variation.is_bold()
```

---

### `set_bold(bold: bool) → void`

Enables/disables simulated bold.

```gdscript
font_variation.set_bold(true)
```

---

### `is_italic() → bool`

Returns whether the simulated italic flag is active.

```gdscript
var italic = font_variation.is_italic()
```

---

### `set_italic(italic: bool) → void`

Enables/disables simulated italic.

```gdscript
font_variation.set_italic(true)
```

---

### `get_stretch() → int`

Gets the current stretch value.

```gdscript
var stretch = font_variation.get_stretch()
```

---

### `set_stretch(stretch: int) → void`

Sets the horizontal stretch.

```gdscript
font_variation.set_stretch(120)
```

---

### `get_oversampling() → int`

Returns the current oversampling setting.

```gdscript
var oversamp = font_variation.get_oversampling()
```

---

### `set_oversampling(oversampling: int) → void`

Sets the oversampling factor.

```gdscript
font_variation.set_oversampling(4)
```

---

### `get_antialiasing() → int`

Gets the current anti‑aliasing mode.

```gdscript
var aa_mode = font_variation.get_antialiasing()
```

---

### `set_antialiasing(antialiasing: int) → void`

Sets the anti‑aliasing mode.

```gdscript
font_variation.set_antialiasing(FontVariation.ANTIALIASING_MSDF)
```

---

### `get_fallback() → Font`

Returns the fallback font.

```gdscript
var fallback = font_variation.get_fallback()
```

---

### `set_fallback(fallback: Font) → void`

Sets the fallback font.

```gdscript
font_variation.set_fallback(other_font)
```

---

### `get_variation() → Dictionary`

Returns the current OpenType variation dictionary.

```gdscript
var var_dict = font_variation.get_variation()
```

---

### `set_variation(variation: Dictionary) → void`

Sets the OpenType variation dictionary.

```gdscript
font_variation.set_variation({"wght": 700, "wdth": 120})
```

---

## Constants

| Constant | Value | Meaning |
|----------|-------|---------|
| `ANTIALIASING_NONE` | `0` | No anti‑aliasing |
| `ANTIALIASING_MSDF` | `1` | Multichannel signed distance field |
| `ANTIALIASING_SUBPIXEL` | `2` | Subpixel anti‑aliasing |

---

## Usage Example

```gdscript
var fvar = FontVariation.new()
fvar.set_font(preload("res://fonts/Roboto-Regular.ttf"))
fvar.set_size(32)
fvar.set_bold(true)
fvar.set_italic(true)
fvar.set_stretch(110)
fvar.set_antialiasing(FontVariation.ANTIALIASING_MSDF)

var label = Label.new()
label.add_theme_font_override("font", fvar)
add_child(label)
```

This creates a label that uses a bold, slightly widened version of *Roboto* rendered with MSDF anti‑aliasing.

---

### Notes

* `FontVariation` can be used in the editor’s Theme system to provide distinct styles for UI elements.
* The `variation` dictionary allows arbitrary OpenType axes, but only axes supported by the underlying font will take effect.
* For best visual quality on high‑resolution displays, consider setting `oversampling` to a higher value or using `ANTIALIASING_MSDF`.