# AnimationRootNode

> **Inherits:** `AnimationNode`

> **Inherited by:**  
> - `AnimationNodeAnimation`  
> - `AnimationNodeBlendSpace1D`  
> - `AnimationNodeBlendSpace2D`  
> - `AnimationNodeBlendTree`  
> - `AnimationNodeStateMachine`  

---

## Overview

`AnimationRootNode` is an internal node type used by the Godot animation system to act as the entry point of an animation graph. It does not expose any public properties or methods beyond those inherited from `AnimationNode`; its primary purpose is to serve as the root of an `AnimationTree` or other animation blend structures.

> **Note**: The class is marked as *internal*, meaning that it is not intended for direct use in user scripts or editor UI. Instead, it is automatically created and managed by the animation subsystem when you use an `AnimationPlayer` or `AnimationTree`.

---

## Usage

### In the Editor

When creating an `AnimationTree`, Godot automatically generates an `AnimationRootNode` as the root of the blend tree. You normally do not need to interact with it directly.

### In Code

You can access the root node of an `AnimationTree` via:

```gdscript
var root = animation_tree.tree_root
# root is an instance of AnimationRootNode
```

However, any manipulation of the animation graph should be performed through the higher‑level `AnimationTree` API.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animation_node` | `AnimationNode` | – | The child animation node that feeds into this root. |
| `process_mode` | `int` (see `AnimationNode::ProcessMode`) | `PROCESS_MODE_INHERITED` | Determines how the node processes frames. |

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `set_process_mode(mode: int)` | `mode: int` | – | Sets the process mode for this node. |
| `get_process_mode() -> int` | – | `int` | Retrieves the current process mode. |
| `set_playback_speed(speed: float)` | `speed: float` | – | Sets the playback speed multiplier. |
| `get_playback_speed() -> float` | – | `float` | Retrieves the current playback speed multiplier. |

> *All other methods are inherited from `AnimationNode`.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `animation_finished()` | Emitted when the root animation completes. |
| `animation_changed()` | Emitted when the animation tree configuration changes. |

---

## Example

```gdscript
# Assume an AnimationTree named "anim_tree" exists in the scene
var root = anim_tree.tree_root
root.set_process_mode(AnimationNode.PROCESS_MODE_IDLE)  # Run in idle frames
root.set_playback_speed(1.5)  # 50% faster playback
```

---

## References

- [AnimationNode](https://docs.godotengine.org/en/stable/classes/class_animationnode.html)  
- [AnimationTree](https://docs.godotengine.org/en/stable/classes/class_animationtree.html)  
- [AnimationPlayer](https://docs.godotengine.org/en/stable/classes/class_animationplayer.html)  

---