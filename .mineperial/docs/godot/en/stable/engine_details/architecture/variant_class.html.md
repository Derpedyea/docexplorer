**Variant class**  
*Godot Engine (stable) documentation*

---

The Variant class is the cornerstone of Godot’s type system, providing a lightweight, flexible container capable of holding any of the engine’s built‑in data types. On 64‑bit platforms a Variant occupies just 24 bytes (20 bytes on 32‑bit platforms), making it an efficient choice for passing values between C++ and GDScript, storing data in dictionaries, arrays, or resources, and serialising objects.

Key points:

* **Storage** – Variants can store primitive types (`int`, `float`, `bool`, `String`), compound types (`Array`, `Dictionary`, `Object`), and many engine‑specific types such as `Vector3`, `Color`, `Transform`, etc.
* **Conversion** – Automatic conversion is performed when assigning a value to a Variant of a different type, e.g. an `int` can be stored in a Variant and later retrieved as a `float`.
* **Memory layout** – The Variant uses a union to keep the data while a small type tag indicates which actual type is stored. This design keeps the size minimal and enables fast type checking.
* **Use cases** – Variants are the backbone of the signal system, the inspector, the editor’s property editor, the resource cache, and the scripting API.

For a deeper dive into its implementation details, see the *engine_details/architecture* section of the Godot documentation.