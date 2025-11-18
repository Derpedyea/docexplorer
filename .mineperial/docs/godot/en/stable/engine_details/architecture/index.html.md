**NOTE**: The raw HTML of the page contains a full navigation tree but the actual article content is not included in the snippet provided.  
Below is a concise Markdown representation of the available information for the *Engine architecture* page.

```markdown
# Engine architecture

The following pages are meant to introduce the global organization of Godot Engine’s source code, and give useful tips for extending and fixing the engine on the C++ side.

> **Getting started with the engine architecture**  
> *[See the diagram of Godot’s architecture](godot_architecture_diagram.html)*

---

## Table of contents

| Page | Link |
|------|------|
| **Godot’s architecture diagram** | `godot_architecture_diagram.html` |
| (Other architecture‑related pages may follow) | |

---

## Overview

* Godot’s source code is split into several logical modules:
  1. **Core** – low‑level utilities and data structures.
  2. **Rendering** – OpenGL/Vulkan back‑ends and material handling.
  3. **Physics** – 2D/3D physics engines.
  4. **Scene tree & nodes** – the hierarchical structure that drives the runtime.
  5. **Scripting** – GDScript, C# (via Mono), C++ (via GDExtension) integration.
  6. **Editor** – the tool that builds and edits projects, implemented as a Godot game itself.

* Each module is self‑contained and interacts with others through well‑defined APIs.

> *For a visual summary of the relationships between these modules, see the **Godot architecture diagram**.*

---

## Key concepts

| Concept | Description |
|---------|-------------|
| **Module** | A compilation unit that exposes a public API and is linked into the final engine binary. |
| **Scene tree** | A dynamic hierarchy of `Node` objects that defines the game world at runtime. |
| **Script** | Code that runs on nodes; can be written in GDScript, C#, or C++ (via GDExtension). |
| **Rendering backend** | Supports Vulkan, OpenGL ES 3.2, and a fallback compatibility renderer. |
| **Resource** | Serialized data that can be shared across scenes (e.g. meshes, textures). |

---

## Extending and fixing the engine

* **Adding a new module** – Create a directory in `modules/`, implement the required C++ classes, and expose a `GDREGISTER_CLASS()` macro.
* **Contributing a bug fix** – Fork the repository, create a new branch, modify the source, run tests, and submit a pull request.
* **Documentation** – Refer to the *Godot documentation* pages for API details, compiler options, and platform‑specific notes.

---

## Useful resources

- [Godot 4.0 release notes](../../about/release_policy.html)
- [Engine development guide](../../tutorials/best_practices/project_organization.html)
- [GDExtension documentation](../../tutorials/migrating/upgrading_to_godot_4.html)
- [License compliance information](../../about/complying_with_licenses.html)

---

**End of page.**  
```

*If you need deeper details, check the individual architecture sub‑pages referenced above.*