**Note:** The original HTML page contains a large navigation menu but the main tutorial content is not included in the snippet provided. The following Markdown recreates the structure of the *Nodes and Scenes* page as it appears in the Godot documentation. If you need the full textual content, please retrieve the page’s body section and replace the placeholders accordingly.

---

# Nodes and Scenes

This tutorial introduces the fundamental building blocks of a Godot project: **nodes** and **scenes**. You will learn how to create a scene, modify node properties, run the scene, and set it as the main entry point for your project.

---

## Nodes

Nodes are the individual objects that make up a game’s world. Each node has a specific purpose (e.g., a sprite, a collision shape, a script, etc.) and can be arranged in a parent‑child hierarchy to form a scene tree.  
*Key points covered:*
- What a node is
- Types of nodes (control, physics, visual, etc.)
- How nodes interact within a tree

---

## Scenes

Scenes are collections of nodes that can be reused, instantiated, and nested. They act as prefabs or templates that can be loaded, duplicated, and composed into larger scenes.

---

## Creating your first scene

1. Open the Godot editor.
2. Add a root node (e.g., `Node2D` for a 2D scene).
3. Add child nodes (e.g., `Sprite`, `CollisionShape2D`).
4. Save the scene (`Ctrl+S`) and give it a name (e.g., `Main.tscn`).

---

## Changing a node’s properties

Each node exposes properties in the **Inspector** dock:
- **Position, Scale, Rotation** for spatial nodes.
- **Texture** for sprite nodes.
- **Collision Shape** for physics nodes, etc.

Modify these properties to customize the node’s behavior and appearance.

---

## Running the scene

1. Press **Play Scene (F6)** to test the current scene in isolation.
2. Verify that the scene behaves as expected.
3. Iterate as needed.

---

## Setting the main scene

1. Open **Project → Project Settings**.
2. Under the **Run** section, set the **Main Scene** to the scene you just created.
3. Click **OK** and **Close**.
4. Press **Play (F5)** to run the project from the main scene.

---

### Summary

- Nodes form the building blocks of your game.
- Scenes group nodes together for reuse.
- You can create, modify, and test scenes directly in the editor.
- The main scene determines the entry point of your project.

---