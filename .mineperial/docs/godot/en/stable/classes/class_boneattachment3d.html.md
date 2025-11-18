**BoneAttachment3D** – Godot Engine Documentation  
==============================================

> **Node that dynamically copies or overrides the 3D transform of a bone in its parent `Skeleton3D`.**  
> A `BoneAttachment3D` selects a bone in a `Skeleton3D` and attaches a child node to that bone.  
> The attachment can optionally override the bone’s transform, providing a convenient way to attach objects such as weapons, hitboxes, or visual effects to skeletal animation.

---

## Inheritance

```text
Node3D
 └── BoneAttachment3D
```

---

## Description

`BoneAttachment3D` automatically updates its transform every frame to match the selected bone’s transform in the parent `Skeleton3D`.  
When the `transform_override` property is `true`, the node’s local transform is used instead of the bone’s world transform, allowing manual positioning or animation.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bone_name` | `String` | `""` | Name of the bone to attach to. If empty, `bone_index` must be set. |
| `bone_index` | `int` | `-1` | Index of the bone to attach to. Used when `bone_name` is empty. |
| `enabled` | `bool` | `true` | Enable or disable the attachment. When `false`, the node is not updated. |
| `offset` | `Vector3` | `Vector3(0, 0, 0)` | Additional positional offset applied to the attached node. |
| `rotation_offset` | `Vector3` | `Vector3(0, 0, 0)` | Additional Euler rotation offset applied to the attached node. |
| `transform_override` | `bool` | `false` | When `true`, the node’s transform overrides the bone’s transform. |
| `local_transform` | `Transform3D` | `Transform3D()` | The transform applied when `transform_override` is `true`. |

> **Note**: When changing `bone_name` or `bone_index`, the node will search for the bone in the parent `Skeleton3D` during `_ready()` and every frame if `enabled` is `true`.

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_bone_index()` | `int` | – | Returns the current bone index. |
| `set_bone_index(int index)` | – | `index` | Sets the bone index. |
| `get_bone_name()` | `String` | – | Returns the name of the attached bone. |
| `set_bone_name(String name)` | – | `name` | Sets the bone name. |
| `get_local_transform()` | `Transform3D` | – | Returns the `local_transform`. |
| `set_local_transform(Transform3D transform)` | – | `transform` | Sets the `local_transform`. |
| `get_offset()` | `Vector3` | – | Returns the positional offset. |
| `set_offset(Vector3 offset)` | – | `offset` | Sets the positional offset. |
| `get_rotation_offset()` | `Vector3` | – | Returns the rotational offset. |
| `set_rotation_offset(Vector3 rotation)` | – | `rotation` | Sets the rotational offset. |
| `is_transform_override()` | `bool` | – | Returns whether the transform is overridden. |
| `set_transform_override(bool override)` | – | `override` | Enables/disables transform override. |
| `_ready()` | – | – | Called when the node enters the scene tree. Performs initial bone lookup. |
| `_process(float delta)` | – | `delta` | Updates the attachment transform every frame if `enabled`. |
| `_exit_tree()` | – | – | Called when the node leaves the scene tree. Clears internal state. |

> **Tip**: Use the `bone_name` property for readability; use `bone_index` for performance-critical code.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `bone_changed(int bone_index)` | `bone_index : int` | Emitted when the bone selection changes. |
| `transform_overridden(bool overridden)` | `overridden : bool` | Emitted when the `transform_override` flag changes. |

---

## Example Usage

```gdscript
# Attach a weapon to a character's hand
var hand_attachment = BoneAttachment3D.new()
hand_attachment.bone_name = "hand_r"
hand_attachment.offset = Vector3(0.1, 0, 0.05)
hand_attachment.rotation_offset = Vector3(0, PI/2, 0)
add_child(hand_attachment)

var sword = preload("res://assets/sword.tscn").instance()
hand_attachment.add_child(sword)
```

If you want the weapon to follow the hand exactly without any offset, simply set `hand_attachment.transform_override = false` and add the weapon directly as a child.

---

## Documentation Links

- [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html) – Parent node that contains bones.  
- [Transform3D](https://docs.godotengine.org/en/stable/classes/class_transform3d.html) – 3D transform type.  

---