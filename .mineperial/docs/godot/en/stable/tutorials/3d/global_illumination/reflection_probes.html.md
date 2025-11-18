**Reflection probes**  
*Godot Engine – Documentation*  

---

## Overview

Reflection probes are a **light‑baking** technique that captures a snapshot of the surrounding environment and uses it to provide:

* **Specular reflections** – objects inside the probe’s volume reflect the captured scene.
* **Ambient lighting** – a low‑frequency contribution that gives the area a realistic light bleed.

They are especially useful for:

* Static or semi‑static scenes where dynamic global illumination would be too costly.
* Indoor areas where you need convincing surface reflections without expensive real‑time ray tracing.

---

## Adding a ReflectionProbe

1. **Create the node**  
   * In the 3‑D editor, choose **Add Node** → **World** → **ReflectionProbe** (or add it in the scene tree).
2. **Position it**  
   Place the probe roughly at the center of the area you want to affect.  
   The probe’s bounding box defines the region where the reflection and ambient data are applied.
3. **Configure the parameters** (see table below).

---

## Key Properties

| Property | Default | Meaning |
|----------|---------|---------|
| **Extents** | `Vector3(10,10,10)` | The size of the probe’s cubic volume. |
| **Origin Offset** | `Vector3(0,0,0)` | Offset of the capture point from the node’s origin. |
| **Enabled** | `true` | Whether the probe is active. |
| **Update Mode** | `Once` | *Once*, *Every Frame*, or *On Demand*. Use **On Demand** for static scenes. |
| **Cull Mask** | `All` | Which layers to capture. |
| **Reflection Blend** | `0.5` | The amount of blend with the environment. |
| **Probe Mesh** | `Automatic` | Generates a mesh for the probe’s visual representation (debug). |
| **Use 2D** | `false` | When enabled, the probe uses a 2‑D texture (e.g., for UI). |

> **Tip** – For large scenes, set `Update Mode` to **Once** or **On Demand** to avoid unnecessary capture costs.

---

## Capturing the Environment

When the probe updates (at the selected **Update Mode**), it renders the surrounding scene from its position to an internal cube map. That map is then sampled by materials inside the volume. The capture is performed on all cameras **excluding** the camera that is currently rendering.

To trigger an *On Demand* capture from code:

```gdscript
var probe = $ReflectionProbe
probe.capture()
```

---

## Using the Probe

* **Standard Material 3D** – The `Reflection` parameter automatically samples from any active probe inside its volume.
* **ORM (Occlusion‑Roughness‑Metallic) Material 3D** – Same as Standard; set `Reflection` to `Use Probe`.

If a probe doesn’t cover an object, it will fallback to the global environment’s reflection cubemap (see *Environment* → *Reflection*).

---

## Performance Considerations

| Factor | Effect | Recommendation |
|--------|--------|----------------|
| **Probe Count** | Each probe adds a cube‑map render pass. | Keep the number low; reuse probes for large open areas. |
| **Extents** | Larger volumes capture more details but cost more. | Choose the smallest volume that contains the relevant geometry. |
| **Update Mode** | Frequent updates are expensive. | Use *Once* or *On Demand* for static scenes. |
| **Bake Mode** | Off‑screen rendering uses GPU memory. | Disable *Probe Mesh* in production. |

---

## Example: Setting Up a Simple Room

1. Place a **ReflectionProbe** at the room’s center.
2. Set `Extents` to `Vector3(30, 20, 30)` to cover the entire room.
3. Ensure all interior meshes use **Standard** or **ORM** materials.
4. Disable `Use 2D` and set `Update Mode` to **Once** (or leave default).
5. Run the scene – objects inside the room now reflect the interior.

---

## Advanced Use

* **Custom Cubemap** – Instead of automatic capture, you can assign a pre‑baked cubemap to `Cubemap`.  
  Useful for static environments where you want fine control over the reflection texture.
* **Blend with Environment** – Increase `Reflection Blend` to make the probe’s reflection more pronounced.
* **Layer Mask** – Use the `Cull Mask` to exclude certain objects from being reflected, improving performance and avoiding visual artifacts.

---

## Further Reading

* [Standard Material 3D](https://docs.godotengine.org/en/stable/tutorials/3d/materials.html#standard-material-3d)  
* [Global Illumination](https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/index.html) – The broader context for reflections, lightmaps, and light probes.  
* [Faking Global Illumination](https://docs.godotengine.org/en/stable/tutorials/3d/global_illumination/faking_global_illumination.html) – Techniques to improve visual quality without full GI.  

---