# ItemList

**Inheritance hierarchy**

```
Object
└─ Node
   └─ CanvasItem
      └─ Control
         └─ ItemList
```

---

## Overview

`ItemList` is a control node that provides a vertical list of selectable items with support for multiple columns. Items can be added, removed, selected, and styled individually. This node is typically used for menus, inventories, or any situation requiring a list of options.

---

## Description

A vertical list of selectable items that can contain icons, text, and custom data. The list can be configured to allow single or multiple selection, reorder items, and respond to user interaction via signals.

---

## Core Functions

| Function | Description |
|----------|-------------|
| `add_item(text : String, icon : Texture2D = null, select : bool = false) → int` | Adds an item to the list, optionally with an icon and pre‑selection. Returns the index of the newly added item. |
| `add_icon_item(icon : Texture2D, select : bool = false) → int` | Adds an item containing only an icon. |
| `add_separator() → int` | Inserts a separator line in the list. |
| `add_text_item(text : String, select : bool = false) → int` | Adds an item containing only text. |
| `clear()` | Removes all items from the list. |
| `get_item_count() → int` | Returns the number of items. |
| `get_item_icon(index : int) → Texture2D` | Returns the icon of the specified item. |
| `get_item_text(index : int) → String` | Returns the text of the specified item. |
| `get_item_tooltip(index : int) → String` | Returns the tooltip of the specified item. |
| `get_item_metadata(index : int) → Variant` | Returns metadata attached to an item. |
| `get_selected()` | Returns an array of indices of selected items. |
| `is_item_checked(index : int) → bool` | Checks whether a checkbox item is checked. |
| `is_item_disabled(index : int) → bool` | Checks whether an item is disabled. |
| `is_item_visible(index : int) → bool` | Checks whether an item is visible. |
| `remove_item(index : int)` | Removes the item at the given index. |
| `select(index : int, focus : bool = false)` | Selects an item. |
| `select_all()` | Selects all items. |
| `set_item_icon(index : int, icon : Texture2D)` | Sets the icon of an item. |
| `set_item_text(index : int, text : String)` | Sets the text of an item. |
| `set_item_tooltip(index : int, tooltip : String)` | Sets the tooltip of an item. |
| `set_item_metadata(index : int, metadata : Variant)` | Sets metadata for an item. |
| `set_item_disabled(index : int, disabled : bool)` | Disables or enables an item. |
| `set_item_hidden(index : int, hidden : bool)` | Hides or shows an item. |
| `set_item_owner(index : int, owner : Node)` | Sets the owner for an item. |
| `set_item_as_button(index : int, button : bool)` | Turns an item into a button. |
| `set_item_button_pressed(index : int, pressed : bool)` | Sets the pressed state of a button item. |
| `set_item_pressed(index : int, pressed : bool)` | Sets whether an item is pressed (for checkboxes). |
| `set_item_checked(index : int, checked : bool)` | Sets whether a checkbox item is checked. |
| `set_item_color(index : int, color : Color)` | Sets the text color of an item. |
| `set_item_custom_minimum_size(index : int, size : Vector2)` | Sets a custom minimum size. |
| `set_item_custom_tooltip(index : int, tooltip : String)` | Sets a custom tooltip. |
| `set_item_custom_type(index : int, type : String)` | Sets a custom type name for an item. |
| `set_item_custom_metadata(index : int, metadata : Variant)` | Sets custom metadata. |
| `set_item_custom_color(index : int, color : Color)` | Sets a custom color. |

> **Note**: Many of the above methods have additional overloads for selecting by text or icon.

---

## Signals

| Signal | Description |
|--------|-------------|
| `item_selected(index)` | Emitted when an item is selected. |
| `item_activated(index)` | Emitted when an item is activated (e.g., double‑clicked or pressed). |
| `item_rmb_selected(index)` | Emitted on right‑click of an item. |
| `item_pressed(index)` | Emitted when an item is pressed. |
| `item_check_toggled(index, toggled)` | Emitted when a checkbox item changes state. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `h_separation : int` | int | 0 | Horizontal spacing between columns. |
| `h_scroll_enabled : bool` | bool | false | Whether horizontal scrolling is enabled. |
| `h_scroll_offset : int` | int | 0 | Current horizontal scroll offset. |
| `v_separation : int` | int | 0 | Vertical spacing between items. |
| `v_scroll_enabled : bool` | bool | false | Whether vertical scrolling is enabled. |
| `v_scroll_offset : int` | int | 0 | Current vertical scroll offset. |
| `select_mode : ItemSelectMode` | enum | SingleSelect | Mode controlling how many items can be selected. |
| `scroll_offset : Vector2` | Vector2 | `Vector2(0, 0)` | Current scroll offset. |
| `scrollable : bool` | bool | true | Enables scrolling when items exceed visible area. |
| `stretch : bool` | bool | false | Whether items should stretch to fill width. |
| `fixed_icon_size : Vector2` | Vector2 | `Vector2(0, 0)` | Force all icons to this size. |
| `fixed_text_size : int` | int | 0 | Force all text to this size. |
| `fixed_icon_offset : int` | int | 0 | Offset for icons. |
| `fixed_text_offset : int` | int | 0 | Offset for text. |
| `fixed_text_align : TextAlignment` | enum | Left | Text alignment. |

---

## Usage Example (GDScript)

```gdscript
@tool
extends ItemList

func _ready():
    # Add some items
    add_item("Option 1")
    add_item("Option 2", preload("res://icon.png"))
    add_item("Option 3")
    
    # Connect signals
    connect("item_selected", Callable(self, "_on_item_selected"))
    connect("item_activated", Callable(self, "_on_item_activated"))

func _on_item_selected(index):
    print("Selected:", get_item_text(index))

func _on_item_activated(index):
    print("Activated:", get_item_text(index))
```

---

## Resources

- [Godot Docs – ItemList](https://docs.godotengine.org/en/stable/classes/class_itemlist.html)

---