# @GlobalScope

The **`@GlobalScope`** class contains a wide variety of constants and built‑in functions that are available globally in all GDScript files.  
Below is a structured view of the constants and functions that you can use directly without any class prefix.

---

## Error Codes

| Constant | Value | Description |
|----------|-------|-------------|
| `ERR_FILE_EOF` | 1 | End of file reached |
| `ERR_UNAVAILABLE` | 2 | Resource unavailable |
| `ERR_UNCONFIGURED` | 3 | Resource not configured |
| `ERR_UNAUTHORIZED` | 4 | Unauthorized access |
| `ERR_INVALID_PARAMETER` | 5 | Invalid parameter |
| `ERR_ALREADY_IN_USE` | 6 | Resource already in use |
| `ERR_OUT_OF_MEMORY` | 7 | Out of memory |
| `ERR_FILE_NOT_FOUND` | 8 | File not found |
| `ERR_FILE_BAD_DRIVE` | 9 | Bad drive |
| `ERR_FILE_BAD_PATH` | 10 | Bad path |
| `ERR_FILE_BAD_FILE` | 11 | Bad file |
| `ERR_FILE_CANT_OPEN` | 12 | Cannot open file |
| `ERR_FILE_CANT_WRITE` | 13 | Cannot write file |
| `ERR_FILE_CANT_READ` | 14 | Cannot read file |
| `ERR_FILE_UNRECOGNIZED` | 15 | Unrecognized file |
| `ERR_FILE_CORRUPTED` | 16 | Corrupted file |
| `ERR_FILE_MISSING_DEPENDENCIES` | 17 | Missing dependencies |
| `ERR_FILE_EOF` | 18 | End of file (duplicate) |
| `ERR_CANT_OPEN` | 19 | Cannot open |
| `ERR_CANT_CREATE` | 20 | Cannot create |
| `ERR_CANT_WRITE` | 21 | Cannot write |
| `ERR_CANT_READ` | 22 | Cannot read |
| `ERR_INVALID_DATA` | 23 | Invalid data |
| `ERR_FILE_NOT_FOUND` | 24 | File not found (duplicate) |
| `ERR_FILE_TYPE_MISMATCH` | 25 | File type mismatch |
| `ERR_FILE_ALREADY_EXISTS` | 26 | File already exists |
| `ERR_FILE_CANT_OPEN` | 27 | Cannot open (duplicate) |
| `ERR_FILE_CANT_WRITE` | 28 | Cannot write (duplicate) |
| `ERR_FILE_CANT_READ` | 29 | Cannot read (duplicate) |
| `ERR_FILE_NOT_OPEN` | 30 | File not open |
| `ERR_INVALID_OBJECT` | 31 | Invalid object |
| `ERR_INVALID_METHOD` | 32 | Invalid method |
| `ERR_INVALID_ARGUMENT` | 33 | Invalid argument |
| `ERR_INVALID_DECLARATION` | 34 | Invalid declaration |
| `ERR_INVALID_PARAMETER` | 35 | Invalid parameter (duplicate) |
| `ERR_INVALID_FLAGS` | 36 | Invalid flags |
| `ERR_INVALID_FILE` | 37 | Invalid file |
| `ERR_INVALID_DATA` | 38 | Invalid data (duplicate) |
| `ERR_INVALID_TYPE` | 39 | Invalid type |
| `ERR_INVALID_ENUM` | 40 | Invalid enum |
| `ERR_INVALID_NODE` | 41 | Invalid node |
| `ERR_INVALID_INDEX` | 42 | Invalid index |
| `ERR_INVALID_KEY` | 43 | Invalid key |
| `ERR_INVALID_PATH` | 44 | Invalid path |
| `ERR_INVALID_PATH` | 45 | Invalid path (duplicate) |
| `ERR_INVALID_OPERATION` | 46 | Invalid operation |
| `ERR_UNAVAILABLE` | 47 | Unavailable (duplicate) |
| `ERR_UNCONFIGURED` | 48 | Unconfigured (duplicate) |
| `ERR_INCOMPLETE` | 49 | Incomplete |
| `ERR_BUSY` | 50 | Busy |
| `ERR_TIMEOUT` | 51 | Timeout |
| `ERR_CANCELED` | 52 | Canceled |
| `ERR_UNSUPPORTED` | 53 | Unsupported |
| `ERR_OLD_VERSION` | 54 | Old version |
| `ERR_DEPRECATED` | 55 | Deprecated |
| `ERR_LOCKED` | 56 | Locked |
| `ERR_OUT_OF_RANGE` | 57 | Out of range |
| `ERR_SCRIPT_FAILED` | 58 | Script execution failed |
| `ERR_SCRIPT_INVALID` | 59 | Script invalid |
| `ERR_SCRIPT_NOT_LOADED` | 60 | Script not loaded |
| `ERR_SCRIPT_DISABLED` | 61 | Script disabled |
| `ERR_SCRIPT_INVALID_PARAMETER` | 62 | Invalid script parameter |
| `ERR_SCRIPT_INVALID_METHOD` | 63 | Invalid script method |
| `ERR_SCRIPT_INVALID_ARGUMENT` | 64 | Invalid script argument |
| `ERR_SCRIPT_INVALID_TYPE` | 65 | Invalid script type |
| `ERR_SCRIPT_INVALID_INDEX` | 66 | Invalid script index |
| `ERR_SCRIPT_INVALID_KEY` | 67 | Invalid script key |
| `ERR_SCRIPT_INVALID_PATH` | 68 | Invalid script path |
| `ERR_SCRIPT_INVALID_OPERATION` | 69 | Invalid script operation |
| `ERR_SCRIPT_INVALID_FLAGS` | 70 | Invalid script flags |
| `ERR_SCRIPT_INVALID_OBJECT` | 71 | Invalid script object |
| `ERR_SCRIPT_INVALID_DATA` | 72 | Invalid script data |
| `ERR_SCRIPT_INVALID_ENUM` | 73 | Invalid script enum |
| `ERR_SCRIPT_INVALID_TYPE` | 74 | Invalid script type (duplicate) |
| `ERR_SCRIPT_INVALID_PARAMETER` | 75 | Invalid script parameter (duplicate) |
| `ERR_SCRIPT_INVALID_ARGUMENT` | 76 | Invalid script argument (duplicate) |
| `ERR_SCRIPT_INVALID_PATH` | 77 | Invalid script path (duplicate) |
| `ERR_SCRIPT_INVALID_OPERATION` | 78 | Invalid script operation (duplicate) |
| `ERR_SCRIPT_INVALID_FLAGS` | 79 | Invalid script flags (duplicate) |
| `ERR_SCRIPT_INVALID_OBJECT` | 80 | Invalid script object (duplicate) |
| `ERR_SCRIPT_INVALID_DATA` | 81 | Invalid script data (duplicate) |
| `ERR_SCRIPT_INVALID_ENUM` | 82 | Invalid script enum (duplicate) |
| `ERR_SCRIPT_INVALID_TYPE` | 83 | Invalid script type (duplicate) |
| `ERR_SCRIPT_INVALID_ARGUMENT` | 84 | Invalid script argument (duplicate) |
| `ERR_SCRIPT_INVALID_FLAGS` | 85 | Invalid script flags (duplicate) |
| `ERR_SCRIPT_INVALID_ENUM` | 86 | Invalid script enum (duplicate) |
| `ERR_SCRIPT_INVALID_INDEX` | 87 | Invalid script index (duplicate) |
| `ERR_SCRIPT_INVALID_KEY` | 88 | Invalid script key (duplicate) |
| `ERR_SCRIPT_INVALID_OPERATION` | 89 | Invalid script operation (duplicate) |

*(Only the first few constants are shown; the full list can be found in the official Godot reference.)*

---

## Key Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `KEY_NONE` | 0 | No key pressed |
| `KEY_ENTER` | 13 | Enter key |
| `KEY_ESCAPE` | 27 | Escape key |
| `KEY_SPACE` | 32 | Spacebar |
| `KEY_A` | 65 | 'A' key |
| `KEY_B` | 66 | 'B' key |
| ... | ... | ... |

*(Complete list available in the docs.)*

---

## Built‑In Functions

| Function | Signature | Description |
|----------|-----------|-------------|
| `print(...)` | `print(var ...)` | Prints the given arguments to the console. |
| `assert(condition, message)` | `assert(bool condition, String message = "")` | Raises an assertion error if `condition` is `false`. |
| `load(resource_path)` | `load(String path)` | Loads a resource from the given path. |
| `preload(resource_path)` | `preload(String path)` | Preloads a resource at compile time. |
| `str(object)` | `str(Object obj)` | Returns a string representation of `obj`. |
| `int(value)` | `int(value)` | Converts `value` to an integer. |
| `float(value)` | `float(value)` | Converts `value` to a float. |
| `bool(value)` | `bool(value)` | Converts `value` to a boolean. |
| `Array()` | `Array()` | Creates a new Array. |
| `Dictionary()` | `Dictionary()` | Creates a new Dictionary. |
| `OS.get_name()` | `OS.get_name()` | Returns the name of the operating system. |
| `OS.get_process_id()` | `OS.get_process_id()` | Returns the current process ID. |
| `OS.get_ticks_msec()` | `OS.get_ticks_msec()` | Returns the number of milliseconds since the engine started. |
| `OS.get_ticks_usec()` | `OS.get_ticks_usec()` | Returns the number of microseconds since the engine started. |
| `OS.get_version()` | `OS.get_version()` | Returns the OS version string. |
| `OS.get_locale()` | `OS.get_locale()` | Returns the system locale. |
| `OS.get_current_locale()` | `OS.get_current_locale()` | Returns the current locale set in the project. |
| `OS.get_date()` | `OS.get_date()` | Returns the current date as a dictionary. |
| `OS.get_time()` | `OS.get_time()` | Returns the current time as a dictionary. |
| `OS.set_window_title(title)` | `OS.set_window_title(String title)` | Sets the window title. |
| `OS.set_window_size(Vector2 size)` | `OS.set_window_size(Vector2 size)` | Sets the window size. |
| `OS.get_window_size()` | `OS.get_window_size()` | Gets the current window size. |
| `OS.get_window_min_size()` | `OS.get_window_min_size()` | Returns the minimum window size. |
| `OS.get_window_max_size()` | `OS.get_window_max_size()` | Returns the maximum window size. |
| `OS.get_window_position()` | `OS.get_window_position()` | Gets the window position. |
| `OS.set_window_position(Vector2 position)` | `OS.set_window_position(Vector2 position)` | Sets the window position. |
| `OS.is_debug_build()` | `OS.is_debug_build()` | Returns whether the build is a debug build. |
| `OS.has_feature(String feature)` | `OS.has_feature(String feature)` | Checks if a feature is enabled. |
| `OS.has_environment(String name)` | `OS.has_environment(String name)` | Checks for an environment variable. |
| `OS.get_environment(String name)` | `OS.get_environment(String name)` | Reads an environment variable. |
| `OS.set_environment(String name, String value)` | `OS.set_environment(String name, String value)` | Sets an environment variable. |
| `OS.get_clipboard()` | `OS.get_clipboard()` | Returns the clipboard content. |
| `OS.set_clipboard(String text)` | `OS.set_clipboard(String text)` | Sets the clipboard content. |
| `OS.is_file_access_allowed()` | `OS.is_file_access_allowed()` | Checks if file access is allowed. |
| `OS.get_exit_code()` | `OS.get_exit_code()` | Gets the exit code of the last process. |
| `OS.exit()` | `OS.exit(int code=0)` | Exits the application. |

*(Again, this is a trimmed subset; refer to the full reference for all functions.)*

---

## Usage Examples

```gdscript
# Print a message
print("Hello, world!")

# Load a texture
var tex = preload("res://my_texture.png")

# Get current OS name
var os_name = OS.get_name()
print("Running on: ", os_name)

# Convert a string to an integer
var number = int("42")
```

---

### Notes

* Constants are case‑sensitive and follow the naming convention of `ERR_*`, `KEY_*`, etc.
* Built‑in functions are available in every script without an explicit `GlobalScope` prefix.
* Some functions are part of other classes (`OS`, `Input`, `SceneTree`, …) but are still accessible globally.

For the exhaustive list of constants and functions, see the official [Godot documentation for @GlobalScope](https://docs.godotengine.org/en/stable/classes/class_%40globalscope.html).