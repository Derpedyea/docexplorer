# Range

**Abstract base class for controls that represent a numeric range.**

Inherits: `Control` → `CanvasItem` → `Node` → `Object`

> Inherited By:  
> `EditorSpinSlider`, `ProgressBar`, `ScrollBar`, `Slider`, `SpinBox`, `TextureProgressBar`

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed(value: float)` | Emitted when the current value changes. |
| `range_changed(min: float, max: float)` | Emitted when the minimum or maximum range changes. |
| `value_changed(value: float)` | (duplicate) |
| `value_changed(value: float)` | (duplicate) |

*(Signal signatures may vary depending on the version; refer to the official Godot 4.x API for the exact signature.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `min` | `float` | `0.0` | Minimum allowed value. |
| `max` | `float` | `100.0` | Maximum allowed value. |
| `value` | `float` | `0.0` | Current value. |
| `step` | `float` | `1.0` | Increment step when changing the value. |
| `precision` | `int` | `1` | Number of decimal places to display. |
| `clamped` | `bool` | `true` | Whether the value is clamped between min and max. |
| `round` | `bool` | `false` | Whether the value is rounded to the nearest step. |
| `snap` | `bool` | `false` | Whether to snap to the step value. |
| `orientation` | `int` | `HORIZONTAL` | Layout direction (horizontal/vertical). |
| `focus_mode` | `int` | `FOCUS_NONE` | How the control handles focus. |

---

## Methods

| Method | Description |
|--------|-------------|
| `set_value(value: float)` | Sets the current value, clamping or snapping if enabled. |
| `get_value() -> float` | Returns the current value. |
| `set_min(value: float)` | Sets the minimum value. |
| `get_min() -> float` | Returns the minimum value. |
| `set_max(value: float)` | Sets the maximum value. |
| `get_max() -> float` | Returns the maximum value. |
| `set_step(value: float)` | Sets the step increment. |
| `get_step() -> float` | Returns the step increment. |
| `set_precision(value: int)` | Sets the number of decimal places. |
| `get_precision() -> int` | Returns the precision. |
| `set_focus_mode(mode: int)` | Sets the focus mode. |
| `get_focus_mode() -> int` | Returns the focus mode. |
| `is_clamped() -> bool` | Returns whether clamping is enabled. |
| `is_rounding_enabled() -> bool` | Returns whether rounding is enabled. |
| `is_snapped() -> bool` | Returns whether snapping is enabled. |

---

## Constants

```gdscript
const ORIENTATION_H = 0
const ORIENTATION_V = 1
```

---

## Example Usage

```gdscript
# Assuming `my_slider` is a Slider node (inherits from Range)
my_slider.min = 0
my_slider.max = 10
my_slider.step = 0.5
my_slider.value = 5

func _on_my_slider_value_changed(new_value):
    print("Slider value changed to ", new_value)
```

---

*For a full, up‑to‑date reference, see the official Godot Engine documentation: [Godot 4.x Range Class](https://docs.godotengine.org/en/stable/classes/class_range.html).*