**FlowContainer** – Godot Engine Reference  
================================================

> **Inherits:** `Container<Control<CanvasItem<Node<Object>>>`  
> **Inherited By:** `HFlowContainer`, `VFlowContainer`

---

### Description

A `FlowContainer` arranges its child controls either **horizontally** or **vertically**, automatically wrapping children when the container’s size is exceeded. It is useful for creating UI elements that need to flow in a flexible, responsive layout without manual positioning.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `align` | `int` (enum: `ALIGN_BEGIN`, `ALIGN_CENTER`, `ALIGN_END`, `ALIGN_FILL`) | `ALIGN_BEGIN` | Determines the alignment of the flow items within the container. |
| `fill_viewport` | `bool` | `false` | If `true`, the container expands to fill the viewport size. |
| `h_separation` | `float` | `0.0` | Horizontal spacing between child items. |
| `v_separation` | `float` | `0.0` | Vertical spacing between child items. |
| `flow_direction` | `int` (enum: `FLOW_HORIZONTAL`, `FLOW_VERTICAL`) | `FLOW_HORIZONTAL` | Controls whether the flow is horizontal (default) or vertical. |
| `h_wrap` | `bool` | `false` | If `true`, horizontal wrapping is enabled. |
| `v_wrap` | `bool` | `false` | If `true`, vertical wrapping is enabled. |
| `column_grow` | `bool` | `false` | If `true`, the container will grow columns to fill space. |
| `row_grow` | `bool` | `false` | If `true`, the container will grow rows to fill space. |
| `rect_min_size` | `Vector2` | `Vector2(0, 0)` | Minimum size of the container’s rectangle. |

*Note: The full list of properties may include additional inherited properties from `Container` and `Control`.*

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_item_at_position(position)` | `int` | `Vector2 position` | Returns the index of the child item at the given position. |
| `get_flow_direction()` | `int` | – | Returns current flow direction (`FLOW_HORIZONTAL` / `FLOW_VERTICAL`). |
| `set_flow_direction(direction)` | `void` | `int direction` | Sets the flow direction. |
| `set_h_separation(separation)` | `void` | `float separation` | Sets horizontal separation. |
| `set_v_separation(separation)` | `void` | `float separation` | Sets vertical separation. |
| `set_h_wrap(wrap)` | `void` | `bool wrap` | Enables/disables horizontal wrap. |
| `set_v_wrap(wrap)` | `void` | `bool wrap` | Enables/disables vertical wrap. |
| `set_align(align)` | `void` | `int align` | Sets child alignment. |
| `set_fill_viewport(fill)` | `void` | `bool fill` | Enables/disables viewport filling. |

*The class also inherits numerous layout-related methods such as `set_custom_minimum_size`, `set_alignment`, `get_minimum_size`, etc.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `item_rect_changed(int index)` | Emitted when the rectangle of a child item changes. |
| `item_removed(int index)` | Emitted when a child item is removed. |

---

## Example Usage

```gdscript
var flow = FlowContainer.new()
flow.set_flow_direction(FlowContainer.FLOW_VERTICAL)
flow.set_v_separation(10)
flow.align = FlowContainer.ALIGN_CENTER

# Add child controls
var btn1 = Button.new()
btn1.text = "Button 1"
flow.add_child(btn1)

var btn2 = Button.new()
btn2.text = "Button 2"
flow.add_child(btn2)
```

The above script creates a vertical flow container with a 10‑pixel gap between buttons, center‑aligned.

---

## References

- [Container](../class_container.html) – Base class for container nodes.  
- [Control](../class_control.html) – Base node for all UI elements.  
- [HFlowContainer](../class_hflowcontainer.html) – Horizontal flow container subclass.  
- [VFlowContainer](../class_vflowcontainer.html) – Vertical flow container subclass.

---