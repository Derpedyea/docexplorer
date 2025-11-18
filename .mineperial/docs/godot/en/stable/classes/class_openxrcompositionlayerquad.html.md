**OpenXRCompositionLayerQuad**  
*Godot Engine – Class Reference (stable)*

---  

### Overview  
`OpenXRCompositionLayerQuad` is an experimental class that represents an OpenXR composition layer rendered as a flat quad in a 3‑D scene.  It is part of Godot’s XR support and may be changed or removed in future releases.

**Inheritance**  
```
OpenXRCompositionLayer< Node3D< Node< Object
```

---

### Properties  

| Property | Type | Description | Default |
|----------|------|-------------|---------|
| **size** | `Vector2` | The width and height of the quad in metres. | `Vector2(1, 1)` |
| **texture** | `Texture2D` | The texture to display on the quad. | `null` |
| **layer_index** | `int` | The ordering index of this layer relative to other layers. | `0` |
| **layer_flags** | `int` | Bit flags that control layer behaviour (e.g. depth test, blend mode). | `0` |

*(Property list may change over time – refer to the latest API reference for updated details.)*

---

### Methods  

| Method | Signature | Description |
|--------|-----------|-------------|
| `set_size(size: Vector2) → void` | `set_size` | Sets the quad’s size in metres. |
| `get_size() → Vector2` | `get_size` | Returns the current quad size. |
| `set_texture(tex: Texture2D) → void` | `set_texture` | Assigns a texture to the quad. |
| `get_texture() → Texture2D` | `get_texture` | Returns the texture currently applied. |
| `set_layer_index(index: int) → void` | `set_layer_index` | Sets the rendering order of this layer. |
| `get_layer_index() → int` | `get_layer_index` | Retrieves the current layer index. |
| `set_layer_flags(flags: int) → void` | `set_layer_flags` | Configures layer behaviour via flags. |
| `get_layer_flags() → int` | `get_layer_flags` | Returns the active layer flags. |

*Additional methods may be inherited from `OpenXRCompositionLayer` and `Node3D`.*

---

### Signals  

| Signal | Parameters | Description |
|--------|------------|-------------|
| `texture_changed` | `new_texture: Texture2D` | Emitted when the `texture` property is updated. |

---

### Usage Example (GDScript)

```gdscript
extends OpenXRCompositionLayerQuad

func _ready():
    # Create a quad that is 2m wide and 1m tall.
    set_size(Vector2(2, 1))
    # Apply a texture from the project resources.
    set_texture(preload("res://textures/ui_panel.png"))
    # Place the quad at a specific position relative to the player.
    translation = Vector3(0, 1.5, -3)
```

---

### Notes

- **Experimental Status** – This class is marked experimental; its API may be refactored or removed in future Godot versions.  
- **XR Integration** – Ensure that the project is configured for OpenXR and the target device supports quads (e.g., Oculus Quest, HTC Vive).  
- **Layer Ordering** – Use `set_layer_index` to control rendering priority when multiple composition layers are present.

---  

For the most up‑to‑date information, consult the official Godot documentation or the source code in the Godot engine repository.