**Note:** The following markdown is a concise, readable summary of the `CenterContainer` class page from the Godot Engine documentation. It captures the key structure of the page – inheritance, description, signals, properties, and methods – while keeping the formatting clean and easy to read.

---

# CenterContainer

> *A container that keeps all of its child controls in the center of its own area.*

## Inheritance

```
CenterContainer
└─ Container
   └─ Control
      └─ CanvasItem
         └─ Node
            └─ Object
```

## Description

`CenterContainer` automatically centers its child controls within its own bounding box. This is useful for UI layouts where an element (e.g., a button or label) should stay centered regardless of the parent’s size.

> **Example** – Centering a `Label`:
> ```gdscript
> var center = CenterContainer.new()
> var label = Label.new()
> label.text = "Hello, World!"
> center.add_child(label)
> add_child(center)
> ```

---

## Signals

| Signal | Description |
|--------|-------------|
| *None* | `CenterContainer` does not emit custom signals. |

---

## Properties

The following properties are inherited from `Control` and are commonly used with `CenterContainer`:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `custom_minimum_size` | `Vector2` | `Vector2(0, 0)` | Minimum size for the container. |
| `anchor_mode` | `int` | `ANCHOR_MODE_BEGIN` | Determines how the node anchors to its parent. |
| `margin_*` | `float` | `0.0` | Margins around the container. |
| `rect_min_size` | `Vector2` | `Vector2(0, 0)` | Minimum size for the control’s rectangle. |
| `rect_pivot_offset` | `Vector2` | `Vector2(0, 0)` | Pivot point offset. |
| `rect_scale` | `Vector2` | `Vector2(1, 1)` | Scale applied to the control. |

> *All other `Control` properties (e.g., `theme`, `visible`, etc.) also apply to `CenterContainer`.*

---

## Methods

Below are the most relevant methods. For a complete list, refer to the full class reference.

| Method | Description | Example |
|--------|-------------|---------|
| `add_child(node, legible_unique_name=false)` | Adds a child node. | `center.add_child(my_button)` |
| `move_child(node, position)` | Moves a child to a given index. | `center.move_child(my_button, 0)` |
| `remove_child(node)` | Removes a child node. | `center.remove_child(my_button)` |
| `set_custom_minimum_size(size)` | Sets the minimum size for the container. | `center.custom_minimum_size = Vector2(200, 100)` |
| `get_child_count()` | Returns the number of children. | `print(center.get_child_count())` |
| `_ready()` | Called when the node enters the scene tree. | `func _ready(): print("Centered!")` |

> **Note**: `CenterContainer` inherits all methods from `Control`, `CanvasItem`, and `Node`.

---

## Usage Tips

- **Single Child**: While you can add multiple children, `CenterContainer` is most effective with a single child. If you need multiple items centered, consider using `CenterContainer` as the root of a nested layout (e.g., `CenterContainer` → `HBoxContainer`).
- **Size Constraints**: To prevent the container from shrinking too small, set `custom_minimum_size` or use a `SizeBox`/`Control` with fixed size.
- **Responsive Design**: Combine `CenterContainer` with anchors or `SizeFlags` on the child to create adaptive UIs that maintain centering across various screen resolutions.

---

## Quick Reference

```gdscript
# Create a centered button
var center = CenterContainer.new()
var button = Button.new()
button.text = "Press Me"
center.add_child(button)
add_child(center)
```

---

### Related Nodes

- [HBoxContainer](https://docs.godotengine.org/en/stable/classes/class_hboxcontainer.html)
- [VBoxContainer](https://docs.godotengine.org/en/stable/classes/class_vboxcontainer.html)
- [GridContainer](https://docs.godotengine.org/en/stable/classes/class_gridcontainer.html)

---

*For deeper details, consult the full [Class Reference](https://docs.godotengine.org/en/stable/classes/class_centercontainer.html).*