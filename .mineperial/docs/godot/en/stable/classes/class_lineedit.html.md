# LineEdit

*Inherited from*: `Control < CanvasItem < Node < Object`

## Description

`LineEdit` is a control for editing a single line of text. It supports a wide range of customization options such as placeholder text, password mode, clear button, and text alignment. It can be used in forms, search bars, chat windows, or any situation where a single line of user input is required.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `alignment` | `int` | `0` | Horizontal text alignment. Can be `ALIGN_LEFT`, `ALIGN_CENTER`, or `ALIGN_RIGHT`. |
| `autoselect` | `bool` | `false` | If `true`, the text is automatically selected when the control gains focus. |
| `clear_button_enabled` | `bool` | `false` | When `true`, a clear button is shown on the right side of the field. |
| `cursor_blink_enabled` | `bool` | `true` | Controls whether the cursor blinks. |
| `cursor_shape` | `int` | `CURSOR_IBEAM` | Shape of the cursor. |
| `editable` | `bool` | `true` | Whether the user can edit the text. |
| `placeholder_text` | `String` | `""` | Text displayed when the field is empty. |
| `placeholder_text_color` | `Color` | `Color(0.5, 0.5, 0.5, 1)` | Color of the placeholder text. |
| `right_icon` | `Texture2D` | `null` | Optional icon displayed on the right. |
| `select_all_on_focus` | `bool` | `false` | If `true`, all text is selected when the field receives focus. |
| `selection_enabled` | `bool` | `true` | Enables or disables text selection. |
| `selection_mode` | `int` | `SELECTION_NORMAL` | Selection mode (`SELECTION_NORMAL`, `SELECTION_MULTILINE`). |
| `single_line` | `bool` | `true` | If `false`, the control behaves like a `TextEdit`. |
| `placeholder_text` | `String` | `""` | Text displayed when the control is empty. |
| `text` | `String` | `""` | Current text content. |

> **Note**: Some properties are read‑write only from the editor; others are dynamic at runtime.

---

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `text_changed(text)` | `String text` | Emitted when the text changes. |
| `focus_entered()` | – | Emitted when the control gains focus. |
| `focus_exited()` | – | Emitted when the control loses focus. |
| `cursor_changed()` | – | Emitted when the cursor position changes. |
| `clear_pressed()` | – | Emitted when the clear button is pressed. |

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| **_init** | – | – | Constructor. |
| `add_icon_at_cursor(icon)` | `Texture2D icon` | – | Adds an icon at the cursor position. |
| `clear()` | – | – | Clears all text. |
| `cut()` | – | – | Cuts the current selection to the clipboard. |
| `copy()` | – | – | Copies the current selection to the clipboard. |
| `paste()` | – | – | Pastes text from the clipboard. |
| `select_all()` | – | – | Selects all text in the field. |
| `get_selection()` | – | `Vector2i` | Returns the start and end of the selection. |
| `has_selection()` | – | `bool` | Returns `true` if text is selected. |
| `get_cursor_position()` | – | `int` | Current cursor index. |
| `set_cursor_position(index)` | `int index` | – | Sets the cursor index. |
| `get_selected_text()` | – | `String` | Returns the selected text. |
| `is_password()` | – | `bool` | Returns whether the text is obscured (password mode). |
| `set_password(enabled)` | `bool enabled` | – | Enables/disables password mode. |
| `is_readonly()` | – | `bool` | Returns whether the field is read‑only. |
| `set_readonly(readonly)` | `bool readonly` | – | Enables/disables read‑only mode. |
| `is_echo_mode()` | – | `bool` | Returns whether the text is echoed (used for chat). |
| `set_echo_mode(echo)` | `bool echo` | – | Enables/disables echo mode. |
| `set_placeholder_text(text)` | `String text` | – | Sets the placeholder text. |
| `get_placeholder_text()` | – | `String` | Returns the placeholder text. |
| `set_placeholder_color(color)` | `Color color` | – | Sets the placeholder text color. |
| `get_placeholder_color()` | – | `Color` | Returns the placeholder text color. |
| `set_text(text)` | `String text` | – | Sets the current text. |
| `get_text()` | – | `String` | Returns the current text. |
| `get_text_direction()` | – | `int` | Returns the text direction (LTR/RTL). |
| `set_text_direction(direction)` | `int direction` | – | Sets text direction. |
| `get_hint_text()` | – | `String` | Returns the hint text. |
| `set_hint_text(hint)` | `String hint` | – | Sets hint text. |
| `get_autowrap()` | – | `bool` | Returns whether auto‑wrap is enabled. |
| `set_autowrap(autowrap)` | `bool autowrap` | – | Enables/disables auto‑wrap. |
| `get_text_overflow_behavior()` | – | `int` | Returns the overflow behavior (`OVERFLOW_CLIP`, `OVERFLOW_ELLIPSIS`, etc.). |
| `set_text_overflow_behavior(behavior)` | `int behavior` | – | Sets the overflow behavior. |

> **Tip**: Use `connect("text_changed", self, "_on_text_changed")` to react to user input.

---

## Example Usage

```gdscript
# Create a LineEdit, set a placeholder and add it to a container
var line_edit = LineEdit.new()
line_edit.placeholder_text = "Enter your name"
line_edit.size_flags_horizontal = Control.SIZE_EXPAND_FILL
add_child(line_edit)

# Connect signal to store text on change
line_edit.connect("text_changed", Callable(self, "_on_name_entered"))

func _on_name_entered(new_text):
    print("Name entered:", new_text)
```

---

## Related Classes

- [TextEdit](../class_textedit.html) – Multi‑line text editing.
- [SpinBox](../class_spinbox.html) – Numerical input with up/down controls.
- [OptionButton](../class_optionbutton.html) – Drop‑down selection.

--- 

### Further Reading

- **Control** – Base class for all UI components.  
- **CanvasItem** – Node type providing 2D drawing capabilities.  
- **Node** – Root of the scene tree.  

> For more detailed information, consult the official [Godot Engine API reference](https://docs.godotengine.org/en/stable/classes/class_lineedit.html).