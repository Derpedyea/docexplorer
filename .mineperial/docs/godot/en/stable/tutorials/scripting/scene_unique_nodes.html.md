**Scene Unique Nodes** – Godot Engine Documentation (stable)

---

### Overview

When you reference nodes in a scene from a script using `get_node()` the path you provide can become fragile.  
If you move a UI control or change its parent, the node path changes, and all the scripts that refer to it break.  
Godot provides a more resilient way to reference nodes that should remain unique within a scene – **unique node paths**.

---

## 1.  Problem with normal paths

```gdscript
# Suppose you have:
# Main.tscn
# └─ CanvasLayer
#    └─ Control
#       └─ Button

onready var my_button = $CanvasLayer/Control/Button
```

If you later move `Button` into another `Control` node, the above path is no longer valid and the script will crash.

---

## 2.  Unique node names

A node can be made *unique* by adding a `%` prefix to its name in the editor or by calling `set_name()` at runtime.

```
# In the editor, rename the node to "%ScoreLabel"
# Or in GDScript:
score_label.set_name("%ScoreLabel")
```

The `%` prefix is a marker that the node will be accessed by its *name* only, regardless of its position in the hierarchy.

---

## 3.  Accessing unique nodes

Use the special `get_node()` syntax that looks for a node with that exact unique name:

```gdscript
var score_label = get_node("%ScoreLabel")   # returns a Node
```

Because the name is unique in the scene tree, the path is stable even if you move the node.

When using a script attached to a node that contains the unique node, the `onready` keyword makes the code concise:

```gdscript
onready var score_label = $"%ScoreLabel"
```

The `$"%ScoreLabel"` shortcut is a convenience for `get_node("%ScoreLabel")` and it is evaluated at runtime when the node enters the scene tree.

---

## 4.  Common use‑cases

| Scenario | Traditional path | Unique node name | GDScript access |
|----------|------------------|------------------|-----------------|
| Button in a UI panel | `$Panel/Button` | `%StartButton` | `$"%StartButton"` |
| Score label in a HUD | `$HUD/ScoreLabel` | `%ScoreLabel` | `$"%ScoreLabel"` |
| Player node in a 3D scene | `$Player` | `%Player` | `$"%Player"` |

Using unique names is especially handy for:

* **UI elements** that often get rearranged in the editor.
* **Singleton‑like** nodes that you want to reference from anywhere (e.g., `ScoreManager`).
* **Nodes that exist only once** in a scene (e.g., `Camera`, `Light`).

---

## 5.  Practical example

```gdscript
# Main.tscn
# ├─ CanvasLayer
# │   └─ %StartButton
# └─ %GameCamera

extends Node

func _ready():
    # Grab the unique nodes once
    var start_btn = $"%StartButton"
    var camera   = $"%GameCamera"

    # Connect the button signal
    start_btn.connect("pressed", self, "_on_start_pressed")

func _on_start_pressed():
    print("Game started!")
```

Because `%StartButton` and `%GameCamera` are unique, moving them around in the scene tree doesn't affect the script.

---

## 6.  Caveats

* **Uniqueness**: A unique name must be unique *within the entire scene tree*. If two nodes share the same `%Name`, `get_node("%Name")` will return the first match it finds, which can be unpredictable.
* **Performance**: `get_node()` is still a runtime lookup. If you need very fast access, consider using `onready` variables or `export(NodePath)` references.
* **Editor support**: The `%` prefix is a convention recognized by the editor when searching for nodes. It is not enforced by the engine, so always double‑check that the names are unique.

---

## 7.  Summary

* **Fragility of paths**: Regular node paths break when the scene hierarchy changes.
* **Unique node names**: Prefix a node’s name with `%` to make it globally accessible by name.
* **Convenient syntax**: Use `$"%NodeName"` or `get_node("%NodeName")` for a stable reference.
* **Best practices**: Reserve unique names for nodes that are logically a single instance in a scene (buttons, labels, cameras, etc.) and keep them unique.

For more on node paths and `onready` variables, see the [Node Paths](../../tutorials/scripting/node_paths.html) guide.