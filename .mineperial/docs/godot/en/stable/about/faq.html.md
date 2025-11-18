**This page is a part of the Godot Engine documentation – a Frequently Asked Questions (FAQ) page.**  
Below is a cleaned‑up Markdown rendition that keeps the structure and key information while omitting the raw HTML boilerplate.

---

# Frequently Asked Questions

## 1. What can I do with Godot? How much does it cost? What are the license terms?

> Godot is a free and open‑source game engine available under the MIT license.  
> It can be used for any type of project, from simple prototypes to commercial games.  
> No royalties or hidden costs are required.

---

## 2. Which platforms are supported by Godot?

- **Desktop**: Windows, macOS, Linux
- **Mobile**: Android, iOS
- **Web**: HTML5 (WebGL)
- **Console** (via export templates or custom builds): PlayStation, Xbox, Switch, etc.  
  *(Exact support varies with export templates and platform SDKs.)*

---

## 3. Which programming languages are supported in Godot?

- **GDScript** – Godot’s own high‑level language
- **C#** (via Mono) – .NET / C# support
- **C++/C** – via GDNative / GDExtension
- **VisualScript** – node‑based scripting (deprecated in 4.x)

---

## 4. What is GDScript and why should I use it?

GDScript is a dynamically typed, Python‑like language designed specifically for Godot.  
Benefits:

- Tight integration with the editor and scene system  
- Easy learning curve for beginners  
- Fast iteration due to built‑in reloading

---

## 5. What were the motivations behind creating GDScript?

- Provide a lightweight, engine‑centric language
- Enable rapid prototyping with minimal boilerplate
- Keep the runtime fast and memory friendly

---

## 6. Which programming language is fastest?

For raw performance, **C++ (via GDExtension)** is the fastest.  
GDScript is slower but still performant enough for most games, and C# sits in between.

---

## 7. What 3D model formats does Godot support?

- **Scene files**: `.obj`, `.glb`, `.gltf`, `.fbx`, `.dae` (Collada), `.3ds`, etc.  
- **Meshes**: `.tscn`, `.scn` (Godot scenes), `.dae` (imported), `.obj` + `.mtl`

---

## 8. Will [insert closed SDK such as FMOD, GameWorks, etc.] be supported in Godot?

Yes, Godot allows you to bind to external libraries through GDNative / GDExtension.  
Each SDK must provide a C/C++ API that can be wrapped.

---

## 9. How can I extend Godot?

- **GDScript** – add new nodes or scripts
- **C#** – create custom classes
- **C++ / GDExtension** – compile native modules or libraries
- **Editor plugins** – extend the editor UI and functionality

---

## 10. How do I install the Godot editor on my system (for desktop integration)?

### Windows
Download the ZIP, extract, and run `godot.exe`.  
Optional: create a desktop shortcut or add to PATH.

### macOS
Download the DMG, drag Godot into `/Applications`.  
You can create an alias for quick launch.

### Linux
Download the binary, extract, and run `godot`.  
Optional: create a symlink or add to your package manager.

---

## 11. Is the Godot editor a portable application?

Yes, the editor is self‑contained.  
No system configuration is required – simply run the executable.

---

## 12. Why does Godot prioritize Vulkan and OpenGL over Direct3D?

- **Vulkan** offers modern graphics API with low overhead.
- **OpenGL** ensures wide hardware compatibility.
- Direct3D support is available on Windows but is a secondary path to keep the code base lean.

---

## 13. Why does Godot aim to keep its core feature set small?

To maintain a **clean, modular design**:

- Easier to understand for beginners
- Faster development and bug fixing
- Allows community‑made modules to add advanced features

---

## 14. How should assets be created to handle multiple resolutions and aspect ratios?

- Use **relative sizing** (`anchor`, `margin`) in UI elements
- Export assets at **high resolution** and use scale modes (e.g., `stretch`, `keep`, `keep aspect`)
- For 2D: use `Viewport` nodes or `Stretch` settings

---

## 15. When is the next release of Godot out?

Check the [release page](https://godotengine.org/download) and the [Godot roadmap](https://github.com/godotengine/godot/wiki/Roadmap).

---

## 16. Which Godot version should I use for a new project?

- **Stable**: always recommended for production
- **Beta/RC**: try for testing new features

---

## 17. Should I upgrade my project to use new Godot versions?

- **Yes** if you need new features or bug fixes.  
- **No** if you want stability and don't want to port breaking changes.  
  Use the version‑specific migration guides.

---

## 18. Should I use the Forward+, Mobile, or Compatibility renderer?

- **Forward+** – default, best performance for modern GPUs.
- **Mobile** – optimized for low‑power devices.
- **Compatibility** – legacy renderer for older hardware.

---

## 19. I would like to contribute! How can I get started?

1. Read the [Contributing Guide](https://docs.godotengine.org/en/stable/community/contributing.html).  
2. Fork the repository → clone locally → create a feature branch.  
3. Run tests, submit a PR, and participate in reviews.

---

## 20. I have a great idea for Godot. How can I share it?

- Submit a feature request on the [Godot GitHub issues](https://github.com/godotengine/godot/issues).  
- Join the community forums or Discord for discussion.

---

## 21. Is it possible to use Godot to create non‑game applications?

Absolutely. Godot is a general‑purpose 2D/3D engine suitable for simulations, visualizations, UI apps, etc.

---

## 22. Is it possible to use Godot as a library?

Yes, you can embed the engine in other applications via GDNative or the C++ bindings.

---

## 23. What user interface toolkit does Godot use?

Godot uses its own **Control node** hierarchy, rendering UI elements directly with the engine’s rendering system.

---

## 24. Why does Godot use the SCons build system?

SCons allows cross‑platform builds with minimal configuration, and its Python scripts are easy to modify for custom builds.

---

## 25. Why does Godot not use STL (Standard Template Library)?

To avoid the dependency and keep the engine lightweight and portable across platforms where STL may not be fully available.

---

## 26. Why does Godot not use exceptions?

Because they can be expensive in a game engine and can interfere with the deterministic nature of the engine loop.

---

## 27. Does Godot use an ECS (Entity‑Component‑System)?

No, Godot’s node‑scene system is a hierarchy‑based approach.  
ECS can be implemented via custom modules if desired.

---

## 28. Why does Godot not force users to implement DOD (Data‑Oriented Design)?

Because the node‑scene approach is simpler for many users, and DOD is left as an advanced optimization.

---

## 29. How can I support Godot development or contribute?

- Donate to the Godot Foundation
- Participate in community translations
- Write tutorials or contribute to the docs

---

## 30. Who is working on Godot? How can I contact you?

The core team includes **Mikola Lysenko** and many community volunteers.  
Contact via the [Godot forums](https://godotforums.org), [Discord](https://discord.com/invite/godotengine), or the GitHub project.

---

> *For complete, up‑to‑date answers and detailed explanations, visit the official [FAQ page](https://docs.godotengine.org/en/stable/about/faq.html).*