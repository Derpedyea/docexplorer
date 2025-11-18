**Using Area2D**

> *Source: Godot Engine – `tutorials/physics/using_area_2d.html`*  

---

## Overview

`Area2D` is a collision node that does **not** physically interact with other objects.  
Instead, it is used to **detect** when other bodies or areas enter, exit, or stay inside its
collision shape. This makes it perfect for triggers, zones, and any situation where you
want to react to proximity without applying forces.

Typical use‑cases include:

- Damage zones / traps  
- Pick‑up objects or items  
- Player proximity checks (e.g. “enter dialogue zone”)  
- Light‑or‑sound‑volume zones  
- Zone‑based spawning or logic

---

## Node Setup

1. **Add an `Area2D` node** to your scene.  
2. Inside it, add a `CollisionShape2D` (or `CollisionPolygon2D`) that defines the detection volume.  
3. (Optional) Add a `Sprite` or other visual child for debugging.

```gdscript
# Example scene structure
Player
 ├── Sprite
 └── Area2D
     ├── CollisionShape2D
     └── Sprite (debug)
```

### Important Properties

| Property | What it does | Typical value |
|----------|--------------|---------------|
| `monitoring` | Enables/disables area monitoring. | `true` |
| `monitorable` | Allows this area to be monitored by other areas. | `true` |
| `collision_layer` | Collision layer this area belongs to. | set to your custom layer |
| `collision_mask` | Layers this area will detect. | set to layers you want to detect |

---

## Signals

`Area2D` emits several useful signals. Connect them either in the editor or via code.

| Signal | Description | Example connection |
|--------|-------------|--------------------|
| `body_entered(body)` | Emitted when a physics body enters the area. | `area.connect("body_entered", self, "_on_body_entered")` |
| `body_exited(body)` | Emitted when a physics body exits. | `area.connect("body_exited", self, "_on_body_exited")` |
| `area_entered(area)` | Emitted when another area enters. | `area.connect("area_entered", self, "_on_area_entered")` |
| `area_exited(area)` | Emitted when another area exits. | `area.connect("area_exited", self, "_on_area_exited")` |
| `body_shape_entered(body_id, body, local_shape_idx, local_shape)` | Emitted with shape details. | N/A (advanced) |
| `body_shape_exited(body_id, body, local_shape_idx, local_shape)` | Same, on exit. | N/A |

---

### Example Script

```gdscript
extends Area2D

func _ready():
    # Connect signals
    connect("body_entered", self, "_on_body_entered")
    connect("body_exited", self, "_on_body_exited")

func _on_body_entered(body):
    if body.is_in_group("Player"):
        print("Player entered the zone")
        # e.g., apply damage or start a cut‑scene
        body.take_damage(10)

func _on_body_exited(body):
    if body.is_in_group("Player"):
        print("Player exited the zone")
        body.stop_damage()
```

> **Tip:** Use the *groups* system to filter which bodies should react to the area.

---

## Using Areas for Triggers

```gdscript
# Area that triggers a dialogue
extends Area2D

export(String) var dialogue_id

func _on_body_entered(body):
    if body.is_in_group("Player"):
        var dlg = $"/root/DialogManager"
        dlg.start(dialogue_id)
```

Add a `CollisionShape2D` that matches the zone, and enable `monitoring`.  
Set `collision_layer`/`mask` so only the player can trigger it.

---

## Layer & Mask Configuration

Godot’s physics layers are 20-bit values.  
To avoid unnecessary checks, set:

```gdscript
# Area monitors only the player layer
collision_layer = 1          # layer 1 (e.g., "Area")
collision_mask = 2           # mask layer 2 (e.g., "Player")
```

---

## Advanced: Monitoring Bodies with Shapes

If you need to know *which shape* of a body entered the area, connect:

```gdscript
connect("body_shape_entered", self, "_on_body_shape_entered")

func _on_body_shape_entered(body_id, body, local_shape_idx, local_shape):
    print("%s shape %d entered" % [body.name, local_shape_idx])
```

---

## Debugging Tips

- **Draw the collision shape** in the editor to verify size/position.
- Use `monitoring` and `monitorable` flags to quickly enable/disable detection during testing.
- Add a temporary visible sprite or `ColorRect` inside the area to see it at runtime.
- Inspect the *Node* tab for the *Area2D* to see signal connections and layer/mask settings.

---

## Summary

`Area2D` is a lightweight node for detecting overlaps without physics response.  
Key takeaways:

1. **Add** an `Area2D` and a collision shape.  
2. **Configure** layers/masks to limit detections.  
3. **Connect** the appropriate signals to react to bodies/areas entering or leaving.  
4. Use **groups** and **tags** to filter which objects should trigger logic.  

With these steps, you can create zones, triggers, and proximity logic in your 2D projects.