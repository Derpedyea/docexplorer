**Using SceneTree**

*Godot Engine (stable) documentation*  

---

### Introduction  

In previous tutorials you learned that everything in Godot is built around **nodes**.  
A *scene* is simply a collection of nodes that become active when they are added to the **scene tree**.  
The scene tree is the central data structure that manages the lifetime, visibility and signals of all nodes in a running project.  

This page explains how the `SceneTree` works, how to access it from your scripts, and the most important methods and properties you will use when manipulating scenes at runtime.

---

## The main loop and the SceneTree  

The `SceneTree` is part of Godot’s `MainLoop`.  
When a project is launched, the engine creates a root `Node` called the *root* or *main* node, and attaches it to the scene tree.  
All other nodes are added as children of this root or of other nodes, forming a hierarchical tree.

```
Root (SceneTree)
└─ Node A
   ├─ Node B
   └─ Node C
```

When a node is added to the tree it receives a series of lifecycle callbacks:

* `_enter_tree()` – called when the node is added to the tree (but before it is ready).
* `_ready()` – called when the node and all its children have entered the tree and are initialized.
* `_process(delta)` / `_physics_process(delta)` – called every frame / physics step.
* `_exit_tree()` – called when the node is removed from the tree.

---

## Getting the SceneTree from a script  

You can access the current `SceneTree` instance in GDScript via:

```gdscript
var tree = get_tree()
```

This returns an object of type `SceneTree`.  
You can then use it to:

* Get the current active scene: `tree.current_scene`
* Change the main scene: `tree.change_scene_to_file("res://MyScene.tscn")`
* Load a scene as a `PackedScene`: `var scene = preload("res://MyScene.tscn")`

---

## SceneTree methods

| Method | Description |
|--------|-------------|
| `root` | Returns the root node of the tree. |
| `get_current_scene()` | Returns the node that was last set as the main scene. |
| `change_scene(path)` | Loads a scene from the given file and makes it the active one. |
| `change_scene_to(scene)` | Instantiates a `PackedScene` object and makes it the active one. |
| `get_nodes_in_group(group_name)` | Returns all nodes that belong to a specified group. |
| `is_debugging()` | Returns `true` if the editor is running in debug mode. |
| `get_network_peer()` | Returns the `NetworkedMultiplayerPeer` if the game is running in multiplayer. |

---

## SceneTree notifications

Nodes can receive notifications from the `SceneTree` using `NOTIFICATION_*` constants.  
Common notifications:

* `NOTIFICATION_ENTER_TREE` – node has entered the scene tree.
* `NOTIFICATION_EXIT_TREE` – node will leave the tree.
* `NOTIFICATION_PAUSED` – the game is paused.
* `NOTIFICATION_UNPAUSED` – the game is resumed.

You can override `_notification(what)` to handle them.

---

## Practical examples

### Instancing a scene

```gdscript
# Assume `enemy_scene.tscn` is a PackedScene
var enemy_scene = preload("res://enemy.tscn")
var enemy = enemy_scene.instantiate()
add_child(enemy)
```

### Switching scenes

```gdscript
func _on_Button_pressed():
    get_tree().change_scene("res://Game.tscn")
```

### Accessing nodes via the tree

```gdscript
var player = get_tree().get_root().get_node("Main/Player")
```

---

## Summary

* The **SceneTree** is Godot’s internal hierarchy that keeps track of all nodes.
* Lifecycle callbacks (`_enter_tree`, `_ready`, etc.) are fired by the tree.
* You can manipulate the tree from scripts to load, instance, and remove scenes.
* The `SceneTree` API gives you powerful tools for scene management, node retrieval, and multiplayer support.

For further reading, see the *SceneTree* reference section in the Godot class documentation.