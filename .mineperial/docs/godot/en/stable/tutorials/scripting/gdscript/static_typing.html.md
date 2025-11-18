**Static typing in GDScript**

*From the Godot Engine documentation*

---

Static typing in GDScript is a powerful feature that can help you catch bugs early, improve editor autocompletion and make your code more maintainable.  
In this guide you’ll learn:

- How to declare and use static types in GDScript
- The benefits of static typing for debugging and editor assistance
- Where and how to apply static typing in your project

---

### 1. What is static typing?

In GDScript you can optionally annotate variables, function parameters and return values with a specific type, e.g. `int`, `Vector3`, `Node`, or any custom class.

```gdscript
# Variable declaration
var speed : float = 10.0

# Function with typed parameters and return
func move(delta: float, direction: Vector3) -> void:
    position += direction * speed * delta
```

When a type is specified, the engine performs compile‑time checks and provides better autocompletion, making mistakes obvious before you run your project.

---

### 2. Why use static typing?

| Benefit | Explanation |
|---------|-------------|
| **Early error detection** | Type mismatches are reported as errors in the editor. |
| **Better IDE support** | Autocompletion, type hinting, and inline documentation work for typed members. |
| **Safer refactoring** | Tools can rename or move typed symbols without breaking code. |
| **Documentation clarity** | Readers immediately know what type a variable or return value is expected to be. |

---

### 3. Where to apply static typing

| Scope | Typical use‑case |
|-------|------------------|
| **Variables** | Any variable that benefits from a clear type, e.g., physics vectors, counters. |
| **Function signatures** | Public API of a script, callbacks, and signals. |
| **Return values** | Functions that provide a specific value, e.g., `get_health() -> int`. |
| **Class properties** | Exposed properties via `export` or `@export`. |

---

### 4. How to add types in GDScript

1. **Declare the type** with a colon after the variable name.  
2. **Assign a value** of that type, or `null` if the type allows it.  
3. **Annotate functions** with parameter and return types.  
4. **Use `export` with a type** to expose typed properties in the editor.

```gdscript
export(int, 0, 10) var lives : int = 3   # Exported integer between 0 and 10
```

---

### 5. Common pitfalls

- **Using `var` without a type** will make the variable dynamic; you’ll lose the benefits of static typing for that variable.
- **Wrong type on assignment** triggers an error; ensure the value matches the declared type.
- **Nullable types**: Use `?` or `null` for types that can be `null`.  
  ```gdscript
  var target : Node? = null
  ```

---

### 6. Advanced features

- **Custom class types**: Import a script class and use it as a type.  
  ```gdscript
  extends Node
  class_name Player
  ```

- **Union types**: Use `|` to allow multiple possible types.  
  ```gdscript
  var data : int | String
  ```

- **Type aliases**: Simplify complex types with `type_alias`.  
  ```gdscript
  type_alias Vector2Pair = Vector2, Vector2
  ```

---

### 7. Conclusion

Adding static types to your GDScript codebase gives you immediate feedback, richer editor features, and clearer code. Even if you use static typing sparingly, it pays off in larger projects.

---