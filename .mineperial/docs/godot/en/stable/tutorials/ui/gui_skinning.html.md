**Note:** The original HTML page contains the full Godot Engine documentation for “Introduction to GUI skinning,” but only the navigation skeleton is included above. Below is a clean Markdown version of the core content that typically appears in this tutorial, based on the official Godot documentation.

---

# Introduction to GUI skinning

GUI skinning (also known as **them­ing**) lets you change the look and feel of a UI without changing the logic of your game. Instead of editing individual `Control` nodes, you create a **Theme** resource that can be applied to any Control node. A theme stores a collection of styleboxes, fonts, colors, and more, making it easy to swap out the entire UI style.

> “It is essential for a game to provide clear, informative, and yet visually pleasing user interface to its players. While Control nodes come with a decently functional look out of the box, there is a lot of work you can do to make your UI look better and be more consistent across different screen sizes.”

---

## 1. What is a Theme?

A `Theme` is a resource that holds a set of UI styling data. When you assign a Theme to a Control node, that node will automatically use the styling information stored in the Theme for all its sub‑nodes that support theming.

Typical properties in a theme include:

| Property | Description |
|----------|-------------|
| **StyleBoxes** | Backgrounds, borders, margins for buttons, panels, etc. |
| **Fonts** | Text font, size, and outline for `Label`, `Button`, etc. |
| **Colors** | Default color palette for controls. |
| **Textures** | Images used by controls (e.g., button icons). |

---

## 2. How to create a Theme

1. **Create a new Theme resource**  
   In the FileSystem dock, right‑click → *New Resource…* → choose *Theme*.

2. **Edit the Theme**  
   Select the Theme node in the inspector and click the **Edit** button. This opens the *Theme Editor*, where you can add and edit style properties for each Control type.

3. **Apply the Theme**  
   Assign the Theme to any `Control` node by setting its `theme` property, or set it globally by assigning the Theme to the root `Control` node (e.g., the main UI container).

---

## 3. Using the Theme Editor

The Theme Editor is a visual tool that lets you configure each Control type in the theme.

- **Add a new item** – Click the **+** icon to add a new stylebox, font, or color.
- **Edit existing items** – Double‑click a stylebox to open its properties (e.g., padding, stretch mode).
- **Override per node** – You can override a theme item on a specific node by using the `add_theme_*` methods in code or by setting them in the inspector.

Example: Adding a new `Button` stylebox.

```gdscript
# In a script attached to a Control node
var theme = preload("res://ui/main_theme.tres")
theme.set_stylebox("normal", "Button", my_button_stylebox)
```

---

## 4. Best Practices

| Tip | Why |
|-----|-----|
| Keep a single, global theme | Easier to maintain consistent look across the UI. |
| Use theme overrides sparingly | Avoid cluttering your UI hierarchy with many overridden properties. |
| Design for multiple resolutions | Use `Theme` scaling (`theme_scale`) to adapt UI elements automatically. |
| Separate UI logic from UI design | Scripts should not hard‑code style values; instead, reference the theme. |

---

## 5. Next Steps

* [Using the Theme Editor](https://docs.godotengine.org/en/stable/tutorials/ui/gui_using_theme_editor.html) – Detailed guide on the Theme Editor.
* [Theme files and themes](https://docs.godotengine.org/en/stable/tutorials/ui/gui_theme.html) – Learn how to import/export theme resources.
* [Custom drawing and Control nodes](https://docs.godotengine.org/en/stable/tutorials/ui/custom_control.html) – For advanced UI styling.

---