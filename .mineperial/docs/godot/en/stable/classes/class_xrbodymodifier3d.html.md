**XRBodyModifier3D**  
======================

*Experimental: This class may be changed or removed in future versions.*

> **Inherits**: `SkeletonModifier3D < Node3D < Node < Object`

`XRBodyModifier3D` is a node that drives a 3D body mesh using data from an `XRBodyTracker`.  
It is intended for use with XR (AR/VR) projects that need to animate or update a character’s skeleton in real time based on motion‑tracking input.

---

### Basic Usage

1. **Add an `XRBodyTracker` node** to your scene and configure it to track a body or a set of joints.
2. **Add an `XRBodyModifier3D` node** as a child of a `Skeleton3D` node that represents the character.
3. **Connect the tracker to the modifier** (either via the inspector or in code).  
   ```gdscript
   var body_tracker = $XRBodyTracker
   var body_modifier = $XRBodyModifier3D
   body_modifier.set_tracker(body_tracker)
   ```
4. The modifier will automatically update the skeleton bones based on the tracker’s joint data.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tracker` | `XRBodyTracker` | `null` | The body tracker providing joint data. |
| `skeleton` | `Skeleton3D` | `null` | The skeleton to modify. |
| `sync_rate` | `int` | `60` | Number of times per second the skeleton is updated. |

---

### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_tracker(tracker: XRBodyTracker)` | `void` | Assign a body tracker. |
| `get_tracker()` | `XRBodyTracker` | Retrieve the current tracker. |
| `set_skeleton(skeleton: Skeleton3D)` | `void` | Assign the target skeleton. |
| `get_skeleton()` | `Skeleton3D` | Retrieve the assigned skeleton. |
| `set_sync_rate(rate: int)` | `void` | Set the update frequency. |
| `get_sync_rate()` | `int` | Retrieve the current update frequency. |

---

### Signals

| Signal | Description |
|--------|-------------|
| `body_updated` | Emitted each time the skeleton is updated based on the tracker data. |

---

### Example

```gdscript
extends XRBodyModifier3D

func _ready():
    # Assume the tracker and skeleton are already part of the scene
    var tracker = $XRBodyTracker
    var skeleton = $Skeleton3D
    set_tracker(tracker)
    set_skeleton(skeleton)
    set_sync_rate(90)  # 90 updates per second
```

---

### Notes

* The class is **experimental**; API surface may change in future Godot releases.
* Use with care in performance‑critical projects, as frequent skeleton updates can be costly.

---

**References**

* Godot Engine documentation – [XRBodyModifier3D](https://docs.godotengine.org/en/stable/classes/class_xrbodymodifier3d.html)  
* `XRBodyTracker` – see [XRBodyTracker Class Reference](https://docs.godotengine.org/en/stable/classes/class_xrbodytracker.html)  
* `Skeleton3D` – see [Skeleton3D Class Reference](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)