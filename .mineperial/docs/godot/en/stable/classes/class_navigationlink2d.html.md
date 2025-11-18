# NavigationLink2D

Experimental: This class may be changed or removed in future versions.  

Inherits: **Node2D** <sup>(CanvasItem &lt; Node &lt; Object)**  

---  

## Overview

`NavigationLink2D` is a node that represents a link between two positions on `NavigationRegion2D`s that agents can traverse.  
It allows you to create one‑way or two‑way connections between navigation regions, effectively acting as a door, bridge, or teleport in 2D navigation.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | Enables or disables the link. |
| `source_id` | `int` | `-1` | ID of the source navigation region. |
| `source_position` | `Vector2` | `Vector2(0, 0)` | Position on the source region. |
| `target_id` | `int` | `-1` | ID of the target navigation region. |
| `target_position` | `Vector2` | `Vector2(0, 0)` | Position on the target region. |
| `bidirectional` | `bool` | `true` | If `true`, the link can be traversed in both directions. |
| `travel_speed` | `float` | `1.0` | Multiplier for the agent’s speed when traversing this link. |
| `cost_multiplier` | `float` | `1.0` | Multiplier for the cost used by navigation agents when using this link. |

*All properties are exported and can be set directly from the Inspector.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `link_changed()` | Emitted when any link property is modified. |

---

## Methods

> All methods are inherited from `Node2D` or `CanvasItem`. No additional public methods are defined for this class beyond the exported properties.

---

## Usage Example (GDScript)

```gdscript
# Create a NavigationLink2D node
var link = NavigationLink2D.new()
link.source_position = Vector2(100, 200)
link.target_position = Vector2(400, 200)
link.bidirectional = false
add_child(link)

# Enable the link only when a key is pressed
func _input(event):
    if event.is_action_pressed("ui_accept"):
        link.enabled = not link.enabled
```

---

## Notes

- This class is marked experimental; its API may change or be removed in future Godot releases.
- `NavigationLink2D` works only inside scenes that contain at least one `NavigationRegion2D`.  
- When using a `NavigationLink2D`, make sure the linked positions are within the bounds of the corresponding navigation regions.

---