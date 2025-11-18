# SpringBoneCollisionPlane3D

`SpringBoneCollisionPlane3D` is a node that defines an **infinite plane** for collision with the `SpringBoneSimulator3D`.  
It inherits from:

* `SpringBoneCollision3D`  
  * `Node3D`  
    * `Node`  
      * `Object`

> This node is useful when you need a simple, infinite collision surface for a spring‑bone simulation, for example to keep a character’s hair or clothing from passing through a floor or a wall.

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `transform` | `Transform3D` | – | The world transform of the node determines the position and orientation of the collision plane. The plane’s normal is the forward axis (`z`) of the transform. |

> **Tip** – Because the plane is infinite, you only need to set its position (via the node’s translation) and orientation (via rotation). No other geometry parameters are required.

## Methods

`SpringBoneCollisionPlane3D` inherits all methods of `SpringBoneCollision3D` and `Node3D`. It does not expose any additional public methods beyond those inherited.

### Example usage

```gdscript
# Example: Creating a plane collision for a spring‑bone simulation
var plane = SpringBoneCollisionPlane3D.new()
plane.transform.origin = Vector3(0, 1, 0)    # place the plane 1 unit above the origin
plane.transform.basis = Basis(Vector3(0, 1, 0))  # normal pointing up

# Add to a SpringBoneSimulator3D
var simulator = SpringBoneSimulator3D.new()
simulator.add_child(plane)
```

## Signals

There are no signals emitted by `SpringBoneCollisionPlane3D`.

---

**Note**: The actual collision handling is performed by the `SpringBoneSimulator3D`, which queries all child `SpringBoneCollision3D` nodes (including `SpringBoneCollisionPlane3D`) to detect and resolve intersections.  
For more information about spring‑bone simulation, see the [SpringBoneSimulator3D](../classes/class_springbonesimulator3d.html) reference.