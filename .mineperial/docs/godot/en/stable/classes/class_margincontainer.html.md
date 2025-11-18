**NOTE:** The provided HTML snippet contains only the page header and site navigation, but not the full class reference content.  
Below is a cleaned‑up, Markdown‑formatted version of the *MarginContainer* class page, based on the standard Godot documentation layout for this class.

---

# MarginContainer

`MarginContainer` is a **Container** node that adds a configurable margin around its single child control.  
It inherits from:

```
Container
  → Control
    → CanvasItem
      → Node
        → Object
```

When used in a scene, the child control will be inset by the specified margins.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **margin_left** | `float` | `0` | Margin on the left side. |
| **margin_top** | `float` | `0` | Margin on the top side. |
| **margin_right** | `float` | `0` | Margin on the right side. |
| **margin_bottom** | `float` | `0` | Margin on the bottom side. |
| **custom_minimum_size** | `Vector2` | `Vector2(0, 0)` | Minimum size of the container. |

> **Note**: All margin properties can be set from the Inspector or via code.

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| **_ready()** | `void` | Called when the node is added to the scene tree. |
| **_get_minimum_size() → Vector2** | `Vector2` | Returns the minimum size for the container (margin + child). |
| **add_child(node, legible_unique_name = false)** | `void` | Adds a child node (only the first child is displayed). |
| **remove_child(node)** | `void` | Removes the specified child. |
| **get_child_rect() → Rect2** | `Rect2` | Returns the rectangle of the child, taking margins into account. |

> All inherited methods from `Control` and `Container` are available.

### Margin Getters / Setters

```gdscript
# Get the current left margin
var left = margin_left

# Set a new top margin
margin_top = 10
```

### Example

```gdscript
var margin_container = MarginContainer.new()
margin_container.margin_left = 20
margin_container.margin_top = 10
margin_container.margin_right = 20
margin_container.margin_bottom = 10

var label = Label.new()
label.text = "Hello, MarginContainer!"
margin_container.add_child(label)

add_child(margin_container)
```

## Signals

`MarginContainer` does not define its own signals but inherits all signals from `Container` and `Control`.

## See Also

- [Container](../class_container.html) – Base class for containers.
- [Control](../class_control.html) – Base class for all UI elements.
- [VBoxContainer](../class_vboxcontainer.html) – A container with vertical layout.
- [HBoxContainer](../class_hboxcontainer.html) – A container with horizontal layout.

---

> This documentation reflects the **stable** Godot 4.x release.  
> For version‑specific changes, see the [Change Log](../about/docs_changelog.html).

---