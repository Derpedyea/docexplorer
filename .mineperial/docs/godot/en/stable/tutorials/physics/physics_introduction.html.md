**Physics introduction**

> In game development, you often need to know when two objects in the game intersect or come into contact. This is known as collision detection. When a collision is detected, you typically want something to happen – a character stops moving, an explosion is spawned, or a character takes damage. Godot provides a full physics engine that can handle both 2D and 3D physics, and it offers a number of built‑in nodes to simplify working with collisions.

> This page gives an overview of the basic concepts behind Godot’s physics system and introduces the most important node types. It also shows how to set up a simple scene that uses the physics engine.

---

## 1.  Collision detection basics

* **Collision shapes** – 2D shapes (e.g. `CircleShape2D`, `RectangleShape2D`) or 3D shapes (`SphereShape`, `BoxShape`).  
* **Collision objects** – Nodes that own a shape and participate in collisions.  
  * `StaticBody2D` / `StaticBody3D` – immovable objects.  
  * `KinematicBody2D` / `KinematicBody3D` – objects you move with code.  
  * `RigidBody2D` / `RigidBody3D` – fully simulated physics bodies.  
  * `Area2D` / `Area3D` – detection zones that do *not* physically block other objects.

The physics engine runs in its own physics step (default 60 fps). The order of processing is:

1. `_physics_process(delta)` – called for every body that has this callback.  
2. Collision resolution – the engine moves objects so they no longer intersect.  
3. `body_entered / body_exited` signals – emitted for `Area` nodes.

---

## 2.  Setting up a simple 2D physics scene

```text
┌── Main (Node2D) ────────┐
│ └─ Player (KinematicBody2D) ────┐
│     └─ CollisionShape2D          │
│     └─ Sprite                     │
│                                     │
│ └─ Platform (StaticBody2D) ────────┘
│     └─ CollisionShape2D
└──────────────────────────────────────
```

* `Player` uses a `KinematicBody2D` so you can control its movement with `move_and_slide()`.  
* `Platform` is a `StaticBody2D` that will never move but will collide with the player.

**Example code – moving the player**

```gdscript
extends KinematicBody2D

export var speed : float = 200
var velocity : Vector2 = Vector2.ZERO

func _physics_process(delta):
    velocity.x = 0
    if Input.is_action_pressed("ui_right"):
        velocity.x += speed
    if Input.is_action_pressed("ui_left"):
        velocity.x -= speed

    velocity = move_and_slide(velocity, Vector2.UP)
```

---

## 3.  Collision layers & masks

* Each physics object has a **layer mask** that defines which layers it belongs to.  
* It also has a **collision mask** that defines which layers it can collide with.  
* By default, all objects are on layer 1 and collide with layer 1.

> Use the **Layer & Mask** tab in the Inspector to fine‑tune interactions, e.g. so a character can walk on the ground but pass through a ghost zone.

---

## 4.  Physics queries

Godot offers several query helpers that let you detect bodies, areas, and shapes without using collision callbacks.

| Query | Use case | Example |
|-------|----------|---------|
| `Physics2DDirectSpaceState` | Immediate queries like `intersect_point`, `intersect_ray` | `space_state.intersect_ray(origin, end)` |
| `PhysicsServer2D` | Low‑level physics API | `PhysicsServer2D.shape_create(shape)` |
| `get_world_2d().direct_space_state` | Convenient shortcut | `var result = get_world_2d().direct_space_state.intersect_ray(...)` |

---

## 5.  Switching physics engines

Godot 4 introduced a new **Jolt Physics** backend that can replace the default Bullet engine. You can enable it in the project settings:

```
Project → Project Settings → Physics → 3D → Physics Engine → Jolt
```

> The Jolt backend is more performant for complex scenes and better suited to modern hardware.

---

### Quick recap

* **Collision shapes** define geometry for collision checks.  
* **Physics bodies** (Static, Kinematic, Rigid, Area) define how an object interacts with the world.  
* **Layers & masks** control which objects collide.  
* **Physics callbacks** (`_physics_process`, `body_entered`, etc.) let you respond to collisions.  
* **Physics queries** give you more control when you need to probe the world.

For more advanced topics, see the linked pages on **Physics Materials**, **Ragdoll Physics**, and the **Godot 4 Jolt guide**.

---

**Related documentation**

- [2D physics overview](https://docs.godotengine.org/en/stable/tutorials/physics/2d_physics.html)  
- [3D physics overview](https://docs.godotengine.org/en/stable/tutorials/physics/3d_physics.html)  
- [Physics Materials](https://docs.godotengine.org/en/stable/tutorials/physics/physics_material.html)  
- [Using Jolt Physics](https://docs.godotengine.org/en/stable/tutorials/physics/using_jolt_physics.html)  

---