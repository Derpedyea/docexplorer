**LookAtModifier3D** – Godot Engine documentation  
==============================================

> *Inherits:* `SkeletonModifier3D` → `Node3D` → `Node` → `Object`

> **The `LookAtModifier3D` rotates a bone to look at a target node.**  
> It is useful for making characters look toward a point of interest (e.g. a player, a camera, an enemy, etc.) during gameplay or animation.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `target` | `NodePath` | `""` | Path to the node that the bone should look at. |
| `bone_name` | `String` | `""` | Name of the bone this modifier will act on. |
| `look_at` | `Vector3` | `Vector3(0, 0, 1)` | The local axis of the bone that should point at the target. |
| `up_axis` | `Vector3` | `Vector3(0, 1, 0)` | Axis used to keep the bone's up direction stable. |
| `use_local` | `bool` | `true` | Whether to calculate the target transform in local or global space. |
| `smooth` | `bool` | `false` | Enables smooth interpolation between current and target orientations. |
| `speed` | `float` | `5.0` | Interpolation speed when `smooth` is enabled. |

> *All properties are exported and can be edited in the editor inspector or via code.*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `void set_target(NodePath target)` | `set_target(target)` | Sets the node to look at. |
| `NodePath get_target() const` | `get_target()` | Returns the current target path. |
| `void set_bone_name(String name)` | `set_bone_name(name)` | Sets the bone that will be rotated. |
| `String get_bone_name() const` | `get_bone_name()` | Returns the bone name. |
| `void _process(double delta)` | `_process(delta)` | Called each frame; updates the bone rotation. |
| `void _physics_process(double delta)` | `_physics_process(delta)` | Optional physics‑based update (if enabled). |

> **Tip:** If you need to update the bone immediately (e.g., after a scene reload), call `force_update()` (if such method exists in the base class) or simply change a property to trigger a refresh.

---

## Signals

| Signal | Description |
|--------|-------------|
| `target_changed()` | Emitted when the `target` property is modified. |
| `bone_changed()` | Emitted when the `bone_name` property changes. |

---

## Example Usage

```gdscript
# A simple script that makes an enemy head look at the player.

@tool
extends LookAtModifier3D

@export var bone_name: String = "Head"
@export var player_path: NodePath

func _ready() -> void:
    set_target(player_path)
    set_bone_name(bone_name)
```

1. **Add a `LookAtModifier3D` node** to your character scene.  
2. Set `bone_name` to the name of the bone you want to rotate (e.g., `"Head"`).  
3. Assign a `NodePath` to `player_path` (e.g., `"../Player"`).  
4. The modifier will automatically rotate the specified bone each frame so that it points toward the player.

---

## Related Nodes & Classes

- `Skeleton3D` – Parent class for handling bone structures.  
- `SkeletonModifier3D` – Base class for all skeleton modifiers.  
- `LookAtModifier` – 2D variant for `Skeleton2D` nodes.

---

### Further Reading

- [SkeletonModifier3D](https://docs.godotengine.org/en/stable/classes/class_skeletonmodifier3d.html) – Overview of all modifier types.  
- [3D Animation](https://docs.godotengine.org/en/stable/tutorials/animation/index.html) – Using modifiers in character animation pipelines.

---