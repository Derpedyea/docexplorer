**Sprite3D** – Godot Engine Documentation  
===========================================

A `Sprite3D` node displays a 2D texture (or an `AtlasTexture`, `AnimatedTexture`, etc.) in a 3D world.  
It extends `SpriteBase3D`, which in turn derives from `GeometryInstance3D > VisualInstance3D > Node3D > Node > Object`.

> **Reference page:** <https://docs.godotengine.org/en/stable/classes/class_sprite3d.html>

---

## Inheritance

```
Object
 └─ Node
     └─ Node3D
         └─ VisualInstance3D
             └─ GeometryInstance3D
                 └─ SpriteBase3D
                     └─ Sprite3D
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **texture** | `Texture2D` | `null` | Texture displayed by the sprite. |
| **flip_h** | `bool` | `false` | Flips the sprite horizontally. |
| **flip_v** | `bool` | `false` | Flips the sprite vertically. |
| **centered** | `bool` | `true` | Centers the texture around the node's origin. |
| **region_enabled** | `bool` | `false` | Enables drawing only a region of the texture. |
| **region_rect** | `Rect2` | `Rect2(0,0,0,0)` | Defines the region of the texture to use when `region_enabled` is `true`. |
| **hframes** | `int` | `1` | Number of horizontal frames for animated textures. |
| **vframes** | `int` | `1` | Number of vertical frames for animated textures. |
| **frame** | `int` | `0` | Current frame index (used only when `hframes`/`vframes` > 1). |
| **offset** | `Vector2` | `Vector2(0,0)` | Offset of the texture in pixels. |
| **z_as_relative** | `bool` | `true` | Whether the sprite’s `z` value is relative to the parent. |
| **z_index** | `int` | `0` | Relative `z` index used for sorting. |
| **cast_shadow** | `int` | `CAST_SHADOW_DISABLED` | How the sprite casts shadows (`CAST_SHADOW_DISABLED`, `CAST_SHADOW_SHADOWS`, `CAST_SHADOW_OPAQUE_PREPASS`, `CAST_SHADOW_ALPHA_PREPASS`). |
| **material_override** | `Material` | `null` | Material that overrides the sprite’s default. |

*All properties are exported and can be edited in the Inspector.*

---

## Methods

| Method | Description |
|--------|-------------|
| **set_texture(texture: Texture2D)** | Sets the texture used by the sprite. |
| **get_texture() -> Texture2D** | Returns the currently assigned texture. |
| **set_region(enabled: bool)** | Enables or disables region drawing. |
| **is_region_enabled() -> bool** | Returns whether region drawing is enabled. |
| **set_region_rect(rect: Rect2)** | Sets the region rectangle. |
| **get_region_rect() -> Rect2** | Gets the current region rectangle. |
| **set_offset(offset: Vector2)** | Sets the texture offset. |
| **get_offset() -> Vector2** | Gets the current offset. |
| **set_frame(frame: int)** | Sets the current frame for animated sprites. |
| **get_frame() -> int** | Returns the current frame. |
| **set_hframes(frames: int)** | Sets the number of horizontal frames. |
| **get_hframes() -> int** | Gets the number of horizontal frames. |
| **set_vframes(frames: int)** | Sets the number of vertical frames. |
| **get_vframes() -> int** | Gets the number of vertical frames. |
| **set_z_as_relative(enabled: bool)** | Sets whether `z_index` is relative. |
| **is_z_as_relative() -> bool** | Checks if `z_index` is relative. |
| **set_z_index(index: int)** | Sets the relative Z index. |
| **get_z_index() -> int** | Returns the relative Z index. |
| **set_cast_shadow(shadow_mode: int)** | Sets shadow casting mode. |
| **get_cast_shadow() -> int** | Retrieves the current shadow mode. |
| **set_material_override(material: Material)** | Overrides the sprite's material. |
| **get_material_override() -> Material** | Returns the overridden material, if any. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `texture_changed()` | Emitted when the texture is changed. |

---

## Usage Example

```gdscript
# A simple script to animate a Sprite3D
extends Sprite3D

@export var speed: float = 2.0

func _process(delta):
    # Cycle through frames
    frame = (frame + 1) % hframes
    # Move along X axis
    translation.x += speed * delta
```

---

## Related Nodes

- `Sprite2D` – 2D sprite node.
- `AnimatedSprite3D` – (in earlier versions) a convenience node for animated textures.
- `MeshInstance3D` – for custom 3D geometry.
- `Spatial` / `Node3D` – parent classes.

---

### Resources

- Godot Engine 4.0 Docs – [Sprite3D](https://docs.godotengine.org/en/stable/classes/class_sprite3d.html)
- Godot Engine 4.1 Release Notes – changes to `Sprite3D` properties
- Community tutorials: “Using Sprite3D in 3D Scenes”

---