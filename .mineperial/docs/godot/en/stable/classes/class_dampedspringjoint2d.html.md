**DampedSpringJoint2D**  
========================

> **Inherited from:** `Joint2D → Node2D → CanvasItem → Node → Object`

A physics joint that connects two 2D physics bodies with a spring‑like force.  
Use it when you want two bodies to remain linked but still have the ability to oscillate or dampen the motion like a real spring.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `anchor_a` | `Vector2` | `(0, 0)` | Anchor point on the first body, expressed in the first body’s local coordinates. |
| `anchor_b` | `Vector2` | `(0, 0)` | Anchor point on the second body, expressed in the second body’s local coordinates. |
| `rest_length` | `float` | `0.0` | Desired length of the spring in world units. |
| `stiffness` | `float` | `100.0` | Spring stiffness (higher → tighter spring). |
| `damping` | `float` | `5.0` | Damping coefficient (higher → faster decay). |
| `max_force` | `float` | `0.0` (no limit) | Maximum force that the joint can exert. |

> All numeric properties are editable from the editor’s inspector or via GDScript.

---

## Signals

| Signal | Description |
|--------|-------------|
| `body_entered(body: Object)` | Emitted when a physics body first comes into contact with the joint. |
| `body_exited(body: Object)` | Emitted when a physics body stops contacting the joint. |

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_anchor_a()` | `Vector2` | – | Returns the anchor point on the first body. |
| `set_anchor_a(anchor: Vector2)` | `void` | `anchor` | Sets the anchor point on the first body. |
| `get_anchor_b()` | `Vector2` | – | Returns the anchor point on the second body. |
| `set_anchor_b(anchor: Vector2)` | `void` | `anchor` | Sets the anchor point on the second body. |
| `get_rest_length()` | `float` | – | Returns the spring’s rest length. |
| `set_rest_length(length: float)` | `void` | `length` | Sets the spring’s rest length. |
| `get_stiffness()` | `float` | – | Returns the spring’s stiffness value. |
| `set_stiffness(stiffness: float)` | `void` | `stiffness` | Sets the spring’s stiffness value. |
| `get_damping()` | `float` | – | Returns the current damping coefficient. |
| `set_damping(damping: float)` | `void` | `damping` | Sets the spring’s damping coefficient. |
| `get_max_force()` | `float` | – | Returns the maximum force limit. |
| `set_max_force(max: float)` | `void` | `max` | Sets the maximum force limit. |

> All setters return `void`. Use the corresponding getters to read the current values.

---

## Example

```gdscript
# Create a spring between two rigid bodies
var spring = DampedSpringJoint2D.new()
spring.body_a = $BodyA
spring.body_b = $BodyB
spring.rest_length = 100.0
spring.stiffness = 200.0
spring.damping = 10.0
add_child(spring)
```

---

## Notes

* The joint will automatically compute the spring force based on the positions of `body_a` and `body_b`.  
* If `max_force` is set to `0.0`, the joint will apply unlimited force until the bodies collide or the simulation steps stabilize.  
* In the editor, the anchors are displayed as small dots that you can drag to adjust their positions relative to the bodies.

---

### References

* [Godot 4 API Reference – `DampedSpringJoint2D`](https://docs.godotengine.org/en/stable/classes/class_dampedspringjoint2d.html)  
* [Physics 2D → Joint Nodes](https://docs.godotengine.org/en/stable/tutorials/physics/2d_physics.html)  

---