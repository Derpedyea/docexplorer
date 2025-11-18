# AnimationMixer

**Inherits:** `Node`  
**Inherited By:** `AnimationPlayer`, `AnimationTree`

> *Base class for AnimationPlayer and AnimationTree to manage animation playback and blending.*

---

## Overview

`AnimationMixer` is an abstract node that provides a unified API for playing, blending, and managing animations.  It is the parent class of both `AnimationPlayer` (the traditional animation node) and `AnimationTree` (the graph‑based animation system).  The class is not normally used directly; instead you create one of the two concrete subclasses and work with those.

---

## Methods

| Return type | Method | Description |
|-------------|--------|-------------|
| `void` | `add_animation(String name, Animation animation)` | Adds an animation to the mixer with the specified name. |
| `void` | `remove_animation(String name)` | Removes an animation by name. |
| `Animation` | `get_animation(String name)` | Returns the animation with the given name. |
| `bool` | `has_animation(String name)` | Checks whether an animation of this name exists. |
| `void` | `play(String name, float custom_speed = 1.0, bool from_end = false)` | Starts playing the named animation. |
| `void` | `stop(String name)` | Stops the specified animation. |
| `void` | `seek(float time, bool update = true)` | Seeks the mixer to a specific time. |
| `float` | `get_time()` | Returns the current time of the animation playback. |
| `bool` | `is_playing(String name)` | Returns whether a particular animation is currently playing. |
| `Array<String>` | `get_animation_list()` | Returns a list of all animation names. |

> **Note**: Many of these methods are inherited from `Node` and `Object`.  The concrete subclasses (`AnimationPlayer` and `AnimationTree`) extend this API with more specific functions such as blend trees, state machines, etc.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `animation_finished` | `String animation_name` | Emitted when the specified animation finishes playing. |

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `playback_active` | `bool` | Whether the animation playback is currently active. |
| `speed_scale` | `float` | Global speed multiplier for all animations. |
| `root_node` | `NodePath` | Path to the node that owns the animations. |

---

## Example

```gdscript
var mixer = AnimationPlayer.new()
add_child(mixer)

var anim = preload("res://walk.anim")
mixer.add_animation("walk", anim)

mixer.play("walk")

func _process(delta):
    if Input.is_action_pressed("ui_right"):
        mixer.seek(0.2)  # jump into the middle of the animation
```

---

## Related Classes

* **[AnimationPlayer](class_animationplayer.html)** – A simple animation node that plays animations one after another.
* **[AnimationTree](class_animationtree.html)** – A graph‑based animation system that lets you blend multiple animation streams.

---

### Further Reading

* [AnimationTree](class_animationtree.html) – The graph‑based system that uses `AnimationMixer` under the hood.
* [AnimationPlayer](class_animationplayer.html) – Classic animation playback.

---

*This page is a reference for the `AnimationMixer` class in Godot Engine 4.0.*