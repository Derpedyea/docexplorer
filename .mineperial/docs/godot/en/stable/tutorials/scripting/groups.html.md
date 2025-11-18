**Groups** – Godot Engine Documentation
========================================

Groups in Godot act like tags in other engines.  
A node can belong to any number of groups, and you can query or
invoke methods on all nodes that share a particular group from code.

---

## 1. Adding a node to a group

```gdscript
# GDScript
func _ready() -> void:
    # Add the node to one or more groups
    add_to_group("player")
    add_to_group("interactive")
```

You can also add a node to a group from the editor:

1. Select the node in the Scene tree.  
2. In the **Node** tab → **Groups** field, type a group name and press **Add**.  

> **Tip** – Group names are case‑sensitive.

---

## 2. Checking group membership

```gdscript
if is_in_group("enemy"):
    print("This node is an enemy")
```

Use `is_in_group()` to test whether a particular node is part of a
given group.

---

## 3. Getting a list of nodes in a group

```gdscript
var players = get_tree().get_nodes_in_group("player")
for player in players:
    player.take_damage(10)
```

`SceneTree.get_nodes_in_group()` returns an array of every node that
has been added to the specified group.

---

## 4. Calling a method on all nodes in a group

```gdscript
# Call a method on every node in the group
get_tree().call_group("enemy", "take_damage", 5)

# If you need to pass a dictionary of arguments
var args = {"damage": 5}
get_tree().call_group_dict("enemy", "take_damage", args)
```

You can also filter calls with flags (`GROUP_CALL_DEFERRED` or
`GROUP_CALL_REPLACE`).

---

## 5. Removing a node from a group

```gdscript
remove_from_group("interactive")
```

When a node is freed or its tree is changed, it automatically
removes itself from all groups.

---

## 6. Common use‑cases

| Use‑case | Typical code |
|----------|--------------|
| **Broadcasting** events | `get_tree().call_group("players", "update_score")` |
| **Collecting enemies** | `for e in get_tree().get_nodes_in_group("enemy"): e.move_to_player()` |
| **Tagging UI elements** | `add_to_group("hud")` and later `get_nodes_in_group("hud")` |

---

## 7. Example script

```gdscript
extends Node

func _ready() -> void:
    # Group this node
    add_to_group("spawners")

    # Spawn a monster after 2 seconds
    yield(get_tree().create_timer(2), "timeout")
    spawn_monster()

func spawn_monster() -> void:
    var monster_scene = preload("res://Monster.tscn")
    var monster = monster_scene.instance()
    get_parent().add_child(monster)
    monster.add_to_group("enemies")

func _on_player_hit() -> void:
    # Damage all enemies at once
    get_tree().call_group("enemies", "take_damage", 20)
```

---

## 8. Reference

| Function | Description |
|----------|-------------|
| `Node.add_to_group(name)` | Add the node to a group. |
| `Node.remove_from_group(name)` | Remove the node from a group. |
| `Node.is_in_group(name)` | Return `true` if the node is part of a group. |
| `SceneTree.get_nodes_in_group(name)` | Return an array of all nodes in a group. |
| `SceneTree.call_group(group, method, ...args)` | Call `method` on every node in `group`. |
| `SceneTree.call_group_dict(group, method, args)` | Same as above, but with a dictionary of arguments. |

---

**Further Reading**

- [SceneTree API Reference](https://docs.godotengine.org/en/stable/classes/class_scenetree.html) – see the `get_nodes_in_group`, `call_group`, etc. methods.
- [Node API Reference](https://docs.godotengine.org/en/stable/classes/class_node.html) – see `add_to_group`, `remove_from_group`, `is_in_group`.

---