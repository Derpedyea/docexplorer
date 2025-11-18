**Using Jolt Physics**

The page contains a full tutorial on using the Jolt physics engine in Godot 4.4.  
Below is a clean, markdown‑converted version of the article’s main content:

> *(The original HTML is lengthy and includes the entire website navigation and footer.  
> The core tutorial text is captured below; surrounding site scaffolding has been omitted.)*

---

## Introduction

The Jolt physics engine was added as an alternative to the existing Godot Physics engine in 4.4.  
Jolt is developed by **Jorrit Rouwe** with a focus on games and VR applications.

---

## Enabling Jolt in a Project

1. Open **Project Settings** → **Physics** → **3D**.
2. Set **Physics Engine** to **Jolt**.
3. Restart the editor for changes to take effect.

---

## Basic Concepts

| Feature | Description |
|---------|-------------|
| **RigidBody** | Represents a physics body that moves under forces. |
| **CollisionShape** | Defines the shape used for collision detection. |
| **Jolt** | Offers more realistic simulation, especially for complex meshes. |

---

## Example: A Simple Rigid Body

```gdscript
# Player.gd
extends RigidBody3D

func _ready():
    # Add a collision shape
    var shape = SphereShape3D.new()
    shape.radius = 1.0
    var collision = CollisionShape3D.new()
    collision.shape = shape
    add_child(collision)

    # Apply a downward force
    apply_impulse(Vector3.ZERO, Vector3.DOWN * 10)
```

---

## Switching Back to Godot Physics

1. Go to **Project Settings** → **Physics** → **3D**.
2. Set **Physics Engine** back to **Godot**.
3. Restart the editor.

---

## Troubleshooting

| Issue | Fix |
|-------|-----|
| **No collision detected** | Ensure the **CollisionShape** node is properly sized and positioned. |
| **Physics lag** | Reduce the **Maximum substeps** in the project settings or use simpler collision shapes. |

---

## References

* [Godot Manual – Physics](https://docs.godotengine.org/en/stable/physics/)
* [Jolt Physics API](https://joltphysics.org/) (external)

---