**VSlider – Godot Engine Class Reference**

> **A vertical slider that goes from bottom (min) to top (max).**

---

### Inheritance
```
Object
 └─ CanvasItem
      └─ Control
           └─ Range
                └─ Slider
                     └─ VSlider
```

---

### Description
`VSlider` is a UI widget used to adjust a numeric value by moving a handle along a vertical track. It inherits all functionality from `Slider` and `Range`, and exposes the same set of properties, methods, and signals while automatically orienting the control vertically.

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed(value)` | Emitted when the slider's value changes. |
| *(other Range/Control signals inherit unchanged)* | |

> **Note:** The signal list is inherited from `Range` and `Control`; refer to those classes for additional signals such as `focus_entered`, `focus_exited`, etc.

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `set_value(value: float)` | `value`: Desired slider value | `void` | Sets the slider's value. |
| `get_value() -> float` | – | `float` | Returns the current value. |
| `get_min() -> float` | – | `float` | Returns the minimum value. |
| `get_max() -> float` | – | `float` | Returns the maximum value. |
| `get_step() -> float` | – | `float` | Returns the step increment. |
| `set_min(value: float)` | `value`: Minimum value | `void` | Sets the minimum value. |
| `set_max(value: float)` | `value`: Maximum value | `void` | Sets the maximum value. |
| `set_step(value: float)` | `value`: Step size | `void` | Sets the step increment. |
| `is_pressed() -> bool` | – | `bool` | Returns whether the slider handle is currently pressed. |
| *(plus all inherited methods from `Slider`, `Range`, `Control`, `CanvasItem`, and `Node`)* | | | |

> The complete method list can be found on the official Godot documentation page.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `float` | `0.0` | Current slider value. |
| `min` | `float` | `0.0` | Minimum value. |
| `max` | `float` | `1.0` | Maximum value. |
| `step` | `float` | `0.0` | Step increment. |
| `grabbed` | `bool` | `false` | Read‑only: true if the slider handle is being dragged. |
| *(inherited properties from `Range`, `Control`, etc.)* | | | |

> Properties can be accessed and modified in both code and the editor's inspector.

---

## Usage Example

```gdscript
# Create a VSlider node and configure it
var slider = VSlider.new()
slider.min = 0
slider.max = 100
slider.step = 1
slider.value = 50
add_child(slider)

# Connect to the value_changed signal
slider.connect("value_changed", self, "_on_slider_value_changed")

func _on_slider_value_changed(new_value):
    print("Slider value:", new_value)
```

---

## Related Classes

- **HSlider** – Horizontal slider variant.
- **Slider** – Base class providing common functionality.
- **Range** – Provides min/max/step logic for numeric ranges.

---

### Further Reading

- [Godot UI System](https://docs.godotengine.org/en/stable/tutorials/gui/)
- [Control Nodes Overview](https://docs.godotengine.org/en/stable/classes/class_control.html)

---