**Running code in the editor**  
*(Godot Engine – stable documentation)*  

---

## What is `@tool`?

`@tool` is a GDScript directive that makes a script run **inside the editor** as well as in the exported game.  
Add it **before the `extends` line** of a script:

```gdscript
@tool
extends Node2D
```

When the script is a part of a scene that is loaded in the editor, Godot will execute its `_ready`, `_process`, and other notification callbacks in the editor.  
This is useful for:

* Updating the visual representation of a node while editing.
* Generating or modifying resources on‑the‑fly.
* Creating custom editor plugins.

---

## Editor‑only vs. runtime code

Even if a script is marked `@tool`, you may still want to run some code only in the game.  
Use `Engine.is_editor_hint()` to guard such sections:

```gdscript
func _ready() -> void:
    if Engine.is_editor_hint():
        # This runs only in the editor
        print("Hello, editor!")
    else:
        # This runs only in the exported game
        print("Hello, game!")
```

> **Tip**  
> `is_editor_hint()` is `true` when the script is executing in the editor, and `false` when it runs in a built project.

---

## Common use‑cases

### 1. Modifying node properties while editing

```gdscript
@tool
extends MeshInstance3D

@export var color: Color = Color(1, 1, 1) : set = _set_color

func _set_color(value: Color) -> void:
    color = value
    if Engine.is_editor_hint():
        material_override.albedo_color = color
```

Changing `color` in the inspector updates the preview instantly.

### 2. Generating a custom resource in the editor

```gdscript
@tool
class_name MyResource
extends Resource

func _init() -> void:
    if Engine.is_editor_hint():
        print("This resource is created in the editor")
```

### 3. Creating an editor plugin

```gdscript
@tool
extends EditorPlugin

func _enter_tree() -> void:
    # Called when the plugin is enabled
    pass

func _exit_tree() -> void:
    # Called when the plugin is disabled
    pass
```

Because the plugin is `@tool`, Godot loads it in the editor.

---

## `@tool` vs. `tool` keyword (GDScript 3.x)

In Godot 3.x the keyword was `tool`.  
In Godot 4.x it was renamed to the more descriptive `@tool`.  
Both behave the same way; the new syntax also supports the newer module‑based code organization.

---

## Best practices

| Issue | Recommendation |
|-------|----------------|
| **Avoid heavy logic in `_process` on editor scripts** | Editor scripts should be lightweight to keep the editor responsive. |
| **Guard runtime‑only code** | Always wrap code that should not run in the editor with `if Engine.is_editor_hint():`. |
| **Use `tool` only when necessary** | A script that runs in the editor but doesn't provide any editor functionality can be left without `@tool` to keep the runtime lean. |
| **Reset state on editor load** | Editor scripts may need to re‑initialize state when the editor reloads a scene. Use `_enter_tree` and `_ready` for that. |

---

## References

* [Official GDScript Reference](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript.html)  
* [Editor Plugin Documentation](https://docs.godotengine.org/en/stable/tutorials/plugins/editor/index.html)  
* [Running code in the editor](https://docs.godotengine.org/en/stable/tutorials/plugins/running_code_in_the_editor.html)

---