# VScrollBar

> **Inherits**: `ScrollBar` → `Range` → `Control` → `CanvasItem` → `Node` → `Object`

A vertical scrollbar that goes from top (minimum) to bottom (maximum). It is typically used to navigate vertically in a UI or to control the scroll position of a `ScrollContainer`.

---

## Description

The `VScrollBar` is a UI widget that allows the user to scroll content vertically. It exposes the same properties and signals as its base class `ScrollBar`, with behavior tuned for a vertical orientation.

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed(int new_value)` | Emitted whenever the scrollbar’s value changes. |
| `scroll_started()` | Emitted when the user starts dragging the scrollbar. |
| `scroll_ended()` | Emitted when the user releases the scrollbar. |

*(More signals may be inherited from `ScrollBar`.)*

---

## Methods

> All methods inherited from `ScrollBar` are also available on `VScrollBar`. The following are the most commonly overridden or used methods:

| Method | Parameters | Return | Notes |
|--------|------------|--------|-------|
| `set_value(int value)` | `value` | `void` | Sets the current value of the scrollbar. |
| `get_value() -> int` | | `int` | Returns the current value. |
| `set_min(int min)` | `min` | `void` | Sets the minimum value. |
| `set_max(int max)` | `max` | `void` | Sets the maximum value. |
| `set_step(int step)` | `step` | `void` | Sets the step increment. |
| `get_step() -> int` | | `int` | Returns the step increment. |
| `set_page(int page)` | `page` | `void` | Sets the page size (the amount of content visible). |
| `get_page() -> int` | | `int` | Returns the page size. |
| `set_custom_minimum_size(Vector2 size)` | `size` | `void` | Sets a custom minimum size for the scrollbar. |

*(For a full list, refer to the `ScrollBar` documentation.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `int` | `0` | Current scroll value. |
| `min` | `int` | `0` | Minimum scroll value. |
| `max` | `int` | `100` | Maximum scroll value. |
| `step` | `int` | `1` | Increment step for value changes. |
| `page` | `int` | `0` | Size of the page (visible area). |
| `editable` | `bool` | `true` | Whether the user can adjust the scrollbar. |
| `dragging` | `bool` | `false` (read-only) | Whether the scrollbar is currently being dragged. |
| `theme_type_variation` | `String` | `""` | Custom theme variation. |

*(Additional properties are inherited from `Control` and `Range`.)*

---

## Usage Example

```gdscript
# Assuming `v_scrollbar` is a VScrollBar node in the scene
func _ready():
    v_scrollbar.connect("value_changed", self, "_on_v_scrollbar_value_changed")
    v_scrollbar.min = 0
    v_scrollbar.max = 200
    v_scrollbar.page = 50

func _on_v_scrollbar_value_changed(value):
    # Update content position based on the scrollbar value
    print("Scrolled to: %d" % value)
```

---

## Related Classes

- **HScrollBar** – Horizontal scrollbar
- **ScrollBar** – Base class for both scrollbars
- **ScrollContainer** – Container that automatically provides scrollbars

---

**Note:** For the most up‑to‑date information, refer to the [official Godot documentation](https://docs.godotengine.org/en/stable/classes/class_vscrollbar.html).