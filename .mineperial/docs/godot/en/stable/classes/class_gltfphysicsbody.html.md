**GLTFPhysicsBody – Godot Engine (stable)**  

> *Inherits: `Resource` (RefCounted)*  
> **Description:** Represents a glTF physics body as an intermediary between the OMI_physics_body glTF data and Godot’s nodes.  

---

## Class Overview
`GLTFPhysicsBody` is a `Resource` that stores the physics information required to convert glTF physics data into Godot nodes (`RigidBody3D`, `StaticBody3D`, etc.).  
It is primarily used by the glTF import pipeline to create the appropriate physics bodies inside a scene.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **node_path** | `NodePath` | `.` | Path to the node this body should attach to in the imported scene. |
| **physics_shape** | `Array[GLTFPhysicsShape]` | `[]` | List of physics shapes that belong to this body. |
| **body_type** | `int` | `0` | Body type: `0` = static, `1` = kinematic, `2` = rigid. |
| **mass** | `float` | `1.0` | Mass of the body (used for rigid bodies). |
| **gravity_scale** | `float` | `1.0` | Gravity scale applied to the body. |
| **friction** | `float` | `0.5` | Friction coefficient. |
| **restitution** | `float` | `0.0` | Restitution (bounciness). |
| **custom_solver_bias** | `float` | `0.0` | Custom solver bias value. |
| **contact_monitor** | `bool` | `false` | Whether contact monitoring is enabled. |
| **max_contacts_reported** | `int` | `10` | Max number of contacts reported. |

*(All property names are shown in Godot’s naming conventions; some may be read‑only when the body has already been instantiated.)*

---

## Methods

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `new()` | `GLTFPhysicsBody` | – | Constructor. |
| `get_shape_count()` | `int` | – | Returns the number of attached shapes. |
| `get_shape(index: int)` | `GLTFPhysicsShape` | `index` | Retrieves the shape at the given index. |
| `add_shape(shape: GLTFPhysicsShape)` | `void` | `shape` | Adds a new shape to the body. |
| `remove_shape(index: int)` | `void` | `index` | Removes the shape at the given index. |
| `clear_shapes()` | `void` | – | Clears all shapes. |
| `set_body_type(type: int)` | `void` | `type` | Sets the body type (`static`, `kinematic`, or `rigid`). |
| `set_mass(value: float)` | `void` | `value` | Sets the body mass. |
| `set_gravity_scale(value: float)` | `void` | `value` | Sets the gravity scale. |
| `set_friction(value: float)` | `void` | `value` | Sets the friction coefficient. |
| `set_restitution(value: float)` | `void` | `value` | Sets the restitution. |
| `set_custom_solver_bias(value: float)` | `void` | `value` | Sets a custom solver bias. |
| `set_contact_monitor(enabled: bool)` | `void` | `enabled` | Enables or disables contact monitoring. |
| `set_max_contacts_reported(max: int)` | `void` | `max` | Sets maximum contacts to report. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_added(body: Node)` | Emitted when a body is added to the scene during import. |
| `body_removed(body: Node)` | Emitted when a body is removed. |

---

## Example Usage

```gdscript
# Assume `glb_body` is a GLTFPhysicsBody loaded from a .glb file.
var node = Node3D.new()
node.set_path(glb_body.node_path)
# Instantiate the actual physics body:
var physics_body
match glb_body.body_type:
    GLTFPhysicsBody.BODY_STATIC:
        physics_body = StaticBody3D.new()
    GLTFPhysicsBody.BODY_KINEMATIC:
        physics_body = KinematicBody3D.new()
    GLTFPhysicsBody.BODY_RIGID:
        physics_body = RigidBody3D.new()
# Set properties
physics_body.mass = glb_body.mass
physics_body.friction = glb_body.friction
# Add shapes
for i in range(glb_body.get_shape_count()):
    var shape = glb_body.get_shape(i)
    physics_body.add_shape(shape.shape, shape.transform)
add_child(physics_body)
```

---

## See Also

* [GLTFPhysicsShape](https://docs.godotengine.org/en/stable/classes/class_gltfphysicsshape.html) – Describes individual shapes that compose a `GLTFPhysicsBody`.  
* [glTF Importer](https://docs.godotengine.org/en/stable/tutorials/assets_and_data/importing_gltf.html) – How the importer uses `GLTFPhysicsBody`.  

--- 

**Note:** This page is part of the official Godot Engine documentation. All information is current as of the stable release.