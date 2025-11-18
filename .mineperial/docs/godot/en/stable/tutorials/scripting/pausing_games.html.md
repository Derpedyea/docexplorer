# Pausing games and process mode

> *Godot Engine – Stable Documentation – Tutorial / Scripting*

---

## Introduction

In most games you need to temporarily halt the game to show a menu, pause for a cut‑scene, or simply stop gameplay while the user takes a break. Godot gives fine‑grained control over which parts of the scene tree should pause and which should keep running. This page explains how to:

* pause the main loop globally (`get_tree().paused`);
* configure individual nodes with different *pause modes*;
* use process mode settings (`PAUSE_MODE_*`).

---

## 1. Pausing the main loop

The most common way to pause the entire game is to set the `paused` property of the current scene tree:

```gdscript
# Pause the entire game
get_tree().paused = true

# Unpause
get_tree().paused = false
```

When `paused` is `true`, **all** nodes that use the default pause mode (`PAUSE_MODE_INHERIT`) will stop processing. That includes `_process()`, `_physics_process()`, and `_input()` callbacks.

> **Tip**  
> You can toggle the pause state with a keyboard shortcut or a button in a UI.

---

## 2. Node pause modes

Each node has a `pause_mode` property that controls its behaviour when the tree is paused. The three modes are:

| Mode | Meaning | Example |
|------|---------|---------|
| `PAUSE_MODE_STOP` | The node stops processing, physics, and input. | UI elements that should stay static. |
| `PAUSE_MODE_PROCESS` | The node continues to process, physics, and input even while paused. | A music player or background animation that should keep playing. |
| `PAUSE_MODE_INHERIT` | The node inherits the pause behaviour of its parent. | The default for most game logic. |

### Changing pause mode in code

```gdscript
# Set the pause mode for a node
$MusicPlayer.pause_mode = Node.PAUSE_MODE_PROCESS
```

### Changing pause mode in the editor

Select a node → Inspector → **Node** → **Pause Mode** → choose the desired option.

---

## 3. Process mode settings

Godot offers three *process* methods:

* `_process(delta)` – called every frame.
* `_physics_process(delta)` – called on a fixed physics step.
* `_input(event)` – called on every input event.

When a node’s `pause_mode` is `PAUSE_MODE_PROCESS`, it will still receive these callbacks even if the tree is paused.

---

## 4. Practical example

### Pausing a simple scene

```gdscript
# Player.gd
extends KinematicBody2D

func _physics_process(delta):
    # Normal movement code
    pass

func _on_PauseButton_pressed():
    get_tree().paused = true
```

### Keeping background music alive

```gdscript
# MusicPlayer.gd
extends AudioStreamPlayer

func _ready():
    pause_mode = Node.PAUSE_MODE_PROCESS
```

---

## 5. Pausing only a sub‑tree

If you want to pause everything under a particular node but keep some child nodes running:

```gdscript
# Main.gd
extends Node

func _ready():
    $GameArea.pause_mode = Node.PAUSE_MODE_STOP
    $GameArea/BackgroundMusic.pause_mode = Node.PAUSE_MODE_PROCESS
```

---

## 6. Resuming with input

You might want to unpause only when the user presses a key:

```gdscript
func _input(event):
    if event.is_action_pressed("ui_accept") and get_tree().paused:
        get_tree().paused = false
```

---

## 7. Summary

* `get_tree().paused` toggles the whole game.
* `Node.pause_mode` lets you fine‑tune which nodes still run.
* `PAUSE_MODE_PROCESS` is ideal for UI animations, sound, or background tasks that must not be stopped.
* Combine pause modes with the built‑in input system for smooth pause/unpause interactions.

---