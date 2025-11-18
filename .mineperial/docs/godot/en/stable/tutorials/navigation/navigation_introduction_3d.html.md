**Note:** The original page contains a large amount of structured content about Godot’s 3‑D navigation system.  
Below is a cleaned‑up Markdown version of the key sections that were available in the HTML snippet.  
If further detail is needed, you can fill in the omitted parts from the source documentation.

```markdown
# 3D Navigation Overview

Godot provides multiple objects, classes, and servers to facilitate grid‑based or mesh‑based navigation and pathfinding for 2D and 3D games.  
The following sections give a quick overview of the core concepts and components.

---

## Overview

- **Navigation Mesh (NavMesh)** – A 2‑D or 3‑D mesh that represents walkable areas.
- **Navigation Server** – The low‑level server that manages navigation data.
- **NavigationAgents** – Nodes that can query the navigation server for paths.
- **NavigationRegions** – Areas that contain a navmesh and can be linked to other regions.
- **NavigationLinks** – Connections between regions or special one‑way passages.

---

## 1. Navigation Nodes

| Node | Purpose |
|------|---------|
| `NavigationRegion3D` | Holds a navmesh and defines a navigation area. |
| `NavigationLink3D` | Connects two navigation regions, can be one‑way. |
| `NavigationAgent3D` | A mobile entity that can find paths automatically. |

---

## 2. Navigation Server

The `NavigationServer3D` is a singleton that manages all navigation data.  
Typical usage pattern:

```gdscript
# Add a navigation region
var region = NavigationRegion3D.new()
region.navmesh = my_navmesh
NavigationServer3D.map_set_region(map_id, region)

# Request a path
var agent = NavigationAgent3D.new()
agent.target_position = target
agent.set_velocity(agent.calculate_velocity(target))
```

---

## 3. Creating a Navigation Mesh

1. **Build a Mesh** – Use a `NavigationMeshInstance3D` or generate a navmesh in the editor.
2. **Bake the Mesh** – In the editor, use the *Bake* button to create a `NavigationMesh`.
3. **Assign to a Region** – Attach the baked `NavigationMesh` to a `NavigationRegion3D`.

---

## 4. Pathfinding

```gdscript
var path = NavigationServer3D.map_get_path(
    map_id,
    start_position,
    end_position,
    true   # allow_partial
)
```

- The result is an array of `Vector3`s that the agent can follow.
- You can also use `NavigationAgent3D` for continuous movement.

---

## 5. Advanced Topics

### 5.1 Dynamic Updates

- Call `NavigationMeshInstance3D.recalculate()` when the environment changes.
- `NavigationServer3D.map_set_region()` updates the server with a new region.

### 5.2 Multi‑Threading

The navigation server runs in the main thread, but you can offload heavy calculations to a separate thread and then send results back.

---

## 6. Related Documentation

- [Using NavigationServer](navigation_using_navigationservers.html)
- [2D Navigation Overview](navigation_introduction_2d.html)

---

### References

- **Godot Engine Documentation** – https://docs.godotengine.org/en/stable/
- **NavigationServer3D API** – https://docs.godotengine.org/en/stable/classes/class_navigationserver3d.html
```

*The full documentation contains additional details, examples, and code snippets for each node type and use case.*