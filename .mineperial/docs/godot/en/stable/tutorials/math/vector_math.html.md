**Vector math**  
===================

> *This tutorial is a short and practical introduction to linear algebra as it applies to game development. Linear algebra is the study of vectors and their uses. Vectors have many applications in games, from movement and physics to graphics and UI layout.*

---

## 1.  What is a vector?

A vector is a quantity that has **magnitude** (size) and **direction**.  
In Godot you’ll usually work with:

* `Vector2` – 2‑dimensional (x, y)
* `Vector3` – 3‑dimensional (x, y, z)
* `Vector4` – 4‑dimensional (x, y, z, w) – rarely used in everyday gameplay

Vectors are fundamental for describing positions, velocities, forces, and more.

---

## 2.  Constructing vectors

```gdscript
# Vector2
var v2 = Vector2(1, 2)          # (x=1, y=2)
var v2_from_angle = Vector2.RIGHT.rotated(deg2rad(30))

# Vector3
var v3 = Vector3(3, 4, 5)
var v3_origin = Vector3.ZERO    # (0, 0, 0)

# Vector4
var v4 = Vector4(1, 2, 3, 4)
```

| Property | Description |
|----------|-------------|
| `.x`, `.y`, `.z`, `.w` | Component access |
| `.length()` | Euclidean norm (magnitude) |
| `.normalized()` | Returns a unit vector |
| `.angle()` (2D) | Angle in radians from X‑axis |
| `.distance_to(other)` | Shortest distance between two points |

---

## 3.  Basic operations

| Operation | Godot syntax | Result |
|-----------|--------------|--------|
| **Addition** | `a + b` | Component‑wise sum |
| **Subtraction** | `a - b` | Component‑wise difference |
| **Scalar multiplication** | `a * 3` | Every component scaled |
| **Dot product** | `a.dot(b)` | Measures similarity |
| **Cross product** (3D) | `a.cross(b)` | Perpendicular vector |
| **Negation** | `-a` | Inverts direction |
| **Equality** | `a == b` | Checks if all components equal |

```gdscript
var a = Vector3(1, 0, 0)
var b = Vector3(0, 1, 0)

var sum   = a + b           # (1, 1, 0)
var diff  = a - b           # (1, -1, 0)
var dot   = a.dot(b)        # 0
var cross = a.cross(b)      # (0, 0, 1)
var len   = a.length()      # 1
```

---

## 4.  2‑D specific helpers

```gdscript
var v = Vector2(3, 4)
var distance = v.distance_to(Vector2.ZERO)   # 5
var angle = v.angle_to_point(Vector2(5, 5))  # radians
var rotated = v.rotated(deg2rad(90))          # (‑4, 3)
```

### `distance_to()`

> Shortest distance between two points.

```gdscript
var p1 = Vector2(1, 1)
var p2 = Vector2(4, 5)
print(p1.distance_to(p2))   # 5
```

### `angle_to_point()`

> Angle from the current vector to another point.

```gdscript
var p1 = Vector2(0, 0)
var p2 = Vector2(1, 0)
print(rad2deg(p1.angle_to_point(p2)))   # 0°
```

### `rotated(angle)`

> Returns a copy rotated by *angle* (radians).

```gdscript
var v = Vector2(1, 0)
var v90 = v.rotated(deg2rad(90))   # (0, 1)
```

---

## 5.  3‑D specific helpers

```gdscript
var v = Vector3(1, 2, 3)

# Length and normalization
print(v.length())
print(v.normalized())

# Dot and cross
var w = Vector3(0, 1, 0)
print(v.dot(w))          # 2
print(v.cross(w))        # (−3, 0, 1)
```

---

## 6.  Using vectors in Godot

### 6.1 Movement

```gdscript
# Move a KinematicBody2D
var direction = Vector2()
if Input.is_action_pressed("ui_right"):  direction.x += 1
if Input.is_action_pressed("ui_left"):   direction.x -= 1
if Input.is_action_pressed("ui_down"):   direction.y += 1
if Input.is_action_pressed("ui_up"):     direction.y -= 1

direction = direction.normalized()
velocity = direction * speed
move_and_slide(velocity)
```

### 6.2 Rotations

```gdscript
# Rotate a Sprite towards a target
var target = get_node("/root/Target").global_position
var direction = (target - position).normalized()
rotation = direction.angle()
```

### 6.3 Raycasting

```gdscript
var from = Vector3(0, 1, 0)
var to   = Vector3(0, -10, 0)
var space_state = get_world().direct_space_state
var result = space_state.intersect_ray(from, to)
if result:
    print("Hit: ", result.collider)
```

---

## 7.  Common pitfalls

| Issue | Fix |
|-------|-----|
| **Using `Vector2.ZERO` instead of `Vector2(0,0)`** | `Vector2.ZERO` is immutable; don’t modify it. |
| **Mixing 2‑D and 3‑D vectors** | Use `Vector3` for 3‑D contexts; cast with `Vector3(v2.x, v2.y, 0)` if needed. |
| **Wrong coordinate system** | Godot’s 2‑D Y axis points downwards; 3‑D Y points up. |
| **Precision errors** | For very large values, consider `float` vs `double`. |

---

## 8.  Further reading

* [Godot Docs – Vector2](https://docs.godotengine.org/en/stable/classes/class_vector2.html)
* [Godot Docs – Vector3](https://docs.godotengine.org/en/stable/classes/class_vector3.html)
* [Godot Docs – 3D math basics](https://docs.godotengine.org/en/stable/tutorials/math/3d.html)

---

> **Tip:** Experiment with vector math in the *Godot Playground* or a quick script to see how changing a vector’s components affects a node’s position or rotation in real time.