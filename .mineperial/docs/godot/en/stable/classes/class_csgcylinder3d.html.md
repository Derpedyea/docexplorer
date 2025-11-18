**__CSGCylinder3D – Godot Engine (stable) – Class Reference__**

> *Inheritance hierarchy:*  
> `Object` → `Node` → `Node3D` → `VisualInstance3D` → `GeometryInstance3D` → `CSGShape3D` → `CSGPrimitive3D` → **`CSGCylinder3D`**

---

## Overview

`CSGCylinder3D` is a *Constructive Solid Geometry* (CSG) node that creates a cylinder or a cone shape in 3‑D space.  
It can be combined with other CSG nodes (like `CSGCombiner3D` or `CSGMesh3D`) to build complex solid geometry procedurally.

> **Note** – The node works with the Godot 4.0+ CSG system, which uses voxel‑based boolean operations for efficient merging and subtraction of shapes.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| **radius** | `float` | `1.0` | Radius of the base circle. |
| **height** | `float` | `2.0` | Height of the cylinder. |
| **radial_segments** | `int` | `32` | Number of segments around the circumference. |
| **height_segments** | `int` | `1` | Number of subdivisions along the height. |
| **bottom** | `bool` | `true` | Whether to generate the bottom cap. |
| **top** | `bool` | `true` | Whether to generate the top cap. |
| **material** | `Material` | `null` | Material used for rendering. |

> *All properties are exported and can be set via the editor or code.*

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| **create_mesh** | `Mesh` | `()` | Generates a `Mesh` instance based on current parameters. |
| **set_radius** | `void` | `float radius` | Sets the base radius and updates the mesh. |
| **set_height** | `void` | `float height` | Sets the cylinder height and updates the mesh. |
| **set_radial_segments** | `void` | `int segments` | Adjusts the number of radial segments. |
| **set_height_segments** | `void` | `int segments` | Adjusts the height subdivisions. |
| **set_bottom** | `void` | `bool enabled` | Enables or disables the bottom cap. |
| **set_top** | `void` | `bool enabled` | Enables or disables the top cap. |

> These methods are usually used internally; you can simply change the exported properties in the editor.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| **changed** | — | Emitted whenever the shape’s geometry changes (e.g., radius or height). |
| **material_changed** | — | Emitted when the material property is modified. |

---

## Example Usage

```gdscript
extends CSGCylinder3D

func _ready():
    # Create a taller, thinner cylinder
    radius = 0.5
    height = 3.0
    radial_segments = 64
    # Optional: change the material
    material = preload("res://materials/cylinder_material.tres")
```

You can also combine it with `CSGCombiner3D` to create more complex models:

```gdscript
var combiner = CSGCombiner3D.new()
add_child(combiner)

var cylinder = CSGCylinder3D.new()
cylinder.height = 2.0
cylinder.radius = 1.0
combiner.add_child(cylinder)

var box = CSGBox3D.new()
box.extents = Vector3(1, 1, 1)
combiner.add_child(box)
```

---

## References

* [Godot Docs – CSGNode3D](https://docs.godotengine.org/en/stable/classes/class_csgcylinder3d.html)  
* [Constructive Solid Geometry in Godot 4](https://docs.godotengine.org/en/stable/tutorials/3d/constructive_solid_geometry.html)

---