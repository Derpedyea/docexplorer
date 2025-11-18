# Qt Creator

> *This page explains how to set up and use **Qt Creator** as the external IDE for Godot projects. The content below is a concise, Markdown‑formatted version of the original documentation.  
> (If you need more detailed steps or screenshots, refer to the official Godot documentation.)*

---

## 1. Installing Qt Creator

1. Download the **Qt Creator** installer from the [Qt website](https://www.qt.io/download).  
2. Choose the **Open Source** version; it is free for both commercial and non‑commercial use.  
3. Follow the on‑screen instructions to install.  

> **Tip**: On Linux you can also install via your distribution’s package manager, e.g. `sudo apt install qtcreator` for Ubuntu.

---

## 2. Importing an Existing Godot Project

1. Open **Qt Creator**.  
2. Select **New Project** → **Import Project** → **Import Existing Project…**.  
3. Navigate to your Godot project directory and click **Open**.  
4. Qt Creator will automatically create a **.pro** file that contains the necessary build settings for Godot’s C++ modules.  

---

## 3. Configuring the C++ Build Environment

| Step | Description | Notes |
|------|-------------|-------|
| **3.1** | Set the **Qt** kit that matches your platform (Desktop, Android, etc.). | Make sure the Qt version matches your Godot engine version. |
| **3.2** | Point the **C++ compiler** to the one used to build Godot (e.g., GCC/Clang on Linux, MSVC on Windows). | Use the same compiler that produced the `godot.exe` or `libgodot.so`. |
| **3.3** | Add the Godot source root to the include paths. | `-I path/to/godot/headers` |
| **3.4** | Add the Godot modules (e.g., `modules/gdextension` or `modules/`, depending on what you need) to the source list. | Use `SOURCES += ...` in your `.pro` file. |

---

## 4. Building the Extension

```bash
qmake   # Generates Makefile
make    # Builds the shared library (.so/.dll/.dylib)
```

After building, copy the resulting library into `godot_modules/gdextension/` and register it in your `project.godot` file.

---

## 5. Using the External Editor for GDScript

Although Qt Creator is primarily a C++ IDE, it can also be used for GDScript:

1. Go to **Tools → Options → Editor → External Tools** in Godot.  
2. Configure Qt Creator to open `.gd` files.  
3. Enable *Automatic Reload* so that Godot picks up changes when you hit **Ctrl‑S**.

---

## 6. Debugging with Qt Creator

1. Configure the **Debug** kit in Qt Creator to point to the Godot executable.  
2. Use breakpoints in your C++ extension files.  
3. Launch Godot from Qt Creator; the debugger will attach automatically.

---

## 7. Common Issues & FAQ

| Issue | Fix |
|-------|-----|
| “Missing include files” | Verify the include path to the Godot headers. |
| “Linker errors” | Ensure that the library path points to the correct `libgodot.*` files. |
| “No symbols loaded” | Enable *Debug Symbols* in the build configuration. |
| “Godot crashes after build” | Make sure the extension is compiled with the same compiler flags as the engine (e.g., same C++ standard). |

---

### Further Reading

- [Godot 4.0 Documentation – C++ Modules](https://docs.godotengine.org/en/stable/tutorials/plugins/cpp_modules.html)  
- [Qt Creator Documentation](https://doc.qt.io/qtcreator/)

---