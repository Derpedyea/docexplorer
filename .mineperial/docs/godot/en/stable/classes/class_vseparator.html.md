**VSeparator** – Godot Engine Documentation  
======================================================================

> A vertical separator used for separating other controls.

---

### Inheritance Chain
```
VSeparator
 └─ Separator
      └─ Control
           └─ CanvasItem
                └─ Node
                     └─ Object
```

---

### Description
`VSeparator` is a simple UI node that draws a vertical line. It is commonly used in user‑interface layouts to visually separate groups of controls without the need for a custom `StyleBox` or other drawing logic.

---

## Signals
_None_

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme_type_variation` | `String` | `""` | Override the theme type for this separator. |
| `custom_minimum_size` | `Vector2` | `Vector2(0, 0)` | Minimum size of the separator. |
| `theme_override_constants` | `Dictionary` | `{}` | Theme constants that override defaults. |
| `theme_override_colors` | `Dictionary` | `{}` | Theme colors that override defaults. |
| `theme_override_styles` | `Dictionary` | `{}` | Theme styles that override defaults. |

> **Note**: The full list of theme override keys is defined in the Godot editor’s theme editor. Common keys for separators are `separate_horizontal`, `separate_vertical`, `separate_light`, `separate_dark`, and `separate_mid`.

---

## Methods

| Method | Description |
|--------|-------------|
| `new()` | Creates a new instance of `VSeparator`. |
| `_init()` | Initializes the node. |
| `_get_minimum_size()` | Returns the minimum size for layout purposes. |
| `set_custom_minimum_size(size: Vector2)` | Sets a custom minimum size. |
| `get_custom_minimum_size() -> Vector2` | Returns the custom minimum size. |
| `set_theme_type_variation(variation: String)` | Sets the theme variation. |
| `get_theme_type_variation() -> String` | Gets the theme variation. |
| `set_theme_override_constant(name: String, value: Variant)` | Overrides a theme constant. |
| `get_theme_override_constant(name: String) -> Variant` | Gets a theme constant override. |
| `set_theme_override_color(name: String, color: Color)` | Overrides a theme color. |
| `get_theme_override_color(name: String) -> Color` | Gets a theme color override. |
| `set_theme_override_style(name: String, style: StyleBox)` | Overrides a theme style. |
| `get_theme_override_style(name: String) -> StyleBox` | Gets a theme style override. |

> *All methods are inherited from `Control` and `Separator`; only those explicitly added by `VSeparator` are shown here.*

---

## Example Usage

```gdscript
# Creating a vertical separator in code
var sep = VSeparator.new()
sep.custom_minimum_size = Vector2(1, 0)   # thin line
add_child(sep)

# In a scene file you can also add a VSeparator via the editor
# and adjust its properties in the Inspector.
```

---

## Related Nodes

* `HSeparator` – Horizontal separator.
* `Separator` – Base class for both vertical and horizontal separators.

---

### See Also

* [Control Class Reference](https://docs.godotengine.org/en/stable/classes/class_control.html)
* [Theme Class Reference](https://docs.godotengine.org/en/stable/classes/class_theme.html)

---