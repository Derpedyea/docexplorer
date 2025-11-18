**InputEventWithModifiers**  
===========================

*Godot Engine – class reference (stable)*

> **Abstract base class** for input events that can be combined with modifier keys (Ctrl, Alt, Shift, Meta, …).

---

### Inheritance

```
InputEventWithModifiers
└─ InputEventFromWindow<
     InputEvent<
       Resource<
         RefCounted<
           Object
         >
       >
     >
```

> **Inherited by**  
> - `InputEventGesture`  
> - `InputEventKey`  
> - `InputEventMouse`

---

### Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `alt_pressed` | `bool` | `false` | Whether the Alt key is held. |
| `ctrl_pressed` | `bool` | `false` | Whether the Control key is held. |
| `meta_pressed` | `bool` | `false` | Whether the Meta key (Command/Windows) is held. |
| `shift_pressed` | `bool` | `false` | Whether the Shift key is held. |
| `pressed` | `bool` | `false` | Whether the event is a press/release. |

---

### Methods

| Method | Returns | Parameters | Description |
|--------|---------|------------|-------------|
| `get_modifiers()` | `int` | – | Returns a bitmask representing the active modifiers. |
| `set_modifiers(int)` | `void` | `bitmask` | Sets the modifier bitmask. |
| `is_action()` | `bool` | – | (Inherited) Checks if the event represents a UI action. |
| `is_echo()` | `bool` | – | (Inherited) Returns `true` for repeat key presses. |

> **Note** – These methods are typically used through the `InputEvent` hierarchy and are overridden by concrete subclasses such as `InputEventKey` or `InputEventMouse`.

---

### Example

```gdscript
func _input(event):
    if event is InputEventWithModifiers and event.is_pressed():
        if event.ctrl_pressed:
            print("Ctrl is held")
```

---

### Related Resources

- [InputEvent](../class_inputevent.html)
- [InputEventKey](../class_inputeventkey.html)
- [InputEventMouse](../class_inputeventmouse.html)
- [InputEventGesture](../class_inputeventgesture.html)

---