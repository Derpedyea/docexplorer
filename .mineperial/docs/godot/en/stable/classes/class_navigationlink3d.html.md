# NavigationLink3D

*Experimental – this class may be changed or removed in future Godot releases.*

**Inheritance:** `Node3D < Node < Object`

A *NavigationLink3D* represents a one‑way or two‑way link between two positions inside a `NavigationRegion3D`. Agents that can navigate on the region will automatically consider this link when computing a path, effectively allowing them to “jump” between disjoint areas of a navigation mesh.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `disabled` | `bool` | `false` | When `true`, the link is ignored by navigation agents. |
| `use_link_to_point` | `bool` | `false` | If `true`, the link acts as a point‑to‑point connector; otherwise it connects to a specified target node. |
| `target_position` | `Vector3` | `Vector3(0, 0, 0)` | Destination of the link when `use_link_to_point` is `true`. |
| `use_custom_rid` | `bool` | `false` | When `true`, the link will use a custom `RID` for the target region instead of a node path. |
| `custom_rid` | `RID` | `RID()` | The custom `RID` of the target navigation region when `use_custom_rid` is `true`. |
| `bidirectional` | `bool` | `true` | If `true`, agents can traverse the link in both directions. |

> **Note** – The exact set of properties may vary between Godot versions; refer to the current API reference for the most up‑to‑date list.

---

## Methods

| Method | Parameters | Return type | Description |
|--------|------------|-------------|-------------|
| `get_start() -> Vector3` |  | `Vector3` | Returns the world‑space position of the link’s start point. |
| `get_end() -> Vector3` |  | `Vector3` | Returns the world‑space position of the link’s end point. |
| `set_start(pos: Vector3)` | `pos` – Start position | `void` | Sets the world‑space start position of the link. |
| `set_end(pos: Vector3)` | `pos` – End position | `void` | Sets the world‑space end position of the link. |
| `update_link()` |  | `void` | Forces the navigation system to rebuild the link. Useful after changing positions or enabling/disabling the link. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `link_updated()` |  | Emitted whenever the link’s properties change and the navigation system has been updated. |

---

## Usage Example

```gdscript
extends NavigationLink3D

func _ready():
    # Place the link at two different positions
    set_start(Vector3(0, 0, 0))
    set_end(Vector3(10, 0, 0))
    # Ensure the link is active
    disabled = false
```

Agents that use `NavigationAgent3D` will automatically see this link and can move from the start position to the end (or vice‑versa if `bidirectional` is `true`).

---

### Important Notes

* **Experimental** – The API and behaviour may change in future releases.
* The link only affects agents that have the region added to their navigation query.  
* For a link to work across multiple navigation regions, at least one of the linked regions must contain the target position.  

For detailed API documentation, including property change notifications and additional helper methods, see the official Godot Engine documentation or the Godot editor’s integrated class reference.