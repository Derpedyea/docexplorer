**Connecting navigation meshes**  
*(Godot Engine – stable documentation)*

---  

### Overview

When you add multiple `NavigationMesh` resources to a scene, the **NavigationServer** automatically merges them as long as **at least two vertex positions of one edge exactly overlap**.  
If you want to connect two meshes that are separated by a gap, or that do not share a common edge, you need to use a `NavigationLink`.  

---

## 1. Automatic merging

* Two meshes that share a common edge (exact vertex match) become a single navigation graph.  
* The server resolves the merge at **scene‑load time**.  
* If the meshes are not touching, they stay independent and cannot be traversed from one to the other.

```gdscript
# Example: create two meshes that overlap

var nav_mesh_1 = NavigationMesh.new()
nav_mesh_1.add_polygon([...])   # vertices

var nav_mesh_2 = NavigationMesh.new()
nav_mesh_2.add_polygon([...])   # vertices that touch nav_mesh_1

# Add both to NavigationMeshInstances and let the server merge them
```

---

## 2. Connecting over a gap – `NavigationLink`

`NavigationLink` lets you join two navigation meshes even if they are separated.

1. **Add a `NavigationLink` node**  
   * Place it in the scene where you want the link to start.  
   * Set `target` to the node that holds the other navigation mesh.

2. **Configure the link**  
   * `source_position` – 3D point on the first mesh.  
   * `target_position` – 3D point on the second mesh.  
   * `bidirectional` – if `true`, the link works in both directions.

3. **Optional: use a custom cost**  
   * `navigation_cost` – influence the path‑finding cost.

```gdscript
# Example: link two areas
var link = NavigationLink3D.new()
link.source_position = Vector3(0, 0, 0)
link.target_position = Vector3(5, 0, 0)
link.bidirectional = true
link.navigation_cost = 1
add_child(link)
```

The `NavigationServer` automatically updates the graph when the link is added or removed.

---

## 3. Using a `NavigationRegion3D`

If you prefer to create the link programmatically:

```gdscript
# In a script attached to a NavigationRegion3D
var region = NavigationRegion3D.new()
region.navigation_mesh = preload("res://mesh1.tres")
add_child(region)

var other_region = NavigationRegion3D.new()
other_region.navigation_mesh = preload("res://mesh2.tres")
other_region.transform.origin = Vector3(10, 0, 0)
add_child(other_region)

# Link them
var link = NavigationLink3D.new()
link.source_position = Vector3(5, 0, 0)
link.target_position = Vector3(15, 0, 0)
link.target = other_region
add_child(link)
```

---

## 4. Tips

| Scenario | Recommended approach |
|----------|-----------------------|
| Small gap, simple geometry | `NavigationLink` |
| Large open world | Split into multiple `NavigationRegion3D` nodes with a `NavigationLink` at each portal |
| Dynamic obstacles | Use `NavigationLink` with `navigation_cost` to penalize or disable traversal temporarily |

---

## 5. Debugging

* Use the **Navigation debug tools** (available under *Debug > Show Navigation*).  
* Verify that the link is visible and that the start & end points match the meshes.  
* In the editor, you can enable *Show navigation layers* to see the merged graphs.

---

### Further reading

* [Navigation overview – Godot 4.0 Manual](/tutorials/navigation/navigation_basics.html)  
* [Using NavigationLink in 2D](/tutorials/navigation/navigation2d_link.html)  
* [Dynamic navigation updates](/tutorials/navigation/navigation_update.html)

---  

**End of tutorial.**