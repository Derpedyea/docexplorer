# LinkButton – Godot Engine Class Reference

**Version:** Stable (Godot 4.x)

> A button that represents a link. Primarily used for interactive hyperlinks inside the editor or in a game UI.

---

## Inheritance Tree

```
Object
└─ Node
   └─ CanvasItem
      └─ Control
         └─ Button
            └─ LinkButton
```

---

## Signals

| Signal | Description | Arguments |
|--------|-------------|-----------|
| `pressed()` | Emitted when the button is pressed. | – |
| `mouse_entered()` | Emitted when the mouse cursor enters the button. | – |
| `mouse_exited()` | Emitted when the mouse cursor exits the button. | – |
| `focus_entered()` | Emitted when the button gains keyboard focus. | – |
| `focus_exited()` | Emitted when the button loses keyboard focus. | – |

> All signals inherited from `Button` and `Control` are also available.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `url` | `String` | `""` | The URL that will be opened when the button is pressed. |
| `text` | `String` | `""` | The display text of the link. |
| `underline` | `bool` | `true` | If `true`, the text is displayed underlined to indicate a hyperlink. |
| `focus_mode` | `FocusMode` | `FOCUS_CLICK` | Control how the button receives focus. |
| `align` | `HorizontalAlignment` | `ALIGN_LEFT` | Horizontal alignment of the text. |
| `valign` | `VerticalAlignment` | `VALIGN_CENTER` | Vertical alignment of the text. |
| `theme_type_variation` | `StringName` | `""` | Optional theme variation name. |
| `theme` | `Theme` | `null` | Custom theme for the button. |

> Properties inherited from `Button` (`pressed`, `disabled`, `flat`, `custom_minimum_size`, etc.) are also present.

---

## Methods

| Method | Return Type | Description |
|--------|-------------|-------------|
| `set_url(url: String)` | `void` | Sets the hyperlink URL. |
| `get_url()` | `String` | Returns the current URL. |
| `set_text(text: String)` | `void` | Sets the displayed text. |
| `get_text()` | `String` | Returns the displayed text. |
| `set_underline(underline: bool)` | `void` | Enables or disables underline. |
| `is_underlined()` | `bool` | Returns whether the text is underlined. |
| `_gui_input(event: InputEvent)` | `void` | Handles mouse events to open the URL when clicked (internal). |
| `_notification(what: int)` | `void` | Handles internal notifications like `NOTIFICATION_ENTER_TREE`, `NOTIFICATION_THEME_CHANGED`. |

> All standard `Button` methods (`pressed()`, `release()`, `grab_focus()`, etc.) are available.

---

## Example

```gdscript
# Create a LinkButton programmatically
var link = LinkButton.new()
link.text = "Open Godot Docs"
link.url = "https://docs.godotengine.org"
link.underline = true
link.align = HORIZONTAL_ALIGNMENT_CENTER
link.valign = VERTICAL_ALIGNMENT_CENTER
add_child(link)

# Connect the pressed signal to a custom handler
link.connect("pressed", self, "_on_link_pressed")

func _on_link_pressed():
    OS.shell_open(link.url)
```

> In the editor, you can add a `LinkButton` node from the **Create Node** dialog and set its properties in the **Inspector**. When the game is running, clicking the button will open the specified URL in the default browser.

---

## Reference Links

- [Button](../class_button.html) – Parent class with button behavior.
- [Control](../class_control.html) – Base UI control node.
- [Theme](../class_theme.html) – UI styling system.
- [OS.shell_open](../class_os.html#shell_open) – Function to open URLs.

--- 

**Tip:** For more details on styling `LinkButton`, refer to the [Theme documentation](../class_theme.html) and look for the `LinkButton` theme item properties (e.g., `font`, `font_size`, `font_color`, `font_hover_color`).