**Resources – Godot Engine**  
*(Documentation for the stable Godot release)*  

---

## 1.  What is a Resource?

A *Resource* is any data object that can be saved to disk and loaded back by the engine.  
Unlike a `Node`, a Resource has no position in the scene tree – it’s purely data.  
Typical resources include textures, sounds, fonts, materials, animation curves, and **PackedScenes**.

### 1.1  Key characteristics

| Feature | Description |
|---------|-------------|
| **Serializable** | Resources can be written to or read from files in Godot’s `.tres`/`.res` format (or custom formats). |
| **Shared** | Two or more scenes can reference the same instance of a Resource, sharing its data. |
| **Reference‑counted** | Godot manages a Resource’s lifetime automatically. When nothing references it, it is freed. |
| **Type‑specific** | Each Resource type knows how to load, export, and edit its own data. |

---

## 2.  Built‑in Resource Types

The engine ships with dozens of Resource subclasses.  The most common ones are:

| Resource | Typical use |
|----------|-------------|
| **Texture / ImageTexture** | 2D sprites, UI elements |
| **AudioStream / AudioStreamSample** | Background music, sound effects |
| **Font / DynamicFont** | Text rendering |
| **Material / ShaderMaterial** | 3D appearance |
| **AnimationPlayer / Animation** | Play‑back of key‑framed data |
| **AudioStreamPlayer** | (Node) – not a Resource, but usually paired with an `AudioStream` |
| **PackedScene** | An entire scene that can be instanced at run‑time |

---

## 3.  Loading a Resource

You can load a Resource either **dynamically** at run‑time or **pre‑load** it in the editor.

### 3.1  Dynamic loading

```gdscript
# Loads the resource at the given path when the script runs
var texture = load("res://assets/character.png")
```

The `load()` function returns a `Resource` instance; you can cast it to a concrete type if needed:

```gdscript
var sprite_texture = load("res://assets/character.png") as Texture
```

### 3.2  Pre‑loading

Pre‑loading keeps the resource in memory before the scene is ready.  
It’s especially useful for heavy assets.

```gdscript
const PLAYER_SPRITE := preload("res://assets/character.png")
```

*Tip:* Use `preload()` for assets that are needed immediately when a scene or node is created; use `load()` for optional or late‑loaded content.

---

## 4.  Working with **PackedScene** Resources

A `PackedScene` is the Resource equivalent of a Node hierarchy.  
You can save a scene as a `.tscn` file and load/instance it in code:

```gdscript
# Load a scene file
var enemy_scene = load("res://scenes/Enemy.tscn") as PackedScene

# Instantiate it
var enemy = enemy_scene.instantiate()
get_tree().current_scene.add_child(enemy)
```

Because a `PackedScene` is a Resource, you can also reuse it in multiple places and it will be loaded only once.

---

## 5.  Editing a Resource in the Inspector

Resources that have an editor interface can be edited directly in Godot’s inspector:

1. **Create the resource**  
   - *Create* → *New Resource* → choose the type → click *Create*.  
2. **Configure its properties** – the inspector displays all exported fields.
3. **Save** – resources created in the editor are written to disk automatically.

If you want to modify an existing resource, simply select its file in the FileSystem dock and edit its properties.

---

## 6.  Custom Resources

You can extend the engine by writing your own Resource subclass.

```gdscript
# MyData.gd
extends Resource

@export var name : String
@export var value : int
```

After saving, the custom resource appears in the “New Resource” menu and can be used like any other.

---

## 7.  Reference Counting & Memory Management

Godot automatically frees a Resource when no nodes or other Resources reference it.  
If you need to keep a Resource around, call `retain()`:

```gdscript
var texture = load("res://icon.png") as Texture
texture.retain()   # keeps the texture in memory until you call release()
```

---

## 8.  Importing Resources

When you drop a file into the project folder, the import system converts it to a Resource.  
You can change import settings by selecting the file and editing its options in the inspector.

---

## 9.  Summary

* **Resources** store reusable data that can be shared across scenes.  
* Use `load()` for on‑demand loading and `preload()` for early‑load assets.  
* `PackedScene` lets you treat a whole scene as a Resource.  
* Custom Resources let you extend Godot’s data types.  
* Godot handles the lifetime of Resources automatically, but you can manage it manually with `retain()` / `release()`.

Feel free to explore the built‑in resource types in the **Help → Classes** tab or create your own to fit your project’s needs.