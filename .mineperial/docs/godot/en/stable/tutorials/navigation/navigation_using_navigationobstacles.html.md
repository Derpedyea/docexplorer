**Using NavigationObstacles**

> 2D and 3D versions of `NavigationObstacle` nodes are available as `NavigationObstacle2D` and `NavigationObstacle3D`. Navigation obstacles are dual‑purpose in that they can affect both the navigation mesh and agents that use it.

---

## 1. Overview

`NavigationObstacle` nodes are used to block or modify navigation paths in both 2D and 3D space.  
- **2D** – `NavigationObstacle2D`  
- **3D** – `NavigationObstacle3D`

These nodes can be added to a scene hierarchy like any other node and will automatically update the navigation mesh when the obstacle is moved, resized, or its shape changes.

---

## 2. Adding an Obstacle

1. **Create** a `NavigationObstacle2D` or `NavigationObstacle3D` node.  
2. **Set** its `shape` property to a collision shape that represents the obstacle.  
3. **Configure** `radius` (for spherical obstacles) or `custom_shape`.  
4. **Toggle** `dynamic` if you want the obstacle to move at runtime and affect agents on the fly.

```gdscript
# Example for a 2D obstacle
var obstacle = NavigationObstacle2D.new()
obstacle.shape = RectangleShape2D.new()
obstacle.shape.extents = Vector2(100, 50)
obstacle.position = Vector2(200, 200)
add_child(obstacle)
```

---

## 3. Interaction with Navigation Agents

- **Static obstacles** are baked into the navigation mesh during the build process.  
- **Dynamic obstacles** can be moved or resized during gameplay; the navigation server will recompute local paths around them.

You can also set the `avoidance_layer` and `avoidance_mask` to fine‑tune which agents should consider this obstacle in their pathfinding and avoidance calculations.

```gdscript
obstacle.avoidance_layer = 1
obstacle.avoidance_mask = 1
```

---

## 4. Advanced Configuration

| Property | Description |
|----------|-------------|
| `enabled` | Disable the obstacle without removing it from the scene. |
| `radius` | For circular obstacles; ignored if a custom shape is provided. |
| `custom_shape` | Use a custom `Shape2D`/`Shape3D`. |
| `navigation_layer` | Which navigation layer the obstacle belongs to. |
| `navigation_mask` | Which layers this obstacle should affect. |
| `dynamic` | If `true`, the obstacle will be updated in real time. |

---

## 5. Common Use‑Cases

- **Static walls**: Add a `NavigationObstacle` to a wall to prevent agents from walking through.  
- **Moving platforms**: Make the obstacle dynamic to update paths when the platform moves.  
- **Dynamic obstacles**: Use them for moving enemies or objects that should be avoided by AI agents.

---

## 6. Reference

- **[NavigationObstacle2D](https://docs.godotengine.org/en/stable/classes/class_navigationobstacle2d.html)**  
- **[NavigationObstacle3D](https://docs.godotengine.org/en/stable/classes/class_navigationobstacle3d.html)**

---