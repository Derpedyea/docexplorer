**PopupPanel – Godot Engine Documentation (Stable)**

---

## Overview

`PopupPanel` is a GUI control node that provides a popup window with a built‑in panel background.  
It inherits from the following class hierarchy:

```
PopupPanel
  └─ Popup
        └─ Window
              └─ Viewport
                    └─ Node
                          └─ Object
```

The node automatically handles modal display, focus, and close requests. Any child controls added to the `PopupPanel` will be rendered on top of the panel background.

---

## Features

* **Configurable panel style** – Use theme overrides or custom style boxes to change the visual look.
* **Modal and non‑modal behaviour** – `PopupPanel` can block or allow interaction with other UI elements.
* **Automatic resizing** – The panel size can be set explicitly or allowed to grow with its content.
* **Close on outside click** – When `popup_mode` is set to `MODE_POPUP`, clicking outside the panel will automatically close it.

---

## Typical Usage

```gdscript
# Example: Create a simple popup with a button
var popup = PopupPanel.new()
popup.name = "MyPopup"
popup.rect_min_size = Vector2(200, 100)  # Minimum size

var button = Button.new()
button.text = "Close"
button.connect("pressed", popup, "_on_close_pressed")

popup.add_child(button)
add_child(popup)

# Show the popup
popup.popup_centered()
```

---

## Methods

| Method | Description |
|--------|-------------|
| `popup()` | Shows the popup. |
| `popup_centered()` | Shows the popup centered on the screen. |
| `popup_centered_minsize()` | Shows the popup centered with its minimum size. |
| `popup_at_position(position: Vector2)` | Shows the popup at a specific global position. |
| `popup_exclusive()` | Shows the popup while keeping it exclusive to the current modal stack. |
| `popup_mode(mode: int)` | Sets the popup mode (`MODE_POPUP`, `MODE_POPUP_WM`, etc.). |
| `get_rect()` | Returns the rectangle that defines the size and position of the popup. |

> **Note**: All methods from `Popup`, `Window`, and `Control` are also available on `PopupPanel`.

---

## Signals

| Signal | Description |
|--------|-------------|
| `popup_hide()` | Emitted when the popup is hidden. |
| `popup_show()` | Emitted when the popup is shown. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme_override_styles` | `StyleBox` | `null` | Override the panel’s style box. |
| `theme_override_fonts` | `Font` | `null` | Override the panel’s font. |
| `theme_override_colors` | `Color` | `null` | Override the panel’s colors. |
| `rect_min_size` | `Vector2` | `(0, 0)` | Minimum size of the popup. |

---

## Quick Reference

```gdscript
# Show a centered popup
var popup = PopupPanel.new()
popup.popup_centered()

# Hide the popup
popup.hide()
```

For more detailed API documentation, refer to the [official Godot documentation](https://docs.godotengine.org/en/stable/classes/class_popuppanel.html).