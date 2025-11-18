# Other Languages

Godot ships with its own domain‑specific language (**GDScript**), but it also supports other
programming languages.  The page below gives an overview of the officially supported
languages, a quick guide to the most common ones, and a reference to community bindings
for additional languages.

---

## Officially Supported Languages

| Language | How to use it | Typical use‑cases |
|----------|---------------|-------------------|
| **GDScript** | Built‑in.  No extra setup required. | Rapid prototyping, quick scripting, 2D/3D game logic |
| **C# (.NET)** | Install the .NET SDK (Mono for older versions, .NET 6/7 for 4.x).  Enable the C# plugin in the project settings. | Performance‑critical code, large projects that benefit from static typing |
| **C++ (GDExtension)** | Create an extension project using the GDExtension template.  Compile the native module and load it in Godot. | Writing core engine modules, high‑performance plugins |

> **Note:** All of the above languages are officially maintained and supported by the Godot
> core team.  They receive bug fixes, performance improvements, and are documented
> in the official reference.

---

## Community‑Developed Bindings

While the core team focuses on the three languages above, the community has produced
bindings for many others.  These bindings are maintained independently and may lag
behind the latest engine release.  For a complete, up‑to‑date list see the
[Community‑Bindings index](https://docs.godotengine.org/en/stable/community/).

| Language | Repository | Brief description |
|----------|------------|-------------------|
| **Rust** | `godot-rust` – <https://github.com/godot-rust/gdextension> | Safe, modern bindings via GDExtension |
| **Nim** | `godot-nim` – <https://github.com/nim-lang/godot_nim> | GDScript‑like syntax, compiled to native code |
| **Go** | `godot-go` – <https://github.com/godotengine/godot-go> | Native binding, low‑level access |
| **Python** | `godot-python` – <https://github.com/godotengine/python> | Python 3.x integration |
| **Kotlin** | `godot-kotlin` – <https://github.com/godotengine/godot-kotlin> | Android‑friendly Kotlin bindings |

> *Check the README of each repository for installation instructions and
> compatibility with the current Godot version.*

---

## Quick‑Start Guides

### GDScript

```gdscript
extends Node2D

func _ready():
    print("Hello from GDScript!")
```

> GDScript is the native language of Godot.  It is interpreted at runtime
> but compiled to bytecode for performance.  It offers tight integration
> with the editor and is the easiest way to get started.

### C# (Mono)

1. Install the latest .NET SDK.  
2. In the Project Settings → Mono → Enable Mono.  
3. Create a new C# script by selecting *New Script* → *C#*.

```csharp
using Godot;
using System;

public partial class Player : Node2D
{
    public override void _Ready()
    {
        GD.Print("Hello from C#!");
    }
}
```

### C++ (GDExtension)

1. Create a GDExtension project with `godot-cli` or the template.  
2. Add the compiled library to your project.  
3. Expose classes to Godot using `class_name`.

```cpp
#include <Godot.hpp>
#include <Node.hpp>

class Hello : public godot::Node {
    GODOT_CLASS(Hello, godot::Node)

public:
    void _ready() {
        godot::Godot::print("Hello from GDExtension C++!");
    }
};

extern "C" void GDN_EXPORT godot_gdnative_init(godot_gdnative_init_options *o) {}
extern "C" void GDN_EXPORT godot_gdnative_terminate(godot_gdnative_terminate_options *o) {}
extern "C" void GDN_EXPORT godot_nativescript_init(godot_nativescript_init_options *o) {
    godot::register_class<Hello>();
}
```

---

## Choosing a Language

| Scenario | Recommended Language |
|----------|----------------------|
| **Prototype quickly** | GDScript |
| **Need static typing** | C# or GDExtension (C++) |
| **Performance‑critical systems** | GDExtension (C++ or Rust) |
| **Cross‑platform mobile or desktop with .NET** | C# |
| **Embed in other C++ projects** | GDExtension (C++) |

> *Remember:* GDScript is the most “out‑of‑the‑box” option, while C# and GDExtension
> require additional tooling but bring the power of compiled languages.

---

## Resources

- [GDScript Basics](../../scripting/gdscript.html)
- [C# in Godot](../../scripting/csharp.html)
- [GDExtension Overview](../../gdextension/index.html)
- [Community Binding Index](../../community/)

---