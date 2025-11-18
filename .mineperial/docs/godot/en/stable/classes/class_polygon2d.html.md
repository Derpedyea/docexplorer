# Polygon2D

A 2‑D polygon that can be drawn, textured, and used as a collision shape.

> **Inheritance chain**  
> `Object` → `Node` → `CanvasItem` → `Node2D` → **Polygon2D**

---

## Description

A `Polygon2D` is defined by a sequence of points that form a closed polygon. Each point is automatically connected to the next, and the last point is connected back to the first. The polygon can optionally have a texture, UV mapping, and can be used for drawing, collision, or as a mask.

> *Key points*  
> * The points are expressed in the local space of the node.  
> * The polygon is rendered as a triangle fan internally.  
> * It can be used as a `CollisionPolygon2D` by copying its points.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `polygon` | `PackedVector2Array` | `[]` | The list of points that make up the polygon. |
| `texture` | `Texture2D` | `null` | Texture to apply to the polygon. |
| `tex_uv_rect` | `Rect2` | `Rect2(0,0,0,0)` | UV rectangle used when the texture is a sub‑region. |
| `custom_uvs` | `PackedVector2Array` | `[]` | Custom UV mapping per vertex. |
| `material` | `Material` | `null` | Custom material for rendering. |
| `collision_layer` | `int` | `1` | Collision layer mask. |
| `collision_mask` | `int` | `1` | Collision mask. |
| `use_rim` | `bool` | `false` | Enables rim lighting (for 3‑D shaders). |
| `offset` | `Vector2` | `Vector2(0, 0)` | Position offset of the polygon. |

> **Tip**: `polygon` is the most common property – set it to a `PackedVector2Array` to change the shape.

---

## Signals

| Signal | Description |
|--------|-------------|
| `polygon_changed` | Emitted when the `polygon` points are modified. |

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `set_polygon(points: PackedVector2Array)` | `void` | `points` | Sets the polygon points. |
| `get_polygon() -> PackedVector2Array` | `PackedVector2Array` | | Returns current polygon points. |
| `set_texture(tex: Texture2D)` | `void` | `tex` | Sets the texture. |
| `get_texture() -> Texture2D` | `Texture2D` | | Returns the current texture. |
| `set_uv_rect(rect: Rect2)` | `void` | `rect` | Sets the UV rectangle for the texture. |
| `get_uv_rect() -> Rect2` | `Rect2` | | Returns the UV rectangle. |
| `set_custom_uvs(uvs: PackedVector2Array)` | `void` | `uvs` | Sets custom UV mapping. |
| `get_custom_uvs() -> PackedVector2Array` | `PackedVector2Array` | | Returns custom UV mapping. |
| `set_material(mat: Material)` | `void` | `mat` | Assigns a custom material. |
| `get_material() -> Material` | `Material` | | Retrieves the material. |
| `set_collision_layer(layer: int)` | `void` | `layer` | Sets collision layer mask. |
| `get_collision_layer() -> int` | `int` | | Returns collision layer. |
| `set_collision_mask(mask: int)` | `void` | `mask` | Sets collision mask. |
| `get_collision_mask() -> int` | `int` | | Returns collision mask. |
| `set_offset(offset: Vector2)` | `void` | `offset` | Offsets the polygon in local space. |
| `get_offset() -> Vector2` | `Vector2` | | Returns the current offset. |
| `get_local_bounds() -> Rect2` | `Rect2` | | Returns the bounding box of the polygon in local coordinates. |
| `get_global_bounds() -> Rect2` | `Rect2` | | Returns the bounding box in global coordinates. |

> **Example**  
> ```gdscript
> var poly = Polygon2D.new()
> poly.polygon = [Vector2(0,0), Vector2(100,0), Vector2(50,50)]
> add_child(poly)
> ```

---

## Usage Notes

* **Drawing** – If only the shape is needed, set the `polygon` property. The node will automatically handle rendering.
* **Texture Mapping** – When `texture` is set, you can provide UVs through `custom_uvs` or use `tex_uv_rect` for a sub‑region.
* **Collision** – Use the `CollisionPolygon2D` node to create a physical shape; you can copy the `polygon` points directly.
* **Performance** – For static polygons that rarely change, enable `CanvasItem` caching (`set_use_batching(true)` in Godot 4.1+).  

---

## Example: Simple Triangle

```gdscript
var triangle = Polygon2D.new()
triangle.polygon = [
    Vector2(0, 0),
    Vector2(200, 0),
    Vector2(100, 200)
]
add_child(triangle)
```

This will create a white triangle centered at the node's origin. Add a `Modulate` color to change its appearance.

---

## Further Reading

* [CanvasItem](../class_canvasitem.html) – Base class for 2‑D drawing.
* [CollisionPolygon2D](../class_collisionpolygon2d.html) – For physics shapes.
* [Texture2D](../class_texture2d.html) – Handling textures.