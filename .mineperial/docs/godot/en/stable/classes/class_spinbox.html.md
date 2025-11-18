**SpinBox** – Godot Engine 4.x class reference  
=================================================

> Inherits: **Range** → **Control** → **CanvasItem** → **Node** → **Object**  
>  
> SpinBox is a numerical input text field. It allows entering integers and floating‑point numbers, either manually or by clicking the up/down arrows.

---

## Overview

| Feature | Value |
|---------|-------|
| **Category** | UI / Control |
| **Primary use** | Numeric entry, sliders with text input |
| **Typical nodes** | `SpinBox`, `SpinBox3D` (for 3‑D UIs) |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `min` | `float` | `0.0` | Minimum value allowed. |
| `max` | `float` | `100.0` | Maximum value allowed. |
| `step` | `float` | `1.0` | Step increment/decrement when clicking the arrows. |
| `value` | `float` | `0.0` | Current value. |
| `prefix` | `String` | `""` | Text displayed before the number. |
| `suffix` | `String` | `""` | Text displayed after the number. |
| `precision` | `int` | `0` | Number of decimal places. |
| `allow_greater` | `bool` | `false` | Whether values above `max` are allowed (when set to `true` the box expands). |
| `allow_lesser` | `bool` | `false` | Whether values below `min` are allowed. |
| `editable` | `bool` | `true` | Whether the field can be edited manually. |
| `size_flags_horizontal` | `int` | `4` | Size flags for horizontal layout. |
| `size_flags_vertical` | `int` | `1` | Size flags for vertical layout. |
| `theme_type_variation` | `String` | `""` | Theme variation to use. |
| `editable` | `bool` | `true` | Editable flag. |

> **Note**: Changing `precision` also updates the number of decimal places shown in the text field.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `value_changed` | `float new_value` | Emitted when the value is changed by user interaction or code. |
| `value_changed_with_key` | `float new_value`, `String key` | Same as `value_changed`, but includes the key pressed (`up`, `down`, etc.). |

---

## Methods

### **Public Methods**

```gdscript
# Set the numeric value programmatically
func set_value(new_value: float) -> void

# Get the current numeric value
func get_value() -> float

# Increase/decrease value by step
func increment() -> void
func decrement() -> void
```

### **Override Methods**

| Method | Override | Description |
|--------|----------|-------------|
| `_notification()` | `int p_what` | Handles notifications such as `NOTIFICATION_ENTER_TREE`. |
| `_draw()` | | Custom drawing, if the SpinBox is subclassed. |
| `_gui_input()` | `InputEvent event` | Processes GUI input events. |
| `_input()` | `InputEvent event` | Global input handling (rarely used in SpinBox). |

---

## Example Usage

```gdscript
# Assuming `my_spinbox` is a SpinBox node in the scene
var my_spinbox = $MySpinBox

# Set properties
my_spinbox.min = 0
my_spinbox.max = 10
my_spinbox.step = 0.5
my_spinbox.value = 5
my_spinbox.prefix = "Score: "
my_spinbox.suffix = "%"

# Connect signal
my_spinbox.connect("value_changed", self, "_on_spinbox_value_changed")

func _on_spinbox_value_changed(new_value):
    print("New value:", new_value)
```

---

## Frequently Asked Questions

* **Can I restrict the SpinBox to integer values?**  
  Yes – set `precision = 0` and `step = 1`.

* **How do I enable wrapping around when reaching `min`/`max`?**  
  Set `allow_greater` or `allow_lesser` to `true` and adjust logic in `_gui_input()` or use custom script.

* **Does the SpinBox support localization of decimal separators?**  
  Yes, it uses the current locale settings for formatting.

---

## References

- Official Godot docs: https://docs.godotengine.org/en/stable/classes/class_spinbox.html  
- Related classes: `SpinBox`, `SpinBox3D`, `Range`, `Control`

---