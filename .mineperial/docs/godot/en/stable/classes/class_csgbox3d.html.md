**CSGBox3D – Godot Engine Documentation**

---

## Overview

`CSGBox3D` is a node that represents a 3‑D CSG (Constructive Solid Geometry) box shape.  
It can be combined with other CSG nodes to create complex 3‑D geometry at runtime.

```
Inheritance Hierarchy
--------------------
CSGBox3D
  ├─ CSGPrimitive3D
  │   ├─ CSGShape3D
  │   │   ├─ GeometryInstance3D
  │   │   │   ├─ VisualInstance3D
  │   │   │   │   ├─ Node3D
  │   │   │   │   │   └─ Node
  │   │   │   │   │       └─ Object
```

### Features

* **Dimensions** – Set width, height, and depth via the `extents` property.  
* **Transform** – Position, rotate, and scale the box like any other 3‑D node.  
* **CSG Operations** – Combine with other CSG nodes using `operation` (union, intersection, subtraction).  
* **Collision** – Generates collision shapes automatically when added to a physics tree.  
* **Visual** – Uses the engine’s mesh generation to create a visible cube.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `extents` | `Vector3` | `(1, 1, 1)` | Half‑size of the box on each axis. |
| `operation` | `CSGOperation` | `CSGOperation.UNION` | How this node combines with sibling CSG nodes. |
| `material` | `Material` | `null` | Material to apply to the box surface. |
| `surface_material` | `Material` | `null` | Material for the surface mesh (if different from `material`). |

---

## Methods

```
void set_extents(Vector3 extents)
Vector3 get_extents()

void set_operation(CSGOperation operation)
CSGOperation get_operation()

void set_material(Material material)
Material get_material()

void set_surface_material(Material material)
Material get_surface_material()
```

> **Note:** Changing `extents` or `operation` will automatically rebuild the mesh and collision shape.

---

## Signals

* **`changed()`** – Emitted when the box's geometry or operation changes.

---

## Usage Example

```gdscript
# Create a new CSG box
var box = CSGBox3D.new()
box.extents = Vector3(2, 1, 3)   # 4x2x6 box
box.material = preload("res://materials/box_material.tres")

# Add to the scene tree
add_child(box)
```

---

## Related Nodes

* **`CSGCombiner3D`** – Combine multiple CSG primitives.  
* **`CSGCylinder3D`** – Cylinder primitive.  
* **`CSGRectangle3D`** – 2‑D rectangle primitive.

---

## Documentation Reference

For more detailed information, see the [Godot Engine Class Reference](https://docs.godotengine.org/en/stable/classes/class_csgbox3d.html).

---