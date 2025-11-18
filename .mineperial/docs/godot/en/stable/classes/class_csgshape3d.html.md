# CSGShape3D

**Class**: `CSGShape3D`  
**Version**: stable (Godot 4.x)  
**Inherits**: `GeometryInstance3D → VisualInstance3D → Node3D → Node → Object`

> The *CSGShape3D* class is the base type for all constructive solid geometry (CSG) 3‑D shapes.  It supplies the common API that is used by all primitives (`CSGBox3D`, `CSGCylinder3D`, etc.) and by the combiner node (`CSGCombiner3D`) to build complex meshes at runtime.

---

## Inherited By

- `CSGCombiner3D`
- `CSGPrimitive3D`

---

## Properties

| Property           | Type          | Default | Description |
|--------------------|---------------|---------|-------------|
| `material_override`| `Material`    | `null`  | Optional material that overrides the mesh’s default material. |
| `material`         | `Material`    | `null`  | Material that will be used for rendering if `material_override` is not set. |
| `mesh`             | `ArrayMesh`   | `null`  | The generated mesh for the shape. |
| `transform`        | `Transform3D` | `IDENTITY` | The local transform applied to the shape. |
| `visible`          | `bool`        | `true`  | Whether the shape is rendered. |
| `cast_shadow`      | `int`         | `1` (Cast shadows) | Shadow‑casting mode. |
| `collision_layer`  | `int`         | `1` | The collision layer for physics interactions. |
| `collision_mask`   | `int`         | `1` | The collision mask used to filter collision partners. |

> **Note**: The majority of the properties above are inherited from `Node3D`, `VisualInstance3D`, or `GeometryInstance3D`.  Only those that are specific to CSG shapes are listed explicitly.

---

## Methods

| Method | Description |
|--------|-------------|
| `_ready()` | Called when the node enters the scene tree.  Override to perform any initialization that requires the node to be fully added. |
| `_process(delta)` | Called every frame (if processing is enabled).  Override to perform per‑frame logic. |
| `_physics_process(delta)` | Called every physics tick.  Override for physics‑related logic. |
| `get_mesh()` | Returns the current `ArrayMesh` of the shape. |
| `set_mesh(mesh: ArrayMesh)` | Assigns a new mesh to the shape (usually used internally by subclasses). |
| `apply_transform()` | Re‑computes the mesh after the node’s transform has changed. |
| `get_collision_shape()` | Returns the collision shape used by the shape for physics interactions. |
| `duplicate()` | Creates a duplicate of the shape node. |
| `free()` | Deletes the node from the scene. |
| `is_inside_tree()` | Returns `true` if the node is currently inside the scene tree. |

> Subclasses may expose additional, shape‑specific methods (e.g. `set_size` on `CSGBox3D`).

---

## Signals

| Signal | Description |
|--------|-------------|
| `shape_changed()` | Emitted whenever the shape’s geometry is modified (e.g. after changing size, radius, or applying a CSG operation). |

---

## Typical Usage

```gdscript
# Create a CSG box programmatically
var box = CSGBox3D.new()
box.size = Vector3(2, 2, 2)
box.material = preload("res://materials/box_material.tres")
add_child(box)

# Combine two shapes
var combiner = CSGCombiner3D.new()
combiner.operation = CSGCombiner3D.OPERATION_UNION
combiner.add_child(box)
combiner.add_child(sphere)
add_child(combiner)
```

*CSG shapes are recomputed every time the scene changes, so they are best suited for small to medium‑sized geometry that needs to be edited dynamically.*  
For static or large geometry, it is recommended to use regular mesh instances instead.

---

## References

- [CSGBox3D](https://docs.godotengine.org/en/stable/classes/class_csgbox3d.html)  
- [CSGCylinder3D](https://docs.godotengine.org/en/stable/classes/class_csgcylinder3d.html)  
- [CSGCombiner3D](https://docs.godotengine.org/en/stable/classes/class_csgcombiner3d.html)  

---