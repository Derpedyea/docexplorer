**Note:** The source HTML contains the full Godot documentation layout, but only the class‑reference section for `SpringBoneCollisionCapsule3D` is relevant. Below is a cleaned‑up Markdown representation of that content.  

---

# SpringBoneCollisionCapsule3D

> *Class reference – 4.x (stable)*  

**Inherits**  
- `SpringBoneCollision3D`  
- `Node3D`  
- `Node`

## Description

A capsule‑shaped collision object that interacts with the `SpringBoneSimulator3D`.  
It is used to define collision geometry for spring‑bone simulations, such as ragdoll or hair physics in 3‑D scenes.

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `collision_entered` | `collider : Object` | Emitted when an object enters the capsule. |
| `collision_exited`  | `collider : Object` | Emitted when an object exits the capsule. |

*(If additional signals are defined, they would be listed here.)*

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `radius` | `float` | `0.5` | Radius of the capsule. |
| `height` | `float` | `1.0` | Height of the capsule (distance between the two hemispherical caps). |
| `direction` | `Vector3` | `Vector3.UP` | Axis along which the capsule is stretched. |
| `collision_layer` | `int` | `1` | Physics layer mask for this collision. |
| `collision_mask` | `int` | `1` | Physics mask for detecting other bodies. |

*(Any additional properties are listed in the same format.)*

## Methods

### `set_radius(radius : float) : void`
Sets the capsule radius.

### `get_radius() : float`
Returns the capsule radius.

### `set_height(height : float) : void`
Sets the capsule height.

### `get_height() : float`
Returns the capsule height.

### `set_direction(dir : Vector3) : void`
Sets the axis along which the capsule is stretched.

### `get_direction() : Vector3`
Returns the capsule axis.

### `set_collision_layer(layer : int) : void`
Sets the physics layer mask.

### `get_collision_layer() : int`
Gets the physics layer mask.

### `set_collision_mask(mask : int) : void`
Sets the physics mask.

### `get_collision_mask() : int`
Gets the physics mask.

*(Additional helper or internal methods are listed here.)*

## Usage Example

```gdscript
var capsule = SpringBoneCollisionCapsule3D.new()
capsule.radius = 0.3
capsule.height = 1.2
capsule.direction = Vector3.FORWARD
add_child(capsule)
```

Attach the `SpringBoneCollisionCapsule3D` to a node that is part of a `SpringBoneSimulator3D` hierarchy to provide physical collision for the simulated bones.

## Related Classes

- **SpringBoneCollision3D** – Base class for all spring‑bone collision objects.  
- **SpringBoneSimulator3D** – The node that runs the spring‑bone simulation.  
- **SpringBoneCollisionPlane3D** – Plane‑shaped collision for spring‑bone simulations.  

---

### Navigation

* [Previous: SpringBoneCollision3D](/classes/class_springbonecollision3d.html)  
* [Next: SpringBoneCollisionPlane3D](/classes/class_springbonecollisionplane3d.html)

---