**RootMotionView**  
<https://docs.godotengine.org/en/stable/classes/class_rootmotionview.html>

---  

RootMotionView is an editor‑only helper for setting up root motion in an `AnimationMixer`. Root motion refers to an animation technique where a mesh’s translation is driven by the animation rather than by physics or code.

### Inheritance
```
VisualInstance3D
└─ Node3D
   └─ Node
      └─ Object
```

> **Note:** This class is only available in the Godot editor; it does not appear in exported games.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `animation_player` | `AnimationPlayer` | `null` | The `AnimationPlayer` node that owns the animation clips. |
| `root_path` | `NodePath` | `""` | The path to the node that should receive the root motion translation. |
| `use_blend` | `bool` | `false` | Whether to blend root motion between multiple animations. |
| `blend_speed` | `float` | `5.0` | Speed of blending when `use_blend` is `true`. |

> **Tip:** These properties can be edited in the editor inspector panel.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `animation_started` | `String animation_name` | Emitted when an animation starts playing. |
| `animation_finished` | `String animation_name` | Emitted when an animation finishes. |

---

## Methods

### `get_root_motion() → Transform3D`
Returns the current root motion transform calculated from the animation mixer.

### `apply_root_motion(delta: float) → void`
Applies the calculated root motion to the `root_path` node. Should be called in `_process()` or `_physics_process()`.

### `set_animation_player(player: AnimationPlayer) → void`
Associates an `AnimationPlayer` with this `RootMotionView`.

### `set_root_path(path: NodePath) → void`
Sets the node that will receive the root motion transform.

### `enable_blend(enable: bool) → void`
Enables or disables blending between root motions.

### `set_blend_speed(speed: float) → void`
Sets the blending speed (in units per second).

---

## Example Usage

```gdscript
# Assuming a scene with a RootMotionView node named "RootMotionView"
# and an AnimationPlayer node named "AnimPlayer"

@onready var root_motion_view = $RootMotionView
@onready var anim_player = $AnimPlayer

func _ready():
    root_motion_view.set_animation_player(anim_player)
    root_motion_view.set_root_path("Player")   # Node that should move
    root_motion_view.enable_blend(true)
    root_motion_view.set_blend_speed(10.0)

func _physics_process(delta):
    root_motion_view.apply_root_motion(delta)
```

This script ties a `RootMotionView` to an `AnimationPlayer` and applies root motion to the `Player` node during physics updates.

---

## Related Classes

- **AnimationPlayer** – Play and control animations.
- **AnimationMixer** – Combine multiple animations into a single stream.
- **Spatial** / **Node3D** – Basic 3D nodes that can receive transformations.

---

> **Reference**: See the official Godot Engine class reference for additional details and API changes.