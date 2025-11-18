**Cutout Animation**  
*Godot Engine Documentation – Stable (Tutorial)*  

---

## What is it?

Cut‑out animation is a form of stop‑motion where pieces of paper (or any thin material) are cut into shapes and arranged to create a 2‑D representation that moves frame by frame.  
In Godot you can replicate this effect by using a set of `Sprite2D` nodes (or `AnimatedSprite2D`) and an `AnimationPlayer` that swaps the visible frame on each step of the animation.

---

## Quick start

1. **Create the sprite sheet**  
   – Cut each character or object into individual PNGs.  
   – Place them in a single texture atlas or import each one separately.

2. **Set up the scene**  
   ```text
   Node2D (CutoutRoot)
   ├── Sprite2D (body)
   ├── Sprite2D (arms)
   └── Sprite2D (legs)
   ```
   The root node is a `Node2D`. Each body part is a child `Sprite2D`.  
   Assign the appropriate texture to each sprite and position them relative to the root.

3. **Create the animation**  
   – Add an `AnimationPlayer` to `CutoutRoot`.  
   – Add a new animation called `walk`.  
   – For each frame in the animation, set a keyframe for the `offset` (or `scale`, `rotation`) of each child `Sprite2D` to produce the desired motion.

4. **Play the animation**  
   ```gdscript
   # CutoutRoot.gd
   @onready var anim_player = $AnimationPlayer
   
   func _ready() -> void:
       anim_player.play("walk")
   ```

---

## Detailed steps

### 1. Preparing the assets

* **Texture atlases** are handy: pack all body‑part frames into a single image and use `AtlasTexture` to reference each part.  
* **Naming conventions** help with automation. For example: `body_walk_0`, `body_walk_1`, …, `arms_walk_0`, `arms_walk_1`, …

### 2. Building the node tree

```text
CutoutRoot
├─ Sprite2D(body)
├─ Sprite2D(arms)
└─ Sprite2D(legs)
```

* Each `Sprite2D` can be positioned with its own pivot so that rotations and scales look natural.  
* Use `z_index` to control draw order if parts overlap.

### 3. Adding the `AnimationPlayer`

1. Click **Add Child Node** → **AnimationPlayer**.  
2. In the **Animation** panel, hit **New** → **Animation** → name it `walk`.  
3. For each frame:
   * Select the target sprite (e.g., `body`).  
   * In the **Inspector**, add a keyframe for **offset** or **transform**.  
   * Press **Add Key** or hit **Space** to create a key.  
   * Advance the timeline and modify the sprite for the next frame.

4. Set the **Animation** length (e.g., 0.2 s per frame).  
5. In the **AnimationPlayer** inspector, enable **Loop** for continuous animation.

### 4. Controlling the animation

```gdscript
# CutoutRoot.gd
extends Node2D

@onready var anim_player: AnimationPlayer = $AnimationPlayer

func _ready() -> void:
    anim_player.play("walk")

func _on_Input_action():
    # Example: change animation based on direction
    if Input.is_action_pressed("ui_right"):
        anim_player.play("run_right")
    elif Input.is_action_pressed("ui_left"):
        anim_player.play("run_left")
```

### 5. Advanced tips

* **Blend** between animations with `AnimationTree` for smoother transitions.  
* Use **Script** to automatically swap textures if you have a large number of frames:  
  ```gdscript
  func set_frame(sprite: Sprite2D, frame_id: int) -> void:
      sprite.texture = preload("res://body_%d.png" % frame_id)
  ```
* For more complex rigs, consider using a `Skeleton2D` and `AnimationPlayer` to drive bone transforms.

---

## Example

Below is a minimal project structure showing a cutout character walking forward:

```
res://
├── character.tscn
├── body_walk_0.png
├── body_walk_1.png
├── body_walk_2.png
├── arms_walk_0.png
├── arms_walk_1.png
├── arms_walk_2.png
├── legs_walk_0.png
├── legs_walk_1.png
├── legs_walk_2.png
└── CutoutRoot.gd
```

`character.tscn` contains the node tree described above and the `AnimationPlayer` with the `walk` animation.

---

## Further reading

* [AnimationPlayer documentation](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html)  
* [Sprite2D documentation](https://docs.godotengine.org/en/stable/classes/class_sprite2d.html)  
* [AnimationTree documentation](https://docs.godotengine.org/en/stable/classes/class_animationtree.html)

---

> **Note**  
> This tutorial assumes you’re familiar with basic Godot concepts such as scenes, nodes, and the editor UI. If not, check out the *Getting Started* sections for an introduction.