**AnimationNodeOneShot – Godot Engine Documentation**  
*(stable, English)*

---

## Overview

`AnimationNodeOneShot` is a node that plays an animation exactly once inside an **`AnimationNodeBlendTree`**.  
It inherits from:

```
AnimationNodeSync<AnimationNode<Resource<RefCounted<Object>>>
```

### Key Features
- Plays a single animation clip and then stops.  
- Can be configured to interrupt or queue other animations.  
- Provides callbacks when the animation starts and ends.

---

## Description

> A resource to add to an `AnimationNodeBlendTree`.  
> Plays an animation once, optionally resetting its state when finished.

The node can be used to trigger single‑frame actions such as a one‑shot attack animation or a brief cutscene segment.  
It is particularly handy for blending complex animation graphs while ensuring a specific animation plays to completion.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animation` | `Animation` | `null` | The animation to play. |
| `one_shot` | `bool` | `false` | Whether the animation should play once. |
| `interrupt_mode` | `int` | `0` | Mode of interruption: `0` – ignore, `1` – interrupt, `2` – queue. |
| `reset_on_finish` | `bool` | `true` | Reset animation to its initial state after completion. |
| `autostart` | `bool` | `false` | Automatically start the animation when the node becomes active. |

---

## Functions

| Function | Return Type | Description |
|----------|------------|-------------|
| `play(String animation_name)` | `void` | Starts the given animation. |
| `stop()` | `void` | Stops the currently playing animation. |
| `is_playing()` | `bool` | Returns `true` if the animation is currently playing. |
| `queue(String animation_name)` | `void` | Queues the animation to be played after the current one finishes. |
| `get_playback()` | `AnimationNodePlayback` | Retrieves the internal playback object. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `animation_finished` | `String animation_name` | Emitted when an animation completes. |
| `animation_started` | `String animation_name` | Emitted when an animation begins. |

---

## Example Usage

```gdscript
var one_shot = AnimationNodeOneShot.new()
one_shot.animation = preload("res://walk.anim")
one_shot.interrupt_mode = AnimationNodeOneShot.INTERRUPT_IMMEDIATE

# Connect signals
one_shot.connect("animation_started", self, "_on_anim_start")
one_shot.connect("animation_finished", self, "_on_anim_end")

# Play the animation once
one_shot.play("walk")
```

```cpp
AnimationNodeOneShot *node = memnew(AnimationNodeOneShot);
node->set_animation(preload("res://walk.anim"));
node->play("walk");
```

---

## Related Nodes

- **[AnimationNodeBlendTree](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendtree.html)** – The container for blending multiple animation nodes.  
- **[AnimationNodeOutput](https://docs.godotengine.org/en/stable/classes/class_animationnodeoutput.html)** – The output node of an animation blend tree.  
- **[AnimationNodeExtension](https://docs.godotengine.org/en/stable/classes/class_animationnodeextension.html)** – Base class for custom animation nodes.

---

### Navigation

- [Previous: AnimationNodeExtension](/classes/class_animationnodeextension.html)  
- [Next: AnimationNodeOutput](/classes/class_animationnodeoutput.html)

---