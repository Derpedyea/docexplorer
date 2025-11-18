**Node – Godot Engine (stable) documentation**  

---

## Overview

- **Inherits**: `Object`  
- **Inherited by**:  
  - `AnimationMixer`  
  - `AudioStreamPlayer`  
  - `CanvasItem`  
  - `CanvasLayer`  
  - `EditorFileSystem`  
  - `EditorPlugin`  
  - `EditorResourcePreview`  
  - `HTTPRequest`  
  - `InstancePlaceholder`  
  - `MissingNode`  
  - `MultiplayerPeer`  
  - … *(other subclasses omitted for brevity)*  

---

## Description
`Node` is the base class for all nodes in Godot. It provides the core functionality for the scene tree, including node ownership, scene instancing, and signal emission. Every node you use in a scene ultimately derives from `Node`.

---

## Signals

| Signal | Description |
|--------|-------------|
| `name_changed` | Emitted when a node’s name changes. |
| `tree_exiting` | Emitted when the node’s scene tree is about to exit. |
| `tree_entered` | Emitted when the node enters the scene tree. |
| `tree_exited` | Emitted when the node exits the scene tree. |
| `tree_ready` | Emitted when the node has entered the scene tree and all its children are ready. |

> *(Full list of signals can be found in the online reference.)*

---

## Methods

| Return type | Method | Arguments | Description |
|-------------|--------|-----------|-------------|
| `void` | `add_child(node : Node, force_readable_name : bool = false)` | `node` – Node to add | Adds a child node. |
| `void` | `remove_child(node : Node)` | `node` – Node to remove | Removes a child node. |
| `Node` | `get_parent()` | | Returns the parent node. |
| `bool` | `is_inside_tree()` | | Returns `true` if the node is part of the active scene tree. |
| `String` | `get_name()` | | Returns the node’s name. |
| `void` | `set_name(name : String)` | | Sets the node’s name. |
| `int` | `get_index()` | | Returns the node’s index among its siblings. |
| `void` | `set_owner(owner : Node)` | | Sets the node that owns this node in a scene. |
| `Node` | `get_owner()` | | Returns the owner of this node. |
| `Array` | `get_children()` | | Returns an array of child nodes. |
| `Node` | `duplicate(flags : int = 0)` | | Duplicates the node. |
| `void` | `queue_free()` | | Frees the node, scheduling it for deletion. |
| `void` | `set_process(processing : bool)` | | Enables/disables the `_process` callback. |
| `void` | `set_physics_process(physics_processing : bool)` | | Enables/disables the `_physics_process` callback. |
| `void` | `set_process_input(process_input : bool)` | | Enables/disables the `_input` callback. |
| `void` | `set_process_unhandled_input(process_unhandled_input : bool)` | | Enables/disables the `_unhandled_input` callback. |
| `void` | `set_process_unhandled_key_input(process_unhandled_key_input : bool)` | | Enables/disables the `_unhandled_key_input` callback. |
| `void` | `set_notify_transform(notify : bool)` | | Enables/disables `NOTIFICATION_TRANSFORM_CHANGED`. |
| `void` | `set_notify_local_transform(notify : bool)` | | Enables/disables `NOTIFICATION_LOCAL_TRANSFORM_CHANGED`. |
| `void` | `set_notify_parent(notify : bool)` | | Enables/disables `NOTIFICATION_PARENTED`. |
| `void` | `set_notify_transform(notify : bool)` | | Enables/disabling `NOTIFICATION_TRANSFORM_CHANGED`. |
| `void` | `set_notify_local_transform(notify : bool)` | | Enables/disabling `NOTIFICATION_LOCAL_TRANSFORM_CHANGED`. |
| `void` | `set_notify_parent(notify : bool)` | | Enables/disabling `NOTIFICATION_PARENTED`. |
| `void` | `set_process_input(process_input : bool)` | | Enables/disabling `_input`. |
| … | *additional methods omitted for brevity* | | |

> **Tip**: For a complete, up‑to‑date list of methods and properties, refer to the online reference at <https://docs.godotengine.org/en/stable/classes/class_node.html>.

---

## Properties

| Type | Property | Default | Description |
|------|----------|---------|-------------|
| `bool` | `paused` | `false` | Pauses the node and its children. |
| `int` | `process_mode` | `PROCESS_MODE_INHERIT` | Determines how the node processes (inherited, manual, etc.). |
| `int` | `owner` | `null` | Node that owns this node in a scene. |
| `int` | `tree` | `null` | Reference to the scene tree the node belongs to. |
| … | *other properties omitted* | | |

---

## Usage Example

```gdscript
# Create a new Node
var my_node = Node.new()
my_node.name = "MyNode"

# Add to the scene tree
get_tree().root.add_child(my_node)

# Connect a signal
my_node.connect("tree_exited", self, "_on_my_node_exited")
```

---

## See Also

- [`SceneTree`](https://docs.godotengine.org/en/stable/classes/class_scene_tree.html) – The tree that contains all nodes.  
- [`NodePath`](https://docs.godotengine.org/en/stable/classes/class_nodepath.html) – Path syntax for accessing nodes.  
- [`Group`](https://docs.godotengine.org/en/stable/classes/class_node.html#groups) – Organizing nodes into groups.  

---

**Note:** The full API reference includes additional signals, methods, and properties. This document serves as a quick reference for the most common functionalities of `Node`.