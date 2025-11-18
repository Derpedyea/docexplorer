**Node type customization using name suffixes**

Godot’s 3‑D importer allows you to automatically replace imported nodes with more specific
node types by appending a suffix to the node’s name.  
This is especially handy when you want to add physics bodies, navigation meshes,
or remove unused nodes without manually editing the scene in the editor.

---

## Why use name suffixes?

When a scene is imported from a 3‑D application (Blender, Maya, etc.) the nodes are
typically generic (e.g. `MeshInstance`, `Spatial`).  
By naming the objects in the source file with a recognised suffix, Godot will
convert them during the import step:

| Suffix | Resulting node | Typical use‑case |
|--------|----------------|-----------------|
| `_c` / `_Collision` | `StaticBody` + `CollisionShape` | Add a static collider |
| `_n` / `_NavMesh` | `NavigationMeshInstance` | Mark a surface as walkable |
| `_d` / `_Delete` | *removed* | Exclude from the exported scene |

(You can read the full list of supported suffixes in the [Import
configuration](../import_configuration.html) page.)

---

## Adding collision detection to objects

1. In your 3‑D application, rename every mesh you want to collide with the suffix
   `"_c"` (or `"_Collision"`).  
   e.g. `Tree_c` will be imported as a `StaticBody` with a matching
   `CollisionShape`.

2. Ensure that the mesh has a proper bounding shape (box, sphere, etc.) in the
   source application – Godot will use it to create the collision shape.

3. When you import the scene, the `StaticBody` nodes will be automatically
   generated, so you can attach a `CollisionShape` node if you need a custom shape.

```text
Tree          ← original mesh
Tree_c        ← becomes StaticBody
```

---

## Setting objects as navigation meshes

If you need a surface to be navigable for AI agents:

1. Name the mesh node with the suffix `"_n"` (or `"_NavMesh"`).  
2. On import, Godot creates a `NavigationMeshInstance` that will automatically
   be added to the scene’s navigation server.

```text
Floor          ← original mesh
Floor_n        ← becomes NavigationMeshInstance
```

---

## Deleting unwanted nodes

Sometimes a 3‑D tool exports helper nodes that you do not want in the final
scene. Append the suffix `"_d"` (or `"_Delete"`) to the node’s name.

```text
Camera          ← keep
Camera_d        ← will be removed on import
```

---

## Practical example

Suppose your Blender scene contains the following nodes:

| Blender name | Intended Godot node |
|--------------|---------------------|
| `Wall_c`     | `StaticBody` + collision |
| `Floor_n`    | `NavigationMeshInstance` |
| `Helper_d`   | *deleted* |

When you import the file into Godot, the importer will:

1. Replace `Wall_c` with a `StaticBody` that has a `CollisionShape`.  
2. Convert `Floor_n` to a navigation mesh.  
3. Exclude `Helper_d` completely from the imported scene.

You can verify the conversion in the Godot editor’s scene tree after the import
process completes.

---

## Customizing suffixes

The default suffixes are defined in the *Import configuration* section of the
documentation.  
If you prefer different names, you can edit the configuration file to match
your workflow.  This is especially useful when collaborating with artists
who use a different naming convention.

---

## Summary

* Name suffixes are a lightweight way to let Godot auto‑customise nodes during import.  
* Use `_c`/`_Collision` for colliders, `_n`/`_NavMesh` for navigation surfaces, and `_d`/`_Delete` to prune nodes.  
* All settings are adjustable in the **Import configuration** page.

Happy importing!