# FogMaterial

**Inherits**: `Material`

---

## Description

`FogMaterial` is a Godot `Resource` used to control how volumetric fog is rendered. It is assigned to a `FogVolume` node to define the visual appearance of fog in a scene.

---

## Basic Usage

```gdscript
# Example: Create a FogVolume and assign a FogMaterial to it

var fog_volume = FogVolume.new()
var fog_material = FogMaterial.new()
fog_volume.material = fog_material
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `color` | `Color` | `Color(1, 1, 1, 1)` | Base color of the fog. |
| `density` | `float` | `0.0` | Overall fog density. |
| `height_falloff` | `float` | `0.0` | How fog density falls off with height. |
| `height_offset` | `float` | `0.0` | Vertical offset for the fog effect. |
| `custom_shader` | `ShaderMaterial` | `null` | Optional custom shader for advanced fog effects. |

> **Note**: The actual list of properties may vary with engine version. Refer to the official Godot documentation for the most up‑to‑date list.

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `set_color(color: Color)` | `color` | `void` | Sets the base fog color. |
| `get_color() -> Color` |  | `Color` | Returns the current fog color. |
| `set_density(density: float)` | `density` | `void` | Sets the overall fog density. |
| `get_density() -> float` |  | `float` | Returns the current fog density. |
| `set_height_falloff(falloff: float)` | `falloff` | `void` | Sets the height fall‑off factor. |
| `get_height_falloff() -> float` |  | `float` | Returns the current height fall‑off. |
| `set_height_offset(offset: float)` | `offset` | `void` | Sets the vertical offset for the fog. |
| `get_height_offset() -> float` |  | `float` | Returns the current height offset. |

---

## Signals

* `changed()` – Emitted whenever any property of the material changes.

---

## Example

```gdscript
extends Node3D

var fog_volume : FogVolume

func _ready() -> void:
    fog_volume = $FogVolume
    var fog_mat = FogMaterial.new()
    fog_mat.color = Color(0.5, 0.6, 0.7, 1.0)
    fog_mat.density = 0.4
    fog_mat.height_falloff = 10.0
    fog_volume.material = fog_mat
```

This script creates a fog volume with a blueish hue, moderate density, and a height fall‑off that fades the fog as you go higher.

---

## References

* [Godot Docs – FogVolume](https://docs.godotengine.org/en/stable/classes/class_fogvolume.html)
* [Godot Docs – ShaderMaterial](https://docs.godotengine.org/en/stable/classes/class_shadermaterial.html)

---