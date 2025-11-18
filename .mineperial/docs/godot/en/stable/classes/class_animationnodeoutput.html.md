**AnimationNodeOutput**  
========================

> *Inherits:* `AnimationNode`

**Description**  
A node created automatically in an `AnimationNodeBlendTree` that outputs the final animation.  

---

### Overview
`AnimationNodeOutput` is a special node used within an `AnimationNodeBlendTree`.  
It collects the blended animation result and makes it available to the rest of the animation system.

> **Note:** This node is generated automatically by the blend‑tree editor; it is not normally added manually.

---

### Properties
| Property | Type | Description |
|----------|------|-------------|
| **node_name** | `String` | The name of the node within the blend tree. |
| **mix_mode** | `int` | Blend‑tree specific mode for how this node mixes animation. |
| **process_mode** | `int` | How the node processes animation updates (e.g., `PROCESS_MODE_INHERIT`, `PROCESS_MODE_ALWAYS`, etc.). |

*(Additional properties may be available depending on the engine version.)*

---

### Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `set_process_mode(mode)` | `void` | Sets the process mode. |
| `get_process_mode()` | `int` | Retrieves the current process mode. |
| `set_node_name(name)` | `void` | Sets the name of the node. |
| `get_node_name()` | `String` | Retrieves the node name. |

*(Full method list can be found in the official Godot documentation.)*

---

### Signals
None.

---

### Usage Example
```gdscript
# Assuming a blend tree called "anim_tree" already exists
var output_node = anim_tree.get_output_node()   # Retrieves the automatically created output node
output_node.set_process_mode(AnimTree.PM_INHERIT)
```

---

### Further Reading
* [AnimationNodeBlendTree](../classes/class_animationnodeblendingtree.html)  
* [AnimationTree](../classes/class_animationtree.html)

---