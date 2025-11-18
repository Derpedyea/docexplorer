**HingeJoint3D – Godot Engine Documentation**

---

### Overview

`HingeJoint3D` is a physics joint node that restricts the rotation of a 3D physics body around a single axis relative to another physics body. It inherits from `Joint3D`, which in turn inherits from `Node3D`, `Node`, and `Object`.

#### Inheritance Tree

```
Object
  └─ Node
       └─ Node3D
            └─ Joint3D
                 └─ HingeJoint3D
```

### Description

A `HingeJoint3D` allows two bodies to rotate around a shared axis while optionally limiting that rotation and adding motorized motion. It is useful for simulating hinges, doors, wheels, or any mechanism that requires a single rotational degree of freedom.

### Key Features

| Feature | Description |
|---------|-------------|
| **Axis** | Defines the axis of rotation in the local space of the joint. |
| **Limits** | Optionally constrain the rotation to a specific range. |
| **Motor** | Drive the joint toward a target angular velocity with a maximum force. |

### Typical Usage

```gdscript
# Create a hinge joint in a scene
var hinge = HingeJoint3D.new()
hinge.axis = Vector3.UP
hinge.limit_enabled = true
hinge.limit_min = -90
hinge.limit_max = 90
hinge.motor_enabled = true
hinge.motor_target_velocity = 10
hinge.motor_max_force = 1000
add_child(hinge)
```

### Relevant API

> *The full API is available on the official Godot documentation website. This page includes all properties, methods, and signals for `HingeJoint3D`.*

*Properties*  
* Methods  
* Signals  

*For a complete list, refer to the official class reference.*