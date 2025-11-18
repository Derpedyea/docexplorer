**InputEventMouse**  
======================

A base class for all mouse‑related input events in Godot.

* **Inherits**  
  - `InputEventWithModifiers` → `InputEventFromWindow` → `InputEvent` → `Resource` → `RefCounted` → `Object`

---

### Description

`InputEventMouse` is the parent class for all mouse input events.  
It provides common information about mouse state that is shared by its subclasses:

* `position` – Current mouse position in the window.  
* `global_position` – Current mouse position in global coordinates.  
* `delta` – Movement delta since the last event.  
* `pressure` – Pressure value (if supported by the device).  

Sub‑classes such as `InputEventMouseButton` and `InputEventMouseMotion` extend this
information with button‑specific data or motion‑specific data.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | `Vector2` | `Vector2(0, 0)` | Mouse position relative to the viewport. |
| `global_position` | `Vector2` | `Vector2(0, 0)` | Mouse position relative to the root window. |
| `delta` | `Vector2` | `Vector2(0, 0)` | The change in mouse position since the previous event. |
| `pressure` | `float` | `1.0` | The pressure applied (useful for stylus input). |
| `button_mask` | `int` | `0` | Bitmask of currently pressed mouse buttons. |
| `modifiers` | `int` | `0` | Modifier flags (e.g., shift, ctrl, alt). |

---

### Methods

#### `get_button_mask() -> int`

Returns the bitmask of all pressed mouse buttons.  
Useful for checking specific button states without needing to cast to a
sub‑class.

#### `get_position() -> Vector2`

Returns the local mouse position.

#### `get_global_position() -> Vector2`

Returns the global mouse position.

#### `get_delta() -> Vector2`

Returns the delta vector (movement since last event).

#### `is_button_pressed(button_index: int) -> bool`

Checks whether a particular mouse button is pressed.

#### `is_pressed() -> bool`

Returns `true` if any mouse button is currently pressed.  
(Equivalent to checking `button_mask != 0`.)

#### `is_doubleclick() -> bool`

Indicates if the last event was a double‑click.

---

### Signals

*None (this class does not emit signals itself; subclasses like `InputEventMouseButton` do).*

---

### Example Usage

```gdscript
func _input(event):
    if event is InputEventMouse:
        print("Mouse moved to:", event.position)
    if event is InputEventMouseButton and event.pressed:
        print("Button", event.button_index, "pressed.")
```

---

### Related Classes

* `InputEventMouseButton` – Handles button press/release events.  
* `InputEventMouseMotion` – Handles mouse movement events.  

---

### Notes

* The `position` and `global_position` values are in the coordinate space of the
  viewport and the root window, respectively.  
* `delta` is only updated for motion events (`InputEventMouseMotion`).  
* Modifier keys (shift, ctrl, alt) are available through the `modifiers` property
  inherited from `InputEventWithModifiers`.

---