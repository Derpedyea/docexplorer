**InstancePlaceholder**  
*Godot Engine 4.x class reference*  

---

### Inherits  
`Node`

---

### Description  
`InstancePlaceholder` is a special node used by the editor to represent the root node of a `PackedScene` when the **Load As Placeholder** option is enabled. In this mode, the actual scene instance is replaced by a lightweight placeholder node, allowing the editor to load scenes more quickly and reducing memory usage for large projects.

---

#### When to use  
* **Editor preview** – When you want to instantiate a scene in a parent but don't need its full functionality during edit time.  
* **Memory optimisation** – For large scenes that are rarely interacted with in the editor.

---

#### Usage example  
```gdscript
# Assume `Enemy.tscn` is a PackedScene
var enemy_placeholder = preload("res://Enemy.tscn").instance() as InstancePlaceholder
add_child(enemy_placeholder)
```

When running the game, the placeholder will be replaced by the actual instance of the scene.

---

#### Related classes  
* [`PackedScene`](https://docs.godotengine.org/en/stable/classes/class_packedscene.html) – The resource that holds the scene to be instanced.  
* [`Node`](https://docs.godotengine.org/en/stable/classes/class_node.html) – Base class for all scene nodes.

---

**Note:** For detailed API references (methods, signals, properties), consult the full class page in the Godot documentation.