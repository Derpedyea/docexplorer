# CollisionShape3D

`CollisionShape3D` is a node that provides a `Shape3D` resource to a `CollisionObject3D` parent.  
It can be used to give a 3‑D body a collision shape, and it exposes the shape to the
editor so you can modify it visually.

> **Inheritance hierarchy**  
> `CollisionShape3D` → `Node3D` → `Node` → `Object`

> **Base class** – `CollisionObject3D`  
> **Editor** – Works together with the `CollisionObject3D` nodes (`StaticBody3D`,
> `RigidBody3D`, `Area3D`, etc.)

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `shape` | `Shape3D` | `null` | The shape that the collision object will use.  |
| `margin` | `float` | `0.01` | Additional margin added to the shape’s bounds for collision detection.  |
| `disabled` | `bool` | `false` | When `true` the collision shape is ignored.  |
| `shape_owner` | `int` | – | The current owner of the shape (used internally).  |
| `owner` | `Node` | – | The node that owns this shape.  |

> **Note**: All properties are exported, so they are available in the Inspector.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `shape_changed` | – | Emitted when the shape or its parameters are modified. |

---

## Methods

| Method | Arguments | Return type | Description |
|--------|-----------|-------------|-------------|
| `set_shape(shape: Shape3D)` | `shape` | `void` | Assigns a new shape to the collision shape node. |
| `get_shape() -> Shape3D` | – | `Shape3D` | Returns the currently assigned shape. |
| `set_margin(margin: float)` | `margin` | `void` | Sets the collision margin. |
| `get_margin() -> float` | – | `float` | Returns the current margin. |
| `get_shape_owner_id() -> int` | – | `int` | Returns the ID of the shape owner. |
| `set_enabled(enabled: bool)` | `enabled` | `void` | Enables/disables the collision shape. |
| `is_enabled() -> bool` | – | `bool` | Returns whether the shape is enabled. |
| `update_shape()` | – | `void` | Forces an update of the shape in the physics server. |
| `get_shape_owner_index(owner: int) -> int` | `owner` | `int` | Returns the index of a shape owner. |
| `add_shape_owner(owner: Node)` | `owner` | `int` | Creates a new shape owner for the specified node. |
| `remove_shape_owner(owner: Node)` | `owner` | `void` | Removes a shape owner. |
| `get_shape_owner_count() -> int` | – | `int` | Number of shape owners. |
| `get_shape_owner_path(owner: int) -> NodePath` | `owner` | `NodePath` | Path of the owner node. |
| `get_shape_owner_node(owner: int) -> Node` | `owner` | `Node` | Returns the owner node. |

> **Tip**: For most use‑cases, the `shape`, `margin`, and `disabled` properties are enough.  
> The other methods are primarily for advanced users who need to manage multiple shapes per
> body or programmatically create shape owners.

---

## Usage Example

```gdscript
# Create a CollisionShape3D node in a script
var collision_shape = CollisionShape3D.new()
add_child(collision_shape)

# Create a BoxShape and assign it
var box = BoxShape3D.new()
box.size = Vector3(1, 1, 1)
collision_shape.shape = box

# Adjust the margin
collision_shape.margin = 0.05

# Disable the shape
collision_shape.disabled = false
```

In the editor, you can add a `CollisionShape3D` as a child of a `StaticBody3D`, `RigidBody3D`, or `Area3D`.  
The shape editor will automatically display the shape’s bounding box, allowing you to resize and rotate it directly.

---

## Documentation Sources

* Godot Engine 4.x documentation – Class Reference – [CollisionShape3D](https://docs.godotengine.org/en/stable/classes/class_collisionshape3d.html)  
* Godot Engine 3.x reference for legacy projects – [CollisionShape3D](https://docs.godotengine.org/en/latest/classes/class_collisionshape3d.html)

---