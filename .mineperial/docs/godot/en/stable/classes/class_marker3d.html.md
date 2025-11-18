**Marker3D** – Godot Engine Class Reference  
===========================================

> **URL**: <https://docs.godotengine.org/en/stable/classes/class_marker3d.html>  

---

### Inheritance

```
Marker3D
└─ Node3D
   └─ Node
      └─ Object
```

### Description

A *generic 3D position hint* for the editor.  
`Marker3D` behaves exactly like a plain `Node3D`, but in the editor it is rendered as a small cross to help place objects during level design. It does not affect runtime behaviour.

---

## Overview

The class is mainly used as a visual aid; it exposes the same properties and signals as its parent `Node3D`. It does **not** provide additional runtime functionality beyond being a position marker.

> **Tip**  
> Drag a `Marker3D` into your scene to mark a point of interest, then use the `Editor` to align other nodes to it. When you run the game, the marker is invisible.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `transform` | `Transform3D` | `Transform3D()` | Position, rotation and scale in the 3‑D scene. Inherits from `Node3D`. |
| `visible` | `bool` | `true` | Whether the node is visible in the editor. Inherited from `Node`. |
| ... | | | (All other inherited properties from `Node3D`.) |

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `_init()` | – | – | Constructor. |
| `set_global_transform(global_transform : Transform3D)` | – | – | Sets the global transform. |
| `get_global_transform() -> Transform3D` | – | – | Returns the global transform. |
| *(All other methods are inherited from `Node3D`.)* | | | |

---

## Signals

`Marker3D` does not define any new signals; it inherits all signals from `Node3D` (e.g., `ready`, `process`, `tree_entered`, etc.).

---

## Usage Example

```gdscript
# Add a marker in code
var marker := Marker3D.new()
marker.global_transform.origin = Vector3(0, 5, 0)
add_child(marker)
```

The marker will appear as a cross at the specified position in the editor. Remove it at runtime or set `marker.visible = false` if you do not want it to appear during gameplay.

---

### Related Classes

- [Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)
- [Marker2D](https://docs.godotengine.org/en/stable/classes/class_marker2d.html)

---

#### See also

* **Getting Started** – Creating scenes, nodes, and using editor helpers.  
* **Editor Documentation** – How to use editor features like markers, gizmos, and scene debugging.

---