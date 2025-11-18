**AnimationNodeTransition** – Godot Engine Documentation
=========================================================

> **Class**: `AnimationNodeTransition`  
> **Inherits**: `AnimationNodeSync<AnimationNode<Resource<RefCounted<Object>>>`

### Description
`AnimationNodeTransition` is a node used inside an `AnimationTree` to connect two other animation nodes. It implements a simple state‑machine style transition between them, allowing you to blend from one animation to another based on conditions defined in the editor.

### Key Concepts

| Property | Type | Description |
|----------|------|-------------|
| `from` | `String` | The name of the source animation node. |
| `to`   | `String` | The name of the destination animation node. |
| `transition` | `float` | Transition time in seconds. |
| `active` | `bool` | Whether the transition is currently active. |

> **Note**: The actual property names and API methods are available in the full class reference page. Use the editor’s **AnimationTree** node to configure and preview the transition behaviour.

### Typical Usage

```gdscript
# Assuming `anim_tree` is an AnimationTree node
var transition = anim_tree.get_node("Transition")
transition.from = "Idle"
transition.to = "Run"
transition.transition = 0.2
transition.active = true
```

The transition node automatically blends from the *Idle* animation to *Run* over 0.2 seconds when it becomes active.

### Documentation Sections

1. **Properties** – All exposed properties and their descriptions.  
2. **Methods** – Public API methods for controlling the node programmatically.  
3. **Signals** – Signals emitted by the node.  
4. **Examples** – Sample code snippets for common scenarios.

> For the complete API, refer to the Godot Engine Class Reference for `AnimationNodeTransition` on the official documentation site.