# EditorSyntaxHighlighter

**Inherits**: `SyntaxHighlighter<Resource<RefCounted<Object>>>`

Base class for syntax highlighters used by the Godot **ScriptEditor**.

---

## Description

`EditorSyntaxHighlighter` is the core class that provides language‑specific syntax
highlighting for script files in the Godot editor. It is intended to be subclassed
by language‑specific highlighters (e.g. `GDScriptSyntaxHighlighter`, `CSharpSyntaxHighlighter`, etc.).
The class exposes a small API that the editor calls to obtain keyword lists,
symbol lists, and color information for a given script line.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `language` | `String` | `""` | The name of the language that this highlighter is handling (e.g. `"gdscript"`). |

---

## Methods

| Method | Return type | Parameters | Description |
|--------|-------------|------------|-------------|
| `get_keywords(category: int)` | `PackedStringArray` | `category: int` | Returns a list of keywords for the given category (e.g. normal, type, keyword). |
| `get_symbols(category: int)` | `PackedStringArray` | `category: int` | Returns a list of symbols for the given category. |
| `get_color(category: int, line: int)` | `Color` | `category: int, line: int` | Returns the color to use for a particular syntax element in the given line. |
| `set_language(language: String)` | `void` | `language: String` | Assigns the language that this highlighter will process. |
| `get_language()` | `String` |  | Returns the current language name. |

> **Note**: In practice you would normally subclass `EditorSyntaxHighlighter`
> and implement `get_keywords()`, `get_symbols()`, and `get_color()` for your
> language. The editor will then call these methods automatically.

---

## Signals

*(None)*

---

## See also

* [`SyntaxHighlighter`](../class_syntaxhighlighter.html)
* [`GDScriptSyntaxHighlighter`](../class_gdscriptsyntaxhighlighter.html)

---