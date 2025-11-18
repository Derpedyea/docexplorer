**CircleShape2D** – Godot 4.x Class Reference
=============================================

> **Inheritance**: `Shape2D` ➜ `Resource` ➜ `RefCounted` ➜ `Object`

---

### Overview
`CircleShape2D` represents a simple 2‑D circle used for physics collision shapes. It is typically attached to a `CollisionShape2D` node (or other physics body types) to define a circular hit‑box or area.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `1.0` | The radius of the circle (in world units). |

> **Note:** Changing the radius automatically updates the associated physics shape.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_radius()` | `float` | Returns the current radius value. |
| `set_radius(radius : float)` | `void` | Sets the circle’s radius. |
| `get_debug_draw()` | `bool` | Returns whether the shape will be rendered in the editor’s debug view. |
| `set_debug_draw(debug_draw : bool)` | `void` | Enables or disables debug drawing for this shape. |

> All methods are also accessible from GDScript, C#, and the editor inspector.

---

## Signals
`CircleShape2D` does **not** define any custom signals.

---

## Example Usage

```gdscript
# GDScript example
var circle = CircleShape2D.new()
circle.radius = 32.0

var collision = CollisionShape2D.new()
collision.shape = circle
add_child(collision)
```

```csharp
// C# example
var circle = new CircleShape2D();
circle.Radius = 32.0f;

var collision = new CollisionShape2D();
collision.Shape = circle;
AddChild(collision);
```

---

## Reference Links

- [Godot Docs – CircleShape2D](https://docs.godotengine.org/en/stable/classes/class_circleshape2d.html)  
- [Godot Docs – Shape2D](https://docs.godotengine.org/en/stable/classes/class_shape2d.html)

---

> *For more advanced physics shape customization, see the [Physics > 2D](https://docs.godotengine.org/en/stable/tutorials/physics/index.html) section.*