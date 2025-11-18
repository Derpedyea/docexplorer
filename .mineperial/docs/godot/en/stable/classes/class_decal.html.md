# Decal

**Inherits**: `VisualInstance3D` ⟨ `Node3D` ⟨ `Node` ⟨ `Object`  

---  

## Description

Decals are used to project a texture onto a `MeshInstance3D`. They are typically employed for adding details such as dirt, bullet holes, or other surface decals without modifying the underlying mesh geometry.

---

## Quick Start

```gdscript
var decal = Decal.new()
decal.texture = preload("res://my_decal.png")
decal.scale = Vector3.ONE
decal.translation = Vector3(0, 1.5, 0)
add_child(decal)
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture` | `null` | The texture to project. |
| `material_override` | `Material` | `null` | Optional material to override the decal’s default rendering. |
| `projection_mode` | `int` | `Project` | The projection mode (e.g., `Project`, `UV`). |
| `size` | `Vector3` | `Vector3.ONE` | The size of the decal in world units. |
| `offset` | `Vector3` | `Vector3.ZERO` | Offset from the decal’s origin. |
| `z_layer` | `int` | `0` | Determines decal depth ordering. |
| `normal` | `Vector3` | `Vector3.UP` | Surface normal for decal orientation. |

*(Full list of properties, methods, and signals can be found in the official Godot reference.)*

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_texture(texture: Texture)` | `void` | `texture` | Sets the decal’s texture. |
| `get_texture() -> Texture` | `Texture` | | Returns the current texture. |
| `set_material_override(material: Material)` | `void` | `material` | Sets an override material. |
| `get_material_override() -> Material` | `Material` | | Retrieves the override material. |
| `set_projection_mode(mode: int)` | `void` | `mode` | Sets the projection mode. |
| `get_projection_mode() -> int` | `int` | | Gets the current projection mode. |
| `set_size(size: Vector3)` | `void` | `size` | Sets the decal’s size. |
| `get_size() -> Vector3` | `Vector3` | | Gets the decal’s size. |

---

## Signals

- `texture_changed` – Emitted when the texture changes.  
- `material_override_changed` – Emitted when the material override changes.

---

## Usage Tips

* **Batching** – Decals that share the same material and texture can be grouped to reduce draw calls.  
* **Occlusion** – Use the `z_layer` property to control whether a decal is rendered before or after certain surfaces.  
* **Performance** – Large decals may increase geometry complexity; consider using multiple smaller decals or baked lighting for static scenes.

---

## Related Nodes

* `MeshInstance3D` – The mesh to which a decal can be applied.  
* `WorldEnvironment` – Adjust global settings for decal rendering.  
* `VisualInstance3D` – Base class providing 3D visual capabilities.

---

For a complete reference (including advanced properties, rendering options, and API details), visit the official [Godot 4.0 documentation](https://docs.godotengine.org/en/stable/classes/class_decal.html).