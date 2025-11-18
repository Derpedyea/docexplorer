**Window** – Godot Engine Reference  
======================================

This page documents the `Window` node class in Godot 4.  
It is the base class for all windows, dialogs, and pop‑ups that can be
displayed as separate OS windows or as part of the editor UI.

---

## Inheritance

```
Object
└─ Node
   └─ Viewport
      └─ Window
```

*Inherits from:* `Viewport` → `Node` → `Object`  
*Inherited By:* `AcceptDialog`, `Popup` (and all classes that derive from them)

---

## Description

`Window` is a node that creates a window.  
The window can either be a native OS window (when the project is exported
or run from the editor) or a **popup** within the editor itself.  
The node can be configured to be borderless, resizable, modal, and can
contain a scene tree as its contents.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `String` | `""` | Title shown in the window’s title bar. |
| `modal` | `bool` | `false` | If `true`, blocks interaction with other windows. |
| `size` | `Vector2i` | `Vector2i(0,0)` | Size of the window. |
| `position` | `Vector2i` | `Vector2i(0,0)` | Window position on screen. |
| `resizable` | `bool` | `true` | Allows the window to be resized by the user. |
| `always_on_top` | `bool` | `false` | Keeps the window above all other windows. |
| `transparent` | `bool` | `false` | Makes the window background transparent. |

*(Additional properties are available in the full reference – see the
Godot docs.)*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `ready()` | — | Emitted when the window is ready to be used. |
| `focus_entered()` | — | Emitted when the window gains input focus. |
| `focus_exited()` | — | Emitted when the window loses input focus. |
| `resized()` | `Vector2i size` | Emitted when the window is resized. |
| `moved()` | `Vector2i position` | Emitted when the window is moved. |
| `close_requested()` | — | Emitted when the user attempts to close the window. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `popup()` | `void` | Displays the window on the screen. |
| `popup_centered()` | `void` | Pops up the window centered on the screen. |
| `popup_centered_minsize()` | `void` | Same as `popup_centered()` but respects the minimum size. |
| `popup_centered_ratio(float ratio)` | `void` | Pops up the window centered with the given screen ratio. |
| `popup_exclusive()` | `void` | Pops up the window and disables all other windows. |
| `popup_exclusive_centered()` | `void` | Same as `popup_exclusive()` but centered. |
| `get_window()` | `Window` | Returns the actual OS window or popup node. |
| `set_transparent(bool enabled)` | `void` | Enables or disables transparency. |
| `set_modal(bool enabled)` | `void` | Sets modal state. |

*(The complete list includes many more helper methods for manipulating
window state.)*

---

## Example

```gdscript
# Example: Create a simple dialog window
var win = Window.new()
win.title = "My Dialog"
win.resizable = false
win.popup_centered()
```

---

## Usage Notes

* When used in the editor, `Window` can act as a **popup** for custom
  editor panels.
* For exported projects, a `Window` becomes a separate OS window,
  allowing you to create multi‑window applications.
* The node’s size and position can be animated or adjusted during runtime.

---

### Further Reading

* [Popup](../class_popup.html) – The base class for popup windows.  
* [Viewport](../class_viewport.html) – Rendering and input context for `Window`.  
* [Node](../class_node.html) – Parent class of all scene tree nodes.  

---

*This page is part of the official Godot Engine class reference (stable
version). For the latest changes, consult the online documentation.*