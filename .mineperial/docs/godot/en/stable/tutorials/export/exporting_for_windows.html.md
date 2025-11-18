**Exporting for Windows**

> *The simplest way to distribute a game for PC is to copy the executable (`godot.exe`), compress the folder and send it to someone else. However, this is often not desired. Godot offers a more elegant…*

---

## 1. Overview

Exporting a project to Windows produces a native executable that can be run on any compatible Windows machine. The process consists of:

1. **Installing the export templates** – a set of compiled binaries that Godot uses during the export process.
2. **Creating an export preset** – a configuration that tells Godot how to package the project (e.g., icon, splash screen, signing information).
3. **Running the export** – generating an `.exe` and all required data files.
4. **Packaging and distribution** – optionally compressing the output, adding an installer, or using a script to launch the game.

> *The following sections walk through each step in detail.*

---

## 2. Installing Export Templates

1. Open **Project → Install Export Templates…**.  
2. A dialog will appear asking you to download the templates for the current Godot version.  
3. After the download finishes, the templates are automatically registered.

> **Tip**: You can also download the templates manually from the [official download page](https://godotengine.org/download).

---

## 3. Creating an Export Preset

1. Open **Project → Export…**.  
2. In the export dialog, click **Add…** and choose **Windows Desktop**.  
3. The preset appears in the list; rename it if you wish.  
4. Configure the following fields:

| Field | Description |
|-------|-------------|
| **Executable name** | The name of the `.exe` file that will be generated. |
| **Icon** | Path to a `.ico` file that will be used as the application icon. |
| **Splash image** | Optional image shown while the game loads. |
| **Custom data** | Add files that should be bundled with the executable. |
| **Launch arguments** | Arguments to pass to the binary when launched. |

5. **Advanced** → **Run with dedicated memory** – useful if your game requires a large amount of memory.

---

## 4. Exporting the Project

1. With the preset selected, click **Export Project**.  
2. Choose a destination folder.  
3. Godot will generate:

   * `ProjectName.exe` – the main executable.  
   * `project.godot` – the project file.  
   * `project.gdnlib` (if using GDExtensions).  
   * `export_pck` folder containing all project resources.

4. Test the executable by double‑clicking it or running `ProjectName.exe` from the command line.

---

## 5. Signing the Executable

If you plan to distribute the game widely, it’s recommended to sign the executable:

```bash
signtool sign /a /t http://timestamp.digicert.com ProjectName.exe
```

> *Replace `/a` with the path to your own certificate if you have one.*

---

## 6. Packaging the Game

- **ZIP**: Simply zip the output folder; many users unzip directly into a directory and run the `.exe`.  
- **Inno Setup**: Create an installer that copies files and sets a desktop shortcut.  
- **NSIS**: Similar to Inno, but more flexible for custom logic.  

> *Both Inno Setup and NSIS have free templates that handle common Godot export requirements.*

---

## 7. Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| **Missing `godot.exe`** | Export templates not installed | Install templates via **Project → Install Export Templates** |
| **Game crashes on start** | Resource paths changed | Use absolute paths or include resources in “Custom data” |
| **Large launch time** | Export preset set to “Release” but using debug resources | Switch to “Release” preset or reduce asset size |

---

## 8. Next Steps

* After exporting, consider creating a **manifest** and a **batch file** to launch the game with the correct command‑line arguments.  
* Test your distribution on a clean Windows machine (e.g., a virtual machine) to ensure all dependencies are included.

---

**Related Documentation**

- [Exporting for Linux](../exporting_for_linux.html)  
- [Exporting for macOS](../exporting_for_macos.html)  
- [Exporting for Android](../exporting_for_android.html)  

---