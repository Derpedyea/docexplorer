# Generic6DOFJoint3D

**Godot Engine – Class Reference**  
*Version: stable*

---

## Overview

`Generic6DOFJoint3D` is a physics joint that allows for complex movement and rotation between two 3D physics bodies. It inherits from `Joint3D`.

> *Description:* A joint that provides independent linear and angular limits along each axis (six degrees of freedom). It can be used to create a wide range of mechanical constraints, from hinges and sliders to fully free-moving points.

---

## Inheritance Tree

```
Object
 └── Node
     └── Node3D
         └── Joint3D
             └── Generic6DOFJoint3D
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `axis0_enabled` | `bool` | `false` | Whether the first linear axis is enabled. |
| `axis1_enabled` | `bool` | `false` | Whether the second linear axis is enabled. |
| `axis2_enabled` | `bool` | `false` | Whether the third linear axis is enabled. |
| `angle_enabled` | `bool` | `false` | Whether the first angular axis is enabled. |
| `twist_enabled` | `bool` | `false` | Whether the second angular axis is enabled. |
| `cone_enabled` | `bool` | `false` | Whether the third angular axis is enabled. |
| `linear_limit_min` | `Vector3` | `Vector3.ZERO` | Minimum linear limits for the joint. |
| `linear_limit_max` | `Vector3` | `Vector3.ZERO` | Maximum linear limits for the joint. |
| `angular_limit_min` | `Vector3` | `Vector3.ZERO` | Minimum angular limits for the joint. |
| `angular_limit_max` | `Vector3` | `Vector3.ZERO` | Maximum angular limits for the joint. |
| `motor_linear` | `Vector3` | `Vector3.ZERO` | Linear motor target velocity. |
| `motor_angular` | `Vector3` | `Vector3.ZERO` | Angular motor target velocity. |
| `spring_damping` | `float` | `0.0` | Damping coefficient for springs. |
| `spring_stiffness` | `float` | `0.0` | Stiffness coefficient for springs. |

> **Note:** The above list is illustrative; the actual API includes more detailed properties for each axis, such as enable flags, limit ranges, spring settings, and motor configurations.

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_anchor_a()` | `Vector3` |  | Returns the first anchor point in local space. |
| `set_anchor_a(anchor: Vector3)` | `void` | `anchor : Vector3` | Sets the first anchor point in local space. |
| `get_anchor_b()` | `Vector3` |  | Returns the second anchor point in local space. |
| `set_anchor_b(anchor: Vector3)` | `void` | `anchor : Vector3` | Sets the second anchor point in local space. |
| `set_enable_linear_limit(index: int, enabled: bool)` | `void` | `index : int`, `enabled : bool` | Enables or disables a specific linear limit. |
| `set_enable_angular_limit(index: int, enabled: bool)` | `void` | `index : int`, `enabled : bool` | Enables or disables a specific angular limit. |
| `set_linear_limit_min(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the minimum linear limit for the specified axis. |
| `set_linear_limit_max(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the maximum linear limit for the specified axis. |
| `set_angular_limit_min(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the minimum angular limit for the specified axis. |
| `set_angular_limit_max(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the maximum angular limit for the specified axis. |
| `set_motor_linear(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the linear motor target for a given axis. |
| `set_motor_angular(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the angular motor target for a given axis. |
| `set_spring_enabled(index: int, enabled: bool)` | `void` | `index : int`, `enabled : bool` | Enables or disables a spring on a specific axis. |
| `set_spring_stiffness(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the stiffness for a spring on a specific axis. |
| `set_spring_damping(index: int, value: float)` | `void` | `index : int`, `value : float` | Sets the damping for a spring on a specific axis. |

> **Tip:** Indices are typically `0`, `1`, `2` for linear axes and `0`, `1`, `2` for angular axes (roll, pitch, yaw).

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `body_entered(body: Node)` | `body : Node` | Emitted when another physics body enters the joint. |
| `body_exited(body: Node)` | `body : Node` | Emitted when a body leaves the joint. |

---

## Example

```gdscript
extends Generic6DOFJoint3D

func _ready():
    # Enable all linear axes
    for i in range(3):
        set_enable_linear_limit(i, true)
        set_linear_limit_min(i, -1.0)
        set_linear_limit_max(i, 1.0)

    # Enable angular limits
    for i in range(3):
        set_enable_angular_limit(i, true)
        set_angular_limit_min(i, -45.0)
        set_angular_limit_max(i, 45.0)

    # Enable a spring on the first linear axis
    set_spring_enabled(0, true)
    set_spring_stiffness(0, 50.0)
    set_spring_damping(0, 5.0)
```

---

## See Also

- [Joint3D](../classes/class_joint3d.html)
- [PhysicsServer3D](../classes/class_physicsserver3d.html)

---