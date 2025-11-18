# GDScriptSyntaxHighlighter

**Inherited from:**  
`EditorSyntaxHighlighter<SyntaxHighlighter<Resource<RefCounted<Object>>>`  

---

## Overview

`GDScriptSyntaxHighlighter` is a syntax highlighter designed for GDScript.  
It can be attached to `TextEdit` and `CodeEdit` nodes to provide language‑aware coloring and styling of GDScript code.

> **Note:**  
> The highlighter works only with the built‑in GDScript parser and is not meant for other languages.

---

## Description

The highlighter parses GDScript source and applies a set of visual styles (keywords, functions, variables, comments, strings, etc.) based on the current theme.  
It can be used programmatically to create custom editors, documentation tools, or any feature that requires syntax‑aware text rendering.

---

## Basic Usage

```gdscript
var highlighter = GDScriptSyntaxHighlighter.new()
var text_edit = TextEdit.new()
text_edit.syntax_highlighter = highlighter
text_edit.text = "var x = 10\nprint(x)"
```

The highlighter automatically updates whenever the text changes, so you do not need to manually refresh it.

---

## Key Methods

| Method | Description |
|--------|-------------|
| `new()` | Creates a new instance of the highlighter. |
| `_highlight_text(text: String, start: int, end: int)` | Internal method called by `TextEdit`/`CodeEdit` to style a range of text. |
| `clear_cache()` | Clears any cached parsing results. Useful when re‑loading large files or switching themes. |

> *The class does not expose additional public methods beyond those inherited from `EditorSyntaxHighlighter`. Most interactions happen automatically when assigning the highlighter to a text control.*

---

## Properties

| Property | Type | Default | Notes |
|----------|------|---------|-------|
| `theme` | `Theme` | current editor theme | The visual style applied to highlighted elements. |

---

## Examples

### 1. Adding a GDScript highlighter to a `CodeEdit`

```gdscript
var code_edit = CodeEdit.new()
var highlighter = GDScriptSyntaxHighlighter.new()
code_edit.syntax_highlighter = highlighter
```

### 2. Customizing the style

```gdscript
var highlighter = GDScriptSyntaxHighlighter.new()
var custom_theme = Theme.new()
custom_theme.set_color("keyword_color", Color("#ff0000"))
highlighter.theme = custom_theme
```

---

## Notes

- The highlighter relies on Godot's internal parsing; it may not support user‑defined extensions or non‑standard syntax.
- Performance is optimized for typical use cases, but extremely large files might require additional handling (e.g., disabling auto‑highlighting and manually invoking `_highlight_text`).

---

## See Also

- [`TextEdit`](https://docs.godotengine.org/en/stable/classes/class_textedit.html)  
- [`CodeEdit`](https://docs.godotengine.org/en/stable/classes/class_coededit.html)  
- [`EditorSyntaxHighlighter`](https://docs.godotengine.org/en/stable/classes/class_editorsyntaxhighlighter.html)

---