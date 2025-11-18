**FogVolume** – Godot Engine (stable) documentation

---

### Inheritance

```
VisualInstance3D
 └─ Node3D
     └─ Node
         └─ Object
```

### Description

A `FogVolume` is a 3D node that contributes to the default volumetric fog of the world environment. It allows you to add localized fog regions in a scene, controlling how fog density and color vary across space.  

> *The full class reference includes signals, methods, properties, and usage examples. For complete information, refer to the official Godot documentation.*  

*(Note: The detailed API list, signal definitions, and method signatures are part of the full documentation but are omitted here for brevity.)*  

---

### Quick Reference

| Category | Details |
|----------|---------|
| **Signals** | • `area_entered` <br>• `area_exited` |
| **Methods** | • `get_aabb()` <br>• `set_shape()` <br>• `set_material()` |
| **Properties** | • `enabled` (bool) <br>• `density` (float) <br>• `color` (Color) |
| **Usage** | ```gdscript<br>var fog = FogVolume.new()<br>fog.density = 0.5<br>add_child(fog)<br>``` |

---

### Documentation Sections (in the full page)

1. **Properties** – Detailed list of adjustable parameters.  
2. **Methods** – Functions for interacting with the fog volume.  
3. **Signals** – Events emitted when objects enter/exit the fog region.  
4. **Example** – Practical usage in a scene.  
5. **Notes** – Performance considerations and compatibility.  

---