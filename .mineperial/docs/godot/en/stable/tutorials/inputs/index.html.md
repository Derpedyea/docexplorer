**Input handling – Godot Engine (stable) documentation**

---

# Input handling

This section provides a quick reference and tutorials for handling input in Godot.  It covers the core Input API, how to work with input events, mouse coordinates, custom cursors, gamepad support, and quitting the game.

## Table of contents

| Topic | Description | Link |
|-------|-------------|------|
| [Using InputEvent](inputevent.html) | Detailed explanation of the `InputEvent` class hierarchy and how to use it. | `inputevent.html` |
| [Input examples](input_examples.html) | Code snippets for common input patterns. | `input_examples.html` |
| [Mouse and input coordinates](mouse_coordinates.html) | Converting between screen, viewport, and node space. | `mouse_coordinates.html` |
| [Customizing the mouse cursor](mouse_cursor.html) | Changing the cursor texture, shape, and hiding it. | `mouse_cursor.html` |
| [Controllers, gamepads, and joysticks](controllers.html) | Setting up and handling gamepad input. | `controllers.html` |
| [Handling quit requests](quit_requests.html) | Listening for and handling quit signals (e.g., window close, Alt+F4). | `quit_requests.html` |

> *All links lead to the full tutorial pages under `tutorials/inputs/`.*

---

## Quick start

```gdscript
func _input(event):
    if event is InputEventKey and event.pressed:
        if event.scancode == KEY_SPACE:
            # Do something when the space bar is pressed
            pass
```

The `_input()` callback receives every input event.  Combine it with `Input.is_action_pressed()` for action‑based input handling.

---

## Further reading

- [Input API reference](https://docs.godotengine.org/en/stable/classes/class_input.html) – official class documentation
- [Input Event hierarchy](https://docs.godotengine.org/en/stable/classes/class_inputevent.html) – detailed event types
- [Keyboard mapping and actions](https://docs.godotengine.org/en/stable/tutorials/inputs/input_actions.html) – setting up `InputMap`

---

*End of page.*