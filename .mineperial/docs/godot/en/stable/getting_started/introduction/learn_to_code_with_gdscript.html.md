**Learn to code with GDScript**  
==================================

In Godot, you can write code using the GDScript and C# programming languages.  
If you are new to programming, we recommend starting with **GDScript** because it is designed to be simpler than all‑purpose languages, while still being powerful enough for complex games.

---

### Learn in your browser with the GDScript app
------------------------------------------------

Godot provides a lightweight, in‑browser GDScript playground that lets you write and run small snippets of code without creating a full project.

* Open the **GDScript app** in your browser:  
  <https://godotengine.org/interactive/gdscripttutorial>
* Paste or write your GDScript code in the editor area.
* Click **Run** to execute the script. The output appears in the console panel below.

```gdscript
# Example: Hello world
func _ready():
    print("Hello, Godot!")
```

---

### Why GDScript?

- **Syntactically concise** – similar to Python, making it approachable for beginners.  
- **Tightly integrated** with the Godot engine – node‑based signals, resource loading, and editor‑side tools work out of the box.  
- **Dynamic typing with optional hints** – you can write quick scripts without type annotations or add them for larger projects.  

```gdscript
# Using type hints (optional)
var player : KinematicBody2D

func _physics_process(delta: float) -> void:
    var velocity = Vector2.ZERO
    if Input.is_action_pressed("ui_right"):
        velocity.x += 100
    if Input.is_action_pressed("ui_left"):
        velocity.x -= 100
    player.move_and_slide(velocity)
```

---

### Getting started in a new Godot project

1. **Create a new project** in the Godot editor.  
2. **Add a new GDScript file** to a node: right‑click the node → `Attach Script`.  
3. **Write your first script** following the same syntax as above.  
4. **Run the scene** to see the script in action.

> **Tip** – Use the *Script Editor* dock for syntax highlighting, auto‑completion, and debugging tools.

---

### Further resources

- **Official GDScript reference** – <https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html>  
- **Community tutorials** – <https://godotengine.org/learn>  
- **Interactive coding exercises** – <https://godotengine.org/interactive>  

Feel free to experiment with the browser app to get a feel for GDScript before diving into full projects. Happy coding!