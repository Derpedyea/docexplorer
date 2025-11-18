# Using NavigationAgents

**NavigationAgents** are helper nodes that combine pathfinding, path following and agent avoidance for a `Node2D`/`Node3D`‑derived parent node. They provide a simple API for making a character move from a start position to a target while automatically avoiding other moving agents in the same navigation mesh.

> *The following guide is written for Godot 4.x, but the concepts apply to Godot 3.x with the corresponding classes (`NavigationAgent2D` / `NavigationAgent3D`).*

---

## 1.  Overview

| Feature | NavigationAgent2D | NavigationAgent3D |
|---------|-------------------|------------------|
| Node type | `NavigationAgent2D` | `NavigationAgent3D` |
| Uses | 2‑D navigation meshes (`NavigationMesh2D`) | 3‑D navigation meshes (`NavigationMesh` / `NavigationRegion3D`) |
| Automatic avoidance | Yes | Yes |
| Path query | `NavigationServer2D` / `NavigationServer3D` | Same |

A `NavigationAgent` attaches to a moving node (e.g. a `CharacterBody2D` or `CharacterBody3D`) and exposes a small set of properties that let you control the target position, speed, radius, and avoidance behaviour.

---

## 2.  Setting up a NavigationAgent

Below is a minimal example of a 2‑D character using a `NavigationAgent2D`. The same logic works for 3‑D with `NavigationAgent3D`.

```gdscript
# Player.gd
extends CharacterBody2D

# The NavigationAgent2D node must be a child of the character.
@onready var agent: NavigationAgent2D = $NavigationAgent2D

var target: Vector2 = Vector2.ZERO

func _ready() -> void:
    # Optional: configure the agent.
    agent.radius = 16.0          # Collision radius
    agent.max_speed = 200.0      # Speed in pixels per second
    agent.stopping_distance = 4.0

func _physics_process(delta: float) -> void:
    # 1. Tell the agent where we want to go.
    agent.set_target_position(target)

    # 2. Get the next point on the path.
    if agent.is_target_reached():
        velocity = Vector2.ZERO
    else:
        var next_point: Vector2 = agent.get_next_location()
        var direction = (next_point - global_position).normalized()
        velocity = direction * agent.max_speed

    # 3. Apply the velocity.
    move_and_slide()
```

### 2.1.  Setting the target

```gdscript
agent.set_target_position(Vector2(500, 300))
```

The agent will query the navigation mesh automatically each physics step and recompute a path if the target has moved.

### 2.2.  Getting the next point

`agent.get_next_location()` returns the next point in the computed path that the agent should head toward. This can be used to drive the character’s movement logic.

### 2.3.  Checking for arrival

```gdscript
if agent.is_target_reached():
    # Do something when the agent arrives
```

---

## 3.  Using NavigationAgent3D

The 3‑D variant works almost identically:

```gdscript
# Player3D.gd
extends CharacterBody3D

@onready var agent: NavigationAgent3D = $NavigationAgent3D

var target: Vector3 = Vector3.ZERO

func _ready() -> void:
    agent.radius = 0.5
    agent.max_speed = 4.0
    agent.stopping_distance = 0.1

func _physics_process(delta: float) -> void:
    agent.set_target_position(target)
    if agent.is_target_reached():
        velocity = Vector3.ZERO
    else:
        var next_point: Vector3 = agent.get_next_location()
        var direction = (next_point - global_transform.origin).normalized()
        velocity = direction * agent.max_speed

    move_and_slide()
```

---

## 4.  Agent Avoidance

When multiple agents are on the same navigation region, the built‑in avoidance system keeps them from colliding. Key properties:

| Property | 2‑D | 3‑D |
|----------|-----|-----|
| `avoidance_enabled` | `bool` | `bool` |
| `avoidance_layers` | `int` (bitmask) | `int` |
| `avoidance_mask` | `int` | `int` |
| `avoidance_priority` | `float` | `float` |

```gdscript
agent.avoidance_enabled = true
agent.avoidance_layers = 1 << 1          # For example, layer 1
agent.avoidance_mask   = 1 << 1 | 1 << 2  # Avoid layers 1 and 2
```

> **Tip:** Keep the agent radius small relative to the navigation mesh tiles for smoother movement.

---

## 5.  Advanced Usage

### 5.1. Custom Path Query

If you need more control over the query parameters, you can create a `NavigationPathQueryParameters2D` or `NavigationPathQueryParameters3D` and feed it to the `NavigationServer`.

```gdscript
var params = NavigationPathQueryParameters2D.new()
params.origin = global_position
params.destination = target
params.agent_radius = agent.radius
params.max_results = 32

var path = NavigationServer2D.get_simple_path(params.origin, params.destination, params.agent_radius)
```

You can then feed this path back into the `agent` using `agent.set_path(path)`.

### 5.2. Pausing and Resuming

Agents can be paused, useful for cutscenes or when the player is stunned.

```gdscript
agent.set_paused(true)   # Stops the agent from updating
agent.set_paused(false)  # Resumes
```

### 5.3. Handling Dynamic Obstacles

If you add or remove `NavigationObstacle` nodes while the agent is moving, the navigation server will automatically recompute the path on the next physics frame.

---

## 6.  Example Project

Create a simple scene:

```
Player (CharacterBody2D)
 ├─ Sprite2D
 └─ NavigationAgent2D
```

*Add a `NavigationRegion2D` to the scene and bake a navigation mesh with the editor's navigation tools.*  

**Script logic** (see §2.1).  

**Result:** The player will navigate towards the mouse position and avoid any other `NavigationAgent` nodes present.

---

## 7.  Common Pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| Agent never moves | `target_position` is the same as current position | Call `set_target_position()` with a different point |
| Agent gets stuck on corners | Path resolution is too coarse | Increase `NavigationServer` `cell_size` or adjust `agent.radius` |
| Agents pass through each other | `avoidance_enabled` is `false` | Enable avoidance or set a larger `agent_radius` |

---

## 8.  References

- [NavigationServer](https://docs.godotengine.org/en/stable/classes/class_navigationserver2d.html)
- [NavigationAgent2D](https://docs.godotengine.org/en/stable/classes/class_navigationagent2d.html)
- [NavigationAgent3D](https://docs.godotengine.org/en/stable/classes/class_navigationagent3d.html)
- [NavigationObstacle](https://docs.godotengine.org/en/stable/classes/class_navigationobstacle2d.html)
- [NavigationRegion2D](https://docs.godotengine.org/en/stable/classes/class_navigationregion2d.html)

> **Happy coding!** Use `NavigationAgent` nodes to give your characters intelligent path‑finding without writing low‑level navigation logic.