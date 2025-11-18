# Godot's Design Philosophy

Godot’s design philosophy explains why the engine is built the way it is, what the core design goals are, and how those goals shape the overall experience for developers and users.

---

## Object‑oriented design and composition

* **Node‑based scene system** – Everything in Godot is a node.  Nodes form a tree structure that represents the scene, and each node can be combined with other nodes to create complex behaviors.
* **Composition over inheritance** – Rather than a deep inheritance hierarchy, Godot encourages composing functionality with multiple nodes.  This keeps the API small and flexible while still providing powerful features.
* **Lightweight scripts** – Scripts are attached to nodes to add behaviour.  Because nodes can be added or removed at runtime, you can change a game’s logic on the fly.

## All‑inclusive package

* **Editor + engine in one** – Godot bundles a fully‑featured editor with the engine.  This keeps everything in a single download and ensures that the editor’s UI, toolchains, and runtime are tightly integrated.
* **Cross‑platform builds** – The same source code produces editor and exported game binaries for Windows, macOS, Linux, Android, iOS, and WebGL.
* **Extensible toolset** – The editor provides built‑in support for 2D/3D graphics, animation, physics, networking, and UI, without requiring external libraries.

## Open source

* **MIT‑licensed** – The entire engine is released under the MIT license, enabling free use, modification, and redistribution.
* **Transparent source** – All features are available in source form; contributors can inspect, modify, or add new modules.
* **Community contributions** – Anyone can submit pull requests, report bugs, or create custom modules.

## Community‑driven

* **Active development** – The Godot community drives the roadmap, prioritizes features, and provides extensive documentation.
* **Plugins and templates** – Users create and share plugins, templates, and example projects that extend the engine’s capabilities.
* **Regular release cycle** – A predictable release schedule lets projects plan upgrades and adopt new features quickly.

## The Godot editor is a Godot game

* **Self‑hosting** – The editor is itself a Godot project.  This allows developers to debug the editor, experiment with new features, and contribute without leaving the engine’s environment.
* **Hot‑reload and live editing** – Scripts and resources can be edited and reloaded at runtime, making iteration fast and painless.
* **Uniform API** – Because the editor runs inside the engine, the same APIs you use in a game are available for editor tools and plugins.

## Separate 2D and 3D engines

* **Dedicated pipelines** – The engine contains two independent rendering and physics pipelines: one optimized for 2D and one for 3D.  This keeps each path lean and performant.
* **Shared core** – Both pipelines share the same node system, scripting, and editor, making it easy to switch between 2D and 3D projects.
* **Future‑proof** – Separate engines allow new features, optimisations, or renderer upgrades to be applied to one domain without impacting the other.

---

*For more detailed explanations, code examples, and design discussions, refer to the full documentation on the [Godot Engine website](https://docs.godotengine.org).*