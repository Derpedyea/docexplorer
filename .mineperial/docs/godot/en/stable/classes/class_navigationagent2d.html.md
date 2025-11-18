**Note:** The following Markdown is a concise, cleaned‑up version of the official Godot 4.0 class reference for `NavigationAgent2D`. It contains the main sections that a developer would expect in the documentation: inheritance, description, signals, properties, methods, and a short example.  
Feel free to expand it with additional details or tweak the wording to fit your specific needs.

---

# NavigationAgent2D

*Experimental – may be changed or removed in future releases.*

**Inherits:** `Node2D`

A 2‑D agent used to path‑find to a destination while avoiding obstacles.  
It can be attached to a `NavigationRegion2D` or a `NavigationServer2D` map and will automatically generate a navigation path that respects the navigation graph and avoids other agents when `avoidance_enabled` is set to `true`.

> **Tip** – For most use‑cases you’ll combine a `NavigationAgent2D` with a `KinematicBody2D` (or similar) that uses the agent’s `next_path_position` to move towards the goal.

---

## Signals

| Signal | Description |
|--------|-------------|
| `velocity_changed(Vector2 velocity)` | Emitted whenever the agent’s velocity changes. Useful for synchronizing animations or other visual feedback. |
| `navigation_finished()` | Emitted when the agent reaches its target position (i.e. the path is finished). |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `target_position` | `Vector2` | `Vector2.ZERO` | The destination point the agent should move toward. |
| `target_velocity` | `Vector2` | `Vector2.ZERO` | Desired velocity that will be used for path smoothing (when `avoidance_enabled`). |
| `max_speed` | `float` | `400.0` | Maximum speed the agent can travel. |
| `radius` | `float` | `16.0` | Radius used for collision and avoidance calculations. |
| `height` | `float` | `32.0` | Height of the agent for 3‑D navigation support (unused in 2‑D but kept for consistency). |
| `avoidance_enabled` | `bool` | `true` | Enables dynamic obstacle avoidance with other agents. |
| `pathfinding_mode` | `NavigationAgent2D.PathFindingMode` | `NavigationAgent2D.PathFindingMode.DEFAULT` | Mode that decides how the path is computed (e.g. `DEFAULT`, `CUSTOM`). |
| `navigation_map` | `NavigationMap2D` | `null` | The map that the agent should use for path calculation. |
| `path_queue` | `Array<Vector2>` | `[]` | Internal path queue returned by the server. |

---

## Methods

> All methods are available in GDScript, C# and any GDExtension language.

| Method | Signature | Description |
|--------|------------|-------------|
| `set_target_position(position : Vector2) -> void` | Sets the destination point for the agent. |
| `get_target_position() -> Vector2` | Returns the current target point. |
| `set_target_velocity(velocity : Vector2) -> void` | Sets a desired velocity for smoothing. |
| `get_target_velocity() -> Vector2` | Returns the target velocity. |
| `get_current_velocity() -> Vector2` | Returns the current velocity computed by the agent. |
| `get_next_path_position() -> Vector2` | Returns the next point on the path that the agent should move towards. |
| `is_navigation_finished() -> bool` | Returns `true` when the agent has reached its target. |
| `get_path() -> PoolVector2Array` | Returns the full path (as an array of `Vector2`s). |
| `get_path_length() -> int` | Returns the number of points in the path. |
| `get_path_index() -> int` | Current index in the path array. |
| `set_path_offset(offset : int) -> void` | Skips the first `offset` nodes in the path. |
| `get_path_offset() -> int` | Current offset value. |
| `get_path_position() -> Vector2` | The current position on the path (the node’s global position). |
| `set_path(path : PoolVector2Array) -> void` | Manually set a custom path. |
| `clear_path() -> void` | Clears the current path and stops the agent. |

> **Note:** Some methods, such as `set_navigation_map()` and `get_navigation_map()`, are inherited from `NavigationAgent` and are available through the editor or GDScript.

---

## Example

```gdscript
extends KinematicBody2D

@onready var agent : NavigationAgent2D = $NavigationAgent2D

func _ready() -> void:
    # Set a destination
    agent.set_target_position(Vector2(200, 300))
    # Optional: customize agent
    agent.radius = 12
    agent.max_speed = 200

func _physics_process(delta: float) -> void:
    if agent.is_navigation_finished():
        return

    var velocity = agent.get_next_path_position() - global_position
    velocity = velocity.normalized() * agent.max_speed
    move_and_slide(velocity)
```

---

## References

* [NavigationServer2D](https://docs.godotengine.org/en/stable/classes/class_navigationserver2d.html) – Server that handles 2‑D navigation maps.  
* [NavigationRegion2D](https://docs.godotengine.org/en/stable/classes/class_navigationregion2d.html) – Node that defines a navigation map area.  

---