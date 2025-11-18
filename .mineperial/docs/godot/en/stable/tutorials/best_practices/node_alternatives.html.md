# When and how to avoid using nodes for everything

Nodes are the building blocks of a Godot project and are very inexpensive to create.  
However, using a node for *everything* can lead to unnecessary complexity, memory
bloat, and performance problems—especially when you have tens of thousands of
nodes in a single scene.  
This page explains when it is better to use other Godot constructs instead of
nodes and gives practical guidelines for choosing the right tool.

> **TL;DR**  
> Use a node only when you need it: spatial/visual representation, physics,
> scene‑tree integration, signals, or lifecycle callbacks. For pure data,
> logic, or utility functions, prefer plain scripts, singleton (autoloads),
> `Resource` subclasses, or static classes.

---

## Table of Contents

1. [Why you might need a non‑node alternative](#why-you-might-need-a-non-node-alternative)
2. [Common alternatives](#common-alternatives)
   - [Script classes](#script-classes)
   - [Singletons / Autoloads](#singletons---autoloads)
   - [`Resource` subclasses](#resource-subclasses)
   - [Static helper classes](#static-helper-classes)
   - [PackedScene vs. node instances](#packedscene-vs-node-instances)
3. [When to use each alternative](#when-to-use-each-alternative)
4. [Practical patterns](#practical-patterns)
   - [Data containers](#data-containers)
   - [Game logic that doesn’t need a scene tree](#game-logic-that-doesn-t-need-a-scene-tree)
   - [Global managers](#global-managers)
   - [Reusable prefabs with dynamic behavior](#reusable-prefabs-with-dynamic-behavior)
5. [Performance considerations](#performance-considerations)
6. [Common pitfalls](#common-pitfalls)
7. [Further reading](#further-reading)

---

## Why you might need a non‑node alternative

| Problem | Node‑based solution | Non‑node alternative |
|---------|---------------------|----------------------|
| **Memory usage** | Every node consumes about 1–3 kB of heap memory (even if empty). | Use lightweight data classes or `Resource`s. |
| **CPU overhead** | `_process` and `_physics_process` callbacks run for every node. | Call a single script or a static function instead. |
| **Scene‑tree complexity** | Deep hierarchies slow down tree traversal and increase
  update costs. | Flatten the hierarchy or keep logic in separate classes. |
| **Re‑usability** | Copy‑pasting the same node structure across many scenes is
  error‑prone. | Instantiate a `PackedScene` or a script that builds the
  required structure on demand. |
| **Logic that doesn’t need a visual component** | Create a `Node2D`/`Node3D` with no
  children. | Create a plain script that extends `Object`. |

---

## Common alternatives

### Script classes

A script can be attached to a `Node`, but it can also be used as a
plain class that does **not** inherit from `Node`.

```gdscript
# file: utils/VectorUtils.gd
class_name VectorUtils
static func distance(a: Vector2, b: Vector2) -> float:
    return a.distance_to(b)
```

Use `class_name` to make the script globally accessible.

### Singletons / Autoloads

An autoload is a node that is instantiated once and kept
available globally. If you only need a *single* instance, you can
create a simple `Node` and mark it as an autoload, or you can use
a plain script singleton (`singleton.gd`).

```gdscript
# file: autoloads/GameState.gd
extends Node

var score: int = 0
var high_score: int = 0

func add_score(points: int) -> void:
    score += points
    if score > high_score:
        high_score = score
```

Add it to **Project → Project Settings → Autoload**.

### `Resource` subclasses

`Resource` objects are lightweight data containers that can be
saved to disk and reused.

```gdscript
# file: resources/EnemyStats.gd
extends Resource
class_name EnemyStats

export var hp: int = 100
export var damage: int = 10
export var speed: float = 5.0
```

```gdscript
var stats = preload("res://resources/EnemyStats.tres")
```

They are ideal for configuration data that does not need a node
hierarchy.

### Static helper classes

For pure utility functions that don’t require state, you can use
static classes.

```gdscript
class_name MathHelper
static func lerp_color(a: Color, b: Color, t: float) -> Color:
    return a.linear_interpolate(b, t)
```

### PackedScene vs. node instances

When you want a reusable prefab but need to keep the node
hierarchy, load it with `PackedScene`.

```gdscript
var EnemyScene = preload("res://scenes/Enemy.tscn")

func spawn_enemy(pos: Vector2) -> Node2D:
    var enemy = EnemyScene.instantiate()
    enemy.position = pos
    add_child(enemy)
    return enemy
```

`PackedScene` is cheaper than creating many identical node
subtrees from scratch.

---

## When to use each alternative

| Situation | Preferred alternative | Rationale |
|-----------|----------------------|-----------|
| **Pure data or configuration** | `Resource` | Small, serialisable, no node overhead |
| **Utility functions** | Static class | No state, easy to call from anywhere |
| **Global state or managers** | Autoload | One instance, accessible from any scene |
| **Reusable UI or game object** | `PackedScene` | Keeps node hierarchy but is loaded lazily |
| **Logic that is not visual** | Plain script class | Keeps code organised without unnecessary nodes |
| **Heavy, complex objects that need scene tree** | Node (or a packed scene) | Requires physics, signals, children |

---

## Practical patterns

### Data containers

```gdscript
# file: resources/PlayerStats.tres
export var health: int = 100
export var attack: int = 25
export var defense: int = 10
```

Use them in scripts:

```gdscript
var player_stats = preload("res://resources/PlayerStats.tres")
print(player_stats.health)
```

### Game logic that doesn’t need a scene tree

```gdscript
class_name AIController
extends Object

func decide_action(enemy_pos: Vector2, player_pos: Vector2) -> String:
    # ...
```

Call it from any node:

```gdscript
var ai = AIController.new()
var action = ai.decide_action(enemy.global_position, player.global_position)
```

### Global managers

```gdscript
# file: autoloads/AudioBus.gd
extends Node

var is_muted: bool = false

func play_sound(name: String) -> void:
    if is_muted: return
    get_node("/root/AudioPlayer").play(name)
```

### Reusable prefabs with dynamic behavior

Store common node hierarchies as scenes. When you need them, load
and instantiate them.

```gdscript
var ExplosionScene = preload("res://scenes/Explosion.tscn")
func explode_at(position: Vector2) -> void:
    var explosion = ExplosionScene.instantiate()
    explosion.global_position = position
    add_child(explosion)
```

---

## Performance considerations

1. **Node count** – Each node adds overhead for processing,
   physics, and rendering. Keep the active node count low.
2. **Memory layout** – A `Resource` is more cache friendly than a
   node tree when it contains only data.
3. **Processing loops** – Use `_process`/`_physics_process` sparingly.
   For many objects, batch operations in a single script or singleton.
4. **Scene packing** – Use `PackedScene` to defer creation of nodes
   until they are needed.
5. **Autoloads** – Global singletons are cheap to access but avoid
   over‑loading them with complex logic.

---

## Common pitfalls

* **Mixing node and non‑node data** – Be consistent; a node should not
  hide a `Resource` that could be better placed elsewhere.
* **Unnecessary signals** – Signals are great but add overhead; only
  use them when you really need decoupling.
* **Circular dependencies** – When using singletons, avoid tight coupling
  that makes unit testing hard.
* **Premature optimisation** – Profile first. Use Godot’s profiler to
  find real bottlenecks before refactoring.

---

## Further reading

* [Scene organization](../scene_organization.html)
* [Scenarios: Scenes vs. scripts](../scenes_versus_scripts.html)
* [Data preferences](../data_preferences.html)
* [Logic preferences](../logic_preferences.html)

---

### See also

* [Autoloads versus internal nodes](../autoloads_versus_internal_nodes.html)  
* [Godot interfaces](../godot_interfaces.html)  
* [Godot notifications](../godot_notifications.html)

---