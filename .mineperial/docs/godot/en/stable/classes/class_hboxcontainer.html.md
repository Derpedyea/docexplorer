# HBoxContainer

> **Godot Engine – Stable Documentation**

## Inheritance

```
HBoxContainer
   └─ BoxContainer
        └─ Container
             └─ Control
                  └─ CanvasItem
                       └─ Node
                            └─ Object
```

`HBoxContainer` is a GUI container that arranges its child controls horizontally.

## Description

The `HBoxContainer` node automatically arranges its child `Control` nodes in a single horizontal row. It resizes its children according to their size flags and the container’s own layout properties. It is a convenient alternative to manually positioning child controls when a simple horizontal layout is desired.

The container supports the following layout properties:

- **Alignment** – Horizontal alignment of the child nodes within the container.
- **Container Sizing** – Whether the container should expand to fit the total size of its children or shrink to a minimal size.
- **Spacing** – Custom spacing between child nodes.
- **Custom Minimum Size** – Minimum width and height the container can shrink to.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `alignment` | `int` (`ALIGNMENT_LEFT`, `ALIGNMENT_CENTER`, `ALIGNMENT_RIGHT`) | `ALIGNMENT_LEFT` | Horizontal alignment of the child nodes. |
| `rect_min_size` | `Vector2` | `Vector2(0, 0)` | Custom minimum size of the container. |
| `separation` | `float` | `0.0` | Distance between each child node. |

## Methods

### `set_h_size_flags(flags: int) -> void`
Sets horizontal size flags for all children.

### `get_h_size_flags() -> int`
Returns the current horizontal size flags.

### `set_v_size_flags(flags: int) -> void`
Sets vertical size flags for all children.

### `get_v_size_flags() -> int`
Returns the current vertical size flags.

### `add_child(node: Node, after: Node = null) -> void`
Adds a child node to the container. If `after` is provided, the node is inserted after it; otherwise it is added at the end.

### `remove_child(node: Node) -> void`
Removes a child node from the container.

### `get_child_count() -> int`
Returns the number of child nodes.

### `get_child(index: int) -> Node`
Returns the child node at the specified index.

### `get_children() -> Array`
Returns an array containing all child nodes.

## Signals

No signals are emitted by `HBoxContainer`.

## Usage Example

```gdscript
# Create an HBoxContainer
var hbox = HBoxContainer.new()
hbox.alignment = HBoxContainer.ALIGNMENT_CENTER
hbox.separation = 10

# Add some buttons
var btn1 = Button.new()
btn1.text = "Play"
hbox.add_child(btn1)

var btn2 = Button.new()
btn2.text = "Exit"
hbox.add_child(btn2)

# Add the container to the scene
add_child(hbox)
```

## See Also

- [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)
- [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)
- [Container](https://docs.godotengine.org/en/stable/classes/class_container.html)

---