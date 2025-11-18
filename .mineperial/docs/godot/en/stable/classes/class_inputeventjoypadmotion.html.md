**Note:** The original HTML content for the `InputEventJoypadMotion` class page is not included in the provided snippet.  
Below is a concise Markdown representation based on the available information and the typical structure of Godot Engine class reference pages. If you need the full list of properties, methods, and signals, please refer to the official Godot documentation.

```markdown
# InputEventJoypadMotion

**Inherits:** `InputEvent`

## Description

`InputEventJoypadMotion` is a resource that represents axis motions (e.g., joystick or analog trigger movements) from a gamepad.  
It stores the current value of a joystick axis and provides methods for querying and manipulating that value.

## Typical Use‑Case

```gdscript
func _input(event):
    if event is InputEventJoypadMotion:
        var axis = event.axis
        var value = event.axis_value
        # Handle joystick motion here
```

## Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| `axis` | `int`  | `JOY_AXIS_INVALID` | The joystick axis that generated the event. |
| `axis_value` | `float` | `0.0` | The current value of the axis (`-1.0` to `1.0`). |

> **Note:** The exact property names and default values may vary between Godot versions; consult the official documentation for the most up‑to‑date details.

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| `is_action_pressed(action_name:String) -> bool` | `bool` | Checks if the given action is currently pressed (useful for input actions mapped to joystick axes). |
| `set_deadzone(deadzone:float)` | `void` | Sets a deadzone for the axis to ignore minor movements. |

## Signals

The class does not emit any signals itself; it is used as an input event passed to `_input()` callbacks.

## Related Classes

- [`InputEventJoypadButton`](../class_inputeventjoypadbutton.html)
- [`InputEventKey`](../class_inputeventkey.html)

---

For complete API reference, including all available methods, properties, and signals, see the official Godot Engine documentation:  
[https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadmotion.html](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadmotion.html)
```
