**AnimationNodeSync**  
*Godot Engine 4.0 – Class reference*

> Inherits: `AnimationNode`  
> **Inherits from**:  
> * `AnimationNodeAdd2`, `AnimationNodeAdd3`, `AnimationNodeBlend2`, `AnimationNodeBlend3`, `AnimationNodeOneShot`, `AnimationNodeSub2`, … (see the full inheritance tree in the Godot docs)

---

## Description

`AnimationNodeSync` is a special kind of `AnimationNode` that synchronises the playback of several child animation nodes. It is primarily used inside an `AnimationTree` to keep multiple animation tracks in step with one another, ensuring that they start and finish together and that their times stay locked.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `sync` | `bool` | `true` | Enables or disables the sync behaviour. When `false`, each child node runs independently. |
| `node` | `int` | `-1` | Index of the current active node (used for `AnimationNodeOneShot` style blending). |

> *Note: The property names and defaults are taken from Godot’s official API reference and may vary between engine versions.*

---

## Functions

| Method | Return type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `get_child(int p_index)` | `AnimationNode *` | `int p_index` | Returns the child node at the given index. |
| `set_child(int p_index, AnimationNode *p_child)` | `void` | `int p_index`, `AnimationNode *p_child` | Sets a child node. |
| `get_child_count()` | `int` | – | Returns the number of child nodes. |
| `is_synchronized()` | `bool` | – | Returns `true` if the node is currently synchronised. |
| `set_sync(bool p_sync)` | `void` | `bool p_sync` | Enables or disables sync. |
| `get_sync()` | `bool` | – | Returns the sync flag. |

> These are the API methods available for manipulating sync behaviour programmatically. Other lifecycle methods are inherited from `AnimationNode`.

---

## Signals

No signals are emitted by `AnimationNodeSync` itself.

---

## Example Usage

```gdscript
# Create an AnimationTree
var tree = AnimationTree.new()
add_child(tree)
tree.animation_player = $AnimationPlayer
tree.active = true

# Build a sync node
var sync_node = AnimationNodeSync.new()
tree.root = sync_node

# Add two child animation nodes
var walk = AnimationNodeBlend2.new()
var run  = AnimationNodeBlend2.new()
sync_node.add_child(walk)
sync_node.add_child(run)

# Configure sync
sync_node.set_sync(true)
```

The above code demonstrates creating an `AnimationNodeSync`, adding child nodes, and enabling the sync feature so that all children stay in lockstep.

---

## Related Nodes

* `AnimationNodeAdd2`
* `AnimationNodeAdd3`
* `AnimationNodeBlend2`
* `AnimationNodeBlend3`
* `AnimationNodeOneShot`
* `AnimationNodeSub2`

---

**See also:**  
- [AnimationTree](https://docs.godotengine.org/en/stable/classes/class_animationtree.html) – the node that owns and orchestrates `AnimationNodeSync`  
- [AnimationNode](https://docs.godotengine.org/en/stable/classes/class_animationnode.html) – base class for all animation graph nodes

---