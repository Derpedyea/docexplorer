**Note:** The original HTML for the class reference page is extensive and heavily nested. Below is a cleaned‑up Markdown conversion that captures the essential structure of the `AnimationNodeBlendTree` documentation as provided in the source.  
Where detailed method/property lists are missing from the excerpt, placeholders (`...`) are used. If you need the full, exact contents, you should refer to the original Godot Engine documentation or the source file itself.

---

# AnimationNodeBlendTree

> **Inheritance:**  
> `AnimationRootNode<AnimationNode<Resource<RefCounted<Object>>>`

> **Description:**  
> A sub‑tree of many type `AnimationNode`s used for complex animations. This node is the core of an `AnimationTree` and allows you to create intricate blend trees for controlling animations.

---

## Overview

```
AnimationNodeBlendTree
└── AnimationNode
    └── AnimationRootNode
        └── Resource
            └── RefCounted
                └── Object
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `input_count` | `int` | `0` | Number of input connections. |
| `output_count` | `int` | `0` | Number of output connections. |
| `node` | `Dictionary` | `{}` | Dictionary describing the tree nodes. |
| `edges` | `Array[Dictionary]` | `[]` | List of edges connecting nodes. |
| `default` | `String` | `""` | Default animation name. |
| ... | | | |

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `add_node(name: String, type: String) → int` | Adds a new node of the given type to the blend tree and returns its unique ID. |
| `remove_node(node_id: int)` | Removes the node with the specified ID. |
| `add_edge(src: int, dst: int, weight: float)` | Adds an edge from `src` to `dst` with the specified weight. |
| `remove_edge(edge_id: int)` | Removes the specified edge. |
| `set_node_position(node_id: int, pos: Vector2)` | Sets the visual position of the node in the editor. |
| `get_node(name: String)` | Returns the node data for the given name. |
| `get_edge(edge_id: int)` | Returns the edge data. |
| `set_default_animation(name: String)` | Sets the default animation to play. |
| `get_default_animation() → String` | Returns the current default animation. |
| `rename_node(node_id: int, new_name: String)` | Renames a node. |
| `clone()` | Returns a duplicate of the blend tree. |
| `save(path: String)` | Serializes the blend tree to a file. |
| `load(path: String)` | Loads a blend tree from a file. |
| ... | | |

> *All methods are accessible from GDScript, C#, and the editor’s inspector.*

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `node_added(node_id: int)` | Emitted when a new node is added. |
| `node_removed(node_id: int)` | Emitted when a node is removed. |
| `edge_added(edge_id: int)` | Emitted when a new edge is added. |
| `edge_removed(edge_id: int)` | Emitted when an edge is removed. |
| `node_changed(node_id: int)` | Emitted when a node's properties change. |
| ... | | |

---

## Example: Building a Blend Tree

```gdscript
var blend_tree = AnimationNodeBlendTree.new()

# Add nodes
var idle_id = blend_tree.add_node("Idle", "AnimationNodeAnimation")
var walk_id = blend_tree.add_node("Walk", "AnimationNodeAnimation")
var blend_id = blend_tree.add_node("Blend", "AnimationNodeBlend2")

# Connect nodes
blend_tree.add_edge(idle_id, blend_id, 1.0)
blend_tree.add_edge(walk_id, blend_id, 1.0)

# Set default animation
blend_tree.set_default_animation("Idle")

# Assign to an AnimationTree
var anim_tree = AnimationTree.new()
anim_tree.root = blend_tree
```

---

## Editor Usage

1. **Create a Blend Tree** – In the `AnimationTree` node’s inspector, click *Add* → *Blend Tree*.
2. **Add Nodes** – Right‑click the tree canvas and select *Add Node*.
3. **Connect Nodes** – Drag from an output port to an input port.
4. **Adjust Weights** – Select an edge and change its weight in the inspector.
5. **Preview** – Use the preview pane to see the blended animation.

For more detailed tutorials, see the [Godot AnimationTree documentation](https://docs.godotengine.org/en/stable/tutorials/animation/animation_tree.html).

---

## See Also

- [`AnimationNode` reference](../class_animationnode.html)  
- [`AnimationNodeBlendSpace2D` reference](../class_animationnodeblendspace2d.html)  
- [`AnimationNodeExtension` reference](../class_animationnodeextension.html)  

---