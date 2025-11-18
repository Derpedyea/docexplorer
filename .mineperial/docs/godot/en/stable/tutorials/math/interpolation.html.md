**Interpolation**  
*Godot Engine – Documentation (Stable)*

---  

## What Is Interpolation?

Interpolation is a common operation in graphics programming used to blend or transition between two values. It can also be used to smooth movement, rotation, and more.

---

## Linear Interpolation (`lerp`)

```gdscript
var a = 0.0
var b = 10.0
var t = 0.5
var result = lerp(a, b, t)  # result = 5.0
```

- **`t`** should be in the range `[0, 1]`.
- `lerp(a, b, 0) == a`
- `lerp(a, b, 1) == b`

---

## Normalized Linear Interpolation (`lerp_angle`)

Specialized for angles to avoid wrapping issues.

```gdscript
var a = 30
var b = 300
var t = 0.5
var angle = lerp_angle(a, b, t)
```

---

## Smooth Interpolation (`smoothstep`)

```gdscript
var min = 0.0
var max = 1.0
var t = 0.5
var result = smoothstep(min, max, t)  # 0.5
```

`smoothstep` eases the transition so the slope at the boundaries is zero.

---

## Cubic Interpolation (`cubic_interpolate`)

```gdscript
var prev = 0
var a = 1
var b = 2
var next = 3
var t = 0.5
var result = cubic_interpolate(prev, a, b, next, t)
```

Cubic interpolation uses the surrounding values for a smoother curve.

---

## Catmull-Rom Spline (`catmull_rom_interp`)

```gdscript
var p0 = Vector2(0, 0)
var p1 = Vector2(1, 2)
var p2 = Vector2(4, 3)
var p3 = Vector2(5, 5)
var t = 0.3
var point = catmull_rom_interp(p0, p1, p2, p3, t)
```

Catmull-Rom produces a smooth curve that passes through the control points.

---

## Bezier Curves

Godot provides helper functions to evaluate Bézier curves. For a 2‑point quadratic Bézier:

```gdscript
var start = Vector2(0, 0)
var control = Vector2(1, 2)
var end = Vector2(4, 0)
var t = 0.5
var point = quad_bezier(start, control, end, t)
```

For cubic Bézier:

```gdscript
var p0 = Vector2(0, 0)
var p1 = Vector2(1, 3)
var p2 = Vector2(4, 3)
var p3 = Vector2(5, 0)
var point = cubic_bezier(p0, p1, p2, p3, t)
```

---

## Usage Tips

- **Time‑based interpolation**: Use `lerp` or `cubic_interpolate` with `delta` to create frame‑rate independent motion.
- **Tween nodes**: For complex sequences, use the `Tween` node which internally uses easing functions.
- **AnimationPlayer**: Supports built‑in easing types for keyframes.

---

## Links

- [Godot Documentation – Tween](https://docs.godotengine.org/en/stable/tutorials/animation/tween.html)
- [Godot API – Math Functions](https://docs.godotengine.org/en/stable/classes/class_math.html)
- [Mathematical Foundations of Interpolation](https://en.wikipedia.org/wiki/Interpolation)

--- 

> *This page is part of the official Godot Engine documentation and provides detailed technical explanations and code examples for interpolation techniques.*