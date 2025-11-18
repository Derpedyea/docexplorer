# InputEventShortcut

> **Godot Engine 4.x – Class Reference**

`InputEventShortcut` is a special type of `InputEvent` that represents a keyboard shortcut. It can be received in a node’s `_input()` callback, or used with the `InputMap` system.

---

## Inheritance

```
Object
  └─ RefCounted
      └─ Resource
          └─ InputEvent
              └─ InputEventShortcut
```

---

## Description

`InputEventShortcut` encapsulates a combination of a keyboard key (or mouse button) and an optional modifier set (Ctrl, Shift, Alt, Meta). When the defined shortcut is triggered it produces an `InputEventShortcut` that can be handled like any other input event. The event is typically used in the editor for menu actions or in games for custom hot‑keys.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `pressed()` | — | Emitted when the shortcut is activated. |
| `released()` | — | Emitted when the shortcut is released. |

> *Note:* These signals are only emitted when the `InputEventShortcut` is used with the `InputEventShortcut` node in the scene tree or when the event is explicitly polled via `Input.is_action_pressed()`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shortcut` | `InputEvent` | `null` | The underlying input event that constitutes the shortcut. |
| `enabled` | `bool` | `true` | Whether the shortcut is active. |
| `consume` | `bool` | `true` | If `true`, the event will not propagate to other listeners once handled. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `is_action_pressed(action: String)` | `bool` | Returns `true` if the shortcut is currently pressed. |
| `is_action_released(action: String)` | `bool` | Returns `true` if the shortcut was released. |
| `is_action_just_pressed(action: String)` | `bool` | Returns `true` if the shortcut was just pressed this frame. |
| `is_action_just_released(action: String)` | `bool` | Returns `true` if the shortcut was just released this frame. |
| `get_event()` | `InputEvent` | Returns the raw input event that triggered the shortcut. |

> **Example** – Using a shortcut in `_input`:

```gdscript
func _input(event):
    if event is InputEventShortcut and event.is_action_pressed("my_shortcut"):
        # Do something when the shortcut is pressed
```

---

## Usage

1. **Define a shortcut** in the editor’s *Project Settings → Input Map* or via script:

   ```gdscript
   var shortcut = InputEventShortcut.new()
   shortcut.shortcut = InputEventKey.new()
   shortcut.shortcut.scancode = KEY_S
   shortcut.shortcut.control = true   # Ctrl+S
   ```

2. **Add it to a node** that inherits from `Node`:

   ```gdscript
   var shortcut_node = Shortcut.new()
   shortcut_node.shortcut = shortcut
   add_child(shortcut_node)
   ```

3. **Respond to signals**:

   ```gdscript
   shortcut_node.connect("pressed", self, "_on_shortcut_pressed")

   func _on_shortcut_pressed():
       # Handle the shortcut
   ```

---

## See Also

- [InputEvent](../class_inputevent.html)
- [InputMap](../class_inputmap.html)
- [InputEventKey](../class_inputeventkey.html)
- [Shortcut](../class_shortcut.html)

---