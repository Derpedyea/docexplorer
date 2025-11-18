**NavigationMeshSourceGeometryData3D**  
*Experimental: This class may be changed or removed in future versions.*

> **Inherits**  
> `Resource` → `RefCounted` → `Object`

---

### Overview  
`NavigationMeshSourceGeometryData3D` is a container for parsed source geometry data used in navigation‑mesh baking. It is part of Godot’s experimental navigation API and should be treated with caution when targeting future engine releases.

---

### Key Features

* Stores 3‑D geometry used to build navigation meshes.
* Allows manipulation of vertices, indices, and associated surface data.
* Provides helper functions to export or convert data for baking.

> **NOTE:** Since this class is experimental, API signatures and behavior may change in upcoming releases.

---

### (Example) Usage

```gdscript
var data = NavigationMeshSourceGeometryData3D.new()
# Populate `data` with geometry (vertices, indices, etc.)
# Use it with NavigationMesh baking utilities...
```

---

### Further Reading  

* [NavigationMeshSourceGeometryData2D](https://docs.godotengine.org/en/stable/classes/class_navigationmeshsourcegeometrydata2d.html) – 2‑D counterpart.  
* [NavigationPolygon](https://docs.godotengine.org/en/stable/classes/class_navigationpolygon.html) – Runtime navigation polygons.  
* [NavigationMesh](https://docs.godotengine.org/en/stable/classes/class_navigationmesh.html) – The baked mesh object.  

---