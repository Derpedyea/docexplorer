**AnimationNodeBlend2 – Godot Engine Class Reference**

> **Inherits**: `AnimationNodeSync<AnimationNode<Resource<RefCounted<Object>>>`  
> **Description**:  
> A node that blends two input animations linearly inside an `AnimationNodeBlendTree`.  
> The blend is controlled by a weight value that ranges from `0.0` (full first animation) to `1.0` (full second animation). The node can also be used to blend multiple animations by chaining several `AnimationNodeBlend2` nodes together.

---

## Overview

`AnimationNodeBlend2` is a **resource** that can be added to an `AnimationTree`. It exposes two input ports:

1. **`input_a`** – First animation source  
2. **`input_b`** – Second animation source

The blending is performed in real time, and the output of the node is the interpolated pose based on the weight.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `blend_amount` | `float` | `0.5` | Value between `0.0` and `1.0` controlling the mix between the two input animations. |
| `sync` | `bool` | `false` | When `true`, both inputs are synchronized to the same animation frame. |
| `custom_root` | `String` | `""` | Optional root path to override the root node for blending. |

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `set_blend_amount(amount : float)` | `void` | `amount : float` | Sets the current blend amount. |
| `get_blend_amount() -> float` | `float` | — | Returns the current blend amount. |
| `set_input_a(node : AnimationNode)` | `void` | `node : AnimationNode` | Connects the first input animation. |
| `set_input_b(node : AnimationNode)` | `void` | `node : AnimationNode` | Connects the second input animation. |
| `get_input_a() -> AnimationNode` | `AnimationNode` | — | Returns the node connected to input A. |
| `get_input_b() -> AnimationNode` | `AnimationNode` | — | Returns the node connected to input B. |
| `_process(delta : float)` | `void` | `delta : float` | Internal processing function. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `blend_changed(amount : float)` | Emitted whenever `blend_amount` is modified. |

---

## Example

```gdscript
# Assume we have an AnimationTree named "animation_tree".
var blend_node = AnimationNodeBlend2.new()
blend_node.set_input_a($AnimationNode1)
blend_node.set_input_b($AnimationNode2)

# Set an initial blend amount
blend_node.set_blend_amount(0.3)

animation_tree.root = blend_node
```

---

## Usage Notes

* The node works best when both input animations share the same skeleton or bone structure.
* If the animations have different lengths or looping properties, you may need to adjust them in the `AnimationPlayer` before feeding them to the blend node.
* `AnimationNodeBlend2` can be chained with other blend nodes (`AnimationNodeBlend3`, `AnimationNodeBlendSpace2D`, etc.) to create complex blend trees.

---

## See Also

- [AnimationNodeBlendTree](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendtree.html)  
- [AnimationNodeBlend3](https://docs.godotengine.org/en/stable/classes/class_animationnodeblend3.html)  
- [AnimationNodeBlendSpace2D](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendspace2d.html)  

---