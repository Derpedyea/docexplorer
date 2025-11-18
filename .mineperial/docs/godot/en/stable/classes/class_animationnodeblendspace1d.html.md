# AnimationNodeBlendSpace1D

A **`AnimationNodeBlendSpace1D`** is an `AnimationRootNode` that lays out a set of animation nodes on a one‑dimensional virtual axis and crossfades between the two nearest nodes.  
It is typically used in an `AnimationTree` to blend between animations (e.g. idle, walk, run) based on a single scalar value such as a character’s speed or direction.

> **Inheritance hierarchy**  
> `Object` → `Resource` → `AnimationNode` → `AnimationRootNode` → **`AnimationNodeBlendSpace1D`**

---

## Description

- The node holds an ordered list of animation samples.  
- Each sample is a reference to an `AnimationRootNode` and has an associated position on the axis.  
- The blend position is a float value; the node automatically blends between the two nearest samples, using linear interpolation of the sample weights.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `blend_position` | `float` | `0.0` | Current position along the blending axis. |
| `snap` | `bool` | `false` | If `true`, the blend position will snap to the nearest sample’s position. |
| `interpolation` | `bool` | `true` | Determines whether to interpolate between samples (`true`) or use a hard step (`false`). |
| `loop` | `bool` | `false` | Whether the blend wraps around the axis (useful for circular blending). |

> **Note** – All properties are exported, so they can be edited directly in the inspector.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `add_animation(name: StringName, animation: AnimationRootNode, position: float, loop: bool = true)` | `void` | `name`, `animation`, `position`, `loop` | Adds a new animation sample to the blend space. |
| `remove_animation(name: StringName)` | `void` | `name` | Removes an existing animation sample. |
| `get_animation(name: StringName)` | `AnimationRootNode` | `name` | Returns the animation node associated with `name`. |
| `get_animation_count()` | `int` | – | Returns the number of animation samples. |
| `get_animation_name(idx: int)` | `StringName` | `idx` | Returns the name of the animation at index `idx`. |
| `set_animation_position(name: StringName, position: float)` | `void` | `name`, `position` | Sets the axis position of a given animation sample. |
| `get_animation_position(name: StringName)` | `float` | `name` | Returns the axis position of the requested sample. |
| `clear()` | `void` | – | Removes all animation samples from the blend space. |
| `sort()` | `void` | – | Sorts the samples by their position value. |
| `set_blend_position(position: float)` | `void` | `position` | Sets the current blend position. |
| `get_blend_position()` | `float` | – | Returns the current blend position. |
| `set_snap(snap: bool)` | `void` | `snap` | Enables/disables snapping. |
| `is_snap()` | `bool` | – | Returns whether snapping is enabled. |

> **Signal** `animation_changed` is emitted whenever the current blended animation changes due to a change in `blend_position`.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `animation_changed(current_animation: StringName)` | `current_animation` | Emitted whenever the blended animation changes. |

---

## Usage Example

```gdscript
# Assuming an AnimationTree with a BlendSpace1D named "SpeedBlend"
var blend_space : AnimationNodeBlendSpace1D = animation_tree.get("parameters/SpeedBlend")

# Add two animations: idle at 0, run at 10
blend_space.add_animation("idle", idle_anim, 0.0)
blend_space.add_animation("run", run_anim, 10.0)

# In _process, adjust blend position based on velocity
func _process(delta):
    var speed = velocity.length()
    blend_space.blend_position = clamp(speed, 0, 10)
```

---

## Documentation References

- **Previous**: [AnimationNodeBlend3](../class_animationnodeblend3.html)  
- **Next**: [AnimationNodeBlendSpace2D](../class_animationnodeblendspace2d.html)

---