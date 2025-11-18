**Fog shaders** – Godot Engine documentation  
================================================

Fog shaders allow you to control how fog is added to or subtracted from a scene inside a given volume. They are used in conjunction with *FogVolumes* (in Godot 4) and volumetric fog. A fog shader contains only one entry point – the `process_fog()` function – which is called for every fragment that passes through a fog volume.

> **Note**  
> The fog shader syntax is very similar to other Godot shader types, but it has a different set of built‑in uniforms and a dedicated `process_fog()` function instead of `fragment()`.

---

## 1. Shader skeleton

```glsl
shader_type fog;

// Called once per fragment that is inside a fog volume.
void process_fog(in vec3 world_pos, in float density, inout vec4 color) {
    // Your fog logic here.
}
```

* `world_pos` – World‑space position of the fragment.  
* `density` – Current fog density (derived from the volume’s parameters and the engine’s global fog settings).  
* `color` – The fragment color that will be blended with the fog. Modify it to add or remove fog effects.

The function is the only one that can be defined in a fog shader; any attempt to use `vertex()`, `fragment()`, or `light()` will be ignored.

---

## 2. Common usage patterns

### 2.1. Simple linear density

```glsl
void process_fog(in vec3 world_pos, in float density, inout vec4 color) {
    // Compute a linear fade from the camera to the far edge of the volume.
    float fog_factor = density * 0.1;          // Adjust the multiplier to change fog strength.
    color.rgb = mix(color.rgb, vec3(0.7, 0.8, 1.0), fog_factor);
}
```

### 2.2. Adding a color tint

```glsl
void process_fog(in vec3 world_pos, in float density, inout vec4 color) {
    vec3 fog_color = vec3(0.5, 0.6, 0.7);   // Custom tint
    float fog_factor = density * 0.08;
    color.rgb = mix(color.rgb, fog_color, fog_factor);
}
```

### 2.3. Subtracting fog (clear area)

```glsl
void process_fog(in vec3 world_pos, in float density, inout vec4 color) {
    // Reduce the density in a spherical region inside the volume.
    float dist = length(world_pos - vec3(0.0, 2.0, 0.0));
    float factor = smoothstep(0.0, 3.0, dist);
    color.rgb = mix(color.rgb, vec3(1.0), factor);
}
```

---

## 3. Built‑in uniforms and constants

| Built‑in | Description |
|----------|-------------|
| `world_pos` | World‑space position of the current fragment (available as input to `process_fog`). |
| `camera_pos` | World‑space position of the camera. |
| `fog_color` | Global fog color set in the engine or in a FogVolume. |
| `fog_density` | Global fog density. |
| `volume_position`, `volume_scale` | Transform of the containing fog volume (position and scale). |
| `volume_id` | Identifier of the fog volume – useful if you have multiple volumes. |

---

## 4. Tips & best practices

1. **Keep fog shaders simple** – they are executed per fragment and can become a bottleneck if too complex.  
2. **Use `mix()`** – the standard linear interpolation works well for blending the fog color with the fragment.  
3. **Combine multiple fog volumes** – each volume can have its own shader; the final color is the result of all applied fog shaders in the order of rendering.  
4. **Testing** – place a `Camera3D` inside a `FogVolume` and experiment with the `density` value to see real‑time effects.  

---

## 5. Example – “Green Mist” Fog Volume

Create a new `FogVolume` in the editor, set its **Color** to a light green, **Density** to `0.5`, then attach a shader like:

```glsl
shader_type fog;
void process_fog(in vec3 world_pos, in float density, inout vec4 color) {
    // Add a gentle green tint.
    float f = clamp(density * 0.02, 0.0, 1.0);
    color.rgb = mix(color.rgb, vec3(0.3, 0.7, 0.3), f);
}
```

Running the scene will show a subtle green mist that fades with distance.  

---

## 6. Resources

* [Godot Docs – FogVolume](https://docs.godotengine.org/en/stable/classes/class_fogvolume.html) – properties and editor interface.  
* [Godot Docs – Volumetric Fog](https://docs.godotengine.org/en/stable/tutorials/rendering/volumetric_fog.html) – overview of the engine‑level fog system.  

Feel free to tweak the shader code to fit the atmosphere of your level, or combine it with additional effects like light scattering or custom color gradients. Happy shading!