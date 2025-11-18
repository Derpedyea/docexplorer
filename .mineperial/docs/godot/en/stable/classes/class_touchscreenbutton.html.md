**TouchScreenButton – Godot Engine Class Reference**  

---

## Inherits
`Node2D` → `CanvasItem` → `Node` → `Object`

---

## Description
`TouchScreenButton` is a UI node that provides an on‑screen button for touch‑enabled devices.  
It can be used in 2D or 3D projects to receive input from a finger or a mouse click, and can be grouped with other buttons so that only one can be pressed at a time.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **button_group** | `ButtonGroup` | `null` | Group this button belongs to. Only one button in a group can be pressed simultaneously. |
| **disabled** | `bool` | `false` | If `true`, the button does not react to input. |
| **focus_mode** | `int` | `FOCUS_NONE` | Defines how the node behaves when it receives focus. |
| **flip_h** | `bool` | `false` | If `true`, the button is flipped horizontally. |
| **flip_v** | `bool` | `false` | If `true`, the button is flipped vertically. |
| **hold_delay** | `float` | `0.0` | Time in seconds to wait before emitting the `pressed` signal when the button is held. |
| **hovered** | `bool` | `false` | Read‑only. `true` when the pointer is over the button. |
| **icon** | `Texture2D` | `null` | Texture used as the button icon. |
| **pressed** | `bool` | `false` | Read‑only. `true` when the button is currently pressed. |
| **pressed_texture** | `Texture2D` | `null` | Texture displayed while the button is pressed. |
| **toggle_mode** | `bool` | `false` | If `true`, pressing the button toggles its `pressed` state. |
| **use_fine_input** | `bool` | `false` | Enables fine input (e.g., trackpad) support for more precise interaction. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `pressed()` | Emitted when the button is pressed. |
| `released()` | Emitted when the button is released. |
| `toggled(bool)` | Emitted when the button toggles. The argument is the new pressed state. |

---

## Methods

### `_input(event: InputEvent) -> void`
Called for every input event. Handles touch and mouse interaction.

### `get_button_group() -> ButtonGroup`
Returns the `ButtonGroup` the button belongs to.

### `is_pressed() -> bool`
Returns whether the button is currently pressed.

### `set_button_group(group: ButtonGroup) -> void`
Assigns a new group for this button.

### `set_pressed(pressed: bool) -> void`
Forcefully sets the pressed state (used by scripts).

### `set_toggle_mode(enable: bool) -> void`
Enables or disables toggle mode.

### `toggle_pressed() -> void`
Toggles the pressed state if `toggle_mode` is enabled.

---

## Example Usage

```gdscript
# Attach this script to a TouchScreenButton node
extends TouchScreenButton

func _ready():
    connect("pressed", self, "_on_button_pressed")
    connect("released", self, "_on_button_released")

func _on_button_pressed():
    print("Button pressed")

func _on_button_released():
    print("Button released")
```

---

### Toggle Button Example

```gdscript
extends TouchScreenButton

func _ready():
    toggle_mode = true
    connect("toggled", self, "_on_toggled")

func _on_toggled(state: bool):
    if state:
        print("Button ON")
    else:
        print("Button OFF")
```

---

## See Also

* [Button](class_button.html) – Base class for UI buttons.  
* [ButtonGroup](class_buttongroup.html) – Grouping of buttons.  
* [Control](class_control.html) – Base class for 2D UI nodes.  

---