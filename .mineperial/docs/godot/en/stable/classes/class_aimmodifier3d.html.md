**AimModifier3D**  
===

> **Inheritance hierarchy**  
> `AimModifier3D` → `BoneConstraint3D<SkeletonModifier3D<Node3D<Node<Object>>>`  

---

## Overview

`AimModifier3D` is a simple version of a *LookAtModifier* that rotates a bone to face a reference bone.  
It is part of Godot’s animation system and is typically used within a **Skeleton** or **Skeleton3D** node.

---

## Usage

```gdscript
# Assuming you have a Skeleton3D node named `skeleton`
var aim_modifier = AimModifier3D.new()
aim_modifier.bone_name = "Hand"
aim_modifier.target_bone_name = "Target"
skeleton.add_child(aim_modifier)
```

> **Tip** – Attach the modifier to the bone that should aim towards the target bone.  
> The modifier automatically updates each frame in the animation tree.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bone_name` | `String` | `""` | Name of the bone that will be rotated. |
| `target_bone_name` | `String` | `""` | Name of the reference bone to look at. |
| `use_global_transform` | `bool` | `false` | If `true`, uses the global transform of the bones. |
| `use_local_transform` | `bool` | `true` | If `true`, uses the local transform of the bones. |
| `blend_speed` | `float` | `1.0` | Speed of blending between current and target orientation. |
| `up_axis` | `Vector3` | `Vector3.UP` | Axis that should stay aligned with world up. |

*(Full list of properties can be found in the Godot Editor’s inspector.)*

---

## Signals

- `value_changed()` – Emitted when the bone’s transform changes.

---

## Methods

| Method | Return | Description |
|--------|--------|-------------|
| `_ready()` | `void` | Initializes the modifier. |
| `update()` | `void` | Called each frame to adjust bone orientation. |
| `get_bone_index()` | `int` | Returns the index of `bone_name` in the skeleton. |
| `get_target_index()` | `int` | Returns the index of `target_bone_name`. |

---

## Example: Aim an arm toward the camera

```gdscript
extends Skeleton3D

func _process(delta):
    var aim = $AimModifier3D
    aim.bone_name = "Arm"
    aim.target_bone_name = "Camera"
    aim.blend_speed = 2.0
```

---

## Related Classes

- **BoneConstraint3D** – Base class for bone constraints.  
- **SkeletonModifier3D** – Base class for modifiers that affect skeleton bones.

---

### Notes

* The modifier only affects the local rotation of the specified bone.  
* Ensure the target bone exists; otherwise, the modifier will silently fail.  
* For advanced usage, combine `AimModifier3D` with other bone constraints or animation blending.

---

*For further details, refer to the Godot Engine class reference or the official documentation at [Godot Docs – AimModifier3D](https://docs.godotengine.org/en/stable/classes/class_aimmodifier3d.html).*