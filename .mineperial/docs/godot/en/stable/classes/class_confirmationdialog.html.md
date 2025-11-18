**ConfirmationDialog**  
=====================

*Class reference (Godot Engine, stable)*  

Inherited from: `AcceptDialog` → `Window` → `Viewport` → `Node` → `Object`

A dialog used for confirmation of actions. It provides a simple modal window with an “OK” and a “Cancel” button.  
It is typically used for confirming destructive actions such as “Delete this item?” or “Are you sure you want to exit?”

---

## Signals

| Signal | Description |
|--------|-------------|
| `confirmed()` | Emitted when the **OK** button is pressed. |
| `canceled()` | Emitted when the **Cancel** button is pressed. |

---

## Methods

### `set_title(String title)`  
Set the title of the dialog.

```gdscript
var dlg = ConfirmationDialog.new()
dlg.set_title("Delete File")
```

### `set_ok_button_text(String text)`  
Set the label of the **OK** button.

```gdscript
dlg.set_ok_button_text("Delete")
```

### `set_cancel_button_text(String text)`  
Set the label of the **Cancel** button.

```gdscript
dlg.set_cancel_button_text("Keep")
```

### `popup_centered()`  
Open the dialog in the center of the screen.

```gdscript
dlg.popup_centered()
```

### `popup_centered_minsize()`  
Open the dialog in the center of the screen, ensuring it is at least as large as its minimum size.

```gdscript
dlg.popup_centered_minsize()
```

### `popup(Rect2 rect)`  
Open the dialog at a specific position/size.

```gdscript
dlg.popup(Rect2(100, 100, 200, 100))
```

### `set_text(String text)`  
Set the confirmation message displayed inside the dialog.

```gdscript
dlg.set_text("Are you sure you want to quit?")
```

### `set_exclusive(bool exclusive)`  
Set whether the dialog is exclusive – i.e. whether it blocks input to other windows.

```gdscript
dlg.set_exclusive(true)
```

### `is_exclusive() -> bool`  
Return whether the dialog is exclusive.

### `set_modal(bool modal)`  
Set whether the dialog is modal. When `true`, input to other windows is blocked until the dialog is closed.

### `is_modal() -> bool`  

### `set_hide_on_ok(bool hide)`  
Set whether the dialog automatically hides when **OK** is pressed.

### `hide_on_ok() -> bool`  

### `set_hide_on_cancel(bool hide)`  
Set whether the dialog automatically hides when **Cancel** is pressed.

### `hide_on_cancel() -> bool`  

### `set_ok_button_disabled(bool disabled)`  
Disable the **OK** button.

### `is_ok_button_disabled() -> bool`  

### `set_cancel_button_disabled(bool disabled)`  
Disable the **Cancel** button.

### `is_cancel_button_disabled() -> bool`  

### `get_ok_button() -> Button`  
Return the **OK** button node.

### `get_cancel_button() -> Button`  
Return the **Cancel** button node.

### `get_text() -> String`  
Return the confirmation text.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `String` | `""` | Window title. |
| `text` | `String` | `""` | Confirmation text displayed in the dialog. |
| `ok_button_text` | `String` | `"OK"` | Text of the **OK** button. |
| `cancel_button_text` | `String` | `"Cancel"` | Text of the **Cancel** button. |
| `exclusive` | `bool` | `false` | Whether the dialog is exclusive. |
| `modal` | `bool` | `false` | Whether the dialog is modal. |
| `hide_on_ok` | `bool` | `true` | Whether to hide after **OK** is pressed. |
| `hide_on_cancel` | `bool` | `true` | Whether to hide after **Cancel** is pressed. |
| `ok_button_disabled` | `bool` | `false` | Whether **OK** is disabled. |
| `cancel_button_disabled` | `bool` | `false` | Whether **Cancel** is disabled. |

---

## Example Usage

```gdscript
var confirm = ConfirmationDialog.new()
confirm.set_title("Exit Game")
confirm.set_text("Are you sure you want to quit?")
confirm.set_ok_button_text("Quit")
confirm.set_cancel_button_text("Stay")
confirm.connect("confirmed", Callable(self, "_on_confirmed"))
confirm.connect("canceled", Callable(self, "_on_canceled"))
add_child(confirm)
confirm.popup_centered()

func _on_confirmed():
    get_tree().quit()

func _on_canceled():
    print("User stayed in the game")
```

---

## Related Classes

- [`AcceptDialog`](https://docs.godotengine.org/en/stable/classes/class_acceptdialog.html) – base class that provides the OK/Cancel UI.
- [`Window`](https://docs.godotengine.org/en/stable/classes/class_window.html) – general window functionality.

---