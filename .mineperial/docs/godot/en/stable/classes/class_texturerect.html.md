**TextureRect**

A control that displays a texture, for example an icon inside a GUI.  
The texture’s placement is determined by the `stretch_mode`, `expand`, and
`rect_clip` properties.  It also supports region extraction, flipping, and
pixel‑snap scaling.

```
class TextureRect extends Control
```

---

## Inherited from

* `Control`
* `CanvasItem`
* `Node`
* `Object`

---

## Description

`TextureRect` is a GUI node that draws a 2D texture.  It is useful for
displaying images, sprites, icons, or any other 2‑D resource that can be
rendered as a texture.  The node provides several ways to manipulate how the
texture is displayed:

* **Stretch Mode** – `STRETCH_MODE_NONE`, `STRETCH_MODE_KEEP`, etc.  
* **Expand** – Whether to stretch the texture to fit the control’s size.  
* **Region** – Enable a sub‑rectangle of the texture to be displayed.  
* **Flip** – Flip horizontally or vertically.  
* **Pixel Snap** – Enable 2‑D pixel‑snap scaling to avoid blurry textures.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture2D` | `null` | The texture to display. |
| `rect_clip` | `bool` | `false` | Clip the texture to the rectangle of the node. |
| `rect_pivot_offset` | `Vector2` | `Vector2(0, 0)` | Pivot offset for scaling and rotation. |
| `region_enabled` | `bool` | `false` | If enabled, only `region_rect` of the texture is drawn. |
| `region_rect` | `Rect2` | `Rect2(0,0,0,0)` | The rectangle of the texture to display. |
| `stretch_mode` | `enum` | `STRETCH_MODE_NONE` | How the texture is stretched to fit the node. |
| `expand` | `bool` | `false` | Expand the node to the size of the texture. |
| `filter_clip` | `bool` | `true` | Enable linear filtering on clipped textures. |
| `use_2d_pixel_snap` | `bool` | `false` | Snap to 2‑D pixels for crisp rendering. |
| `flip_h` | `bool` | `false` | Flip the texture horizontally. |
| `flip_v` | `bool` | `false` | Flip the texture vertically. |
| `hframes` | `int` | `1` | Number of horizontal frames for an animated texture. |
| `vframes` | `int` | `1` | Number of vertical frames for an animated texture. |
| `frame` | `int` | `0` | Current frame index for animated texture. |
| `h_separation` | `int` | `0` | Horizontal separation between frames. |
| `v_separation` | `int` | `0` | Vertical separation between frames. |

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `set_texture(texture: Texture2D)` | `void` | `texture` | Sets the displayed texture. |
| `get_texture() -> Texture2D` | `Texture2D` | – | Returns the current texture. |
| `set_region(rect: Rect2)` | `void` | `rect` | Sets the region rectangle. |
| `get_region() -> Rect2` | `Rect2` | – | Returns the region rectangle. |
| `set_stretch_mode(mode: int)` | `void` | `mode` | Sets the stretch mode. |
| `get_stretch_mode() -> int` | `int` | – | Returns the stretch mode. |
| `set_expand(expand: bool)` | `void` | `expand` | Sets expand flag. |
| `is_expand() -> bool` | `bool` | – | Returns expand flag. |
| `set_flip_h(flip: bool)` | `void` | `flip` | Sets horizontal flip. |
| `is_flipped_h() -> bool` | `bool` | – | Returns horizontal flip flag. |
| `set_flip_v(flip: bool)` | `void` | `flip` | Sets vertical flip. |
| `is_flipped_v() -> bool` | `bool` | – | Returns vertical flip flag. |
| `set_frame(frame: int)` | `void` | `frame` | Sets current animation frame. |
| `get_frame() -> int` | `int` | – | Returns current frame. |
| `set_frame_coords(frame_coords: Vector2i)` | `void` | `frame_coords` | Sets frame by 2‑D coordinates. |
| `get_frame_coords() -> Vector2i` | `Vector2i` | – | Returns current frame coordinates. |
| `set_hframes(frames: int)` | `void` | `frames` | Sets horizontal frame count. |
| `get_hframes() -> int` | `int` | – | Returns horizontal frame count. |
| `set_vframes(frames: int)` | `void` | `frames` | Sets vertical frame count. |
| `get_vframes() -> int` | `int` | – | Returns vertical frame count. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `texture_changed()` | – | Emitted when the texture is changed. |

---

## Enumerations

```gdscript
enum StretchMode {
    STRETCH_MODE_NONE,
    STRETCH_MODE_KEEP,
    STRETCH_MODE_KEEP_CENTERED,
    STRETCH_MODE_SCALE,
    STRETCH_MODE_TILE
}
```

---

## Usage Example

```gdscript
var rect = TextureRect.new()
rect.texture = preload("res://icon.png")
rect.stretch_mode = TextureRect.StretchMode.STRETCH_MODE_KEEP
rect.expand = true
add_child(rect)
```

---

## Notes

* The `region_enabled` property allows you to display only a sub‑region of
  the texture – useful for sprite sheets.
* When `expand` is `true`, the node will automatically resize to match the
  texture’s size unless overridden by the parent container.
* Pixel‑snap (`use_2d_pixel_snap`) ensures crisp edges when using low‑res
  textures at non‑integer scales.