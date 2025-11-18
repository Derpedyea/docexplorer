**__CanvasModulate__**

---

## Overview

`CanvasModulate` is a `Node2D` that applies a color tint to all nodes in its canvas.  
It is typically used to create global visual effects such as day/night cycles,
post‑processing color shifts, or to dim a UI layer.

- **Inheritance hierarchy**  
  `CanvasModulate` → `Node2D` → `CanvasItem` → `Node` → `Object`

---

## Properties

| Property | Type   | Default | Description |
|----------|--------|---------|-------------|
| `modulate` | `Color` | `Color(1, 1, 1, 1)` | The color tint applied to the entire canvas. Modifying this will affect every child node of the canvas. |

> **Tip**:  
> - Setting a non‑white color will multiply the RGB values of child nodes.  
> - The alpha channel controls the opacity of the tint.

---

## Methods

| Method | Description |
|--------|-------------|
| `set_modulate(Color)` | Sets the `modulate` property. |
| `get_modulate() -> Color` | Returns the current `modulate` color. |

> **Note**: `CanvasModulate` inherits all lifecycle methods from `Node2D` and `CanvasItem`. No additional methods are required for basic usage.

---

## Usage Example

```gdscript
# Add a red, semi‑transparent tint to the entire canvas
var canvas_mod = CanvasModulate.new()
canvas_mod.modulate = Color(1, 0, 0, 0.5)  # R, G, B, A
add_child(canvas_mod)
```

This will darken all subsequent drawing calls with a 50 % red overlay.

---

## Related Nodes

- [`CanvasLayer`](../classes/class_canvaslayer.html) – Places UI elements on a separate layer.
- [`ColorRect`](../classes/class_colorrct.html) – For a single colored rectangle.

---

## Further Reading

- [Node2D](../classes/class_node2d.html) – Base class for 2D nodes.  
- [CanvasItem](../classes/class_canvasitem.html) – Base class for all drawing nodes.  

---