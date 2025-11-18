**Nodes and scene instances**  
*Godot Engine (stable) documentation*

---

## Getting nodes

You can get a reference to a node by calling the `Node.get_node()` method.  
Use an absolute path (starting with `/`) or a relative path (starting with `.`) to locate the node in the scene tree.

```gdscript
var player = get_node("Player")        # relative to the current node
var root   = get_node("/")            # absolute path to the root
```

> **Tip** – When you need a node that may not be present, use `get_node_or_null()` to avoid runtime errors.

## Creating nodes

Nodes can be created in code with the `Node.new()` method:

```gdscript
var sprite = Sprite2D.new()
```

You can also instantiate a node from a script that extends it:

```gdscript
var my_scene = preload("res://MyScene.tscn")
var instance  = my_scene.instantiate()
```

## Adding them as a child

Once you have a node reference, add it to the scene tree with `add_child()`:

```gdscript
add_child(sprite)          # adds sprite as a child of the current node
```

You can specify the insertion position:

```gdscript
add_child(sprite, true)    # second argument: `true` means it is inserted as a sibling
```

## Instantiating scenes from code

Scene files (`.tscn`) can be turned into live instances by using `PackedScene`:

```gdscript
var enemy_scene = preload("res://Enemy.tscn")
var enemy = enemy_scene.instantiate()
add_child(enemy)
```

If the scene contains a root node that extends `Node`, the returned instance will be of that type, and you can access its properties directly.

```gdscript
enemy.position = Vector2(100, 200)
```

### Example – Spawning multiple enemies

```gdscript
var enemy_scene = preload("res://Enemy.tscn")
for i in range(5):
    var e = enemy_scene.instantiate()
    e.position = Vector2(randf_range(0, 400), randf_range(0, 400))
    add_child(e)
```

## Summary

* **Get nodes** – `get_node()`, `get_node_or_null()`.
* **Create nodes** – `Node.new()`, `PackedScene.instantiate()`.
* **Add to scene** – `add_child()`.
* **Instantiate scenes** – `preload()` → `instantiate()` → `add_child()`.

---

Feel free to explore further in the official Godot documentation.