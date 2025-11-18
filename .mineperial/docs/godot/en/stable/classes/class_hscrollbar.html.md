**HScrollBar**

A horizontal scrollbar that goes from left (min) to right (max).  
It is a control node that inherits from `ScrollBar` → `Range` → `Control` → `CanvasItem` → `Node` → `Object`.

---

## Inheritance

```
Object
└─ CanvasItem
   └─ Control
      └─ Range
         └─ ScrollBar
            └─ HScrollBar
```

---

## Description

`HScrollBar` is a GUI widget that allows users to adjust a numeric value within a specified range by dragging a handle left or right. It is typically used to control horizontal scrolling or to expose a range of values in a compact form.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `value_changed(value: float)` | `value` – the new value after a change | Emitted whenever the user changes the value. |
| `drag_started()` | – | Emitted when the user starts dragging the scrollbar handle. |
| `drag_ended()` | – | Emitted when the user releases the scrollbar handle. |

---

## Methods

### **_init()**

```gdscript
func _init() -> void
```

Initializes the scrollbar. The default values are:
- `min = 0`
- `max = 100`
- `step = 1`
- `page = 0`

---

### **get_value() → float**

```gdscript
func get_value() -> float
```

Returns the current value of the scrollbar.

---

### **set_value(value: float)**

```gdscript
func set_value(value: float) -> void
```

Sets the current value. The value is clamped between `min` and `max`.

---

### **get_min() → float**

```gdscript
func get_min() -> float
```

Returns the minimum value of the range.

---

### **set_min(min_value: float)**

```gdscript
func set_min(min_value: float) -> void
```

Sets the minimum value of the range.

---

### **get_max() → float**

```gdscript
func get_max() -> float
```

Returns the maximum value of the range.

---

### **set_max(max_value: float)**

```gdscript
func set_max(max_value: float) -> void
```

Sets the maximum value of the range.

---

### **get_step() → float**

```gdscript
func get_step() -> float
```

Returns the step size (increment).

---

### **set_step(step: float)**

```gdscript
func set_step(step: float) -> void
```

Sets the step size.

---

### **get_page() → float**

```gdscript
func get_page() -> float
```

Returns the page size (used for page scrolling).

---

### **set_page(page: float)**

```gdscript
func set_page(page: float) -> void
```

Sets the page size.

---

### **get_page_step() → float**

```gdscript
func get_page_step() -> float
```

Returns the page step size (used for scrolling by page).

---

### **set_page_step(page_step: float)**

```gdscript
func set_page_step(page_step: float) -> void
```

Sets the page step size.

---

### **set_autohide(autohide: bool)**

```gdscript
func set_autohide(autohide: bool) -> void
```

Enables or disables auto-hide when the scrollbar is not needed.

---

### **has_autohide() -> bool**

```gdscript
func has_autohide() -> bool
```

Returns `true` if auto-hide is enabled.

---

### **set_custom_minimum_size(size: Vector2)**

```gdscript
func set_custom_minimum_size(size: Vector2) -> void
```

Sets a custom minimum size for the scrollbar.

---

### **get_custom_minimum_size() -> Vector2**

```gdscript
func get_custom_minimum_size() -> Vector2
```

Returns the custom minimum size.

---

### **_get_minimum_size() -> Vector2**

```gdscript
func _get_minimum_size() -> Vector2
```

Returns the minimum size that the scrollbar will take when laid out.

---

### **_draw()**

```gdscript
func _draw() -> void
```

Custom drawing logic for the scrollbar (internal).

---

## Properties

- `value: float` – Current value.  
- `min: float` – Minimum value.  
- `max: float` – Maximum value.  
- `step: float` – Step size.  
- `page: float` – Page size.  
- `page_step: float` – Page step.  
- `autohide: bool` – Whether the scrollbar auto-hides.  
- `custom_minimum_size: Vector2` – Custom minimum size.

---

## Usage Example

```gdscript
extends Control

var h_scrollbar: HScrollBar

func _ready():
    h_scrollbar = HScrollBar.new()
    h_scrollbar.min = 0
    h_scrollbar.max = 200
    h_scrollbar.value = 50
    h_scrollbar.page_step = 20
    h_scrollbar.connect("value_changed", self, "_on_scrollbar_value_changed")
    add_child(h_scrollbar)

func _on_scrollbar_value_changed(new_value: float) -> void:
    print("Scroll value:", new_value)
```

---

### See Also

- [ScrollBar](https://docs.godotengine.org/en/stable/classes/class_scrollbar.html)
- [VScrollBar](https://docs.godotengine.org/en/stable/classes/class_vscrollbar.html)  
- [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)

---