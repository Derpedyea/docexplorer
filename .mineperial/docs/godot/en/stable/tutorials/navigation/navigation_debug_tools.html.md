# Navigation Debug Tools

Godot’s navigation system can be inspected in two ways: **inside the editor** (always enabled) and **at runtime** (optional).  
This guide explains how to enable the runtime visualisations, what each visualisation shows, and how to use them to debug your navigation meshes.

> **Tip** – In the editor the same options exist in the *Debug* menu of the *3D Viewport*.  
> In a running project you control them through the `NavigationServer` or the `NavigationAgent` nodes.

---

## 1. Enabling Navigation Debug in the Editor

When you open a scene that contains a `Navigation` node, its associated navigation meshes, links and agents will be rendered in the editor viewport automatically:

* **Navigation meshes** – solid coloured polygons with outlines.
* **Navigation links** – yellow arrows connecting two polygons.
* **Agents** – coloured circles representing the agent’s collision shape and the path they will follow.

These visualisations help you spot missing polygons, incorrectly positioned links, or agents that are stuck.

---

## 2. Enabling Runtime Debug Visualisations

To see the same visualisations while the game is running:

1. **Project Settings**  
   *Navigate to*: `Project → Project Settings → Rendering → Debug*  
   *Check*: `Visible Navigation`  

2. **Toggle with the Keyboard**  
   Press **`Ctrl+Shift+J`** (or the key you have mapped for *Show Navigation Debug*).  
   This toggles all runtime navigation debug views.

3. **Show/Hide Specific Elements**  
   Use the *Navigation Debug* panel in the *Inspector* to enable/disable:
   * `Show NavMesh` – the polygons themselves.
   * `Show NavMesh Wireframe` – just the outlines.
   * `Show NavLinks` – the arrow helpers.
   * `Show Navigation Paths` – the lines that agents will take.

---

## 3. Visualising a Navigation Mesh

A navigation mesh is visualised as a **blue polygon** with a semi‑transparent fill and a darker outline.

* **Polygons** – the areas an agent can walk on.
* **Triangles** – the internal tessellation used by the navigation algorithm (visible with *Show NavMesh Triangles*).

If a polygon is missing where you expect it, rebuild the navigation mesh:

```gdscript
var nav = $Navigation
nav.navmesh_bake()
```

---

## 4. Visualising Navigation Links

Navigation links are useful for moving an agent between disconnected polygons (e.g. across a gap or through a door).

* **Link arrows** – yellow with a small arrowhead.
* **Link visibility** – toggled with `Show NavLinks`.

If a link is not being respected, check that both endpoints lie in walkable polygons and that the link’s cost and traversal distance are set correctly.

---

## 5. Visualising Agents & Paths

Agents (`NavigationAgent3D`, `NavigationAgent2D`) display:

* **Collision shape** – a green circle/box.
* **Destination arrow** – a white line pointing to the current target.
* **Computed path** – a blue polyline that follows the navigation graph.

When debugging a path:

1. Select an agent node.
2. In the Inspector, click **`Calculate Path`**.
3. Observe the path drawn in the viewport.

---

## 6. Advanced Debug Options

| Option | Description |
|--------|-------------|
| `Show NavMesh Triangles` | Displays the underlying triangles of each mesh. |
| `Show Navigation Paths` | Draws all path requests currently being processed. |
| `Show Navigation NavPoints` | Highlights all navigation points that the algorithm uses internally. |
| `Show Navigation Areas` | Colour‑codes walkable areas (if you use *NavigationRegion3D*). |

These can be set per project or per scene. The most common use‑case is to temporarily enable all options while testing a new level, then disable them to reduce rendering load.

---

## 7. Common Issues & Fixes

| Problem | Likely Cause | Fix |
|---------|--------------|-----|
| **NavMesh not visible** | `Visible Navigation` is unchecked. | Enable in Project Settings or press the debug toggle key. |
| **Agent stuck** | Polygon missing or link cost too high. | Re‑bake the navmesh or adjust link cost. |
| **Paths too long** | Pathfinding is running in 2‑D space but the world is 3‑D (or vice‑versa). | Use a matching `NavigationAgent2D`/`NavigationAgent3D` for your scene. |
| **Debug lines flicker** | Debug view is enabled while the engine is still processing. | Disable `Show Navigation Paths` until the agent has reached its destination. |

---

## 8. Performance Considerations

Rendering navigation debug information can be expensive, especially with many agents or large meshes.

* Disable the visualisation in release builds (`Project > Project Settings > Debug > Visible Navigation` is set to **false**).
* Use the *Visibility* settings in the editor viewport to hide only the parts you do not need.
* When profiling, toggle the debug options with a single key to minimise the time spent on rendering.

---

## 9. Further Reading

* [Navigation Overview](../navigation/index.html)
* [Connecting Navigation Meshes](../navigation/navigation_connecting_navmesh.html)
* [Navigation Agents](../navigation/navigation_agents.html)

---