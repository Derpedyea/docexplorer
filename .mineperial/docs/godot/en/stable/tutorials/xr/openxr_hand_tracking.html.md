**OpenXR Hand Tracking**  

*This is a section of the Godot Engine documentation that explains how to enable and use hand‑tracking support with the OpenXR plugin. The following markdown captures the structure and key information of the page, based on the available HTML.*

---

## Overview

OpenXR hand tracking allows you to map a user’s physical hand movements to a virtual representation.  
The documentation is split into a few logical sections:

1. **Introduction** – Explains what hand tracking is and how Godot’s implementation works.  
2. **Enabling the Feature** – How to turn on hand tracking in the OpenXR settings.  
3. **Accessing Hand Data** – How to retrieve joint positions, orientations, and hand‑state data.  
4. **Example Usage** – A short code snippet showing how to use the data to drive a 3D hand model.  
5. **Known Issues / Limitations** – Current constraints and platform‑specific quirks.  
6. **Further Reading** – Links to other OpenXR topics in Godot (body tracking, composition layers, etc.).

---

## 1. Introduction

Hand tracking is not a single, universally‑accepted definition.  
In practice, it involves:

* Detecting the hand’s position, rotation, and the relative state of each finger (pinch, grasp, etc.).
* Providing a set of *hand joints* that can be queried at runtime.

Godot’s OpenXR plugin exposes a `XRHandTracker` interface that can be accessed via GDScript or C#.  

---

## 2. Enabling Hand Tracking

1. **Open Project Settings** → *XR → OpenXR*  
2. Under **Input** tab, enable **Hand Tracking**.
3. Specify the **Handedness** (Left/Right or Both) that you want to track.

> **Tip:** Only one hand can be tracked at a time on certain devices; check your hardware documentation.

---

## 3. Accessing Hand Data

### GDScript

```gdscript
# Assuming you have an XRController node named "XRController"
var hand_tracker = XRController.get_interface().get_hand_tracker(XRController.INTERFACE_LEFT)

func _process(delta):
    if hand_tracker.is_tracking():
        var joints = hand_tracker.get_joint_positions()
        for i in range(joints.size()):
            # Use joints[i] (Vector3) to animate a hand mesh or for collision detection
```

### C#

```csharp
var handTracker = XRController.GetInterface().GetHandTracker(XRController.InterfaceLeft);
if (handTracker.IsTracking) {
    var positions = handTracker.GetJointPositions();
    foreach (var pos in positions) {
        // Position handling
    }
}
```

- **`is_tracking()` / `IsTracking`** – Returns `true` if the hand is currently being detected.  
- **`get_joint_positions()` / `GetJointPositions()`** – Returns an array of 21 `Vector3` positions (one per joint).  
- **`get_joint_orientations()`** – Returns an array of `Quat` orientations for each joint.

---

## 4. Example: Driving a 3D Hand Model

1. Import a hand skeleton mesh (e.g., `res://models/hand.glb`).  
2. Create a `Skeleton3D` node with the imported hand.  
3. In `_process`, update each bone’s transform based on the joint data.

```gdscript
var skeleton : Skeleton3D = $HandSkeleton

func _process(delta):
    if hand_tracker.is_tracking():
        var positions = hand_tracker.get_joint_positions()
        for i in range(positions.size()):
            skeleton.set_bone_pose(i, Transform3D.IDENTITY
                .translated(positions[i]))
```

---

## 5. Known Issues / Limitations

| Platform | Issue | Work‑around |
|----------|-------|-------------|
| **Meta Quest 2** | Hand tracking not available on certain game modes | Use the `XRSession` flags to enable hand tracking |
| **Windows Mixed Reality** | Joint data may be jittery | Apply low‑pass filtering on the joint positions |
| **WebXR** | Hand tracking support is experimental | Test with the latest browsers and update the OpenXR plugin |

> **Note:** The joint index mapping follows the OpenXR specification and may differ from other engines. Verify with your target device’s SDK.

---

## 6. Further Reading

- **[OpenXR body tracking]**(../openxr_body_tracking.html) – Learn how to track full body pose.  
- **[OpenXR composition layers]**(../openxr_composition_layers.html) – Manage rendering layers with hand data.  
- **[XR documentation index]**(../index.html) – Comprehensive list of XR features.

---

### References

* Godot Engine 4.x Documentation – *OpenXR hand tracking*  
* OpenXR Specification – Joint indices and coordinate systems  
* Device SDK documentation (e.g., Meta Quest, Windows MR, Valve Index)  

---