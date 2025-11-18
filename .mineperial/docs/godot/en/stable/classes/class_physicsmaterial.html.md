**PhysicsMaterial** – Godot Engine (stable) documentation  
================================================================

> **Inherits:** `Resource` → `RefCounted`  
> **Description:** Holds physics‑related properties of a surface, namely its roughness and bounciness.

---

## Overview

A `PhysicsMaterial` is a `Resource` that can be assigned to a physics body or collider to alter how that shape interacts with other objects.  
Typical uses include making surfaces slippery, sticky, or bouncy.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `friction` | `float` | `1.0` | The roughness of the surface; lower values produce more sliding. |
| `bounce` | `float` | `0.0` | The coefficient of restitution; higher values make the object rebound. |
| `friction_layer` | `int` | `0` | Custom friction layer (used for advanced physics). |
| `friction_mask` | `int` | `0` | Custom friction mask (used for advanced physics). |
| `bounce_layer` | `int` | `0` | Custom bounce layer. |
| `bounce_mask` | `int` | `0` | Custom bounce mask. |

> *All numeric values are clamped to the range [0, 1].*

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `new()` | `PhysicsMaterial` | – | Creates a new `PhysicsMaterial` instance. |
| `duplicate()` | `PhysicsMaterial` | – | Returns a copy of this material. |
| `to_dict()` | `Dictionary` | – | Serialises the material’s properties into a dictionary. |

*No additional public methods are defined beyond those inherited from `Resource`.*

---

## Example: Using a PhysicsMaterial in GDScript

```gdscript
# Create a new physics material
var mat = PhysicsMaterial.new()
mat.friction = 0.4
mat.bounce = 0.8

# Assign to a collision shape
var shape = CollisionShape3D.new()
shape.shape = SphereShape3D.new()
shape.material = mat
```

---

## Signals

None.

---

## Documentation Notes

* `PhysicsMaterial` is part of the *Physics* section of Godot’s class reference.  
* The resource can be edited in the inspector, where you can toggle the “Use Custom Layers” options for friction and bounce.  
* It is also accessible via the C# API (`Godot.PhysicsMaterial`) with the same property names.

---

### Related Classes

* [`Shape`](https://docs.godotengine.org/en/stable/classes/class_shape.html) – base class for collision shapes.  
* [`PhysicsBody`](https://docs.godotengine.org/en/stable/classes/class_physicsbody.html) – nodes that can have a `PhysicsMaterial`.  

---

For further details and the full API reference, see the official Godot documentation.