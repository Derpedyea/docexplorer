# Skeleton3D

`Skeleton3D` is a node that represents a bone hierarchy used for 3‑D skeletal animation.  
It inherits from `Node3D` and provides an interface to query, modify and animate bones at runtime.

> **Inherits**  
> `Node3D` → `Node` → `Object`

> **See also**  
> * [Skeleton2D](/classes/class_skeleton2d.html) – 2‑D version  
> * [SkeletonIK3D](/classes/class_skeletonik3d.html) – inverse‑kinematic helper

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bone_count` | `int` | `0` | Read‑only. Number of bones in the skeleton. |
| `bone_names` | `Array[String]` | `[]` | Read‑only. Names of all bones. |
| `use_rest` | `bool` | `false` | Whether to use rest pose for transformations. |
| `use_setup_bones` | `bool` | `true` | Whether to use the “Setup” bones in the editor. |
| `pose_position` | `Vector3` | `Vector3.ZERO` | Global position of the skeleton in pose mode. |
| `pose_rotation` | `Quat` | `Quat.IDENTITY` | Global rotation of the skeleton in pose mode. |
| `pose_scale` | `Vector3` | `Vector3.ONE` | Global scale of the skeleton in pose mode. |
| `custom_pose` | `Dictionary` | `{}` | Map of bone indices → custom transforms applied at runtime. |
| `custom_pose_mode` | `int` (`Skeleton3D.CustomPoseMode`) | `CUSTOM_POSE_MODE_NONE` | Which bones are overridden by custom poses. |
| `global_pose_override` | `bool` | `false` | Whether to override global pose calculations. |
| `global_pose` | `Transform3D` | – | Read‑only. Global transform of the skeleton. |
| `bone_hierarchy_changed` | `Signal` | – | Emitted when the bone hierarchy changes. |
| `bone_pose_changed` | `Signal` | – | Emitted when a bone pose is altered. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `bone_added(int bone_index)` | `bone_index` | Emitted after a bone is added. |
| `bone_removed(int bone_index)` | `bone_index` | Emitted after a bone is removed. |
| `bone_name_changed(int bone_index, String name)` | `bone_index`, `name` | Emitted when a bone name changes. |
| `bones_reordered()` | – | Emitted when the bone order changes. |
| `skinned_meshes_changed()` | – | Emitted when meshes using the skeleton change. |

---

## Methods

### Bone Queries

| Method | Returns | Description |
|--------|---------|-------------|
| `int get_bone_index(String name)` | `int` | Return index of the bone with the given name (‑1 if not found). |
| `String get_bone_name(int index)` | `String` | Return the name of the bone at `index`. |
| `int get_bone_parent(int index)` | `int` | Return parent bone index (−1 if root). |
| `int get_bone_child_count(int index)` | `int` | Number of child bones. |
| `int[] get_bone_children(int index)` | `int[]` | List of child bone indices. |

### Bone Transform

| Method | Returns | Description |
|--------|---------|-------------|
| `Transform3D get_bone_pose(int index)` | `Transform3D` | Pose relative to parent. |
| `void set_bone_pose(int index, Transform3D pose)` | – | Set the pose relative to parent. |
| `Transform3D get_bone_global_pose(int index)` | `Transform3D` | Global pose of the bone. |
| `void set_bone_global_pose(int index, Transform3D pose)` | – | Set the global pose (ignores parent). |
| `Transform3D get_bone_global_pose_override(int index)` | `Transform3D` | Get the override pose if enabled. |
| `void set_bone_global_pose_override(int index, Transform3D pose, float amount, bool enabled)` | – | Override bone's global pose, with blending `amount` (0‑1). |

### Custom Poses

| Method | Returns | Description |
|--------|---------|-------------|
| `Transform3D get_bone_custom_pose(int index)` | `Transform3D` | Custom pose for the bone. |
| `void set_bone_custom_pose(int index, Transform3D pose)` | – | Set custom pose. |
| `bool get_bone_custom_pose_enabled(int index)` | `bool` | Is a custom pose active? |
| `void set_bone_custom_pose_enabled(int index, bool enabled)` | – | Enable / disable custom pose. |

### Skeleton Properties

| Method | Returns | Description |
|--------|---------|-------------|
| `void update_bones()` | – | Force the skeleton to recompute transforms. |
| `void apply_pose()` | – | Apply the pose to all bones (useful after custom poses). |
| `bool is_bone_name_unique(String name)` | `bool` | Checks that a name is not already used. |
| `void set_bone_name(int index, String name)` | – | Rename a bone. |

### Animation Helpers

| Method | Returns | Description |
|--------|---------|-------------|
| `AnimationTree get_animation_tree()` | `AnimationTree` | Returns the connected animation tree, if any. |
| `AnimationPlayer get_animation_player()` | `AnimationPlayer` | Returns the connected animation player, if any. |

---

## Example Usage

```gdscript
# Attach to a Skeleton3D node
extends Node3D

@onready var skeleton : Skeleton3D = $Skeleton3D

func _ready() -> void:
    # Print all bone names
    for i in range(skeleton.bone_count):
        print(skeleton.get_bone_name(i))

    # Override the pose of the right arm
    var arm_index = skeleton.get_bone_index("RightArm")
    var arm_pose = Transform3D(Basis().rotated(Vector3.UP, PI/4), Vector3(0, 0, 0))
    skeleton.set_bone_custom_pose(arm_index, arm_pose)
    skeleton.set_bone_custom_pose_enabled(arm_index, true)
```

---

## Notes

* **Rest pose** – If `use_rest` is `true`, the skeleton will use the pose stored in the `.tscn` file when the scene loads.  
* **Setup bones** – When editing in the editor, the “Setup” bones are visible only if `use_setup_bones` is `true`. They are used by the animation system to define the initial bone positions.  
* **Animation blending** – `set_bone_global_pose_override()` blends the override pose with the current pose based on the `amount` parameter (0.0 = ignore, 1.0 = full override).  
* **Global pose** – `get_bone_global_pose()` takes into account all parent transforms, but *does not* apply custom poses. If you need the full global pose including overrides, use `get_bone_global_pose_override()` or call `apply_pose()` first.

---

### See Also

* [AnimationTree](/classes/class_animationtree.html) – For high‑level animation blending.  
* [AnimationPlayer](/classes/class_animationplayer.html) – For playing animation resources.  
* [BoneAttachment](/classes/class_boneattachment.html) – Attach a node to a bone.  
* [SkeletonIK3D](/classes/class_skeletonik3d.html) – Inverse‑kinematic helper for skeletal animation.  

---