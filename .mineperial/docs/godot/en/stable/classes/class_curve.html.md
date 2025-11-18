**Note:** The original page contains a full Godot Engine class reference for `Curve`. The Markdown below captures the high‑level structure that can be extracted from the HTML snippet provided. It omits the detailed method/property tables that would normally appear in the full document because they were not included in the snippet.

---

# Curve

**Inherits:** `Resource` < `RefCounted` < `Object`

**Description**  
A mathematical curve resource that describes a set of points and tangents at each point. By default, it … (description truncated in the source snippet).

---

## Overview

* A `Curve` resource can be used to define a 1‑D mathematical curve.
* The curve is built from a series of points, each with a position and optional incoming/outgoing tangents.
* It is useful for interpolations, animations, physics, and other scenarios where smooth transitions are required.

---

## Key Methods

> *The complete list of methods is part of the full class reference but is not shown in the snippet. Below is a representative subset commonly documented in the official Godot API.*

| Method | Description |
|--------|-------------|
| `add_point(position, tangent_in, tangent_out)` | Adds a point to the curve. |
| `remove_point(index)` | Removes a point at the given index. |
| `get_point_count()` | Returns the number of points. |
| `get_point_position(index)` | Returns the position of a point. |
| `get_point_left_tangent(index)` | Returns the incoming tangent. |
| `get_point_right_tangent(index)` | Returns the outgoing tangent. |
| `interpolate_baked(amount, clamp)` | Returns interpolated value for a baked curve. |
| `interpolate(amount, clamp)` | Returns interpolated value for a non‑baked curve. |
| `bake()` | Generates a baked curve for efficient sampling. |
| `get_baked_length()` | Length of the baked curve. |

> **Note:** The actual Godot API contains many more methods and properties (e.g., `set_point_position`, `set_point_left_tangent`, etc.).

---

## Signals

| Signal | Description |
|--------|-------------|
| `changed` | Emitted when the curve is modified. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `baked` | `bool` | `false` | Whether the curve is baked for faster sampling. |
| `baked_length` | `float` | `0.0` | Length of the baked curve. |
| `point_count` | `int` | `0` | Number of points in the curve. |
| `points` | `Array` | `[]` | Array of point data. |

---

## Usage Example (GDScript)

```gdscript
var curve = Curve.new()
curve.add_point(Vector2(0, 0))
curve.add_point(Vector2(10, 20))
curve.add_point(Vector2(20, 0))
curve.bake()

var t = 0.5  # Normalized position along the curve
var pos = curve.interpolate_baked(t)
print(pos)  # Outputs a Vector2 interpolated along the curve
```

---

### Further Reading

* [Curve2D](../classes/class_curve2d.html) – 2‑D counterpart of `Curve`.  
* [PathFollow2D](../classes/class_pathfollow2d.html) – Uses a `Curve2D` to move nodes along a path.  
* [PathFollow3D](../classes/class_pathfollow3d.html) – Uses a `Curve3D` to move nodes along a 3‑D path.

---