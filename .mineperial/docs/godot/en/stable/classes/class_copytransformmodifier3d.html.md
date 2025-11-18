# CopyTransformModifier3D

`CopyTransformModifier3D` is a node that copies the transform from a reference bone to a target bone in a **Skeleton**. It is a subclass of `BoneConstraint3D` and ultimately of `SkeletonModifier3D`, which in turn extends `Node3D`.

---

## Inheritance

```
Object
 └─ Node
    └─ Node3D
       └─ SkeletonModifier3D
          └─ BoneConstraint3D
             └─ CopyTransformModifier3D
```

---

## Description

`CopyTransformModifier3D` applies the transform (position, rotation, and scale) of a specified *reference* bone to a *target* bone.  
Typical use‑case: mirror a bone’s movement (e.g., a hand following a controller), or create a secondary bone that simply follows another bone.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `reference_bone` | `int` | `-1` | The bone index of the source bone to copy from. |
| `reference_bone_path` | `NodePath` | `""` | The path to a `BoneAttachment3D` or other node that contains the reference bone. |
| `transform_space` | `TransformSpace` (enum) | `LOCAL` | The space in which the transform is applied (local or global). |
| `use_local_position` | `bool` | `true` | Whether to copy the local position of the reference bone. |
| `use_local_rotation` | `bool` | `true` | Whether to copy the local rotation of the reference bone. |
| `use_local_scale` | `bool` | `true` | Whether to copy the local scale of the reference bone. |

> **Note:** The `reference_bone_path` can point to any node in the scene tree that owns the skeleton. If it is not set, the modifier will look for a `Skeleton3D` in its own hierarchy.

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| **_ready()** | — | — | Called when the node is added to the scene tree. Initializes internal references. |
| **set_reference_bone(int bone_index)** | `bone_index` | — | Sets the bone index of the reference bone. |
| **get_reference_bone() -> int** | — | `int` | Returns the bone index of the reference bone. |
| **set_reference_bone_path(NodePath path)** | `path` | — | Sets the path to the node that contains the reference bone. |
| **get_reference_bone_path() -> NodePath** | — | `NodePath` | Returns the current reference bone path. |
| **set_transform_space(TransformSpace space)** | `space` | — | Sets the transform space (local/global). |
| **get_transform_space() -> TransformSpace** | — | `TransformSpace` | Returns the current transform space. |
| **set_use_local_position(bool use)** | `use` | — | Enables/disables copying of local position. |
| **is_using_local_position() -> bool** | — | `bool` | Returns whether local position is used. |
| **set_use_local_rotation(bool use)** | `use` | — | Enables/disables copying of local rotation. |
| **is_using_local_rotation() -> bool** | — | `bool` | Returns whether local rotation is used. |
| **set_use_local_scale(bool use)** | `use` | — | Enables/disables copying of local scale. |
| **is_using_local_scale() -> bool** | — | `bool` | Returns whether local scale is used. |
| **_process(double delta)** | `delta` | — | Applies the transform to the target bone each frame. |
| **_get_configuration_warning() -> String** | — | `String` | Returns a warning if the reference bone or skeleton is not set. |

> All setter/getter methods are exposed to the editor as properties.

---

## Signals

| Signal | Description |
|--------|-------------|
| `reference_bone_changed(int bone_index)` | Emitted when the reference bone index is changed. |
| `reference_bone_path_changed(NodePath path)` | Emitted when the reference bone path is changed. |

---

## Example Usage

```gdscript
extends CopyTransformModifier3D

func _ready():
    # Copy the transform from bone 0 to bone 2
    set_reference_bone(0)
    # Optionally change to global space
    set_transform_space(TransformSpace.GLOBAL)
```

Attach the node to a `Skeleton3D` and set the target bone via the editor or script. The target bone will continuously mirror the reference bone’s transform.

---

## Documentation References

* [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)
* [BoneConstraint3D](https://docs.godotengine.org/en/stable/classes/class_boneconstraint3d.html)
* [SkeletonModifier3D](https://docs.godotengine.org/en/stable/classes/class_skeletonmodifier3d.html)

---

> **Tip:** Use this node to create realistic hand or foot following in VR or AR applications, or to synchronize complex bone hierarchies between characters.