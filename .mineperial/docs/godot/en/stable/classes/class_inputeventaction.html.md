# InputEventAction

> **Godot 4.x** – [Godot Engine Documentation](https://docs.godotengine.org/en/stable/classes/class_inputeventaction.html)

`InputEventAction` is a concrete implementation of the abstract `InputEvent` class that represents an action-based input.  
Typical usage is in the input handling system where you want to respond to a logical action (e.g. `"ui_up"`, `"jump"`) rather than a concrete key or button.

---

## Inheritance

```
Resource
└─ RefCounted
   └─ Object
      └─ InputEvent
         └─ InputEventAction
```

---

## Description

`InputEventAction` encapsulates a generic action that can be triggered by any input device (keyboard, mouse, gamepad, touch, etc.).  
It is usually created automatically by the engine when an action is pressed or released.  
The class contains only two pieces of information:

| Property | Type | Description |
|----------|------|-------------|
| **action** | `String` | The name of the action (e.g. `"ui_up"`). |
| **pressed** | `bool` | `true` if the action is currently pressed, `false` otherwise. |

You normally **don’t** create `InputEventAction` instances directly in GDScript; the engine supplies them in callbacks such as `InputEvent` received by `_input()` or via the `Input` singleton (`Input.is_action_pressed()`, etc.).

---

## Methods

| Method | Signature | Return | Description |
|--------|-----------|--------|-------------|
| **`get_action()`** | `String` | Returns the name of the action. |
| **`is_pressed()`** | `bool` | Returns the pressed state (`true` if pressed). |
| **`set_action(action: String)`** | `void` | Sets the action name. |
| **`set_pressed(pressed: bool)`** | `void` | Sets the pressed state. |

> **Note:** The `pressed` property is read‑only through `is_pressed()`. Setting it directly is generally not needed when you receive events from the engine.

---

## Example

```gdscript
func _input(event):
    if event is InputEventAction and event.is_pressed():
        if event.get_action() == "jump":
            _jump()
```

Or, using the `Input` singleton:

```gdscript
func _physics_process(delta):
    if Input.is_action_pressed("move_right"):
        position.x += speed * delta
```

---

## Related Classes

- [InputEvent](../class_inputevent.html) – Base class for all input events.
- [InputEventKey](../class_inputeventkey.html) – Handles keyboard keys.
- [InputEventMouseButton](../class_inputeventmousebutton.html) – Handles mouse clicks.
- [InputEventMouseMotion](../class_inputeventmousemotion.html) – Handles mouse movement.
- [InputEventJoypadButton](../class_inputeventjoypadbutton.html) – Handles joystick buttons.

---

## Quick Reference

| Property | Type | Default | Mutability |
|----------|------|---------|------------|
| `action` | `String` | `""` | Read‑write |
| `pressed` | `bool` | `false` | Read‑only (use `is_pressed()`) |

| Method | Purpose |
|--------|---------|
| `get_action()` | Retrieve the action name. |
| `is_pressed()` | Check if the action is currently pressed. |
| `set_action(action)` | Define the action name. |
| `set_pressed(pressed)` | Update the pressed state (internal use). |

---

### When to Use

- Inside `_input()` or `_unhandled_input()` to react to low‑level events.
- For debugging or logging of action events.
- When you need to inspect the exact action that was triggered (e.g., for custom UI).

> For most cases, use the high‑level `Input.is_action_*()` methods instead of handling `InputEventAction` directly.  

---

**End of `InputEventAction` reference.**