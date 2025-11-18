# About godot‑cpp

**godot‑cpp** are the official C++ GDExtension bindings that ship with the Godot Engine.  
They give you C++ access to Godot’s API in almost the same way you would use GDScript, but with the performance and type safety of a native language.  
The bindings are maintained as part of the Godot project and are built on the GDExtension system.

---

## Quick Overview

| Feature | Description |
|---------|-------------|
| **Official** | Maintained by the Godot core team and kept in sync with the engine. |
| **GDExtension‑based** | Uses the same extension mechanism as other languages (C#, GDNative, etc.). |
| **C++ API** | Exposes the entire Godot class hierarchy with full type‑safe bindings. |
| **Cross‑platform** | Works on Windows, macOS, Linux, Android, iOS, WebAssembly, and more. |
| **Documentation** | Comprehensive reference available in the Godot docs under *Tutorials → Scripting → C++*. |

---

## Getting Started

1. **Prerequisites**  
   * Godot 4.x (or the matching Godot‑3.x version if you’re working with the legacy bindings).  
   * A working C++ compiler toolchain (GCC/Clang on Linux/macOS, MSVC on Windows).

2. **Download the Bindings**  
   * Clone the `godot-cpp` repository from GitHub:  
     ```bash
     git clone https://github.com/godotengine/godot-cpp
     ```

3. **Build the Bindings**  
   * Run the SCons build script included in the repository.  
     ```bash
     scons platform=linux generate_bindings=yes
     ```
   * The output will be a library you can link against in your GDExtension project.

4. **Use the Bindings**  
   * Include the generated headers in your C++ code.  
   * Register the classes with `godot::register_types` and expose them as you would any other GDExtension.

For detailed instructions, see the official Godot tutorials:

- [Getting Started with GDExtension (C++)](../tutorials/scripting/cpp/gdextension_cpp_example.html)  
- [Building the Project](../tutorials/scripting/cpp/building.html)  

---

## Resources

* **Official Documentation** – [godotengine.org](https://docs.godotengine.org/en/stable/tutorials/scripting/cpp/about_godot_cpp.html)  
* **GitHub Repository** – [github.com/godotengine/godot-cpp](https://github.com/godotengine/godot-cpp)  
* **Community Examples** – Search the Godot asset library or GitHub for sample GDExtension projects using C++.

---

*Happy coding with godot‑cpp!*