# AcceptDialog

**Namespace:** `Godot`

**Inherits:** `Window` → `Viewport` → `Node` → `Object`  
**Inherited By:** `ConfirmationDialog`

---

## Description

`AcceptDialog` is a simple modal dialog used for basic user notifications.  
It provides a minimal interface that typically contains a single “OK” button.  
The default use of `AcceptDialog` is to allow it to only be a one‑button dialog that
closes itself when the button is pressed, making it convenient for quick prompts or
information messages.

---

## Overview

| Category | Detail |
|----------|--------|
| **Signals** | `confirmed()` – Emitted when the dialog is accepted. |
| **Properties** | *None defined in the base class (inherited from `Window`).* |
| **Methods** | *See the method list below.* |

---

## Methods

| Method | Description |
|--------|-------------|
| `popup()` | Shows the dialog as a popup. |
| `popup_centered()` | Shows the dialog centered on the screen. |
| `popup_centered_minsize()` | Shows the dialog centered with a minimum size. |
| `popup_exclusive()` | Shows the dialog as an exclusive popup (blocks interaction with other windows). |
| `popup_exclusive_centered()` | Shows the dialog as an exclusive popup centered on the screen. |
| `popup_exclusive_centered_minsize()` | Shows the dialog as an exclusive popup centered with a minimum size. |
| `popup_dialog()` | Shows the dialog as a normal popup. |
| `popup_dialog_centered()` | Shows the dialog centered. |
| `popup_dialog_centered_minsize()` | Shows the dialog centered with a minimum size. |
| `popup_dialog_exclusive()` | Shows the dialog as an exclusive popup. |
| `popup_dialog_exclusive_centered()` | Shows the dialog as an exclusive popup centered. |
| `popup_dialog_exclusive_centered_minsize()` | Shows the dialog as an exclusive popup centered with a minimum size. |

> *All of the above “popup” methods are inherited from `Window` and provide various ways of showing the dialog.*

---

## Signals

| Signal | Description |
|--------|-------------|
| `confirmed()` | Emitted when the user presses the OK button. |

---

## Typical Usage

```gdscript
# Create an AcceptDialog in a script
var dialog = AcceptDialog.new()
dialog.dialog_text = "Your action was successful!"
add_child(dialog)

# Show the dialog
dialog.popup_centered()
```

When the dialog is shown, it will automatically close once the user clicks the OK button,
emitting the `confirmed()` signal which can be connected to any custom logic.

---

## Notes

* `AcceptDialog` is often used as a lightweight alternative to `ConfirmationDialog`
  when you only need a single “OK” button and no additional user input.
* It inherits all properties and methods from `Window`, so you can customize
  its size, position, and styling as needed.

---