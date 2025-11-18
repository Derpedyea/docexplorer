**Compiling with .NET**  
*Godot Engine (stable) documentation*

---

## Overview
This guide explains how to enable and compile the Godot engine with the optional **.NET / C#** module.  It covers the required .NET SDK version, how to activate the module during the build, and platform‑specific notes for building on Windows, macOS, and Linux.

> **Requirements**  
> • `dotnet-sdk` **8.0+** (any later 8.x or 9.x release is fine).  
> • `dotnet --info` can be used to verify the installed SDKs.

---

## Enabling the .NET module

By default the Godot build system disables the .NET module. To enable it, add the `module_dotnet_enabled=yes` flag when invoking the build tool (SCons).  Example:

```bash
# Windows
scons platform=windows target=release_debug module_dotnet_enabled=yes

# macOS / Linux
scons platform=macos target=release_debug module_dotnet_enabled=yes
```

You can also set this flag globally in `SConstruct` or by creating a `build.conf` file.

---

## Building for different platforms

| Platform | Command | Notes |
|----------|---------|-------|
| Windows | `scons platform=windows target=release_debug module_dotnet_enabled=yes` | Builds `Godot_v4.0.windows.64.exe` with .NET support. |
| macOS | `scons platform=macos target=release_debug module_dotnet_enabled=yes` | Builds a macOS bundle. |
| Linux | `scons platform=linuxbsd target=release_debug module_dotnet_enabled=yes` | For Linux distributions that support the BSD build. |
| Mono | `scons platform=windows target=release_debug module_dotnet_enabled=yes` with `USE_MONO=yes` | If you prefer the older Mono runtime. |

> **Tip** – For cross‑platform builds, use the `target=release` flag to produce a fully optimized binary.

---

## Project configuration

Once the engine is compiled, you can create a C# project:

1. Open the editor.
2. Choose *New Project* → *C#*.
3. The engine will automatically detect the .NET SDK and create a `GodotSharp.dll` reference.

> **Debugging** – Use the built‑in `dotnet` tools (`dotnet run`, `dotnet build`) inside the `ProjectName` directory for C# scripts.

---

## Common pitfalls

| Issue | Fix |
|-------|-----|
| `module_dotnet_enabled` ignored | Ensure `SCons` is up‑to‑date; delete `SCons/BuildCache`. |
| Runtime crashes on Windows | Check that `dotnet-hostfxr.dll` is in the same directory as the editor executable. |
| C# scripts not compiling | Verify that the `ProjectSettings/mono/` folder is correctly configured. |

---

## Further reading

- [Compiling with PCK encryption key](../compiling_with_script_encryption_key.html)  
- [Cross‑compiling for iOS on Linux](../cross-compiling_for_ios_on_linux.html)  

---