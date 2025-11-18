# Using NavigationLayers

NavigationLayers are an optional feature that let you filter which navigation meshes are considered when an agent queries a path.  
They work similarly to physics layers, allowing you to “turn off” or “turn on” specific navigation layers for a node, and then let your agents and links respect those masks.

---

## 1.  What are NavigationLayers?

* A bitmask that defines a set of layers.
* Each layer is a bit in an integer (0‑31 for 32 layers).
* Nodes that influence navigation (e.g. `NavigationMeshInstance`, `NavigationAgent`, `NavigationLink`) can be assigned to one or more layers.
* During a path query, the navigation server checks whether the agent’s layer mask intersects with the mesh’s layers; only intersecting layers are used.

---

## 2.  Setting up layers in the editor

1. **NavigationMeshInstance**  
   * Select the `NavigationMeshInstance` node.  
   * In the Inspector, under **Navigation** → **Navigation Layer** tick the layers that the mesh belongs to.
2. **NavigationAgent**  
   * Select your agent (`CharacterBody2D`, `CharacterBody3D`, or a custom node with a `NavigationAgent`).  
   * In the Inspector, find **Navigation** → **Navigation Layers** and enable the layers that the agent should walk on.

> **Tip**:  
> You can also change these properties at runtime from GDScript:  
> ```gdscript
> agent.navigation_layers = 1 << 0 | 1 << 2   # enable layers 0 and 2
> ```

---

## 3.  Using layers with `NavigationLink`

When you create a link that connects two navigation meshes:

1. In the link’s Inspector, locate **Navigation** → **Navigation Layer**.
2. Tick the layers that the link should be reachable from.  
   This means only agents that have those layers in their mask will use the link.

---

## 4.  Example: Multiple AI agents on separate layers

```gdscript
# Agent 1: follows layer 0
var agent1 : NavigationAgent3D
func _ready():
    agent1.navigation_layers = 1 << 0

# Agent 2: follows layer 1
var agent2 : NavigationAgent3D
func _ready():
    agent2.navigation_layers = 1 << 1
```

```gd
# NavigationMeshInstance on layer 0
var mesh : NavigationMeshInstance3D
func _ready():
    mesh.navigation_layer = 1 << 0

# NavigationMeshInstance on layer 1
var mesh2 : NavigationMeshInstance3D
func _ready():
    mesh2.navigation_layer = 1 << 1
```

Now each agent only sees the mesh on its own layer, allowing you to create distinct paths for different AI groups without changing the underlying geometry.

---

## 5.  Working with the navigation server

You can query the layers of a mesh or an agent through the server:

```gdscript
var nav_server = NavigationServer2D
var mesh_id = nav_server.get_instance(mesh.get_instance_id())
var mesh_layers = nav_server.get_navigation_layer_mask(mesh_id)
```

---

## 6.  Common pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| Agent can’t find a path | Layer mask of agent doesn’t intersect any mesh | Add the mesh to the agent’s layer or change the mask |
| All agents ignore a link | Link’s layer mask not set | Set a non‑empty layer mask on the link |

---

## 7.  References

* [Navigation2D](https://docs.godotengine.org/en/stable/classes/class_navigation2d.html)
* [NavigationServer2D](https://docs.godotengine.org/en/stable/classes/class_navigationserver2d.html)
* [NavigationAgent2D](https://docs.godotengine.org/en/stable/classes/class_navigationagent2d.html)
* [NavigationLink2D](https://docs.godotengine.org/en/stable/classes/class_navigationlink2d.html)

> **Further reading** – see the “Navigation debug tools” page for visualizing layers.