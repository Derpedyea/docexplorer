**PhysicalBone2D**  
---  

A `RigidBody2D`‑derived node that allows a `Bone2D` inside a `Skeleton2D` to interact with 2‑D physics.  
It works by attaching to a bone via the `bone_name` property and synchronizing its transform with the skeleton each physics step.  
This node is primarily used for rag‑doll or physics‑driven animations.

---

## Inheritance
```
PhysicalBone2D
 └─ RigidBody2D
     └─ PhysicsBody2D
         └─ CollisionObject2D
             └─ Node2D
                 └─ CanvasItem
                     └─ Node
                         └─ Object
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `collision_entered(body: Object)` | Emitted when another body collides with this `PhysicalBone2D`. |
| `collision_exited(body: Object)` | Emitted when a body stops colliding. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bone_name` | `String` | `""` | Name of the `Bone2D` that this node should follow. |
| `use_rigid_body` | `bool` | `true` | If `true`, the bone is updated based on the physics simulation; otherwise, it follows the skeleton directly. |
| `fixed_rotation` | `bool` | `false` | When `true`, the bone’s rotation is locked during simulation. |
| `collision_layer` | `int` | `1` | Physics collision layer(s) this body belongs to. |
| `collision_mask` | `int` | `1` | Layers that this body will detect collisions against. |

*All other properties from `RigidBody2D` and its parents are inherited unchanged.*

---

## Methods

### `_ready()`

Called when the node is added to the scene. It automatically connects to the parent `Skeleton2D` and sets up the initial bone transform.

### `_physics_process(delta: float)`

Synchronizes the bone’s transform with the physics simulation each frame.  
If `use_rigid_body` is `false`, it bypasses the simulation and applies the skeleton’s current bone transform.

### `set_bone_name(name: String)`

Sets the target bone name. The node will look for this bone in the parent `Skeleton2D` and bind to it.

### `get_bone_name() -> String`

Returns the currently bound bone name.

### `sync_to_bone()`

Manually forces the node to copy the current transform from the assigned bone. Useful for resetting the physics state.

### `reset_physics()`

Resets the body’s velocity and angular velocity to zero.

---

## Example Usage

```gdscript
# Add a PhysicalBone2D to a Skeleton2D
var phys_bone = PhysicalBone2D.new()
phys_bone.bone_name = "Arm"
phys_bone.position = Vector2.ZERO
phys_bone.rotation = 0
phys_bone.mass = 1
phys_bone.fixed_rotation = false
add_child(phys_bone)
```

In the editor, you can also attach a `PhysicalBone2D` node to a bone via the inspector:

1. Select the `Skeleton2D`.  
2. Add a child `PhysicalBone2D`.  
3. In the inspector, set **Bone Name** to the target bone.  
4. Adjust physics parameters (mass, friction, etc.) as desired.

---

## Related Nodes

- **Skeleton2D** – The parent node that provides bones.  
- **Bone2D** – A transform node that represents a single bone.  
- **PhysicalBone3D** – 3‑D counterpart for `Skeleton3D`.

---

### Reference

- Official Godot 4.3 documentation: <https://docs.godotengine.org/en/stable/classes/class_physicalbone2d.html>  

---