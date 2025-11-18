**Large world coordinates**

*Godot Engine Documentation – stable*

---

## Why use large world coordinates?

Physics simulation and rendering in Godot rely on floating‑point numbers.  
Floating‑point precision is limited, especially when dealing with very large
world positions. Using a coordinate scale that is too large can lead to
floating‑point precision loss, causing physics errors, jitter, and rendering
artefacts.

Large world coordinates allow you to:

* Work with extremely big maps (e.g. open‑world, space simulators)
* Keep object positions in the same scale as the world (meters, kilometers)
* Avoid the need for “chunking” or “local origins” logic in the engine

---

## What to consider

| Aspect | Considerations | Suggested values |
|--------|----------------|------------------|
| **Physics server** | Uses a fixed‑step solver that can suffer from precision loss | `Project Settings > Physics > 3D > Physics Server > Fixed Timestep` |
| **Camera** | Large values can cause the camera to lose precision when moving far away | Keep the camera’s distance from the origin small |
| **World origin** | Keep the origin near the player / active area | Use a *local origin* technique if necessary |
| **Performance** | Large coordinates can increase CPU/GPU load due to higher integer ranges | Profile and adjust as needed |

---

## Enabling large world coordinates in Godot

1. **Project Settings** – `Physics > 3D > Use Large World Coordinates`  
   Enable this option to switch the physics server to a 64‑bit coordinate mode.

2. **Rendering** – `Rendering > Quality > Viewport`  
   Increase the **Camera near** value and **Far** plane to accommodate the larger scale.

3. **Camera** – use a custom `Camera3D` node with a large `Far` plane, and
   optionally reset the origin when the player moves far from it.

---

## Example: Using a local origin

```gdscript
# Node: Main
extends Node3D

const ORIGIN_DISTANCE := 1000.0

func _process(_delta):
    var player_pos = $Player.global_transform.origin
    if player_pos.distance_to(Vector3.ZERO) > ORIGIN_DISTANCE:
        _reset_origin()

func _reset_origin():
    # Move all objects relative to the player's new position
    var shift = -$Player.global_transform.origin
    for child in get_children():
        child.translate(shift)
    # Reset camera
    $Camera.translate(shift)
```

This script keeps the world origin near the player, preventing floating‑point drift.

---

## Performance considerations

* Large coordinates may cause the physics engine to use more memory for
  collision shapes.
* The renderer can experience z‑buffer precision issues; increase the
  **Depth Buffer** bits if necessary.
* Keep an eye on profiling tools (`Debug > Profiler`) to spot any slow
  nodes or scripts that depend on large values.

---

## Further reading

* [Physics Interpolation](../interpolation/index.html)  
* [Collision shapes (3D)](../collision_shapes_3d.html)  
* [TileMaps](../../tiles/tiles.html) – for large tiled worlds

---

**Author:** Godot Engine Documentation Team  
**Version:** stable (4.x)  
**Last updated:** 2024‑01‑15

---