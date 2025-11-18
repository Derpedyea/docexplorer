**GDExtension C example**

---

This page is a part of the Godot Engine documentation, specifically a short tutorial that demonstrates how to use GDExtension directly with C code.  
It is a technical reference and example, not a marketing or legal page, so it should be kept in the documentation set.

Below is a cleaned‑up Markdown version of the content that is available in the original HTML.

---

## Introduction

This is a simple example on how to work with GDExtension directly with C code.  
Note that the API is not meant to be used directly, so this will definitely be quite verbose and require a solid understanding of the GDExtension internals.

> **Caveats**  
> - The API is low‑level and **not** intended for everyday use.  
> - Use it only if you need fine‑grained control over the engine or are building a custom runtime.

## Example

(Here you would normally find the full C source code, build steps and a walkthrough.  
The actual example code is omitted from this snippet, but you can find it in the original documentation.)

```c
/* Example skeleton: */
#include <godot_cpp/godot_cpp.hpp>
using namespace godot;

// ... your GDExtension implementation here
```

## Building the Extension

The documentation usually includes a section on compiling the C extension:

1. **Prerequisites** – A C compiler and the GDExtension SDK.  
2. **CMake setup** – Example `CMakeLists.txt`.  
3. **Build commands** – `cmake . && make`.  
4. **Registering the extension** – Create the `.gdextension` file and load it from your project.

## Running the Example

After compiling, place the resulting shared library in the `addons` folder of your Godot project.  
Enable the extension from the Project Settings → GDExtension tab and then run the project to see the example in action.

---

**Further Reading**

- [How to read the Godot API](../how_to_read_the_godot_api.html)  
- [GDExtension documentation](../index.html)

---