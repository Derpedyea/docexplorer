**Retargeting 3D Skeletons**  
*Godot Engine Documentation – stable*

---

# Overview

The article explains how to share animations between different 3‑D skeletons in Godot.  
It covers:

- The concept of **transform tracks** (position/rotation/scale) and nodepaths.
- How to create and use **AnimationPlayer** tracks for bone animation.
- Setting up **Skeleton** nodes, **AnimationTree** and blending.
- Practical steps for retargeting a 3‑D character to another skeleton.

---

## Prerequisites

- Godot Engine 3.5 or newer (4.x also works with minor differences).
- Basic knowledge of 3‑D animation, bones, and the Godot animation system.

---

## Step‑by‑Step Guide

1. **Import the Source Animation**
   * Bring in the source model and its animation (e.g. from FBX/BVH).

2. **Create the Target Skeleton**
   * Build or import the target bone hierarchy.
   * Ensure bone names match the source where possible.

3. **Set up an AnimationPlayer**
   * Add an `AnimationPlayer` node to the target skeleton.
   * Create a new animation track for each bone you want to retarget.

4. **Map Nodepaths to Bones**
   * In each track, set the nodepath to the corresponding bone.
   * Adjust the track properties (e.g., interpolation, loop).

5. **Copy Animation Data**
   * Use the `AnimationTree` or export‑import utilities to copy keyframes.
   * Re‑bind the animation to the target skeleton.

6. **Test & Refine**
   * Play the animation; tweak bone positions and scales.
   * Use the animation editor’s “Blend” feature to smooth transitions.

---

## Code Snippet

```gdscript
# Example: Retarget an AnimationPlayer to a new Skeleton
var source_anim : Animation = preload("res://source_anim.tres")
var target_skeleton : Skeleton = $TargetSkeleton

var target_anim = Animation.new()
for track_idx in range(source_anim.get_track_count()):
    var track_type = source_anim.track_get_type(track_idx)
    var path = source_anim.track_get_path(track_idx)
    target_anim.add_track(track_type)
    target_anim.track_set_path(track_idx, path)

    for key_idx in range(source_anim.track_get_key_count(track_idx)):
        var time = source_anim.track_get_key_time(track_idx, key_idx)
        var value = source_anim.track_get_key_value(track_idx, key_idx)
        target_anim.track_insert_key(track_idx, time, value)

$AnimationPlayer.add_animation("retargeted", target_anim)
```

---

## Tips & Tricks

- **Bone Naming Convention**: Align bone names between source and target to minimize manual mapping.
- **Scale Differences**: If skeletons have different scale, adjust the root transform or use a helper `Skeleton` node.
- **Animation Retargeting Tools**: Godot’s built‑in animation retargeting helper (`SkeletonImporter`) can automate many steps.
- **Performance**: For many instances, consider using `AnimationTree` and `AnimationNodeBlendTree`.

---

## Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| Animation plays but bones look wrong | Bone hierarchy mismatched | Rename bones or adjust nodepaths |
| Missing animation after import | Unsupported format | Re‑export from source with FBX/BVH |
| Slow playback | Too many keyframes | Use interpolation or reduce keyframe density |

---

## Further Reading

- [Animation Editor Documentation](https://docs.godotengine.org/en/stable/tutorials/animation/animation_player.html)
- [Skeleton Node Reference](https://docs.godotengine.org/en/stable/classes/class_skeleton.html)
- [AnimationTree Node](https://docs.godotengine.org/en/stable/classes/class_animationtree.html)

---

*For detailed step‑by‑step visuals, refer to the full online documentation.*