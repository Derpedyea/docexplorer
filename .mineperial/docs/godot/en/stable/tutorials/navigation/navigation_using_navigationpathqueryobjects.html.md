**Using NavigationPathQueryObjects**

*(This page is a tutorial from the official Godot Engine documentation. It explains how to use `NavigationPathQueryObjects` with `NavigationServer.query_path()` to obtain a customized navigation path that can include optional metadata.)*

---

## 1. Overview

`NavigationPathQueryObjects` allow you to customize path queries in the NavigationServer. By providing a set of objects and query parameters, you can control how the navigation algorithm calculates the path and what additional data (e.g., collision shapes, navigation meshes, or custom data) is returned.

---

## 2. Basic Setup

### 2.1 Create a NavigationServer instance

```gdscript
var nav_server = NavigationServer3D.new()
nav_server.init()
```

### 2.2 Prepare a `NavigationPathQueryObject`

```gdscript
var query = NavigationPathQueryObject3D.new()
query.set_origin(origin)
query.set_destination(destination)
query.set_pathfinding_algorithm(NavigationServer3D.PATHFINDING_ASTAR)
```

---

## 3. Adding Query Objects

You can attach objects to influence the query:

```gdscript
var obstacles = [obstacle1, obstacle2] # Nodes or physics bodies
query.set_objects(obstacles)
```

---

## 4. Querying the Path

```gdscript
var result = nav_server.query_path(query)
if result.is_success():
    var path = result.get_path()
    var metadata = result.get_metadata()
    # Use path and metadata as needed
else:
    push_warning("Path query failed: %s" % result.get_error_message())
```

---

## 5. Customizing the Query

### 5.1 Using `NavigationPathQueryParameters`

```gdscript
var params = NavigationPathQueryParameters.new()
params.set_ignore_objects(true)     # Skip collision objects
params.set_avoidance(true)         # Avoid dynamic bodies
query.set_parameters(params)
```

### 5.2 Accessing Metadata

```gdscript
for segment in metadata:
    var cost = segment["cost"]
    var direction = segment["direction"]
    # Process the segment data
```

---

## 6. Advanced Tips

- **Performance**: Cache `NavigationPathQueryObject` instances if you perform frequent path queries.
- **Dynamic Updates**: Re‑query the path when obstacles move or the destination changes.
- **Custom Data**: Attach user data to path segments via the metadata callback.

---

## 7. Example: Moving a KinematicBody

```gdscript
extends CharacterBody3D

@export var target : NodePath
@onready var target_node = get_node(target)

var nav_server : NavigationServer3D
var query_obj : NavigationPathQueryObject3D

func _ready():
    nav_server = NavigationServer3D.new()
    query_obj = NavigationPathQueryObject3D.new()

func _physics_process(delta):
    query_obj.set_origin(global_transform.origin)
    query_obj.set_destination(target_node.global_transform.origin)
    var res = nav_server.query_path(query_obj)
    if res.is_success():
        var path = res.get_path()
        move_and_slide(path[0], Vector3.UP)
```

---

## 8. References

- [NavigationServer](https://docs.godotengine.org/en/stable/classes/class_navigationserver3d.html)
- [NavigationPathQueryObject](https://docs.godotengine.org/en/stable/classes/class_navigationpathqueryobject3d.html)
- [NavigationPathQueryParameters](https://docs.godotengine.org/en/stable/classes/class_navigationpathqueryparameters.html)

---