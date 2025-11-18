# TabBar

> **Godot Engine 4.x** – Class Reference  
> Inherits: `Control` → `CanvasItem` → `Node` → `Object`

A **TabBar** is a control that presents a horizontal bar of tabs, similar to a `TabContainer`, but without the container functionality. It is typically used to switch between different sections of a UI or to trigger actions when a tab is selected.

---

## Overview

| Feature | Description |
|---------|-------------|
| **Inheritance** | `Control` → `CanvasItem` → `Node` |
| **Purpose** | Provides a simple, lightweight tab bar UI component. |
| **Use cases** | Switching scenes or panels, implementing a tabbed menu, creating custom toolbar tabs. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tab_width` | `int` | `-1` (auto) | Width of each tab. If negative, the tab width is determined automatically. |
| `tab_min_width` | `int` | `0` | Minimum width of a tab. |
| `tab_alignment` | `int` (`LEFT`, `CENTER`, `RIGHT`) | `LEFT` | Alignment of tabs within the bar. |
| `tab_close_button_visible` | `bool` | `false` | Whether each tab shows a close button. |
| `tab_close_button_pressed` | `bool` | `false` | State of the close button on the currently selected tab. |
| `tabs_rearrange_enabled` | `bool` | `false` | If true, the user can drag and drop tabs to rearrange them. |

> **Note:** All properties are exposed in the Inspector and can be edited at run time via code.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `tab_changed(int tab)` | `tab` – index of the new current tab | Emitted when the current tab changes. |
| `tab_pressed(int tab)` | `tab` – index of the pressed tab | Emitted when a tab is pressed. |
| `tab_selected(int tab)` | `tab` – index of the selected tab | Emitted when a tab is selected by a user or via code. |
| `tab_deselected(int tab)` | `tab` – index of the previously selected tab | Emitted when a tab is deselected. |
| `tab_close_pressed(int tab)` | `tab` – index of the tab whose close button was pressed | Emitted when the user clicks a tab’s close button. |

---

## Methods

> All methods are defined in C++ but can be called from GDScript, C#, and GDExtension.

| Method | Signature | Description |
|--------|-----------|-------------|
| `int get_tab_count() const` | Returns the number of tabs. |
| `int get_tab_width(int index) const` | Returns the width of a specific tab. |
| `int get_tab_min_width(int index) const` | Returns the minimum width of a specific tab. |
| `String get_tab_text(int index) const` | Returns the text label of the tab. |
| `Icon get_tab_icon(int index) const` | Returns the icon assigned to the tab. |
| `bool is_tab_disabled(int index) const` | Returns whether the tab is disabled. |
| `int get_current_tab() const` | Returns the index of the currently selected tab. |
| `bool has_tab_close_button(int index) const` | Returns whether a close button is visible for the tab. |
| `int add_tab(String text, Icon icon = null)` | Adds a new tab. Returns its index. |
| `void remove_tab(int index)` | Removes a tab at the given index. |
| `void set_tab_text(int index, String text)` | Sets the label of a tab. |
| `void set_tab_icon(int index, Icon icon)` | Sets the icon of a tab. |
| `void set_tab_width(int index, int width)` | Sets the width of a tab. |
| `void set_tab_min_width(int index, int width)` | Sets the minimum width of a tab. |
| `void set_tab_disabled(int index, bool disabled)` | Disables or enables a tab. |
| `void set_current_tab(int index)` | Sets the current tab by index. |
| `void set_tab_alignment(int alignment)` | Sets the alignment of the tab bar. |
| `void set_tab_close_button_visible(bool visible)` | Toggles the close button for all tabs. |
| `void set_tab_rearrange_enabled(bool enabled)` | Enables or disables tab rearranging via drag‑and‑drop. |

> **Example (GDScript)**

```gdscript
@onready var tabbar = $TabBar

func _ready():
    tabbar.add_tab("First", preload("res://icon1.png"))
    tabbar.add_tab("Second", preload("res://icon2.png"))
    tabbar.connect("tab_changed", Callable(self, "_on_tab_changed"))

func _on_tab_changed(index):
    print("Selected tab index: ", index)
```

---

## Usage Tips

- **Dynamic tabs:** Add or remove tabs during runtime to reflect changing UI state (e.g., opening a new document in a tabbed editor).
- **Close buttons:** Set `tab_close_button_visible` to `true` and connect to `tab_close_pressed` if you want users to close tabs.
- **Rearranging tabs:** If you need an editor‑style tab bar where users can reorder tabs, enable `tabs_rearrange_enabled`.
- **Custom styling:** Use `Theme` overrides to change the appearance of individual tabs, including fonts, colors, and icons.

---

## Related Classes

- **[TabContainer](class_tabcontainer.html)** – A container that holds child controls and displays them in a tabbed layout.  
- **[Button](class_button.html)** – Basic button control, sometimes used as individual tabs when building a custom UI.

---

## Further Reading

- [GUI System – TabBar Documentation](https://docs.godotengine.org/en/stable/tutorials/gui/tab_bar.html)  
- [Control Nodes – TabBar](https://docs.godotengine.org/en/stable/classes/class_tabbar.html)

---