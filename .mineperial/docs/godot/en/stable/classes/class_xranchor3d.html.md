**XRAnchor3D – Godot Engine Documentation**  
*(stable version)*

---

## Overview
`XRAnchor3D` is an `XRNode3D` that represents a fixed point in the real world, identified by the AR platform. It allows a 3‑D node to be anchored to a specific world location so that its position and orientation stay in sync with the physical environment.

### Inheritance Hierarchy
```
Object
└─ Node
   └─ Node3D
      └─ XRNode3D
         └─ XRAnchor3D
```

---

## Description
The `XRAnchor3D` node maps a real‑world location (as determined by the AR platform) to a virtual 3‑D point. When placed in a scene, it will stay aligned with that physical spot, even if the user moves the device or the world changes. This is useful for placing virtual objects that need to remain fixed in the real world, such as virtual markers, anchors for spatial audio, or persistent AR content.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `anchor_name` | `String` | `""` | Optional name used to identify the anchor. |
| `position` | `Vector3` | `Vector3(0,0,0)` | The anchor’s position relative to the XR origin. |
| `rotation` | `Quaternion` | `Quaternion()` | The anchor’s rotation relative to the XR origin. |
| `scale` | `Vector3` | `Vector3(1,1,1)` | Scale applied to the anchor’s children. |

*Note: Some properties are read‑only and updated automatically by the AR subsystem.*

---

## Signals
| Signal | Arguments | Description |
|--------|-----------|-------------|
| `tracking_changed` | `bool is_tracking` | Emitted when the anchor’s tracking state changes. |
| `anchor_updated` | | Emitted when the anchor’s pose is updated. |

---

## Methods

| Method | Arguments | Returns | Description |
|--------|-----------|---------|-------------|
| `get_anchor_id()` | | `int` | Returns the unique identifier for the anchor. |
| `is_tracking()` | | `bool` | Returns whether the anchor is currently being tracked. |
| `get_anchor_pose()` | | `Transform3D` | Returns the latest pose of the anchor. |

*All methods are defined in C++ and exposed to GDScript/CS and GDExtension.*

---

## Usage Example (GDScript)

```gdscript
extends XRAnchor3D

func _ready():
    if is_tracking():
        print("Anchor is tracking")
    else:
        print("Anchor lost")

func _process(_delta):
    if tracking_changed.is_emitted():
        var pose = get_anchor_pose()
        print("New pose: ", pose)
```

---

## References

- [XRNode3D](class_xrnode3d.html) – Base class for all XR nodes.  
- [Node3D](class_node3d.html) – 3‑D node in the scene tree.  
- [ARCore / ARKit](https://docs.godotengine.org/en/stable/tutorials/xr/overview.html) – AR platform integration.  

---