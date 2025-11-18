# InputEventGesture

**Abstract base class for gesture input events.**

---

## Inheritance chain

```
Object
 └── RefCounted
     └── Resource
         └── InputEvent
             └── InputEventFromWindow
                 └── InputEventWithModifiers
                     └── InputEventGesture
```

### Derived classes

| Class | Description |
|-------|-------------|
| `InputEventMagnifyGesture` | Input event for pinch‑to‑zoom (magnify) gestures. |
| `InputEventPanGesture` | Input event for panning gestures (drag with two fingers). |

---

## Overview

`InputEventGesture` is the base class used by the Godot engine to represent touch‑based gesture input events. It inherits all modifier and window‑related input functionality from its parent classes and provides a common interface for concrete gesture types such as magnify and pan. Because it is abstract, you will never create an instance of this class directly – the engine will instead generate instances of the concrete subclasses when a gesture is detected.

---

## Properties

| Name | Type | Description |
|------|------|-------------|
| `position` | `Vector2` | The current position of the gesture. |
| `speed` | `float` | The speed of the gesture, in pixels per second. |
| `delta` | `Vector2` | The change in position since the previous frame. |
| `is_valid` | `bool` | Whether the gesture is currently valid (e.g., still in progress). |
| `pressed` | `bool` | Whether the gesture is currently being pressed. |
| `is_pressed` | `bool` | Alias for `pressed`. |
| `is_released` | `bool` | Whether the gesture was released in the current frame. |
| `is_just_pressed` | `bool` | Whether the gesture was just pressed in the current frame. |
| `is_just_released` | `bool` | Whether the gesture was just released in the current frame. |
| `is_echo` | `bool` | Whether this event is an echo (repeated event). |
| `is_echoed` | `bool` | Alias for `is_echo`. |
| `is_action` | `bool` | Whether this event is an action event. |
| `is_action_released` | `bool` | Whether the action was released. |
| `action_name` | `String` | The name of the action this event is bound to. |
| `action` | `String` | Alias for `action_name`. |
| `action_strength` | `float` | The strength of the action. |
| `action_is_pressed` | `bool` | Whether the action is pressed. |
| `action_pressed` | `bool` | Alias for `action_is_pressed`. |
| `action_just_pressed` | `bool` | Whether the action was just pressed. |
| `action_just_released` | `bool` | Whether the action was just released. |
| `modifiers` | `int` | Modifier flags (`CTRL`, `ALT`, `SHIFT`, etc.). |
| `modifiers_mask` | `int` | Mask of modifier flags. |
| `mouse_button_mask` | `int` | Mask of mouse buttons that are pressed. |
| `is_mouse_button_pressed` | `bool` | Whether a particular mouse button is pressed. |
| `mouse_button_index` | `int` | The index of the mouse button (1–5). |
| `event_type` | `int` | The type of input event. |

*(Note: The exact set of properties can vary between engine versions; consult the official Godot class reference for the most up‑to‑date list.)*

---

## Methods

| Method | Description |
|--------|-------------|
| `is_action_released()` | Returns `true` if the action was released this frame. |
| `is_action_pressed()` | Returns `true` if the action is currently pressed. |
| `is_action_just_pressed()` | Returns `true` if the action was just pressed this frame. |
| `is_action_just_released()` | Returns `true` if the action was just released this frame. |
| `is_echo()` | Returns `true` if this event is an echo. |
| `is_pressed()` | Returns `true` if the gesture is pressed. |
| `is_released()` | Returns `true` if the gesture was released this frame. |
| `is_just_pressed()` | Returns `true` if the gesture was just pressed this frame. |
| `is_just_released()` | Returns `true` if the gesture was just released this frame. |
| `is_valid()` | Returns `true` if the gesture is valid. |
| `set_modifiers()` | Sets the modifier flags for the event. |
| `add_modifier()` | Adds a modifier flag. |
| `remove_modifier()` | Removes a modifier flag. |
| `clear_modifiers()` | Clears all modifier flags. |
| `get_action()` | Retrieves the action name bound to this event. |
| `set_action()` | Sets the action name. |
| `get_action_strength()` | Retrieves the strength of the bound action. |

*(For the full method list, see the official Godot documentation or the generated API reference.)*

---

## Signals

| Signal | Description |
|--------|-------------|
| `pressed()` | Emitted when the gesture is pressed. |
| `released()` | Emitted when the gesture is released. |

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `TYPE` | `int` | The unique type identifier for the input event. |

---

## Usage Example

```gdscript
func _input(event):
    if event is InputEventPanGesture:
        # Handle panning
        print("Pan delta: ", event.delta)
    elif event is InputEventMagnifyGesture:
        # Handle zooming
        var zoom = event.factor
        print("Zoom factor: ", zoom)
```

---

### References

- [Godot Engine 4.0 Class Reference – InputEventGesture](https://docs.godotengine.org/en/stable/classes/class_inputeventgesture.html)
- [Godot API Documentation – Input Events](https://docs.godotengine.org/en/stable/tutorials/input/input_events.html)

---

*This markdown is a concise summary of the `InputEventGesture` class as found in the Godot Engine documentation. For the most detailed and version‑specific information, refer to the official online reference.*