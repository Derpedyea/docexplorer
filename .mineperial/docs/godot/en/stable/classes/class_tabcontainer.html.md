**TabContainer**  
*Class reference – Godot Engine 4.x*  

---

### Overview
`TabContainer` is a UI container that creates a tab for each of its child controls and displays only the control of the currently active tab.

```
inherits : Container < Control < CanvasItem < Node < Object >> 
```

> **Description** – Arranges child controls into a tabbed layout.  
> Only the active child is visible; other children are hidden.

---

### Signals
| Signal | Description |
|--------|-------------|
| `tab_changed(int tab)` | Emitted when the current tab changes. |
| `tab_pressed(int tab)` | Emitted when a tab is pressed (even if it is already selected). |

---

### Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabs` | `int` | `0` | Number of tabs. (Read‑only, derived from children.) |
| `current_tab` | `int` | `0` | Index of the currently selected tab. |
| `h_scroll` | `bool` | `false` | Whether the tabs are horizontally scrollable. |
| `v_scroll` | `bool` | `false` | Whether the tabs are vertically scrollable. |
| `tab_alignment` | `int` (`LEFT`, `CENTER`, `RIGHT`) | `LEFT` | Alignment of tab labels. |
| `tab_margin` | `float` | `0.0` | Margin around the tab. |
| `tab_mode` | `int` (`TRAP`, `AUTO`, `SCROLL`) | `TRAP` | Determines how the tabs behave when the number of tabs exceeds the available space. |
| `tab_min_size` | `Vector2` | `Vector2( 0, 0 )` | Minimum size of a tab. |
| `tab_max_size` | `Vector2` | `Vector2( 0, 0 )` | Maximum size of a tab. |

> *All property setters are animated* (i.e., they can be tweaked in the editor with the animation panel).

---

### Methods
| Method | Parameters | Returns | Description |
|--------|------------|---------|-------------|
| `add_tab(Control child, String title)` | `child`, `title` | `int` | Adds a child control as a new tab with the given title; returns the index of the new tab. |
| `add_tab_control(Control child)` | `child` | `int` | Adds a child control as a tab without a title (title will default to the control's name). |
| `remove_tab(int index)` | `index` | `void` | Removes the tab at the given index (also removes the child control). |
| `get_tab_control(int index)` | `index` | `Control` | Returns the child control of the tab at `index`. |
| `get_tab_title(int index)` | `index` | `String` | Returns the title of the tab at `index`. |
| `set_tab_title(int index, String title)` | `index`, `title` | `void` | Sets the title of the tab at `index`. |
| `get_current_tab()` | `-` | `int` | Returns the index of the currently selected tab. |
| `set_current_tab(int index)` | `index` | `void` | Switches to the tab at `index`. |
| `get_tab_count()` | `-` | `int` | Returns the total number of tabs. |
| `get_tab_margin()` | `-` | `float` | Returns the current tab margin. |
| `set_tab_margin(float margin)` | `margin` | `void` | Sets the margin around the tabs. |
| `get_tab_alignment()` | `-` | `int` | Returns the current tab alignment. |
| `set_tab_alignment(int alignment)` | `alignment` | `void` | Sets tab label alignment (`LEFT`, `CENTER`, `RIGHT`). |

---

### Usage Example (GDScript)

```gdscript
# Create a TabContainer node
var tab_container := TabContainer.new()
add_child(tab_container)

# Create three child controls to be used as tabs
var label1 := Label.new()
label1.text = "Content of Tab 1"
tab_container.add_tab_control(label1)
tab_container.set_tab_title(0, "Tab 1")

var label2 := Label.new()
label2.text = "Content of Tab 2"
tab_container.add_tab_control(label2)
tab_container.set_tab_title(1, "Tab 2")

var label3 := Label.new()
label3.text = "Content of Tab 3"
tab_container.add_tab_control(label3)
tab_container.set_tab_title(2, "Tab 3")

# Connect a signal to detect when the tab changes
tab_container.connect("tab_changed", self, "_on_tab_changed")

func _on_tab_changed(new_tab: int) -> void:
    print("Switched to tab %d" % new_tab)
```

---

### Important Notes
* The TabContainer automatically hides all child controls except the one of the active tab.  
* Children should not be manually added/removed through the editor while the game is running; use the provided methods to maintain proper tab state.  
* The container works with any `Control`‑derived node – buttons, panels, custom widgets, etc.  

---

### Further Reading
- [TabBar](../classes/class_tabbar.html) – low‑level control that renders tab buttons.  
- [Container](../classes/class_container.html) – base class for UI containers.  

---