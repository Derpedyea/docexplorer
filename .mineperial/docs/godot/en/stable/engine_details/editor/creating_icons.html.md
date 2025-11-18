# Editor icons

When a new class is created and exposed to scripting, the editor’s interface will display it with a default icon representing the base class it inherits from.  
In most cases, the default icon is sufficient, but you can provide a custom icon to give your class a distinct visual representation. This guide explains how to create and register editor icons for your own classes, plugins, or themes.

---

## 1. Where editor icons live

All editor icons are stored as **theme resources**.  
The default icon set is defined in the built‑in theme that ships with Godot.  
If you want to override a particular icon, you must:

1. Provide a new PNG (or SVG) image.
2. Register it with the theme under the appropriate key.

---

## 2. Naming conventions

For a class named `Foo`, Godot expects a texture resource with the key:

```
icon_<ClassName>
```

So for the `Foo` class you would use:

```
icon_Foo
```

The file must be named `Foo.png` (or `Foo.svg`) and placed in the theme’s `icons` folder.

---

## 3. Adding a custom icon

### 3.1 Create the image

* Size: 64 × 64 or 128 × 128 (the editor automatically scales it).
* Format: PNG with transparency (RGBA).  
  SVG is also accepted; the editor will rasterise it on load.

### 3.2 Place it in the theme

```
res://addons/your_plugin/icons/Foo.png
```

The path must be accessible in your project.  
If you’re creating an **add‑on plugin**, the icon should live inside the plugin’s directory.

### 3.3 Register the icon with the theme

In your plugin’s script (or in an autoload that runs on project start), call:

```gdscript
# Example for a custom class "Foo"
var icon_path = "res://addons/your_plugin/icons/Foo.png"
ProjectSettings.set_setting("theme/icon_Foo", icon_path)
```

This tells Godot to use your image whenever a `Foo` instance is displayed in the editor.

> **Tip**  
> If you want to override a built‑in icon (e.g. `TextureRect`), use the same key as the built‑in one – just make sure the new image is of the correct size and format.

### 3.4 Verify

Open the editor, create a node of your class, and the new icon will appear next to it in the Scene panel and in the Inspector.

---

## 4. Using a custom theme

Sometimes you’ll want to change many icons at once.  
Create a `Theme` resource (`res://theme.tres`) and set it as the editor’s default:

```
ProjectSettings.set_setting("theme/custom_theme", "res://theme.tres")
```

Inside the theme, assign the same `icon_<ClassName>` keys to your custom images.  
All nodes that use those icons will automatically pick up the new visuals.

---

## 5. Common pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| Icon does not appear | PNG file not loaded | Ensure the file path is correct and the image is in the `icons` folder. |
| Icon is too small | Image size < 64 px | Use at least 64 × 64 pixels; the editor will scale it. |
| Icon looks blurry | Using a non‑sRGB PNG | Make sure your PNG is in a standard color space and has the correct DPI settings. |

---

## 6. Summary

1. **Create** a PNG/SVG icon of 64 × 64 or 128 × 128.  
2. **Place** it in `res://addons/<plugin>/icons/`.  
3. **Register** it with the theme using the `icon_<ClassName>` key.  
4. **Reload** the editor (or restart Godot) to see the changes.

With these steps, you can give your custom classes a unique visual identity in the Godot editor and improve the overall usability of your projects.