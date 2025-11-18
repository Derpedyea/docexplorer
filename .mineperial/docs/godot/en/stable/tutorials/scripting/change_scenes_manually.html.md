**Change scenes manually**

> Sometimes it helps to have more control over how you swap scenes around. A *Viewport*’s child nodes will render to the image it generates. This holds true even for nodes outside of the “current” scene – the engine will still keep them alive and just render them as part of the current viewport.  
> The following tutorial explains the low‑level ways to change scenes from code, what the different methods do, and when to use each one.

---

## 1. Why do you need manual scene changes?

In most Godot projects you simply set a *main scene* in the Project Settings and let the editor start it.  
When you want to switch from one level or UI screen to another while the game is running, you usually do this with code:

```gdscript
# Load a new scene and set it as the root
get_tree().change_scene("res://scenes/Game.tscn")
```

The methods below give you finer control over the process – for example to keep some nodes alive across scenes, to preload resources, or to avoid the temporary “scene swap” animation that can be seen when you use the editor’s *Scene → Open Scene* feature.

---

## 2. The three main API methods

| Method | What it does | When to use |
|--------|--------------|-------------|
| `SceneTree.change_scene(path)` | Loads the scene file at *path* and replaces the current root node. The previous root is freed unless you keep a reference to it. | Quick switch to a new scene – simplest case. |
| `SceneTree.change_scene_to_file(path)` | Same as `change_scene()` but the scene file is pre‑loaded and can be reused later. | You know the scene you’ll switch to next and want to avoid a load during the change. |
| `SceneTree.change_scene_to(packed_scene)` | Accepts a `PackedScene` instance (the result of `load()` or `preload()`). Useful for re‑instantiating a scene multiple times. | When you need to keep the original scene instance in memory or want to switch back to it later. |

> **Tip** – All three methods are blocking. The current frame will finish, then the new scene is loaded, and the new root node will be ready in the next frame.

---

## 3. Basic example

```gdscript
# Button.gd
extends Button

@onready var next_scene_path : String = "res://scenes/Level2.tscn"

func _pressed() -> void:
    # Simple scene change
    get_tree().change_scene(next_scene_path)
```

---

## 4. Preloading a scene

If you plan to switch to the same scene multiple times you can avoid repeated disk I/O:

```gdscript
# preload_scene.gd
extends Node

var level2 : PackedScene = preload("res://scenes/Level2.tscn")

func _on_ChangeButton_pressed() -> void:
    get_tree().change_scene_to(level2)
```

---

## 5. Keeping a node alive across scenes

Suppose you have a `GameManager` that should survive level changes.  

1. Make it an *AutoLoad* (singleton) – it will be instantiated once and stay alive.  
2. Or, if you need it as a regular node, re‑parent it to a new root before changing scenes:

```gdscript
var manager : Node = get_node("GameManager")
get_tree().root.add_child(manager)          # Move to the root
manager.owner = null                       # Detach from scene file

get_tree().change_scene("res://scenes/Level2.tscn")
```

---

## 6. Switching to the current scene again

Sometimes you want to reload the current scene (e.g., after a player death):

```gdscript
func restart() -> void:
    get_tree().reload_current_scene()
```

The method preserves any nodes that were marked as *Keep on Load* or were added to the root before the change.

---

## 7. Using `SceneTree` callbacks

`SceneTree` emits a signal whenever a scene change happens:

```gdscript
func _ready() -> void:
    get_tree().connect("scene_changed", self, "_on_scene_changed")

func _on_scene_changed() -> void:
    print("New scene loaded")
```

This is handy if you need to perform cleanup or initialization that isn’t handled by the new scene’s own `_ready()`.

---

## 8. Switching scenes from a signal

You can also trigger scene changes from input or game logic:

```gdscript
# Player.gd
func _on_Health_depleted() -> void:
    # Transition to a “Game Over” scene
    get_tree().change_scene("res://scenes/GameOver.tscn")
```

---

## 9. Common pitfalls

| Issue | Fix |
|-------|-----|
| Scene change is “flickering” | Ensure you’re using `change_scene_to` or `change_scene` with a preloaded scene to avoid a load during the frame. |
| Nodes disappear after change | Make sure you’re not re‑instantiating them inadvertently; use `add_child()` before switching if you need persistence. |
| Errors “File does not exist” | Check the path spelling and that the file is inside `res://`. |

---

## 10. Further reading

- [Scene instancing](https://docs.godotengine.org/en/stable/tutorials/scripting/scene_instancing.html)  
- [SceneTree documentation](https://docs.godotengine.org/en/stable/classes/class_scene_tree.html)

---

*Happy hacking!*