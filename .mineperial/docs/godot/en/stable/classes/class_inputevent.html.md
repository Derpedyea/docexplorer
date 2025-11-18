**InputEvent**  
*Godot Engine (stable) – Class reference*

---

## Overview

`InputEvent` is an abstract base class that represents all types of input that the engine can receive.  
It inherits from:

- `Resource`  
- `RefCounted`  
- `Object`

Concrete subclasses include:

| Sub‑class | Description |
|-----------|-------------|
| `InputEventAction` | Represents an action that has been pressed or released. |
| `InputEventFromWindow` | Events that come from a window, such as focus changes. |
| `InputEventJoypadButton` | A single button press on a joypad. |
| `InputEventJoypadMotion` | Axis motion on a joypad. |
| `InputEventMIDI` | MIDI input events. |
| `InputEventShortcut` | Shortcuts (key combos). |

> **Note:** Because it is abstract, you cannot instantiate `InputEvent` directly; you must use one of its subclasses.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `action` | `String` | – | The name of the action (used by `InputEventAction`). |
| `axis_value` | `float` | `0.0` | Current value of an axis (used by `InputEventJoypadMotion`). |
| `button_index` | `int` | – | Index of a pressed button (used by `InputEventJoypadButton`). |
| `device` | `int` | `-1` | Device ID that generated the event. |
| `keycode` | `int` | – | Keyboard key code (used by `InputEventKey`). |
| `modifiers` | `int` | `0` | Bitmask for modifier keys (Ctrl, Alt, Shift, etc.). |
| `motion` | `Vector2` | `Vector2(0, 0)` | Mouse motion vector. |
| `position` | `Vector2` | `Vector2(0, 0)` | Mouse position. |
| `pressed` | `bool` | `false` | Whether the event is a press (`true`) or a release (`false`). |
| `scancode` | `int` | – | Keyboard scancode (used by `InputEventKey`). |
| `shift_pressed` | `bool` | `false` | Is the Shift key down? |
| `tap` | `bool` | `false` | Was this a quick tap (used by `InputEventGesture`). |
| `type` | `int` | – | The event type (`InputEvent.TYPE_*`). |
| `unicode` | `int` | `0` | Unicode code point for character input. |
| `warp` | `bool` | `false` | Should the mouse be warped? |

> *The full list of properties and their documentation can be found in the online API reference.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `pressed` | Emitted when a key/button is pressed. |
| `released` | Emitted when a key/button is released. |
| `action` | Emitted when an input action is triggered (specific to `InputEventAction`). |

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `is_action` | `bool` | `action_name: String`, `match_index: int = -1` | Returns `true` if this event matches the given action name. |
| `is_action_pressed` | `bool` | `action_name: String`, `match_index: int = -1` | Returns `true` if the action is currently pressed. |
| `is_pressed` | `bool` | – | Returns `true` if the event represents a press (or hold). |
| `is_echo` | `bool` | – | Returns `true` if this event is an echoed repeat. |
| `as_text` | `String` | – | Returns a human‑readable representation of the event. |
| `set_pressed` | `void` | `pressed: bool` | Sets whether the event is a press. |
| `set_device` | `void` | `device: int` | Sets the device ID. |
| `set_position` | `void` | `position: Vector2` | Sets the mouse position. |
| `set_scancode` | `void` | `scancode: int` | Sets the keyboard scancode. |
| `set_unicode` | `void` | `unicode: int` | Sets the Unicode code point. |

> **Tip:** Use `Input.is_action_just_pressed()` or `InputEvent.is_action()` for simple action checks; the `InputEvent` methods are useful in custom input‑handling scripts.

---

## Usage Example

```gdscript
func _input(event):
    if event is InputEventKey:
        if event.is_pressed() and event.scancode == KEY_SPACE:
            print("Space key pressed")

    if event is InputEventMouseButton:
        if event.button_index == BUTTON_LEFT:
            if event.pressed:
                print("Left mouse button pressed")
            else:
                print("Left mouse button released")
```

---

## Documentation Links

- [Godot Engine API Reference – InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html)
- Related classes:  
  - [`InputEventAction`](https://docs.godotengine.org/en/stable/classes/class_inputeventaction.html)  
  - [`InputEventKey`](https://docs.godotengine.org/en/stable/classes/class_inputeventkey.html)  
  - [`InputEventMouse`](https://docs.godotengine.org/en/stable/classes/class_inputeventmouse.html)

--- 

*For detailed descriptions of each property, method, and signal, refer to the official API reference page linked above.*