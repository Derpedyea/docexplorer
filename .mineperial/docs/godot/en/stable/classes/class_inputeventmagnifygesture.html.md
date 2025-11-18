**InputEventMagnifyGesture** – Godot Engine API Reference
==========================================================

> **Location:** `class_inputeventmagnifygesture`  
> **Inherited from:** `InputEventGesture` → `InputEventWithModifiers` → `InputEventFromWindow` → `InputEvent` → `Resource` → `RefCounted` → `Object`

This class represents a magnifying touch gesture (the two‑finger “pinch‑zoom” gesture common on touch screens).  
It is a subclass of the generic `InputEventGesture` and can be used in the input‑event system to detect zoom in/out actions.

---

### Properties

| Property | Type   | Description |
|----------|--------|-------------|
| **delta** | `float` | The change in scale produced by the gesture. A positive value indicates zooming in; a negative value indicates zooming out. |
| **scale** | `float` | *(read‑only)* The current scale factor (similar to `delta`, but cumulative). |
| **speed** | `float` | *(read‑only)* The speed of the zoom gesture. |

> **Note**  
> All properties are accessed via the usual Godot GDScript getter/setter style: `event.delta` / `event.set_delta(value)`.

---

### Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_delta()` | `float` | – | Returns the `delta` value. |
| `set_delta(delta: float)` | `void` | `delta` | Sets the `delta` value. |
| `get_speed()` | `float` | – | Returns the speed of the gesture. |
| `get_scale()` | `float` | – | Returns the cumulative scale factor. |

> **Usage example (GDScript)**  
> ```gdscript
> func _input(event):
>     if event is InputEventMagnifyGesture:
>         var zoom_factor = event.delta
>         get_viewport().set_canvas_transform(
>             get_viewport().get_canvas_transform().scaled(Vector2(zoom_factor, zoom_factor))
>         )
> ```

---

### Signals

No signals are defined on this class.

---

### Related Classes

- [`InputEventPanGesture`](https://docs.godotengine.org/en/stable/classes/class_inputeventpangesture.html) – Handles panning (drag) gestures.  
- [`InputEventMouseWheel`](https://docs.godotengine.org/en/stable/classes/class_inputeventmousewheel.html) – Handles mouse wheel scrolling.  
- [`InputEventMouseButton`](https://docs.godotengine.org/en/stable/classes/class_inputeventmousebutton.html) – Handles mouse button presses.

---

### Common Use Cases

* **Touch‑based zooming** – Detect magnification gestures in a mobile or tablet project and adjust the camera or UI scale accordingly.  
* **Custom UI scaling** – Use the gesture to zoom in/out on UI elements or a map.

---

#### Quick Reference

| Action | Code |
|--------|------|
| Check if event is a magnify gesture | `if event is InputEventMagnifyGesture:` |
| Retrieve zoom delta | `var zoom_delta = event.delta` |
| Apply zoom to a Camera2D | `camera.zoom = camera.zoom * (1.0 + zoom_delta)` |

---

*For more details and advanced usage, refer to the official Godot Engine documentation at the provided URL.*