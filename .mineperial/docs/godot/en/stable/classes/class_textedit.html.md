# TextEdit

**Inherits:** `Control` ⟶ `CanvasItem` ⟶ `Node` ⟶ `Object`  
**Inherited By:** `CodeEdit`

A multiline text editor. It also has limited facilities for editing code, such as syntax highlighting, auto‑indentation, and other common code‑editing features.

---

## Overview

`TextEdit` is a GUI control that allows users to display and edit multiple lines of text. It is a more powerful alternative to the basic `LineEdit` widget, providing features typically found in a code editor (e.g., line numbers, text selection, undo/redo, and keyboard shortcuts).  

It is part of Godot’s UI system and can be instantiated in a scene or created directly from script.

---

## Basic Usage

```gdscript
# Create a TextEdit node in code
var editor = TextEdit.new()
editor.rect_min_size = Vector2(400, 300)
add_child(editor)

# Set initial text
editor.text = "Hello, world!\nThis is a multiline editor."

# Enable line numbers
editor.visible_line_numbers = true
```

---

## Key Features

| Feature | Description |
|---------|-------------|
| **Line Numbers** | Toggle with `visible_line_numbers`. |
| **Syntax Highlighting** | Use the `SyntaxHighlighter` class to color code. |
| **Undo/Redo** | Built‑in history stack; use `undo()` / `redo()`. |
| **Selection & Clipboard** | `select()`, `get_selection()`, `copy()`, `cut()`, `paste()`. |
| **Text Operations** | `insert_at_cursor()`, `delete_selection()`, `replace()`, etc. |
| **Search** | `find_next()`, `find_prev()`. |
| **Signals** | `text_changed`, `cursor_changed`, `selection_changed`, etc. |

---

## Important Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `text` | `String` | `""` | The current content of the editor. |
| `rect_min_size` | `Vector2` | `Vector2(0, 0)` | Minimum size of the control. |
| `visible_line_numbers` | `bool` | `false` | Show/hide line numbers. |
| `syntax_highlighter` | `SyntaxHighlighter` | `null` | Highlighting engine for code. |
| `editable` | `bool` | `true` | Whether the text can be edited. |
| `caret_visible` | `bool` | `true` | Whether the caret is visible. |
| `cursor_blink` | `bool` | `true` | Whether the caret blinks. |
| `max_lines` | `int` | `-1` (no limit) | Max number of lines. |

---

## Common Methods

```gdscript
func insert_text_at_cursor(text: String) -> void
func delete_text(range: int, length: int) -> void
func select(from: int, to: int) -> void
func get_selection() -> String
func copy() -> void
func cut() -> void
func paste() -> void
func undo() -> void
func redo() -> void
func find_next(search: String) -> int
func find_prev(search: String) -> int
func set_line_as_comment(line: int, comment: bool) -> void
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `text_changed()` | Emitted when the text is modified. |
| `cursor_changed()` | Emitted when the cursor position changes. |
| `selection_changed()` | Emitted when the selection changes. |
| `copy_available(bool)` | Emitted when copy/cut availability changes. |
| `cut_available(bool)` | Emitted when cut availability changes. |

---

## Using a SyntaxHighlighter

```gdscript
var highlighter = SyntaxHighlighter.new()
highlighter.syntax = "GDScript"  # or "Python", "C#", etc.
editor.syntax_highlighter = highlighter
```

The `SyntaxHighlighter` automatically updates the text style to match the chosen language.

---

## Quick Reference

- **Create**: `TextEdit.new()`
- **Add to scene**: `add_child(text_edit)`
- **Set text**: `text_edit.text = "..."`  
- **Enable line numbers**: `text_edit.visible_line_numbers = true`
- **Undo**: `text_edit.undo()`
- **Redo**: `text_edit.redo()`

For a complete reference of all properties, methods, and signals, see the official Godot class reference page for `TextEdit`.