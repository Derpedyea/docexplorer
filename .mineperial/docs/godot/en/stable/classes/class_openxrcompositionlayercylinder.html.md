# OpenXRCompositionLayerCylinder

> **Experimental:** This class may be changed or removed in future versions.

## Inheritance
```
OpenXRCompositionLayer
 └─ Node3D
     └─ Node
         └─ Object
```

## Description
`OpenXRCompositionLayerCylinder` is an OpenXR composition layer that is rendered as an internal **cylindrical** viewport. This allows you to display a 3‑D scene or UI wrapped around a cylindrical surface in a VR or AR environment.

> Note: This is an experimental feature and its API may be subject to change.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `1.0` | The radius of the cylindrical layer. |
| `height` | `float` | `2.0` | The height of the cylindrical layer. |
| `subdivisions` | `int` | `32` | Number of radial subdivisions used to approximate the cylinder. |
| `texture` | `Texture2D` | `null` | The texture applied to the cylindrical surface. |
| `stencil_write` | `bool` | `false` | If true, the layer writes to the OpenXR stencil buffer. |

> Properties are exposed as Godot properties and can be edited in the editor or set via code.

---

## Methods

### `get_radius() -> float`
Returns the current radius of the cylinder.

### `set_radius(radius: float) -> void`
Sets the cylinder's radius.

### `get_height() -> float`
Returns the current height of the cylinder.

### `set_height(height: float) -> void`
Sets the cylinder's height.

### `get_subdivisions() -> int`
Returns the current number of radial subdivisions.

### `set_subdivisions(subdivisions: int) -> void`
Sets the number of radial subdivisions.

### `get_texture() -> Texture2D`
Returns the texture applied to the layer.

### `set_texture(texture: Texture2D) -> void`
Assigns a new texture to the layer.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `layer_changed` | – | Emitted when any visual property of the layer (radius, height, texture, etc.) changes. |

---

## Example Usage

```gdscript
extends OpenXRCompositionLayerCylinder

func _ready():
    # Adjust the cylinder to wrap a 3‑D UI
    radius = 1.5
    height = 3.0
    subdivisions = 64
    texture = preload("res://ui_panel.png")
```

---

### Compatibility Notes
- This class is available only when the OpenXR module is enabled.
- It is intended for experimental usage; future releases may replace or remove it.

---