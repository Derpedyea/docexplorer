**NOTE:** The original HTML for this page was truncated in the provided snippet, so the following Markdown is an educated reconstruction of the document’s structure and key information based on the page’s title and the general content of the Godot Engine documentation. For the complete and precise details, consult the live page at <https://docs.godotengine.org/en/stable/tutorials/navigation/navigation_different_actor_locomotion.html>.

---

# Support Different Actor Locomotion

This tutorial explains how to enable **different locomotion modes** for actors—such as standing, crouching, and crawling—within Godot’s navigation system.  
The approach is similar to supporting different actor types, but it focuses on varying the **agent height and radius** rather than the overall shape.

## Overview

1. **Bake multiple navigation meshes** with distinct agent sizes.  
2. **Switch between meshes** based on the actor’s current locomotion state.  
3. **Query the appropriate navigation mesh** when computing paths.  

## 1. Map Setup

### 1.1 Create Separate Navigation Regions

- Duplicate the `NavigationRegion3D` node for each locomotion state.  
- Place each region in a different **navigation layer** so they can be toggled independently.  
  - Example: `Layer 1` for standing, `Layer 2` for crouching, `Layer 3` for crawling.

### 1.2 Bake the Meshes

```text
# In the editor, select a NavigationRegion3D
# Under the "Navigation" tab, choose the layer
# Adjust the “Agent Height” and “Agent Radius” properties
# Click “Bake” to generate the nav mesh
```

Repeat for each locomotion state with the appropriate dimensions.

## 2. Actor Configuration

### 2.1 Navigation Agent Settings

Add a `NavigationAgent3D` node to your actor and adjust its properties dynamically:

```gdscript
var agent: NavigationAgent3D = $NavigationAgent3D

func _ready():
    # Default to standing
    set_locomotion_state("stand")

func set_locomotion_state(state: String) -> void:
    match state:
        "stand":
            agent.agent_height = 1.8
            agent.agent_radius = 0.3
        "crouch":
            agent.agent_height = 1.2
            agent.agent_radius = 0.3
        "crawl":
            agent.agent_height = 0.6
            agent.agent_radius = 0.3
```

### 2.2 Switching Layers

When changing states, toggle the active navigation layer:

```gdscript
func _physics_process(delta):
    if Input.is_action_just_pressed("crouch"):
        navigation_agent.set_layer_mask(1 << 1)   # Crouch layer
    elif Input.is_action_just_pressed("crawl"):
        navigation_agent.set_layer_mask(1 << 2)   # Crawl layer
    else:
        navigation_agent.set_layer_mask(1 << 0)   # Stand layer
```

## 3. Path Querying

Use `get_navigation_path()` from the active `NavigationAgent3D`.  
Because the agent’s height and radius are updated, the engine automatically selects the correct mesh for path calculation.

```gdscript
func move_to(target: Vector3) -> void:
    agent.set_target_location(target)
    var path = agent.get_navigation_path()
    # Follow the path with a move helper or a custom algorithm
```

## 4. Practical Tips

- **Performance:** Keep the number of active navigation layers to a minimum; only enable the one required for the current state.
- **Overlap Issues:** Ensure the nav meshes of different layers overlap cleanly. A gap in the low‑height mesh can prevent a crouching actor from passing through.
- **Debugging:** Use the “Show Navigation” toggle in the editor to visualise each layer separately.

## 5. Example Project

The Godot documentation includes a **demo project** demonstrating these techniques.  
You can download it from the Godot GitHub repository or via the documentation’s “Download” button.

---

### Related Topics

- [Support Different Actor Types](../navigation_different_actor_types.html)  
- [Support Different Actor Area Access](../navigation_different_actor_area_access.html)  

---