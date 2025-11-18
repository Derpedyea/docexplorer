**MeshInstance3D** – Godot Engine 4.x Class Reference
====================================================

> *This page is a technical reference for the `MeshInstance3D` class, which is a 3‑D node that displays a mesh in a scene.*

---

### Inheritance

```
SoftBody3D
└─ MeshInstance3D  ←  GeometryInstance3D
                     └─ VisualInstance3D
                         └─ Node3D
                             └─ Node
                                 └─ Object
```

---

## Description

`MeshInstance3D` is a node that takes a `Mesh` resource and displays it in 3‑D space.  
It can be used to render static geometry, animated meshes, or procedural meshes created at runtime.  

---

## Signals

| Signal | Description |
|--------|-------------|
| `mesh_changed()` | Emitted when the `mesh` property changes. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mesh` | `Mesh` | `null` | The mesh resource to display. |
| `material_override` | `Material` | `null` | Optional material to override the mesh’s materials. |
| `material_overlay` | `Material` | `null` | Material overlay used to change the mesh appearance without modifying the original mesh. |
| `surface_material_override` | `Array` | `[]` | Array of materials to override individual surfaces. |
| `cast_shadow` | `int` (`ShadowCastingSetting`) | `SHADOW_CASTING_SETTING_OFF` | Determines how the mesh casts shadows. |
| `material` | `Array` | `[]` | Array of materials used by the mesh. |
| `use_2d_normals` | `bool` | `false` | If `true`, normals from a 2‑D image are used when rendering. |

> *The full list of properties is generated automatically by Godot's API and may be longer; see the official documentation for all available options.*

---

## Methods

### `set_mesh(mesh: Mesh)`

Assigns a `Mesh` resource to the instance.

```gdscript
var cube = MeshInstance3D.new()
cube.mesh = CubeMesh.new()
```

### `get_mesh() -> Mesh`

Returns the currently assigned `Mesh`.  
Returns `null` if no mesh is set.

### `set_material_override(material: Material)`

Overrides the material used to render the entire mesh.

### `get_material_override() -> Material`

Returns the material override.

### `set_surface_material_override(index: int, material: Material)`

Overrides the material for a specific surface of the mesh.

### `get_surface_material_override(index: int) -> Material`

Returns the overridden material for the specified surface.

### `set_surface_material(index: int, material: Material)`

Sets the material for a specific surface of the mesh.

### `get_surface_material(index: int) -> Material`

Returns the material used for the specified surface.

### `get_surface_count() -> int`

Returns the number of surfaces in the current mesh.

### `is_in_group(name: String) -> bool`

Inherited: Checks if this node belongs to a group.

### `_ready()`

Inherited from `Node3D`. Called when the node enters the scene tree.

> *For the complete method list, including inherited methods, refer to the [Godot API reference](https://docs.godotengine.org/en/stable/classes/class_meshinstance3d.html).*

---

## Usage Examples

### Simple Mesh Instancing

```gdscript
# GDScript
var mesh_instance = MeshInstance3D.new()
mesh_instance.mesh = SphereMesh.new()
mesh_instance.translation = Vector3(0, 1, 0)
add_child(mesh_instance)
```

### Changing Materials at Runtime

```gdscript
var mat = SpatialMaterial.new()
mat.albedo_color = Color(1, 0, 0)
mesh_instance.material_override = mat
```

---

## API Reference

> The following sections provide a full listing of signals, properties, methods, and constants that can be accessed from GDScript, C#, and GDExtension.  
> Use the *"Quickstart"* section in the Godot editor to add a `MeshInstance3D` to a scene and experiment with its properties in real time.

---

### Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `SHADOW_CASTING_SETTING_OFF` | `0` | Mesh does not cast shadows. |
| `SHADOW_CASTING_SETTING_ON` | `1` | Mesh casts shadows normally. |
| `SHADOW_CASTING_SETTING_SHADOWS_ONLY` | `2` | Mesh only casts shadows, no direct rendering. |

---

### Documentation Notes

- The `MeshInstance3D` node is usually used in combination with a `Mesh` resource like `CubeMesh`, `SphereMesh`, `ArrayMesh`, or a custom `SurfaceTool`‑generated mesh.
- For dynamic or animated geometry, consider using `AnimatedMesh` or updating the `ArrayMesh` in `_process()` or via a dedicated script.
- `MeshInstance3D` can be parented to any `Node3D`, and its transform is inherited from its parent.

---

*For more detailed information, including property changes across engine versions and advanced usage (e.g., multi‑sub‑mesh handling, skeletal animation, GPU instancing), refer to the official Godot documentation: https://docs.godotengine.org/en/stable/classes/class_meshinstance3d.html*