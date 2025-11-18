**NavigationObstacle3D** – Godot Engine 4.x  
*Experimental: This class may be changed or removed in future versions.*

> Inherits: `Node3D`

The `NavigationObstacle3D` node is used to affect navigation mesh baking or to constrain the velocities of avoidance agents in 3‑D space.  
It is typically placed as a child of an object that moves in the world (e.g. a player or a moving obstacle) to inform the navigation system that it should avoid this object.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `avoidance_enabled` | `bool` | `true` | Enables or disables the avoidance component. |
| `radius` | `float` | `1.0` | Radius of the obstacle used for avoidance calculations. |
| `height` | `float` | `2.0` | Height of the obstacle. |
| `offset` | `Vector3` | `Vector3(0,0,0)` | Local offset of the obstacle from the node’s origin. |
| `navigation_layers` | `int` | `0` | Bitmask of navigation layers that this obstacle belongs to. |
| `navigation_mask` | `int` | `0` | Bitmask that filters which navigation layers this obstacle interacts with. |
| `avoidance_layers` | `int` | `0` | Bitmask of avoidance layers that this obstacle belongs to. |
| `avoidance_mask` | `int` | `0` | Bitmask that filters which avoidance layers this obstacle interacts with. |
| `avoidance_priority` | `float` | `1.0` | Priority value for the avoidance system (higher values are avoided more aggressively). |
| `radius_override` | `bool` | `false` | When `true`, the obstacle’s radius will override the automatic calculation from its shape. |
| `height_override` | `bool` | `false` | When `true`, the obstacle’s height will override the automatic calculation from its shape. |

> **Tip** – The `navigation_*` properties mirror those on `NavigationRegion3D`. Use them to control which navigation layers the obstacle participates in, and which layers other agents should react to.

---

## Signals

No signals are defined for this class.

---

## Methods

`NavigationObstacle3D` inherits all methods from `Node3D`, `Node`, and `Object`.  
The class does not expose additional public methods beyond those generated automatically by the property setters/getters.

---

## Example

```gdscript
# Assuming this script is attached to a moving character
@onready var obstacle: NavigationObstacle3D = $NavigationObstacle3D

func _ready() -> void:
    # Disable avoidance while the player is invisible
    obstacle.avoidance_enabled = false

func _process(delta: float) -> void:
    # Dynamically adjust the obstacle radius based on the character’s state
    if is_sprinting:
        obstacle.radius = 2.0
        obstacle.radius_override = true
```

---

## References

- [NavigationRegion3D](../class_navigationregion3d.html)
- [NavigationAgent3D](../class_navigationagent3d.html)
- [NavigationServer](../class_navigationserver.html)

---