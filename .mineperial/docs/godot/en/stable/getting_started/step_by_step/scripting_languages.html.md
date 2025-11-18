**Note:** The original page is a part of Godot’s official documentation and contains rich technical explanations, headings, lists, and links. The following Markdown representation preserves the structure and key information from the page while removing any extraneous navigation and layout HTML.

---

# Scripting languages

Godot offers several ways to write scripts that control your game logic.  
This lesson provides an overview of each option, their pros and cons, and a recommendation for which language to use in a given situation.

> *Next up: [Creating your first script](scripting_first_script.html).*

---

## Available scripting languages

| Language | Description | Key features |
|----------|-------------|--------------|
| **GDScript** | Godot’s own high‑level, dynamically typed language. | • Python‑like syntax<br>• Tight integration with the engine<br>• Built‑in editor support (autocomplete, refactoring)<br>• Good performance for most use‑cases |
| **.NET / C#** | Full C# support via the Mono runtime (Godot 4 uses .NET 6). | • Statically typed, mature ecosystem<br>• Powerful IDE integration (VSCode, Rider)<br>• Faster performance than GDScript in tight loops<br>• Requires a separate compiler and runtime |
| **C++ via GDExtension** | Native C++ extensions using the new GDExtension API. | • Highest performance<br>• Direct access to engine internals<br>• Need to build and compile a native library<br>• Larger project footprint |
| **(Legacy) VisualScript** | Node‑based visual scripting (removed in Godot 4). | • Drag‑and‑drop logic for non‑programmers<br>• Less flexible than code |

> **Note:**  
> *VisualScript has been removed in Godot 4 and is no longer supported.*

---

## Which language should I use?

### GDScript

- **When to choose it**  
  • Most beginners and small to medium projects.  
  • Rapid prototyping and editor tooling.  
- **Pros**  
  • Easy to learn.  
  • Seamless integration with the editor and scene system.  
  • Automatic type inference and built‑in signals.  
- **Cons**  
  • Slightly slower than C# or native C++ in performance‑critical sections.  
  • Lacks some advanced language features (e.g., generics).

> **Tip:** Use GDScript for gameplay logic, UI scripting, and any code that doesn’t hit the CPU/GPU hot spot.

---

### .NET / C#

- **When to choose it**  
  • Projects that need static typing or large libraries.  
  • Teams already experienced with C#.  
  • Projects that will benefit from a powerful IDE and debugging tools.  
- **Pros**  
  • Fast compilation and execution.  
  • Strongly typed, which reduces runtime errors.  
  • Access to the entire .NET ecosystem.  
- **Cons**  
  • Requires the Mono/.NET runtime – larger binary size.  
  • Slightly higher memory footprint.  
  • Some engine features are still GDScript‑only (e.g., certain editor tools).

> **Tip:** Use C# for performance‑critical modules, networking code, or when you need static typing.

---

### C++ via GDExtension

- **When to choose it**  
  • When maximum performance is required (e.g., physics, AI, or custom rendering).  
  • When you need to expose engine internals to your game.  
  • For creating custom engine modules or plugins.  
- **Pros**  
  • Near‑native speed.  
  • Full access to Godot’s C++ API.  
  • Can be compiled to WebAssembly for the web.  
- **Cons**  
  • Requires a C++ compiler and build system.  
  • More complex to set up and maintain.  
  • Debugging can be harder without a good IDE integration.  

> **Tip:** Use GDExtension for small, highly optimised components; otherwise keep most logic in GDScript or C#.

---

## Summary

| Language | Best for | Performance | Editor integration |
|----------|----------|-------------|---------------------|
| GDScript | Rapid development, UI, most gameplay | Medium | Excellent |
| C# | Large projects, static typing, complex logic | Good | Very good |
| GDExtension (C++) | Performance‑critical modules, engine extensions | Excellent | Requires external tooling |

> Choose the language that matches your team’s expertise, the project’s performance requirements, and the need for editor convenience.

---

### Further reading

- [Creating your first script](scripting_first_script.html) – learn how to attach a script to a node.  
- [Listening to player input](scripting_player_input.html) – a quick guide to handling input.  
- [Using signals](signals.html) – connect code to events.

---