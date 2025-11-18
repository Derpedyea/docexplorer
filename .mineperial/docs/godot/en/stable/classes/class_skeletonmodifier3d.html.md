**SkeletonModifier3D**

---

**Inheritance**

- **SkeletonModifier3D**  
  → **Node3D**  
  → **Node**  
  → **Object**

**Inherited By**

- `BoneConstraint3D`
- `LookAtModifier3D`
- `ModifierBoneTarget3D`
- `PhysicalBoneSimulator3D`
- `RetargetModifier3D`
- `SkeletonIK3D`
- `SpringBoneSimulator3D`
- `XRBody...` *(list continues)*

---

### Description

`SkeletonModifier3D` is a node that can modify the skeleton of a `Skeleton3D` node. It serves as a base class for various modifier types such as IK, bone constraints, and physics‑based bone simulations. The node is typically attached as a child of a `Skeleton3D` or an inherited subclass and updates bone transforms in real‑time during the scene's physics or animation callbacks.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `target_bone` | `int` | `-1` | The index of the bone that this modifier will affect. |
| `enabled` | `bool` | `true` | Whether the modifier is active. |
| *…* | | | |

*(Full property list is available in the Godot API reference.)*

---

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `_process(delta)` | `void` | Override to perform per‑frame logic. |
| `apply()` | `void` | Apply the modification to the skeleton. |
| *…* | | |

*(Full method list is available in the Godot API reference.)*

---

### Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `modified` | | Emitted when the skeleton has been modified. |
| *…* | | |

---

### Usage Example (GDScript)

```gdscript
extends SkeletonModifier3D

func _ready():
    # Set the bone index to modify
    target_bone = $Skeleton3D.find_bone("Armature")
    enabled = true

func apply():
    if not enabled:
        return
    # Example: rotate the target bone by 45 degrees around Y
    var bone_transform = skeleton.get_bone_global_pose(target_bone)
    bone_transform.basis = bone_transform.basis.rotated(Vector3.UP, deg_to_rad(45))
    skeleton.set_bone_global_pose(target_bone, bone_transform)
```

---

### Related Classes

- [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html) – The node representing a 3D skeletal mesh.
- [SkeletonIK3D](https://docs.godotengine.org/en/stable/classes/class_skeletonik3d.html) – Inherits from `SkeletonModifier3D` to implement inverse kinematics.
- [PhysicalBoneSimulator3D](https://docs.godotengine.org/en/stable/classes/class_physicalbonesimulator3d.html) – Uses physics to simulate bone motion.

---