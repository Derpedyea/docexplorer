# Introduction to the animation features  

The **AnimationPlayer** node is Godot’s core tool for creating and playing animations.  
It can animate almost any property of any node in the scene, mix multiple
animations together, and can be driven by code or the animation editor.

> *This guide covers the basics of the animation panel, how to animate
> properties and methods, and the most common animation track types.*

---

## 1.  The AnimationPlayer node

Add an **AnimationPlayer** to any node that will own an animation.

```
var anim_player : AnimationPlayer = $AnimationPlayer
```

`AnimationPlayer` exposes a small API:

| Method | Description |
|--------|-------------|
| `play(name : String)` | Starts an animation by name. |
| `stop()` | Stops the currently playing animation. |
| `queue(name : String)` | Queues an animation to play after the current one. |
| `has_animation(name : String)` | Checks if an animation exists. |
| `get_animation(name : String)` | Returns the `Animation` resource. |

---

## 2.  The Animation panel

When a node with an `AnimationPlayer` is selected, the bottom‑panel shows
the **Animation** editor:

1. **Timeline** – a scrollable timeline where keyframes appear.  
2. **Track list** – shows all tracks for the current animation.  
3. **Inspector** – lets you edit track properties (e.g. interpolation).

Use the toolbar to:

* **Create a new animation** – click “+ New Animation” and name it.  
* **Add a track** – click the “+” button → choose track type.  
* **Delete an animation** – right‑click the animation name → `Delete`.  

---

## 3.  Adding animation tracks

There are several track types:

| Track type | What it animates |
|------------|------------------|
| **Property** | Any node property (position, rotation, scale, material, etc.). |
| **Method** | Calls a method on a node. |
| **Call** | Calls a function that does not return a value. |
| **Animation** | A nested animation (for hierarchical animations). |
| **Audio** | Audio streams, volume, pitch, etc. |

### 3.1 Property tracks

1. Press the “+” → *Add a property track*.  
2. Select the node and property in the popup.  
3. Insert keyframes by clicking the key button on the timeline.  

Example – animating `Sprite2D` scale:

```
# In the editor
# 0s : (1, 1)
# 1s : (2, 2)  ← keyframe
```

### 3.2 Method / Call tracks

Use these to trigger custom logic, e.g., playing a sound or spawning an effect.

```gdscript
# Create a method track that calls `explode()` at 2.5s
```

---

## 4.  Editing keyframes

* **Insert keyframe** – click the key icon in the timeline.  
* **Move keyframe** – drag horizontally.  
* **Delete keyframe** – right‑click → `Delete key`.  
* **Interpolation** – right‑click a key → choose `Linear`, `Bezier`, or `Constant`.  

You can also use **animation easing curves** to create smooth motions.

---

## 5.  Animation playback

The `AnimationPlayer` node has a few built‑in signals useful for scripting:

| Signal | When it is emitted |
|--------|--------------------|
| `animation_finished(name)` | When an animation finishes. |
| `animation_started(name)` | When an animation starts. |
| `animation_looped(name)` | When a looping animation restarts. |

```gdscript
func _ready():
    anim_player.animation_finished.connect(_on_anim_finished)

func _on_anim_finished(name):
    if name == "walk":
        anim_player.play("idle")
```

---

## 6.  Using the AnimationTree

For more advanced blending, use an **AnimationTree** node together
with an `AnimationNodeBlendTree` or other blend nodes.

```gdscript
var tree : AnimationTree = $AnimationTree
tree.active = true
```

The tree can blend animations based on parameters (e.g., speed).

---

## 7.  Common use‑cases

### 7.1.  Simple “walk” animation

1. Create `walk` animation.  
2. Add a property track to `Sprite2D` for `scale`.  
3. Set keyframes for a bobbing effect.  
4. Call `play("walk")` in script.

### 7.2.  Animating a UI element

```gdscript
# Fade a button in and out
var anim_player = $AnimationPlayer
anim_player.play("fade")
```

Add a *property track* for `Button.modulate.a` (alpha).

---

## 8.  Tips & best practices

* Keep animations short and focused.  
* Reuse animation assets across multiple nodes by using **AnimationTree**.  
* For complex character rigs, consider using a skeletal animation system
  (`AnimationPlayer` + `Skeleton3D`).  
* Use the `AnimationPlayer`’s **loop** setting for repeating actions.  
* Store all animations on a single node to avoid clutter.

---

## 9.  Next steps

* [Animation Track types](animation_track_types.html) – learn all track options.  
* [AnimationNode](https://docs.godotengine.org/en/stable/classes/class_animationnode.html) – dive deeper into blending.  
* [AnimationPlayer node reference](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html) – full API.

---

*End of the Introduction to the animation features.*