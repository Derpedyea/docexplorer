**Node3D – Godot Engine (stable) documentation**

---

# Node3D

> **Inherits**: `Node3D` extends `Node3D` (base 3‑D node)

> **Inherited by**:  
> `AudioListener3D`, `AudioStreamPlayer3D`, `BoneAttachment3D`, `Camera3D`, `CollisionObject3D`, `CollisionPolygon3D`, `CollisionShape3D`, `GridMap`, `ImporterMeshInstance3D`, `Joint3D`, `Light3D`, `MeshInstance3D`, `OccluderInstance3D`, `ParallaxBackground`, `ParallaxLayer`, `PathFollow3D`, `Path3D`, `PhysicsBody3D`, `Rope2D`, `Skeleton3D`, `Spatial`, `SpringArm3D`, `SubViewport`, `SubViewportContainer`, `VoxelGI`, `World3D`, `XRCamera3D`, `XRAnchor3D`, etc.

---

## Overview

`Node3D` is the base class for all 3‑D nodes in Godot. It provides transform, visibility, and spatial logic that other 3‑D nodes build upon. The node hierarchy for 3‑D scenes uses `Node3D` (or a subclass) at the root, and all other spatial nodes are children of it.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `transform` | `Transform3D` | identity | Global transform of the node. |
| `global_transform` | `Transform3D` | identity | Global transform (includes parent transforms). |
| `position` | `Vector3` | `(0,0,0)` | Local position. |
| `rotation` | `Vector3` | `(0,0,0)` | Local Euler rotation (in radians). |
| `rotation_degrees` | `Vector3` | `(0,0,0)` | Local Euler rotation (in degrees). |
| `scale` | `Vector3` | `(1,1,1)` | Local scale. |
| `global_position` | `Vector3` | `(0,0,0)` | Global position. |
| `global_rotation` | `Vector3` | `(0,0,0)` | Global Euler rotation. |
| `global_rotation_degrees` | `Vector3` | `(0,0,0)` | Global Euler rotation (deg). |
| `global_scale` | `Vector3` | `(1,1,1)` | Global scale. |
| `z_index` | `int` | `0` | Depth ordering for rendering. |
| `visible` | `bool` | `true` | Whether the node is visible. |
| `show_collision_shape` | `bool` | `false` | (Editor only) Show collision shape gizmo. |
| `hide_viewport` | `bool` | `false` | (Editor only) Hide node from viewport. |
| `editor_only` | `bool` | `false` | Hide node when running the project. |

> *All transform properties have matching setter/getter functions described in the methods section.*

---

## Methods

### Transform Manipulation

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_position(position : Vector3)` | – | Sets the local position. |
| `get_position() -> Vector3` | – | Returns the local position. |
| `translate(offset : Vector3)` | – | Translates the node by `offset`. |
| `set_rotation(rotation : Vector3)` | – | Sets local Euler rotation. |
| `get_rotation() -> Vector3` | – | Returns local Euler rotation. |
| `set_rotation_degrees(degrees : Vector3)` | – | Sets local Euler rotation (degrees). |
| `get_rotation_degrees() -> Vector3` | – | Returns local Euler rotation (degrees). |
| `rotate(angle : float, axis : Vector3)` | – | Rotates around a global axis by `angle` radians. |
| `global_transform_changed()` | – | Called when global transform changes. |
| `set_transform(xform : Transform3D)` | – | Sets the local transform. |
| `get_transform() -> Transform3D` | – | Returns the local transform. |

### Visibility & Layer

| Method | Signature | Description |
|--------|-----------|-------------|
| `show()` | – | Makes the node visible. |
| `hide()` | – | Makes the node invisible. |
| `is_visible() -> bool` | – | Returns visibility state. |
| `set_visible(visible : bool)` | – | Sets visibility. |
| `set_z_index(index : int)` | – | Sets z-index for rendering order. |
| `get_z_index() -> int` | – | Gets z-index. |

### GDScript Convenience

```gdscript
# Example: Move the node forward in local space
var speed = 5.0
func _process(delta):
    translate(Vector3(0, 0, -speed * delta))
```

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `transform_changed()` | – | Emitted when local transform changes. |
| `visibility_changed()` | – | Emitted when visibility changes. |

---

## Usage Examples

### Basic Spatial Node

```gdscript
var cube = MeshInstance3D.new()
cube.mesh = CubeMesh.new()
add_child(cube)

cube.translation = Vector3(0, 1, 0)
cube.rotate_y(PI / 4)
```

### Camera Setup

```gdscript
var cam = Camera3D.new()
add_child(cam)
cam.global_transform.origin = Vector3(0, 2, -5)
```

### Using `Node3D` as a Root

```gdscript
extends Node3D

func _ready():
    var light = DirectionalLight3D.new()
    add_child(light)
    light.global_transform.basis = Basis(Vector3(0.5, -0.5, 0), deg2rad(45))
```

---

## Documentation References

* [Node2D](../classes/class_node2d.html) – 2‑D counterpart.
* [Spatial](../classes/class_spatial.html) – Deprecated 3‑D base (in Godot 3.x).
* [Transform3D](../classes/class_transform3d.html) – 3‑D transform type.

---

> **Note**: This is a simplified view of the Node3D class. For complete details—including all methods, properties, and signal documentation—refer to the official Godot 4.0 docs: <https://docs.godotengine.org/en/stable/classes/class_node3d.html>.