**NOTE:** The supplied HTML only contains the site‑wide navigation and a small amount of metadata; the actual class‑reference content (methods, properties, signals, etc.) is not present in the excerpt.  
Below is a concise Markdown skeleton that reflects the information that can be inferred from the available HTML. If you need the full list of members, you can obtain it from the live documentation at the URL above.

---

# Curve2D

> **Inherits:** `Resource` → `RefCounted` → `Object`

> **Description:**  
> The `Curve2D` class describes a Bézier curve in 2D space. It is mainly used to give a shape to a `Path2D`, but it can also be employed in scripts and custom nodes that require a 2‑D curve.

---

## Overview

- A `Curve2D` instance stores a series of points.
- Each point can have an incoming and outgoing handle that controls the Bézier spline.
- The curve can be “baked” into a list of uniformly spaced points for efficient lookup.

---

## Basic API

| Category | Functions / Properties |
|----------|------------------------|
| **Points** | `add_point(Vector2 position, Vector2 in=Vector2.ZERO, Vector2 out=Vector2.ZERO, int index=-1, bool closed=false)`<br>`remove_point(int index)`<br>`clear()`<br>`get_point_count()`<br>`get_point_position(int index)`<br>`set_point_position(int index, Vector2 position)`<br>`get_point_in(int index)`<br>`set_point_in(int index, Vector2 in)`<br>`get_point_out(int index)`<br>`set_point_out(int index, Vector2 out)` |
| **Baking** | `set_bake_interval(float interval)`<br>`get_bake_interval()`<br>`bake()`<br>`get_baked_points()`<br>`get_baked_length()` |
| **Sampling** | `get_closest_point(Vector2 point)`<br>`get_closest_distance_squared(Vector2 point)`<br>`get_interpolation(float distance, bool is_closed=false, bool use_spline=false)`<br>`get_clamped(float distance)` |
| **Miscellaneous** | `is_point_bezier(int index)`<br>`is_point_closed()`<br>`set_offset(float offset)`<br>`get_offset()` |

> *Note:* The list above is not exhaustive. Refer to the official documentation for all available methods and signals.

---

## Example – Creating a Simple Curve

```gdscript
var curve = Curve2D.new()
curve.add_point(Vector2(0, 0))
curve.add_point(Vector2(50, 100))
curve.add_point(Vector2(100, 0))

# Sample a point at 30% of the curve’s length
var sampled = curve.get_interpolation(0.3)
print(sampled)   # → Vector2(30, 60)
```

---

## Related Classes

- [`Path2D`](https://docs.godotengine.org/en/stable/classes/class_path2d.html) – Uses a `Curve2D` to define its geometry.
- [`Curve3D`](https://docs.godotengine.org/en/stable/classes/class_curve3d.html) – 3‑D counterpart to `Curve2D`.

---

### Documentation Structure

The class reference page contains the following sections in the official UI:

1. **Description** – Short text and inheritance tree.
2. **Signals** – (none for `Curve2D`).
3. **Methods** – Detailed list with signatures and short descriptions.
4. **Properties** – Detailed list with default values.
5. **Constants** – (none for `Curve2D`).

For a complete view, visit the live docs: <https://docs.godotengine.org/en/stable/classes/class_curve2d.html>.