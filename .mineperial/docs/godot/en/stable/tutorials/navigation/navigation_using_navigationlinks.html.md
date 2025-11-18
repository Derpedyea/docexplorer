**Using NavigationLinks**  
*Godot Engine documentation – Stable*

---

# Introduction

NavigationLinks are a node type that allow you to connect polygons on a navigation mesh from a
`NavigationRegion2D` or `NavigationRegion3D` over arbitrary distances.  
They are useful for:

* **Portals** – jumping from one surface to another that isn’t physically connected.
* **Elevators / lifts** – moving a character between floors.
* **Custom path‑finding shortcuts** – bypassing large obstacles.

The engine uses `NavigationLink2D` / `NavigationLink3D` as part of the navigation graph,
so an AI agent will treat a link as a normal walkable edge.

---

# Adding a NavigationLink

### In the editor

1. Select the `NavigationRegion2D` (or `NavigationRegion3D`) that you want to use as the
   source of the link.
2. Add a child node of type **NavigationLink2D** (or **NavigationLink3D**).
3. Set the following properties in the inspector:

   * `Enabled` – whether the link is active.
   * `Target Position` – the destination point for the link.
   * `Bidirectional` – if `true`, the link can be traversed in both directions.
   * `Use Custom Cost` – optional extra cost applied to the link during path calculation.
   * `Custom Cost` – numeric value used when `Use Custom Cost` is checked.
   * `Navigation Layer` – which navigation layers this link belongs to.

4. (Optional) If you need the link to be invisible at runtime, uncheck `Visible`.

### Example scene

```
NavigationRegion2D
 ├─ CollisionPolygon2D
 ├─ NavigationLink2D
 │    └─ (properties set in inspector)
```

---

# Using NavigationLinks in 2D

```gdscript
# Get a reference to the link node
var link = $NavigationLink2D

# Enable the link
link.enabled = true

# Connect a signal to detect when an agent enters the link
link.agent_entered.connect(func(agent):
    print("Agent entered the link!")
)
```

When an AI or character reaches the link’s collision shape, the navigation system will
teleport the agent to the `target_position`.  
If `bidirectional` is `true`, the reverse teleport will also happen.

---

# Using NavigationLinks in 3D

The same steps apply, but using `NavigationLink3D`:

```gdscript
var link = $NavigationLink3D
link.enabled = true
link.bidirectional = true
link.target_position = Vector3(10, 0, 5)
```

`NavigationLink3D` automatically creates a `NavigationMeshInstance3D` for the link
if none is present, so you can simply set the target transform.

---

# Creating a Link via Code

You can also add a link at runtime using the `NavigationServer`:

```gdscript
var link = NavigationLink3D.new()
link.navigation_layer = 1
link.target_position = Vector3(20, 0, 0)
link.enabled = true
add_child(link)
```

This is handy for procedural worlds or when links must be generated dynamically.

---

# Tips & Common Gotchas

* **Collision shape** – The link uses the collision shape of its parent to detect
  agent entry. If you want a different shape, add a child `CollisionShape2D` / `CollisionShape3D`.

* **Bidirectional links** – When a link is bidirectional, both directions share the
  same cost. If you need different costs for each direction, create two separate
  links.

* **Layer masking** – Make sure the `Navigation Layer` of the link matches the
  layers used by your `NavigationAgent`.

* **Performance** – NavigationLinks are cheap, but excessive links in a very large
  scene may still impact path‑finding performance. Group links logically and
  keep the number reasonable.

---

# Related Topics

* [NavigationObstacles](../navigation_using_navigationobstacles.html)
* [NavigationLayers](../navigation_using_navigationlayers.html)
* [NavigationAgents](../navigation_using_navigationagents.html)

--- 

*End of page.*