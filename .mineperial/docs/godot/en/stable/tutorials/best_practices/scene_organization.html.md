**Scene organization**  
*Godot Engine documentation – Best practices*

> This article covers topics related to the effective organization of scene content.  
> * Which nodes should you use?  
> * Where should you place them?  
> * How should they interact?  
> * How to build relationships efficiently and keep your project maintainable?

---

## How to build relationships effectively

In Godot the scene tree is the main way objects know each other.  
When designing interactions make sure you keep the following principles in mind:

| Principle | What it means | Example |
|-----------|---------------|---------|
| **Decouple with signals** | Nodes communicate via `signal`s rather than direct references. | A `Button` emits `pressed`, a `Score` node listens to it. |
| **Use `get_node()` sparingly** | Retrieve references only when needed, preferably during `_ready()`. | `var enemy = get_node("../Enemy")` inside the player script. |
| **Prefer composition over inheritance** | Compose behavior by adding child nodes rather than subclassing. | A `Player` node containing an `AnimatedSprite2D` and `CollisionShape2D`. |
| **Keep tree depth shallow** | A deep hierarchy is harder to navigate. | Group logical parts under a single `UI` node. |
| **Avoid circular references** | Don’t let nodes depend on each other in a loop. | Instead, let a manager node mediate communication. |

### Using signals

```gdscript
# Enemy.gd
signal defeated

func _on_Hurtbox_body_entered(body):
    if body.is_in_group("player"):
        emit_signal("defeated")
```

```gdscript
# Player.gd
func _ready():
    $Enemy.connect("defeated", self, "_on_enemy_defeated")

func _on_enemy_defeated():
    score += 1
```

---

## Choosing a node tree structure

A clean node tree reduces complexity and improves performance.  
Here are guidelines for common node types and their placement:

| Node type | Typical use | Suggested parent |
|-----------|-------------|------------------|
| `Spatial` / `Node2D` | Root of a scene | `World`, `SceneRoot` |
| `Camera` | Viewpoint | Child of the root or a dedicated `CameraContainer` |
| `Light` | Lighting | Child of the root or a `Lights` group |
| `CollisionShape` | Physical boundaries | Inside a `PhysicsBody` |
| `AnimationPlayer` | Animation control | As a child of the node that owns the animated object |
| `Script` | Logic | Attached to any node that needs it |

### Examples

```text
World
 ├─ Player (KinematicBody2D)
 │   ├─ Sprite
 │   ├─ CollisionShape2D
 │   └─ AnimationPlayer
 ├─ Enemies (Node2D)
 │   ├─ Enemy1
 │   └─ Enemy2
 └─ UI (CanvasLayer)
     ├─ ScoreLabel
     └─ StartButton
```

*Keep related nodes grouped together and use a clear naming convention.*  

---

## Next steps

- **When to use scenes versus scripts** – see [scenes_versus_scripts.md](/tutorials/best_practices/scenes_versus_scripts.html)
- **Autoloads versus regular nodes** – see [autoloads_versus_internal_nodes.md](/tutorials/best_practices/autoloads_versus_internal_nodes.html)
- **Project organization** – see [project_organization.md](/tutorials/best_practices/project_organization.html)

---

### References

- Godot documentation: [Scene organization](https://docs.godotengine.org/en/stable/tutorials/best_practices/scene_organization.html)  
- Godot API reference: [Node](https://docs.godotengine.org/en/stable/classes/class_node.html)  
- Godot API reference: [Signal](https://docs.godotengine.org/en/stable/classes/class_signal.html)

> For a deeper dive into scene organization best practices, explore the full documentation on the official site.