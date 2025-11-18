# XRHandModifier3D

`XRHandModifier3D` is a **Node3D** that drives a hand skeleton from XR hand‑tracking data.  
It inherits from [`SkeletonModifier3D`](../classes/class_skeletonmodifier3d.html), which in turn derives from `Node3D`, `Node`, and `Object`.

---

## Description

This node uses hand‑tracking data from an `XRHandTracker` to pose the bones of a hand skeleton.  
It updates the skeleton each frame based on the current hand pose reported by the XR device.

---

## Inheritance Tree

```
Object
└── Node
    └── Node3D
        └── SkeletonModifier3D
            └── XRHandModifier3D
```

---

## Properties

| Property            | Type          | Default | Description |
|---------------------|---------------|---------|-------------|
| `hand`              | `int` (enum `XRHand`) | `XRHand.LEFT` | Which hand is being tracked (left or right). |
| `hand_tracker`      | `XRHandTracker` | `null` | Reference to the hand tracker that provides pose data. |
| `skeleton`          | `Skeleton3D` | `null` | The skeleton this modifier will drive. (Inherited from `SkeletonModifier3D`). |
| `use_global_transform` | `bool` | `false` | If true, uses the global transform of the hand bones when applying the pose. |

> **Note:** All properties are exported, so they can be set from the editor or via code.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `_process` | `void _process(float delta)` | Called each frame to update bone transforms based on the latest hand pose. |
| `set_skeleton` | `void set_skeleton(Skeleton3D skeleton)` | Assigns the skeleton to modify. |
| `get_bone_position` | `Vector3 get_bone_position(int bone_index)` | Returns the current world‑space position of the specified bone. |
| `get_bone_rotation` | `Quaternion get_bone_rotation(int bone_index)` | Returns the current world‑space rotation of the specified bone. |
| `reset_bone_transforms` | `void reset_bone_transforms()` | Resets all modified bones to the skeleton’s default pose. |

> The above list reflects the public API available in Godot 4.3.  
> For the full API reference, see the generated documentation for each method in the editor.

---

## Signals

| Signal | Description |
|--------|-------------|
| *(none)* | `XRHandModifier3D` does not emit any custom signals. |

---

## Typical Usage

```gdscript
# Create the hand modifier and configure it
var hand_mod = XRHandModifier3D.new()
hand_mod.hand = XRHand.RIGHT           # Track the right hand
hand_mod.hand_tracker = XRServer.get_tracker_for_hand(XRHand.RIGHT)
hand_mod.skeleton = $HandSkeleton      # The Skeleton3D node to animate

# Add to the scene
add_child(hand_mod)
```

The modifier automatically updates every frame, applying the latest hand pose to the skeleton.

---

## Related Nodes

- [`XRFaceModifier3D`](../classes/class_xrfacemodifier3d.html) – Drives a face mesh from XR face tracking data.  
- [`XRController3D`](../classes/class_xrcontroller3d.html) – Handles controller input and pose.  

---

## Reference Links

- [XRHandTracker](../classes/class_xrhandtracker.html) – The tracking backend providing hand pose data.  
- [SkeletonModifier3D](../classes/class_skeletonmodifier3d.html) – Base class for modifiers that change a skeleton’s pose.  

---