**OpenXRHand**  
*Deprecated: Use `XRHandModifier3D` instead.*

---

## Inheritance
```
OpenXRHand inherits from Node3D
```

## Description
`OpenXRHand` is a node that supports hand and finger tracking in OpenXR. It provides access to hand joint data, hand pose information, and allows developers to use XR hand tracking features in Godot projects.

> **Note:** The class has been marked as deprecated in favour of `XRHandModifier3D`.

---

### Signals
| Signal | Description |
|--------|-------------|
| `hand_tracking_started` | Emitted when hand tracking begins. |
| `hand_tracking_stopped` | Emitted when hand tracking ends. |
| `hand_pose_changed` | Emitted when the hand pose changes. |

*(Signal parameters are not listed in this excerpt.)*

---

### Methods
| Method | Return Type | Description |
|--------|-------------|-------------|
| `is_hand_tracked(hand_index: int) -> bool` | `bool` | Returns whether the specified hand is currently tracked. |
| `get_joint_position(joint_index: int) -> Vector3` | `Vector3` | Retrieves the world position of the specified joint. |
| `get_joint_rotation(joint_index: int) -> Quat` | `Quat` | Retrieves the world rotation of the specified joint. |
| `get_hand_pose(hand_index: int) -> Dictionary` | `Dictionary` | Returns a dictionary describing the pose of the specified hand. |

*(The complete list of methods, including arguments and return types, can be found in the full Godot documentation.)*

---

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hand_index` | `int` | `0` | Index of the hand to track (e.g., left or right). |
| `tracking_enabled` | `bool` | `true` | Whether hand tracking is enabled. |

*(Additional properties may be available in the full reference.)*

---

### Example Usage (GDScript)

```gdscript
extends OpenXRHand

func _ready():
    if is_hand_tracked(0):
        var position = get_joint_position(0)
        print("Palm position:", position)
```

---

### Further Information
For the most up‑to‑date API, refer to the official Godot Engine documentation:

- [XR Hand Tracking](https://docs.godotengine.org/en/stable/tutorials/xr/hand_tracking.html)
- [XR Hand Modifier 3D](https://docs.godotengine.org/en/stable/classes/class_xrhandmodifier3d.html)

---