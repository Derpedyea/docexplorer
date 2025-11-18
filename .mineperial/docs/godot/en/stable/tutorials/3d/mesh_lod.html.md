The page is a **technical documentation** page (a tutorial on “Mesh level of detail (LOD)” for Godot Engine), so we convert it to Markdown.

---

# Mesh level of detail (LOD)

Level of detail (LOD) is one of the most important ways to optimize rendering performance in a 3D project, along with occlusion culling. On this page you’ll learn:

* How mesh LOD can improve your game’s performance  
* The differences between *static* and *dynamic* LOD  
* How to use Godot’s built‑in tools to create and manage LOD meshes  
* Best‑practice workflow for working with LODs

---

## What is LOD?

A mesh LOD system swaps a high‑polygon model with a lower‑polygon one when the object is far away from the camera, reducing the number of triangles that need to be rendered.

### Key terms

| Term | Meaning |
|------|---------|
| **High‑detail mesh** | The original model with full geometry. |
| **Low‑detail mesh** | Simplified version of the model, fewer polygons. |
| **LOD threshold** | Distance from the camera at which the mesh switch occurs. |

---

## Using LOD in Godot

Godot supports LOD via the **MeshInstance3D** node and the **LOD** property. Below is a quick guide.

### 1. Prepare your meshes

1. **Export** a high‑detail mesh (e.g. `character_high.obj`).  
2. Use a mesh‑simplification tool (Blender, MeshLab, etc.) to create lower‑detail versions (`character_mid.obj`, `character_low.obj`).  
3. Import all meshes into Godot.

### 2. Create a `MeshInstance3D`

```gdscript
var high_mesh : Mesh = preload("res://character_high.obj")
var mid_mesh : Mesh  = preload("res://character_mid.obj")
var low_mesh : Mesh  = preload("res://character_low.obj")

var instance : MeshInstance3D = MeshInstance3D.new()
instance.mesh = high_mesh
add_child(instance)
```

### 3. Configure the LOD ranges

You can set the LOD ranges manually:

```gdscript
instance.lod_count = 3
instance.lod_distances = [10.0, 30.0]  # distances where the mesh switches
instance.lod_meshes = [mid_mesh, low_mesh]
```

> **Note:**  
> * `lod_distances` is a list of distances at which the mesh switches to the next LOD level.  
> * The first distance corresponds to the switch from high to mid, the second from mid to low.

### 4. Using the editor

1. Select the `MeshInstance3D`.  
2. In the Inspector, under **LOD**, you can add LOD levels and assign meshes.  
3. Adjust the *Distance* sliders to see the effect in the 3D viewport.

---

## Practical example

Suppose you have a forest scene with many trees. Using LOD can reduce draw calls dramatically.

```gdscript
# Tree.gd
extends MeshInstance3D

func _ready():
    # Load meshes
    high_mesh = preload("res://tree_high.obj")
    mid_mesh  = preload("res://tree_mid.obj")
    low_mesh  = preload("res://tree_low.obj")

    # Set LOD
    mesh = high_mesh
    lod_count = 3
    lod_distances = [20.0, 60.0]
    lod_meshes = [mid_mesh, low_mesh]
```

Add multiple instances of `Tree.tscn` to your scene – Godot will automatically switch meshes based on the camera distance.

---

## Performance considerations

| Scenario | Recommendation |
|----------|----------------|
| **Static objects** | Use pre‑baked LOD meshes; set the `lod_use_cache` flag to `true`. |
| **Dynamic objects** | Compute LOD at runtime; consider `lod_auto_use` for automatic distance calculation. |
| **Very small objects** | Disable LOD; the cost of switching may outweigh benefits. |

---

## Next steps

* Check the **Visibility ranges (HLOD)** guide for hierarchical LOD setups.  
* Experiment with *occlusion culling* in addition to LOD for further optimizations.

---

**Related pages**  
- [Using MultiMeshInstance3D](/tutorials/3d/using_multi_mesh_instance.html)  
- [Visibility ranges (HLOD)](/tutorials/3d/visibility_ranges.html)

---