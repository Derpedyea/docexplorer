**Node2D** – Godot Engine Documentation
========================================

> *This page is part of the Godot Engine class reference.  
>  It describes the `Node2D` class, a core 2‑D node that can be
>  transformed, rotated and scaled. `Node2D` inherits from
>  `CanvasItem` and is the base for most 2‑D objects in Godot.*

---

## Inheritance

```
Object
 └── Node
     └── CanvasItem
         └── Node2D
```

### Inherited By

* `AnimatedSprite2D`
* `AudioListener2D`
* `AudioStreamPlayer2D`
* `BackBufferCopy`
* `Bone2D`
* `Camera2D`
* `CanvasGroup`
* `CanvasModulate`
* `CollisionObject2D`
* `CollisionShape2D`
* `CollisionPolygon2D`
* `ColorRect`
* `Control`
* `CustomShaderMaterial`
* `DynamicFont`
* `GPUParticles2D`
* `GradientTexture2D`
* `LightOccluder2D`
* `LightOccluder3D`
* `Marker2D`
* `MultiMeshInstance2D`
* `NavigationRegion2D`
* `Node2D`
* `ParallaxLayer`
* `ParallaxBackground`
* `Particles2D`
* `Path2D`
* `PathFollow2D`
* `Polygon2D`
* `RigidBody2D`
* `SeparationPolygon2D`
* `ShaderMaterial`
* `Sprite2D`
* `TileMap`
* `TileMapLayer`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`
* `TileSetAtlasSource`

*(the full list can be found in the official documentation.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `position` | `Vector2` | `Vector2(0,0)` | Node’s 2‑D position relative to its parent. |
| `rotation` | `float` | `0.0` | Node’s rotation in radians. |
| `scale` | `Vector2` | `Vector2(1,1)` | Node’s scale factor. |
| `pivot_offset` | `Vector2` | `Vector2(0,0)` | Offset applied before rotation/scale. |
| `centered` | `bool` | `true` | Whether the node’s origin is centered. |
| `flip_h` | `bool` | `false` | Flip horizontally. |
| `flip_v` | `bool` | `false` | Flip vertically. |
| `rect` | `Rect2` | `Rect2(0,0,0,0)` | The node’s 2‑D rectangular region (for `Control`‑derived nodes). |

> **Note:** Many of these properties are inherited from `CanvasItem`.  
>  `Node2D` itself does not add new properties beyond the transform‑related
>  ones listed above.

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `get_global_transform()` | `Transform2D` | | Returns the node’s global transform (position, rotation, scale). |
| `set_global_position(Vector2)` | `void` | `pos` | Sets the global position. |
| `get_global_position()` | `Vector2` | | Returns the global position. |
| `move_local_x(float)` | `void` | `offset` | Moves the node along its local X axis. |
| `move_local_y(float)` | `void` | `offset` | Moves the node along its local Y axis. |
| `move_local(Vector2)` | `void` | `offset` | Moves the node in local space. |
| `set_transform(Transform2D)` | `void` | `transform` | Sets the local transform. |
| `get_transform()` | `Transform2D` | | Returns the local transform. |
| `set_position(Vector2)` | `void` | `pos` | Sets the local position. |
| `set_rotation(float)` | `void` | `rot` | Sets the rotation in radians. |
| `set_scale(Vector2)` | `void` | `scale` | Sets the local scale. |
| `set_pivot_offset(Vector2)` | `void` | `offset` | Sets the pivot offset. |
| `set_centered(bool)` | `void` | `center` | Sets whether the origin is centered. |
| `set_flip_h(bool)` | `void` | `flip` | Sets horizontal flipping. |
| `set_flip_v(bool)` | `void` | `flip` | Sets vertical flipping. |

> **Tip:** Many of the transform methods are *shorthand* wrappers around the
> `Transform2D` object returned by `get_transform()` / `set_transform()`.
> Working directly with the `Transform2D` is more efficient when you need
> to perform multiple changes at once.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `tree_exiting()` | | Emitted when the node is about to be removed from the scene tree. |
| `position_changed()` | | Emitted when the node’s position changes. |
| `rotation_changed()` | | Emitted when the node’s rotation changes. |
| `scale_changed()` | | Emitted when the node’s scale changes. |

---

## Example Usage

```gdscript
# Move a sprite in the +X direction every frame
func _process(delta):
    position += Vector2(200 * delta, 0)  # 200 px per second
```

```csharp
// C# example: rotate a node 90° per second
public override void _Process(double delta)
{
    Rotation += 1.57f * (float)delta; // π/2 rad/s
}
```

---

## Related Nodes

* [CanvasItem](https://docs.godotengine.org/en/stable/classes/class_canvasitem.html)
* [Control](https://docs.godotengine.org/en/stable/classes/class_control.html)
* [Sprite2D](https://docs.godotengine.org/en/stable/classes/class_sprite2d.html)
* [CollisionObject2D](https://docs.godotengine.org/en/stable/classes/class_collisionobject2d.html)

---

**References**

* Godot Engine 4.x documentation – Node2D class page.  
* Godot Engine API reference – `Node2D`.  
* Godot Engine API reference – `CanvasItem`.  

---