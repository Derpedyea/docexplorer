# Theme type variations

In Godot the visual appearance of UI controls is defined by **Themes**.  
A theme can contain style data for every Control‑derived node type (e.g. `Button`, `Label`, `CheckBox`, etc.).  
Sometimes you want a particular instance of a control to look different from the global theme – that’s when **theme type variations** come into play.

---

## 1. What are theme type variations?

A *type variation* is a named copy of the theme’s data for a single Control type.  
When you assign a variation to a node, only the properties of that node’s type are overridden; the rest of the theme stays unchanged.

Typical use cases:

* Different button styles (primary, secondary, danger) without creating several themes.
* A custom “dark mode” variant that only touches the relevant controls.
* Quick styling of a dialog or a HUD without altering the base theme.

---

## 2. How to create a theme type variation

1. **Create a Theme resource**  
   *In the FileSystem dock → Right‑click → New Resource → Theme*.

2. **Add a type variation**  
   *In the Inspector of the Theme → Click the “Add Type” button.*  
   *Give the variation a name, e.g. `PrimaryButton`.*

3. **Configure the variation**  
   *Select the newly added type (e.g., `Button`) and set the style properties you need (texture, font, color, etc.).*  
   *You can also override only specific properties, leaving others to fall back to the base theme.*

4. **Assign the variation to a Control node**  
   *Select the Control in the scene.*  
   *In the Inspector → `Theme Type Variation` → choose the variation you created.*

---

## 3. Example

Assume you have a theme with a generic button style.  
You want one button to look “danger” (red) while all others stay default.

```text
Theme
├─ Button (default style)
└─ PrimaryButton (variation)
     └─ Font Color: #ff0000
```

```gdscript
# Assign the variation in code
var btn = $MyButton
btn.theme_type_variation = "PrimaryButton"
```

Only `MyButton` will use the `PrimaryButton` style; all other `Button` instances use the default style.

---

## 4. Important notes

| Item | Detail |
|------|--------|
| **Scope** | Variations are local to the theme resource, not to the project. |
| **Inheritance** | Variations inherit from the base theme; you can override only the changed properties. |
| **Naming** | Use clear names; the string matches the `theme_type_variation` property. |
| **Changing at runtime** | You can switch a node’s variation during gameplay if you need dynamic styling. |
| **Fallback** | If a variation is not set, the node falls back to the default style for its type. |

---

## 5. Practical use‑cases

| Use‑case | How to apply |
|----------|--------------|
| **Modal dialog** | Create a `Dialog` variation with a thicker border. |
| **List of items** | Use a `ListItem` variation for selected rows. |
| **Dynamic color themes** | Swap between `LightMode`, `DarkMode` variations for a whole UI. |
| **Custom controls** | If you write your own Control subclass, give it its own variation for easier styling. |

---

## 6. Further reading

* **Theme editor** – See the “Using the theme editor” tutorial for visual manipulation of type variations.  
* **Fonts** – The “Using Fonts” guide explains how to override font-related properties in a variation.  

---