**Note:** The provided HTML snippet contains only the site navigation and meta information for the **PrimitiveMesh** page, but not the detailed class documentation (methods, properties, etc.).  
Below is a concise Markdown summary based on the available information.

---

# PrimitiveMesh

**Inherits:** `Mesh`

**Inherited By:**
- `BoxMesh`
- `CapsuleMesh`
- `CylinderMesh`
- `PlaneMesh`
- `PointMesh`
- `PrismMesh`
- `RibbonTrailMesh`
- `SphereMesh`
- `TextMesh`
- `TorusMesh`
- `TubeTrailMesh`

## Description

`PrimitiveMesh` is a base class for simple geometric meshes provided by Godot. It does not expose any parameters of its own but serves as a common ancestor for mesh types like boxes, spheres, planes, and more. Concrete subclasses provide specific properties (e.g., size, radius, height) and generate the appropriate vertex data for rendering.

## Typical Usage

```gdscript
# Create a BoxMesh and set its size
var box = BoxMesh.new()
box.size = Vector3(2, 2, 2)
mesh_instance.mesh = box
```

(Concrete subclasses such as `BoxMesh`, `SphereMesh`, etc., are used in place of `PrimitiveMesh`.)

---

## Reference

> The full class reference—including properties, methods, signals, and editor hints—is available on the official Godot Engine documentation website. For a complete list of members and detailed explanations, visit the [PrimitiveMesh Class Reference](https://docs.godotengine.org/en/stable/classes/class_primitivemesh.html).