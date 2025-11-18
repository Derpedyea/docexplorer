**ConeTwistJoint3D** – Godot Engine Documentation
==================================================

*Inheritance Hierarchy*

```
Object
└── Node
    └── Node3D
        └── Joint3D
            └── ConeTwistJoint3D
```

---

### Overview

A **ConeTwistJoint3D** is a physics joint that connects two 3D physics bodies in a way that simulates a ball‑and‑socket joint with additional twist constraints. It allows the connected bodies to rotate around a shared anchor point while restricting their relative motion within a cone of allowed angles.

> **Note**: The joint is part of Godot’s 3D physics system and can be added to a scene as a node.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **anchor** | `Vector3` | `Vector3(0, 0, 0)` | World‑space anchor point of the joint. |
| **pivot_a** | `Vector3` | `Vector3(0, 0, 0)` | Anchor point on the first body, expressed in the first body’s local coordinates. |
| **pivot_b** | `Vector3` | `Vector3(0, 0, 0)` | Anchor point on the second body, expressed in the second body’s local coordinates. |
| **axis_a** | `Vector3` | `Vector3(0, 1, 0)` | Twist axis in the first body’s local space. |
| **axis_b** | `Vector3` | `Vector3(0, 1, 0)` | Twist axis in the second body’s local space. |
| **limit_angle** | `float` | `90.0` | Maximum cone angle in degrees. |
| **limit_swing** | `float` | `45.0` | Maximum twist angle in degrees. |
| **limit_twist** | `float` | `45.0` | Twist limit (optional). |
| **bias** | `float` | `0.01` | Joint correction bias. |
| **relaxation** | `float` | `0.1` | Joint relaxation factor. |

> For a complete list of properties, refer to the [Godot 4.0 Class Reference](https://docs.godotengine.org/en/stable/classes/class_conetwistjoint3d.html).

---

### Methods

| Method | Return Type | Arguments | Description |
|--------|-------------|-----------|-------------|
| **get_anchor** | `Vector3` | - | Returns the world‑space anchor point. |
| **set_anchor** | `void` | `Vector3 anchor` | Sets the world‑space anchor point. |
| **get_pivot_a** | `Vector3` | - | Returns the local pivot for body A. |
| **set_pivot_a** | `void` | `Vector3 pivot` | Sets the local pivot for body A. |
| **get_pivot_b** | `Vector3` | - | Returns the local pivot for body B. |
| **set_pivot_b** | `void` | `Vector3 pivot` | Sets the local pivot for body B. |
| **get_axis_a** | `Vector3` | - | Returns the local twist axis for body A. |
| **set_axis_a** | `void` | `Vector3 axis` | Sets the local twist axis for body A. |
| **get_axis_b** | `Vector3` | - | Returns the local twist axis for body B. |
| **set_axis_b** | `void` | `Vector3 axis` | Sets the local twist axis for body B. |
| **get_limit_angle** | `float` | - | Returns the cone angle limit. |
| **set_limit_angle** | `void` | `float limit` | Sets the cone angle limit. |
| **get_limit_swing** | `float` | - | Returns the twist limit. |
| **set_limit_swing** | `void` | `float limit` | Sets the twist limit. |
| **get_limit_twist** | `float` | - | Returns the swing limit. |
| **set_limit_twist** | `void` | `float limit` | Sets the swing limit. |
| **get_bias** | `float` | - | Returns the joint bias. |
| **set_bias** | `void` | `float bias` | Sets the joint bias. |
| **get_relaxation** | `float` | - | Returns the joint relaxation. |
| **set_relaxation** | `void` | `float relaxation` | Sets the joint relaxation. |

---

### Example Usage

```gdscript
# Assuming you have two RigidBody3D nodes: body_a and body_b

var joint = ConeTwistJoint3D.new()
add_child(joint)

joint.node_a = body_a
joint.node_b = body_b

joint.anchor = Vector3(0, 1, 0)
joint.pivot_a = Vector3(0, 0.5, 0)
joint.pivot_b = Vector3(0, -0.5, 0)
joint.axis_a = Vector3(0, 1, 0)
joint.axis_b = Vector3(0, 1, 0)

joint.limit_angle = 45.0
joint.limit_swing = 30.0
joint.limit_twist = 30.0
```

This sets up a cone‑twist joint between two rigid bodies with a 45‑degree cone and 30‑degree twist limits.

---

### Related Classes

- `BallSocketJoint3D`
- `HingeJoint3D`
- `PinJoint3D`
- `Generic6DOFJoint3D`

For detailed API reference and additional properties or methods, see the [Godot API documentation](https://docs.godotengine.org/en/stable/classes/class_conetwistjoint3d.html).