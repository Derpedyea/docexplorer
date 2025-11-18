# Joint2D

**Abstract base class for all 2D physics joints.**  
Inherits from `Node2D` → `CanvasItem` → `Node` → `Object`.

The joint classes in Godot are used to constrain the relative motion of two physics bodies.  
`Joint2D` itself cannot be added to a scene; you must use one of its concrete subclasses:

| Concrete subclass | Description |
|-------------------|-------------|
| `PinJoint2D` | Holds two bodies together at a single point (like a hinge). |
| `GrooveJoint2D` | Keeps the first body inside a sliding groove defined by the second body. |
| `DampedSpringJoint2D` | Connects two bodies with a spring that can be damped. |

> **Note**: All joint types are *2D* and therefore use the physics engine’s 2‑D body system.  
> For 3‑D joints see the analogous `Joint3D` class.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | Whether the joint is active. |
| `node_a` | `NodePath` | `""` | Path to the first connected body. |
| `node_b` | `NodePath` | `""` | Path to the second connected body. |
| `exclude_collision` | `bool` | `false` | If `true`, the two bodies do not collide with each other. |

> All properties can be accessed or set from the editor and via GDScript.

---

## Methods

| Method | Return type | Description |
|--------|-------------|-------------|
| `set_node_a(node: NodePath)` | `void` | Sets the first body the joint will connect to. |
| `get_node_a() -> NodePath` | `NodePath` | Returns the path of the first connected body. |
| `set_node_b(node: NodePath)` | `void` | Sets the second body the joint will connect to. |
| `get_node_b() -> NodePath` | `NodePath` | Returns the path of the second connected body. |
| `set_enabled(enabled: bool)` | `void` | Enables or disables the joint. |
| `is_enabled() -> bool` | `bool` | Returns whether the joint is active. |
| `set_exclude_collision(exclude: bool)` | `void` | Controls whether the two bodies can collide with each other. |
| `get_exclude_collision() -> bool` | `bool` | Returns the collision exclusion flag. |

> **Important**: In Godot 4 the actual joint behavior is driven by the physics engine, so most of the fine‑grained configuration is specific to the concrete joint type (e.g. `pin_offset`, `spring_damping`, `spring_stiffness` in `DampedSpringJoint2D`).

---

## Signals

`Joint2D` does not emit any custom signals.  Use the signals of the connected bodies (e.g., `body_entered`, `body_exited`) if you need to react to joint changes.

---

## Example Usage (GDScript)

```gdscript
# Assuming a scene with two RigidBody2D nodes: "BodyA" and "BodyB"

# Create a pin joint
var pin = PinJoint2D.new()
pin.node_a = "BodyA"
pin.node_b = "BodyB"
pin.position = Vector2(200, 200)          # Pivot point in the world
add_child(pin)

# Disable collisions between the two bodies
pin.exclude_collision = true
```

---

## Related Classes

- **[DampedSpringJoint2D](/classes/class_dampedspringjoint2d.html)** – A spring joint with damping.
- **[GrooveJoint2D](/classes/class_groovejoint2d.html)** – Keeps a body inside a defined groove.
- **[PinJoint2D](/classes/class_pinjoint2d.html)** – A simple hinge joint.

---

## Reference

For the most up‑to‑date API and additional properties specific to the derived joint types, consult the [official Godot Engine documentation](https://docs.godotengine.org/en/stable/classes/class_joint2d.html).