**2D Meshes**  
*Godot Engine – Stable Documentation*

> **Overview**  
>  In 3D, meshes are used to display the world. In 2D, they are rare because images are used more often. Godot’s 2D engine is a pure two‑dimensional engine, so it can’t really display 3D meshes directly. Nevertheless, it does expose a small API for creating and using 2D meshes.

---

### 1. What Are 2D Meshes?

A 2D mesh in Godot is essentially a collection of 2‑D vertices, UVs, and indices that can be rendered with a `CanvasItem`‑based node. They’re most useful when you need:

- Procedurally generated geometry (e.g., terrain, particle effects, dynamic UI shapes).
- Custom collision shapes that don’t fit a sprite.
- Low‑level control over the rendered shape.

---

### 2. Creating a 2D Mesh

Below is a simple GDScript example that builds a quad mesh and assigns it to a `MeshInstance2D` node.

```gdscript
extends MeshInstance2D

func _ready():
    var mesh = Mesh.new()
    var surface_tool = SurfaceTool.new()
    surface_tool.begin(Mesh.PRIMITIVE_TRIANGLES)

    # Define four corners
    surface_tool.add_vertex(Vector2(-50, -50))
    surface_tool.add_uv(Vector2(0, 0))
    surface_tool.add_color(Color(1, 0, 0))  # Red

    surface_tool.add_vertex(Vector2(50, -50))
    surface_tool.add_uv(Vector2(1, 0))
    surface_tool.add_color(Color(0, 1, 0))  # Green

    surface_tool.add_vertex(Vector2(50, 50))
    surface_tool.add_uv(Vector2(1, 1))
    surface_tool.add_color(Color(0, 0, 1))  # Blue

    surface_tool.add_vertex(Vector2(-50, 50))
    surface_tool.add_uv(Vector2(0, 1))
    surface_tool.add_color(Color(1, 1, 0))  # Yellow

    # Define two triangles
    surface_tool.add_index(0)
    surface_tool.add_index(1)
    surface_tool.add_index(2)

    surface_tool.add_index(2)
    surface_tool.add_index(3)
    surface_tool.add_index(0)

    mesh = surface_tool.commit()
    self.mesh = mesh
```

---

### 3. Using Built‑in Nodes

Godot provides a couple of nodes that help with 2D meshes:

| Node | Purpose |
|------|---------|
| **MeshInstance2D** | Renders a `Mesh` resource in 2D space. |
| **TileMap** | Uses a `ArrayMesh`‑based tile set; good for grid‑based meshes. |

You can also use `ImmediateGeometry` to draw on the fly without storing a `Mesh` resource.

```gdscript
var ig = ImmediateGeometry.new()
add_child(ig)
ig.begin(Mesh.PRIMITIVE_TRIANGLES)
# ... add vertices
ig.end()
```

---

### 4. When to Use 2D Meshes

- **Custom UI Elements**: e.g., a dynamic health bar that needs non‑rectangular shapes.
- **Physics**: complex collision shapes that are too costly or impossible with `CollisionPolygon2D`.
- **Procedural Content**: terrain generation, weather effects, or other geometry that changes over time.

---

### 5. Performance Tips

1. **Batching** – Keep vertex counts low; combine meshes where possible.
2. **Reuse Meshes** – Cache frequently used meshes instead of recreating them each frame.
3. **Avoid Immediate Geometry in Hot Paths** – It’s handy for debugging but not for high‑frequency drawing.

---

### 6. Further Reading

- [2D Node Reference – MeshInstance2D](https://docs.godotengine.org/en/stable/classes/class_meshinstance2d.html)
- [ImmediateGeometry Documentation](https://docs.godotengine.org/en/stable/classes/class_immediategeometry.html)
- [Procedural Mesh Generation](https://docs.godotengine.org/en/stable/tutorials/2d/mesh_generation.html)

---