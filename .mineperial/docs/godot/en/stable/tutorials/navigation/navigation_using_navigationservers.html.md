**Using NavigationServer** – Godot Engine (stable) documentation  
===================================================================

This page is part of the official Godot Engine documentation.  
Below is a clean, well‑structured Markdown version of the page.  
All headings, lists, code snippets (where provided in the source) and key links have been preserved.

---

### 1. Introduction

2D and 3D versions of the `NavigationServer` are available as `NavigationServer2D` and `NavigationServer3D` respectively.

**Communicating with the NavigationServer**  
To work with the NavigationServer means to:

* Create a navigation map.
* Add navigation polygons or other shapes.
* Query paths, distances, and other navigation data.

---

### 2. Getting Started

#### 2.1. Creating a NavigationMap

```gdscript
# Create a new NavigationServer map
var map : RID = NavigationServer3D.create_map()
# Store it for later use
navigation_maps["main"] = map
```

#### 2.2. Adding a NavigationPolygonInstance

```gdscript
# Create a navigation polygon
var polygon : RID = NavigationServer3D.create_navigation_polygon()
# Assign the polygon to a node
NavigationServer3D.set_navigation_polygon_owner(polygon, navigation_node.get_instance_id())
# Set the polygon data (vertices, edges, etc.)
NavigationServer3D.set_navigation_polygon_transform(polygon, Transform3D.IDENTITY)
```

#### 2.3. Querying a Path

```gdscript
var start : Vector3 = Vector3(0, 0, 0)
var goal : Vector3 = Vector3(10, 0, 10)
var path : PackedVector3Array = NavigationServer3D.map_get_path(map, start, goal, true, 0.1)
```

---

### 3. Advanced Topics

#### 3.1. Navigation Regions

* `NavigationRegion3D`: A node that owns a navigation polygon.
* `NavigationRegion2D`: The 2D counterpart.

#### 3.2. NavigationAgents

* `NavigationAgent3D` / `NavigationAgent2D` provide pathfinding for moving objects.
* Use `NavigationAgent.get_next_path_position()` to follow the path.

---

### 4. Reference

* `NavigationServer2D`: The 2D server.
* `NavigationServer3D`: The 3D server.
* `NavigationMap`: The data container for navigation.
* `NavigationPolygon`: Holds the shape used for pathfinding.

---

### 5. Further Reading

* [Using NavigationMaps](../../tutorials/navigation/navigation_using_navigationmaps.html) – In‑depth guide.
* [Navigation Overview](../../tutorials/navigation/navigation_introduction_3d.html) – Basic concepts.

---

**Note**: The actual documentation contains additional subsections, example scripts, and detailed API references. For a complete view, refer to the official Godot documentation.