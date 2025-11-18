**PinJoint2D** – Godot Engine (stable)  
<https://docs.godotengine.org/en/stable/classes/class_pinjoint2d.html>

---

### Overview
A 2‑D physics joint that connects two `RigidBody2D` (or other physics body) nodes at a single point, allowing them to rotate freely around that point.

```
PinJoint2D
├── Joint2D
│   ├── Node2D
│   │   ├── CanvasItem
│   │   │   └── Node
│   │   │       └── Object
```

---

### Properties
| Property | Type | Description | Default |
|----------|------|-------------|---------|
| `anchor` | `Vector2` | The point around which the bodies rotate, expressed in the joint's local coordinate system. | `Vector2(0, 0)` |
| `softness` | `float` | Determines how much the joint resists angular velocity. A value of `1.0` gives a fully hard joint; lower values make it “softer”. | `0.0` |
| `bias` | `float` | How quickly the joint corrects errors in the constraint; higher values make the joint more stiff. | `0.2` |
| `max_force` | `float` | The maximum force the joint can exert to correct constraints. | `0` (no limit) |

> **Note**: All numeric properties can be edited in the editor’s inspector or via GDScript/C#.

---

### Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `get_anchor()` | `Vector2` | Returns the current anchor point. |
| `set_anchor(Vector2 anchor)` | `void` | Sets the anchor point. |
| `get_softness()` | `float` | Returns the softness value. |
| `set_softness(float softness)` | `void` | Sets the softness value. |
| `get_bias()` | `float` | Returns the bias value. |
| `set_bias(float bias)` | `void` | Sets the bias value. |
| `get_max_force()` | `float` | Returns the maximum force. |
| `set_max_force(float max)` | `void` | Sets the maximum force. |

> These methods are the same as the corresponding property setters/getters and are provided for GDScript/C# interop.

---

### Signals
| Signal | Parameters | Description |
|--------|------------|-------------|
| `body_entered(body)` | `Object` | Emitted when a body enters the joint’s area. |
| `body_exited(body)` | `Object` | Emitted when a body exits the joint’s area. |

*Only used if you connect a `CollisionShape2D` or `Area2D` to the joint node.*

---

### Example Usage (GDScript)

```gdscript
# Attach this script to a PinJoint2D node
extends PinJoint2D

func _ready():
    # Anchor at the joint node's position
    anchor = Vector2.ZERO

    # Make the joint a little softer
    softness = 0.1

    # Limit the corrective force to avoid jitter
    max_force = 2000
```

---

### Further Reading

* [Joint2D](https://docs.godotengine.org/en/stable/classes/class_joint2d.html) – Base class for all 2‑D joints  
* [PhysicsBody2D](https://docs.godotengine.org/en/stable/classes/class_physicsbody2d.html) – Nodes that participate in physics simulation

---