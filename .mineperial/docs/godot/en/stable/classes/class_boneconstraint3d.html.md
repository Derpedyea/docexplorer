**BoneConstraint3D**

> A node that may modify a `Skeleton3D`'s bone with associated constraints.  
> *Inherited from:* `SkeletonModifier3D` → `Node3D` → `Node` → `Object`  
> *Inherited by:* `AimModifier3D`, `ConvertTransformModifier3D`, `CopyTransformModifier3D`

---

### Overview

`BoneConstraint3D` is part of Godot’s skeletal animation system.  
It attaches to a `Skeleton3D` node and can apply constraints (such as aim, transform conversion, or copy transforms) to individual bones.

> **Link:** [Godot Engine Documentation – BoneConstraint3D](https://docs.godotengine.org/en/stable/classes/class_boneconstraint3d.html)

---

### Key Properties

| Property | Type | Description |
|----------|------|-------------|
| `bone_name` | `StringName` | The name of the bone to constrain. |
| `enabled` | `bool` | Whether the constraint is active. |
| `strength` | `float` | Influences how strongly the constraint affects the bone. |

*(Note: The full property list can be found in the official docs.)*

---

### Important Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_bone(name)` | `void set_bone(StringName name)` | Assigns the bone to which the constraint will be applied. |
| `get_bone()` | `StringName get_bone()` | Returns the current bone name. |
| `set_strength(value)` | `void set_strength(float value)` | Sets the constraint influence strength. |
| `get_strength()` | `float get_strength()` | Retrieves the current strength value. |

---

### Signals

- `body_entered(body)` – Emitted when a body enters the constraint area.  
- `body_exited(body)` – Emitted when a body exits the constraint area.

---

### Example Usage (GDScript)

```gdscript
extends BoneConstraint3D

func _ready() -> void:
    # Target bone named "arm"
    bone_name = "arm"
    strength = 1.0
    enabled = true
```

---

### References

- [SkeletonModifier3D Class](https://docs.godotengine.org/en/stable/classes/class_skeletonmodifier3d.html)  
- [AimModifier3D](https://docs.godotengine.org/en/stable/classes/class_aimmodifier3d.html)  
- [ConvertTransformModifier3D](https://docs.godotengine.org/en/stable/classes/class_converttransformmodifier3d.html)  
- [CopyTransformModifier3D](https://docs.godotengine.org/en/stable/classes/class_copytransformmodifier3d.html)  

---