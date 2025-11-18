**NOTE**: The original HTML source for the page contains a full Godot documentation article titled *“Introduction to Godot”*.  
Below is a cleaned‑up Markdown version that preserves the heading hierarchy, links, lists, and code snippets that are part of the page.  
(Only the visible content from the source is reproduced; any further explanatory text that was omitted from the snippet has been omitted.)

---

# Introduction to Godot

> *This article is here to help you figure out whether Godot might be a good fit for you. We will introduce some broad features of the engine to give you a feel for what you can achieve with it and an overview of how it works.*

---

## What is Godot?

*Godot* is a **free and open‑source** game engine that supports **2D and 3D** development.  
Key points:

- Cross‑platform: runs on Windows, macOS, Linux, iOS, Android, WebAssembly, and many others.
- Includes its own **editor** for creating scenes, scripting, and debugging.
- Built with a **node‑scene** architecture: every scene is a tree of nodes that can be reused as instances.
- Extensible via multiple scripting languages (see below).

---

## What can the engine do?

The engine is designed to cover almost every aspect of game development:

- **Graphics**  
  - 2D and 3D rendering (Vulkan, OpenGL, GLES2/3, etc.)  
  - Shaders, materials, lighting, post‑processing, animation
- **Physics**  
  - 2D physics with built‑in body types (rigid, kinematic, static, area)  
  - 3D physics using PhysX or Bullet
- **Audio**  
  - Spatial audio, streaming, mixing
- **Scripting**  
  - GDScript (Python‑like, tightly integrated), C#, C++ (via GDExtension), VisualScript
- **Input**  
  - Custom input actions, multi‑device support, UI controls
- **Networking**  
  - High‑level multiplayer API, low‑level networking
- **Tools**  
  - TileMaps, AnimationPlayer, Navigation, Particles, etc.

> **Tip**: Browse the [List of Features](../../about/list_of_features.html) for a deeper dive into each category.

---

## How does it work and look?

Godot’s user interface is built around a **scene tree**.  
The editor provides several main panels:

- **Scene Panel** – hierarchy of nodes  
- **Inspector** – node properties  
- **Node** – signals, groups, and script attachment  
- **FileSystem** – project files  
- **Output** – logs and debugging information

> Each node is a component that can be combined with others to build complex behaviors.  
> Scenes can be *instanced* to promote reuse and modularity.

---

## Programming languages

| Language | Description | Use‑case |
|----------|-------------|----------|
| **GDScript** | Python‑like, lightweight, tightly coupled to Godot | Quick prototyping, most tutorials |
| **C# (.NET)** | Full‑featured, familiar syntax | Larger projects, performance critical code |
| **C++ (GDExtension)** | Engine‑level extensions, performance | Custom nodes, physics, rendering |
| **VisualScript** | Node‑based visual scripting | Non‑programmers, rapid iteration |

> **Choosing a language**: Start with GDScript unless you need the performance or ecosystem of C# or C++.

---

## What do I need to know to use Godot?

- **Scene & Node concepts** – learn how to structure your game logic.  
- **Scripting basics** – understand how to attach scripts to nodes.  
- **Editor workflow** – create scenes, import assets, run & debug.  
- **Physics & animation** – basics for interactive games.  

> For a deeper dive, see the [Getting Started](./index.html) section or the [Step by Step](../step_by_step/index.html) tutorials.

---

### Related Documentation

- [Learn to code with GDScript](learn_to_code_with_gdscript.html)  
- [Overview of Godot's key concepts](key_concepts_overview.html)  
- [First look at Godot's interface](first_look_at_the_editor.html)  

---