**RetargetModifier3D**  
======================

*Inherits:* `SkeletonModifier3D<Node3D<Node<Object>>>`  

**Description**  
A modifier that transfers parent skeleton poses (or global poses) to child skeletons in model space, even when the two skeletons have different rest poses. It is primarily used to retarget animations from one character rig to another with differing bone hierarchies or rest positions.

---

### Overview

The `RetargetModifier3D` class is part of Godot’s animation system and provides a flexible way to blend or map poses between skeletons. It can be attached to any `Node3D` that contains a `Skeleton3D` node and will automatically keep the child skeleton in sync with the parent’s pose.

### Key Features

- **Pose Retargeting** – Automatically converts and applies poses from a source skeleton to a target skeleton.
- **Global Pose Option** – Supports transferring global (world‑space) poses.
- **Rest Pose Flexibility** – Handles different rest (bind) poses between the parent and child skeletons.

### Typical Usage

```gdscript
# Assuming `parent_skeleton` and `child_skeleton` are already added to the scene
var retargeter = RetargetModifier3D.new()
retargeter.set_source_skeleton(parent_skeleton)
retargeter.set_target_skeleton(child_skeleton)
add_child(retargeter)
```

After adding the `RetargetModifier3D` to the scene, it will automatically update the child skeleton’s pose every frame to match the parent skeleton’s current pose, respecting any differences in rest poses.

### Important Methods

| Method | Description |
|--------|-------------|
| `set_source_skeleton(skeleton : Skeleton3D)` | Sets the source skeleton to retarget from. |
| `get_source_skeleton() -> Skeleton3D` | Retrieves the current source skeleton. |
| `set_target_skeleton(skeleton : Skeleton3D)` | Sets the target skeleton to retarget to. |
| `get_target_skeleton() -> Skeleton3D` | Retrieves the current target skeleton. |
| `set_use_global_pose(use_global : bool)` | When `true`, uses the global pose of the source skeleton. |
| `is_using_global_pose() -> bool` | Checks if global pose is being used. |

### Signals

| Signal | Description |
|--------|-------------|
| `source_changed()` | Emitted when the source skeleton changes. |
| `target_changed()` | Emitted when the target skeleton changes. |

### Practical Example

Suppose you have two characters with different rigs (e.g., a humanoid and a robot). By attaching a `RetargetModifier3D` to the robot’s skeleton node and setting the human’s skeleton as the source, you can play a human animation on the robot, achieving a more realistic transfer without manually mapping every bone.

### Documentation References

- [SkeletonModifier3D](https://docs.godotengine.org/en/stable/classes/class_skeletonmodifier3d.html) – Base class for all skeleton modifiers.
- [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html) – The node that holds a 3D skeleton.

---

> **Tip**: For complex rigs with many bones, consider using the *SkeletonIK* or *AnimationTree* nodes in conjunction with `RetargetModifier3D` to fine‑tune the retargeting process.