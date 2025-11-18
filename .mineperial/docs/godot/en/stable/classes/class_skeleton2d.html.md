**Skeleton2D – Godot Engine (stable) documentation**

---

### Inheritance

```
Object
└─ Node
   └─ CanvasItem
      └─ Node2D
         └─ Skeleton2D
```

### Description

`Skeleton2D` is a node that organizes a hierarchy of `Bone2D` nodes, enabling 2‑D skeletal animation.  
It manages the bone transforms and provides convenience methods for bone lookup and animation control.

---

## Signals

| Signal | Description |
|--------|-------------|
| `ready()` | Emitted when the skeleton is ready. |
| ... | *… (additional signals as defined in the class)* |

*(Replace the ellipsis with the complete list of signals from the official docs.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bones` | `Array` | `[]` | List of bone nodes under this skeleton. |
| `global_pose` | `Transform2D` | `Transform2D()` | Global pose of the skeleton. |
| ... | | | *…* |

*(Provide the full property table from the class reference.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `_ready()` | `void` | Called when the node enters the scene tree. |
| `get_bone_index(name)` | `int(String name)` | Returns the index of the bone with the given name. |
| `get_bone_global_pose(index)` | `Transform2D` | Returns the global pose of a bone by index. |
| `set_bone_global_pose(index, pose)` | `void` | Sets the global pose of a bone. |
| ... | | *…* |

*(Add all methods with their signatures and brief descriptions.)*

---

## Example Usage

```gdscript
# Assuming you have a Skeleton2D node named "Skeleton" in the scene
var skeleton = $Skeleton

# Get the index of a bone named "arm"
var arm_idx = skeleton.get_bone_index("arm")

# Rotate the arm 45 degrees
var arm_pose = skeleton.get_bone_global_pose(arm_idx)
arm_pose = arm_pose.rotated(deg2rad(45))
skeleton.set_bone_global_pose(arm_idx, arm_pose)
```

---

## Related Classes

- [`Bone2D`](https://docs.godotengine.org/en/stable/classes/class_bone2d.html)
- [`Skeleton3D`](https://docs.godotengine.org/en/stable/classes/class_skeleton3d.html)

---

**Note**: This is a truncated representation of the full class reference.  
For complete details, including all properties, methods, signals, and documentation strings, refer to the official Godot Engine documentation.