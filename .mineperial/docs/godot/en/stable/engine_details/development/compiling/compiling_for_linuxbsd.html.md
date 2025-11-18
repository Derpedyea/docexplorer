**Compiling for Linux, *BSD**  
*Godot Engine (stable) documentation*

---

# 1. Prerequisites

The following tools are required to build Godot from source on Linux or other Unix‑like systems.

| Tool | Minimum version | Notes |
|------|-----------------|-------|
| **C/C++ compiler** | GCC 9+ **or** Clang 6+ | `gcc` or `clang` must be available on the `$PATH`. |
| **Python** | 3.8+ | Used by the build system. |
| **SCons** | 4.0+ | Build system driver. |
| **pkg‑config** | – | Used to detect development libraries. |
| **X11** | – | For building the editor and default platform. |

Optional development libraries (if you want to enable features such as Vulkan, audio back‑ends, etc.) are listed in the **Dependencies** section below.

---

# 2. Installing prerequisites

```bash
# Example for Ubuntu/Debian
sudo apt-get update
sudo apt-get install build-essential pkg-config python3 scons \
                    libx11-dev libxcursor-dev libxrandr-dev libxi-dev \
                    libgl1-mesa-dev libpulse-dev libssl-dev
```

> **Tip:** If you use a different distribution, look up the package names for the libraries above.  
> On *Fedora*: `dnf install gcc gcc-c++ make pkgconfig python3 scons ...`

---

# 3. Optional feature dependencies

| Feature | Linux packages | Description |
|---------|----------------|-------------|
| **Wayland** | `libwayland-dev` | For Wayland display server support. |
| **Vulkan** | `libvulkan-dev` | For Vulkan renderer. |
| **OpenAL** | `libopenal-dev` | Audio backend. |
| **OpenSSL** | `libssl-dev` | HTTPS support in the editor. |
| **BZip2** | `libbz2-dev` | Compression utilities. |
| **Zlib** | `zlib1g-dev` | Compression utilities. |

---

# 4. Obtaining the source

```bash
git clone https://github.com/godotengine/godot.git
cd godot
git checkout stable  # or the desired branch/tag
```

---

# 5. Building

## 5.1 Basic build

```bash
scons platform=linuxbsd
```

This compiles the editor and export templates for Linux/BSD.

## 5.2 Building with additional modules

```bash
scons platform=linuxbsd modules=gdextension
```

Add modules by specifying them with the `modules=` flag or edit `SConstruct`.

## 5.3 Build flags

| Flag | Effect |
|------|--------|
| `use_mono=1` | Enables Mono (.NET) support (requires Mono SDK). |
| `target=release_debug` | Debuggable release build. |
| `target=release` | Optimized release build. |
| `profile=release` | Enables profiling. |
| `custom_debug_symbols=1` | Generates debug symbols for `gdb`. |

Example:

```bash
scons platform=linuxbsd target=release_debug use_mono=1
```

---

# 6. Running the editor

After the build finishes, the editor executable will be in `bin/godot.linuxbsd.opt.tools.64` (or `32`). Launch it:

```bash
./bin/godot.linuxbsd.opt.tools.64
```

---

# 7. Export templates

Export templates are compiled separately:

```bash
scons platform=linuxbsd target=release_debug templates=yes
```

They will appear in `bin/templates/`.

---

# 8. Cross‑compiling for other Unix systems

The same command works on other Unix variants (macOS, BSD, etc.) with the appropriate `platform=` value:

- `platform=linux`
- `platform=bsd` (for FreeBSD, OpenBSD, etc.)
- `platform=darwin` (macOS)

---

# 9. Clean up

```bash
scons -c
```

This removes all compiled artefacts.

---

# 10. Useful links

- [Godot Engine GitHub repo](https://github.com/godotengine/godot)  
- [SCons documentation](https://scons.org/)  
- [pkg‑config documentation](https://www.freedesktop.org/wiki/Software/pkg-config/)  

---