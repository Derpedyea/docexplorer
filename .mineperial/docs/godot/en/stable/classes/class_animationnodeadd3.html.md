**AnimationNodeAdd3**  
=====================

> A node that blends **two of three** input animations additively inside an  
> **AnimationNodeBlendTree**.  
>  
> This resource is meant to be used inside an `AnimationTree` or a custom
> `AnimationNodeBlendTree` to perform additive blending of animations
> (e.g. layering a “walk” animation with a “sprint” overlay).

> **Inherited classes**  
> `AnimationNodeSync < AnimationNode < Resource < RefCounted < Object`

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `weight` | `float` | `0.0` | Overall weight of the additive blend. 0 → no influence, 1 → full influence. |
| `input_1` | `NodePath` | `""` | Path to the first input animation. |
| `input_2` | `NodePath` | `""` | Path to the second input animation. |
| `input_3` | `NodePath` | `""` | Path to the third input animation. |

> *All three inputs are optional; only the ones with a valid path will be
> processed. The node automatically synchronises the lengths of the
> animations.*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_weight(value: float)` | `void` | Sets the additive weight. |
| `get_weight() -> float` | `float` | Returns the current weight. |
| `set_input(index: int, path: NodePath)` | `void` | Sets the animation path for the given input (0‑2). |
| `get_input(index: int) -> NodePath` | `NodePath` | Retrieves the path of the given input. |
| `add_animation(name: String, animation: Animation)` | `void` | Adds an animation to be used by this node. |
| `remove_animation(name: String)` | `void` | Removes an animation. |
| `get_animation(name: String) -> Animation` | `Animation` | Returns a reference to an animation. |

> **Note**: All methods that modify the node should be called within
> `AnimationTree`’s editing context (e.g. using `AnimationTree.set_notify_process(false)`).

---

## Usage Example

```gdscript
# Create an AnimationTree node with a BlendTree
var tree = AnimationTree.new()
tree.set_active(true)
var root = tree.create_node("root")
root.set_name("BlendTree")

# Add the AnimationNodeAdd3 node
var add3 = AnimationNodeAdd3.new()
root.add_child(add3)
add3.set_weight(0.8)

# Connect three animation resources
add3.set_input(0, "run")      # Base animation
add3.set_input(1, "jump")     # Additive animation
add3.set_input(2, "kick")     # Second additive

# Set the tree to use the root node
tree.set_root("root")
```

---

## Related Documentation

- [AnimationNodeBlendTree](../class_animationnodeblendt.html)  
- [AnimationNodeAdd2](../class_animationnodeadd2.html)  
- [AnimationNodeBlend3](../class_animationnodeblend3.html)

---

### See Also

- [AnimationPlayer](../class_animationplayer.html) – high‑level API for playing animations.  
- [AnimationTree](../class_animationtree.html) – node that allows complex blending.  

---