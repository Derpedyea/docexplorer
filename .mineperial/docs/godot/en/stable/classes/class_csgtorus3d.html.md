**CSGTorus3D – Godot Engine Documentation (stable)**  

---

## Overview

`CSGTorus3D` is a 3‑D constructive solid geometry (CSG) shape node that generates a torus mesh. It can be used to build complex geometry by union, subtraction or intersection with other CSG primitives.

### Inheritance

```
CSGTorus3D
 └─ CSGPrimitive3D
     └─ CSGShape3D
         └─ GeometryInstance3D
             └─ VisualInstance3D
                 └─ Node3D
                     └─ Node
                         └─ Object
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `1.0` | The major radius of the torus (distance from the center of the tube to the center of the torus). |
| `ring_radius` | `float` | `0.5` | The minor radius of the torus (radius of the tube). |
| `radial_segments` | `int` | `64` | Number of segments around the tube. |
| `ring_segments` | `int` | `32` | Number of segments around the torus' main circle. |
| `smoothness` | `int` | `1` | Controls the smoothness of the surface normals (0 = flat, higher values = smooth). |
| `material` | `Material` | `null` | Material used for rendering the torus. |
| `transform` | `Transform3D` | identity | Local transform of the node. |
| `visible` | `bool` | `true` | Whether the node is rendered. |
| `cast_shadows` | `int` | `SHADOW_CASTING_SETTING_ON` | Shadow casting mode. |

> **Note:** All numeric properties are exported, so they appear in the Inspector and can be animated or edited in the editor.

---

## Methods

`CSGTorus3D` does not expose additional public methods beyond those inherited from its parent classes. The mesh is automatically updated when any of the exported properties change.

---

## Signals

`CSGTorus3D` inherits all signals from `CSGShape3D`, such as:

- `shape_changed()` – Emitted when the shape's geometry changes.

---

## Usage Example

```gdscript
# Create a torus in code
var torus = CSGTorus3D.new()
torus.radius = 2.0
torus.ring_radius = 0.5
torus.radial_segments = 48
torus.ring_segments = 24
torus.material = preload("res://materials/tube_material.tres")
add_child(torus)
```

This will add a torus to the scene with the specified dimensions and material.

---

## Further Reading

- [CSG](../csf_csgo.html) – General CSG node documentation.  
- [CSGSphere3D](../classes/class_csgsphere3d.html) – The spherical CSG primitive.  
- [CSGBox3D](../classes/class_csgbox3d.html) – The box CSG primitive.

---