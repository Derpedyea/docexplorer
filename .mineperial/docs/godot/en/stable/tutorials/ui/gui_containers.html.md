**Note:** The original HTML source is very large and includes the full site navigation. Below is a concise, well‑structured Markdown rendering of the core *Using Containers* article from the Godot Engine documentation (stable).  
Only the main content of the tutorial has been translated; navigation and boilerplate elements have been omitted for clarity.

---

# Using Containers

In Godot’s UI system, *Container* nodes automatically arrange and resize their child Control nodes.  
Containers are especially useful when you need your UI to adapt to different screen sizes, aspect ratios, or dynamic content.

> **Tip** – If you find that a container isn’t behaving as expected, double‑check the `rect_min_size`, `rect_pivot_offset`, and `anchor_*` properties of its children.

---

## 1. The container family

| Node | What it does | Typical use case |
|------|--------------|------------------|
| `HBoxContainer` | Lays out children horizontally, left‑to‑right. | Toolbar, menu bar |
| `VBoxContainer` | Lays out children vertically, top‑to‑bottom. | Sidebar, settings panel |
| `GridContainer` | Places children in a grid of equal‑sized cells. | Inventory grid, icon atlas |
| `MarginContainer` | Adds a margin around its single child. | Padding around a label |
| `CenterContainer` | Centers its single child. | Splash screen, modal dialog |
| `AspectRatioContainer` | Scales its child to keep a specified aspect ratio. | Video player, viewport preview |

Each container is a subclass of `Control`, so you can set `anchors` and `pivot` for fine‑grained control, but the container takes care of most layout details.

---

## 2. Basic usage pattern

```text
Window
 └─ VBoxContainer
      ├─ HBoxContainer
      │    ├─ Button (Label: "OK")
      │    └─ Button (Label: "Cancel")
      └─ TextureRect (Image: "logo.png")
```

In the above example, the `VBoxContainer` automatically arranges its two children (the `HBoxContainer` and the `TextureRect`) vertically.  
The `HBoxContainer` then arranges its two buttons horizontally.

*Key points*

- **Only one child** is allowed for `MarginContainer`, `CenterContainer`, and `AspectRatioContainer`.  
- Containers **ignore** any child that has `rect_size` set to a specific value unless that child has a `size_flags` of `SIZE_EXPAND_FILL` (the default).

---

## 3. Size flags

Controls can be configured to respond to container sizing with the **size flags**:

| Flag | Effect |
|------|--------|
| `SIZE_EXPAND` | Request more space if available |
| `SIZE_SHRINK_CENTER` | Shrink toward the center when space is limited |
| `SIZE_SHRINK_BEGIN` | Shrink from the start side |
| `SIZE_SHRINK_END` | Shrink from the end side |
| `SIZE_FILL` | Force child to fill available space |

```gdscript
# Example: Make a label expand horizontally but stay centered vertically
var label = Label.new()
label.text = "Hello World"
label.size_flags_horizontal = Control.SIZE_EXPAND | Control.SIZE_FILL
label.size_flags_vertical = Control.SIZE_SHRINK_CENTER
```

---

## 4. Margins & Padding

You can adjust padding directly in the container’s inspector:

- **MarginContainer** – set `margin_left`, `margin_right`, `margin_top`, `margin_bottom`.  
- **VBoxContainer / HBoxContainer** – set `separation` to space out children.  
- **GridContainer** – set `cell_size` and `separation` to define cell dimensions.

---

## 5. Example: A simple dialog

```text
MarginContainer
 └─ VBoxContainer
      ├─ Label (text: "Enter your name:")
      ├─ LineEdit
      ├─ HBoxContainer
      │    ├─ Button (text: "OK")
      │    └─ Button (text: "Cancel")
```

*Script (attached to the dialog node)*

```gdscript
func _on_ok_pressed():
    print("Name entered: ", $LineEdit.text)
    hide()

func _on_cancel_pressed():
    hide()
```

---

## 6. Common pitfalls

| Problem | Fix |
|---------|-----|
| Child control disappears when container resizes | Ensure child has a `size_flags` that allows expansion or use `RectMinSize` to set a minimum size |
| Overlapping controls | Avoid nesting multiple containers that each use expansion flags on the same axis |
| Unwanted stretch | Set `stretch_ratio` on the child if you want it to take a proportional amount of space |

---

## 7. Advanced layout tricks

### 7.1. Anchored Control in a container

Even when inside a container, you can use anchors for fine‑grained alignment:

```gdscript
var button = Button.new()
button.text = "Fullscreen"
button.anchor_right = 1.0
button.anchor_bottom = 1.0
button.margin_right = -10
button.margin_bottom = -10
add_child(button)
```

### 7.2. Combining containers

For more complex layouts, nest containers:

```text
VBoxContainer
 ├─ HBoxContainer
 │    ├─ VBoxContainer
 │    │    ├─ Label
 │    │    └─ Button
 │    └─ TextureRect
 └─ GridContainer
      ├─ Button
      ├─ Button
      ├─ Button
      └─ Button
```

---

## 8. References

- **Control Class** – [Godot Docs](https://docs.godotengine.org/en/stable/classes/class_control.html)  
- **Containers Overview** – [Godot Docs](https://docs.godotengine.org/en/stable/tutorials/ui/gui_containers.html)  
- **UI Tutorial** – [Godot Docs](https://docs.godotengine.org/en/stable/tutorials/ui.html)

---

> **Pro tip** – For highly dynamic UIs, consider using a `GridContainer` with `size_flags_horizontal/vertical = SIZE_EXPAND` on each child; this will automatically keep a consistent grid as the window size changes.