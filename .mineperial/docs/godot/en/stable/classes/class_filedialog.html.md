**FileDialog**

---

### Inheritance
`FileDialog` ← `ConfirmationDialog` ← `AcceptDialog` ← `Window` ← `Viewport` ← `Node` ← `Object`

---

### Description
`FileDialog` is a preset dialog for selecting files or directories in the file system.  
It offers a simple interface for filtering files, switching between file and directory
selection modes, and customizing the displayed path.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `file_selected(path : String)` | `path` | Emitted when a file is chosen. |
| `dir_selected(path : String)` | `path` | Emitted when a directory is chosen. |
| `about_to_show()` | – | Emitted right before the dialog is shown. |
| `about_to_hide()` | – | Emitted right before the dialog is hidden. |
| `confirmed()` | – | Emitted when the dialog is confirmed. |
| `canceled()` | – | Emitted when the dialog is canceled. |

*(Inherits all signals from `ConfirmationDialog`.)*

---

## Enumerations

```gdscript
enum Mode {
    FILE,
    DIRECTORY,
    ANY,          # Either a file or a directory
    SAVE_FILE
}

enum Access {
    FILESYSTEM,
    RESOURCES,
    PACKED
}
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `mode` | `Mode` | `Mode.FILE` | The mode of the dialog (file, directory, etc.). |
| `access` | `Access` | `Access.FILESYSTEM` | Determines where the dialog looks for files. |
| `current_dir` | `String` | `""` | Current directory path. |
| `current_file` | `String` | `""` | Current selected file. |
| `filters` | `PackedStringArray` | `[]` | List of file filters. |
| `show_hidden` | `bool` | `false` | Show hidden files/folders. |
| `title` | `String` | `""` | Dialog title. |

> **Note**: Most properties have corresponding setter and getter methods (e.g. `set_mode()`, `get_mode()`).

---

## Methods

| Method | Signature | Return | Description |
|--------|-----------|--------|-------------|
| `add_filter(filter : String, title : String)` | `void` | – | Adds a filter to the dialog. |
| `clear_filters()` | `void` | – | Removes all filters. |
| `get_current_dir()` | `String` | – | Returns the current directory. |
| `get_current_file()` | `String` | – | Returns the selected file name. |
| `get_current_path()` | `String` | – | Returns the full selected path. |
| `set_current_dir(dir : String)` | `void` | – | Sets the current directory. |
| `set_current_file(filename : String)` | `void` | – | Sets the current file. |
| `set_current_path(path : String)` | `void` | – | Sets the current path. |
| `get_filters()` | `PackedStringArray` | – | Returns the current filters. |
| `set_mode(mode : Mode)` | `void` | – | Sets the dialog mode. |
| `get_mode()` | `Mode` | – | Gets the dialog mode. |
| `set_access(access : Access)` | `void` | – | Sets the access type. |
| `get_access()` | `Access` | – | Gets the access type. |
| `set_show_hidden(show : bool)` | `void` | – | Toggles showing hidden files. |
| `is_showing()` | `bool` | – | Returns whether the dialog is currently visible. |

---

## Example Usage

```gdscript
# Create a file dialog
var file_dialog = FileDialog.new()
file_dialog.set_access(FileDialog.ACCESS_FILESYSTEM)
file_dialog.set_mode(FileDialog.MODE_OPEN_FILE)
file_dialog.add_filter("*.png", "PNG Images")
file_dialog.add_filter("*.jpg;*.jpeg", "JPEG Images")
file_dialog.connect("file_selected", Callable(self, "_on_file_selected"))
add_child(file_dialog)

func _on_file_selected(path : String) -> void:
    print("File chosen:", path)
    # Do something with the file path
```

---

### See Also

- [`FileSystemDock`](../classes/class_filesystemdock.html)
- [`OpenFileDialog`](https://docs.godotengine.org/en/stable/classes/class_opendialog.html) – A simpler dialog for file selection only.

---

> *Documentation last updated: Stable (3.x) version – Godot Engine 4.0.*