**2D coordinate systems and 2D transforms**  
*Godot Engine documentation – stable*

---

## Overview

In Godot a 2‑D scene is built from a hierarchy of **`Node2D`** objects.  
Each node has its own local coordinate system that can be transformed relative to its parent.  
The engine also provides a few additional coordinate spaces:

| Space | Description | Origin | Y‑axis |
|-------|-------------|--------|--------|
| **Node local** | Coordinates defined by the node itself | (0, 0) at the node's origin | Downwards |
| **World (global)** | Absolute coordinates in the scene tree | (0, 0) at the root of the current viewport | Downwards |
| **Viewport** | The viewport’s own coordinate space (used for camera, UI, etc.) | (0, 0) at the top‑left of the viewport | Downwards |

> ⚠️ **Note** – Godot uses a *top‑left* origin for 2‑D coordinates.  
> The Y axis points *downwards* and the X axis points *rightwards*.

---

## 1. `Node2D` and `Transform2D`

A `Node2D` has three main properties that define its local transform:

```gdscript
export var position : Vector2
export var rotation : float   # in radians
export var scale    : Vector2 = Vector2(1, 1)
```

Internally these are stored as a **`Transform2D`** matrix:

```
| a  b  tx |
| c  d  ty |
| 0  0   1 |
```

Where:

* **a, b, c, d** – rotation + scaling
* **tx, ty** – translation

### 1.1 Converting between spaces

| Method | Purpose | Example |
|--------|---------|---------|
| `node.to_global(local_pos)` | Convert a point from the node’s local space to world space | `var global_pos = sprite.to_global(Vector2(0, 0))` |
| `node.to_local(global_pos)` | Convert a point from world space to the node’s local space | `var local_pos = sprite.to_local(Vector2(200, 150))` |
| `node.to_local()` | Returns the node’s global transform as a `Transform2D` | `var global_transform = sprite.get_global_transform()` |

---

## 2. CanvasItem – the visual layer

`CanvasItem` is the base class for all 2‑D visible nodes (`Node2D`, `Sprite`, `Control`, etc.).  
It exposes:

* `canvas_transform` – a `Transform2D` that can be modified to apply a global offset, scaling or rotation to *all* children of a given node.
* `z_index` – controls rendering order.
* `layer` – an integer used to separate *layers* for `CanvasLayer` nodes.

### 2.1 Using `CanvasLayer`

A `CanvasLayer` node lets you keep a node hierarchy (e.g. UI elements) out of the normal world transform flow.

```gdscript
var layer = CanvasLayer.new()
layer.z_index = 1
layer.scale = Vector2(0.5, 0.5)
add_child(layer)
```

> All children of a `CanvasLayer` are rendered **relative to the screen**, not to the world.

---

## 3. Viewport transforms

A `Viewport` can change its own coordinate space:

| Property | Type | Meaning |
|----------|------|---------|
| `size` | `Vector2` | Pixel dimensions of the viewport |
| `stretch_mode` | `Viewport.STRETCH_MODE_*` | How the viewport’s content is scaled |
| `stretch_aspect` | `Viewport.STRETCH_ASPECT_*` | Aspect‑ratio handling |
| `canvas_transform` | `Transform2D` | Applied to *all* nodes inside the viewport |

When the viewport is *stretched*, Godot automatically applies a transform to keep the content centered or stretched according to the chosen mode. You can inspect the resulting transform with:

```gdscript
print(get_viewport().canvas_transform)
```

---

## 4. Common pitfalls

* **Coordinate inversion** – When flipping a node (`scale.x` < 0), the origin flips as well. Use `node.position = -node.position` to keep the same world position.
* **Local vs global rotation** – `rotation` is *local*. Use `get_global_transform().basis.get_rotation()` to read the global rotation.
* **UI coordinates** – `Control` nodes use *logical* coordinates that are automatically scaled by the viewport’s `custom_constants`. For pixel‑perfect UI, set `Control.rect_scale` to `1`.

---

## 5. Quick reference – `Transform2D`

```gdscript
var t = Transform2D()
t.origin = Vector2(100, 200)           # translation
t.scale(Vector2(2, 3))                 # scaling
t.rotated(PI / 4)                       # 45° rotation

# Decompose
var rotation = t.get_rotation()
var scale    = t.get_scale()
var origin   = t.origin
```

---

## 6. Useful links

* [Node2D documentation](https://docs.godotengine.org/en/stable/classes/class_node2d.html)
* [Transform2D documentation](https://docs.godotengine.org/en/stable/classes/class_transform2d.html)
* [Viewport documentation](https://docs.godotengine.org/en/stable/classes/class_viewport.html)
* [CanvasLayer documentation](https://docs.godotengine.org/en/stable/classes/class_canvasslayer.html)

---

**End of document**