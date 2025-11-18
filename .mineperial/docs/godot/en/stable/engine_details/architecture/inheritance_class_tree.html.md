# Inheritance Class Tree

The Godot Engine’s class hierarchy is organized in a simple tree that shows how each class derives from its parent.  
The information below is extracted from the official Godot documentation.

---

## Overview

- **Object**  
  The root of all Godot classes.

- **Reference**  
  Extends `Object`; used for reference‑counted objects.

- **Control**  
  UI widget base class.  
  Extends `Node2D`.

- **Node2D**  
  Base class for all 2‑D nodes.  
  Extends `Node`.

- **Node3D**  
  Base class for all 3‑D nodes.  
  Extends `Node`.

*(For a complete and up‑to‑date tree, download the `class_tree.zip` file from the Godot website.)*

---

## How to Use the Class Tree

The class hierarchy is useful for:

- Understanding inheritance and which methods/ properties are available.
- Quickly locating a class’s parent.
- Navigating the documentation from any class page.

You can also view the full tree diagram in the Godot editor’s **Integrated Class Reference** or by opening the ZIP file containing the source.

---

## Resources

- **Download the full class tree**:  
  `class_tree.zip` – contains the complete inheritance diagram and source files.  
  [Download Link](https://docs.godotengine.org/en/stable/engine_details/architecture/class_tree.zip)

---

> *Note: This page is part of the official Godot Engine documentation. It is intended for developers who need a reference to the engine’s class inheritance hierarchy.*