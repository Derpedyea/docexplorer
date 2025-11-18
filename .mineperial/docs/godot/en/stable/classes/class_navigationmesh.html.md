**NavigationMesh**  
*Experimental: This class may be changed or removed in future versions.*  

---

### Inheritance

```
Resource → RefCounted → Object → NavigationMesh
```

---

### Overview

`NavigationMesh` is a resource that defines a traversable area and obstacles for navigation in 3D space. It is used in combination with `NavigationServer3D` (or `Navigation2D` in 2D) to provide path‑finding and movement for agents.

---

### Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **navmesh** | `Aabb3D` | `Aabb3D()` | The axis‑aligned bounding box of the mesh. |
| **cell_size** | `float` | `0.5` | Size of each navigation cell. |
| **cell_height** | `float` | `0.1` | Height of each navigation cell. |
| **edge_connection_margin** | `float` | `0.1` | Distance at which edges are connected. |
| **border_size** | `int` | `32` | Extra padding around the mesh. |
| **navmesh_owner** | `Object` | `null` | Optional owner for the mesh. |
| **source_geometry_owner** | `Object` | `null` | Owner of the source geometry used to build the mesh. |
| **source_geometry_owner_id** | `int` | `0` | ID of the owner. |
| **source_geometry_data_2d** | `NavigationMeshSourceGeometryData2D` | `null` | 2D source geometry data. |
| **source_geometry_data** | `NavigationMeshSourceGeometryData` | `null` | 3D source geometry data. |
| **navmesh_layers** | `int` | `0` | Layer mask for navigation. |
| **navmesh_layer** | `int` | `0` | Single layer for navigation. |
| **navmesh_areas** | `Array` | `[]` | Custom area IDs. |
| **navmesh_layer_mask** | `int` | `0` | Layer mask for the navigation mesh. |
| **navmesh_area_mask** | `int` | `0` | Area mask for the navigation mesh. |

---

### Methods

| Method | Arguments | Return | Description |
|--------|-----------|--------|-------------|
| `clear()` |  | `void` | Clears the navigation mesh data. |
| `generate()` |  | `bool` | Generates a navigation mesh from source geometry. |
| `is_dirty()` |  | `bool` | Checks if the mesh requires regeneration. |
| `set_cell_size(size: float)` | `float` | `void` | Sets cell size. |
| `get_cell_size() -> float` |  | `float` | Returns cell size. |
| `set_cell_height(height: float)` | `float` | `void` | Sets cell height. |
| `get_cell_height() -> float` |  | `float` | Returns cell height. |
| `set_edge_connection_margin(margin: float)` | `float` | `void` | Sets edge connection margin. |
| `get_edge_connection_margin() -> float` |  | `float` | Returns edge connection margin. |
| `set_border_size(size: int)` | `int` | `void` | Sets border size. |
| `get_border_size() -> int` |  | `int` | Returns border size. |
| `set_source_geometry_owner(owner: Object)` | `Object` | `void` | Sets the owner for the source geometry. |
| `get_source_geometry_owner() -> Object` |  | `Object` | Returns the source geometry owner. |
| `set_source_geometry_owner_id(id: int)` | `int` | `void` | Sets the owner ID. |
| `get_source_geometry_owner_id() -> int` |  | `int` | Returns the owner ID. |
| `set_source_geometry_data_2d(data: NavigationMeshSourceGeometryData2D)` | `NavigationMeshSourceGeometryData2D` | `void` | Sets 2D source geometry data. |
| `get_source_geometry_data_2d() -> NavigationMeshSourceGeometryData2D` |  | `NavigationMeshSourceGeometryData2D` | Returns 2D source geometry data. |
| `set_source_geometry_data(data: NavigationMeshSourceGeometryData)` | `NavigationMeshSourceGeometryData` | `void` | Sets 3D source geometry data. |
| `get_source_geometry_data() -> NavigationMeshSourceGeometryData` |  | `NavigationMeshSourceGeometryData` | Returns 3D source geometry data. |
| `get_aabb() -> Aabb3D` |  | `Aabb3D` | Returns the bounding box of the mesh. |
| `set_navigation_layers(layers: int)` | `int` | `void` | Sets the navigation layers. |
| `get_navigation_layers() -> int` |  | `int` | Returns the navigation layers. |
| `set_navigation_layer(layer: int)` | `int` | `void` | Sets a single navigation layer. |
| `get_navigation_layer() -> int` |  | `int` | Returns the navigation layer. |
| `set_navigation_areas(areas: Array)` | `Array` | `void` | Sets navigation areas. |
| `get_navigation_areas() -> Array` |  | `Array` | Returns navigation areas. |
| `set_navigation_layer_mask(mask: int)` | `int` | `void` | Sets navigation layer mask. |
| `get_navigation_layer_mask() -> int` |  | `int` | Returns navigation layer mask. |
| `set_navigation_area_mask(mask: int)` | `int` | `void` | Sets navigation area mask. |
| `get_navigation_area_mask() -> int` |  | `int` | Returns navigation area mask. |

*(Additional helper methods for exporting/importing, building, and manipulating the navigation mesh are also available.)*

---

### Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `mesh_changed()` |  | Emitted when the navigation mesh geometry changes. |

---

### Example Usage

```gdscript
var nav_mesh = NavigationMesh.new()
nav_mesh.set_cell_size(0.2)
nav_mesh.set_cell_height(0.1)
nav_mesh.generate()
```

---

### Further Reading

* [NavigationServer3D](https://docs.godotengine.org/en/stable/classes/class_navigationserver3d.html) – How to use this resource with the server.  
* [NavigationMeshSourceGeometryData](https://docs.godotengine.org/en/stable/classes/class_navigationmeshsourcegeometrydata.html) – Details on source geometry.  
* [NavigationMeshSourceGeometryData2D](https://docs.godotengine.org/en/stable/classes/class_navigationmeshsourcegeometrydata2d.html) – 2D variant.

---