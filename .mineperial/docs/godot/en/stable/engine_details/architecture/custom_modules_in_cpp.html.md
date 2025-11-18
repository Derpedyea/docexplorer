# Custom modules in C++

Godot’s modular design lets you extend the engine with your own C++ code.  
This page explains how to create, compile, and enable a new module, how the
engine picks it up, and how to expose module functionality to the editor
and scripts.

> ⚡ **Tip** – A module is a self‑contained chunk of C++ code that compiles
> into the editor/standalone executable.  Unlike GDScript or GDExtensions,
> modules are loaded at engine startup, so changes require a rebuild of the
> editor or game binary.

---

## 1.  What is a module?

* A *module* is a collection of C++ sources that live in the `modules/`
  directory of the engine tree.
* Modules can add new core classes, subsystems, or modify existing ones.
* They are compiled **inline** with the editor or exported binary (no
  separate library is needed).

> **Why use modules?**  
> * Faster integration (no runtime library load).  
> * Full access to the engine’s internals.  
> * Useful for adding native plugins, performance‑critical code, or
>   custom rendering backends.

---

## 2.  Project layout

```
modules/
└── mymodule/
    ├── CMakeLists.txt   ← build script
    ├── mymodule.cfg     ← module config
    ├── mymodule.cpp     ← source file(s)
    └── mymodule.h       ← header file(s)
```

| File | Purpose |
|------|---------|
| `mymodule.cfg` | Declares the module and its build options. |
| `CMakeLists.txt` | Describes source files, compiler flags, etc. |
| `*.cpp / *.h` | Your module implementation. |

### 2.1  `mymodule.cfg`

```ini
[config]
config_name="mymodule"

# List of sub‑directories containing C++ files
subdirs=""

# If your module should be included only for the editor
# (set to `true` if you want it only in the editor)
is_editor="false"

# Optional: a short description for the module list
# in the editor’s project settings.
description="My custom module"
```

> *The file is parsed by the build system – no code is executed.*

### 2.2  `CMakeLists.txt`

```cmake
# Build a library from sources in the module folder
add_library(mymodule MODULE
    mymodule.cpp
    mymodule.h
)

# Link against core Godot libraries
target_link_libraries(mymodule PRIVATE godot)
```

> Use `target_link_libraries()` to pull in whatever engine subsystems
> you need (e.g. `core`, `scene`, `renderer`, etc.).

---

## 3.  Adding the module to the build

1. **Create the module folder** in `modules/` as shown above.
2. **Add a reference** to your module in the `CMakeLists.txt` of the
   engine root (this is done automatically for any submodule in the
   `modules/` tree if it contains a `module.cfg`).
3. **Configure the engine** to include it:

   *From the command line:*

   ```bash
   scons platform=windows module_mymodule=yes
   ```

   *From the editor:*

   ```text
   Project → Project Settings → General → Custom Modules → mymodule
   ```

   Make sure the module appears in the *Modules* list and is marked
   “enabled”.

> If you want the module to be **editor‑only**, set `is_editor="true"`
> in `mymodule.cfg` and build with `module_mymodule=yes` – it will not be
> linked into exported builds.

---

## 4.  Accessing the module

### 4.1  From C++

All module classes live in the same namespace as the engine, so they
follow the same conventions:

```cpp
// mymodule.cpp
#include "mymodule.h"

void MyModule::do_something() {
    // your logic
}
```

You can register classes with the engine’s class database to expose them
to the editor or GDScript:

```cpp
// Register a new class
ClassDB::register_class<MyCustomNode>();
```

### 4.2  From GDScript / GDExtension

If you need to use the module from scripts, expose functions via
`GDExtension` or a *custom native script*:

```cpp
// In MyModule.cpp
class MyNode : public Node {
    GDCLASS(MyNode, Node)

public:
    void _ready() override { /* ... */ }
};

class MyModule : public Module {
    // …
};
```

Then enable the module in `project.cfg`:

```ini
[autoload]
MyNode="res://addons/mymodule/MyNode.gd"
```

or use GDExtension for a fully typed binding.

---

## 5.  Building and testing

```bash
# From the engine root
scons -j$(nproc) module_mymodule=yes
```

After the build:

* The editor binary will contain the new module.
* Open the editor, go to *Project → Project Settings → Modules* – your
  module should be listed and enabled.
* If you added a new `Node`, it will appear in the *Node* selector.

---

## 6.  Common pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| **Module not found** | `module.cfg` missing `config_name` or `is_editor` typo | Verify spelling and add the file |
| **Build fails** | Missing include paths | Add `include_directories(...)` in `CMakeLists.txt` |
| **Editor crashes** | Wrong base class or unregistered methods | Double‑check `ClassDB::register_class` usage |
| **Runtime only module loads in editor** | `is_editor="true"` but also built for export | Remove `module_mymodule=yes` from export configs |

---

## 7.  Example – a simple “Hello, World” node

```cpp
// hello_world.h
#pragma once

#include "scene/2d/node_2d.h"

class HelloWorld : public Node2D {
    GDCLASS(HelloWorld, Node2D)

public:
    HelloWorld();
    ~HelloWorld();

    void _process(double delta) override;
};
```

```cpp
// hello_world.cpp
#include "hello_world.h"
#include "core/print_string.h"

HelloWorld::HelloWorld() {
    PRINT_LOG("HelloWorld node created");
}

HelloWorld::~HelloWorld() {}

void HelloWorld::_process(double delta) {
    // Do something every frame
}
```

```cpp
// Register in module init
class HelloModule : public Module {
public:
    void _register_classes() override {
        ClassDB::register_class<HelloWorld>();
    }
};

extern "C" void GDN_EXPORT godot_register_module(Module *module) {
    module->add_module(new HelloModule());
}
```

Compile, enable the module, then drag the `HelloWorld` node into a scene
from the editor.

---

## 8.  Further reading

* [GDExtension docs](https://docs.godotengine.org/en/stable/tutorials/scripting/gdextension.html) – if you prefer to expose native code without a full module.
* [Module system design](https://github.com/godotengine/godot/blob/master/docs/en/engine/module_system.md) – deep dive into the module architecture.
* [C++ API reference](https://docs.godotengine.org/en/stable/classes/) – all available base classes, signals, properties, etc.

---