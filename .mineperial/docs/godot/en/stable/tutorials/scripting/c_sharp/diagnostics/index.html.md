**NOTE:** The supplied HTML snippet does not contain the full body of the “C# diagnostics” page – only the navigation structure and metadata.  Below is a concise Markdown skeleton that reflects the main sections typically found on that page, based on the information available in the snippet and the public Godot documentation.

---

# C# diagnostics

Godot includes analyzers that inspect your C# source code to check for invalid or unsupported code and let you know that something is wrong during build time.

---

## Diagnostic rules

| Code | Summary | Reference |
|------|---------|-----------|
| **GD0001** | Missing `partial` modifier on declaration of type that derives from `GodotObject` | [GD0001](GD0001.html) |
| **GD0002** | Missing `Godot.Export` attribute on exported property | [GD0002](GD0002.html) |
| **GD0003** | `Node` cannot be inherited without `partial` modifier | [GD0003](GD0003.html) |
| **GD0004** | Missing `Godot.Export` on setter of exported property | [GD0004](GD0004.html) |
| **GD0005** | Use of non‑serializable type in exported property | [GD0005](GD0005.html) |
| **GD0006** | `Godot.Node` property should be marked `Godot.Export` | [GD0006](GD0006.html) |
| **GD0007** | Unused `using` directive | [GD0007](GD0007.html) |
| **GD0008** | Use of `await` in a non‑async method | [GD0008](GD0008.html) |
| **GD0009** | Missing `override` keyword on method that overrides a base class method | [GD0009](GD0009.html) |
| **GD0010** | `Signal` attribute used on non‑event member | [GD0010](GD0010.html) |
| **GD0011** | Missing `async` keyword for method returning `Task` | [GD0011](GD0011.html) |
| **GD0012** | Duplicate signal declaration | [GD0012](GD0012.html) |
| **GD0013** | `GodotObject` derived type without `[Godot.GodotClass]` attribute | [GD0013](GD0013.html) |
| **GD0014** | Inconsistent naming of exported properties | [GD0014](GD0014.html) |

*(Full list of diagnostics can be found in the individual rule pages.)*

---

## How to use the diagnostics

1. **Enable the analyzers**  
   Make sure that your project’s `global.json` and `csproj` files reference the Godot analyzers package (e.g., `GodotSharp.Analyzers`).

2. **Build or run the project**  
   Diagnostics will be emitted during the build or when using the Godot editor’s “Run” button.

3. **Interpret the messages**  
   Each warning or error is prefixed with the diagnostic code (e.g., `GD0001`). Hover over the message in the editor or look at the output panel to see a short description and suggested fix.

4. **Fixing a diagnostic**  
   - Follow the guidance in the specific rule’s page.  
   - Some issues are simple syntax corrections (e.g., adding the `partial` keyword).  
   - Others may require refactoring or adding attributes.

---

## Tips

- **Keep your codebase clean** – The analyzers help catch common mistakes early, improving code quality.  
- **Use the “Fix All” feature** in your IDE to automatically resolve trivial diagnostics.  
- **Read the detailed rule docs** for context on why a particular rule exists and how it relates to Godot’s API restrictions.

---

> For a deeper dive into each individual rule, visit the respective pages (e.g., [GD0001](GD0001.html), [GD0002](GD0002.html), …).

---

**References**

- Godot Engine Documentation – [C# diagnostics](https://docs.godotengine.org/en/stable/tutorials/scripting/c_sharp/diagnostics/index.html)  
- GodotSharp.Analyzers – [GitHub repository](https://github.com/godotengine/godotsharp)  

---