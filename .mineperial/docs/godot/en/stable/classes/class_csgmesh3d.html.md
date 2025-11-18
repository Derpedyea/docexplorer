**CSGMesh3D**  
*Godot Engine – Class Reference*

---

### Inheritance
```text
CSGPrimitive3D
    ↳ CSGShape3D
        ↳ GeometryInstance3D
            ↳ VisualInstance3D
                ↳ Node3D
                    ↳ Node
                        ↳ Object
```

---

### Description
`CSGMesh3D` is a CSG (Constructive Solid Geometry) node that uses a **mesh resource** to create a 3D shape. It behaves like any other `CSGShape3D` node, but instead of a primitive geometric shape (box, sphere, etc.) it renders the geometry stored in the chosen mesh.

> **Key points**
> - The mesh can be edited directly in the inspector or by loading a custom `.obj`, `.stl`, or other supported format.
> - The node participates in the CSG hierarchy, meaning it can be combined with other CSG nodes (`CSGCylinder3D`, `CSGCube3D`, `CSGPolygon3D`, etc.) using union, intersection, and difference operations.

---

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **mesh** | `Mesh` | `null` | The mesh resource used to build the CSG shape. |
| **material** | `Material` | `null` | Material applied to the mesh. |
| **smooth_faces** | `bool` | `false` | If true, adjacent faces will be smoothed. |
| **smoothing_angle** | `float` | `60.0` | Angle in degrees for face smoothing. |
| **use_interior** | `bool` | `false` | When enabled, the interior of the mesh is considered solid for CSG operations. |
| **use_collision** | `bool` | `true` | If true, a collision shape is generated automatically. |
| **scale** | `Vector3` | `Vector3(1,1,1)` | Scale applied to the mesh. |

*(The full list of properties can be viewed in the Godot editor's inspector.)*

---

### Signals
| Signal | Parameters | Description |
|--------|------------|-------------|
| **shape_changed** | — | Emitted when the mesh or its parameters change, prompting the CSG system to recompute. |

---

### Methods
| Method | Signature | Description |
|--------|------------|-------------|
| `set_mesh(mesh: Mesh)` | Sets the mesh resource. |
| `get_mesh() -> Mesh` | Returns the current mesh resource. |
| `set_material(material: Material)` | Applies a material to the mesh. |
| `get_material() -> Material` | Retrieves the applied material. |
| `set_use_interior(use_interior: bool)` | Enables or disables interior usage for CSG. |
| `is_using_interior() -> bool` | Checks if interior usage is enabled. |
| `set_smoothing_angle(angle: float)` | Sets the smoothing angle. |
| `get_smoothing_angle() -> float` | Gets the current smoothing angle. |
| `set_scale(scale: Vector3)` | Scales the mesh. |
| `get_scale() -> Vector3` | Returns the current scale. |
| `force_update()` | Forces a recomputation of the CSG geometry. |

---

### Usage Example
```gdscript
# Add a CSGMesh3D to a scene
var mesh_node = CSGMesh3D.new()
mesh_node.mesh = preload("res://assets/my_model.obj")
mesh_node.material = preload("res://materials/my_mat.tres")
mesh_node.smooth_faces = true
mesh_node.smoothing_angle = 45.0
add_child(mesh_node)
```

---

### Documentation Notes
* `CSGMesh3D` inherits all of the methods from `CSGPrimitive3D` and `CSGShape3D`, such as `set_opposite`, `set_use_collision`, etc.
* When changing the mesh or its properties at runtime, call `mesh_node.force_update()` to ensure the CSG geometry is updated.

For more detailed information, including all inherited properties, signals, and methods, refer to the official Godot Engine class reference or open the **CSGMesh3D** node in the editor’s **Inspector**.