**PopupMenu**  
*Godot Engine – Class Reference*  

---

### Inheritance

```
PopupMenu
└─ Popup
   └─ Window
      └─ Viewport
         └─ Node
            └─ Object
```

---

### Description  
A `PopupMenu` is a modal window used to display a list of options.  
It is commonly used for context menus, tool‑tips, or any situation where a user
needs to make a choice from a small set of items.

---

### Overview  

| Feature | Details |
|---------|---------|
| **Modal** | The menu blocks input to other UI elements until it is dismissed. |
| **Auto‑positioning** | Appears relative to the mouse or a reference node. |
| **Keyboard navigation** | Supports arrow keys, `Enter` to select, and `Esc` to close. |
| **Signals** | `id_pressed(id)`, `id_exited(id)`, `id_hovered(id)`, etc. |

---

### Typical usage example (GDScript)

```gdscript
# Assume this script is attached to a Button node
func _ready() -> void:
    var menu := PopupMenu.new()
    add_child(menu)

    menu.add_item("Option 1", 1)
    menu.add_item("Option 2", 2)
    menu.add_separator()
    menu.add_item("Quit", 3)

    menu.connect("id_pressed", self, "_on_menu_item_pressed")

func _on_button_pressed() -> void:
    # Show the popup below the button
    popup_menu.popup_(get_global_rect().position + Vector2(0, get_size().y))

func _on_menu_item_pressed(id: int) -> void:
    match id:
        1:
            print("Option 1 selected")
        2:
            print("Option 2 selected")
        3:
            get_tree().quit()
```

---

### Common API

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `max_width` | `int` | Maximum width of the popup; 0 means unlimited. |
| `separator_color` | `Color` | Color of separator lines. |
| `theme_override_style` | `StyleBox` | Override style for the menu. |

#### Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `add_item(text, id = 0)` | `void` | Adds an item with the given `id`. |
| `add_icon_item(icon, text, id = 0)` | `void` | Adds an item with an icon. |
| `add_separator()` | `void` | Adds a separator line. |
| `add_check_item(text, id = 0)` | `void` | Adds a checkable item. |
| `add_radio_check_item(text, id = 0)` | `void` | Adds a radio‑check item. |
| `get_item_id(index)` | `int` | Returns the ID of an item at `index`. |
| `set_item_disabled(index, disabled)` | `void` | Disables an item. |
| `set_item_checked(index, checked)` | `void` | Toggles a checkable item. |
| `popup_()` | `void` | Displays the menu at the current mouse position. |
| `popup_rect(rect)` | `void` | Displays the menu at `rect`. |

#### Signals

| Signal | Description |
|--------|-------------|
| `id_pressed(id)` | Emitted when an item is selected. |
| `id_exited(id)` | Emitted when the mouse exits an item. |
| `id_hovered(id)` | Emitted when the mouse hovers over an item. |

---

> **Note**: For more advanced usage, consult the full Godot class reference
> [online](https://docs.godotengine.org/en/stable/classes/class_popupmenu.html).

---