**ScrollBar** – Godot Engine Documentation  
===========================================

`ScrollBar` is an abstract base class for horizontal and vertical scrollbars (`HScrollBar`, `VScrollBar`). It inherits from `Range`, which in turn derives from `Control` → `CanvasItem` → `Node` → `Object`.

> **Inherits**  
> `Range<Control<CanvasItem<Node<Object>>>`

---

### Overview

A scrollbar is a UI element that allows the user to scroll content within a viewport or to select a value by dragging a slider. It is typically used inside a `ScrollContainer`, `LineEdit`, `TextEdit`, or other UI controls that need to expose scrollable ranges.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `value` | `float` | Current slider value. |
| `min_value` | `float` | Minimum selectable value. |
| `max_value` | `float` | Maximum selectable value. |
| `step` | `float` | Increment step. |
| `page` | `float` | Page increment (used when clicking on the scrollbar track). |
| `h_size_flags` / `v_size_flags` | `int` | Size flags for horizontal/vertical layout. |
| `min_slider_size` | `int` | Minimum pixel size of the slider. |

> **Note**: Most of these properties are inherited directly from `Range`. `ScrollBar` adds the visual aspects of the control (handle size, orientation, etc.).

---

## Signals

| Signal | Description |
|--------|-------------|
| `value_changed(value: float)` | Emitted when the `value` changes. |

---

## Methods

### Setting and Getting the Value

```gdscript
func set_value(value: float) -> void
func get_value() -> float
```

Adjusts the current slider value. The value is clamped between `min_value` and `max_value`.

### Updating Range

```gdscript
func set_min(value: float) -> void
func set_max(value: float) -> void
```

Convenience helpers for updating the range limits.

### Appearance

```gdscript
func set_min_slider_size(size: int) -> void
func get_min_slider_size() -> int
```

Sets/gets the smallest visual size of the slider handle in pixels.

---

## Usage Example

```gdscript
# Create a vertical scrollbar manually
var v_scroll = VScrollBar.new()
v_scroll.min_value = 0
v_scroll.max_value = 100
v_scroll.step = 1
v_scroll.page = 10
v_scroll.connect("value_changed", Callable(self, "_on_scroll_changed"))

func _on_scroll_changed(value: float) -> void:
    print("Scroll value:", value)
```

You can also embed a `ScrollBar` inside a `ScrollContainer` and let the container manage its position automatically.

---

## Customization

* **Theme** – Scrollbars are fully themeable. Use `Theme` or `StyleBox` resources to change the look of the handle, track, and arrow buttons.
* **Orientation** – `HScrollBar` and `VScrollBar` are the two concrete subclasses. Use the appropriate one depending on the axis you need.

---

### Related Classes

* `ScrollContainer` – A container that automatically adds scrollbars when its child overflows.
* `Range` – Base class providing the value and range logic used by `ScrollBar`.
* `HScrollBar`, `VScrollBar` – Concrete implementations.

---

### Quick Reference

| Function | Purpose |
|----------|---------|
| `set_value()` | Set slider position. |
| `get_value()` | Get slider position. |
| `set_min()` / `set_max()` | Define scroll range. |
| `connect("value_changed")` | Listen for changes. |

---

**See also**

* [ScrollContainer](https://docs.godotengine.org/en/stable/classes/class_scrollcontainer.html)  
* [Range](https://docs.godotengine.org/en/stable/classes/class_range.html)  
* [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

---