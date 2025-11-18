**Bone2D – Godot Engine (stable) documentation**

---

### Overview
`Bone2D` is a 2‑D joint node that works with `Skeleton2D` to control and animate other nodes.  
It is a subclass of `Node2D`, which in turn inherits from `CanvasItem` → `Node` → `Object`.

### Signals
| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the bone’s transform changes. |

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `bone_index` | `int` | `-1` | The index of the bone in the owning `Skeleton2D`. |
| `use_parent_xform` | `bool` | `true` | If `true`, the bone’s transform will be affected by its parent. |
| `hide` | `bool` | `false` | Hide the bone from the scene tree (useful for debugging). |
| `debug_draw` | `bool` | `false` | Draws the bone’s bounding box and children. |
| `offset` | `Vector2` | `Vector2(0, 0)` | Local offset from the parent’s origin. |
| `rotation` | `float` | `0` | Local rotation (in degrees). |
| `scale` | `Vector2` | `Vector2(1, 1)` | Local scale. |
| `length` | `float` | `0` | Length of the bone (used for drawing and debugging). |

> **Note:** Many properties are inherited from `Node2D` (`position`, `rotation`, `scale`, `modulate`, etc.).

### Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `get_bone_index()` | `int` | Returns the bone index. |
| `set_bone_index(index: int)` | `void` | Sets the bone index. |
| `get_skeleton()` | `Skeleton2D` | Returns the owning skeleton. |
| `set_skeleton(skeleton: Skeleton2D)` | `void` | Assigns a skeleton to this bone. |
| `is_disabled()` | `bool` | Checks if the bone is disabled. |
| `set_disabled(disabled: bool)` | `void` | Disables or enables the bone. |
| `get_rest()` | `Transform2D` | Returns the rest transform. |
| `set_rest(rest: Transform2D)` | `void` | Sets the rest transform. |
| `get_global_transform()` | `Transform2D` | Global transform of the bone. |
| `set_global_transform(transform: Transform2D)` | `void` | Sets global transform (does not affect children). |
| `set_position(position: Vector2)` | `void` | Sets the bone’s local position. |
| `get_position()` | `Vector2` | Retrieves the local position. |
| `set_rotation(rotation: float)` | `void` | Sets local rotation in degrees. |
| `get_rotation()` | `float` | Gets local rotation. |
| `set_scale(scale: Vector2)` | `void` | Sets local scale. |
| `get_scale()` | `Vector2` | Gets local scale. |
| `get_global_position()` | `Vector2` | Global position. |
| `set_global_position(position: Vector2)` | `void` | Sets global position. |
| `get_global_rotation()` | `float` | Global rotation. |
| `set_global_rotation(rotation: float)` | `void` | Sets global rotation. |
| `get_global_scale()` | `Vector2` | Global scale. |
| `set_global_scale(scale: Vector2)` | `void` | Sets global scale. |
| `get_parent_bone()` | `int` | Returns the parent bone index. |
| `get_child_bones()` | `Array[int]` | Returns child bone indices. |

> **Tip:** Use the `Bone2D` node in combination with `Skeleton2D` to create rigged characters or dynamic 2‑D animations.  

### Usage Example
```gdscript
# Assuming a Skeleton2D with two bones: "root" (index 0) and "arm" (index 1)
var arm_bone = Bone2D.new()
arm_bone.set_bone_index(1)
arm_bone.set_position(Vector2(10, -20))
arm_bone.set_rotation(45)
add_child(arm_bone)
```

### Related Classes
- [Skeleton2D](https://docs.godotengine.org/en/stable/classes/class_skeleton2d.html)
- [BoneAttachment2D](https://docs.godotengine.org/en/stable/classes/class_boneattachment2d.html)

---

*For more details, refer to the full Godot class reference page for **Bone2D**.*