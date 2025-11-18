# InputEventMouseButton

Represents a mouse button being pressed or released.

## Inheritance

```
InputEventMouseButton
    └─ InputEventWithModifiers
          └─ InputEventFromWindow
                └─ InputEvent
                      └─ Resource
                            └─ RefCounted
                                  └─ Object
```

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `button_index` | `int` | Index of the mouse button that triggered the event. |
| `button_mask` | `int` | Bitmask of all button bits that were pressed when the event occurred. |
| `pressed` | `bool` | `true` if the button was pressed, `false` if released. |
| `double_click` | `bool` | `true` if the event was a double‑click. |
| `position` | `Vector2` | Position of the mouse relative to the window at the time of the event. *(Inherited from `InputEventMouse`)* |
| `global_position` | `Vector2` | Global position of the mouse at the time of the event. *(Inherited)* |
| `shift` | `bool` | `true` if the Shift key was held down. *(Inherited from `InputEventWithModifiers`)* |
| `ctrl` | `bool` | `true` if the Control key was held down. |
| `alt` | `bool` | `true` if the Alt key was held down. |
| `meta` | `bool` | `true` if the Meta (Command/Windows) key was held down. |

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `is_pressed() → bool` | `bool` | Returns whether the mouse button was pressed. |
| `get_button_index() → int` | `int` | Returns the index of the button that generated the event. |
| `is_doubleclick() → bool` | `bool` | Returns whether the event was a double‑click. |
| `get_position() → Vector2` | `Vector2` | Returns the mouse position relative to the event origin (window). *(Inherited)* |
| `get_global_position() → Vector2` | `Vector2` | Returns the global mouse position. *(Inherited)* |

> **Note**: The `pressed` property and `is_pressed()` method are equivalent.  
> The `position` and `global_position` methods are inherited from `InputEventMouse`.

## Signals

None.

## Example Usage

```gdscript
func _input(event):
    if event is InputEventMouseButton:
        if event.button_index == MOUSE_BUTTON_LEFT and event.pressed:
            print("Left button clicked at ", event.position)
```

## See Also

- [InputEventMouse](https://docs.godotengine.org/en/stable/classes/class_inputeventmouse.html)
- [InputEvent](https://docs.godotengine.org/en/stable/classes/class_inputevent.html)
- [Input](https://docs.godotengine.org/en/stable/tutorials/input/input_event.html) – General input handling in Godot.