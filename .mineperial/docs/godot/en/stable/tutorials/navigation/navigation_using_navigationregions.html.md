# Using NavigationRegions

NavigationRegions are the visual Node representation of a region of the navigation map on the NavigationServer.  
Each NavigationRegion node holds a resource for the navigation mesh data, and both 2‑D and 3‑D versions exist in Godot 4.

> *See the official Godot documentation for the full reference: <https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_using_navigationregions.html>.*

---

## Table of contents

1. [Overview](#overview)
2. [Adding a NavigationRegion](#adding-a-navigationregion)
3. [NavigationRegion 2D](#navigationregion-2d)
   - [NavigationPolygonInstance](#navigationpolygoninstance)
   - [Example](#example-2d)
4. [NavigationRegion 3D](#navigationregion-3d)
   - [NavigationMesh](#navigationmesh)
   - [Example](#example-3d)
5. [Using NavigationRegions in code](#using-navigationregions-in-code)
6. [Common pitfalls](#common-pitfalls)
7. [References](#references)

---

## Overview

The `NavigationRegion` nodes are the visual counterparts of the navigation data stored on the `NavigationServer`.  
While a `NavigationRegion` is a node you can place in a scene, the actual navigation mesh data is stored in a `NavigationRegion` resource (e.g. `NavigationRegion2D`, `NavigationRegion3D`, `NavigationPolygon`, `NavigationMesh`).  

The main benefits of using `NavigationRegion`s:

- **Modularity** – you can change the navigation layout by editing a single node.
- **Dynamic updates** – the server automatically re‑calculates paths when you modify a region at runtime.
- **Visual debugging** – the editor shows the navigation polygons, making it easy to spot gaps or overlapping regions.

---

## Adding a NavigationRegion

1. In the scene tree, right‑click and choose **Add Child Node** → *NavigationRegion* (2D or 3D depending on your project).
2. Select the node and open its **Inspector**.
3. Assign a navigation mesh or polygon resource:
   - **2D**: `navigation_polygon` property → *NavigationPolygon*.
   - **3D**: `navmesh` property → *NavigationMesh*.
4. Adjust the region’s transform or collision shape to match your level geometry.
5. Save the scene.

---

## NavigationRegion 2D

### NavigationPolygonInstance

For 2D projects, the `NavigationRegion2D` node uses a `NavigationPolygon` resource that you can edit directly in the editor:

- **Create** a new `NavigationPolygon` resource (`New → Navigation Polygon`).
- **Draw** the polygon using the built‑in polygon editor.
- **Assign** it to the `NavigationRegion2D` node.
- **Enable** `NavigationRegion2D` in the viewport to visualize it.

### Example (2D)

```gdscript
# player.gd
extends CharacterBody2D

func _physics_process(delta: float) -> void:
    var direction = Input.get_vector("ui_left", "ui_right", "ui_up", "ui_down")
    if direction != Vector2.ZERO:
        direction = direction.normalized()
        velocity = direction * SPEED
        move_and_slide()
```

Place the `NavigationRegion2D` in the same scene, or load it at runtime:

```gdscript
var nav_region = preload("res://nav_region.tscn").instantiate()
add_child(nav_region)
```

---

## NavigationRegion 3D

### NavigationMesh

For 3D projects, `NavigationRegion3D` uses a `NavigationMesh` resource:

- Create a navigation mesh with the **NavMeshSourceData** editor, or export a baked mesh from a 3D model.
- Assign it to the `navmesh` property.
- Optionally tweak **cell size**, **filtering**, and **agents** in the navigation settings.

### Example (3D)

```gdscript
# player.gd
extends CharacterBody3D

var nav_agent: NavigationAgent3D

func _ready() -> void:
    nav_agent = $NavigationAgent3D

func _physics_process(delta: float) -> void:
    var target = get_target_position()  # some logic
    nav_agent.set_target_location(target)
    var velocity = nav_agent.get_next_path_position() - global_transform.origin
    velocity = velocity.normalized() * SPEED
    move_and_slide(velocity)
```

---

## Using NavigationRegions in code

- **Retrieve** the navigation map: `var nav_map = NavigationServer3D.get_singleton()`.
- **Add** a region programmatically: `NavigationServer3D.map_set_active(map_id, true)` and `NavigationServer3D.region_create(...)`.
- **Query** for navigation queries: `NavigationServer3D.map_get_path(map_id, start, end, [])`.

---

## Common pitfalls

| Problem | Fix |
|---|---|
| Pathfinding jumps over gaps | Ensure all relevant `NavigationRegion`s are active and cover the entire walkable surface. |
| Performance hit when many regions | Merge small polygons into a single navigation region when possible. |
| Dynamic obstacles not detected | Use `NavigationObstacle2D/3D` nodes or rebuild the mesh when obstacles move. |

---

## References

- [Godot Docs – NavigationRegions](https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_using_navigationregions.html)  
- [Godot Docs – NavigationServer](https://docs.godotengine.org/en/stable/classes/class_navigationserver.html)  
- [Godot Docs – NavigationAgent](https://docs.godotengine.org/en/stable/classes/class_navigationagent3d.html)

---