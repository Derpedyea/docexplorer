**NOTE:** This page is part of the Godot Engine class reference and is a technical documentation page, not a marketing or legal page.  

---  

# ConvexPolygonShape2D

> **Godot Engine – Stable**  
> Inherits: `Shape2D` → `Resource` → `RefCounted` → `Object`

## Description

A **2D convex polygon shape** used for physics collision.  
It is intended for use in the 2D physics engine and is built internally from an array of 2‑D points that define a convex polygon.  

> *The shape is usually created automatically by the physics engine when you add a `CollisionShape2D` node with a convex polygon shape resource.*  

## Properties

| Property | Type | Description |
|----------|------|-------------|
| **points** | `PoolVector2Array` | The list of points that form the convex polygon. The points must be sorted in counter‑clockwise order for the shape to be valid. |

> **Note:** In Godot 4 the property type is now `Array<Vector2>` instead of `PoolVector2Array`.

## Methods

| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `set_points(points)` | `PoolVector2Array`/`Array<Vector2>` | `void` | Set the polygon points. |
| `get_points()` | – | `PoolVector2Array`/`Array<Vector2>` | Return the current list of points. |

> These methods are inherited from `Shape2D` and are typically accessed via the `shape` property of a `CollisionShape2D` or `CollisionPolygon2D`.

## Example

```gdscript
var shape = ConvexPolygonShape2D.new()
shape.set_points([Vector2(0, 0), Vector2(100, 0), Vector2(50, 100)])
var collision = CollisionShape2D.new()
collision.shape = shape
add_child(collision)
```

The above script creates a simple triangular collision shape and adds it to the current node.

## Related Resources

- [ConvexPolygonShape3D](../class_convexpolygonshape3d.html) – The 3‑D counterpart.  
- [CollisionShape2D](../class_collisionshape2d.html) – Node that uses `Shape2D` resources.  
- [Physics 2D](../physics/index.html) – Overview of 2‑D physics in Godot.

---  

**Navigation**  

- Previous: [ConcavePolygonShape3D](../class_concavepolygonshape3d.html)  
- Next: [ConvexPolygonShape3D](../class_convexpolygonshape3d.html)  

---