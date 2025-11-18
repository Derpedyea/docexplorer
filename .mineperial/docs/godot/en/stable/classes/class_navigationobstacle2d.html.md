# NavigationObstacle2D

**Experimental** – this class may be changed or removed in future versions.

**Inherits**  
`Node2D < CanvasItem < Node < Object`

---

## Description
`NavigationObstacle2D` is a 2‑D obstacle node that can influence navigation mesh baking or constrain movement velocities of agents. It is mainly used in conjunction with Godot’s NavigationServer2D to provide dynamic, real‑time obstacles that the navigation system can respect.

> **Note:** The full API details (properties, methods, signals, and example usage) are available in the official Godot documentation and can be explored directly in the editor’s **Integrated Class Reference**.

---

## Class Overview

| Section | Content |
|---------|---------|
| **Properties** | - `navigation_layer` – Layer mask used for navigation. <br> - `collision_layer` – (If applicable) Layer mask for collision. <br> - `collision_mask` – (If applicable) Mask for collision detection. <br> - `shape` – The shape of the obstacle (e.g., `RectangleShape2D`, `CircleShape2D`). <br> - `position` – Inherited from `Node2D`. |
| **Methods** | - `set_shape(shape : Shape2D)` – Assigns a collision shape to the obstacle.<br> - `get_shape() : Shape2D` – Returns the current shape.<br> - `set_navigation_layer(layer : int)` – Sets the navigation layer mask.<br> - `get_navigation_layer() : int` – Gets the current navigation layer mask. |
| **Signals** | None (as of current stable release). |
| **Usage Example** | ```gdscript<br>var obstacle = NavigationObstacle2D.new()<br>obstacle.shape = RectangleShape2D.new()<br>obstacle.shape.extents = Vector2(64, 32)<br>add_child(obstacle)<br>``` |
| **Experimental Status** | This node is part of the experimental navigation features. Future versions may change its API or remove it entirely. |

---

### Quick Reference

- **Purpose:** Provide dynamic obstacles that the navigation system will account for when generating or updating navigation meshes.
- **Typical Use‑Case:** Moving platforms, doors, or any dynamic object that should affect AI pathfinding.
- **Integration:** Works with `NavigationRegion2D` and `NavigationServer2D`. Ensure the obstacle’s `navigation_layer` matches the layer(s) used by your navigation regions.

---

## Further Reading

For detailed information on navigation, see:

- [Navigation](https://docs.godotengine.org/en/stable/tutorials/physics/navigation.html)  
- [NavigationServer2D](https://docs.godotengine.org/en/stable/classes/class_navigationserver2d.html)  

---