# AnimationNodeExtension

> **Experimental** – This class may be changed or removed in future versions.

---

## Overview

`AnimationNodeExtension` is a **base class** used to create custom animation tree nodes in Godot Engine (via GDScript, C#, or other supported scripting languages).  
It extends the core `AnimationNode` resource, enabling you to build sophisticated animation logic that can be integrated into an `AnimationTree`.

> ⚠️  This class is *experimental*.  Its API may change or be removed in upcoming releases.  Use it with caution in production projects.

---

## Inheritance Hierarchy

```
Object
 └─ RefCounted
      └─ Resource
           └─ AnimationNode
                └─ AnimationNodeExtension
```

---

## Properties

| Property | Type | Default | Notes |
|----------|------|---------|-------|
| `name` | `String` | `""` | The node’s display name. |
| `process_mode` | `int` | `MODE_DISABLED` | How the node is processed (`MODE_DISABLED`, `MODE_IDLE`, `MODE_PHYSICS`). |
| `has_autoplay` | `bool` | `false` | Whether the node automatically plays when the tree starts. |

*(All properties are inherited from `AnimationNode`; `AnimationNodeExtension` does not add additional user‑exposed properties.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `process(float delta)` | `void` | Called every frame to process the node. Override to implement custom animation logic. |
| `reset()` | `void` | Reset the node to its initial state. Override if you need to clear cached data. |
| `on_enter_tree()` | `void` | Called when the node enters the tree. Use for initialization that requires parent references. |
| `on_exit_tree()` | `void` | Called when the node exits the tree. Use for cleanup. |
| `get_next_node()` | `AnimationNode` | Return the next node in the animation chain (if applicable). |
| `get_state()` | `AnimationNodeState` | Retrieve the node’s current state. |

> **Note:** The above signatures are indicative.  In practice, you’ll override only the methods you need.  The Godot API reference contains the full method list with detailed parameter and return information.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `animation_finished` | `String animation_name` | Emitted when an animation completes. |
| `animation_started` | `String animation_name` | Emitted when an animation starts. |

---

## Example – GDScript Usage

```gdscript
extends AnimationNodeExtension

func process(delta: float) -> void:
    # Custom logic to blend animations or modify parameters.
    pass
```

> The class can also be subclassed in C# or C++ using the Godot C# or GDExtension APIs.

---

## References

- [Godot Docs – AnimationNode](https://docs.godotengine.org/en/stable/classes/class_animationnode.html)  
- [Godot Docs – AnimationTree](https://docs.godotengine.org/en/stable/classes/class_animationtree.html)

---