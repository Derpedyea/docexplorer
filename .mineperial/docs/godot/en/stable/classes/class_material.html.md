**Material** – Godot Engine (stable) Documentation  
=====================================================

*This page is part of the Godot Engine class reference and contains the technical
definition of the `Material` class. It is a true documentation page, not a marketing or
generic navigation page.*


## Inheritance

```
Resource
 └─ RefCounted<Object>
```

`Material` is the root of the following concrete material classes:

| Concrete material | Inherited by | Notes |
|--------------------|--------------|-------|
| BaseMaterial3D     | –            | 3‑D material base class |
| CanvasItemMaterial  | –            | 2‑D canvas item material |
| FogMaterial        | –            | Fog‑specific material |
| PanoramaSkyMaterial| –            | Sky material for panoramic textures |
| ParticleProcessMaterial | –      | Particle system material |
| PhysicalSkyMaterial | –           | Physical sky rendering |
| PlaceholderMaterial | –           | Placeholder for missing materials |
| … | – | Additional subclasses may exist |

> *The exact list of inheriting classes can change with new releases. Check the
>   “Inherited By” section on the live page for the most up‑to‑date list.*

---

## Overview

`Material` is the base class for all rendering materials in Godot. It is a
`Resource` that can be reused across multiple nodes and scenes.  
Materials define how surfaces are shaded, including lighting models, textures,
shaders, and various rendering flags.

---

## Key Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `render_priority` | int | 0 | The rendering priority of this material. Lower values are rendered first. |
| `resource_local_to_scene` | bool | false | If true, the material instance is local to the current scene. |
| `flags` | int | 0 | Bitmask for rendering flags such as `ALPHA_SCISSOR` or `SKIP_SHADOWS`. |

> *Additional properties are available on subclasses such as `StandardMaterial3D`,
>   `ShaderMaterial`, etc.*

---

## Common Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `set_shader`(shader: `Shader`) | `Shader` | void | Assigns a custom shader to the material. |
| `get_shader`() | – | `Shader` | Retrieves the currently assigned shader. |
| `set_texture`(param: `int`, texture: `Texture2D`) | int, `Texture2D` | void | Sets a texture for a given shader parameter. |
| `get_texture`(param: `int`) | int | `Texture2D` | Retrieves the texture bound to a shader parameter. |

> *More methods are defined on subclasses. Refer to the specific class
>   documentation for additional functionality.*

---

## Using a Material

```gdscript
# Create a new material instance
var mat = StandardMaterial3D.new()

# Set a texture
mat.albedo_texture = preload("res://textures/diffuse.png")

# Assign to a mesh instance
$MeshInstance.material_override = mat
```

---

### Reference Links

- **Class Reference** – [Godot Engine Documentation](https://docs.godotengine.org/en/stable/classes/class_material.html)
- **Inheritance Tree** – `Resource → RefCounted → Object → Material`
- **Related Classes** – `CanvasItemMaterial`, `StandardMaterial3D`, `ShaderMaterial`, etc.

---