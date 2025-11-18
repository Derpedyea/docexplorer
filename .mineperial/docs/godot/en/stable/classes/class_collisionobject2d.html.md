**CollisionObject2D – Godot Engine Documentation (stable)**  

> *Abstract base class for 2D physics objects. Inherited by `Area2D` and `PhysicsBody2D`.*  

---

## 1. Inheritance

```
Object
 └─ Node
    └─ CanvasItem
       └─ Node2D
          └─ CollisionObject2D
```

---

## 2. Description

`CollisionObject2D` is the base class for all 2D physics objects that can participate in the collision system. It does not move itself, but it exposes properties and signals that let derived nodes (`Area2D`, `RigidBody2D`, `KinematicBody2D`, etc.) define shapes, layers, masks and respond to collision events.  

---

## 3. Signals

| Signal | Description |
|--------|-------------|
| **body_entered** (`Object body`) | Emitted when a physics body enters the collision object. |
| **body_exited** (`Object body`) | Emitted when a physics body exits the collision object. |
| **body_shape_entered** (`int body_id`, `Object body`, `int body_shape_index`, `int local_shape_index`) | Emitted when a body’s shape intersects one of this object's shapes. |
| **body_shape_exited** (`int body_id`, `Object body`, `int body_shape_index`, `int local_shape_index`) | Emitted when a body’s shape stops intersecting one of this object's shapes. |
| **area_entered** (`Object area`) | Emitted when an area enters the collision object. |
| **area_exited** (`Object area`) | Emitted when an area exits the collision object. |
| **area_shape_entered** (`int area_id`, `Object area`, `int area_shape_index`, `int local_shape_index`) | Emitted when an area’s shape intersects one of this object's shapes. |
| **area_shape_exited** (`int area_id`, `Object area`, `int area_shape_index`, `int local_shape_index`) | Emitted when an area’s shape stops intersecting one of this object's shapes. |

---

## 4. Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **collision_layer** | `int` | `0x0001` | Bitmask for which collision layer(s) this object belongs to. |
| **collision_mask** | `int` | `0xFFFF` | Bitmask for which layers this object collides with. |
| **disabled** | `bool` | `false` | If `true`, the collision shapes are disabled and do not participate in collision checks. |
| **use_custom_integrator** | `bool` | `false` | If `true`, the `_integrate_forces()` method will be called each physics step. |
| **owner** | `Object` | `null` | Reference to the node that owns the collision shape. |

> **Note**: Properties `shape_owner_*` functions are used to manage shapes stored in this object.

---

## 5. Methods

### 5.1 Shape Owner Functions

| Method | Description |
|--------|-------------|
| `int get_shape_owner_count()` | Returns the number of shape owners. |
| `int get_shape_owner_id(int index)` | Returns the ID of the shape owner at the given index. |
| `void shape_owner_set_transform(int owner_id, Transform2D transform)` | Sets the transform of the shape owner. |
| `Transform2D shape_owner_get_transform(int owner_id)` | Retrieves the transform of the shape owner. |
| `int shape_owner_get_shape_count(int owner_id)` | Number of shapes attached to this owner. |
| `int shape_owner_get_shape(int owner_id, int shape_idx)` | Returns the shape resource ID. |
| `int shape_owner_add_shape(int owner_id, Shape2D shape)` | Adds a shape to the owner. |
| `int shape_owner_create(int owner_id)` | Creates a new shape owner and returns its ID. |
| `void shape_owner_remove_shape(int owner_id, int shape_idx)` | Removes the specified shape from the owner. |
| `void shape_owner_clear_shapes(int owner_id)` | Clears all shapes from the owner. |
| `int get_shape_owner_index_by_shape(int shape)` | Returns the owner ID that contains the shape. |
| `void remove_shape_owner(int owner_id)` | Deletes the shape owner. |

### 5.2 Collision Functions

| Method | Description |
|--------|-------------|
| `void set_collision_layer_bit(int bit, bool enabled)` | Enable or disable a particular collision layer. |
| `bool get_collision_layer_bit(int bit)` | Check whether a collision layer bit is enabled. |
| `void set_collision_mask_bit(int bit, bool enabled)` | Enable or disable a particular collision mask bit. |
| `bool get_collision_mask_bit(int bit)` | Check whether a collision mask bit is enabled. |
| `void set_collision_layer(int layer)` | Set the entire collision layer bitmask. |
| `int get_collision_layer()` | Get the collision layer bitmask. |
| `void set_collision_mask(int mask)` | Set the entire collision mask bitmask. |
| `int get_collision_mask()` | Get the collision mask bitmask. |
| `bool get_disabled()` | Return whether the collision shapes are disabled. |
| `void set_disabled(bool disabled)` | Disable/enable all shapes. |

### 5.3 Utility

| Method | Description |
|--------|-------------|
| `int get_shape_owner_index(Object owner)` | Returns the shape owner ID for a given owner node. |
| `void set_shape_owner_local_transform(int owner_id, Transform2D transform)` | Sets the local transform of a shape owner. |
| `Transform2D get_shape_owner_local_transform(int owner_id)` | Gets the local transform of a shape owner. |

---

## 6. Usage Example

```gdscript
# Create a simple static collision object
extends CollisionObject2D

func _ready():
    # Create a shape owner
    var owner_id = shape_owner_create(self)

    # Add a rectangle shape
    var rect_shape = RectangleShape2D.new()
    rect_shape.extents = Vector2(100, 50)
    shape_owner_add_shape(owner_id, rect_shape)

    # Position the shape
    shape_owner_set_transform(owner_id, Transform2D.IDENTITY.translated(Vector2(0, 0)))

    # Set collision layer/mask
    collision_layer = 1
    collision_mask = 1

    # Connect to a signal
    connect("body_entered", self, "_on_body_entered")

func _on_body_entered(body):
    print(body.name, "entered the collision object")
```

---

## 7. Related Classes

- **Area2D** – Detects overlapping bodies and areas.
- **PhysicsBody2D** – Base class for all movable physics bodies.
- **CollisionShape2D** – Node that holds a shape for collision detection (used by derived classes).

---

## 8. See Also

- [Area2D](https://docs.godotengine.org/en/stable/classes/class_area2d.html)
- [PhysicsBody2D](https://docs.godotengine.org/en/stable/classes/class_physicsbody2d.html)
- [CollisionShape2D](https://docs.godotengine.org/en/stable/classes/class_collisionshape2d.html)

---