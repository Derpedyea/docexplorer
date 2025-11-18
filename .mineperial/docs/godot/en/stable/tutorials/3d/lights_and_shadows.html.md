# 3D lights and shadows

> **Introduction** – Light sources emit light that mixes with the materials and produces a visible result. Light can come from several types of sources in a scene: from the material itself, in the form of **emission** or **lightmap baking**, or from a dedicated **light node**. This guide walks you through the available 3‑D light types, how to control them, and how to make the most of shadows in Godot 3. 

## Light sources

Godot provides three main 3‑D light nodes, each suited for a different use‑case:

| Light type | Typical use | Key properties |
|------------|-------------|----------------|
| **OmniLight** | Point light, e.g. lanterns | `energy`, `range`, `attenuation`, `shadow_enabled` |
| **SpotLight** | Spotlights, directional flashlights | `energy`, `range`, `spot_angle`, `spot_attenuation`, `shadow_enabled` |
| **DirectionalLight** | Sunlight, directional illumination | `energy`, `shadow_enabled`, `shadow_splits`, `shadow_buffer_size` |

Each light type can be added to a scene like any other node.  When a light is enabled, its **shadows** are rendered automatically unless you disable them for performance or artistic reasons.

## Configuring lights

### General parameters

- **Energy** – Brightness multiplier.
- **Color** – Base color of the light.
- **Range** – How far the light reaches (point and spot lights only).
- **Attenuation** – How quickly light falls off with distance.
- **Shadow** – Toggle to enable or disable shadows.

### Shadows

Shadows can be fine‑tuned for quality and performance.

| Parameter | Description |
|-----------|-------------|
| **Shadow Enabled** | Boolean flag. |
| **Shadow Bias** | Small offset to avoid shadow acne. |
| **Shadow Normal Bias** | Bias that accounts for surface normals. |
| **Shadow Split Size / Split 0,1,2,3** | For directional lights using cascaded shadows. |
| **Shadow Buffer Size** | Size of the depth buffer (higher = better quality). |
| **Shadow Filter** | Type of filter (PCF, PCSS, etc.). |
| **Shadow Edge Blur** | Controls softness of the shadow edges. |

**Tip:** For a *sun* look, use a `DirectionalLight` with `Shadow Enabled` and a high `Shadow Buffer Size`.  
**Tip:** For small point lights, enable `Shadow Enabled` but keep the `Range` short to avoid rendering unnecessary shadow maps.

## Practical use cases

### Adding a light

1. **Select** the node you want to illuminate.
2. In the **Inspector**, click **Add Node** → **Light** → choose the desired light type.
3. Adjust the **Transform** to position the light.
4. Enable **Shadows** if needed and tweak the **shadow parameters**.

### Baking lightmaps

If you have static geometry and want high‑quality lighting without runtime overhead:

1. Create a **LightmapGI** node in the scene.
2. Attach a **MeshInstance** with `Static` flag set.
3. Bake the lightmap via **Project → Export** or the editor's **Bake Light** button.

### Dynamic lighting

For moving light sources (e.g., a flashlight), use a **SpotLight** or **OmniLight**:

- **Enable `Shadow Enabled`** for realism.
- **Decrease `Range`** to limit the shadow map’s size.
- **Use a low `Shadow Buffer Size`** for performance if the light moves often.

## Performance considerations

- **Shadow map resolution** (`Shadow Buffer Size`) has a direct impact on GPU usage.
- Cascaded shadows for `DirectionalLight` can be expensive; adjust **Split** counts.
- Use **Lightmap GI** for large static scenes to free up runtime light processing.
- Disable `Shadow Enabled` on lights that don't need them.

## Summary

- **OmniLight, SpotLight, DirectionalLight** cover most lighting needs.
- **Shadows** can be enabled/disabled and tuned per light.
- **LightmapGI** offers static lighting with no runtime cost.
- Balance quality and performance by adjusting the shadow settings and choosing the right light type.

Happy lighting!