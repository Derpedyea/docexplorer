__HSplitContainer – Godot Engine 4 Class Reference__
======================================================

> A container that splits two child controls **horizontally** and provides a grabber for adjusting the split ratio.

**Inherits**  
`SplitContainer<Container<Control<CanvasItem<Node<Object>>>>`

--------------------------------------------------------------------

## Overview

`HSplitContainer` is part of Godot’s GUI system. It allows you to layout two child controls side‑by‑side, with a draggable separator (the *grabber*) that lets the user resize the panels at runtime.

Typical use cases include:

- Split panes in editors or custom UIs  
- Resizable sidebars  
- Responsive UI layouts

--------------------------------------------------------------------

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `split_offset` | `int` | `0` | Pixel offset of the split from the left side. 0 means the divider is at the left edge. |
| `split_ratio` | `float` | `0.5` | Proportion of the container’s width taken by the first child. Range `[0.0, 1.0]`. |
| `grabber_visibility` | `bool` | `true` | Whether the grabber is visible and draggable. |
| `grabber_size` | `int` | `8` | Height (in pixels) of the grabber. |

--------------------------------------------------------------------

## Methods

| Method | Signature | Returns | Description |
|--------|-----------|---------|-------------|
| `get_split_offset()` | `func get_split_offset() -> int` | `int` | Current pixel offset of the divider. |
| `set_split_offset(offset)` | `func set_split_offset(offset: int) -> void` | – | Sets the divider position in pixels. |
| `get_split_ratio()` | `func get_split_ratio() -> float` | `float` | Current split ratio (0–1). |
| `set_split_ratio(ratio)` | `func set_split_ratio(ratio: float) -> void` | – | Sets the split ratio. |
| `get_grabber_visibility()` | `func get_grabber_visibility() -> bool` | `bool` | Returns whether the grabber is visible. |
| `set_grabber_visibility(visible)` | `func set_grabber_visibility(visible: bool) -> void` | – | Show or hide the grabber. |
| `get_grabber_size()` | `func get_grabber_size() -> int` | `int` | Current grabber height. |
| `set_grabber_size(size)` | `func set_grabber_size(size: int) -> void` | – | Sets the grabber height. |

> **Note:** All other methods inherited from `Container`, `Control`, `CanvasItem`, and `Node` are available as usual (e.g., `add_child`, `remove_child`, `set_anchor`, etc.).

--------------------------------------------------------------------

## Signals

`HSplitContainer` does not emit its own signals beyond those inherited from its super‑classes.

--------------------------------------------------------------------

## Example: GDScript

```gdscript
# Create a split container
var split = HSplitContainer.new()
add_child(split)

# Two child panels
var left_panel = PanelContainer.new()
var right_panel = PanelContainer.new()

split.add_child(left_panel)
split.add_child(right_panel)

# Configure split ratio
split.set_split_ratio(0.3)  # 30% width for left panel

# Hide the grabber
split.set_grabber_visibility(false)

# Adjust grabber size
split.set_grabber_size(12)
```

--------------------------------------------------------------------

## Example: Visual Script

1. Create an `HSplitContainer` node.  
2. Add two child nodes (e.g., `PanelContainer` or `TextureRect`).  
3. Use the **Set Split Ratio** node to change the layout at runtime.

--------------------------------------------------------------------

## Related Classes

- **VSplitContainer** – Vertical splitter (splits controls top‑to‑bottom).  
- **SplitContainer** – Base class for both horizontal and vertical splitters.  
- **Control** – Base for all UI nodes.  
- **Container** – Base for layout containers.

--------------------------------------------------------------------

## Further Reading

- [Godot Docs – GUI System](https://docs.godotengine.org/en/stable/tutorials/ui/gui_system.html)  
- [Godot Docs – Containers](https://docs.godotengine.org/en/stable/classes/class_container.html)  
- [Godot Docs – Control Nodes](https://docs.godotengine.org/en/stable/classes/class_control.html)

--------------------------------------------------------------------

### Quick Reference

| Feature | GDScript | C# |
|---------|----------|----|
| Create | `var hs = HSplitContainer.new()` | `var hs = new HSplitContainer();` |
| Add children | `hs.add_child(child)` | `hs.AddChild(child);` |
| Set ratio | `hs.set_split_ratio(0.4)` | `hs.SplitRatio = 0.4f;` |
| Grabber visibility | `hs.grabber_visibility = false` | `hs.GrabberVisibility = false;` |

--------------------------------------------------------------------

That’s all you need to get started with a horizontal split layout in Godot 4. Happy UI building!