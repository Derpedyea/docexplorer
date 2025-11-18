**Tree** – Godot Engine (stable) documentation

> *Class reference page for the `Tree` control node.*

---

## Inheritance hierarchy

```
Object
 └── Node
     └── CanvasItem
         └── Control
             └── Tree
```

---

## Description

`Tree` is a GUI control used to display a hierarchy of `TreeItem` nodes.  
It is typically used to represent a file system, a scene tree, or any
other hierarchical data in a scrollable, expandable list.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `item_selected` | `TreeItem item` | Emitted when a tree item is selected. |
| `item_activated` | `TreeItem item` | Emitted when an item is double‑clicked or pressed Enter. |
| `item_collapsed` | `TreeItem item` | Emitted when an item is collapsed. |
| `item_expanded` | `TreeItem item` | Emitted when an item is expanded. |
| `item_edited` | `TreeItem item` | Emitted when an item is edited. |
| `button_pressed` | `TreeItem item, int button_index` | Emitted when a button inside a tree item is pressed. |
| `column_selected` | `int column` | Emitted when a column header is clicked. |
| `column_resized` | `int column, int new_width` | Emitted when a column is resized. |
| `custom_signal_name` | *var* | … |

*(Signal list may contain more custom signals – refer to the online
reference for the complete set.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `columns` | `int` | `1` | Number of columns in the tree. |
| `editable` | `bool` | `false` | Whether items in the tree are editable. |
| `expand_all` | `bool` | `false` | Whether all items should be expanded by default. |
| `hide_root` | `bool` | `false` | Hide the root item. |
| `show_root` | `bool` | `true` | Show the root item. |
| `theme_override_icon` | `Texture` | `null` | Custom icon for items. |
| `theme_override_color` | `Color` | `null` | Custom color for items. |
| `theme_override_font` | `Font` | `null` | Custom font. |
| `theme_override_font_size` | `int` | `0` | Custom font size. |
| `v_scroll_mode` | `int` | `SCROLL_MODE_DISABLED` | Scroll mode. |
| `h_scroll_mode` | `int` | `SCROLL_MODE_DISABLED` | Horizontal scroll mode. |
| `root` | `TreeItem` | `null` | Root item of the tree. |

---

## Methods

> **TreeItem** is the internal item type used by the `Tree` control.  
> Most tree operations are performed on `TreeItem` objects.

| Method | Signature | Description |
|--------|-----------|-------------|
| `create_item` | `TreeItem create_item(TreeItem parent=null)` | Creates a new child item under `parent`. |
| `clear` | `void clear()` | Removes all items from the tree. |
| `get_selected` | `TreeItem get_selected()` | Returns the currently selected item. |
| `get_selected_id` | `int get_selected_id()` | Returns the ID of the selected item. |
| `get_root` | `TreeItem get_root()` | Returns the root item. |
| `get_selected_item` | `TreeItem get_selected_item()` | Alias for `get_selected()`. |
| `get_item_at_position` | `TreeItem get_item_at_position(Vector2 position)` | Returns the item under a screen position. |
| `set_hide_root` | `void set_hide_root(bool hide)` | Hide the root item. |
| `set_columns` | `void set_columns(int columns)` | Set number of columns. |
| `set_custom_minimum_size` | `void set_custom_minimum_size(Vector2 size)` | Sets the minimum size. |
| `set_item_custom_bg_color` | `void set_item_custom_bg_color(TreeItem item, int column, Color color)` | Custom background color for a cell. |
| `set_item_icon` | `void set_item_icon(TreeItem item, int column, Texture tex)` | Set icon. |
| `set_item_text` | `void set_item_text(TreeItem item, int column, String text)` | Set text. |
| `set_item_tooltip` | `void set_item_tooltip(TreeItem item, int column, String tooltip)` | Set tooltip. |
| `set_item_disabled` | `void set_item_disabled(TreeItem item, bool disabled)` | Disable item. |
| `set_item_custom_color` | `void set_item_custom_color(TreeItem item, int column, Color color)` | Set custom color. |
| `set_item_editable` | `void set_item_editable(TreeItem item, bool editable)` | Make item editable. |
| `set_item_custom_bg_color` | `void set_item_custom_bg_color(TreeItem item, int column, Color color)` | (duplicate?) |
| `set_item_metadata` | `void set_item_metadata(TreeItem item, int column, Variant meta)` | Set metadata. |
| `set_item_selectable` | `void set_item_selectable(TreeItem item, bool selectable)` | Make selectable. |
| `set_item_button_pressed` | `void set_item_button_pressed(TreeItem item, int column, int button_index, bool pressed)` | Press a button in the cell. |
| `set_item_collapsed` | `void set_item_collapsed(TreeItem item, bool collapsed)` | Collapse/expand an item. |
| `set_item_activated` | `void set_item_activated(TreeItem item)` | Programmatically activate an item. |
| `set_item_custom_tooltip` | `void set_item_custom_tooltip(TreeItem item, int column, String tooltip)` | Custom tooltip. |
| `set_item_custom_bg_color` | `void set_item_custom_bg_color(TreeItem item, int column, Color color)` | (duplicate) |
| `set_item_meta` | `void set_item_meta(TreeItem item, Variant key, Variant value)` | Set metadata key/value. |
| `set_item_meta` | `void set_item_meta(TreeItem item, int column, Variant key, Variant value)` | |
| `set_item_custom_bg_color` | `void set_item_custom_bg_color(TreeItem item, int column, Color color)` | |

*(The list is not exhaustive; see the online reference for all methods.)*

---

## Common Usage

```gdscript
var tree = Tree.new()
add_child(tree)
tree.set_columns(2)
tree.set_hide_root(false)

var root = tree.create_item()
root.set_text(0, "Root")

var child1 = tree.create_item(root)
child1.set_text(0, "Child 1")
child1.set_icon(0, preload("res://icon.png"))
child1.set_selected(true)
```

The tree can also be used in the editor via the `Tree` node in a scene,
and can be populated dynamically using signals and callbacks.

---

## See Also

* [`TreeItem`](../classes/class_treeitem.html) – The node that represents a single item.
* [Control](../classes/class_control.html) – Base class for UI elements.
* [CanvasItem](../classes/class_canvasitem.html) – Base class for 2D rendering.

--- 

**End of Tree class reference.**