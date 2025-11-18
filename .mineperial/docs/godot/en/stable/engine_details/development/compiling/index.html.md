**Building from source**  
*Godot Engine – Stable documentation*  

---

### Overview

Godot is built with the SCons build system and follows standard C++ project conventions.  
After you have the source code and the necessary tools for your platform, compiling the engine should be straightforward and fast.

---

## 1. Getting the source

```bash
# Clone the repository (recommended for continuous updates)
git clone https://github.com/godotengine/godot.git
cd godot

# Or download a release tarball and unpack it
wget https://downloads.tuxfamily.org/godotengine/4.3/Godot_v4.3.tar.xz
tar xf Godot_v4.3.tar.xz
cd Godot_v4.3
```

> **Tip:** Use `git checkout <branch>` or `git checkout v4.3` to switch to a specific release branch.

---

## 2. Prerequisites

| Platform | Tools & Packages |
|----------|-----------------|
| **Linux** | `scons`, `python3`, compiler (`gcc`, `clang`), `git`, `pkg-config`, `libxrandr-dev`, `libxi-dev`, `libxinerama-dev`, `libxcursor-dev`, `libxss-dev`, `libgles2-mesa-dev`, `libxkbcommon-dev`, `libdbus-1-dev`, `libwayland-dev`, `libxkbcommon-x11-dev` |
| **macOS** | Xcode command line tools, `scons`, `python3`, `git` |
| **Windows** | Visual Studio 2019/2022 (MSVC), `scons`, `python3`, `git` (optional) |

> **Note:** On Windows, you may also use MinGW‑64 if you prefer GCC.  
> Make sure `scons` and `python3` are in your PATH.

---

## 3. Building the editor

```bash
# Basic editor build
scons platform=linuxbsd target=editor

# For a release build
scons platform=linuxbsd target=editor release=yes

# Windows
scons platform=windows target=editor

# macOS
scons platform=osx target=editor
```

> The `scons` command automatically detects your platform.  
> Use `scons -j4` (or `-j8`, `-j12` etc.) to parallelize the build.

### Custom build options

* `profile=debug` – build a debug binary  
* `module_*` – enable a specific Godot module (`module_csg`, `module_websocket`, etc.)  
* `tools=yes` – include editor tools and assets  
* `use_lto=yes` – enable Link Time Optimization

Example – build the editor with the CSG module in debug mode:

```bash
scons profile=debug module_csg=yes
```

---

## 4. Building the headless server

```bash
scons platform=linuxbsd target=server
```

> This generates a lightweight server executable that can run networked games without a graphical editor.

---

## 5. Building for mobile and other platforms

| Platform | Build command |
|----------|---------------|
| Android | `scons platform=android target=editor` |
| iOS     | `scons platform=iphone target=editor` |
| Web     | `scons platform=web target=editor` |
| X11     | `scons platform=x11 target=editor` |
| Windows Server | `scons platform=windows target=server` |

> For mobile builds, you may need additional SDKs (Android NDK, iOS Xcode) and environment variables (`ANDROID_HOME`, `XCODE_SELECT`).  

---

## 6. Running the build

After a successful build, the executable is located in the `bin/` directory:

- `bin/godot.linuxbsd.editor.x86_64`  (Linux)
- `bin/godot.windows.editor.64.exe`    (Windows)
- `bin/godot.osx.editor.64`           (macOS)

Launch the editor or server directly from the terminal:

```bash
./bin/godot.linuxbsd.editor.x86_64
```

---

## 7. Updating the source

```bash
git pull origin master  # or your current branch
```

Rebuild after pulling:

```bash
scons -c                # clean previous build
scons
```

---

## 8. Troubleshooting

| Issue | Fix |
|-------|-----|
| **SCons not found** | Install via `pip install scons` or add the SCons executable to your PATH |
| **Missing libraries (e.g., libX11)** | Install the required development packages (`sudo apt install libx11-dev` on Ubuntu) |
| **Build fails with “Fatal error”** | Ensure compiler flags match your OS (e.g., add `msvc=yes` for Visual Studio on Windows) |

---

## 9. Further reading

- **[Getting the source](/getting_source.html)**
- **[Building from source – advanced topics](/compiling/advanced.html)**
- **[Godot build system – SCons](https://scons.org/)**

---

**Happy hacking!**