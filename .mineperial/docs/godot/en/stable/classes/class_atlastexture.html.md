**AtlasTexture**  
===================

> **Godot Engine 4.x (stable)** – *Class reference*  
> *<https://docs.godotengine.org/en/stable/classes/class_atlastexture.html>*  

---

### Inheritance

```
Object → RefCounted → Resource → Texture2D → AtlasTexture
```

---

### Description

`AtlasTexture` is a `Texture2D` that renders only a sub‑region of another `Texture2D`.  
It’s typically used when you have a sprite sheet (an “atlas”) and need a single texture that refers to a specific sprite within that sheet. The class stores a reference to the atlas, the rectangle that represents the region to display, and optional margin/flags information.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **atlas** | `Texture2D` | `null` | The texture that contains the atlas image. |
| **region** | `Rect2` | `Rect2(0, 0, 0, 0)` | The sub‑rectangle of the atlas to display. The coordinates and size are in **pixels** relative to the atlas image. |
| **margin** | `int` | `0` | Optional pixel padding added to each side of the region. Useful for trimming or for creating a texture that includes a border. |
| **filter_clip** | `bool` | `false` | If `true`, texture filtering will be disabled when sampling outside the defined region. |
| **flags** | `int` | `0` | Texture flags inherited from `Texture2D` (e.g., `TEXTURE_FLAGS_MIPMAPS`, `TEXTURE_FLAGS_REPEAT`). |

> **Note:** All properties are exported, so they can be set directly from the editor or via the Inspector.

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| **new()** | `AtlasTexture new()` | Constructor – returns a fresh `AtlasTexture`. |
| **set_atlas(Texture2D atlas)** | `void set_atlas(Texture2D atlas)` | Assigns the atlas image. |
| **get_atlas()** | `Texture2D get_atlas()` | Returns the current atlas texture. |
| **set_region_rect(Rect2 region)** | `void set_region_rect(Rect2 region)` | Sets the sub‑region to display. |
| **get_region_rect()** | `Rect2 get_region_rect()` | Retrieves the current region rectangle. |
| **set_margin(int margin)** | `void set_margin(int margin)` | Sets the optional pixel margin. |
| **get_margin()** | `int get_margin()` | Returns the current margin value. |
| **set_filter_clip(bool enable)** | `void set_filter_clip(bool enable)` | Enables or disables clipping of the texture filter. |
| **get_filter_clip()** | `bool get_filter_clip()` | Checks whether filter clipping is enabled. |
| **_get_flags()** | `int _get_flags()` | (Inherited) Returns the texture flags. |
| **_set_flags(int flags)** | `void _set_flags(int flags)` | (Inherited) Sets the texture flags. |

> **Tip:** `AtlasTexture` can also be created directly in the Godot editor by selecting **Texture > AtlasTexture** from the *Inspector* or via code with `var at = AtlasTexture.new(); at.atlas = your_sprite_sheet; at.region = Rect2(32, 0, 64, 64);`.

---

## Usage Example

```gdscript
# Create an AtlasTexture from a sprite sheet
var sprite_sheet : Texture2D = preload("res://assets/spritesheet.png")
var sprite : AtlasTexture = AtlasTexture.new()
sprite.atlas = sprite_sheet

# Show the third sprite (assuming 64x64 sprites with 1px padding)
sprite.region = Rect2(64, 0, 64, 64)
sprite.margin = 1
sprite.filter_clip = true

# Assign to a Sprite node
$Sprite.texture = sprite
```

---

## Related Classes

- `Texture2D` – Base class for 2D textures.  
- `Texture` – Root class for all texture resources.  
- `Sprite2D` – Node that displays a `Texture2D`.  

---

### Further Reading

- [Texture](https://docs.godotengine.org/en/stable/classes/class_texture.html)  
- [Sprite2D](https://docs.godotengine.org/en/stable/classes/class_sprite2d.html)  
- [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html)

---

*This page is part of the official Godot Engine documentation and contains reference material for developers.*