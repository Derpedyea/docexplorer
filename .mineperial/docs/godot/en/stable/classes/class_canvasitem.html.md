**CanvasItem**  
*Class reference – Godot Engine*  

---

### Inheritance
```
CanvasItem  ←  Node  ←  Object
```

Inherited by  
- `Control`  
- `Node2D`  

---

### Description
`CanvasItem` is the abstract base class for everything that is drawn in 2‑D space.  
It defines common properties and functions that control how a node is rendered, transformed, and how it interacts with the 2‑D rendering pipeline (layers, groups, visibility, etc.).

---

### Signals

| Signal | Description |
|--------|-------------|
| `visibility_changed()` | Emitted when the visibility of the item changes. |
| `draw()` | Emitted when the item is drawn. |

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `z_index` | `int` | `0` | Controls the draw order of items; higher values are drawn on top of lower ones. |
| `modulate` | `Color` | `Color(1,1,1,1)` | Color and alpha modulation for the item. |
| `visible` | `bool` | `true` | Whether the item is visible. |
| `canvas_item` | `CanvasItem` | `null` | (read‑only) The underlying low‑level canvas item. |

---

### Methods

> **`_draw()`**  
> Override to perform custom drawing.  
> `void _draw()`

> **`queue_redraw()`**  
> Requests a redraw of the item.  
> `void queue_redraw()`

> **`set_transform(Transform2D transform)`**  
> Sets the item's 2‑D transform.  
> `void set_transform(Transform2D transform)`

> **`get_transform() -> Transform2D`**  
> Returns the current 2‑D transform.  
> `Transform2D get_transform()`

> **`set_visible(bool visible)`**  
> Sets visibility.  
> `void set_visible(bool visible)`

> **`is_visible() -> bool`**  
> Returns visibility state.  
> `bool is_visible()`

*(Additional methods such as `get_parent`, `get_child_count`, `add_child`, etc., are inherited from `Node`.)*

---

### Usage Example

```gdscript
extends Node2D

func _ready():
    # Set a custom drawing color
    modulate = Color(1, 0, 0, 1)  # Red

func _draw():
    # Draw a simple rectangle
    draw_rect(Rect2(Vector2.ZERO, Vector2(100, 50)), Color(1, 1, 1))
```

---

#### See also
- [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)  
- [Node2D](https://docs.godotengine.org/en/stable/classes/class_node2d.html)  
- [CanvasLayer](https://docs.godotengine.org/en/stable/classes/class_canvaslayer.html)  

---