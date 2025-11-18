**FoldableContainer – Godot Engine Class Reference**

---

## Overview

`FoldableContainer` is a UI container that can be expanded or collapsed.  
It inherits from:

```
Container
  └─ Control
    └─ CanvasItem
      └─ Node
        └─ Object
```

> **Description**  
> A container that can be expanded/collapsed, with a title that can be filled... (see Godot docs for full details).

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `expanded` | `bool` | `true` | Whether the container is currently expanded. |
| `title` | `String` | `""` | The text displayed in the container’s title bar. |
| `min_height` | `int` | `0` | Minimum height of the container when collapsed. |
| `fold_icon` | `Texture2D` | `null` | Icon shown on the fold/unfold button. |

> *Note: Additional properties may exist; refer to the official Godot 4.0 reference for the complete list.*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `folded` | `()` | Emitted when the container is folded (collapsed). |
| `unfolded` | `()` | Emitted when the container is unfolded (expanded). |

---

## Methods

| Method | Arguments | Return Type | Description |
|--------|-----------|-------------|-------------|
| `fold()` | `()` | `void` | Collapses the container. |
| `unfold()` | `()` | `void` | Expands the container. |
| `set_expanded(expanded: bool)` | `expanded: bool` | `void` | Sets the expanded/collapsed state. |
| `is_expanded()` | `()` | `bool` | Returns the current state. |
| `_notification(what: int)` | `what: int` | `void` | Handles internal notifications (e.g., `NOTIFICATION_ENTER_TREE`). |

> *For a complete API reference, see the Godot documentation page for `FoldableContainer`.*

---

## Example Usage (GDScript)

```gdscript
# Create a FoldableContainer instance
var foldable = FoldableContainer.new()
foldable.title = "Settings"

# Add child controls
var button = Button.new()
button.text = "Click Me"
foldable.add_child(button)

# Add to a parent container
add_child(foldable)

# Toggle state programmatically
foldable.set_expanded(false)   # Collapse
```

---

## Navigation

* **Previous:** [`FogVolume`](https://docs.godotengine.org/en/stable/classes/class_fogvolume.html)  
* **Next:** [`Generic6DOFJoint3D`](https://docs.godotengine.org/en/stable/classes/class_generic6dofjoint3d.html)

---

*For more detailed information, including all inherited members, properties, and signals, visit the official [Godot Engine documentation](https://docs.godotengine.org/en/stable/classes/class_foldablecontainer.html).*