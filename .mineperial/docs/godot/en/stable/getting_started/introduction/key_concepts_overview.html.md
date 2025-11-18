**Overview of Godot’s Key Concepts**

Godot is built around a small set of core ideas that let you create complex games using simple building blocks.  This page gives a high‑level view of those ideas so you can start thinking about how a Godot project is organized.

---

## Scenes

- A *scene* is a self‑contained unit that can be saved, reused, and instanced.  
- Scenes can be nested: a scene can contain other scenes as **instances**.  
- The root node of a scene determines what kind of object it represents (e.g. a `Node2D` for a 2‑D entity, a `Spatial` for a 3‑D entity).  
- Scenes are stored as `.tscn` or `.scn` files and can be edited in Godot’s built‑in editor.

---

## Nodes

- Nodes are the atomic components that make up scenes.  
- Every node inherits from the base `Node` class and can add specific behaviour via a *type* (e.g. `Sprite`, `Area2D`, `Camera2D`).  
- Nodes can have properties, methods, and signals that let them interact with each other.  
- A node hierarchy forms a tree: parent nodes can own child nodes, and the engine automatically propagates certain properties (transform, visibility, etc.) down the chain.

---

## The Scene Tree

- At runtime, the editor builds a *scene tree* from the currently active scene and all its instances.  
- The tree is what the engine walks every frame to update, render, and process physics.  
- The tree is also what you see in the **Scene** dock; it reflects the hierarchy you constructed in the editor.  
- You can modify the tree at runtime with GDScript (e.g. `add_child`, `remove_child`) to create or destroy objects dynamically.

---

## Signals

- Signals are Godot’s event system.  
- A node emits a signal (`signal ready()`) when a specific condition occurs.  
- Other nodes can connect to these signals with a callback (`connect("ready", self, "_on_ready")`) to respond asynchronously.  
- Signals enable loose coupling between nodes: a parent does not need to know the exact class of its children.

---

## Summary

- **Scenes** are reusable, self‑contained units that can be instanced and nested.  
- **Nodes** are the building blocks that provide functionality, each with properties, methods, and signals.  
- The **scene tree** represents the runtime hierarchy of all nodes.  
- **Signals** allow nodes to communicate without tight dependencies.  

Understanding these concepts is the first step to building anything in Godot – from simple 2‑D sprites to complex 3‑D worlds.