**PrismMesh** – Godot Engine (stable) documentation  
===================================================================

> This page provides the official reference for the `PrismMesh` class, a primitive mesh type that generates a prism‑shaped 3‑D object. The class inherits from `PrimitiveMesh`, which in turn derives from `Mesh`, `Resource`, `RefCounted`, and `Object`.

---

### Inheritance Hierarchy

```
PrimitiveMesh
└── Mesh
    └── Resource
        └── RefCounted
            └── Object
```

### Description

`PrismMesh` is a simple procedural mesh that creates a prism. A prism is defined by an integer number of sides (≥ 3) and a height. The mesh is automatically generated based on these properties and can be used directly in a `MeshInstance` or exported to a `ArrayMesh`.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `height` | `float` | `1.0` | The vertical height of the prism. |
| `sides` | `int` | `3` | The number of sides in the base polygon. Must be ≥ 3. |
| `scale` | `float` | `1.0` | Uniform scale applied to the generated geometry. |

> **Note**: Changing any of these properties automatically updates the mesh geometry.

---

### Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `set_height(value: float)` | `value` | `void` | Sets the prism’s height. |
| `get_height() -> float` |  | `float` | Returns the current height. |
| `set_sides(value: int)` | `value` | `void` | Sets the number of sides. |
| `get_sides() -> int` |  | `int` | Returns the current number of sides. |
| `set_scale(value: float)` | `value` | `void` | Sets the uniform scale. |
| `get_scale() -> float` |  | `float` | Returns the current scale. |
| `generate()` |  | `ArrayMesh` | Generates and returns an `ArrayMesh` representing the prism. |
| `get_mesh() -> Mesh` |  | `Mesh` | Returns the internal mesh instance. |

> The `generate()` method is called automatically when properties change, but can be invoked manually to force regeneration.

---

### Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `changed()` |  | Emitted whenever the mesh geometry is regenerated. |

---

### Example

```gdscript
var prism = PrismMesh.new()
prism.sides = 6   # hexagonal base
prism.height = 2.0
prism.scale = 1.5

var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = prism.get_mesh()
add_child(mesh_instance)
```

---

### API Reference

- **Class**: `PrismMesh`
- **Namespace**: `godot`
- **Language**: GDScript, C#, C++ (via GDExtension)
- **Version**: 4.x (stable)

For more detailed information, including all property setters/getters and available signals, see the full class reference in the Godot documentation.

---