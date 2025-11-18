**Note:** This page contains the official Godot Engine documentation for compiling the engine on macOS. The following Markdown is a cleaned‑up representation of the main content – headings, lists, code blocks, and links – extracted from the original HTML.  

---  

# Compiling for macOS  

## 1. Requirements  

To build Godot on macOS you need the following tools installed:  

| Tool | Minimum version | Notes |
|------|-----------------|-------|
| **Python** | 3.8+ | The SCons build system is written in Python. |
| **SCons** | 4.0+ | Handles the compilation process. |
| **Xcode** | — | Either the full Xcode IDE or the lightweight “Command‑Line Tools” is sufficient. |
| **Vulkan SDK** | — | Only required if you want to build with MoltenVK support for the Vulkan renderer. |

*Optional* – If you plan to build the editor with the new C# support, you’ll also need the [.NET SDK](https://dotnet.microsoft.com/) installed.

## 2. Setting up the environment  

1. **Install Xcode or Command‑Line Tools**  
   ```bash
   xcode-select --install
   ```
2. **Install Homebrew** (optional but recommended)  
   ```bash
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
   ```
3. **Install Python and SCons**  
   ```bash
   brew install python scons
   ```
4. **(Optional)** Install the Vulkan SDK if you want Vulkan support.  
   ```bash
   brew install --cask vksdk
   ```

## 3. Building the engine  

Navigate to the root of the Godot source tree and run SCons with the `platform=osx` target.

```bash
# Clean previous builds
scons -c

# Build the editor
scons platform=osx target=editor

# Build the export templates
scons platform=osx target=template_release
```

### 3.1 Using different build options  

| Flag | Description | Example |
|------|-------------|---------|
| `debug` | Builds a debug version (default) | `scons debug=1` |
| `target=release_debug` | Release build with debug symbols | `scons target=release_debug` |
| `use_llvm=0` | Force Clang/LLVM to use GCC (useful on older macOS) | `scons use_llvm=0` |
| `custom_modules=module_name1,module_name2` | Include specific modules | `scons custom_modules=websocket,websocket_server` |

## 4. Building export templates  

Export templates are the pre‑compiled binaries that the editor uses to export projects to macOS and other platforms.

```bash
scons platform=osx target=template_debug
```

The resulting binaries are located in `bin/`.  
Copy the generated files (e.g., `godot.osx.opt.dev.64` and `godot.osx.opt.release.64`) into the `templates/` directory of your project or into the `~/.config/godot/templates/` folder so that the editor can use them automatically.

## 5. Building custom modules  

If you have a custom module in `modules/custom_module/`, simply add it to the `custom_modules` flag:

```bash
scons platform=osx target=editor custom_modules=custom_module
```

## 6. Common build issues on macOS  

| Issue | Symptom | Fix |
|-------|---------|-----|
| **“Command not found: scons”** | SCons is not installed or not in `$PATH`. | Install via Homebrew (`brew install scons`) or add its location to `$PATH`. |
| **Linker errors due to Xcode 14+** | The compiler tries to link against a missing `libSystem.tbd`. | Update Xcode or set `CC=clang` explicitly in the environment. |
| **Vulkan build fails** | Missing `vulkan-headers` or `libMoltenVK` libraries. | Install Vulkan SDK and set `VULKAN_SDK` env variable, e.g. `export VULKAN_SDK=/usr/local/opt/vulkansdk/1.3.0.0`. |
| **“Unsupported architecture”** | Trying to build for an architecture not enabled in the Xcode project. | Use `arch=arm64` or `arch=x86_64` as appropriate, e.g., `scons arch=arm64`. |

## 7. Running the built editor  

```bash
cd bin
./godot.osx.opt.debug.64   # or .release.64 for a release build
```

The editor will launch as a native macOS application. To run it from Finder, you can drag the binary into the `Applications` folder and launch it like any other app.

## 8. Packaging the engine for distribution  

After building, package the binaries into a macOS app bundle or a zip file for distribution. Godot provides a script `macos/pack_app.sh` that automates creating a `.app` bundle:

```bash
bash macos/pack_app.sh
```

The output will be a `Godot.app` that can be distributed via the App Store or any other channel.

## 9. Additional resources  

- [Official Godot build guide (Linux, Windows, macOS)](https://docs.godotengine.org/en/stable/development/compiling.html)  
- [SCons documentation](https://scons.org/doc/)  
- [Xcode command‑line tools](https://developer.apple.com/download/more/)  

---  

This Markdown mirrors the structure and essential information from the original Godot Engine “Compiling for macOS” documentation page.