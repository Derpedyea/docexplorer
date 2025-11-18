**2D Sprite Animation – Godot Engine (stable)**  

> This tutorial shows how to create 2‑D animated characters with the `AnimatedSprite2D` node and the `AnimationPlayer` node. It covers sprite sheets, animation frames, animation control, and best‑practice workflow for 2‑D animation in Godot.

---

## Table of Contents

1. [Introduction](#introduction)  
2. [Preparing a Sprite Sheet](#preparing-a-sprite-sheet)  
3. [Using `AnimatedSprite2D`](#using-animatedsprite2d)  
4. [Using `AnimationPlayer`](#using-animationplayer)  
5. [Advanced Topics](#advanced-topics)  
6. [Resources](#resources)

---

## Introduction

In this tutorial, you'll learn:

- How to import and slice a sprite sheet.  
- How to set up an `AnimatedSprite2D` node for simple frame‑by‑frame animation.  
- How to use an `AnimationPlayer` for more complex animations (e.g., walking, jumping, idle).  
- How to trigger animations from code or signals.  

> **Tip** – Use a clean folder structure: `res://assets/characters/hero/` and `res://scenes/characters/hero.tscn`.

---

## Preparing a Sprite Sheet

1. Create a PNG sprite sheet where each row represents an animation (idle, walk, attack, etc.).  
2. In Godot, import the PNG, then open the **Texture** settings.  
3. Set **Type** to **Atlas** and **Columns**/`Rows` accordingly.  

```text
# Example sprite sheet layout
| Row | Animation | Frames |
|-----|-----------|--------|
| 0   | idle      | 4      |
| 1   | walk      | 6      |
| 2   | attack    | 5      |
```

---

## Using `AnimatedSprite2D`

1. **Add** an `AnimatedSprite2D` node to your character scene.  
2. In the inspector, set **Frames** to a new `SpriteFrames` resource.  
3. Drag the sprite sheet into the **SpriteFrames** editor.  
4. Define animation names (e.g., `idle`, `walk`, `attack`) and assign frames.  
5. Use `_ready()` to play the default animation.

```gdscript
extends Node2D

var sprite : AnimatedSprite2D

func _ready():
    sprite = $AnimatedSprite2D
    sprite.play("idle")
```

---

## Using `AnimationPlayer`

For animations that need more control (e.g., blending, events):

1. Add an `AnimationPlayer` node as a sibling to `AnimatedSprite2D`.  
2. Create an animation in the editor.  
3. Add a **SpriteFrames** keyframe and select the desired frames.  
4. Add other tracks as needed (e.g., `scale`, `position`, `modulate`).  
5. Play from code:

```gdscript
var anim_player : AnimationPlayer

func _ready():
    anim_player = $AnimationPlayer
    anim_player.play("walk")
```

---

## Advanced Topics

- **AnimationTree**: Use a state machine to manage complex animation blends.  
- **Sprite Atlas**: Store multiple character sheets in a single atlas for performance.  
- **Scripted Animation Events**: Use `animation_finished` signal to chain actions.  

```gdscript
func _on_AnimationPlayer_animation_finished(anim_name):
    if anim_name == "attack":
        sprite.play("idle")
```

---

## Resources

| Resource | Link |
|----------|------|
| Godot 4 Manual – `AnimatedSprite2D` | https://docs.godotengine.org/en/stable/classes/class_animatedsprite2d.html |
| AnimationPlayer Reference | https://docs.godotengine.org/en/stable/classes/class_animationplayer.html |
| AnimationTree Reference | https://docs.godotengine.org/en/stable/classes/class_animationtree.html |

---