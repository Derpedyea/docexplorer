**CheckBox** – Godot Engine Documentation  
*(stable version)*

> A **CheckBox** is a GUI element that allows the user to toggle between two states (checked or unchecked). It is a subclass of `Button` and inherits all of the typical button behavior while adding a binary state.

---

## Inheritance Tree
```
Object
 └─ Node
     └─ CanvasItem
         └─ Control
             └─ BaseButton
                 └─ Button
                     └─ CheckBox
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `pressed()` | Emitted when the checkbox is clicked (the state changes). |
| `toggled(bool)` | Emitted when the checkbox state changes. The new value (`true` if checked, `false` if unchecked) is passed as an argument. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `pressed` | `bool` | `false` | Whether the checkbox is currently checked. |
| `text` | `String` | `""` | The label displayed next to the checkbox. |
| `theme_type_variation` | `String` | `""` | Custom theme variation name. |

> **Note:** `pressed` is inherited from `Button`; its meaning is reinterpreted to represent the checkbox state.

---

## Methods

The following methods are inherited from `Button` and are available for `CheckBox`. They are listed here for convenience.

| Method | Description |
|--------|-------------|
| `set_pressed(bool)` | Sets the checked state. |
| `is_pressed()` | Returns the checked state. |
| `toggle()` | Toggles the state between checked and unchecked. |

---

## Usage Example (GDScript)

```gdscript
extends CheckBox

func _ready() -> void:
    # Connect the toggled signal to a custom handler.
    connect("toggled", self, "_on_Toggled")

func _on_Toggled(pressed: bool) -> void:
    if pressed:
        print("Checkbox is ON")
    else:
        print("Checkbox is OFF")
```

```gdscript
# Toggling the checkbox programmatically.
var checkbox = CheckBox.new()
checkbox.set_pressed(true)  # Sets the checkbox to checked.
```

---

## Visual Customization

* **Style** – Use theme overrides for the checkbox box and checkmark.
* **Font** – Set the `font` and `font_size` properties in the `theme` to style the label text.

---

## Common Use Cases

* **Settings screens** – Toggle features on/off.
* **Form input** – Select options in a UI form.
* **Option lists** – Provide binary choices alongside other controls.

---

*For full API reference, see the [Godot Engine documentation](https://docs.godotengine.org/en/stable/classes/class_checkbox.html).*