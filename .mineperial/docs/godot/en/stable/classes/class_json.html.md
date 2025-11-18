**JSON – Godot Engine Documentation**

> **Inherits**: `Resource` → `RefCounted` → `Object`  
> **Purpose**: Helper class for creating and parsing JSON data.

---

## Description

The `JSON` class provides a set of static functions that convert arbitrary Godot data types to and from JSON strings.  
It can be used in GDScript, C#, C++, or any other language that interacts with the Godot API.

> *JSON is a lightweight, human‑readable data interchange format.  
> This class lets you quickly serialize complex structures such as dictionaries, arrays, and custom objects to a string, and parse a string back into those structures.*

---

## Methods

| Method | Signature | Description | Return |
|--------|-----------|-------------|--------|
| `print_json` | `static func print_json(data: Variant, indent: int = 0, pretty: bool = true) -> String` | Serialises `data` to a JSON string. `indent` specifies the indentation level for pretty‑printed output. If `pretty` is `true`, the string is formatted for readability. | `String` (JSON representation) |
| `print_error` | `static func print_error(data: Variant, indent: int = 0, pretty: bool = true) -> String` | Same as `print_json`, but logs an error if the conversion fails. Useful for debugging complex objects. | `String` |
| `parse_string` | `static func parse_string(json_string: String) -> Variant` | Parses `json_string` into a Godot `Variant` (Dictionary, Array, etc.). Returns `null` if parsing fails. |
| `parse_string` (overload) | `static func parse_string(json_string: String, out_obj: Variant) -> Error` | Alternative that outputs the parsed value into `out_obj` and returns an `Error` code. |
| `parse_error` | `static func parse_error(json_string: String) -> Error` | Parses a JSON string and returns an `Error` code indicating success (`OK`) or the type of failure (`ERR_PARSE_ERROR`, etc.). |

> **Note**: All methods are **static**, meaning you do not need to create a `JSON` instance to use them.  
> The methods work with any `Variant` type that can be represented in JSON: `Dictionary`, `Array`, `String`, `int`, `float`, `bool`, and `null`.

---

## Example Usage

```gdscript
# Example in GDScript
var data = {
	"name": "Alice",
	"age": 30,
	"skills": ["GDScript", "C++", "Python"]
}

# Convert to JSON string
var json_text = JSON.print_json(data, 4, true)
print(json_text)

# Parse the JSON string back into a Variant
var parsed = JSON.parse_string(json_text)
print(parsed)
```

```
# Output
{
	"name": "Alice",
	"age": 30,
	"skills": ["GDScript", "C++", "Python"]
}
{
	name = Alice
	age = 30
	skills = [
		GDScript
		C++
		Python
	]
}
```

---

## Common Use Cases

| Scenario | Recommended Method |
|----------|--------------------|
| Exporting a game configuration to a file | `JSON.print_json` |
| Loading settings from a JSON file | `JSON.parse_string` |
| Debugging a complex data structure | `JSON.print_error` |

---

## References

* [Godot 4.4 Documentation – Class Reference](https://docs.godotengine.org/en/stable/classes/class_json.html)  
* [Godot 4.4 API Reference – `JSON` Class](https://docs.godotengine.org/en/stable/classes/class_json.html)  

---

**Tip**  
When working with large or deeply nested structures, enable `pretty` printing (`pretty = true`) to make debugging output easier to read. If you’re writing to a file, you can simply call `FileAccess.open(path, FileAccess.WRITE).store_string(JSON.print_json(data))`.