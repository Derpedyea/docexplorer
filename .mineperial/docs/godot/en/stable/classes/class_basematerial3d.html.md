**BaseMaterial3D** – Godot Engine (stable) documentation

> *Abstract base class for defining the 3‑D rendering properties of meshes.*

---

### Inheritance hierarchy
```
Object
 └── RefCounted
      └── Resource
           └── Material
                └── BaseMaterial3D
```

---

#### Description
`BaseMaterial3D` provides a common interface and set of properties that all 3‑D materials in Godot use.  Concrete subclasses such as `StandardMaterial3D` and `ORMMaterial3D` extend this base class to expose additional shading, texture, and rendering options.

---

#### Key Sections (in the official documentation)

| Section | What you’ll find |
|---------|------------------|
| **Properties** | All material settings (e.g., albedo color, metallic, roughness, etc.) |
| **Methods** | Common functions for manipulating material state (e.g., `set_shader_parameter()`, `get_shader_parameter()`) |
| **Usage Examples** | Sample GDScript/C++ snippets showing how to create and apply a material to a mesh |

> *For the full list of properties, methods, and detailed usage, refer to the official class reference page in the Godot documentation.*