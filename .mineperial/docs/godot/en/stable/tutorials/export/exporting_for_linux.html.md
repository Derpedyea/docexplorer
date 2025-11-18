# Exporting for Linux

> **Note:** This page explains how to package a Godot project for distribution on Linux. The steps are the same for both Godot 3.x and Godot 4.x, with only minor differences in the export templates and the names of the exported binaries.

---

## 1.  Overview

The simplest way to distribute a game for PC is to copy the Godot executable (`godot` or `godot.x11`), compress the project folder, and send it to someone else.  
However, this is rarely desirable for production releases. Godot offers a more elegant application‑style packaging workflow that bundles the project resources, the export template, and the required libraries into a single binary or installer.

---

## 2.  Prerequisites

| Item | Detail |
|------|--------|
| **Godot version** | Any recent stable release. |
| **Export templates** | The *Linux/X11* export templates must be installed. |
| **Target architecture** | 64‑bit (`x86_64`) is recommended for modern distributions. |
| **Optional: GUI toolkit** | If you want a native splash screen or a custom icon, create the `icon.png` and `splash.png` in the project root. |

### Installing the Export Templates

1. Open the **Project > Install Export Templates** menu.  
2. Godot will download the templates automatically.  
3. After installation, the **Project > Export** dialog will include “Linux/X11”.

---

## 3.  Exporting

### 3.1  Open the Export Dialog

1. Go to **Project > Export**.  
2. In the *Preset* drop‑down, choose **Linux/X11**.  
3. If you don't see it, add a new preset and select “Linux/X11”.

### 3.2  Configure the Preset

| Field | Typical Value | Explanation |
|-------|---------------|-------------|
| **Export Path** | `my_game.x11` | Name the binary. |
| **Application/Executable name** | `my_game` | This will be the binary name. |
| **Custom icons** | `icon.png` | Replace the default Godot icon. |
| **Enable `--headless`** | Unchecked (unless you want a server) | Runs the game with a GUI. |
| **Linux target** | `x86_64` | Most distributions use 64‑bit. |

> **Tip:**  
> For a *portable* distribution, check “Export with `--no-window`” if you want a command‑line tool.

### 3.3  Export

Click **Export Project**. Godot will build a single executable named `my_game.x11`. This binary contains:

- The game’s compiled scenes and scripts.
- The necessary runtime libraries.
- All resource files (images, sounds, etc.) referenced in the project.

---

## 4.  Packaging for Distribution

### 4.1  Creating a Self‑Contained Folder

The exported binary can be distributed as a folder:

1. Copy the `my_game.x11` binary.  
2. Include any additional resources that are not embedded (e.g., custom fonts or external DLLs).  
3. Optionally create a **README** with launch instructions.

### 4.2  Using `AppImage`

For a truly portable package, build an AppImage:

1. Install the [AppImageKit](https://appimage.org/).  
2. Create an `appimagetool` wrapper script that points to your binary.  
3. Generate the AppImage with:

   ```bash
   appimagetool MyGame-x86_64.AppDir
   ```

The resulting `.AppImage` can be executed on most Linux distributions without any further dependencies.

### 4.3  Creating a DEB/Flatpak/RPM

If you target a specific distribution:

- **Debian/Ubuntu**: Wrap the binary with `dpkg-deb`.  
- **Fedora/RHEL**: Use `rpmbuild`.  
- **Flatpak**: Use a `flatpak-builder` manifest.

> **Reference:** The Godot documentation on packaging for Linux contains example manifests for each format.

---

## 5.  Common Issues

| Issue | Fix |
|-------|-----|
| **Missing shared libraries** | Ensure `libstdc++.so.6`, `libc.so`, and other dependencies are present on the target machine. The Godot binary is usually static, but some user libraries may be needed. |
| **Icon or splash not showing** | Place `icon.png` and `splash.png` in the project root *before* export. |
| **Application fails to start** | Check that the binary is executable (`chmod +x my_game.x11`). |
| **Large binary size** | Use `strip` to remove debugging symbols: `strip my_game.x11`. |

---

## 6.  Further Reading

- [Exporting for macOS](../exporting_for_macos.html)  
- [Exporting for Windows](../exporting_for_windows.html)  
- [Advanced Packaging](../editor/exporting.html)  

---