# SpringBoneCollisionSphere3D

**Godot Engine 4.x – Class Reference**

`SpringBoneCollisionSphere3D` is a node that provides a *spherical* collision shape for use with the `SpringBoneSimulator3D`.  
It inherits from:

- `SpringBoneCollision3D`  
- `Node3D`  
- `Node`

---

## Overview

Spring bone systems are used to create soft‑body effects (e.g., hair, cloth, or other skeletal deformations).  
`SpringBoneCollisionSphere3D` allows you to define a sphere that will interact with the bone simulator, preventing bones from penetrating the sphere’s volume.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `1.0` | The radius of the collision sphere in world units. |
| `center` | `Vector3` | `Vector3.ZERO` | The sphere’s center offset relative to the node’s origin. |
| `shape` | `SphereShape3D` | – | The underlying shape resource used for collision detection. |

> **Tip** – You can adjust the `radius` and `center` in the Inspector or via script to fine‑tune the collision area.

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `set_radius(float)` | `void` | Sets the sphere’s radius. |
| `get_radius() -> float` | `float` | Returns the current radius. |
| `set_center(Vector3)` | `void` | Sets the sphere’s center offset. |
| `get_center() -> Vector3` | `Vector3` | Returns the center offset. |
| `_ready()` | `void` | Called when the node is added to the scene tree. (Inherited from `Node3D`). |

> **Note** – All methods that modify collision parameters should be called before the `SpringBoneSimulator3D` starts running to ensure proper initialization.

---

## Example Usage

```gdscript
# Example: Add a spherical collision to a bone simulation
extends SpringBoneCollisionSphere3D

func _ready():
    # Set a radius of 0.5 units
    set_radius(0.5)
    # Position the sphere slightly above the root
    set_center(Vector3(0, 1, 0))
```

Attach this node to a `SpringBoneSimulator3D` and it will automatically register itself as a collision object.

---

## Related Classes

- [`SpringBoneSimulator3D`](../classes/class_springbonesimulator3d.html) – The main simulator that drives spring bones.
- [`SpringBoneCollisionPlane3D`](../classes/class_springbonecollisionplane3d.html) – A planar collision counterpart.
- [`SpringBoneCollision3D`](../classes/class_springbonecollision3d.html) – The base collision class.

---

## Documentation Links

- [Godot Docs – Spring Bone System](https://docs.godotengine.org/en/stable/tutorials/physics/spring_bones.html)
- [Godot Docs – Node3D](https://docs.godotengine.org/en/stable/classes/class_node3d.html)

---

> **Author**: Godot Engine Team  
> **Last updated**: 2024‑06 (stable release)

---