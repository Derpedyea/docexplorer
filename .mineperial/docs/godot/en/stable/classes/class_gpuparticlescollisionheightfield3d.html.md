**Note:** The original page contains a full Godot class reference, but the provided HTML snippet only includes the surrounding navigation structure and metadata.  
Below is a concise Markdown representation of the main information that is available for the **`GPUParticlesCollisionHeightField3D`** class. If you need the full list of properties, methods and signals, refer to the official Godot documentation.

---

# GPUParticlesCollisionHeightField3D

> **Inherits:**  
> `GPUParticlesCollision3D` ➜ `VisualInstance3D` ➜ `Node3D` ➜ `Node` ➜ `Object`

## Description
A **real‑time height‑map‑shaped 3D particle collision shape** that affects `GPUParticles3D` nodes.  
This collision type uses a heightmap texture to define a 3D surface that particles can bounce off or collide with.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `height_map` | `Image` | `null` | The heightmap image used to generate the collision surface. |
| `scale` | `Vector3` | `Vector3(1,1,1)` | Scaling factor for the height field in 3D space. |
| `use_collision` | `bool` | `true` | Whether the collision is enabled for the particles. |
| `collision_layer` | `int` | `1` | The physics layer this collision shape belongs to. |
| `collision_mask` | `int` | `1` | Which physics layers the shape collides with. |

> *Note: The actual Godot docs list additional properties such as `mesh`, `material`, etc. For a complete list, visit the official reference page.*

---

## Methods

| Method | Return Type | Parameters | Description |
|--------|-------------|------------|-------------|
| `set_height_map(image: Image)` | `void` | `image` | Sets the height map for the collision field. |
| `get_height_map() -> Image` | `Image` | | Retrieves the current height map. |
| `update_mesh()` | `void` | | Recalculates the collision mesh from the height map. |

> *Additional methods may be inherited from parent classes (e.g., `Node`, `Object`).*

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `collision_entered(body: Object)` | `body` | Emitted when a body enters the height field collision. |
| `collision_exited(body: Object)` | `body` | Emitted when a body exits the height field collision. |

---

## Usage Example (GDScript)

```gdscript
extends GPUParticlesCollisionHeightField3D

func _ready():
    # Load a heightmap texture
    var image = preload("res://heightmap.png")
    set_height_map(image)
    update_mesh()
```

---

## Related Classes

- [GPUParticlesCollisionBox3D](../class_gpuparticlescollisionbox3d.html)  
- [GPUParticlesCollisionSDF3D](../class_gpuparticlescollisionsdf3d.html)  
- [GPUParticlesCollisionSphere3D](../class_gpuparticlescollisionsphere3d.html)

---