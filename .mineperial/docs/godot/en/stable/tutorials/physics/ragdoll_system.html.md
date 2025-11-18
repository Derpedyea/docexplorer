**Ragdoll System – Godot Engine Documentation**  
*(Extracted and reformatted from the official Godot documentation page)*  

---

## 1. Overview

Since Godot 3.1 the engine includes support for ragdoll physics.  
A ragdoll is a fully‑physics based body that mimics the behaviour of a living character after death or a sudden impact.  
The system relies on the 3‑D skeleton and a set of **jointed rigid bodies** to create realistic, procedurally animated physics responses.

---

## 2. Prerequisites

| Item | Description |
|------|-------------|
| **Godot 3.1+** | The ragdoll feature is available from version 3.1 onwards. |
| **3‑D Skeleton** | A `Skeleton` node with a proper bone hierarchy is required. |
| **RigidBody / KinematicBody** | Each bone that should be part of the ragdoll needs a physics body. |
| **Joint** | `Joint3D` or its derived types (`PinJoint`, `HingeJoint`, etc.) connect the bodies. |

---

## 3. Basic Setup

1. **Create a Skeleton** – Import a character model or build one inside Godot.  
2. **Add Rigid Bodies** – For every bone that will participate in the ragdoll, add a `RigidBody3D` and position it at the bone's transform.  
3. **Attach Bodies to the Skeleton** – Use `BoneAttachment3D` or set the body’s `owner` property to the corresponding bone.  
4. **Create Joints** – For each parent‑child bone relation, add a joint that connects the two bodies.  
5. **Disable Animation** – When switching to ragdoll mode, disable the skeleton's animation or blend it with physics.  
6. **Enable Physics** – Set `RigidBody.mode` to `MODE_RIGID` or `MODE_PHYSICS` as appropriate.

---

## 4. Example: Turning a Character into a Ragdoll

```gdscript
# Assuming `skel` is a Skeleton3D node
func enable_ragdoll():
    for bone_idx in skel.get_bone_count():
        var bone_name = skel.get_bone_name(bone_idx)
        var body = RigidBody3D.new()
        body.name = bone_name + "_rb"
        body.transform = skel.get_bone_global_pose(bone_idx)
        add_child(body)

        # Attach body to the bone
        var attach = BoneAttachment3D.new()
        attach.bone_name = bone_name
        attach.add_child(body)
        add_child(attach)

        # Create joint to parent
        if bone_idx > 0:
            var parent_bone = skel.get_bone_parent(bone_idx)
            var parent_body = get_node(parent_bone + "_rb")
            var joint = PinJoint3D.new()
            joint.node_a = body
            joint.node_b = parent_body
            add_child(joint)

    # Disable animation
    skel.set_animation_process_mode(AnimationPlayer.ANIMATION_PROCESS_NONE)
```

---

## 5. Tips & Common Pitfalls

| Issue | Fix |
|-------|-----|
| Bones float or jitter | Increase mass or enable `Sleeping` state for static bones. |
| Ragdoll is too stiff | Lower `Joint` damping or use `SoftBody` if available. |
| Animation continues to override physics | Ensure animation mode is switched off before enabling ragdoll. |
| Performance hit | Limit the number of active physics bodies; use `set_collision_layer` to reduce broad‑phase checks. |

---

## 6. Advanced Topics

- **Blend Between Animation and Ragdoll** – Use `AnimationPlayer`’s blend features or manually blend bone transforms.
- **Re‑animating After Ragdoll** – Capture the final pose, set the skeleton to that pose, then resume normal animation.
- **Custom Physics Materials** – Adjust friction and bounce per body to better mimic tissue or armor.
- **Using `CharacterBody3D`** – Combine ragdoll with character movement by switching between `KinematicBody3D` and `RigidBody3D`.

---

## 7. Further Reading

- [Godot Physics Documentation](https://docs.godotengine.org/en/stable/physics/)
- [Skeleton3D Node](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)
- [RigidBody3D Node](https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html)
- [Joint Nodes](https://docs.godotengine.org/en/stable/classes/class_joint3d.html)

---