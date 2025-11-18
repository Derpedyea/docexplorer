# SoftBody3D

**Godot Engine 4.x – Class Reference**

> A deformable 3‑D physics mesh used to create elastic or jelly‑like objects in a scene.  
> `SoftBody3D` inherits from `MeshInstance3D` and is rendered using a standard
> `Mesh`. The physical behavior is handled by the *Soft Body Physics* engine
> (part of Godot’s 3‑D physics subsystem).

> **Tip** – Soft bodies are *resource intensive*. Use them only where you need
> realistic cloth, rubber or fluid‑like dynamics.

---

## Inheritance Hierarchy

```
Object
└─ Node
   └─ Node3D
      └─ VisualInstance3D
         └─ GeometryInstance3D
            └─ MeshInstance3D
               └─ SoftBody3D
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **physics_material** | `PhysicsMaterial` | `null` | The physics material that defines the body’s friction, bounciness, etc. |
| **collision_layer** | `int` | `1` | Layer mask for collision filtering. |
| **collision_mask** | `int` | `1` | Mask for collision filtering. |
| **gravity_scale** | `float` | `1.0` | Multiplier for the effect of gravity on this soft body. |
| **use_collision_mesh** | `bool` | `true` | If `true`, a collision mesh is generated from the surface mesh. |
| **mass** | `float` | `1.0` | Total mass of the soft body. |
| **linear_damp** | `float` | `0.0` | Linear damping coefficient. |
| **angular_damp** | `float` | `0.0` | Angular damping coefficient. |
| **fixed_pivots** | `PackedVector3Array` | `[]` | Vertices that should be kept static. |
| **colliders** | `Array<CollisionShape3D>` | `[]` | Colliders that are part of the soft body. |
| **mesh** | `ArrayMesh` | `null` | The visual mesh of the soft body. |

> *Note:* Many properties are inherited from `MeshInstance3D`.  
> Use the *Inspector* in the editor to tweak them interactively.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `body_entered` | `body: Node3D` | Emitted when a physics body collides with this soft body. |
| `body_exited` | `body: Node3D` | Emitted when a physics body stops colliding. |

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_physics_material(physics_material : PhysicsMaterial)` | `void` | Assign a physics material to the soft body. |
| `get_physics_material() : PhysicsMaterial` | `PhysicsMaterial` | Retrieve the current physics material. |
| `set_gravity_scale(scale : float)` | `void` | Set the gravity multiplier. |
| `get_gravity_scale() : float` | `float` | Get the current gravity multiplier. |
| `set_mass(mass : float)` | `void` | Set the mass of the soft body. |
| `get_mass() : float` | `float` | Retrieve the current mass. |
| `set_linear_damp(damp : float)` | `void` | Set linear damping. |
| `get_linear_damp() : float` | `float` | Get linear damping. |
| `set_angular_damp(damp : float)` | `void` | Set angular damping. |
| `get_angular_damp() : float` | `float` | Get angular damping. |
| `add_fixed_pivot(vertex_index : int)` | `void` | Pin a vertex so it does not move during simulation. |
| `remove_fixed_pivot(vertex_index : int)` | `void` | Release a previously fixed vertex. |
| `get_fixed_pivots() : PackedInt32Array` | `PackedInt32Array` | List of indices of currently fixed vertices. |
| `set_use_collision_mesh(use : bool)` | `void` | Enable or disable automatic collision mesh generation. |
| `is_using_collision_mesh() : bool` | `bool` | Return whether a collision mesh is currently used. |
| `set_mesh(mesh : ArrayMesh)` | `void` | Assign a visual mesh to the soft body. |
| `get_mesh() : ArrayMesh` | `ArrayMesh` | Retrieve the assigned visual mesh. |

> **Tip:** The `ArrayMesh` must be **editable** (i.e. not a `PackedMesh`) for
> the soft body simulation to work correctly.

---

## Example – Adding a Soft Body to a Scene

```gdscript
# preload a mesh (e.g. a sphere)
var sphere_mesh = preload("res://assets/sphere_solid.mesh")
var physics_material = preload("res://materials/soft_body.material")

func _ready() -> void:
    var soft_body = SoftBody3D.new()
    soft_body.mesh = sphere_mesh
    soft_body.physics_material = physics_material
    soft_body.mass = 2.0
    soft_body.gravity_scale = 1.0
    add_child(soft_body)
```

**Scene Setup**

1. Add a `SoftBody3D` node to your scene.
2. In the **Inspector**, assign a **Mesh** (`ArrayMesh`) and a **PhysicsMaterial**.
3. Adjust `mass`, `damp`, and `gravity_scale` to tune the softness.
4. For cloth‑like effects, create a `SurfaceTool` mesh and pin vertices
   with `add_fixed_pivot()`.

---

## Common Use‑Cases

- **Jelly or rubber objects** – Use a low `mass` and high `gravity_scale`.
- **Cloth simulation** – Create a grid of vertices, pin the edges and let
  the body fall onto a plane.
- **Soft character skins** – Combine a `SoftBody3D` with a `Skeleton3D` for
  realistic skin deformation.

---

## Caveats

| Issue | Work‑around |
|-------|-------------|
| **Performance** – Soft bodies are expensive, especially with many vertices. | Reduce vertex count, use `use_collision_mesh = true` to generate a simplified collider. |
| **Thread‑Safety** – Physics simulation runs on a separate thread. | Avoid changing properties during `_physics_process`; use `call_deferred()` or `yield(get_tree(), "physics_frame")`. |
| **Mesh Compatibility** – Only `ArrayMesh` works; `StandardMesh` is unsupported. | Convert your mesh to `ArrayMesh` in the editor or via `ArrayMesh.new()`. |

---

## Further Reading

- **Physics Overview** – <https://docs.godotengine.org/en/stable/tutorials/physics/physics_overview.html>
- **Soft Body Demo** – <https://godotengine.org/asset-library/asset/123> (example project)
- **Shader Reference** – Soft bodies use the standard `SpatialMaterial`; no special shaders required.

---