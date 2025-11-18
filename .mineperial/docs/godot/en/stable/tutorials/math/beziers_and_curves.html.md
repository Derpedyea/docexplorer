**Beziers, curves and paths – Godot Engine documentation**

> This page explains how Bézier curves work in Godot, how to create and use them in 2D and 3D, and how to animate objects along paths.

---

## 1.  What is a Bézier curve?

A Bézier curve is a smooth mathematical curve defined by a small set of control points.  
* **Linear** – 2 points (a straight line).  
* **Quadratic** – 3 points.  
* **Cubic** – 4 points (most common in Godot).

The curve is described by a parametric equation *P(t)* where *t* ∈ [0, 1]. The shape can be freely manipulated by moving the control points, and the curve is always smooth.

### Why use Bézier curves?

* Very compact representation of complex shapes.  
* Easy to animate objects along a path.  
* Can be used for motion, easing, splines and more.  
* Godot provides high‑level nodes that wrap this math.

---

## 2.  2‑D Bézier curves

Godot offers two convenient nodes:

| Node | Purpose | Key properties |
|------|---------|----------------|
| `Path2D` | Stores a 2‑D curve. | `curve`, `offset`, `closed` |
| `PathFollow2D` | Moves an object along a `Path2D`. | `progress`, `offset`, `loop`, `rotate` |

### Creating a `Path2D`

```gdscript
var path = Path2D.new()
var curve = Curve2D.new()

# Add points
curve.add_point(Vector2(0, 0))
curve.add_point(Vector2(200, 0), Vector2(-50, 0), Vector2(50, 0))
curve.add_point(Vector2(200, 200))
curve.add_point(Vector2(0, 200))

path.curve = curve
add_child(path)
```

* `add_point(position, in_offset = Vector2(), out_offset = Vector2())` – adds a control point.  
* The `in_offset` / `out_offset` vectors control the tangents of the curve.  

### Animating a node

```gdscript
var follow = PathFollow2D.new()
path.add_child(follow)

var sprite = Sprite2D.new()
sprite.texture = preload("res://icon.png")
follow.add_child(sprite)

# In _process
func _process(delta):
    follow.progress += 100 * delta   # 100 px per second
```

Set `follow.loop = true` to wrap around or `follow.rotate = true` to auto‑rotate along the curve.

---

## 3.  3‑D Bézier curves

The 3‑D counterparts are `Path3D` and `PathFollow3D`. Their usage is identical to the 2‑D versions, except the curve type is `Curve3D`.

```gdscript
var path3d = Path3D.new()
var curve3d = Curve3D.new()
# add points with Vector3()
path3d.curve = curve3d
add_child(path3d)

var follow3d = PathFollow3D.new()
path3d.add_child(follow3d)
```

---

## 4.  Advanced usage

### Using `CubicBezier` class

Godot exposes a low‑level `CubicBezier` class for precise calculations:

```gdscript
var c = CubicBezier.new(
    Vector2(0, 0),   # start
    Vector2(50, 100), # control 1
    Vector2(150, -100),# control 2
    Vector2(200, 0)   # end
)

for t in range(0, 1, 0.1):
    var p = c.interpolate(t)  # returns the point at t
```

### Spline utilities

* `Curve2D.get_baked_points()` – pre‑computes points for fast lookup.  
* `Curve2D.get_closest_point(point)` – finds the nearest point on the curve.  
* `Curve3D.get_baked_points()` – same in 3‑D.

### Tips

| Situation | Recommended method |
|-----------|---------------------|
| Need high‑precision sampling | `Curve.get_baked_points()` |
| Want an exact point at a given progress | `Curve.interpolate_baked(progress)` |
| Working with many curves | Bake them once, reuse the array |

---

## 5.  Common pitfalls

* **Off‑by‑one errors** – `progress` is expressed in *pixels* (2‑D) or *units* (3‑D).  
* **Closed paths** – if `closed` is true, the first and last points are joined, affecting tangent calculation.  
* **Rotation** – setting `rotate` to true makes the child inherit the tangent’s direction.  

---

## 6.  Further reading

* [Path2D Documentation](https://docs.godotengine.org/en/stable/classes/class_path2d.html)  
* [PathFollow2D Documentation](https://docs.godotengine.org/en/stable/classes/class_pathfollow2d.html)  
* [Curve2D](https://docs.godotengine.org/en/stable/classes/class_curve2d.html)  
* [Curve3D](https://docs.godotengine.org/en/stable/classes/class_curve3d.html)  

---