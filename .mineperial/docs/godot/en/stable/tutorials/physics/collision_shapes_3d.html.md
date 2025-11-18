**Collision shapes (3D)** – Godot Engine Documentation
=======================================================

This guide explains:

1. The types of collision shapes available in 3D in Godot.  
2. How to use a convex or a concave mesh as a collision shape.  
3. Performance considerations when working with 3D collisions.  

---

## 1. Types of collision shapes

Godot offers a number of built‑in **`Shape3D`** subclasses that can be attached to a **`CollisionShape3D`** node.  
Each shape has its own set of properties that define the geometry used for collision detection.

| Shape | Typical use | Key properties |
|-------|-------------|----------------|
| **`BoxShape3D`** | Simple axis‑aligned boxes | `extents` |
| **`SphereShape3D`** | Spherical bounds | `radius` |
| **`CapsuleShape3D`** | Capsule (e.g., characters, cylinders) | `radius`, `height` |
| **`CylinderShape3D`** | Cylinder | `radius`, `height` |
| **`ConvexPolygonShape3D`** | Convex hulls (simpler but less exact) | `points` |
| **`ConcavePolygonShape3D`** | Concave meshes (exact but more expensive) | `mesh` |
| **`MeshShape3D`** | Static meshes that don't change at runtime | `mesh` |
| **`HeightMapShape3D`** | Height‑map based terrain | `height_map`, `size`, `cell_size` |

> **Tip** – For most gameplay objects, the primitive shapes (`Box`, `Sphere`, `Capsule`, `Cylinder`) are the fastest. Use more complex shapes only when the visual mesh is close enough to the collision geometry.

---

## 2. Using a convex or a concave mesh as a collision shape

Godot can automatically generate a collision shape from any `MeshInstance3D`.

### 2.1. Convex shapes

```gdscript
# Convert a MeshInstance3D to a convex shape
var mesh_instance = $MeshInstance3D
var shape = ConvexPolygonShape3D.new()
shape.set_mesh(mesh_instance.mesh)          # uses the mesh’s vertex data
var collision = $CollisionShape3D
collision.shape = shape
```

> *Convex shapes are inexpensive to test but cannot represent concave geometry. They’re great for characters and simple objects.*

### 2.2. Concave shapes

```gdscript
# Convert a MeshInstance3D to a concave shape
var mesh_instance = $MeshInstance3D
var shape = ConcavePolygonShape3D.new()
shape.set_mesh(mesh_instance.mesh)
var collision = $CollisionShape3D
collision.shape = shape
```

> *Concave shapes can match arbitrary meshes, but collision checks are far more expensive. Use them sparingly or in static environments.*

### 2.3. Trimesh shapes

For large, static meshes (e.g., level geometry) a **`ConcavePolygonShape3D`** is often replaced by a **`MeshShape3D`** or a **`HeightMapShape3D`** for better performance.

```gdscript
var mesh_shape = MeshShape3D.new()
mesh_shape.mesh = $StaticMesh.mesh
$CollisionShape3D.shape = mesh_shape
```

---

## 3. Performance considerations

| Item | Best practice | Why |
|------|---------------|-----|
| **Use simple primitives** | Prefer `BoxShape3D`, `SphereShape3D`, etc. | Fewer vertices → faster broad‑phase and narrow‑phase checks. |
| **Avoid concave meshes on moving bodies** | Use convex approximations or separate static bodies. | Concave shapes require a full physics query each frame. |
| **Batch static shapes** | Combine several static meshes into one `MeshShape3D`. | Reduces the number of collision checks. |
| **Limit dynamic shapes** | Keep the number of moving colliders low. | Each dynamic shape incurs a full sweep. |
| **Profile with the physics debugger** | Inspect collision counts and tree depth. | Helps identify bottlenecks. |

---

## 4. Common pitfalls

| Pitfall | Fix |
|---------|-----|
| **Collision shapes not matching visual mesh** | Align the shape’s transform with the mesh or set `ShapeTransform` correctly. |
| **Mesh collisions invisible in editor** | Toggle “Show Collision Shapes” in the editor viewport. |
| **Performance drop when adding many complex shapes** | Replace with simplified shapes or static batches. |

---

## 5. Quick reference

```gdscript
# Adding a collision shape in code
var shape = BoxShape3D.new()
shape.extents = Vector3(1, 1, 1)

var collision = CollisionShape3D.new()
collision.shape = shape
add_child(collision)
```

> For detailed node‑by‑node configuration, refer to the **[CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)** class reference.

---

### Further reading

* [Collision shapes (2D)](https://docs.godotengine.org/en/stable/tutorials/physics/collision_shapes_2d.html)  
* [Large world coordinates](https://docs.godotengine.org/en/stable/tutorials/physics/large_world_coordinates.html)  
* [Physics documentation](https://docs.godotengine.org/en/stable/tutorials/physics/index.html)

---