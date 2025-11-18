**AnimationNodeSub2**

> A resource that blends two animations subtractively inside an `AnimationNodeBlendTree`.  
> Inherits: `AnimationNodeSync<AnimationNode<Resource<RefCounted<Object>>>`

---

## Overview

`AnimationNodeSub2` is part of Godot’s animation system. It allows you to combine two animation tracks by subtracting the influence of the second track from the first. This is useful for creating blend effects like “remove a limb”, “fade out a pose”, or other subtractive animation operations.

### Key Points

- **Subtractive blending**: The second animation is subtracted from the first, rather than simply mixed together.
- Works inside an `AnimationNodeBlendTree`.
- Handles weight, speed, and synchronization of the two input animations.

---

## Inheritance Tree

```
Object
 └─ Resource
     └─ RefCounted
         └─ AnimationNode
             └─ AnimationNodeSync
                 └─ AnimationNodeSub2
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `node_changed` | Emitted when the node’s internal state changes. |

*(If other signals exist, they would be listed here.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `input_a` | `AnimationNode` | – | First animation node to blend. |
| `input_b` | `AnimationNode` | – | Second animation node to subtract. |
| `weight` | `float` | `1.0` | Blend weight of the subtraction. |
| `speed_scale` | `float` | `1.0` | Speed multiplier for the blend. |

*(Additional properties, if any, are listed in the full API reference.)*

---

## Methods

| Method | Return type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `get_input_a()` | `AnimationNode` | – | Returns the first input node. |
| `set_input_a(node)` | `void` | `node : AnimationNode` | Sets the first input node. |
| `get_input_b()` | `AnimationNode` | – | Returns the second input node. |
| `set_input_b(node)` | `void` | `node : AnimationNode` | Sets the second input node. |
| `get_weight()` | `float` | – | Gets the current blend weight. |
| `set_weight(weight)` | `void` | `weight : float` | Sets the blend weight. |
| `get_speed_scale()` | `float` | – | Retrieves the speed scale. |
| `set_speed_scale(scale)` | `void` | `scale : float` | Sets the speed scale. |
| `process_animation(delta)` | `void` | `delta : float` | Processes animation blending (internal use). |

*(Further methods are available in the full API documentation.)*

---

## Usage Example (GDScript)

```gdscript
var blend = AnimationNodeSub2.new()
blend.input_a = animation_node_a
blend.input_b = animation_node_b
blend.weight = 0.5
blend.speed_scale = 1.0

var tree = AnimationTree.new()
tree.root = blend
add_child(tree)
tree.active = true
```

---

## Related Resources

- [AnimationNodeBlendTree](../classes/class_animationnodeblendtree.html) – The container that uses `AnimationNodeSub2`.
- [AnimationNodeSync](../classes/class_animationnodesync.html) – Parent class providing sync capabilities.
- [AnimationNode](../classes/class_animationnode.html) – Base class for all animation nodes.

---