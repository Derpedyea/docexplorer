**Validation layers**

Validation layers allow developers to verify that an application uses the Vulkan API correctly.  
They can be enabled in both debug and release builds – even in exported projects – and give
valuable feedback while developing, testing, or shipping a game.

---

## What are Vulkan validation layers?

* **Validation layers** are optional modules that intercept Vulkan API calls, check them
against the specification, and report errors, warnings or performance hints.
* They are useful for catching bugs early, diagnosing driver or platform issues,
and ensuring that your engine and game code are compliant with Vulkan’s rules.

---

## Enabling validation layers

### In the Godot editor

1. Open **Project → Project Settings**.  
2. Go to **Rendering → Vulkan**.  
3. Enable the checkbox **“Enable Validation Layers”** (available only in debug builds
   by default, but can be toggled for release builds).

### In exported projects

You can enable the layers at runtime by setting the environment variable
`GODOT_VULKAN_VALIDATION=1` before launching the executable:

```bash
# Linux/macOS
export GODOT_VULKAN_VALIDATION=1
./godot.x86_64

# Windows
set GODOT_VULKAN_VALIDATION=1
godot.exe
```

Alternatively, for a single run you can prefix the command:

```bash
GODOT_VULKAN_VALIDATION=1 ./godot
```

### In the `godot` source build

If you build Godot from source, the validation layers are enabled automatically
in the `debug` configuration. For a `release` configuration you can add the
following to the `CMakeLists.txt` (or the corresponding `SCons` option):

```cmake
add_definitions(-DGODOT_VULKAN_VALIDATION=1)
```

---

## Configuration details

* **Layer names** – By default Godot registers the *VK_LAYER_KHRONOS_validation* layer.
  If multiple layers are available on the system, the first one found is used.
* **Log output** – Validation messages are written to the standard error stream
  and appear in the editor’s **Debugger → Output** panel.
* **Performance** – Validation layers are **slow**; keep them disabled in final
  releases unless you need to debug a Vulkan crash or driver issue.

---

## Known issues & tips

| Issue | Description | Work‑around |
|-------|-------------|-------------|
| **High CPU usage** | Validation layers significantly increase CPU load. | Disable them in release builds. |
| **Crash on some GPUs** | Certain drivers may misbehave when the layer is active. | Disable the layer or update the driver. |
| **Missing layer on Windows** | Older Vulkan SDKs may lack the `VK_LAYER_KHRONOS_validation` layer. | Install the latest [Vulkan SDK](https://vulkan.lunarg.com/sdk) or use the `VK_LAYER_LUNARG_standard_validation` bundle. |

---

## Further reading

* [Handling compatibility breakages](../../handling_compatibility_breakages.html) – Learn how to manage differences between Vulkan driver versions.
* [Vulkan debugging best practices](../debugging/vulkan_debugging.html) – Advanced techniques for diagnosing Vulkan issues.
* [Official Vulkan documentation](https://www.khronos.org/vulkan/) – Reference material for the Vulkan API and layers.

---

*This page is part of the official Godot Engine documentation and is intended for developers working with the Vulkan renderer.*