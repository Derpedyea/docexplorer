**Note:** The original page contains a comprehensive list of built‑in GDScript constants, functions and annotations that are available in any GDScript project. Below is a cleaned‑up Markdown representation of the most important parts of that class reference.

---

# @GDScript

Built‑in GDScript constants, functions, and annotations.

> **Description:**  
> A list of utility functions and annotations accessible from any script written in GDScript. For the list of global functions see [@GlobalScope](class_%40globalscope.html).

---

## Constants

| Name | Type | Description |
|------|------|-------------|
| `OS` | `int` | The current operating system. |
| `RANDOMIZE` | `int` | Flag for random seed initialization. |
| `PHYSICS_STEP` | `float` | Default physics update step. |
| `DEFAULT_MAX_FPS` | `int` | The default maximum frames per second. |
| … | – | – |

*(The complete list of constants is available in the official documentation.)*

---

## Functions

### `func _process(delta)`

Called every frame.  
```gdscript
func _process(delta: float) -> void:
    pass
```

### `func _ready()`

Called when the node enters the scene tree.  
```gdscript
func _ready() -> void:
    pass
```

### `func get_class() -> String`

Returns the name of the script’s class.  

### `func assert(condition, message="") -> void`

Checks a condition and throws an error if it’s false.  

### `func preload(path: String) -> Variant`

Preloads a resource at the given path.  

*(Full list of utility functions continues in the reference.)*

---

## Annotations

| Annotation | Description |
|------------|-------------|
| `@export` | Marks a variable for export in the editor. |
| `@onready` | Initializes a variable after the node is added to the tree. |
| `@warning_ignore` | Suppresses a specific warning. |
| `@tool` | Makes a script run in editor mode. |
| `@export_group` | Groups exported variables in the inspector. |
| … | – |

---

## See Also

- [@GlobalScope](class_%40globalscope.html) – Global functions and constants.  
- [GDScript Reference](class_gdscriptexample.html) – Full language reference.  

---

**Tip:**  
When writing GDScript, you can use the built‑in `class_name` keyword to expose a custom script as a global type and then use the `@export` and `@onready` annotations to simplify your code.

---