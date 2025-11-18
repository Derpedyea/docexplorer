# VFlowContainer

A container that arranges its child controls **vertically** and automatically wraps them around when they reach the container’s borders.

> **Inheritance**  
> `VFlowContainer` ➜ `FlowContainer<Container<Control<CanvasItem<Node<Object>>>>`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `alignment` | `int` | `ALIGNMENT_LEFT` | Aligns child controls horizontally within the container (left, center, right). |
| `flow_alignment` | `int` | `FLOW_ALIGN_CENTER` | Aligns the flow of children vertically inside the container (top, center, bottom). |
| `flow_spacing` | `int` | `0` | Spacing (in pixels) between child controls in the flow. |
| `clip_children` | `bool` | `false` | Whether children are clipped to the container’s bounds. |
| `grow_horizontal` | `int` | `SIZE_EXPAND_FILL` | Size‑flags controlling horizontal expansion of children. |
| `grow_vertical` | `int` | `SIZE_EXPAND_FILL` | Size‑flags controlling vertical expansion of children. |

> **Note** – The size‑flag properties are inherited from `Container` and can be used to control how child controls grow or shrink.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `_ready()` | `void` | Called when the node enters the scene tree. |
| `add_child(node)` | `void` | Adds a child node to the container (inherited from `Container`). |
| `remove_child(node)` | `void` | Removes a child node from the container. |
| `get_alignment() -> int` | Returns the current horizontal alignment setting. |
| `set_alignment(alignment: int)` | Sets the horizontal alignment. |
| `get_flow_alignment() -> int` | Returns the current vertical flow alignment. |
| `set_flow_alignment(align: int)` | Sets the vertical flow alignment. |
| `get_flow_spacing() -> int` | Returns the current spacing between children. |
| `set_flow_spacing(spacing: int)` | Sets the spacing between children. |
| `clear()` | `void` | Removes all children from the container. |
| `rearrange()` | `void` | Re‑arranges the children according to the current settings. |

> **Tip** – Most of the layout logic is handled automatically; you typically only need to change properties or call `rearrange()` after modifying children.

---

## Signals

*No signals are emitted by `VFlowContainer`.*

---

## Enums

```text
enum Alignment {
    ALIGNMENT_LEFT,
    ALIGNMENT_CENTER,
    ALIGNMENT_RIGHT,
}

enum FlowAlignment {
    FLOW_ALIGN_TOP,
    FLOW_ALIGN_CENTER,
    FLOW_ALIGN_BOTTOM,
}
```

---

## Example Usage

```gdscript
var container = VFlowContainer.new()
container.size = Vector2(400, 300)
container.flow_spacing = 10
container.alignment = VFlowContainer.ALIGNMENT_CENTER
container.flow_alignment = VFlowContainer.FLOW_ALIGN_TOP

for i in range(5):
    var btn = Button.new()
    btn.text = "Button %d" % i
    container.add_child(btn)

add_child(container)
```

In this example a vertical flow container is created, given a size, and five buttons are added. The container will automatically wrap the buttons vertically when they reach the bottom of the container. Adjust `flow_spacing`, `alignment`, and `flow_alignment` to tweak the layout.