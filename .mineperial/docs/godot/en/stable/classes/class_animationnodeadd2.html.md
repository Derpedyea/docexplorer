**Note**: The raw HTML snippet provided contains only the site’s navigation structure and a brief meta description for the `AnimationNodeAdd2` class, but it does not include the detailed class reference content (methods, properties, signals, etc.) that would normally appear on the page.  
Below is a concise Markdown conversion of the available information. If the full class documentation is needed, the missing sections should be inserted where indicated.

---

# AnimationNodeAdd2

*Inherits:* `AnimationNodeSync<AnimationNode<Resource<RefCounted<Object>>>`

> Blends two animations additively inside an `AnimationNodeBlendTree`.

---

## Overview

`AnimationNodeAdd2` is a resource that can be added to an `AnimationNodeBlendTree`.  
It takes two animation inputs and combines them additively, allowing you to layer animations (e.g., a running animation with a waving animation) without interfering with each other's motion data.

> **Key use‑case:** Additive animation blending for complex character motions or layered animation effects.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mix` | `float` | `1.0` | Controls the weight of the additive blend (0 = no influence, 1 = full influence). |

*Additional properties can be found in the full API reference.*

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_input( int idx, AnimationNode * node )` | `void` | `idx: int`, `node: AnimationNode *` | Sets the input node at the specified index (0 or 1). |
| `get_input( int idx )` | `AnimationNode *` | `idx: int` | Retrieves the input node at the specified index. |

*See the full API for complete method listings.*

---

## Signals

> *None defined for this class.*

---

## Example

```gdscript
var blend_tree = AnimationTree.new()
var add_node = AnimationNodeAdd2.new()
add_node.set_input(0, $AnimationNode1)
add_node.set_input(1, $AnimationNode2)
blend_tree.add_child(add_node)
```

This creates an additive blend between `AnimationNode1` and `AnimationNode2` within the blend tree.

---

### See also

- [AnimationNodeBlendTree](../classes/class_animationnodeblendtree.html)
- [AnimationNodeAdd3](../classes/class_animationnodeadd3.html)

---