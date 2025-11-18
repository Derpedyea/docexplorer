# LightmapProbe

> **Godot 4.x – LightmapProbe**  
> *Inherits:* `Node3D`

A `LightmapProbe` represents a manually‑placed probe that captures the surrounding lighting environment for dynamic objects that use **LightmapGI**.  
The probe generates a lightmap for a region of the scene and can blend its contribution with neighbouring probes to produce smooth lighting transitions.

---

## Properties

| Name | Type | Default | Description |
|------|------|---------|-------------|
| `cell_size` | `float` | `1.0` | Size of the probe’s cells in world units. |
| `cell_padding` | `float` | `0.02` | Padding added around each cell to avoid sampling artifacts. |
| `cell_margin` | `float` | `0.1` | Extra space added around the probe’s bounds to help with culling. |
| `blend_radius` | `float` | `0.0` | Radius at which this probe blends with its neighbours. |
| `blend_distance` | `float` | `0.0` | Distance over which the probe’s influence fades. |
| `blend_mode` | `BlendMode` (int) | `BlendMode::NORMAL` | How the probe blends with other probes. |
| `instant_update` | `bool` | `false` | Whether the probe should update immediately when edited. |
| `probe_cull_mask` | `int` | `0xffffffff` | Bitmask controlling which objects are included when baking this probe. |

---

## Enumerations

```gdscript
enum BlendMode {
    NORMAL,
    MULTIPLY,
    SCREEN
}
```

- **NORMAL** – Standard linear blend.  
- **MULTIPLY** – Multiply colours for darker effect.  
- **SCREEN** – Screen blend for brighter results.

---

## Methods

| Method | Return Type | Parameters | Notes |
|--------|-------------|------------|-------|
| `set_cell_size(float size)` | `void` | `size` | Sets the probe’s cell size. |
| `get_cell_size() -> float` | `float` | – | Returns current cell size. |
| `set_cell_padding(float padding)` | `void` | `padding` | Sets padding around cells. |
| `get_cell_padding() -> float` | `float` | – | Retrieves current padding. |
| `set_cell_margin(float margin)` | `void` | `margin` | Sets extra margin around probe. |
| `get_cell_margin() -> float` | `float` | – | Retrieves margin. |
| `set_blend_radius(float radius)` | `void` | `radius` | Sets blending radius. |
| `get_blend_radius() -> float` | `float` | – | Gets blending radius. |
| `set_blend_distance(float distance)` | `void` | `distance` | Sets blending distance. |
| `get_blend_distance() -> float` | `float` | – | Gets blending distance. |
| `set_blend_mode(BlendMode mode)` | `void` | `mode` | Sets the blend mode. |
| `get_blend_mode() -> BlendMode` | `int` | – | Returns current blend mode. |
| `set_instant_update(bool enabled)` | `void` | `enabled` | Enables/disables instant update. |
| `is_instant_update() -> bool` | `bool` | – | Checks if instant update is enabled. |
| `set_probe_cull_mask(int mask)` | `void` | `mask` | Sets which layers are baked by the probe. |
| `get_probe_cull_mask() -> int` | `int` | – | Retrieves the cull mask. |

> **Tip** – After changing any of these properties in the editor, you may need to re‑bake the **LightmapGI** to see the changes take effect.

---

## Signals

`LightmapProbe` does not define any custom signals. It relies on the standard `Node3D` signal set.

---

## Usage

1. **Add a LightmapProbe**  
   Drag a *LightmapProbe* node into your 3D scene and position it where you need more detailed lighting.

2. **Configure its properties**  
   In the Inspector, set `cell_size`, `blend_radius`, and other parameters to match the scale of your scene.

3. **Bake the LightmapGI**  
   In the *World* settings, enable **LightmapGI** and bake. The probe will automatically be part of the baked lighting.

4. **Blend with neighbouring probes**  
   Adjust `blend_radius` and `blend_distance` so that lighting smoothly transitions between multiple probes.

---

## Notes & Best Practices

- **Performance** – Larger cell sizes reduce baking time but may produce rougher lighting.  
- **Probe placement** – Place probes strategically; too many probes can increase baking time and memory usage.  
- **Culling** – Use `probe_cull_mask` to exclude objects that should not affect the probe’s lighting, which speeds up baking.  
- **Instant Update** – Turning on instant update can be convenient while editing, but keep it off in production to avoid unnecessary re‑bakes.

---

**See also:**  
- [LightmapGI](../class_lightmapgi.html) – the global lightmapper that uses probes.  
- [LightOccluder3D](../class_lightoccluder3d.html) – to occlude light within the probe’s region.

---