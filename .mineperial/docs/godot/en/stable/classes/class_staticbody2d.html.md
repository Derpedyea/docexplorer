**StaticBody2D**  
*Godot Engine – Class Reference (Stable)*

---

## Overview
`StaticBody2D` is a 2‑D physics body that **cannot be moved** by external forces.  
It is useful for static objects such as walls, floors, or any other geometry that should interact with other physics bodies but remain immovable once placed.

```
StaticBody2D
 └─ PhysicsBody2D
     └─ CollisionObject2D
         └─ Node2D
             └─ CanvasItem
                 └─ Node
                     └─ Object
```

---

## Inheritance Tree
```
Object
 └─ Node
     └─ CanvasItem
         └─ Node2D
             └─ CollisionObject2D
                 └─ PhysicsBody2D
                     └─ StaticBody2D
```

---

## Description
- A **static physics body** that does not respond to physics forces.
- Can be positioned and rotated in the editor, but once the scene runs it will not move.
- Useful for building **static colliders** that other bodies (e.g., `RigidBody2D`, `KinematicBody2D`) can collide with.

---

## Signals
| Signal | Description |
|--------|-------------|
| None   | `StaticBody2D` does not emit any custom signals. |

---

## Methods

| Method | Returns | Description |
|--------|---------|-------------|
| **`is_kinematic()`** | `bool` | Returns `false` – static bodies are never kinematic. |
| **`is_fixed()`** | `bool` | Returns `true` – static bodies are fixed. |
| **`set_collision_layer_bit(bit: int, value: bool)`** | `void` | Sets a specific layer bit. |
| **`get_collision_layer_bit(bit: int)`** | `bool` | Returns the value of a specific layer bit. |
| **`set_collision_mask_bit(bit: int, value: bool)`** | `void` | Sets a specific mask bit. |
| **`get_collision_mask_bit(bit: int)`** | `bool` | Returns the value of a specific mask bit. |
| **`set_mode(mode: PhysicsBody2D.Mode)`** | `void` | Sets the body mode (should be `Mode.Static`). |
| **`get_mode()`** | `PhysicsBody2D.Mode` | Returns the body mode. |
| **`set_deferred(property: String, value)`** | `void` | Deferred property setter (inherited). |

> *All other methods are inherited from `PhysicsBody2D`, `CollisionObject2D`, and `Node2D`.*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collision_layer` | `int` | `0x1` | Bitmask for layers this body belongs to. |
| `collision_mask` | `int` | `0xFFFFFFFF` | Bitmask for layers this body will collide with. |
| `contact_monitor` | `bool` | `false` | Enables contact monitoring. |
| `contacts_reported` | `int` | `1` | Maximum contacts reported when `contact_monitor` is `true`. |
| `freeze` | `bool` | `false` | If `true`, the body is frozen in the physics simulation. |
| `transform` | `Transform2D` | `Transform2D()` | The node’s transform. |
| `visible` | `bool` | `true` | Visibility flag. |
| `z_index` | `int` | `0` | Z index for drawing order. |

> *All properties are inherited from parent classes; see the specific class documentation for more details.*

---

## Enumerations

### `Mode`

```gdscript
enum Mode {
    STATIC,   # Static body
    KINEMATIC,
    RIGID,
    CHARACTER
}
```

`StaticBody2D` always uses `Mode.STATIC`.

---

## Example Usage

```gdscript
# GDScript
extends StaticBody2D

func _ready():
    # Set collision layers (e.g., layer 1)
    collision_layer = 1 << 0
    # Only collide with layer 2
    collision_mask = 1 << 1
```

```csharp
// C#
public partial class MyStaticBody : StaticBody2D
{
    public override void _Ready()
    {
        // Set to layer 0
        CollisionLayer = 1 << 0;
        // Collide with layer 1
        CollisionMask = 1 << 1;
    }
}
```

---

## Notes

- **Performance**: Since static bodies are immutable in the physics world, they are highly efficient.  
- **Changing Position**: You can move or rotate a `StaticBody2D` in the editor or via script; the new transform will be used in the next physics frame.  
- **Collision Layers/Mask**: Manage interaction with other physics bodies by setting appropriate layer bits.  

---

### Related Nodes

- [RigidBody2D](class_rigidbody2d.html) – dynamic bodies that respond to forces.  
- [KinematicBody2D](class_kinematicbody2d.html) – body that is moved by code.  
- [CollisionObject2D](class_collisionobject2d.html) – base class for all 2‑D collision nodes.  

---

*For more details, refer to the Godot Engine class reference or the [Physics section](https://docs.godotengine.org/en/stable/tutorials/physics/index.html).*
