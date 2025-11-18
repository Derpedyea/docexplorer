**InputEventJoypadButton**  
===========================

> **Godot Engine Documentation – Class Reference**  
> *Version: stable*

---

### Inherits

```
InputEvent
```

---

### Description
`InputEventJoypadButton` is a resource that represents a button press or release event on a gamepad controller.  
It is part of Godot’s input‑event system and can be used to detect button states in both 2D and 3D projects.  
For analog stick movements and other axis events, see :class:`InputEventJoypadMotion`.

---

### Properties
| Name           | Type   | Default | Description |
|----------------|--------|---------|-------------|
| `button_index` | `int`  | `0`     | The index of the button (see `joypad_button` constants). |
| `pressed`      | `bool` | `false` | `true` if the button is currently pressed. |
| `repeat`       | `bool` | `false` | `true` if the event is a repeat (button held). |
| `scancode`     | `int`  | `0`     | Scancode for keyboard mapping (rarely used for joypad). |

> **Note:** In Godot 4, `button_index` is usually set to one of the predefined constants from `JoyButton`.  
> For example, `JOY_BUTTON_A` is `0`, `JOY_BUTTON_B` is `1`, etc.

---

### Signals
| Signal | Description |
|--------|-------------|
| `pressed` | Emitted when the button becomes pressed. |
| `released` | Emitted when the button is released. |

> These signals are available on `InputEventJoypadButton` when used with the `Input` singleton (`Input.is_action_pressed()` etc.).

---

### Methods
| Method | Return Type | Description |
|--------|-------------|-------------|
| `is_pressed()` | `bool` | Returns `true` if the button is currently pressed. |
| `get_button_index()` | `int` | Returns the button’s index. |
| `set_button_index(index: int)` | `void` | Sets the button’s index. |
| `get_action()` | `String` | Returns the name of the input action bound to this event. |
| `set_action(action: String)` | `void` | Sets the action name for this event. |
| `get_action_strength()` | `float` | Returns the strength of the action (0–1 for joypad buttons). |
| `get_pressed()` | `bool` | Alias for `is_pressed()`. |
| `set_pressed(pressed: bool)` | `void` | Sets the pressed state. |

---

### Usage Example

```gdscript
func _input(event):
    if event is InputEventJoypadButton:
        if event.is_pressed():
            print("Joypad button %d pressed" % event.button_index)
        else:
            print("Joypad button %d released" % event.button_index)
```

---

### Related Resources

* :class:`InputEventJoypadMotion` – Handles analog stick and trigger movements.  
* :class:`InputEvent` – Base class for all input events.  
* :class:`Input` – Input singleton for querying input state.

---

**Links**

* [Godot Docs – InputEventJoypadButton](https://docs.godotengine.org/en/stable/classes/class_inputeventjoypadbutton.html)  
* [Godot Docs – Input System](https://docs.godotengine.org/en/stable/tutorials/input/input_actions.html)  

---