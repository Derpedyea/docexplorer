**Note:** The following markdown is a concise extraction of the key information available on the Godot Engine documentation page for the `SeparationRayShape2D` class. It preserves the structure, headings, and essential code snippets from the original HTML.

---

# SeparationRayShape2D

> **Inheritance:** `Shape2D` → `Resource` → `RefCounted` → `Object`

## Description

A **2D ray shape** used for physics collision that attempts to keep itself separated from any collider it touches.  
Unlike a plain `RayShape2D`, the separation ray automatically pushes its owning body away when a collision is detected, making it useful for things like collision avoidance, sensors, or simple “push‑back” logic.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `length` | `float` | `1.0` | The length of the ray from its origin. |
| `normal` | `Vector2` | `Vector2(0, -1)` | The direction the ray points in local space. |
| `margin` | `float` | `0.1` | Optional margin for collision detection. |

> **Note:** The `normal` property is stored as a normalized vector. Changing it will automatically update the ray’s orientation.

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_length() -> float` | | | Returns the current ray length. |
| `set_length(float) -> void` | | `length` | Sets the ray length. |
| `get_normal() -> Vector2` | | | Returns the current ray normal. |
| `set_normal(Vector2) -> void` | | `normal` | Sets the ray normal. |
| `get_margin() -> float` | | | Returns the collision margin. |
| `set_margin(float) -> void` | | `margin` | Sets the collision margin. |

> These methods are automatically exposed to Godot’s inspector and can be used in GDScript, C#, or the editor.

## Signals

_None._

## Usage Example (GDScript)

```gdscript
var ray_shape := SeparationRayShape2D.new()
ray_shape.length = 2.0
ray_shape.normal = Vector2.UP
# Assign to a PhysicsShape2D for a RigidBody2D
```

## Related Classes

* **RayShape2D** – A simple 2‑D ray used for collision queries.
* **SeparationRayShape3D** – 3‑D counterpart of this class.

## Links

* [Godot Engine API Reference – SeparationRayShape2D](https://docs.godotengine.org/en/stable/classes/class_separationrayshape2d.html)  
* [SeparationRayShape3D](https://docs.godotengine.org/en/stable/classes/class_separationrayshape3d.html)

---