**Using Fonts**  
*Godot Engine documentation – stable*

---

Godot lets you set specific fonts for any UI node. You can define a font in three different places:

1. **Theme editor** – set a default font for a node type or a single instance.  
2. **In code** – override a font programmatically at runtime.  
3. **In the inspector** – assign a font to a node’s `Custom Font` property.

---

## 1. The Theme Editor

The Theme system lets you define a set of fonts (and other UI properties) that can be reused throughout your project.

1. Open the *Inspector* for a control node (e.g. `Label`, `Button`, etc.).  
2. In the **Theme Overrides** section, find the **Fonts** field.  
3. Click **New DynamicFont** or **New BitmapFont** to create a new font resource.  
4. Drag the font file into the *Font Data* slot.  
5. (Optional) Adjust **Size**, **Outline Width** and **Color**.

> **Tip:** If you want the same font everywhere, add it to a *Theme* resource and apply that theme to a `CanvasLayer` or the root of your scene.

---

## 2. Setting a Font in Code

You can change fonts on the fly using GDScript, C# or any other supported language.

```gdscript
# Load the font file
var my_font = DynamicFont.new()
my_font.font_data = load("res://assets/fonts/MyFont.tres")
my_font.size = 24

# Apply to a Label
var label = $Label
label.add_font_override("font", my_font)

# Or to all children of a Control node
for child in get_children():
    if child is Label:
        child.add_font_override("font", my_font)
```

**Bitmap Fonts**

```gdscript
var bitmap = BitmapFont.new()
bitmap.add_texture(load("res://assets/fonts/bitmap_font.png"))
bitmap.add_region(0, Rect2(0, 0, 16, 16), 0)  # example for character 0

var label = $Label
label.add_font_override("font", bitmap)
```

---

## 3. Assigning a Font in the Inspector

1. Select the control node.  
2. Expand the **Theme Overrides** → **Fonts** section.  
3. Drag and drop a `.tres` font resource into the **Font** field.  
4. For dynamic fonts you can also tweak **Size**, **Outline** and **Color** directly in the inspector.

---

## 4. Common Use‑Cases

| Scenario | Recommended Method | Why? |
|----------|---------------------|------|
| *Project‑wide default* | Theme resource | Centralised change, no code. |
| *Scene‑specific* | Inspector override | Simple, no scripting. |
| *Dynamic at runtime* | Code override | Switch fonts based on locale, theme, etc. |

---

## 5. Example: Switching Fonts on Language Change

```gdscript
func _ready():
    var locale = OS.get_locale_language()
    var font_path = "res://fonts/latin.tres" if locale == "en" else "res://fonts/cyrillic.tres"
    var font = load(font_path)
    $Label.add_font_override("font", font)
```

---

### Resources

- [DynamicFont](https://docs.godotengine.org/en/stable/classes/class_dynamicfont.html) – used for TrueType/OpenType fonts.  
- [BitmapFont](https://docs.godotengine.org/en/stable/classes/class_bitmapfont.html) – for pixel‑style or pre‑rendered glyphs.  

---

> **Further Reading**  
> - [Theme type variations](../gui_theme_type_variations.html)  
> - [BBCode in RichTextLabel](../bbcode_in_richtextlabel.html)  

---