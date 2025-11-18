**__HSlider__**  
*Godot Engine Documentation (stable)*  

---

## Overview

`HSlider` is a GUI node that provides a horizontal slider control.  
It inherits from the `Slider` class, which in turn derives from `Range`, `Control`, `CanvasItem`, `Node`, and `Object`.

- **Use case:** Adjust a numeric value by dragging a handle left‑to‑right.
- **Typical applications:** Volume controls, progress bars, UI settings.

---

## Inheritance Tree

```
Object
└─ Node
   └─ CanvasItem
      └─ Control
         └─ Range
            └─ Slider
               └─ HSlider
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed(float value)` | Emitted whenever the slider’s value changes. |
| `drag_started()` | Emitted when the user starts dragging the handle. |
| `drag_ended()` | Emitted when the user releases the handle. |

> **Note:** `HSlider` inherits all signals from `Slider` and `Range`, including `focus_entered()` and `focus_exited()`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `float` | `0.0` | Current value of the slider. |
| `min_value` | `float` | `0.0` | Minimum value. |
| `max_value` | `float` | `100.0` | Maximum value. |
| `step` | `float` | `1.0` | Step increment for numeric values. |
| `editable` | `bool` | `true` | Whether the user can modify the value. |
| `h_slider` | *internal* | – | (read‑only) Reference to the underlying `Slider` node. |
| `round` | `bool` | `false` | If `true`, the value is rounded to the nearest integer. |
| `custom_minimum_size` | `Vector2` | `Vector2(0, 0)` | Minimum size of the slider. |

> **Inherited properties** from `Range` and `Control` include: `align`, `cursor_shape`, `focus_mode`, `rect_min_size`, etc.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `new()` | `static HSlider new()` | Creates a new `HSlider` instance. |
| `_draw()` | `void _draw()` | Override to custom‑draw the slider (internal). |
| `_notification(int what)` | `void _notification(int what)` | Handles notifications such as `NOTIFICATION_ENTER_TREE`. |
| `is_pressed()` | `bool is_pressed()` | Returns `true` if the slider is currently being dragged. |
| `get_value()` | `float get_value()` | Retrieves the current value. |
| `set_value(float value)` | `void set_value(float)` | Sets the slider’s value. |
| `get_min()` | `float get_min()` | Returns `min_value`. |
| `get_max()` | `float get_max()` | Returns `max_value`. |
| `set_min(float min)` | `void set_min(float)` | Sets `min_value`. |
| `set_max(float max)` | `void set_max(float)` | Sets `max_value`. |
| `get_step()` | `float get_step()` | Returns the step increment. |
| `set_step(float step)` | `void set_step(float)` | Sets the step increment. |

> **Inherited methods** from `Range` and `Control` (e.g., `set_editable(bool)`, `get_editable()`, `rect_clip_content`, etc.) are available.

---

## Example Usage

```gdscript
# Create a horizontal slider
var slider = HSlider.new()
slider.anchor_right = 1.0
slider.min_value = 0
slider.max_value = 10
slider.step = 1
slider.value = 5
add_child(slider)

# Connect to the value change signal
slider.connect("value_changed", self, "_on_slider_value_changed")

func _on_slider_value_changed(val):
    print("Slider value: ", val)
```

---

## Customization

You can style the slider using the editor or programmatically:

```gdscript
# Change the theme
var theme = Theme.new()
theme.set_color("accent_color", "normal", Color(0.8, 0.2, 0.2))
slider.theme = theme
```

---

## References

- [Godot Docs – Control](https://docs.godotengine.org/en/stable/classes/class_control.html)
- [Godot Docs – Slider](https://docs.godotengine.org/en/stable/classes/class_slider.html)
- [Godot Docs – Range](https://docs.godotengine.org/en/stable/classes/class_range.html)

---