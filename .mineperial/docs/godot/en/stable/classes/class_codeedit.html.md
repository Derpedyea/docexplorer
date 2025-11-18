**CodeEdit Class – Godot Engine Documentation**

> *This page documents the `CodeEdit` class, a specialized multiline text editor designed for editing code. It inherits from `TextEdit`, which in turn inherits from `Control` → `CanvasItem` → `Node` → `Object`.*

---

## Inheritance
```
Object
 └─ Node
      └─ CanvasItem
          └─ Control
              └─ TextEdit
                  └─ CodeEdit
```

---

## Description
`CodeEdit` is a lightweight, syntax‑aware text editor that provides features such as line numbers, syntax highlighting, auto‑completion, code folding, and more. It is intended for use inside the Godot editor (e.g., the built‑in script editor), but it can also be used in custom editor plugins or in games that need an in‑game code editor.

---

## Constructors
| Function | Description |
|----------|-------------|
| `new()` | Creates a new `CodeEdit` instance. |

> *The constructor is inherited from `TextEdit`; use `instance = CodeEdit.new()` in GDScript or `var instance = new CodeEdit();` in C#.*

---

## Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `theme` | `Theme` | `null` | Optional UI theme to apply. |
| `syntax_highlighter` | `SyntaxHighlighter` | `null` | Syntax highlighter for the code. |
| `font_size` | `int` | `14` | Font size in pixels. |
| `tab_size` | `int` | `4` | Number of spaces a tab represents. |
| `indent_size` | `int` | `4` | Number of spaces for auto‑indentation. |
| `auto_indent` | `bool` | `true` | Whether to automatically indent new lines. |

*All other properties of `TextEdit` (e.g., `text`, `cursor_position`, `line_numbers`, etc.) are also available.*

---

## Signals
| Signal | Description |
|--------|-------------|
| `text_changed()` | Emitted whenever the text content changes. |
| `cursor_position_changed()` | Emitted when the cursor position changes. |

---

## Methods
> The following methods are defined on `TextEdit` and inherited by `CodeEdit`. Additional convenience methods may be added in future releases.

| Method | Description |
|--------|-------------|
| `get_line(line : int) -> String` | Returns the text of the specified line. |
| `insert_text_at_cursor(text : String)` | Inserts `text` at the current cursor position. |
| `delete_text(start : int, length : int)` | Deletes a range of characters. |
| `get_current_line()` | Returns the line number of the cursor. |
| `goto_line(line : int)` | Moves the cursor to the beginning of the specified line. |
| `add_symbol_highlight(symbol : String, color : Color)` | Adds a custom syntax highlight for a symbol. |
| `remove_symbol_highlight(symbol : String)` | Removes a custom highlight. |
| `set_breakpoint(line : int, enabled : bool)` | Toggles a breakpoint at a line (used in the editor debugger). |
| `clear_breakpoints()` | Removes all breakpoints. |

---

## Example Usage

### GDScript
```gdscript
var editor = CodeEdit.new()
editor.text = "print('Hello, World!')"
editor.font_size = 12
add_child(editor)
```

### C#
```csharp
var editor = new CodeEdit();
editor.Text = "print(\"Hello, World!\")";
editor.FontSize = 12;
AddChild(editor);
```

---

## Related Classes
- [`TextEdit`](https://docs.godotengine.org/en/stable/classes/class_textedit.html): Base class providing multiline text editing functionality.
- [`SyntaxHighlighter`](https://docs.godotengine.org/en/stable/classes/class_syntaxhighlighter.html): Defines language‑specific highlighting rules.
- [`EditorInterface`](https://docs.godotengine.org/en/stable/classes/class_editorinterface.html): Accesses the editor’s UI elements.

---

## References
- Godot Engine Documentation: <https://docs.godotengine.org/>
- Godot Editor Plugin Guide: <https://docs.godotengine.org/en/stable/tutorials/editor/creating_a_plugin.html>

---