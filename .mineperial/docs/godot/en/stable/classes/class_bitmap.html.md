# BitMap

*Inherits:* `Resource → RefCounted → Object`  
*Type:* Boolean matrix – a two‑dimensional array of boolean values that can be used to store a binary mask efficiently.

---

## Overview

`BitMap` represents a 2‑D array of bits (true/false). It is often used for:
* 2‑D collision masks
* Image masking / transparency
* Any operation that benefits from a compact representation of binary data

Unlike `Image`, a `BitMap` stores only a single bit per pixel, making it memory‑efficient and fast for boolean operations.

---

## Constructors

| Constructor | Arguments | Description |
|-------------|-----------|-------------|
| `BitMap()` | – | Creates an empty bitmap. |
| `BitMap(new_size)` | `new_size: Vector2i` | Creates an empty bitmap of the given size. |

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `create_from_image(image: Image, force_alpha: bool = false)` | `void` | `image: Image`, `force_alpha: bool` | Creates a bitmap from the given image. If `force_alpha` is `true`, the bitmap will consider only the alpha channel. |
| `create_from_image_alpha(image: Image, alpha_threshold: float = 1.0)` | `void` | `image: Image`, `alpha_threshold: float` | Creates a bitmap from an image using the alpha channel, thresholded at `alpha_threshold`. |
| `create_from_image_rect(image: Image, rect: Rect2i, force_alpha: bool = false)` | `void` | `image: Image`, `rect: Rect2i`, `force_alpha: bool` | Creates a bitmap from a rectangular area of an image. |
| `clear()` | `void` | – | Sets all bits to `false`. |
| `set_bit(x: int, y: int, value: bool)` | `void` | `x: int`, `y: int`, `value: bool` | Sets the bit at the given coordinates. |
| `get_bit(x: int, y: int) → bool` | `bool` | `x: int`, `y: int` | Returns the bit at the given coordinates. |
| `set_bit_rect(rect: Rect2i, value: bool)` | `void` | `rect: Rect2i`, `value: bool` | Sets all bits inside `rect` to `value`. |
| `get_bit_rect(rect: Rect2i) → Bitmap` | `Bitmap` | `rect: Rect2i` | Returns a new `BitMap` containing only the bits inside `rect`. |
| `intersect(other: BitMap) → BitMap` | `Bitmap` | `other: BitMap` | Returns a new bitmap containing the intersection of this bitmap and `other`. |
| `union(other: BitMap) → BitMap` | `Bitmap` | `other: BitMap` | Returns a new bitmap containing the union of this bitmap and `other`. |
| `difference(other: BitMap) → BitMap` | `Bitmap` | `other: BitMap` | Returns a new bitmap containing the difference between this bitmap and `other`. |
| `intersects(other: BitMap) → bool` | `bool` | `other: BitMap` | Checks if any bit overlaps between two bitmaps. |
| `intersects_rect(rect: Rect2i) → bool` | `bool` | `rect: Rect2i` | Checks if any bit overlaps within a rectangle. |
| `fill(value: bool)` | `void` | `value: bool` | Sets all bits to `value`. |
| `invert()` | `void` | – | Inverts all bits. |
| `get_size() → Vector2i` | `Vector2i` | – | Returns the size of the bitmap. |
| `get_width() → int` | `int` | – | Width of the bitmap. |
| `get_height() → int` | `int` | – | Height of the bitmap. |
| `set_size(new_size: Vector2i)` | `void` | `new_size: Vector2i` | Resizes the bitmap; preserves existing data in the overlapping area. |
| `to_image() → Image` | `Image` | – | Converts the bitmap to a greyscale `Image` (1‑bit per pixel). |
| `to_texture() → Texture2D` | `Texture2D` | – | Creates a `Texture2D` from the bitmap. |
| `to_byte_array() → PackedByteArray` | `PackedByteArray` | – | Packs the bitmap into a byte array. |
| `load_from_byte_array(data: PackedByteArray)` | `void` | `data: PackedByteArray` | Loads the bitmap from a packed byte array. |
| `encode() → PackedByteArray` | `PackedByteArray` | – | Encodes the bitmap into a compressed format. |
| `decode(data: PackedByteArray)` | `void` | `data: PackedByteArray` | Decodes a compressed byte array into a bitmap. |
| `get_collision_shape()` | `Shape2D` | – | Returns a simple `RectangleShape2D` that encloses all set bits (useful for collision). |
| `get_bounding_rect()` | `Rect2i` | – | Returns the smallest rectangle that contains all set bits. |

> **Note:** The exact set of methods may vary slightly between Godot 4.x releases; refer to the current API reference for the most up‑to‑date list.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `size` | `Vector2i` | `Vector2i(0, 0)` | The dimensions of the bitmap. |
| `data` | `PackedByteArray` | – | Raw bit data (read‑only). |

> Use the setters/getters (`set_size()`, `get_size()`) instead of directly mutating `size`.

---

## Signals

`BitMap` does **not** emit any signals.

---

## Example Usage

```gdscript
# Create a 32x32 bitmap
var bmp = BitMap.new()
bmp.set_size(Vector2i(32, 32))

# Draw a simple 8x8 square in the middle
bmp.set_bit_rect(Rect2i(12, 12, 8, 8), true)

# Convert to texture for visual debugging
var tex = bmp.to_texture()
$Sprite2D.texture = tex
```

---

## See also

* `Image` – For full‑color images.
* `Texture2D` – Texture class that can be created from a `BitMap`.
* `CollisionPolygon2D` – Often used alongside `BitMap` for custom collision shapes.