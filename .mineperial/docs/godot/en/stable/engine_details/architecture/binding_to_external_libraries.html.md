# Binding to external libraries  

> **Godot Engine – Stable Documentation**  
> **URL**: https://docs.godotengine.org/en/stable/engine_details/architecture/binding_to_external_libraries.html  

The following section explains how to link a Godot engine module to a third‑party C/C++ library. It builds on the *Custom modules in C++* tutorial and shows how to use an external library such as the **Festival** speech‑synthesis toolkit.  

---

## Overview  

Modules in Godot are small, self‑contained pieces of functionality that can be compiled into the engine. They are ideal for adding custom features that are tightly coupled to the engine.  
When a feature is already implemented in a large, external library you can still expose it to Godot by creating a module that wraps the library’s API. This page walks you through the process of:

1. Adding the library source to the repository.  
2. Updating the module’s build files to link the library.  
3. Creating Godot‑visible bindings (methods, properties, signals).  
4. Building the engine with the new module.

---

## 1. Project layout  

```
godot/
├─ modules/
│  └─ festival/
│     ├─ src/                 # C++ source files for the module
│     ├─ include/             # Public headers exposed to Godot
│     ├─ festival.h           # Wrapper header
│     ├─ festival.cpp         # Wrapper implementation
│     └─ CMakeLists.txt       # Build rules
├─ thirdparty/
│  └─ festival/               # Festival source or pre‑built binaries
```

* The `festival/` directory under `thirdparty` contains the original library.
* The `modules/festival/` directory contains the Godot module that wraps Festival.

---

## 2. Adding Festival to the build  

### 2.1 Downloading the library  

You can fetch Festival from its official source or a pre‑compiled binary. For illustration we use the source:

```bash
cd godot/thirdparty
git clone https://github.com/festival/festival.git
```

### 2.2 Updating the module CMake file  

`modules/festival/CMakeLists.txt` must:

```cmake
# Specify the module name
add_library(festival_module
    src/festival.cpp
    src/festival_bind.cpp
    include/festival.h
)

# Link the external Festival library
target_include_directories(festival_module PRIVATE
    ${CMAKE_CURRENT_SOURCE_DIR}/../../thirdparty/festival/include
)

target_link_libraries(festival_module PRIVATE
    festival_core          # Replace with the actual library name
    festival_utt
    # … any other required components
)

# Tell Godot this is a module
target_compile_definitions(festival_module PRIVATE MODULE_FESTIVAL_ENABLED)
```

> **Tip**: Use `find_package` if Festival is installed system‑wide.

### 2.3 Adding the module to `CMakeLists.txt` (root)

```cmake
if(MODULE_FESTIVAL)
    add_subdirectory(modules/festival)
endif()
```

Add the corresponding option in the root `CMakeLists.txt`:

```cmake
option(MODULE_FESTIVAL "Build Festival module" OFF)
```

---

## 3. Exposing the API to Godot  

Create a small wrapper that converts Godot types to the ones required by Festival and vice‑versa.

```cpp
// festival_bind.cpp
#include "festival.h"
#include <godot_cpp/core/class_db.hpp>

using namespace godot;

class FestivalModule : public Object {
    GDCLASS(FestivalModule, Object);

public:
    // Example: speak a string
    void speak(const String &text) {
        festival::speak(text.utf8().get_data());
    }

    // Example: register a callback
    void set_callback(Callable callback) {
        // Convert Callable to a C++ function pointer
    }
};

void register_festival_module() {
    ClassDB::register_class<FestivalModule>();
}
```

Register the module in `register_types.cpp`:

```cpp
// register_types.cpp
void initialize_festival_module(ModuleInitializationLevel p_level) {
    if (p_level != MODULE_INITIALIZATION_LEVEL_SCENE) return;
    register_festival_module();
}
```

---

## 4. Using the module in GDScript  

```gdscript
var festival = FestivalModule.new()
festival.speak("Hello, world!")
```

You can also expose constants and signals in the C++ wrapper and use them directly in your scripts.

---

## 5. Building the engine  

```bash
cd godot
mkdir build && cd build
cmake -DDOWNLOAD_PACKAGES=ON -DMODULE_FESTIVAL=ON ..
cmake --build .
```

If you used the `scons` build system (the default for Godot 3.x), the steps are analogous:

```bash
scons platform=x11 module_festival=yes -j8
```

---

## 6. Testing  

1. Launch the Godot editor.  
2. In the **Project Settings → Modules** panel, enable the Festival module.  
3. Add a node that uses the `FestivalModule` class or call it from GDScript.  
4. Run the scene to verify the speech output.

---

## 7. Common pitfalls  

| Issue | Fix |
|-------|-----|
| “Festival not found” | Ensure `target_include_directories` points to the correct header folder and the library binaries are in a directory that the linker can find. |
| Runtime crash on `speak()` | Verify that the Festival initialization is performed before calling any API functions. |
| Build errors on Windows | Use the pre‑compiled `dll`/`lib` and adjust `target_link_libraries` accordingly. |

---

## 8. Further reading  

* [Custom modules in C++ – Godot Docs](https://docs.godotengine.org/en/stable/tutorials/gdnative/custom_modules_in_cpp.html)  
* [GDExtension – Godot Docs](https://docs.godotengine.org/en/stable/tutorials/gdnative/gdextension.html)  
* [CMake – Official documentation](https://cmake.org/documentation/)

---  

> **Note**: The example above is illustrative. The exact names of Festival’s headers, libraries, and functions will depend on the version you are using. Adjust the build files accordingly.