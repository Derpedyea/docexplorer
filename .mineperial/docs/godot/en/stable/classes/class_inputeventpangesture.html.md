**InputEventPanGesture** – Godot Engine Documentation  
======================================================

> *Represents a panning touch gesture.*

---

### Inheritance

```
InputEventPanGesture
└─ InputEventGesture
   └─ InputEventWithModifiers
      └─ InputEventFromWindow
         └─ InputEvent
            └─ Resource
               └─ RefCounted
                  └─ Object
```

---

### Description

`InputEventPanGesture` is a **Resource** that holds information about a two‑finger panning gesture performed on a touch screen. It inherits all the basic event handling functionality from `InputEventGesture` and is typically delivered via the `InputEvent` system (e.g., `InputEventPanGesture` objects can be obtained from `InputEvent.is_action_pressed()` or by iterating through `Input.get_mouse_position()`).

Key features:

* Stores the movement delta of the gesture.
* Provides the speed of the gesture.
* Works in conjunction with `InputEventPanGesture`’s `pressed` state for gesture initiation and completion.

---

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `delta` | `Vector2` | The change in position of the gesture between the last and current frame. |
| `speed` | `float` | The current speed of the panning gesture. |
| `is_pressed` | `bool` | Returns `true` while the gesture is active. |

> **Note:**  
> All properties are read‑only; use the corresponding getter functions if you need to fetch the values.

---

### Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `get_delta()` | `Vector2 get_delta()` | Returns the current `delta` value. |
| `get_speed()` | `float get_speed()` | Returns the current `speed`. |
| `is_pressed()` | `bool is_pressed()` | Returns the `pressed` status. |

---

### Example Usage

```gdscript
func _input(event):
    if event is InputEventPanGesture:
        var gesture = event as InputEventPanGesture
        print("Pan delta: ", gesture.get_delta())
        print("Pan speed: ", gesture.get_speed())
        if gesture.is_pressed():
            # Handle ongoing pan
            pass
```

---

### Related Classes

* [InputEventGesture](../classes/class_inputeventgesture.html) – Base class for gesture events.  
* [InputEventScreenDrag](../classes/class_inputeventscreendrag.html) – Dragging events on screen touch.  
* [InputEventScreenTouch](../classes/class_inputeventscreentouch.html) – Basic screen touch events.

---

### Further Reading

* **Input** – Overview of input handling in Godot.  
* **Touch Gestures** – Detailed explanation of various gesture events.  

---