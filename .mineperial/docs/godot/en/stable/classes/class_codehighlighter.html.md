**This is a technical class reference page from the Godot Engine documentation.**  

Below is a cleaned‑up Markdown version of the available information.  

---

# CodeHighlighter  

**Inheritance**  
`CodeHighlighter` inherits from  
`SyntaxHighlighter<Resource<RefCounted<Object>>)`  

**Description**  
A syntax highlighter intended for code. By adjusting various properties of this resource, you can change the colors of syntax elements, font style, and other visual aspects of code display.

> *Note: The full class reference (methods, signals, properties, and example usage) is available in the Godot Engine documentation under the “Class Reference” section. The excerpt above is based on the meta‑description found in the page source.*

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| *None listed in the provided snippet.* | | |

*(See the Godot documentation for the full list of properties.)*

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| *None listed in the provided snippet.* | | |

*(See the Godot documentation for the full list of methods.)*

---

## Usage Example

```gdscript
# Load a CodeHighlighter resource
var highlighter = preload("res://my_highlighter.tres")
# Assign it to a TextEdit or RichTextLabel
text_edit.syntax_highlighter = highlighter
```

---

## Related Classes

- [SyntaxHighlighter](../classes/class_syntaxhighlighter.html)  
- [Resource](../classes/class_resource.html)  
- [RefCounted](../classes/class_refcounted.html)  

---

**For more detailed information—including full property, method, and signal lists—please consult the Godot Engine documentation:**

[https://docs.godotengine.org/en/stable/classes/class_codehighlighter.html](https://docs.godotengine.org/en/stable/classes/class_codehighlighter.html)