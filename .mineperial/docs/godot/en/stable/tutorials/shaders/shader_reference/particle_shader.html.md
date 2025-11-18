**Particle shaders**

Particle shaders are a special type of shader that runs before the object is drawn.  
They are used for calculating material properties such as color, position, and rotation.  
They are drawn with any **CanvasItem** or **Spatial** node, but unlike regular shaders, the values they output can affect the *particle's* transform, life, and other properties.

> _In Godot, particle shaders are defined in the *Shader* resource of a **Particles** (or **CPUParticles**) node. They use a different syntax from normal shaders, with several built‑in variables and functions that give you fine control over each particle._  

## Basic structure

```
shader_type particles;

uniform vec4 emission_color : hint_color;

void vertex() {
    // Called for each particle to set its position, color, etc.
}

void fragment() {
    // Called for each pixel of a particle's mesh.
}
```

| Function | Description |
|----------|-------------|
| `vertex()` | Runs per particle; you can modify `VERTEX`, `COLOR`, `NORMAL`, etc. |
| `fragment()` | Runs per fragment of the particle mesh; usually used for final color and transparency. |

## Built‑in uniforms

| Uniform | Type | Description |
|---------|------|-------------|
| `time` | `float` | Current time in seconds. |
| `animation` | `float` | Current animation frame (0‑1). |
| `step` | `float` | Current step of a particle’s life (0‑1). |
| `life` | `float` | The lifetime of a particle. |

## Common tricks

- **Color over life** – interpolate `COLOR` using `step`:

  ```glsl
  COLOR.a = 1.0 - step;   // Fade out over life
  ```

- **Random rotation** – use `rand()` inside `vertex()`:

  ```glsl
  float angle = rand() * TAU;
  VERTEX = mat3(angle) * VERTEX;
  ```

- **Size variation** – modify `SIZE` based on `step`:

  ```glsl
  SIZE = mix(min_size, max_size, step);
  ```

## References

- [Particles node documentation](https://docs.godotengine.org/en/stable/classes/class_particles.html)
- [CanvasItem shaders](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/canvas_item_shader.html)
- [Sky shaders](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/sky_shader.html)

Feel free to experiment and combine these techniques to create compelling particle effects!