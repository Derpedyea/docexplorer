**ScriptCreateDialog**  
*Godot Engine 4.0 – Class Reference*

---

### Description
The `ScriptCreateDialog` is the editor’s popup dialog used to create new script files.  
It inherits from `ConfirmationDialog` → `AcceptDialog` → `Window` → `Viewport` → `Node` → `Object`.

---

### Inheritance
```
Object
 └─ Node
     └─ Viewport
         └─ Window
             └─ AcceptDialog
                 └─ ConfirmationDialog
                     └─ ScriptCreateDialog
```

---

### Properties
| Name | Type | Default | Description |
|------|------|---------|-------------|
| `path` | `String` | `""` | The file path where the new script will be created. |
| `class_name` | `String` | `""` | Optional class name to define in the new script. |
| `language` | `ScriptLanguage` | `GDScript` | Programming language of the new script (GDScript, C#, GDExtension, …). |
| `base` | `String` | `""` | Base class to inherit from. |
| `singleton` | `bool` | `false` | Whether the script is a singleton (AutoLoad). |

*(Note: The actual property list may contain more details; refer to the Godot API documentation for the latest information.)*

---

### Methods
| Method | Description |
|--------|-------------|
| `void _accept()` | Called when the dialog is confirmed. Triggers the creation of the script file. |
| `void _cancel()` | Called when the dialog is canceled. |
| `void set_path(String path)` | Sets the target file path. |
| `String get_path()` | Returns the selected file path. |
| `void set_class_name(String name)` | Sets the class name for the new script. |
| `String get_class_name()` | Returns the class name. |
| `void set_language(ScriptLanguage language)` | Sets the script language. |
| `ScriptLanguage get_language()` | Returns the current language. |
| `void set_base(String base)` | Sets the base class. |
| `String get_base()` | Returns the base class name. |
| `void set_singleton(bool enabled)` | Enables or disables singleton mode. |
| `bool is_singleton()` | Returns whether singleton mode is enabled. |
| `Dictionary get_script_data()` | Returns a dictionary with all information required to generate the script. |
| `void _on_path_changed(String path)` | Internal slot for path edit changes. |
| `void _on_class_name_changed(String name)` | Internal slot for class name changes. |
| `void _on_language_changed(int index)` | Internal slot for language selection. |
| `void _on_base_changed(String base)` | Internal slot for base class selection. |
| `void _on_singleton_toggled(bool toggled)` | Internal slot for singleton toggle. |

*(The real API may include more or fewer methods; consult the official docs.)*

---

### Signals
| Signal | Parameters | Description |
|--------|------------|-------------|
| `script_created(String path, ScriptLanguage language, String class_name, String base, bool singleton)` | `path`, `language`, `class_name`, `base`, `singleton` | Emitted when a new script is created successfully. |
| `canceled()` | – | Emitted when the dialog is cancelled. |

---

### Usage Example
```gdscript
# Assuming `script_dialog` is an instance of ScriptCreateDialog
script_dialog.popup_centered()
script_dialog.connect("script_created", self, "_on_script_created")

func _on_script_created(path, language, class_name, base, singleton):
    print("Created script:", path)
```

---

### Related Classes
- [`ScriptEditor`](../class_scripteditor.html) – The editor window where scripts are edited.
- [`Script`](../class_script.html) – Base class for script resources.
- [`ScriptLanguage`](../class_scriptlanguage.html) – Base class for script language plugins.

---