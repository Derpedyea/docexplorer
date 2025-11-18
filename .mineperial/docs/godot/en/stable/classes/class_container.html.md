# Container

*Documentation for the Godot Engine 4.0 `Container` class.*

---

## Inheritance Hierarchy

```
Object
└─ Node
   └─ CanvasItem
      └─ Control
         └─ Container
```

`Container` is a base class for layout nodes that automatically arrange their children. It is inherited by many specialized containers such as `BoxContainer`, `GridContainer`, `FlowContainer`, `CenterContainer`, and others.

---

## Overview

A `Container` automatically positions and resizes its child nodes according to its own rules. It does not render anything itself – it simply manages the layout of its children. Common use cases include:

- Grouping UI elements that need a consistent layout (vertical, horizontal, grid, etc.).
- Dynamically resizing child widgets when the parent changes size.
- Providing a consistent margin and spacing between children.

---

## Signals

| Signal | Description |
|--------|-------------|
| `resized` | Emitted when the container's size changes. |

---

## Methods

> *The following list contains the most frequently used methods. The full API is available in the official reference.*

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_child(node)` | `void` | Adds a child `Control` node to the container. |
| `remove_child(node)` | `void` | Removes a child `Control` node. |
| `get_child(index)` | `Node` | Returns the child at the given index. |
| `get_children()` | `Array` | Returns an array of all child nodes. |
| `set_custom_minimum_size(size)` | `void` | Sets the minimum size of the container. |
| `set_layout_offset(offset)` | `void` | Sets the layout offset for positioning children. |
| `get_layout_offset()` | `Vector2` | Returns the current layout offset. |
| `get_margin_left()` / `get_margin_right()` / `get_margin_top()` / `get_margin_bottom()` | `int` | Return the container's margins. |
| `set_anchors_preset(preset)` | `void` | Sets preset anchor values for layout. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `custom_minimum_size` | `Vector2` | `Vector2(0, 0)` | Minimum size of the container. |
| `rect_min_size` | `Vector2` | `Vector2(0, 0)` | The minimum size the container is allowed to shrink to. |
| `rect_size` | `Vector2` | `Vector2(0, 0)` | The current size of the container. |
| `rect_pivot_offset` | `Vector2` | `Vector2(0, 0)` | Pivot point of the container. |
| `anchor_right`, `anchor_left`, `anchor_top`, `anchor_bottom` | `float` | `0.0` | Anchor values for layout. |
| `margin_left`, `margin_top`, `margin_right`, `margin_bottom` | `float` | `0.0` | Margin values for layout. |
| `size_flags_horizontal`, `size_flags_vertical` | `int` | `0` | Flags controlling how the container expands or contracts. |

---

## Usage Example

```gdscript
# Example of creating a simple vertical container
var vbox = VBoxContainer.new()
vbox.anchor_right = 1.0
vbox.anchor_bottom = 1.0
vbox.margin_left = 10
vbox.margin_top = 10
vbox.margin_right = 10
vbox.margin_bottom = 10

var btn1 = Button.new()
btn1.text = "Play"
var btn2 = Button.new()
btn2.text = "Quit"

vbox.add_child(btn1)
vbox.add_child(btn2)

add_child(vbox)
```

---

## See Also

- [Control](../classes/class_control.html)
- [BoxContainer](../classes/class_boxcontainer.html)
- [GridContainer](../classes/class_gridcontainer.html)
- [FlowContainer](../classes/class_flowcontainer.html)
- [CenterContainer](../classes/class_centercontainer.html)

---