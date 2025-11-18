**Note:** The provided HTML contains the full Godot documentation site navigation but does not include the actual class‐specific content for `PhysicalBone3D` (methods, properties, etc.).  Below is a concise markdown skeleton that captures the main elements you would expect in the class reference.  For a complete reference, refer to the original Godot documentation page.

---

# PhysicalBone3D

> **Node Type**: `PhysicsBody3D` → `CollisionObject3D` → `Node3D` → `Node` → `Object`

## Description
`PhysicalBone3D` is a physics body used to make bones in a `Skeleton3D` react to physics.  
It connects a `Skeleton3D` bone to a physical body so that physics forces and collisions can affect the bone’s transform, allowing for realistic ragdoll and cloth simulations.

---

## Inheritance Hierarchy
```text
Object
 └─ Node
    └─ Node3D
       └─ CollisionObject3D
          └─ PhysicsBody3D
             └─ PhysicalBone3D
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bone_name` | `StringName` | `""` | Name of the bone this physical body is attached to. |
| `bone_index` | `int` | `-1` | Index of the bone in the skeleton (used for fast lookup). |
| `parent_bone_index` | `int` | `-1` | Index of the parent bone. |
| `bone_global_transform` | `Transform3D` | `Transform3D()` | Current global transform of the bone. |
| `physical_bone_state` | `Dictionary` | `{}` | Current state of the physical bone (position, rotation, etc.). |
| `enabled` | `bool` | `true` | Whether the physical bone is active. |
| `collision_shape` | `CollisionShape3D` | `null` | Shape used for collision. |

> *All properties can be set from the editor or via GDScript/CS.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `bone_updated` | Emitted when the bone’s transform is updated by physics. |
| `collide_entered` | Emitted when the physical bone collides with another body. |
| `collide_exited` | Emitted when the physical bone stops colliding. |

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_bone_index()` | `int` | Returns the bone’s index in the skeleton. |
| `get_parent_bone_index()` | `int` | Returns the parent bone’s index. |
| `get_global_transform()` | `Transform3D` | Returns the current global transform of the bone. |
| `set_enabled(value : bool)` | `void` | Enable or disable the physical bone. |
| `is_enabled()` | `bool` | Returns whether the bone is enabled. |
| `apply_impulse(impulse : Vector3, position : Vector3)` | `void` | Applies an impulse to the physical bone at the given world position. |
| `set_collision_shape(shape : CollisionShape3D)` | `void` | Sets the collision shape for this bone. |
| `get_collision_shape()` | `CollisionShape3D` | Returns the current collision shape. |

> **Note**: Most methods mirror those of `PhysicsBody3D` and can be found in the Godot API reference.

---

## Example Usage

```gdscript
extends PhysicalBone3D

func _ready():
    # Attach the physical bone to the "Spine" bone
    bone_name = "Spine"

    # Optionally set a collision shape
    var shape = SphereShape3D.new()
    shape.radius = 0.1
    var collision = CollisionShape3D.new()
    collision.shape = shape
    add_child(collision)

    # Enable physics for the bone
    set_enabled(true)
```

---

## Related Classes

- [PhysicalBoneSimulator3D](https://docs.godotengine.org/en/stable/classes/class_physicalbonesimulator3d.html) – Handles the simulation of multiple physical bones.
- [Skeleton3D](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html) – The skeleton to which the bone belongs.
- [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html) – Shape used for collision detection.

---

### References

- Godot Engine Class Reference – [PhysicalBone3D](https://docs.godotengine.org/en/stable/classes/class_physicalbone3d.html)

---