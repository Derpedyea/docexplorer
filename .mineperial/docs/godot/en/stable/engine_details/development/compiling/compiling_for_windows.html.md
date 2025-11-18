**Compiling for Windows** *(Godot Engine – Stable Documentation)*  

---  

## Overview  

This page explains the steps required to build the Godot Engine from source on a Windows machine.  
The instructions cover the prerequisites, environment setup, and the actual build commands for both the editor and the export templates.  

> **Tip:** The build system used by Godot is [SCons](https://scons.org/). All commands shown here are run from a terminal inside the root of the Godot source tree.

---  

## Requirements  

| Item | Details | Notes |
|------|---------|-------|
| **C++ compiler** | • Visual Studio Community 2019 or newer (Visual Studio 2022 is recommended).  <br>• MSBuild tools from Visual Studio 2019/2022. | 32‑bit and 64‑bit builds are supported; the default is 64‑bit. |
| **Python 3.x** | Python is used by SCons to orchestrate the build. | Any recent Python 3 installation works (Python 3.7+). |
| **MSYS2 / MinGW (optional)** | If you prefer a MinGW toolchain, install MSYS2 and the `mingw-w64-x86_64-toolchain` packages. |  Provides a POSIX‑style shell for running SCons. |
| **Git** | For cloning the repository. |  |
| **Visual Studio Build Tools** (for MSVC) | Install the “Desktop Development with C++” workload. |  |

---  

## Setting Up the Development Environment  

### 1. Install Visual Studio (MSVC)

1. Download **Visual Studio Community 2022** (or 2019).  
2. During installation, select the *“Desktop Development with C++”* workload.  
3. Make sure **MSBuild** and **Windows 10 SDK** are installed.  

> *If you only need a 32‑bit build, check the *“MSVC v142 – VS 2019 C++ x86/x64 build tools”* component.*

### 2. Install MSYS2 (optional)

```bash
# 1. Download the installer from https://www.msys2.org/
# 2. Open the MSYS2 shell and run:
pacman -Syu
# 3. Install the toolchain
pacman -S --needed base-devel mingw-w64-x86_64-toolchain
```

### 3. Set Environment Variables  

For MSVC builds, `scons` automatically picks up the Visual Studio tools.  
If you want to force a particular compiler path:

```bat
set PATH=C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\VC\Tools\MSVC\<version>\bin\Hostx64\x64;%PATH%
```

For MinGW builds inside MSYS2, the shell already points to the correct `gcc`/`g++`.

---  

## Building Godot

Open a terminal inside the Godot source directory and run:

```bash
# For a 64‑bit editor build
scons platform=windows target=debug

# For a 32‑bit editor build (requires MSVC 32‑bit toolset)
scons platform=windows target=debug arch=x86

# To build export templates in addition to the editor
scons platform=windows target=release tools=yes
```

### Build Options

| Option | Value | Effect |
|--------|-------|--------|
| `target` | `debug` | Builds the editor with debug symbols (slower but easier to debug). |
| `target` | `release` | Optimised release build. |
| `tools` | `yes` | Includes export templates in the build. |
| `arch` | `x86` | Builds a 32‑bit binary. Omit for 64‑bit. |
| `profile` | `release_debug` | Generates a release build that still contains debug information. |

**Example: Building the release editor with templates**

```bash
scons platform=windows target=release tools=yes
```

After the build completes, the binaries will be located in `bin/`:

- `godot.windows.opt.tools.64.exe` – Optimised editor with export templates.  
- `godot.windows.debug.exe` – Debug editor.  

---  

## Debugging the Build

1. **Run with `scons -j4`** to parallelise the compile.  
2. If you encounter *“Error 110: ...”* while compiling, verify that the correct Visual Studio version is on the `PATH`.  
3. Use `scons --help` to view all supported command‑line options.

---  

## Common Issues

| Symptom | Fix |
|---------|-----|
| **MSBuild not found** | Add the MSVC path to `PATH`, or run the *“Developer Command Prompt for VS”*. |
| **MinGW compilation fails** | Ensure the `mingw-w64-x86_64-gcc` package is installed and the `PATH` is set to the `mingw64/bin` directory. |
| **`scons` hangs** | Increase the `-j` value to match the number of CPU cores, e.g., `scons -j8`. |

---  

## Next Steps

* After building, you can test the editor by running the generated `.exe`.  
* To build a specific export target (e.g., Windows 32‑bit), adjust the `platform` and `arch` flags accordingly.  
* For cross‑compiling to other platforms, see the corresponding sections: [Linux](compiling_for_linuxbsd.html) or [Mac OS](compiling_for_macos.html).

---  

**References**

- [SCons Documentation](https://scons.org/doc/production/HTML/scons-user.html)  
- [MSYS2 Install Guide](https://www.msys2.org/)  

---  

*This documentation is part of the official Godot Engine documentation and is licensed under the MIT license. For more detailed information, refer to the full source page on the official site.*