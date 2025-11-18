**ProgressBar – Godot Engine Documentation (Stable)**  

---

## Overview
`ProgressBar` is a UI control that visually represents a percentage value.  
It inherits from **Range** → **Control** → **CanvasItem** → **Node** → **Object**.

---

## Inheritance Tree
```
Object
└─ Node
   └─ CanvasItem
      └─ Control
         └─ Range
            └─ ProgressBar
```

---

## Description
A control used for visual representation of a percentage.  
Typical usage examples include health bars, loading screens, and task progress displays.

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed(value: float)` | Emitted when the `value` property changes. |

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `_draw()` | `void` | Internal method to draw the progress bar. |
| `set_value(value: float)` | `void` | Set the current progress value. |
| `get_value()` | `float` | Get the current progress value. |
| `set_percent(value: float)` | `void` | Set progress using a percentage (0‑100). |
| `get_percent()` | `float` | Get progress as a percentage. |

*(Note: Full method list available in the Godot Engine class reference.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `min_value` | `float` | `0.0` | Minimum value. |
| `max_value` | `float` | `100.0` | Maximum value. |
| `value` | `float` | `0.0` | Current value. |
| `custom_minimum` | `float` | `0.0` | Custom minimum (used for internal calculations). |
| `custom_maximum` | `float` | `100.0` | Custom maximum (used for internal calculations). |
| `step` | `float` | `1.0` | Step size for value changes. |
| `fill_mode` | `ProgressBar.FillMode` | `FILL_MODE_NORMAL` | Fill direction. |

---

## Enumerations

```gdscript
enum FillMode {
    NORMAL,      # Left to right (default)
    REVERSE      # Right to left
}
```

---

## Usage Example (GDScript)

```gdscript
# Assuming a ProgressBar node named "HealthBar"
var health_bar : ProgressBar = $HealthBar

func _process(delta):
    # Update the bar to reflect current health (0-100)
    health_bar.value = current_health
```

---

## Related Nodes
- **TextureProgress** – A progress bar that displays a texture.  
- **LineEdit** – Can be combined with a `ProgressBar` to show download progress.

---

## Documentation References
- [Godot Engine API Reference](https://docs.godotengine.org)  
- [Control Class](https://docs.godotengine.org/en/stable/classes/class_control.html)  
- [Range Class](https://docs.godotengine.org/en/stable/classes/class_range.html)

---