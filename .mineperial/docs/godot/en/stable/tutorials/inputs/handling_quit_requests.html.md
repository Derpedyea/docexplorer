**Handling quit requests**

Quitting is a platform‑specific feature.  
Most operating systems allow the user to request that an application
close, for example:

* On desktop: clicking the “x” in the window title bar, pressing
  **Alt‑F4** or **Ctrl‑Q**.
* On mobile: pressing the physical or software “back” button.
* On the Web: closing the browser tab.

Godot gives you a simple, cross‑platform way to detect such requests
and react to them in your code.

---

## 1. Detecting a quit request

Godot signals the request through the scene‑tree’s notification
system.  Add a `_notification()` method to the node that should handle
the request (normally the root node of the scene or a dedicated
controller node).

```gdscript
# QuitRequestExample.gd
extends Node

func _notification(what: int) -> void:
    if what == MainLoop.QUIT_REQUEST:      # 4.0+ constant
        # Place any cleanup or confirmation code here.
        _on_quit_requested()
```

The `MainLoop.QUIT_REQUEST` constant is emitted **before** the engine
actually exits, so you can:

* Show a modal dialog asking the user to confirm.
* Persist data, pause the game, play a sound, etc.
* Cancel the quit by simply returning without calling `get_tree().quit()`.

---

## 2. Disabling automatic quitting

By default Godot will exit as soon as the platform requests it.
You can override this behaviour by disabling the auto‑quit flag:

```gdscript
get_tree().set_auto_accept_quit(false)
```

After this call you must manually quit the game:

```gdscript
get_tree().quit()
```

---

## 3. Handling the Android “back” button

On Android, the “back” button is a normal key event (`KEY_BACK` /
`KEY_ESCAPE`).  If you want to override it (for example, to change
scene or pause the game) simply process the key in `_input()`:

```gdscript
func _input(event: InputEvent) -> void:
    if event.is_action_pressed("ui_cancel"):
        # "ui_cancel" is mapped to the back button by default.
        _handle_back_action()
```

Alternatively, if you prefer to keep the default quit behaviour but
show a confirmation dialog, use the quit‑request notification as
described in section 1.

---

## 4. Example: Prompt the user before quitting

```gdscript
extends Node

func _ready() -> void:
    # Disable the default auto‑quit so we can intercept it.
    get_tree().set_auto_accept_quit(false)

func _notification(what: int) -> void:
    if what == MainLoop.QUIT_REQUEST:
        _show_quit_confirmation()

func _show_quit_confirmation() -> void:
    var dialog = ConfirmationDialog.new()
    dialog.dialog_text = "Do you really want to quit?"
    dialog.connect("confirmed", Callable(self, "_on_quit_confirmed"))
    add_child(dialog)
    dialog.popup_centered()

func _on_quit_confirmed() -> void:
    get_tree().quit()
```

---

## 5. Summary

* `MainLoop.QUIT_REQUEST` is fired whenever the platform asks the
  application to close.
* Use `_notification()` to intercept it, show a confirmation dialog,
  perform clean‑up, or cancel it.
* Disable auto‑quit with `set_auto_accept_quit(false)` to gain full
  control.
* On mobile devices, the back button can be handled either via the
  `ui_cancel` action or directly as a `KEY_BACK` event.

These techniques let you build a consistent, user‑friendly exit flow
across desktop, mobile, and web builds.