**SpriteBase3D – Godot Engine Class Reference**

---

### Overview
`SpriteBase3D` is a node class in Godot that provides the core functionality for 2D sprite display within a 3D environment. It is the base class for `AnimatedSprite3D` and `Sprite3D`.

#### Inheritance
```
GeometryInstance3D
  └─ VisualInstance3D
      └─ Node3D
          └─ Node
              └─ Object
```

### Description
A `SpriteBase3D` node displays 2D text or images in a 3D space. It manages texture mapping, animation frames, and drawing order relative to other 3D geometry.

### Key Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture2D` | – | The texture to display. |
| `region_enabled` | `bool` | `false` | Whether to display a region of the texture. |
| `region_rect` | `Rect2` | – | Defines the region of the texture to show when `region_enabled` is `true`. |
| `flip_h` | `bool` | `false` | Flip the sprite horizontally. |
| `flip_v` | `bool` | `false` | Flip the sprite vertically. |
| `hframes` | `int` | `1` | Number of horizontal frames in a sprite sheet. |
| `vframes` | `int` | `1` | Number of vertical frames in a sprite sheet. |
| `frame` | `int` | `0` | Current frame index (row/column). |
| `offset` | `Vector2` | `Vector2(0,0)` | Offset applied to the sprite. |
| `z_index` | `int` | `0` | Draw order relative to other sprites. |
| `atlas` | `AtlasTexture` | – | Optional atlas texture. |
| `material` | `Material` | – | Custom material applied to the sprite. |

### Key Methods
| Method | Signature | Description |
|--------|-----------|-------------|
| `get_texture()` | `Texture2D` | Returns the current texture. |
| `set_texture(texture: Texture2D)` | `void` | Sets the sprite texture. |
| `get_frame()` | `int` | Returns the current frame index. |
| `set_frame(frame: int)` | `void` | Sets the current frame index. |
| `get_region()` | `bool` | Returns whether a texture region is enabled. |
| `set_region_enabled(enabled: bool)` | `void` | Enables/disables a texture region. |
| `get_region_rect()` | `Rect2` | Returns the region rectangle. |
| `set_region_rect(rect: Rect2)` | `void` | Sets the region rectangle. |
| `get_flip_h()` | `bool` | Returns horizontal flip status. |
| `set_flip_h(flip: bool)` | `void` | Sets horizontal flip. |
| `get_flip_v()` | `bool` | Returns vertical flip status. |
| `set_flip_v(flip: bool)` | `void` | Sets vertical flip. |
| `get_offset()` | `Vector2` | Returns sprite offset. |
| `set_offset(offset: Vector2)` | `void` | Sets sprite offset. |
| `get_z_index()` | `int` | Returns draw order index. |
| `set_z_index(z: int)` | `void` | Sets draw order index. |
| `get_material()` | `Material` | Returns custom material. |
| `set_material(material: Material)` | `void` | Sets custom material. |

> *Note: The full list of inherited methods and signals is available in the Godot documentation.*

### Signals
- `texture_changed`: Emitted when the `texture` property changes.  

### Usage Examples
```gdscript
# GDScript example
var sprite = SpriteBase3D.new()
sprite.texture = preload("res://assets/sprite.png")
sprite.frame = 5
add_child(sprite)
```

```csharp
// C# example
var sprite = new SpriteBase3D();
sprite.Texture = GD.Load<Texture2D>("res://assets/sprite.png");
sprite.Frame = 5;
AddChild(sprite);
```

### Documentation Links
- [Sprite3D](../class_sprite3d.html)
- [AnimatedSprite3D](../class_animatedsprite3d.html)

---