**Complex emission shapes**

When a simple emission shape (sphere, box, cylinder, etc.) isn’t enough for a particle system, Godot lets you use any arbitrary 3D mesh as the source of particles.  
The rest of this guide explains how to set that up and how to control the distribution of particles on the mesh.

---

## 1. Overview

* The particle system itself is a `GPUParticles3D` or `CPUParticles3D` node.
* In its `process_material` property you can set the emission shape to **Mesh**.
* The mesh can be any `MeshInstance3D` or `Mesh` resource you want.
* Additional parameters let you control the number of emit points, the range of emission, and whether the particles should follow the mesh surface normal.

---

## 2. Setting a mesh as the emission shape

1. **Create a mesh**  
   Add a `MeshInstance3D` to your scene and assign a `Mesh` resource that defines the geometry you want particles to emit from (e.g., a custom model, a `SurfaceTool`‑generated mesh, or a pre‑built `Mesh` file).

2. **Add a particle node**  
   Add `GPUParticles3D` (or `CPUParticles3D`) as a child of the mesh node or any other node in the scene.

3. **Configure the process material**  

   ```gdscript
   # Assuming you already have a particle node `particles`:
   var mat := ParticlesMaterial.new()
   mat.emission_shape = ParticlesMaterial.EMISSION_SHAPE_MESH
   mat.emission_shape_mesh = $"../MeshInstance3D".mesh   # path to your mesh
   mat.emission_point_count = 2000                      # how many points to sample
   particles.process_material = mat
   ```

   * `emission_shape` must be set to `EMISSION_SHAPE_MESH`.
   * `emission_shape_mesh` references the `Mesh` you want to use.
   * `emission_point_count` determines how many points will be chosen on the mesh surface.
   * `emission_sphere_radius` and `emission_sphere_center` can be used if you want to clip or offset the mesh.

4. **Optional: Use `emission_shape_mode`**  
   If you want particles to be emitted only from a specific surface or region, you can set `emission_shape_mode` to `EMISSION_SHAPE_MODE_SURFACE` or `EMISSION_SHAPE_MODE_VOLUME`. This controls whether the particles are emitted from the mesh’s surface or within its volume.

---

## 3. Controlling particle distribution

* **Randomness** – Use the `distribution` property (0–1). A higher value distributes particles more uniformly across the mesh surface.
* **Normals** – If `emission_shape_normal` is `true`, particles are emitted perpendicular to the mesh surface; otherwise they are emitted with the mesh’s normal offset.
* **Random velocity** – You can set a velocity range in the `ParticlesMaterial` to give each particle a random starting speed.

Example of a simple distribution script:

```gdscript
func _ready():
    var mat = ParticlesMaterial.new()
    mat.emission_shape = ParticlesMaterial.EMISSION_SHAPE_MESH
    mat.emission_shape_mesh = $MeshInstance3D.mesh
    mat.emission_point_count = 500
    mat.emission_shape_normal = true
    mat.emission_shape_mode = ParticlesMaterial.EMISSION_SHAPE_MODE_SURFACE
    mat.gravity = Vector3.DOWN * 9.8
    $GPUParticles3D.process_material = mat
```

---

## 4. Using a `SurfaceTool` for dynamic meshes

If you want to generate a mesh at runtime (for example, a procedural shape), you can use `SurfaceTool`:

```gdscript
var st = SurfaceTool.new()
st.begin(Mesh.PRIMITIVE_TRIANGLES)
# ... add vertices, normals, indices ...
var mesh = st.commit()
$MeshInstance3D.mesh = mesh
```

Then assign this mesh to the particles’ `emission_shape_mesh` property as shown above.

---

## 5. Tips & Gotchas

| Issue | Fix |
|-------|-----|
| Particles aren’t visible | Ensure the mesh has enough surface area and that `emission_point_count` is high enough. |
| Slow performance on very complex meshes | Use a lower `emission_point_count` or simplify the mesh with a lower‑poly version. |
| Particles appear only on a single face | Set `emission_shape_mode` to `EMISSION_SHAPE_MODE_VOLUME` to sample inside the entire volume. |
| Mesh changes not reflected | Call `particles.restart()` after updating `emission_shape_mesh`. |

---

## 6. Resources

* [Particles API Reference](https://docs.godotengine.org/en/stable/classes/class_particlesmaterial.html)  
* [MeshInstance3D Node](https://docs.godotengine.org/en/stable/classes/class_meshinstance3d.html)  
* [SurfaceTool Class](https://docs.godotengine.org/en/stable/classes/class_surfacetool.html)

---

**Summary**

Using an arbitrary mesh as a particle emission shape lets you create highly realistic effects—such as smoke from a fire’s irregular surface, debris from a broken object, or sparks around a custom 3D model. By combining the built‑in `ParticlesMaterial` properties with a bit of scripting, you can control both the distribution and the physical behaviour of the particles, all while keeping the system performant and easy to tweak.