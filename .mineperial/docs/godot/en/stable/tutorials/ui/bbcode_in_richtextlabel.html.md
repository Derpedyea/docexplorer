**BBCode in RichTextLabel**

> *Godot Engine – Stable documentation – Tutorials – UI – BBCode in RichTextLabel*  
> URL: https://docs.godotengine.org/en/stable/tutorials/ui/bbcode_in_richtextlabel.html

---

## Overview

`RichTextLabel` is a powerful node that lets you display rich text in Godot.  
Unlike the plain `Label` node, it supports BBCode tags which allow you to format text, embed images, hyperlinks, and more—**all on a per‑character basis**.

This guide walks you through:

- What BBCode is and how it works in Godot
- The built‑in tags and their syntax
- Customizing and extending BBCode
- Common pitfalls and best practices

---

## 1. What is BBCode?

BBCode (Bulletin Board Code) is a lightweight markup language that uses brackets to define formatting.  
In Godot, `RichTextLabel` parses BBCode and renders it accordingly.

> **Note**: `RichTextLabel` automatically escapes unsafe characters.  
> Use `bbcode_text` property to set text directly, or `append_text()` to add at runtime.

---

## 2. Built‑in BBCode tags

Below is a reference of the most frequently used BBCode tags in Godot:

| Tag | Syntax | Description |
|-----|--------|-------------|
| **Bold** | `[b]text[/b]` | Makes text bold |
| **Italics** | `[i]text[/i]` | Italicises text |
| **Underline** | `[u]text[/u]` | Underlines text |
| **Color** | `[color=hex]text[/color]` | Changes text colour. `hex` may be a hex string (`#ff0000`) or a named colour (`red`) |
| **Size** | `[size=number]text[/size]` | Sets the font size relative to the label’s default font |
| **Font** | `[font=path]text[/font]` | Uses a custom font resource (`PackedFont` or `DynamicFont`) |
| **Center / Align** | `[center]text[/center]` or `[align=left|center|right|justified]text[/align]` | Aligns the block of text |
| **Bullet List** | `[list]` + `[*]item` + `[/list]` | Creates a bullet list |
| **Numbered List** | `[list=1]` + `[*]item` + `[/list]` | Creates a numbered list |
| **Image** | `[img]image_path[/img]` | Displays an image. `image_path` can be a relative or absolute path |
| **URL** | `[url=link]text[/url]` | Creates a clickable hyperlink |
| **Font Size** | `[font=path][size=number]text[/size][/font]` | Combine font and size |
| **Custom Tags** | `[mytag]text[/mytag]` | See the **Custom BBCode** section below |

> **Tip**: When using BBCode in a `Label` node, you must enable the **Use BBCode** property in the Inspector.

---

## 3. Using BBCode in a script

```gdscript
# Assuming `rich_label` is a RichTextLabel node

# 1. Setting the whole text
rich_label.bbcode_text = "[center][b]Welcome to Godot![/b][/center]"

# 2. Appending text dynamically
rich_label.append_bbcode("[color=blue]Blue text[/color]\n")
rich_label.append_bbcode("[i]Italic line[/i]")

# 3. Using a custom font
var custom_font = preload("res://fonts/MyFont.tres")
rich_label.add_font_override("font", custom_font)
```

---

## 4. Custom BBCode tags

You can extend `RichTextLabel` to recognise new tags:

```gdscript
class MyRichTextLabel:
    extends RichTextLabel

    func _init():
        # Register a custom tag
        add_custom_bbcode("[mycolor=red]text[/mycolor]")

    func bbcode_process(tag, param):
        if tag == "mycolor":
            push_color(Color(param))
```

> **Caveat**: Custom tags are limited to the functionality exposed by `RichTextLabel`. For more complex rendering, consider using a `Control` node and custom drawing.

---

## 5. Common issues & troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| BBCode tags not rendered | `Use BBCode` property not checked | Enable `Use BBCode` in Inspector or set `bbcode_enabled = true` in script |
| Images not displaying | Wrong path or missing file | Verify path is relative to project root and the image exists |
| Color not applied | Wrong colour format | Use hex (`#ff00ff`) or a valid named colour |

---

## 6. Resources

- **Godot Docs – RichTextLabel**: https://docs.godotengine.org/en/stable/classes/class_richtextlabel.html  
- **BBCode Reference**: https://docs.godotengine.org/en/stable/tutorials/ui/bbcode_in_richtextlabel.html#bbcode-reference

---

*End of tutorial.*