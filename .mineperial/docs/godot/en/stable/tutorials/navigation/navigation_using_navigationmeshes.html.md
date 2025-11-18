**Using navigation meshes**

---

Godot provides two primary navigation mesh types for 2D and 3D projects:  
* **`NavigationPolygon`** – a 2‑D polygon that can be edited in the editor and exported to a `NavigationMesh` resource.  
* **`NavigationMesh`** – the runtime representation of a navigation mesh, automatically built by the editor or manually via script.

Navigation works independently from rendering, physics, or input. It relies on the `NavigationServer` (or `Navigation2DServer` for 2‑D) to manage regions, agents, and pathfinding queries.

### 1. Creating a navigation mesh

1. **Add a `NavigationRegion` (3‑D) or `NavigationRegion2D` (2‑D)** node to your scene.  
2. **Assign a `NavigationMesh`** resource to the node’s *Navigation Mesh* property.  
3. In the editor, use the *Mesh → Build* or *Polygon → Edit* tool to shape the mesh.

   *For 3‑D:*  
   - Use a `NavigationMeshInstance` if you need the mesh to follow a `MeshInstance`.  
   - Adjust the *Agent Radius* and *Height* to match your character.

4. **Update the mesh** whenever the level geometry changes (e.g., during runtime, use `NavigationMesh.generate_from_surfaces()`).

### 2. Using the navigation mesh in code

```gdscript
# Assume `nav` is a NavigationRegion3D node
var nav_agent = nav.get_navigation_agent()
var destination = Vector3(10, 0, 20)

nav_agent.set_target_location(destination)

func _physics_process(delta):
    var next = nav_agent.get_next_path_position()
    move_and_slide((next - global_transform.origin).normalized() * speed)
```

For 2‑D, replace `NavigationAgent` with `NavigationAgent2D` and use `get_next_path_position_2d()`.

### 3. Configuring navigation agents

| Property | Description |
|----------|-------------|
| `max_speed` | The maximum speed the agent may travel. |
| `radius` | The collision radius used for pathfinding. |
| `height` | Only for 3‑D; the vertical extent of the agent. |
| `avoidance_enabled` | If true, the agent will avoid other agents. |

### 4. Advanced features

* **Custom navigation layers** – assign different layers to allow selective pathfinding.  
* **Dynamic obstacle avoidance** – use `NavigationObstacle` nodes to add moving blockers.  
* **Multiple navigation maps** – create separate `NavigationMesh` resources for different areas.

### 5. Troubleshooting

| Issue | Fix |
|-------|-----|
| Agent stuck on corners | Increase `navigation_radius` or add a smoother mesh. |
| Path never updates | Call `NavigationMeshInstance.update_navigation_mesh()` after modifying the underlying geometry. |
| Agents ignoring obstacles | Ensure `avoidance_enabled` is true and the obstacle is on the same layer. |

For full reference, see the [Godot 4 Manual – Navigation](https://docs.godotengine.org/en/stable/tutorials/navigation.html).