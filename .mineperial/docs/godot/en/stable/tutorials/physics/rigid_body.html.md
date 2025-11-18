**Using RigidBody**

A *RigidBody* is a node that is fully simulated by the physics engine.  
When you drop a `RigidBody` into a scene it behaves like a solid object that
collides with other bodies, can be affected by forces and impulses, and
conforms to the laws of gravity and friction.

---

## 1. What is a rigid body?

A rigid body is an object that is directly controlled by the physics engine
in order to simulate the behavior of physical objects.  
In order to define the shape of the body, it must contain at least one
collision shape (e.g. `CollisionShape3D` or `CollisionShape2D`).

---

## 2. Creating a RigidBody

1. **Add a `RigidBody` node** to your scene.  
2. **Add a shape** child (`CollisionShape3D` / `CollisionShape2D`) and assign
   a shape resource (BoxShape, SphereShape, etc.).  
3. (Optional) Add a visual representation such as a `MeshInstance3D`
   or `Sprite`.

```gdscript
# Example: create a RigidBody programmatically
var body = RigidBody3D.new()
body.mass = 2.0
body.gravity_scale = 1.0

var shape = CollisionShape3D.new()
shape.shape = SphereShape3D.new()
shape.shape.radius = 0.5
body.add_child(shape)

add_child(body)
```

---

## 3. RigidBody properties

| Property | Description |
|----------|-------------|
| `mass` | The mass of the body (kg). |
| `friction` | Coefficient of friction with other surfaces. |
| `bounce` | Restitution coefficient. |
| `gravity_scale` | Multiplier for the global gravity. |
| `linear_damp` / `angular_damp` | Damping factors. |
| `mode` | `Rigid`, `Static`, `Character`, `Kinematic`. |
| `collision_layer` / `collision_mask` | Which layers to collide with. |

> **Tip:** A `RigidBody` with `mode = Static` behaves like a static collision
> object; `Kinematic` is for bodies you want to move via code, but still
> interact with physics.

---

## 4. Applying forces

```gdscript
# Add an impulse at the body's position
body.apply_impulse(Vector3.ZERO, Vector3.UP * 10)

# Add a continuous force
func _physics_process(delta):
    body.apply_force(Vector3.ZERO, Vector3.RIGHT * 5)
```

You can also set linear and angular velocity directly:

```gdscript
body.linear_velocity = Vector3(0, 5, 0)
body.angular_velocity = Vector3(0, 0, 1)
```

---

## 5. Using RigidBody as a Character

Set `mode` to `Character` to use Godot’s built‑in character controller
features:

```gdscript
body.mode = RigidBody3D.MODE_CHARACTER
body.angular_damp = 10
body.friction = 0.8
```

When in character mode the body ignores angular velocity changes and
offers a `move_and_slide`‑like API.

---

## 6. Example: Falling Sphere

1. Add a `RigidBody3D` to the scene.  
2. Add a `CollisionShape3D` with a `SphereShape3D` (radius = 0.5).  
3. Add a `MeshInstance3D` with a `SphereMesh`.  
4. In the inspector set `gravity_scale` to `1.0` and `mass` to `1.0`.  
5. Run the scene and watch it fall and collide with the ground.

```gdscript
# In a script attached to the RigidBody
func _ready():
    self.linear_damp = 0.1
```

---

## 7. Common pitfalls

| Issue | Fix |
|-------|-----|
| Body doesn’t fall | Check that `gravity_scale` > 0 and that a `StaticBody` is on the ground. |
| Body moves too fast | Reduce `mass` or increase `linear_damp`. |
| Body “sticks” to walls | Increase `friction` or use a different shape. |

---

### Further reading

- [RigidBody Documentation](https://docs.godotengine.org/en/stable/classes/class_rigidbody3d.html)  
- [Physics Layers & Masks](https://docs.godotengine.org/en/stable/tutorials/physics/physics_layers_and_masks.html)  
- [Collision Shapes](https://docs.godotengine.org/en/stable/tutorials/physics/physics_shapes.html)

---

**Note:** The tutorial above assumes Godot 4.0+. In earlier versions the
node was called `RigidBody` (2D) / `RigidBody2D`; the API is very similar
except for the 3D/2D namespace differences.