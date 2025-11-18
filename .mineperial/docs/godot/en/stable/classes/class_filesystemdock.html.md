# FileSystemDock

**Inheritance chain**

```
VBoxContainer
  └─ BoxContainer
        └─ Container
              └─ Control
                    └─ CanvasItem
                          └─ Node
                                └─ Object
```

**Description**

`FileSystemDock` is the Godot editor’s dock that manages files in the current project. It provides a visual view of the project’s file system, allowing users to browse, create, rename, move, copy, delete, and import files and folders. The dock also exposes context‑menu actions for common file operations and supports drag‑drop of files into the editor.

---

## Main Features

| Feature | Description |
|---------|-------------|
| **File tree** | Displays the project’s directory hierarchy. |
| **Context menu** | Right‑click actions for files and folders (Open, New Folder, Delete, Rename, etc.). |
| **Drag‑and‑drop** | Drag files from the OS into the dock to import them automatically. |
| **Search bar** | Filter visible files by name. |
| **Filter settings** | Toggle visibility of hidden files or resource types. |
| **Refresh** | Reloads the tree to reflect changes on disk. |

---

## Common Methods

Below is a non‑exhaustive list of the most useful methods available on `FileSystemDock`.  
(Full API reference can be found in the Godot Class Reference.)

| Method | Description |
|--------|-------------|
| `clear()` | Clears the current file tree. |
| `create_folder(path)` | Creates a new folder at the specified path. |
| `delete_item(path)` | Deletes a file or folder at the given path. |
| `get_selected()` | Returns the currently selected file/folder path. |
| `rename_item(old_path, new_name)` | Renames an item. |
| `refresh()` | Reloads the file tree from disk. |
| `sort_items()` | Sorts the displayed items (folders first, then files). |

---

## Signals

| Signal | Description |
|--------|-------------|
| `file_removed(path)` | Emitted when a file is removed. |
| `file_created(path)` | Emitted when a new file/folder is created. |
| `file_moved(old_path, new_path)` | Emitted when an item is moved or renamed. |

---

## Usage Example (Godot Editor Scripting)

```gdscript
# Assume you have a reference to the FileSystemDock.
var fs_dock = get_node("/root/EditorInterface/FilesystemDock")

# Refresh the file system after adding a new file programmatically.
fs_dock.refresh()

# Get the currently selected path.
var selected_path = fs_dock.get_selected()

# Create a new subfolder under the selected path.
if selected_path:
    fs_dock.create_folder("%s/NewFolder" % selected_path)
```

---

## Important Notes

* `FileSystemDock` is a *private* editor class; it is not intended for use in exported games.
* Most of its functionality is exposed through the editor UI and not directly in user projects.
* If you need to manipulate the project’s files from a script, consider using the `Directory` or `File` classes instead.

---

## Further Reading

* [Editor Interface](../tutorials/editor/index.html) – Overview of the editor’s docking system.  
* [FileDialog](class_filedialog.html) – UI for selecting files.  
* [Project Settings](../tutorials/editor/project_settings.html) – Configuration options that affect file handling.

---

*© Godot Engine contributors. All rights reserved.*