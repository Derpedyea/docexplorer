**Overridable Functions (Godot Engine Documentation)**  

---

### Overview

Godot’s `Node` class exposes a set of **virtual (overridable)** functions that are called automatically by the engine in response to various events, such as entering the scene tree, each frame update, or when receiving input. These functions let you customize node behavior without needing to write your own loops or event handlers.

> **Tip:** Use these functions instead of manually polling for state or adding custom timers—Godot handles calling them for you.

---

## Common Overridable Functions

| Function | When it’s called | Typical use case |
|----------|------------------|------------------|
| `func _ready()` | After the node and all its children enter the scene tree and all nodes are ready. | Initialize state, get references to other nodes, start animations. |
| `func _enter_tree()` | Immediately when the node is added to the scene tree. | Connect signals, perform early setup. |
| `func _exit_tree()` | Just before the node is removed from the tree. | Clean‑up, disconnect signals. |
| `func _process(delta)` | Runs every frame (if `_process` is enabled). | Per‑frame logic that doesn’t require physics precision. |
| `func _physics_process(delta)` | Runs every physics frame (if `_physics_process` is enabled). | Physics-related movement, collision checks. |
| `func _input(event)` | Called for each input event (keyboard, mouse, touch, etc.). | Custom input handling. |
| `func _notification(int what)` | General notifications like `NOTIFICATION_ENTER_TREE`, `NOTIFICATION_EXIT_TREE`, etc. | Low‑level event handling or handling notifications that aren’t covered by the specific methods. |
| `func _ready()` | After the node is ready (see above). | Often the main entry point for a node’s script. |

### Enabling and Disabling Process Functions

In the editor or in code you can enable/disable processing:

```gdscript
# In the editor: 
#   Check "Process" or "Physics Process" in the Node tab

func _ready():
    set_process(true)          # Enables _process
    set_physics_process(true)  # Enables _physics_process
```

When you disable a process function, it will no longer be called by the engine.

---

## Customizing Node Lifecycle

### `_enter_tree()` vs `_ready()`

- **`_enter_tree()`** runs immediately when the node is added to the scene tree, before children’s `_ready()` methods.
- **`_ready()`** runs after the node and all its children are ready.

Use `_enter_tree()` for setup that must happen before children, and `_ready()` for initialization that depends on children being ready.

### `_exit_tree()`

Use this method to clean up resources, disconnect signals, or free memory when a node is removed.

---

## Handling Input

```gdscript
func _input(event):
    if event is InputEventMouseButton and event.button_index == BUTTON_LEFT:
        print("Left mouse button pressed")
```

You can also use `_unhandled_input(event)` or `_unhandled_key_input(event)` for input that should bypass the node’s own handling.

---

## Notifications

The `_notification()` method receives a numeric notification ID. Common IDs:

| ID | Description |
|----|--------------|
| `NOTIFICATION_ENTER_TREE` | Equivalent to `_enter_tree()` |
| `NOTIFICATION_READY` | Equivalent to `_ready()` |
| `NOTIFICATION_EXIT_TREE` | Equivalent to `_exit_tree()` |
| `NOTIFICATION_PAUSED` | The game is paused |
| `NOTIFICATION_UNPAUSED` | The game is unpaused |

Example:

```gdscript
func _notification(what):
    if what == NOTIFICATION_PAUSED:
        pause_game()
```

---

## Example: A Simple Moving Node

```gdscript
extends Node2D

var speed = 100

func _ready():
    set_process(true)

func _process(delta):
    var motion = Vector2.ZERO
    if Input.is_action_pressed("ui_right"):
        motion.x += 1
    if Input.is_action_pressed("ui_left"):
        motion.x -= 1
    if Input.is_action_pressed("ui_down"):
        motion.y += 1
    if Input.is_action_pressed("ui_up"):
        motion.y -= 1

    position += motion.normalized() * speed * delta
```

---

### Summary

- **Overridable functions** give you hooks into the engine’s lifecycle and event system.
- Use **`_ready()`** for most initialization.
- Use **`_process()`** for frame‑based logic, and **`_physics_process()`** for physics‑based logic.
- **`_input()`** handles raw input; use **`_unhandled_input()`** for fallback input.
- **`_notification()`** allows catching lower‑level events.

For a deeper dive into each function and its nuances, refer to the official Godot documentation on [Node Class](https://docs.godotengine.org/en/stable/classes/class_node.html#overridable-functions).