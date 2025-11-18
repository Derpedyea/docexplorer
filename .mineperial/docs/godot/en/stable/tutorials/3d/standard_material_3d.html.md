**Standard Material 3D and ORM Material 3D**  
=================================================================

*(This page provides an overview and reference for Godot’s default 3‑D material types: `StandardMaterial3D` and `ORMMaterial3D`. The following sections are extracted from the official Godot documentation.)*

---

## 1. Introduction

`StandardMaterial3D` and `ORMMaterial3D` are the default 3‑D material types that aim to provide most of the features artists need without requiring custom shaders.  
`ORMMaterial3D` is a variant that combines **Occlusion**, **Roughness**, and **Metallic** (ORM) maps into a single texture channel to save memory and bandwidth.

> *Both material types support the same shading models, but `ORMMaterial3D` is optimized for PBR workflows that use a combined texture.*

---

## 2. Using `StandardMaterial3D`

`StandardMaterial3D` exposes a large number of properties:

| Property | Description |
|----------|-------------|
| **Albedo** | Base color of the surface. |
| **Metallic** | Fraction of metalness (0–1). |
| **Roughness** | Roughness value or roughness texture. |
| **Normal** | Normal map for surface detail. |
| **AO** | Ambient occlusion map. |
| **Emission** | Emissive color and texture. |
| **Clearcoat** | Clearcoat intensity and roughness. |
| **Specular** | Specular intensity. |
| **Depth** | Depth test settings. |
| **Cull Mode** | Back/Front/Disabled. |
| **Blend Mode** | Opaque/Alpha/Translucent/Mask. |

### 2.1 Example

```gdscript
var mat = StandardMaterial3D.new()
mat.albedo_color = Color(1, 0, 0)
mat.metallic = 0.8
mat.roughness = 0.3
material_override = mat
```

---

## 3. Using `ORMMaterial3D`

`ORMMaterial3D` consolidates three maps into one:

```
R channel → Occlusion
G channel → Roughness
B channel → Metallic
```

This reduces texture count and is especially useful for mobile or low‑end devices.

### 3.1 Properties

| Property | Description |
|----------|-------------|
| **Albedo** | Same as `StandardMaterial3D`. |
| **ORM Map** | Packed occlusion/roughness/metallic texture. |
| **Normal** | Normal map. |
| **AO** | Optional additional AO map if needed. |
| **Emission** | Same as `StandardMaterial3D`. |

### 3.2 Example

```gdscript
var orm_mat = ORMMaterial3D.new()
orm_mat.albedo_color = Color(0.5, 0.5, 0.5)
orm_mat.orm_texture = preload("res://orm.png")
orm_mat.normal_texture = preload("res://normal.png")
material_override = orm_mat
```

---

## 4. Switching Between Materials

You can swap materials at runtime or via the editor:

- **Editor**: Select the `MeshInstance3D`, go to the *Material* section, and assign the new material.
- **Code**: Use `material_override` or `surface_override_material` to replace the material dynamically.

---

## 5. Performance Tips

| Tip | Why |
|-----|-----|
| Use **ORMTexture** when possible | Reduces texture memory and bandwidth |
| Keep **Alpha** mode to Opaque unless you need transparency | Improves depth sorting and reduces overdraw |
| Use **Normal Maps** sparingly on low‑poly meshes | Saves processing power |

---

## 6. References

- [Godot Docs – StandardMaterial3D](https://docs.godotengine.org/en/stable/classes/class_standardmaterial3d.html)
- [Godot Docs – ORMMaterial3D](https://docs.godotengine.org/en/stable/classes/class_ormmaterial3d.html)
- [Shading in Godot 4 – Materials Overview](https://docs.godotengine.org/en/stable/tutorials/3d/materials.html)

---