**InputEventKey**  
*Godot Engine – Class reference (stable)*  

---

### Description
`InputEventKey` represents a keyboard key event (press or release).  
It inherits from `InputEventWithModifiers`, `InputEventFromWindow`, and `InputEvent`.

---

## Inherited members

| Class | Members |
|-------|---------|
| `InputEventWithModifiers` | `alt`, `shift`, `ctrl`, `meta` |
| `InputEventFromWindow` | `device`, `echo` |
| `InputEvent` | `pressed`, `is_pressed()`, `is_echo()` |

> **Note**: The table only shows the most relevant inherited properties for quick reference.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `scancode` | `int` | `0` | The raw scancode of the key. |
| `physical_scancode` | `int` | `0` | The scancode independent of the keyboard layout. |
| `keycode` | `Key` | `KEY_NONE` | The Godot `Key` enum value that represents the key. |
| `unicode` | `int` | `0` | Unicode code point of the character generated (if any). |
| `echo` | `bool` | `false` | `true` if the key is repeating because it is held down. |
| `pressed` | `bool` | `false` | `true` if the key is pressed, `false` if released. |
| `device` | `int` | `-1` | Index of the input device that generated the event (keyboard, gamepad, etc.). |
| `alt` | `bool` | `false` | `true` if Alt modifier is active. |
| `shift` | `bool` | `false` | `true` if Shift modifier is active. |
| `ctrl` | `bool` | `false` | `true` if Control modifier is active. |
| `meta` | `bool` | `false` | `true` if Meta (Command/Windows) modifier is active. |

---

## Methods

| Signature | Description |
|-----------|-------------|
| `is_pressed() -> bool` | Returns `true` if the key was pressed (not released). |
| `is_echo() -> bool` | Returns `true` if the event is an *echo* event (key repeat). |
| `is_action_pressed(name: StringName, allow_echo: bool = false) -> bool` | Returns `true` if the key corresponds to an action that is currently pressed. |
| `is_action_released(name: StringName) -> bool` | Returns `true` if the key corresponds to an action that was just released. |
| `is_key_pressed() -> bool` | Alias of `is_pressed()` (for backward compatibility). |
| `set_scancode(scancode: int) -> void` | Sets the raw scancode. |
| `set_physical_scancode(scancode: int) -> void` | Sets the physical scancode. |
| `set_keycode(key: Key) -> void` | Sets the keycode. |
| `set_unicode(codepoint: int) -> void` | Sets the Unicode value. |
| `set_echo(echo: bool) -> void` | Sets the echo flag. |
| `set_pressed(pressed: bool) -> void` | Sets the pressed flag. |
| `set_device(device: int) -> void` | Sets the device index. |

---

## Signals

`InputEventKey` does not define its own signals.

---

## Usage Example

```gdscript
# _input(event) in a Node
func _input(event):
    if event is InputEventKey:
        if event.is_action_pressed("ui_accept"):
            print("Enter pressed")
        elif event.is_action_pressed("ui_cancel"):
            print("Esc pressed")
```

---

## Related Classes

- [InputEventMouse](https://docs.godotengine.org/en/stable/classes/class_inputeventmouse.html)
- [InputEventJoypadButton](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadbutton.html)
- [InputEventAction](https://docs.godotengine.org/en/stable/classes/class_inputeventaction.html)

---

### See also

* [Input](https://docs.godotengine.org/en/stable/tutorials/input/index.html) – General input handling
* [InputMap](https://docs.godotengine.org/en/stable/classes/class_inputmap.html) – Mapping actions to keys
* [Keyboard](https://docs.godotengine.org/en/stable/tutorials/inputs/keyboard.html) – Keyboard input guide

---