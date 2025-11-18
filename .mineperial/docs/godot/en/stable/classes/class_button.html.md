**Button – Godot Engine (stable) Documentation**

---

### Overview
`Button` is a themed UI control that can display text and an icon, and can be interacted with via mouse, keyboard, or a gamepad. It inherits from:

```
BaseButton
  └─ Control
     └─ CanvasItem
        └─ Node
           └─ Object
```

> *Inherited by:* `CheckBox`, `CheckButton`, `ColorPickerButton`, `MenuButton`, `OptionButton`

---

## Description
A `Button` can be pressed, released, or toggled. It supports themes, icon alignment, and custom signals.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `pressed()` | – | Emitted when the button is pressed. |
| `released()` | – | Emitted when the button is released. |
| `mouse_entered()` | – | Emitted when the mouse enters the button. |
| `mouse_exited()` | – | Emitted when the mouse exits the button. |
| `toggled(bool)` | `pressed` | Emitted when the button is toggled (for checkable buttons). |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `String` | `""` | Button label text. |
| `icon` | `Texture` | `null` | Icon displayed next to the text. |
| `icon_alignment` | `int` | `ALIGN_LEFT` | Alignment of the icon relative to the text. |
| `focus_mode` | `int` | `FOCUS_CLICK` | Focus mode of the button. |
| `disabled` | `bool` | `false` | If `true`, the button is non-interactive. |
| `flat` | `bool` | `false` | If `true`, the button has no background. |
| `button_up` | `Signal` | – | Alias for `released()`. |
| `button_down` | `Signal` | – | Alias for `pressed()`. |
| `button_pressed` | `Signal` | – | Alias for `pressed()`. |
| `toggle_mode` | `bool` | `false` | Enables toggle behavior. |
| `pressed` | `bool` | `false` | Current toggle state. |

---

## Methods

### `Button()`
Constructor. Creates a new `Button`.

### `set_text(String text)`
Sets the button's label.

### `get_text() -> String`
Returns the current label.

### `set_icon(Texture icon)`
Assigns an icon.

### `get_icon() -> Texture`
Returns the assigned icon.

### `set_pressed(bool pressed)`
Sets the button's toggle state (only if `toggle_mode` is `true`).

### `is_pressed() -> bool`
Returns the toggle state.

### `set_flat(bool flat)`
Enables/disables flat styling.

### `is_flat() -> bool`
Checks if flat styling is enabled.

### `set_focus_mode(int mode)`
Sets the focus mode (`FOCUS_CLICK`, `FOCUS_ALL`, `FOCUS_NONE`).

### `get_focus_mode() -> int`
Returns the current focus mode.

---

## Enumerations

```gdscript
enum Alignment {
    ALIGN_LEFT,
    ALIGN_RIGHT,
    ALIGN_CENTER
}
```

---

## Example Usage

```gdscript
var btn = Button.new()
btn.text = "Click Me"
btn.icon = preload("res://icon.png")
btn.connect("pressed", self, "_on_Button_pressed")

func _on_Button_pressed():
    print("Button pressed!")
```

---

## Notes

* The `Button` inherits all functionality of `BaseButton`, including signals such as `pressed()`, `released()`, `mouse_entered()`, and `mouse_exited()`.
* When `toggle_mode` is enabled, use `pressed` property to query state and `pressed()` signal to react.
* Themes can be applied via the inspector or using `Theme` objects to override appearance.

---