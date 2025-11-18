# Collision shapes (2D)

This guide explains:
- The types of collision shapes available in 2D in Godot.  
- How to use an image converted to a polygon as a collision shape.  
- Performance considerations regarding 2D collisions.

---

## 1. Types of collision shapes

Godot provides several built‑in 2D collision shapes that can be added to physics bodies:

| Shape | Description | Typical use |
|-------|-------------|-------------|
| **CircleShape2D** | A simple circle defined by a radius. | Bouncing balls, circular hitboxes. |
| **RectangleShape2D** | A rectangle with width and height. | Boxes, platforms, simple obstacles. |
| **CapsuleShape2D** | A capsule defined by a radius and a height. | Rounded objects, humanoid bodies. |
| **ConvexPolygonShape2D** | A convex polygon defined by a list of points. | Custom shapes that stay convex. |
| **ConcavePolygonShape2D** | A concave polygon (requires a `CollisionPolygon2D` node). | Complex shapes that can be concave. |
| **SegmentShape2D** | A line segment between two points. | Traces, walls, thin barriers. |

> **Tip:** When designing shapes for dynamic bodies, keep them simple to reduce collision‑check overhead.

---

## 2. Using an image converted to a polygon

1. **Import the image**  
   Place a PNG, JPG, or other image file into the project.

2. **Create a `CollisionPolygon2D` node**  
   Add the node to the same parent as the visual node you want to collide with.

3. **Use the editor’s “Polygon from image” tool**  
   In the `CollisionPolygon2D` inspector, click **Polygon → From Image**.  
   - Choose the image file.  
   - Adjust the threshold to control how many pixels are considered part of the shape.  
   - The tool will generate a polygon that matches the non‑transparent pixels of the image.

4. **Fine‑tune the shape**  
   - Use the vertex editor to move or delete points.  
   - Re‑scale or rotate the shape to match the sprite.

> **Performance note:** Polygons with many vertices are expensive.  
> Keep the number of points low and consider using multiple simpler shapes if needed.

---

## 3. Performance considerations for 2D collisions

| Issue | Recommendation |
|-------|----------------|
| **Number of shapes** | Minimize the number of collision shapes per body. |
| **Complex polygons** | Avoid highly concave or vertex‑heavy polygons; use multiple simpler shapes instead. |
| **Static vs. Dynamic** | Use `StaticBody2D` for level geometry, `KinematicBody2D` or `RigidBody2D` only for moving objects. |
| **Collision layers/masks** | Set appropriate layers and masks to reduce unnecessary checks. |
| **Broadphase** | Use `CollisionShape2D` with a bounding rectangle to quickly cull far objects. |
| **Area2D** | Prefer `Area2D` for triggers instead of full physics bodies when possible. |

> **Quick tip:** If you notice lag during gameplay, profile the physics engine and look for bodies with many shapes or high‑vertex polygons.

---

## 4. Additional resources

* **[Collision shapes (3D)](https://docs.godotengine.org/en/stable/tutorials/physics/collision_shapes_3d.html)** – Similar guide for 3D collision shapes.  
* **[Physics 2D overview](https://docs.godotengine.org/en/stable/tutorials/physics/physics_2d.html)** – Fundamentals of Godot's 2D physics engine.  
* **[CollisionLayer and CollisionMask](https://docs.godotengine.org/en/stable/tutorials/physics/collision_layers_and_masks.html)** – How to use layers and masks effectively.  

---