# SpringBoneSimulator3D

**Inheritance**

```
SkeletonModifier3D → Node3D → Node → Object
```

## Overview

`SpringBoneSimulator3D` is a `SkeletonModifier3D` that applies inertial wavering to bone chains.  
It is commonly used to create dynamic effects such as hair, cloth, or accessories that react to motion or physics.

> **Note:** This class is available from Godot 4.0 onward.  

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `collider_radius` | `float` | `0.1` | Radius of the collision sphere used for collision detection. |
| `max_distance` | `float` | `1.0` | Maximum distance a bone can be displaced from its original position. |
| `damping` | `float` | `0.5` | Damping factor that controls how quickly the bone returns to rest. |
| `stiffness` | `float` | `1.0` | Stiffness of the spring. |
| `gravity` | `Vector3` | `Vector3(0, -9.8, 0)` | Gravity vector applied to the bones. |
| `velocity` | `Vector3` | `Vector3.ZERO` | Current velocity of the bone chain (read‑only). |
| `bone_indices` | `PackedInt32Array` | `[]` | List of bone indices that this simulator will affect. |

> **Tip:** Use the `bone_indices` array to select which bones in the skeleton should be simulated.  
> The indices can be found in the Skeleton node’s bone list.

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_bone_indices(bones: PackedInt32Array)` | `void` | `bones` | Sets the bones to be affected by the simulator. |
| `add_bone_index(index: int)` | `void` | `index` | Adds a single bone index to the simulation list. |
| `remove_bone_index(index: int)` | `void` | `index` | Removes a bone index from the simulation list. |
| `get_bone_indices() -> PackedInt32Array` | `PackedInt32Array` | — | Returns the current list of bone indices. |
| `set_collider_radius(radius: float)` | `void` | `radius` | Sets the collision sphere radius. |
| `set_stiffness(stiffness: float)` | `void` | `stiffness` | Sets the spring stiffness. |
| `set_damping(damping: float)` | `void` | `damping` | Sets the damping factor. |
| `set_gravity(gravity: Vector3)` | `void` | `gravity` | Sets the gravity vector. |
| `set_max_distance(distance: float)` | `void` | `distance` | Sets the maximum bone displacement distance. |

> **Example usage:**

```gdscript
var spring = SpringBoneSimulator3D.new()
spring.set_bone_indices([3, 4, 5])  # hair bones
spring.set_stiffness(0.8)
spring.set_damping(0.4)
```

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `bone_updated(bone_index: int)` | `bone_index` | Emitted whenever a bone in the simulation has its position updated. |

---

## Usage in the Editor

1. **Add the node**  
   Add a `SpringBoneSimulator3D` node as a child of your `Skeleton` node (or any `Node3D` that has a skeleton).

2. **Configure bone indices**  
   In the Inspector, add the indices of the bones you want to simulate.  
   *Tip:* If you’re not sure of the indices, open the `Skeleton` node’s bone list and check the ID numbers.

3. **Adjust parameters**  
   Tune `stiffness`, `damping`, `gravity`, and `max_distance` until the animation feels natural.

4. **Add collision**  
   Optionally, add a `SpringBoneCollisionSphere3D` node as a child of the simulator to prevent bones from intersecting other objects.

---

## Common Pitfalls

| Issue | Fix |
|-------|-----|
| Bones jitter excessively | Increase `damping` or decrease `stiffness`. |
| Bones not moving at all | Make sure `bone_indices` is correctly set and the skeleton has a proper pose. |
| Performance drop on many bones | Reduce the number of simulated bones or lower the `max_distance`. |

---

## Related Classes

- **SpringBoneCollisionSphere3D** – Handles collisions for spring bones.  
- **SkeletonModifier3D** – Base class for modifying skeletons in 3D.

---

*For detailed API reference and advanced usage, refer to the official Godot Engine documentation: [SpringBoneSimulator3D Class Reference](https://docs.godotengine.org/en/stable/classes/class_springbonesimulator3d.html).*