**StatusIndicator**

> A node that provides an application status‑indicator (also known as a notification‑area icon).  
> Status‑indicators are only implemented on macOS and Windows.

---

## Inheritance

```text
Node
 └── StatusIndicator
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `icon` | `Texture2D` | `null` | The image displayed in the status‑indicator. |
| `menu` | `NodePath` | `""` | Path to a `PopupMenu` that will be shown when the indicator is clicked. |
| `visible` | `bool` | `true` | Whether the icon is displayed. |
| `tooltip_text` | `String` | `""` | Text displayed when hovering over the indicator. |
| `menu_enabled` | `bool` | `true` | Enable/disable the context menu. |

---

## Methods

| Method | Parameters | Return | Description |
|--------|------------|--------|-------------|
| `set_icon(icon: Texture2D)` | `Texture2D` | `void` | Set the status‑indicator icon. |
| `get_icon() -> Texture2D` |  | `Texture2D` | Returns the current icon. |
| `set_menu(menu: NodePath)` | `NodePath` | `void` | Assign a `PopupMenu` to be shown on click. |
| `get_menu() -> NodePath` |  | `NodePath` | Returns the currently assigned menu. |
| `show()` |  | `void` | Displays the icon. |
| `hide()` |  | `void` | Hides the icon. |
| `is_visible() -> bool` |  | `bool` | Returns whether the icon is currently visible. |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `activated()` |  | Emitted when the status‑indicator is clicked. |
| `menu_requested()` |  | Emitted when the context menu is requested (right‑click). |

---

## Example Usage

```gdscript
# Create a status indicator
var indicator = StatusIndicator.new()
indicator.icon = preload("res://icon.png")
indicator.menu = $"MyMenu"

# Add to the scene
add_child(indicator)

# Show it
indicator.show()
```

---

### Platform Notes

* **macOS** – Uses the system tray icon.  
* **Windows** – Uses the taskbar notification area.  
* **Linux** – Not supported by the Godot engine (the page currently says “implemented only on macOS and Windows”).

---

> **Tip**: The status‑indicator can be used to display application state (e.g., muted/unmuted, online/offline) or to provide quick access to a small menu.

---

*For the most up‑to‑date API reference, see the official Godot documentation: [StatusIndicator class reference](https://docs.godotengine.org/en/stable/classes/class_statusindicator.html).*