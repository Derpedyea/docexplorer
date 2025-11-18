# Sprite2D

**Inheritance hierarchy**

```
Object
 └── Node
     └── CanvasItem
         └── Node2D
             └── Sprite2D
```

---

## Overview

`Sprite2D` is a general‑purpose 2D sprite node used to display a texture in a Godot scene.  
The displayed image can be:

- A full texture, or
- A region extracted from a larger atlas texture.

---

## Basic usage

```gdscript
var sprite = Sprite2D.new()
sprite.texture = preload("res://character.png")
add_child(sprite)
```

> **Note:** When using a texture atlas, set the `region_rect` or enable `region` mode to display only the desired portion of the atlas.

---

## Key properties

| Property | Type | Description |
|----------|------|-------------|
| `texture` | `Texture2D` | The texture to display. |
| `region` | `bool` | If `true`, only a sub‑rectangle of the texture is shown. |
| `region_rect` | `Rect2` | Defines the sub‑rectangle when `region` is enabled. |
| `flip_h` | `bool` | Flip the sprite horizontally. |
| `flip_v` | `bool` | Flip the sprite vertically. |
| `centered` | `bool` | If `true`, the sprite is centered on its position. |
| `offset` | `Vector2` | Extra offset from the node’s origin. |

---

## Key methods

| Method | Signature | Description |
|--------|------------|-------------|
| `set_texture(texture)` | `void` | Assigns a new texture. |
| `get_texture()` | `Texture2D` | Returns the current texture. |
| `set_region(enabled)` | `void` | Enable or disable region mode. |
| `is_region_enabled()` | `bool` | Query the region flag. |
| `set_region_rect(rect)` | `void` | Define the region rectangle. |
| `get_region_rect()` | `Rect2` | Retrieve the current region rectangle. |

---

## Signals

`Sprite2D` does not emit any custom signals beyond those inherited from `CanvasItem` and `Node2D`.

---

## Common use‑cases

- **Animated sprites**: Combine with `AnimationPlayer` or `AnimatedSprite2D` to create frame‑by‑frame animations.
- **Texture atlases**: Use a single large texture file and switch `region_rect` to display different frames or tiles.
- **UI elements**: Place `Sprite2D` nodes inside `Control` nodes to show images in the UI.

---

## See also

- [CanvasItem](../class_canvasitem.html)
- [Node2D](../class_node2d.html)
- [Texture2D](../class_texture2d.html)
- [AnimatedSprite2D](../class_animatedsprite2d.html)  

---