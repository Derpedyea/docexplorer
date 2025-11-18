# InputEventMouseMotion

**Godot Engine – Class Reference**  
Version: stable

---

## Inheritance

```
Object ← RefCounted ← Resource ← InputEvent
            ↑
            └── InputEventFromWindow
                 ↑
                 └── InputEventWithModifiers
                      ↑
                      └── InputEventMouse
                           ↑
                           └── InputEventMouseMotion
```

---

## Overview

`InputEventMouseMotion` represents a mouse or pen movement event.  
It contains detailed information about the motion such as:

* The absolute global position of the cursor.
* The relative movement since the last event.
* The speed of the cursor.
* Which buttons are pressed.
* Pen‑specific data (pressure, etc.).

It is typically emitted by the engine when the user moves a mouse or a stylus over a window.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | `Vector2` | `Vector2(0, 0)` | Current global position of the mouse. |
| `relative` | `Vector2` | `Vector2(0, 0)` | Movement since the previous event. |
| `speed` | `Vector2` | `Vector2(0, 0)` | Current cursor speed. |
| `button_mask` | `int` | `0` | Bitmask of pressed mouse buttons. |
| `button_index` | `int` | `-1` | Index of the last pressed button (when the event is generated). |
| `pen` | `bool` | `false` | `true` if a stylus is used. |
| `pressure` | `float` | `0.0` | Pen pressure value (0‑1 range). |
| `tilt` | `Vector2` | `Vector2(0, 0)` | Tilt of a stylus (if supported). |
| `is_tapping` | `bool` | `false` | Indicates whether the stylus is tapping. |
| `is_hovering` | `bool` | `false` | Indicates whether the stylus is hovering. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_position()` | `Vector2` | Returns the absolute global position. |
| `get_relative()` | `Vector2` | Returns the relative movement delta. |
| `get_speed()` | `Vector2` | Returns the cursor speed. |
| `get_button_mask()` | `int` | Returns the button bitmask. |
| `is_button_pressed(button_index)` | `bool` | Returns `true` if the specified button is currently pressed. |
| `get_button_index()` | `int` | Returns the last pressed button index. |
| `get_pen()` | `bool` | Returns `true` if the event originates from a stylus. |
| `get_pressure()` | `float` | Returns the pen pressure (0‑1). |
| `get_tilt()` | `Vector2` | Returns the pen tilt vector (X/Y). |
| `is_tapping()` | `bool` | Returns `true` if the stylus is tapping. |
| `is_hovering()` | `bool` | Returns `true` if the stylus is hovering over the surface. |

> *All methods are read‑only getters; the corresponding properties are accessible directly as well.*

---

## Signals

`InputEventMouseMotion` does not emit its own signals.  
Use `InputEventMouseMotion` in your input‑handling logic by checking `is_mouse_motion()` or `is_mouse()` in `InputEvent`.

---

## Example

```gdscript
extends Node2D

func _input(event):
    if event is InputEventMouseMotion:
        var pos = event.position
        var delta = event.relative
        $Sprite.position += delta
```

---

## Related Classes

* [InputEventMouse](https://docs.godotengine.org/en/stable/classes/class_inputeventmouse.html) – Base class for mouse events.  
* [InputEventMouseButton](https://docs.godotengine.org/en/stable/classes/class_inputeventmousebutton.html) – Handles mouse button presses.  
* [InputEventMouseWheel](https://docs.godotengine.org/en/stable/classes/class_inputeventmousewheel.html) – Handles mouse wheel scrolling.  

--- 

*For the complete list of inherited methods, properties and signals, refer to the full class reference pages.*