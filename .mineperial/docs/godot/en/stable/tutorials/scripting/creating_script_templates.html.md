**Creating script templates**

Godot lets you create custom script templates that are shown in the *Script Create* dialog when you add a new script to a node.  
Templates can be useful for adding boilerplate code, comments or import statements automatically, saving time and keeping a consistent style across a project.

---

## Where templates live

- **Built‑in templates**  
  The editor ships with a small set of default templates (e.g. `GDScript`, `C#`, `GDScript (Node)`, …). They are located in the Godot installation directory under `editor/templates` and are read‑only.

- **User templates**  
  Custom templates can be added to a directory specified in **Project Settings → Editor → Script Templates**.  
  By default the directory is `<project_root>/scripts/templates/`.  
  Each template is a single text file that contains the code you want to insert.  
  The file name is used as the template name in the dialog.

---

## Syntax of a template

A template is just a normal script file, but you can use placeholders that will be replaced by the editor when the script is created.

| Placeholder | Meaning |
|-------------|---------|
| `{{SCRIPT_NAME}}` | The name of the script file (without extension) |
| `{{CLASS_NAME}}` | The name of the class defined in the script |
| `{{NODE_TYPE}}` | The type of the node to which the script is attached |
| `{{SCRIPT_PATH}}` | The relative path from the project root to the script file |

Example `my_template.gd`:

```gdscript
# my_template.gd

class_name {{CLASS_NAME}}

extends {{NODE_TYPE}}

# {{SCRIPT_NAME}} – created at {{CURRENT_DATE}}

func _ready() -> void:
    pass
```

When you create `Player.gd` and attach it to a `KinematicBody2D`, the editor will replace the placeholders:

```gdscript
# Player.gd

class_name Player

extends KinematicBody2D

# Player – created at 2025‑11‑18

func _ready() -> void:
    pass
```

---

## Adding a new template

1. **Create the template file**  
   In your project’s `scripts/templates/` directory (create it if it does not exist), add a new `.gd`, `.cs`, or any other script file.  
   The file name should be descriptive, e.g. `BaseEnemy.gd`.

2. **Use placeholders if needed**  
   Insert the placeholders listed above wherever you want dynamic values.

3. **Restart Godot (or reload the project)**  
   The editor automatically scans the template directory. The new template will appear in the *Script Create* dialog.

4. **Select it when adding a script**  
   When you add a new script to a node, choose the template from the *Template* dropdown in the dialog.

---

## Example: A reusable “Enemy” template

```gdscript
# BaseEnemy.gd

class_name BaseEnemy

extends KinematicBody2D

export (int) var health : int = 100
export (float) var speed : float = 200

func _physics_process(delta: float) -> void:
    # Default enemy movement – override in child classes
    move_and_slide(Vector2(-speed, 0))
```

Usage:

1. Copy `BaseEnemy.gd` to `<project_root>/scripts/templates/`.
2. When adding a script to a `KinematicBody2D`, pick **BaseEnemy** as the template.
3. The new script will already have the exported properties and a simple movement loop.

---

## Tips

- **Keep templates short** – They should be quick to load and maintain.  
- **Use comments** – Add a header comment block that explains the purpose of the template.  
- **Version control** – Commit your custom templates so that teammates get the same boilerplate.  
- **Rename or delete** – Templates can be renamed or removed like any other file; the dialog updates automatically.

---

### Reference

* Godot 4.2 Manual – [Script Templates](https://docs.godotengine.org/en/stable/tutorials/scripting/creating_script_templates.html)  
* Editor Settings → `Editor > Script Templates` – configure the templates folder.  

---