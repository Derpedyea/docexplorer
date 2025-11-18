**Note:** The supplied HTML contains only the page header and navigation, not the full class‑reference body (methods, signals, properties, etc.). Below is a minimal, well‑structured Markdown outline that captures the available information. If the full page content were provided, the sections marked “*(see full API docs)*” could be expanded accordingly.

---

# EditorSpinSlider

**Inherited from**  
`Range` → `Control` → `CanvasItem` → `Node` → `Object`

**Description**  
This `Control` node is used in the editor’s Inspector dock to edit numeric values. It provides a combined slider and spin box widget for convenient numeric input.

---

## Signals
*(See full API docs for all available signals.)*

- `value_changed(float new_value)` – Emitted when the value changes.

---

## Methods
*(See full API docs for the complete method list.)*

```text
# Example method signatures (not exhaustive)
set_min(float min_value)
set_max(float max_value)
set_step(float step)
get_value() -> float
```

---

## Properties
*(See full API docs for all properties.)*

| Property | Type   | Description |
|----------|--------|-------------|
| `min`    | float  | Minimum value of the range. |
| `max`    | float  | Maximum value of the range. |
| `step`   | float  | Increment step. |
| `value`  | float  | Current value. |

--- 

### Usage
```gdscript
var slider = EditorSpinSlider.new()
slider.min = 0
slider.max = 100
slider.step = 1
slider.value = 50
add_child(slider)
```

---

For the full reference, including additional methods, signals, and property details, consult the official Godot documentation:  
<https://docs.godotengine.org/en/stable/classes/class_editorspinslider.html>