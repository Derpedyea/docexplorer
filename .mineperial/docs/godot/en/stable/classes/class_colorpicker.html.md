**ColorPicker**

A widget that provides an interface for selecting or modifying a color.

**Inherits**  
`VBoxContainer` → `BoxContainer` → `Container` → `Control` → `CanvasItem` → `Node` → `Object`

---

## Signals

| Signal | Description |
|--------|-------------|
| `color_changed` | Emitted when the color is changed. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `Color` | `Color(1, 1, 1, 1)` | The current selected color. |
| `allow_alpha` | `bool` | `true` | Whether the picker allows selection of alpha values. |
| `pickable` | `bool` | `true` | Whether the picker is interactive. |
| `hsv` | `Vector3` | `Vector3(0, 0, 1)` | Hue‑saturation‑value representation of the current color. |

---

## Methods

```gdscript
func _init() -> void
```
Initializes the ColorPicker.

```gdscript
func get_color() -> Color
```
Returns the currently selected color.

```gdscript
func set_color(color: Color) -> void
```
Sets the current color.

```gdscript
func get_hsv() -> Vector3
```
Returns the HSV representation of the current color.

```gdscript
func set_hsv(hsv: Vector3) -> void
```
Sets the current color using an HSV value.

```gdscript
func get_pickable() -> bool
```
Returns whether the picker is interactive.

```gdscript
func set_pickable(enable: bool) -> void
```
Enables or disables interactivity.

```gdscript
func get_allow_alpha() -> bool
```
Returns whether alpha channel editing is allowed.

```gdscript
func set_allow_alpha(enable: bool) -> void
```
Enables or disables alpha channel editing.

---

## Example Usage

```gdscript
var picker = ColorPicker.new()
picker.connect("color_changed", self, "_on_color_changed")
add_child(picker)

func _on_color_changed():
    var selected_color = picker.get_color()
    print("Selected color:", selected_color)
```

---

### Related Classes

- [ColorPickerButton](class_colorpickerbutton.html) – A button that opens a `ColorPicker` as a popup.
- [ColorRect](class_colorrrect.html) – A control that displays a color.

---