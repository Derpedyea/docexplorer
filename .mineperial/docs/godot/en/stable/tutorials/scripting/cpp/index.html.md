**C++ (godot‑cpp)**  
================================

This page is part of the official Godot Engine documentation for the *godot‑cpp* GDExtension bindings. It serves as the entry point to the C++ scripting section and provides quick links to the main topics.

> **Navigation**  
> • [About godot‑cpp](about_godot_cpp.html)  
> • [Getting started](getting_started.html)  
> • [Adding documentation](adding_documentation.html)  

---

## About godot‑cpp

*godot‑cpp* is the official C++ binding layer that enables you to write native Godot modules and GDExtension plugins in C++. It is maintained as part of the Godot project and is fully integrated with the engine's GDExtension system.

Key points
- The library contains the C++ wrappers for Godot’s classes, methods, signals, and properties.
- It uses a header‑only API that can be compiled against any C++ compiler that supports C++17.
- The generated bindings can be used from C++ projects that compile with the Godot engine source code or with a pre‑compiled Godot binary.

---

## Getting started

To begin developing with godot‑cpp, follow these steps:

1. **Clone the Godot source**  
   ```bash
   git clone https://github.com/godotengine/godot.git
   cd godot
   ```

2. **Build the bindings**  
   ```bash
   scons platform=windows generate_bindings=yes
   ```

3. **Set up your C++ project**  
   - Include the generated headers (`godot-cpp/include`).  
   - Link against the compiled binding libraries (`godot-cpp/bin/godot-cpp.lib` / `.a`).  
   - Add a minimal GDExtension registration file.

4. **Create your first extension**  
   - Write a simple class that extends `godot::Object`.  
   - Register the class and its methods using `godot::register_class`.  
   - Compile into a shared library and load it in Godot.

For a step‑by‑step tutorial, see the **Getting started** section linked above.

---

## Adding documentation

The bindings themselves expose a rich API that mirrors Godot’s scripting language. When creating your own GDExtension, you should also generate documentation for your exposed classes and methods. Godot recommends using:

- **Doxygen** – automatically parses the C++ source and generates HTML or PDF docs.
- **Godot’s `gdscript` style comments** – keep the documentation in sync with the engine’s API reference.

Example of a simple Doxygen comment:

```cpp
/// @brief A simple counter node.
/// @details This node exposes a `value` property and emits `value_changed` signal.
class Counter : public godot::Node {
    GDCLASS(Counter, godot::Node);

public:
    int value = 0;
    void set_value(int p_value);
    int get_value() const;
    void _ready() override;
    /// @signal
    static void _register_methods() {
        godot::register_method("set_value", &Counter::set_value);
        godot::register_method("get_value", &Counter::get_value);
        godot::register_property<Counter, int>("value", &Counter::get_value, &Counter::set_value);
    }
};
```

Follow the **Adding documentation** guide for more details on structuring your docs and integrating them with the Godot documentation website.

---

## Further resources

- **[Godot API Reference](https://docs.godotengine.org/en/stable/classes.html)** – Browse the full set of Godot classes, including the C++ wrappers.  
- **[GDExtension C++ Example](https://github.com/godotengine/godot-cpp/blob/master/examples)** – Sample projects that demonstrate typical use‑cases.  
- **[Godot Discord / Forum](https://godotengine.org/discord)** – Ask the community for help with GDExtension or godot‑cpp.

---

*(The page above is a concise markdown conversion of the official Godot documentation entry for the C++ bindings. For the complete, up‑to‑date documentation, refer to the live website.)*