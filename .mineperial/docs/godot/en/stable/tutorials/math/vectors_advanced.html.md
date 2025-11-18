**Advanced Vector Math – Godot Engine Documentation**  
*(Source: <https://docs.godotengine.org/en/stable/tutorials/math/vectors_advanced.html>)*  

---

# 1. Overview
Vector math is a core part of many games. Godot’s `Vector2` and `Vector3` types provide a rich set of operations, but some advanced techniques are worth mastering:

* **Dot product** – measures the angle and projection between vectors.
* **Cross product** – gives a vector perpendicular to two others (3‑D only).
* **Normalization** – scales a vector to unit length.
* **Reflection** – mirrors a vector off a surface.
* **Distance** – Euclidean distance between points.
* **Interpolation** – linear (lerp) and spherical (slerp).

Below we’ll walk through the key concepts and show how to use them in GDScript.

---

## 1.1  Dot Product

The dot product of two vectors `a` and `b` is:

```
a · b = |a| |b| cosθ
```

where `θ` is the angle between them.  
In Godot you compute it with `a.dot(b)`.

### 1.1.1  Angle Between Vectors

```
var a = Vector3(1, 0, 0)
var b = Vector3(0, 1, 0)
var angle = a.angle_to(b)   # π/2 radians
```

### 1.1.2  Projection

Project `a` onto `b`:

```
var proj = a.project(b)
```

`proj` is the component of `a` that lies along `b`.

### 1.1.3  Plane Test

If `n` is a unit normal vector of a plane through the origin, a point `p` is:

* **In front** if `p.dot(n) > 0`
* **Behind** if `p.dot(n) < 0`
* **On** the plane if `abs(p.dot(n)) < ε`

This is useful for culling and physics.

---

## 1.2  Cross Product (Vector3 only)

The cross product `a × b` yields a vector perpendicular to both:

```
var cross = a.cross(b)
```

The result obeys the right‑hand rule and its magnitude is `|a||b| sinθ`.  
Useful for computing normals to surfaces.

---

## 1.3  Normalization

A unit vector has length 1:

```
var dir = (target - origin).normalized()
```

Use `vector.length()` to get magnitude, `vector.length_squared()` for faster comparisons, and `vector.normalized()` to scale.

---

## 1.4  Reflection

Reflect a direction `dir` off a surface with normal `normal`:

```
var reflected = dir.bounce(normal)   # same as: dir - 2 * dir.dot(normal) * normal
```

`bounce()` is a convenient helper in Godot.

---

## 1.5  Distance Between Points

```
var dist = (p2 - p1).length()
```

For squared distance (avoids a square root):

```
var dist_sq = (p2 - p1).length_squared()
```

---

## 1.6  Interpolation

### 1.6.1  Linear Interpolation (Lerp)

```
var lerp_vec = a.lerp(b, t)   # t ∈ [0, 1]
```

### 1.6.2  Spherical Linear Interpolation (SLERP)

For smoothly rotating a unit vector toward another:

```
var slerp_vec = a.slerp(b, t)
```

SLERP works only with normalized vectors.

---

## 1.7  Practical Examples

### 1.7.1  Moving an Object Toward a Target

```gdscript
var speed = 200
var direction = (target_position - position).normalized()
position += direction * speed * delta
```

### 1.7.2  Reflecting a Projectile

```gdscript
func _physics_process(delta):
    velocity = velocity.bounce(surface_normal)
```

---

## 1.8  Tips & Gotchas

* **Avoid normalizing repeatedly** – compute the length once if you need both the normalized vector and its magnitude.
* **Use `length_squared()`** for performance‑critical distance checks (no square root).
* **Be careful with `float` precision**; `Vector2` and `Vector3` use `float`, not `double`. Small errors can accumulate over time.
* **Cross product is defined only in 3‑D**; for 2‑D you can treat the 2‑D vectors as `Vector3` with `z = 0` if needed.

---

# 2. Conclusion

Mastering these vector operations gives you fine‑grained control over physics, camera movement, AI navigation, and more. Experiment with the examples and adapt them to your game’s needs. Happy coding!  

---