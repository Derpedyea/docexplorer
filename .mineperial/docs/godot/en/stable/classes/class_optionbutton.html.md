**OptionButton** – Godot Engine (stable) documentation  
========================================================

> **Inherits**:  
> `Button` → `BaseButton` → `Control` → `CanvasItem` → `Node` → `Object`

A button that brings up a dropdown list of selectable options when pressed.

---

### Description
`OptionButton` is a GUI widget that allows the user to choose from a list of predefined items.  
When the button is pressed, a menu drops down and the user can select an item.  
The selected item is shown on the button itself, and signals can be used to react to
changes.

---

## Signals
| Signal | Arguments | Description |
|--------|-----------|-------------|
| `item_selected(int index)` | `index` – The index of the selected item. | Emitted when an item is selected. |
| `item_focused(int index)` | `index` – The index of the focused item. | Emitted when an item receives keyboard focus. |
| `pressed()` | – | (Inherited from `Button`) Emitted when the button is pressed. |

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `hint_tooltip` | `String` | `""` | Tooltip text shown when hovering over the button. |
| `max_height` | `int` | `0` | Maximum height of the dropdown list. |
| `focus_mode` | `int` | `FOCUS_CLICK` | Focus mode of the button. |
| `item_count` | `int` | `0` | Read‑only property: number of items in the list. |
| `text` | `String` | `""` | The text displayed on the button (usually the selected item). |
| `visible` | `bool` | `true` | Visibility of the button. |
| `editable` | `bool` | `false` | Allows the user to edit the text of the button (since Godot 4.0). |
| `selectable` | `bool` | `true` | Whether the button can be selected. |
| `theme_override_constants` | `Dictionary` | – | Dictionary of theme constants to override. |
| `theme_override_colors` | `Dictionary` | – | Dictionary of theme colors to override. |
| `theme_override_font_sizes` | `Dictionary` | – | Dictionary of theme font sizes to override. |

---

## Methods

> All methods are public unless otherwise indicated.

| Method | Return | Arguments | Description |
|--------|--------|-----------|-------------|
| `add_item(String text, int id = 0)` | `void` | `text`, `id` | Adds an item to the end of the list. |
| `add_icon_item(Texture2D icon, String text, int id = 0)` | `void` | `icon`, `text`, `id` | Adds an item with an icon. |
| `add_separator()` | `void` | – | Adds a separator to the list. |
| `clear()` | `void` | – | Removes all items. |
| `get_item_index(int id)` | `int` | `id` | Returns the index of the item with the given ID. |
| `get_item_id(int index)` | `int` | `index` | Returns the ID of the item at the given index. |
| `get_item_text(int index)` | `String` | `index` | Returns the text of the item at the given index. |
| `get_item_tooltip(int index)` | `String` | `index` | Returns the tooltip of the item at the given index. |
| `get_item_icon(int index)` | `Texture2D` | `index` | Returns the icon of the item at the given index. |
| `get_item_count()` | `int` | – | Returns the number of items. |
| `get_selected()` | `int` | – | Returns the index of the selected item. |
| `get_selected_id()` | `int` | – | Returns the ID of the selected item. |
| `get_selected_text()` | `String` | – | Returns the text of the selected item. |
| `remove_item(int index)` | `void` | `index` | Removes the item at the given index. |
| `set_item_id(int index, int id)` | `void` | `index`, `id` | Sets the ID for a specific item. |
| `set_item_text(int index, String text)` | `void` | `index`, `text` | Sets the text for a specific item. |
| `set_item_tooltip(int index, String tooltip)` | `void` | `index`, `tooltip` | Sets the tooltip for a specific item. |
| `set_item_icon(int index, Texture2D icon)` | `void` | `index`, `icon` | Sets the icon for a specific item. |
| `set_selected(int index)` | `void` | `index` | Selects the item at the specified index. |
| `set_selected_id(int id)` | `void` | `id` | Selects the item with the specified ID. |
| `get_popup()` | `Popup` | – | Returns the internal popup menu object. |
| `set_flat(bool flat)` | `void` | `flat` | Makes the button flat (no bevel). |
| `get_flat()` | `bool` | – | Returns whether the button is flat. |

---

## Example Usage

```gdscript
# Add a few items
$OptionButton.add_item("Easy")
$OptionButton.add_item("Medium")
$OptionButton.add_item("Hard")

# Connect the signal
$OptionButton.connect("item_selected", self, "_on_option_selected")

func _on_option_selected(index):
    var difficulty = $OptionButton.get_item_text(index)
    print("Selected difficulty: ", difficulty)
```

---

## See Also

* [Button](../classes/class_button.html)
* [Control](../classes/class_control.html)
* [PopupMenu](../classes/class_popupmenu.html)

---