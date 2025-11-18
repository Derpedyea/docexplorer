**Output panel**

The Output panel is the default log window that appears at the bottom of the Godot editor.  
It is used to view text printed by your project and the editor itself, as well as to see
runtime errors, warnings and debug information.

---

## 1. Opening the panel

* Click **Output** on the bottom panel bar (or press **Ctrl+Shift+O** on Windows / **⌘+Shift+O** on macOS)  
* The panel will expand to show the log history.  
* You can dock the panel to any side of the editor or float it in a separate window.

## 2. Features

| Feature | Description |
|---------|-------------|
| **Filter buttons** | Toggle *All*, *Errors*, *Warnings*, *Info*, *Debug* to view only the selected message types. |
| **Clear button** | Removes all text from the log. |
| **Copy button** | Copies the visible log to the clipboard. |
| **Search** | Quick‑find text in the log. |
| **Wrap lines** | Wrap long lines to fit the panel width. |

## 3. Printing messages

```gdscript
# GDScript example
print("Hello, world!")
```

The output will appear in the panel as a plain text line.  
Use `push_error()`, `push_warning()`, and `push_debug()` to send messages with a specific severity.

```gdscript
push_error("Something went wrong!")
push_warning("This might cause issues.")
push_debug("Debug info: %s" % variable)
```

## 4. Errors & stack traces

When an error occurs, the output panel shows a red error line and a clickable stack trace.  
Clicking the stack trace will jump to the line in your script where the error was triggered.

```
ERR: myscript.gd:14 - Index out of bounds.
```

## 5. Using the panel in the editor

The Output panel also displays editor messages:

- Project startup logs
- Export warnings
- Asset import status
- Compilation errors

You can toggle the visibility of the panel via **Editor → Editor Settings → Editor → Bottom Panel**.

---

> **Tip:**  
> For larger projects, use the **Filter** dropdown to reduce noise by only showing errors and warnings.

---