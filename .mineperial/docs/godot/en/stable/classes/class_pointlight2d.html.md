**PointLight2D**  
===================  

> A positional 2‑D light source that casts light in a 2‑D environment.  
> Its shape is defined by a (usually grayscale) texture.

### Inheritance Chain
```
Object → Node → CanvasItem → Node2D → Light2D → PointLight2D
```

### Core Properties (excerpt)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `texture` | `Texture2D` | – | The texture that defines the light's shape. |
| `light_energy` | `float` | `1.0` | Intensity of the light. |
| `height` | `float` | `0.0` | Height of the light source above the 2‑D scene. |
| `shadow_enabled` | `bool` | `true` | Whether this light casts shadows. |
| `shadow_detail` | `int` | `0` | Detail level of the shadows. |
| `shadow_buffer_size` | `int` | `1024` | Size of the shadow buffer. |
| `shadow_filter` | `int` | `0` | Shadow filter type. |

> *Note:* The full list of properties, methods, and signals is available in the Godot 4.x documentation.  
> (The complete reference can be found on the official [Godot documentation site](https://docs.godotengine.org/en/stable/classes/class_pointlight2d.html).)*