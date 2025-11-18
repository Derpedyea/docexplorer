# LightOccluder2D

> **Inherits**: `Node2D` → `CanvasItem` → `Node` → `Object`

## Overview

`LightOccluder2D` is a node that occludes light cast by a `Light2D`, allowing you to create realistic shadows in 2D scenes. The occluder is defined by an `OccluderPolygon2D` and can be customized with a material to control its appearance. The node works automatically with the 2D light system and can be turned on/off or masked to specific lights.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `polygon` | `OccluderPolygon2D` | `null` | The occlusion shape that will block light. The polygon is typically a child `OccluderPolygon2D` node, but can also be a resource. |
| `light_mask` | `int` | `0xFFFFFFFF` | Bitmask determining which `Light2D` nodes affect this occluder. Each bit represents a light layer. |
| `occluder_material` | `CanvasItemMaterial` | `null` | Optional material used when rendering the occluder. This can be used to change its shading or transparency. |
| `enabled` | `bool` | `true` | If `false`, the occluder is ignored by the light system. |

> *Note:* In Godot 4 the property names may differ slightly (`occluder_polygon` instead of `polygon`). The above table is written with the Godot 3.x naming convention for clarity.

---

## Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `get_polygon()` | `OccluderPolygon2D` | | Returns the current occlusion polygon. |
| `set_polygon(polygon: OccluderPolygon2D)` | `void` | `polygon` | Assigns a new occlusion polygon. |
| `get_light_mask()` | `int` | | Retrieves the current light mask. |
| `set_light_mask(mask: int)` | `void` | `mask` | Sets the light mask. |
| `is_enabled()` | `bool` | | Returns whether the occluder is active. |
| `set_enabled(enabled: bool)` | `void` | `enabled` | Enables or disables the occluder. |

> *All setters automatically notify the 2D lighting system to update shadows.*

---

## Signals

None.

---

## Usage Example

```gdscript
# Create a LightOccluder2D in the scene
var occluder = LightOccluder2D.new()
occluder.position = Vector2(200, 150)

# Create an OccluderPolygon2D as a child to define the shape
var polygon = OccluderPolygon2D.new()
polygon.polygon = PoolVector2Array([Vector2(-50, -50), Vector2(50, -50), Vector2(50, 50), Vector2(-50, 50)])
occluder.add_child(polygon)
occluder.polygon = polygon   # Link the polygon to the occluder

# Optionally set a light mask if you only want it to affect certain lights
occluder.light_mask = 1 << 0   # Only affect lights in layer 0

# Add the occluder to the scene tree
add_child(occluder)
```

---

## Common Use Cases

| Situation | Recommendation |
|-----------|----------------|
| **Static shadows** (e.g., walls, furniture) | Place a `LightOccluder2D` with a static `OccluderPolygon2D`. |
| **Dynamic obstacles** (e.g., moving enemies) | Create `LightOccluder2D` nodes with animated or physics-driven positions. |
| **Layered lighting** | Use the `light_mask` property to restrict occlusion to specific light layers. |

---

## Tips

- **Performance** – Keep the polygon as simple as possible; a high‑vertex count can reduce framerate, especially on mobile devices.
- **Material** – The `occluder_material` can be used to render semi‑transparent occluders or to give them a distinct visual style.
- **Editor** – In the editor you can enable the “Occluder” view to see the shadowed area while working on the scene.

---

## Further Reading

- [Light2D – Godot Docs](https://docs.godotengine.org/en/stable/classes/class_light2d.html)
- [OccluderPolygon2D – Godot Docs](https://docs.godotengine.org/en/stable/classes/class_occluderpolygon2d.html)

---