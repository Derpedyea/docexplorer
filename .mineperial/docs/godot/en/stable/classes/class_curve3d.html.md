**Curve3D**

*Inherits:* `Resource`  → `RefCounted`  → `Object`

*Description:*  
This class describes a Bézier curve in 3D space. It is mainly used to give a shape to a `Path3D`, but can also be used wherever a parametric curve is needed.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `points` | `Array<Vector3>` | `[]` | The control points that define the curve. The order of points determines the segments. |
| `tangents` | `Array<Vector3>` | `[]` | Tangent vectors for each point (used for Catmull‑Rom interpolation). |
| `is_loop` | `bool` | `false` | If `true`, the curve is treated as a closed loop. |
| `baked_length` | `float` | `0.0` | The length of the baked curve (read‑only). |

> **Note:** The actual property list may differ between Godot versions; consult the latest docs for exact names.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_point(point: Vector3, tangent_left: Vector3 = Vector3.ZERO, tangent_right: Vector3 = Vector3.ZERO)` | `void` | Adds a point to the curve. |
| `get_point_count() → int` | `int` | Returns the number of points in the curve. |
| `get_point_position(index: int) → Vector3` | `Vector3` | Retrieves the position of the point at `index`. |
| `set_point_position(index: int, position: Vector3)` | `void` | Sets the position of the point at `index`. |
| `get_baked_length() → float` | `float` | Returns the length of the curve after baking. |
| `bake()` | `void` | Precomputes a lookup table for faster point evaluation. |
| `interpolate(t: float, cubic: bool = true) → Vector3` | `Vector3` | Returns the point on the curve at parameter `t` (0–1). |
| `interpolate_baked(t: float) → Vector3` | `Vector3` | Interpolates using the baked lookup table. |
| `remove_point(index: int)` | `void` | Removes the point at `index`. |
| `clear()` | `void` | Removes all points from the curve. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `point_added(index: int)` | Emitted when a point is added. |
| `point_removed(index: int)` | Emitted when a point is removed. |
| `baked()` | Emitted when `bake()` completes. |

---

## Example Usage (GDScript)

```gdscript
var curve = Curve3D.new()
curve.add_point(Vector3(0, 0, 0))
curve.add_point(Vector3(1, 2, 0))
curve.add_point(Vector3(2, 0, 0))

curve.bake()

# Sample the curve
for i in range(11):
    var t = i / 10.0
    var pos = curve.interpolate_baked(t)
    print("t=%f -> %s" % [t, pos])
```

---

## API Reference

For a complete and version‑specific list of properties, methods, and signals, see the official Godot documentation page:  
[Curve3D – Godot Docs](https://docs.godotengine.org/en/stable/classes/class_curve3d.html)

---