**InputEventScreenTouch** – Godot Engine (stable) documentation

---

### Overview
`InputEventScreenTouch` is a resource that represents a single screen‑touch
event.  It is part of Godot’s input system and is emitted whenever a finger
touches or releases the screen on mobile devices.

```
class InputEventScreenTouch : InputEventFromWindow
```

The class stores information about a *press* or *release* of a finger on the
screen, including its position, pressure, and index (finger id).

---

### Inheritance Hierarchy
```
Object
 └─ RefCounted
     └─ Resource
         └─ InputEvent
             └─ InputEventFromWindow
                 └─ InputEventScreenTouch
```

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `index` | `int` | Zero‑based finger index. Each finger that touches the screen has a unique index. |
| `position` | `Vector2` | Screen position of the touch in *local* coordinates of the viewport that generated the event. |
| `global_position` | `Vector2` | Screen position of the touch in *global* coordinates. |
| `is_pressed` | `bool` | `true` when the finger is currently pressing the screen, `false` when it has been released. |
| `pressure` | `float` | Pressure of the touch (if supported by the device). |
| `speed` | `float` | Speed of the finger movement. |

> **Note** – `position` is relative to the viewport that received the event, while `global_position` is relative to the whole screen.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_index()` | `int` | – | Returns the finger index. |
| `get_position()` | `Vector2` | – | Returns the local screen position. |
| `get_global_position()` | `Vector2` | – | Returns the global screen position. |
| `is_pressed()` | `bool` | – | Returns `true` if the touch is currently pressed. |
| `get_pressure()` | `float` | – | Returns the pressure value (0 – 1). |
| `get_speed()` | `float` | – | Returns the movement speed of the finger. |
| `set_index(index)` | `void` | `int index` | Sets the finger index. |
| `set_position(pos)` | `void` | `Vector2 pos` | Sets the local position. |
| `set_global_position(pos)` | `void` | `Vector2 pos` | Sets the global position. |
| `set_pressed(pressed)` | `void` | `bool pressed` | Sets whether the finger is pressed. |
| `set_pressure(pressure)` | `void` | `float pressure` | Sets the pressure value. |
| `set_speed(speed)` | `void` | `float speed` | Sets the movement speed. |

---

## Example

```gdscript
func _input(event):
    if event is InputEventScreenTouch:
        var finger_id = event.get_index()
        var pos = event.get_position()
        if event.is_pressed():
            print("Finger %d pressed at %s" % [finger_id, pos])
        else:
            print("Finger %d released" % finger_id)
```

---

## Related Classes

* [InputEventScreenDrag](../classes/class_inputeventscreendrag.html) – Represents a dragging movement of a touch.
* [InputEvent](../classes/class_inputevent.html) – Base class for all input events.
* [Input](../classes/class_input.html) – Central API for querying input state.

---

### References

* Official Godot documentation: <https://docs.godotengine.org/en/stable/classes/class_inputeventscreentouch.html>
* Godot API reference for `InputEventScreenTouch`: <https://docs.godotengine.org/en/stable/classes/class_inputeventscreentouch.html>
* Related tutorials: “Touch Input” in the *Input* section of the manual.