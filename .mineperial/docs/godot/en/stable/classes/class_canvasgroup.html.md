**CanvasGroup**  
*Class reference – Godot Engine 4.x*  

---

## Inheritance

```
CanvasGroup
├─ Node2D
│  ├─ CanvasItem
│  │  ├─ Node
│  │  │  └─ Object
```

---

## Description  

`CanvasGroup` merges several 2D nodes into a single draw operation.  
All child `CanvasItem` nodes of a `CanvasGroup` are rendered as one
object, which can improve rendering performance for groups of static
or rarely‑changed 2‑D elements.  

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed()` | Emitted when the group’s visibility or modulate changes. |
| `visibility_changed()` | Emitted when the visibility of the group changes. |

*(More signals may be added in future versions.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `visible` | `bool` | `true` | Whether the group and its children are visible. |
| `modulate` | `Color` | `Color(1, 1, 1, 1)` | Modulation color applied to all children. |
| `draw_priority` | `int` | `0` | Priority of the group in the drawing order. |
| `group_mode` | `bool` | `false` | If `true`, the group forces its children to be drawn together as a single object. |

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `is_visible()` | `bool` | – | Returns the current visibility state of the group. |
| `set_visible(bool)` | – | `visible` | Sets the visibility of the group. |
| `get_modulate()` | `Color` | – | Returns the current modulation color. |
| `set_modulate(Color)` | – | `color` | Sets the modulation color applied to all children. |
| `get_draw_priority()` | `int` | – | Retrieves the current drawing priority. |
| `set_draw_priority(int)` | – | `priority` | Sets the drawing priority. |
| `update()` | – | – | Marks the group as dirty so it will be redrawn on the next frame. |

*(Additional helper methods are available in the full API reference.)*

---

## Example Usage

```gdscript
# Create a canvas group and add two sprites to it
var group = CanvasGroup.new()
add_child(group)

var sprite1 = Sprite2D.new()
sprite1.texture = preload("res://icon.png")
group.add_child(sprite1)

var sprite2 = Sprite2D.new()
sprite2.texture = preload("res://icon.png")
sprite2.position = Vector2(64, 0)
group.add_child(sprite2)

# Apply a modulation to the whole group
group.modulate = Color(1, 0, 0, 0.5)   # Red tint, 50% opacity

# Adjust draw priority so it renders below other elements
group.draw_priority = -10
```

---

## Related Classes

- [Node2D](../classes/class_node2d.html)  
- [CanvasItem](../classes/class_canvasitem.html)  
- [Sprite2D](../classes/class_sprite2d.html)  

---

> **Note**: The `CanvasGroup` node is a *visual* helper and does **not**
> influence physics or input handling of its child nodes. It only
> optimizes the rendering pipeline by reducing draw calls.

---