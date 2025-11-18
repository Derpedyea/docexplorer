# Prototyping levels with CSG

Constructive Solid Geometry (CSG) lets you combine simple primitives or custom meshes into more complex shapes directly inside the Godot editor. This tutorial walks you through using the built‑in CSG tools to prototype level geometry quickly and efficiently.

> **CSG** is a Boolean‑based modelling technique that is especially handy for level design, prototyping, and fast iteration. It works with two basic node types:
> * `CSGPrimitive` (and its subclasses like `CSGBox`, `CSGCylinder`, `CSGSphere`, etc.)
> * `CSGMesh` – a custom mesh that you can import and use in a CSG hierarchy.

---

## 1. Setting up a CSG scene

1. **Create a new Scene**  
   • Choose **Node** → **3D Scene** and name it *Level* (or something similar).  
   • In the inspector, enable **Use Editor** so that the CSG nodes are visible in the editor.

2. **Add a base CSG node**  
   *Right‑click on the root → `Add Child Node → CSGBox`* (or any primitive you want as the base).  
   Adjust the **Transform** (position, rotation, scale) to form the initial shape of your level.

3. **Add more primitives**  
   For each new shape you want to add:
   * Right‑click on the parent → `Add Child Node → CSGSphere` (or another primitive).  
   * Position, rotate, and scale it so that it intersects or touches the base shape.

4. **Choose Boolean operation**  
   Every CSG node has a **Operation** property in the Inspector:
   * **Union** – merge with the parent.  
   * **Subtract** – cut out from the parent.  
   * **Intersect** – keep only the overlapping part.  
   Experiment with different combinations to sculpt the level geometry.

---

## 2. Using `CSGMesh` for custom shapes

If a primitive doesn't match your needs, you can import a custom mesh and convert it to a CSG node:

1. **Import a mesh**  
   *Drag‑and‑drop a `.obj`, `.stl`, or `.glb` file into the FileSystem panel.*

2. **Create a CSGMesh**  
   *Right‑click on the parent → `Add Child Node → CSGMesh`* → set the **Mesh** property to the imported mesh.

3. **Adjust properties**  
   * The `Scale` and `Transform` settings are the same as for primitives.  
   * `Material` can be set to any spatial material, but keep in mind that CSG nodes use a single material for the whole shape.

4. **Boolean with other shapes**  
   Use the same **Operation** property to combine the custom mesh with other CSG nodes.

---

## 3. Tips for efficient CSG workflows

| Tip | Description |
|-----|-------------|
| **Use the editor’s grid and snapping** | Keep the CSG primitives aligned to a grid; this helps maintain clean intersections. |
| **Keep the CSG scene separate** | Create a dedicated *CSG* folder or a dedicated scene for your level prototype. |
| **Convert to a static mesh** | Once the level design is finalized, select the root CSG node and press **Mesh → Create Mesh**. This turns the CSG hierarchy into a single static `ArrayMesh` that is far more performant. |
| **Avoid deep hierarchies** | Complex CSG trees can become slow to edit. Keep the number of nested nodes to a minimum. |
| **Use `CSGNode2D` for 2‑D levels** | For 2‑D games you can use the 2‑D CSG system (`CSGRectangle`, `CSGSine`, etc.). The workflow is identical to the 3‑D version. |
| **Keep transformations in the root** | If you need to move or rotate an entire level, do it on the root node instead of adjusting each child. |

---

## 4. Exporting and using CSG data

When you’re ready to ship your level:

1. **Convert to `MeshInstance3D`**  
   * In the editor, right‑click the root CSG node → **Mesh → Create Mesh**.  
   * This generates a new `ArrayMesh` resource that replaces the original CSG tree.

2. **Use `StaticBody3D` for collision**  
   * Add a `StaticBody3D` node as a child of the new `MeshInstance3D`.  
   * Add a `CollisionShape3D` (or `CollisionPolygon3D` for 2‑D) and assign a shape that matches the exported mesh.

3. **Optimize**  
   * For large static geometry, consider baking lightmaps and using occlusion culling.  
   * If the level will be edited often, keep a copy of the original CSG scene for quick tweaks.

---

## 5. Example – building a simple room

Below is a short step‑by‑step example of how to create a box‑shaped room with a window cut out:

```text
Room (CSGBox)
│   ├─ Window (CSGSphere, Subtract)
```

1. Create a `CSGBox` with dimensions `X: 10, Y: 3, Z: 10`.  
2. Add a `CSGSphere` as a child, position it where the window should be, and set its **Operation** to *Subtract*.  
3. Adjust the sphere’s radius until the window looks right.  
4. (Optional) Add a `CSGBox` inside the first `CSGBox` and set its operation to *Subtract* to carve out a door.

---

## 6. Common pitfalls

| Issue | Fix |
|-------|-----|
| **CSG nodes are slow to edit** | Convert to a static mesh after finalizing the layout. |
| **Boolean operations don’t work as expected** | Ensure the primitives are correctly oriented and intersect; double‑check the operation order. |
| **Material disappears after conversion** | Re‑apply the material to the new `MeshInstance3D`. |
| **Importing a complex mesh produces bad results** | Simplify the mesh before importing or use a lower‑poly version. |

---

## 7. Further reading

* [Using GridMaps](../using_gridmaps.html) – for more complex level design.  
* [CSG in 2D](../csg_tools_2d.html) – the 2‑D equivalent of this tutorial.  
* [Performance tips for static geometry](../scene_organization.html) – how to keep large levels fast.

Happy prototyping!