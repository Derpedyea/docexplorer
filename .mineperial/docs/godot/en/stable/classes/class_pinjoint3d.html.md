# PinJoint3D

A **PinJoint3D** is a physics joint that attaches two 3D physics bodies at a single point, allowing them to freely rotate around that point.

> **Inheritance**  
> `PinJoint3D` ← `Joint3D` ← `Node3D` ← `Node` ← `Object`

---

## Overview

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `anchor` | `Vector3` | `Vector3(0, 0, 0)` | The world-space position where the joint is attached. |
| `use_model_a_transform` | `bool` | `true` | Whether to use the transform of the first connected body as a basis for the joint. |
| `use_model_b_transform` | `bool` | `true` | Whether to use the transform of the second connected body as a basis for the joint. |
| `enabled` | `bool` | `true` | Whether the joint is active in the physics simulation. |
| `break_impulse` | `float` | `0.0` | The impulse magnitude that will cause the joint to break if exceeded. |

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `set_anchor(anchor: Vector3)` | `void` | `anchor: Vector3` | Set the joint’s anchor point. |
| `get_anchor()` | `Vector3` | — | Get the joint’s anchor point. |
| `set_use_model_a_transform(use: bool)` | `void` | `use: bool` | Enable or disable using body A’s transform. |
| `set_use_model_b_transform(use: bool)` | `void` | `use: bool` | Enable or disable using body B’s transform. |
| `is_enabled()` | `bool` | — | Check if the joint is currently enabled. |
| `set_enabled(enable: bool)` | `void` | `enable: bool` | Enable or disable the joint. |
| `set_break_impulse(impulse: float)` | `void` | `impulse: float` | Set the impulse threshold for breaking. |
| `get_break_impulse()` | `float` | — | Get the current break impulse threshold. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body: Node)` | Emitted when a body enters the joint’s collision area. |
| `body_exited(body: Node)` | Emitted when a body exits the joint’s collision area. |

---

### Example Usage

```gdscript
extends PinJoint3D

func _ready():
    # Create two rigid bodies
    var body_a = RigidBody3D.new()
    var body_b = RigidBody3D.new()
    add_child(body_a)
    add_child(body_b)

    # Position them
    body_a.translation = Vector3(0, 0, 0)
    body_b.translation = Vector3(2, 0, 0)

    # Set the joint anchor to the midpoint
    anchor = (body_a.translation + body_b.translation) / 2

    # Enable the joint
    enabled = true
```

---

> **Tip**: To create a hinge-like joint, you can combine a `PinJoint3D` with a `HingeJoint3D` and adjust limits accordingly.

*(The rest of the class reference, including detailed properties, methods, and signals, is available in the official Godot Engine documentation.)*