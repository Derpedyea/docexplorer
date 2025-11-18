# AnimationNodeBlendSpace2D

**Inheritance**  
`AnimationRootNode < AnimationNode < Resource < RefCounted < Object`

---

## Overview

`AnimationNodeBlendSpace2D` is a specialized animation node that lets you blend multiple `AnimationRootNode` instances based on two‑dimensional coordinates. It is typically used inside an `AnimationTree` to create smooth, cross‑faded transitions between animations that vary along two independent parameters (for example, speed and direction).

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `blend_space_points` | `Array[BlendSpace2DPoint]` | `[]` | An array of points that define the positions of the animation roots in the 2‑D blend space. |
| `use_custom_blend` | `bool` | `false` | If `true`, the node will use a custom blending algorithm instead of the default linear interpolation. |
| `default_animation` | `String` | `""` | Name of the default animation that will be played when the input point is outside the defined blend area. |
| `region_rect` | `Rect2` | `Rect2()` | The rectangular area that defines the bounds of the blend space. |
| `interpolation_type` | `BlendSpace2D.InterpolationType` | `Linear` | Determines how the blending is calculated between points. |

> **Note**: All properties are exposed to the Godot editor and can be edited through the Inspector or set via script.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `add_point(position: Vector2, animation: String) -> int` | `int` | `position`, `animation` | Adds a new point to the blend space and returns its index. |
| `remove_point(index: int) -> void` | `void` | `index` | Removes the point at the given index. |
| `set_point_position(index: int, position: Vector2) -> void` | `void` | `index`, `position` | Updates the position of an existing point. |
| `set_point_animation(index: int, animation: String) -> void` | `void` | `index`, `animation` | Changes the animation associated with a point. |
| `get_point_count() -> int` | `int` | `-` | Returns the number of points currently defined. |
| `get_point_position(index: int) -> Vector2` | `Vector2` | `index` | Retrieves the position of the specified point. |
| `get_point_animation(index: int) -> String` | `String` | `index` | Retrieves the name of the animation for the specified point. |
| `clear_points() -> void` | `void` | `-` | Removes all points from the blend space. |
| `set_region_rect(rect: Rect2) -> void` | `void` | `rect` | Sets the bounding rectangle for the blend space. |
| `get_region_rect() -> Rect2` | `Rect2` | `-` | Returns the current blend space rectangle. |
| `set_interpolation_type(type: BlendSpace2D.InterpolationType) -> void` | `void` | `type` | Sets the blending interpolation type. |
| `get_interpolation_type() -> BlendSpace2D.InterpolationType` | `BlendSpace2D.InterpolationType` | `-` | Gets the current interpolation type. |

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `point_added(index: int)` | `index` | Emitted when a new point is added. |
| `point_removed(index: int)` | `index` | Emitted when a point is removed. |
| `point_changed(index: int)` | `index` | Emitted when a point’s position or animation changes. |

---

## Usage Example

```gdscript
# Assuming an AnimationTree named 'tree' and a blend space node inside it.
var blend_space = tree.get("parameters/BlendSpace2D")

# Add points for walk, run, and jump animations
blend_space.add_point(Vector2(0, 0), "Idle")
blend_space.add_point(Vector2(1, 0), "Walk")
blend_space.add_point(Vector2(2, 0), "Run")

# Set the default animation
blend_space.default_animation = "Idle"

# Update the blend position from script
var velocity = Vector2(speed, 0)
blend_space.position = velocity
```

---

## See Also

- [AnimationNodeBlendSpace1D](https://docs.godotengine.org/en/stable/classes/class_animationnodeblendspace1d.html) – 1‑D version of the blend space.  
- [AnimationTree](https://docs.godotengine.org/en/stable/classes/class_animationtree.html) – Container that can host `AnimationNodeBlendSpace2D`.  
- [AnimationNode](https://docs.godotengine.org/en/stable/classes/class_animationnode.html) – Base class for all animation nodes.  

---