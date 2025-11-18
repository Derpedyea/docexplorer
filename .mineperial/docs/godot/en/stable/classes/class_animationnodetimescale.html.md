# AnimationNodeTimeScale

> *Godot Engine class reference – inherits from `AnimationNode`.*

---

## Overview

`AnimationNodeTimeScale` is a time‑scaling node that can be used inside an `AnimationTree`.  
It lets you **speed up, slow down, or reverse** any animation channel that it is connected to.  
The node simply multiplies the incoming time by a user‑defined factor.

> **Key features**
> * Scale animation speed up or down.
> * Reverse animation direction (negative scale values).
> * Apply independently to each channel of an `AnimationTree`.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `speed_scale` | `float` | `1.0` | Multiplies the incoming time. `> 1` speeds up, `< 1` slows down, `-1` reverses the animation. |
| `stretch` | `bool` | `false` | When enabled, the node stretches the animation to match the output time (useful for variable length animations). |

> **Note**: The properties can be accessed and modified through the Inspector or via code (e.g., `node.set_speed_scale(2.0)`).

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `set_speed_scale(value : float)` | `void` | `value` | Sets the time‑scale factor. |
| `get_speed_scale() : float` | `float` | – | Retrieves the current time‑scale factor. |
| `set_stretch(enabled : bool)` | `void` | `enabled` | Enables or disables stretching. |
| `is_stretch_enabled() : bool` | `bool` | – | Returns whether stretching is active. |

---

## Signals

None.

---

## Example Usage

```gdscript
# Assuming you have an AnimationTree named `anim_tree`
var time_scale_node = AnimationNodeTimeScale.new()
time_scale_node.speed_scale = 0.5  # Play animations twice as slow
time_scale_node.stretch = true   # Keep the animation length constant

# Add it to the animation tree
anim_tree.set_node("TimeScale", time_scale_node)
anim_tree.set_node_output("TimeScale", "your_animation_node")
```

---

## See Also

- [AnimationNode](../class_animationnode.html) – base class
- [AnimationNodeSeek](../class_animationnodeseek.html) – seeks to a specific position in an animation
- [AnimationNodeBlendTree](../class_animationnodeblendtree.html) – blends multiple animation nodes

---