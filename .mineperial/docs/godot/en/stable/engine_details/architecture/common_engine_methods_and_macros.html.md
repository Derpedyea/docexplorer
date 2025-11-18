**Common engine methods and macros**  
*Godot Engine (stable) documentation*

> *Godot's C++ codebase makes use of dozens of custom methods and macros which are used in almost every file. This page is geared towards beginner contributors, but it can also be useful for those looking to understand the internal mechanics of the engine.*

---

# Introduction

Godot’s engine code is heavily reliant on a set of custom C++ methods and macros that provide a clean API, enforce conventions, and aid in reflection and serialization. This section gives an overview of the most frequently used ones and explains how they fit into the larger architecture.

> **Why are they necessary?**  
> The engine needs a consistent way to expose classes, properties, signals, and methods to the editor, scripting languages, and the editor’s own C++ core. The macros help to keep that interface simple while avoiding repetitive boilerplate.

---

## Common Methods

| Method | Purpose | Typical Usage |
|--------|---------|---------------|
| `Object::set` / `Object::get` | Property accessors | Dynamic property manipulation |
| `Object::set_meta` / `Object::get_meta` | Metadata storage | Store arbitrary data on objects |
| `Object::has_method` | Runtime method lookup | Reflection |
| `Object::connect` | Signal connection | Runtime signal wiring |

*(Full list available in the Godot source.)*

---

## Common Macros

### `GDCLASS`

```cpp
class MyNode : public Node {
    GDCLASS(MyNode, Node);
public:
    static void _bind_methods();
};
```

`GDCLASS` registers the class with Godot’s type system and is required for all exported classes.

### `GDVIRTUAL`

```cpp
class MyNode : public Node {
    GDVIRTUAL void _ready();
};
```

Declares a virtual method that can be overridden from GDScript or other languages.

### `GDFORCE_INLINE`

```cpp
GDFORCE_INLINE int add(int a, int b) { return a + b; }
```

Hides a function from the reflection system, but keeps it inlined.

### `GDPROPERTY`

```cpp
GDPROPERTY(int, my_value, PROPERTY_HINT_NONE, "My Property");
```

Defines an exported property with editor hints.

### `GDREGISTER_CLASS`

```cpp
GDREGISTER_CLASS(MyNode);
```

Registers a class in the engine after its `_bind_methods` has been called.

---

## How to Use Them

1. **Define a new class** that inherits from a Godot type.  
2. **Add `GDCLASS`** to bind it to the engine.  
3. **Implement `_bind_methods`** to expose methods, properties, and signals.  
4. **Use `GDREGISTER_CLASS`** in your module initialization.  

Example:

```cpp
class MyNode : public Node {
    GDCLASS(MyNode, Node);

    int value = 0;

public:
    void _init() { value = 42; }

    void _ready() {
        print("Ready");
    }

    static void _bind_methods() {
        ClassDB::bind_method(D_METHOD("_ready"), &MyNode::_ready);
        ClassDB::bind_method(D_METHOD("_process", "delta"), &MyNode::_process);
        ADD_PROPERTY(PropertyInfo(Variant::INT, "value"), "set_value", "get_value");
    }

    void set_value(int v) { value = v; }
    int get_value() const { return value; }
};

GDREGISTER_CLASS(MyNode);
```

---

## References

* [Godot C++ Documentation](https://docs.godotengine.org/en/stable/tutorials/scripting/gdscript/gdscript_basics.html)  
* [Godot Source Code](https://github.com/godotengine/godot)

---