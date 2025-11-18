**CheckButton** – Godot Engine Class Reference  
================================================

> A button that represents a binary choice.  
> **CheckButton** is a toggle button displayed as a check field.  
> It inherits from `Button`, `BaseButton`, `Control`, `CanvasItem`, `Node`, and `Object`.

---

## Inheritance

```
Object
 └─ Node
      └─ CanvasItem
           └─ Control
                └─ BaseButton
                     └─ Button
                          └─ CheckButton
```

---

## Description

`CheckButton` behaves like a normal button but stays pressed (checked) until it is toggled off.  
It is commonly used for on‑off options in user interfaces.

---

## Signals

| Signal | Description | Parameters |
|--------|-------------|------------|
| **pressed** | Emitted when the button is pressed or toggled on. | `()` |
| **toggled** | Emitted when the button is toggled; passes the new pressed state. | `pressed : bool` |

> *Note:* `pressed` is also emitted by the base `Button` class.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **pressed** | `bool` | `false` | Whether the button is currently pressed (checked). |
| **toggle_mode** | `bool` | `true` | If `true`, the button behaves as a toggle. For `CheckButton` this is always `true`. |
| **text** | `String` | `""` | Button label. |
| **theme_type_variation** | `String` | `""` | Name of theme variation to apply. |

---

## Methods

### `Button`

Inherited from `Button`. The following methods are available (see `Button` docs for details):

- `set_text(text: String) → void`  
- `get_text() → String`  
- `set_pressed(pressed: bool) → void`  
- `is_pressed() → bool`  
- `toggle() → void`  
- `grab_focus() → void`  
- `release_focus() → void`

### `CheckButton`

| Method | Returns | Arguments | Description |
|--------|---------|-----------|-------------|
| `set_pressed(pressed: bool)` | `void` | `pressed : bool` | Sets the pressed state. |
| `is_pressed()` | `bool` | `()` | Returns `true` if the button is pressed. |
| `toggle()` | `void` | `()` | Toggles the pressed state. |

> *All other methods and properties are inherited from `Button`.*

---

## Example Usage

### GDScript

```gdscript
# A CheckButton that toggles a setting
func _ready():
    var check = $CheckButton
    check.pressed = true            # Set initial state
    check.connect("toggled", self, "_on_CheckButton_toggled")

func _on_CheckButton_toggled(pressed: bool):
    print("CheckButton is now: ", pressed)
```

### C#

```csharp
using Godot;

public partial class MyNode : Node
{
    public override void _Ready()
    {
        CheckButton check = GetNode<CheckButton>("CheckButton");
        check.Pressed = true; // Set initial state
        check.Toggled += OnToggled;
    }

    private void OnToggled(bool pressed)
    {
        GD.Print("CheckButton is now: ", pressed);
    }
}
```

---

## Quick Reference

| Category | Item | Usage |
|----------|------|-------|
| Property | `pressed` | `checkButton.Pressed = true;` |
| Signal   | `toggled` | `checkButton.Connect("toggled", Callable.From(OnToggled));` |
| Method   | `toggle()` | `checkButton.Toggle();` |

---

**Documentation Source:** [Godot Engine 4.x](https://docs.godotengine.org/en/stable/classes/class_checkbutton.html)