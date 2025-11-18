**HFlowContainer** – Godot Engine Reference (stable)

---

## Overview

`HFlowContainer` is a UI container node that arranges its child controls horizontally and automatically wraps them onto a new line when the available width is exceeded.  
It is a specialized form of the generic `FlowContainer` that always flows left‑to‑right (as opposed to a vertical flow).

```
Inheritance hierarchy
Object ← Node ← CanvasItem ← Control ← Container ← FlowContainer ← HFlowContainer
```

---

## Description

> A container that arranges its child controls horizontally and wraps them around at the borders.  
> It is useful for creating dynamic UI layouts such as toolbars, tag clouds, or any grid that expands in one dimension.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `horizontal_separation` | `int` | `0` | Spacing between children along the horizontal axis. |
| `vertical_separation`   | `int` | `0` | Spacing between children along the vertical axis. |
| `tight` | `bool` | `false` | If `true`, child controls will be arranged without extra spacing, using the `tight_mode` of the parent `FlowContainer`. |
| `wrap` | `bool` | `true` | Whether to wrap child controls to the next line when exceeding the available width. |

> All of these properties are exposed to the editor and can be set through the inspector or via GDScript:

```gdscript
var container = HFlowContainer.new()
container.horizontal_separation = 10
container.vertical_separation = 5
container.tight = true
container.wrap = true
```

---

## Methods

The class inherits all methods from its parents. The most commonly overridden methods are:

| Method | Signature | Description |
|--------|-----------|-------------|
| `_ready()` | `void` | Called when the node enters the scene tree. |
| `_gui_input(event)` | `void` | Process GUI input events. |
| `get_children()` | `Array[Node]` | Returns the child nodes. |
| `add_child(child)` | `void` | Adds a child node. |
| `remove_child(child)` | `void` | Removes a child node. |

> No additional public methods are defined in `HFlowContainer`.

---

## Signals

`HFlowContainer` does not emit any signals of its own. It inherits signals from `Control`, `Container`, etc., such as `_gui_input` and `_notification`.

---

## Usage Example

```gdscript
# Create a horizontal flow container
var hflow = HFlowContainer.new()
hflow.horizontal_separation = 16
hflow.vertical_separation = 8
hflow.tight = false
hflow.wrap = true
add_child(hflow)

# Add buttons dynamically
for i in range(10):
    var btn = Button.new()
    btn.text = "Button %d" % i
    hflow.add_child(btn)
```

The buttons will be laid out horizontally with 16 px between them, wrapping onto new rows when the container’s width is reached.

---

## See Also

- [FlowContainer](https://docs.godotengine.org/en/stable/classes/class_flowcontainer.html)
- [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)
- [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)

---