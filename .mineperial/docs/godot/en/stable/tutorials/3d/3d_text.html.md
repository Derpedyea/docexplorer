**3D text**  
*(Godot Engine – stable documentation)*

---

## Introduction

In a project you may need to create text that is part of the 3‑D scene itself rather than just a UI element.  
Godot offers two ways to do this:

* **Label3D** – a node that displays a text label in 3‑D space.
* **TextMesh** – a mesh that can be used with a `MeshInstance3D` (or its descendants) to render text as 3‑D geometry.

---

## 1. Using `Label3D`

`Label3D` is a node that automatically updates a 3‑D text surface when its `text` property changes.  

### 1.1 Adding a Label3D node

```
1️⃣  Add a Node3D (or any spatial node) to your scene.
2️⃣  Add a **Label3D** child.
3️⃣  Set the **Text** property in the Inspector, or change it via code:
```gdscript
var label = $Label3D
label.text = "Hello 3D!"
```

### 1.2 Customising appearance

| Property | What it does |
|----------|--------------|
| **Alignment** | `Left`, `Center` or `Right` alignment of the text. |
| **Font** | Set a custom `DynamicFont` (or `BitmapFont`) for style. |
| **Shaded** | Enable per‑pixel shading (requires a `SpatialMaterial` with a normal map). |
| **Use 3‑D Font** | Toggle to use a 3‑D font that contains extrusion data. |

You can also use the `Material` property to give the text a material with a custom shader.

---

## 2. Using `TextMesh`

`TextMesh` is a procedural mesh that can be used wherever a `Mesh` is accepted.  
This is useful when you need true 3‑D geometry (e.g., for physics, custom shading or low‑poly text).

### 2.1 Creating a TextMesh

```gdscript
var text_mesh = TextMesh.new()
text_mesh.text = "Hello 3D"
text_mesh.font = preload("res://myfont.tres")   # any Font resource
text_mesh.width = 400
text_mesh.height = 200
```

Attach it to a `MeshInstance3D`:

```gdscript
var instance = MeshInstance3D.new()
instance.mesh = text_mesh
add_child(instance)
```

### 2.2 Common properties

| Property | Description |
|----------|-------------|
| `text` | The string to display. |
| `font` | Font resource used for the mesh. |
| `width` / `height` | Size of the bounding rectangle. |
| `outline_thickness` | Thickness of the font outline. |
| `extrude` | Amount of extrusion for a 3‑D effect. |

### 2.3 Example: A simple 3‑D label

```gdscript
extends Spatial

func _ready():
    var mesh_instance = MeshInstance3D.new()
    var text_mesh = TextMesh.new()
    text_mesh.text = "Hello 3D world!"
    text_mesh.font = preload("res://fonts/Roboto.tres")
    text_mesh.width = 600
    text_mesh.height = 200
    text_mesh.extrude = 10
    mesh_instance.mesh = text_mesh
    mesh_instance.translation = Vector3(0, 1, 0)
    add_child(mesh_instance)
```

---

## 3. Choosing between Label3D and TextMesh

| Feature | Label3D | TextMesh |
|---------|---------|----------|
| **Dynamic update** | Yes (fast, ideal for HUD, score) | Yes (but rebuilding mesh can be expensive) |
| **Material flexibility** | Uses a standard material; shaders can be applied | Full control – any shader can be used on the mesh |
| **Physics interactions** | Cannot be collided with directly | Can be used as a collision shape if combined with a `CollisionShape3D` |
| **Performance** | Lightweight | Can be heavier depending on text size and extrusion |

For most cases where the text is just a label in the world, `Label3D` is simpler and more efficient.  
If you need the text to have a solid 3‑D form (e.g., a sign or a billboard with depth), `TextMesh` is the way to go.

---

## 4. Common pitfalls

* **Font size** – `Label3D` and `TextMesh` scale independently. Make sure to adjust the `width`/`height` or `scale` so text looks correct in the scene.
* **Material transparency** – If your font has a transparent background, set the material to blend or use a `CanvasItemMaterial` with the `Transparency` mode.
* **Performance on low‑end hardware** – Avoid using high extrusion values or extremely large fonts when running on mobile or VR devices.

---

## 5. Further reading

* [Label3D class reference](https://docs.godotengine.org/en/stable/classes/class_label3d.html)
* [TextMesh class reference](https://docs.godotengine.org/en/stable/classes/class_textmesh.html)
* [Font resource guide](https://docs.godotengine.org/en/stable/tutorials/2d/fonts.html)

---