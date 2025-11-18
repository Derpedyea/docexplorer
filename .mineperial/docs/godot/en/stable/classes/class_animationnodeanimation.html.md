# AnimationNodeAnimation

**Inheritance**  
`AnimationNodeAnimation` inherits from `AnimationRootNode<AnimationNode<Resource<RefCounted<Object>>>` – an input animation node that can be added to an `AnimationNodeBlendTree`.

---

## Overview

`AnimationNodeAnimation` is a resource that represents a single animation clip which can be used as a leaf node inside an `AnimationNodeBlendTree`. It allows you to select an animation from your project and play it as part of a larger blend tree.

---

## Properties

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `animation` | `Animation` | The animation resource that this node will play. | `null` |

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_animation(animation: Animation)` | void | Assigns the animation to this node. |
| `get_animation() -> Animation` | `Animation` | Returns the currently assigned animation. |
| `get_output_tracks() -> int` | `int` | Returns the number of output tracks for this node. |
| `get_process_mode() -> int` | `int` | Returns the node's processing mode. |
| `set_process_mode(mode: int)` | void | Sets the node's processing mode. |
| `is_inverted() -> bool` | `bool` | Checks if the node is inverted. |
| `set_inverted(invert: bool)` | void | Inverts the node. |
| `set_time_scale(scale: float)` | void | Sets the time scale for the animation. |
| `get_time_scale() -> float` | `float` | Returns the current time scale. |

> **Note**: The actual Godot API may expose additional methods for blending, synchronization, and event handling that are omitted here for brevity.

---

## Signals

| Signal | Description |
|--------|-------------|
| `animation_finished` | Emitted when the animation playback completes. |

---

## Usage Example

```gdscript
var anim_node = AnimationNodeAnimation.new()
anim_node.animation = preload("res://my_anim.tres")
anim_node.set_process_mode(AnimationNodeAnimation.PROCESS_MODE_USER)
animation_tree.add_child(anim_node)
```

In an `AnimationTree` you can connect this node to a blend or transition to blend multiple animations seamlessly.

---

## API Reference

The full API reference is available in the Godot documentation under **Class Reference → AnimationNodeAnimation**. The page includes detailed descriptions of all properties, methods, signals, and inheritance hierarchy, as well as example code snippets and tips for integrating the node into complex animation graphs.

---