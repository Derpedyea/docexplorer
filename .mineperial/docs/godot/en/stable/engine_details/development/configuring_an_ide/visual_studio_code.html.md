**Visual Studio Code** – Godot Engine Documentation (stable)

Visual Studio Code (VS Code) is a free, cross‑platform editor by Microsoft (not to be confused with Visual Studio).  
The Godot documentation provides a short guide on how to set up VS Code as an external editor for Godot projects and how to configure it for C++/GDScript development.

---

## 1. Install the C/C++ extension

1. Open VS Code.
2. Go to the Extensions panel (`Ctrl+Shift+X`).
3. Search for **C/C++** (by Microsoft) and install it.

> The extension provides IntelliSense, debugging, and code navigation for C/C++ files.

---

## 2. Configure Godot to use VS Code

1. Open Godot and load your project.
2. Go to **Project → Editor Settings → Text Editor → External**.
3. Set **Use External Editor** to `true`.
4. In the **Exec Path** field, enter the path to the VS Code executable (e.g., `code` on Unix, `C:\Program Files\Microsoft VS Code\Code.exe` on Windows).
5. Save the settings and restart Godot if necessary.

Now double‑clicking a script in the editor will launch VS Code.

---

## 3. Enable GDScript auto‑completion

VS Code can provide GDScript IntelliSense via the **Godot Tools** extension:

1. Install **Godot Tools** from the marketplace.
2. After installing, restart VS Code.
3. Open a GDScript file – you should see code completion and function signatures.

---

## 4. Optional: Configure build and debugging

For C++ projects, you can add a `tasks.json` and `launch.json` to your `.vscode` folder:

```json
// .vscode/tasks.json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build Godot",
      "type": "shell",
      "command": "scons platform=windows target=release_debug tools=yes",
      "group": "build",
      "problemMatcher": []
    }
  ]
}
```

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Debug Godot",
      "type": "cppdbg",
      "request": "launch",
      "program": "${workspaceFolder}/bin/godot.windows.opt.tools.64.exe",
      "args": ["--path", "${workspaceFolder}"],
      "stopAtEntry": false,
      "cwd": "${workspaceFolder}",
      "environment": [],
      "externalConsole": true
    }
  ]
}
```

Replace the `command` and `program` paths with the ones appropriate for your platform.

---

## 5. Summary

* Install the **C/C++** extension for C++ support.  
* Install the **Godot Tools** extension for GDScript IntelliSense.  
* Tell Godot where VS Code lives (Editor Settings → External).  
* (Optional) Add `tasks.json`/`launch.json` for build and debugging.  

With these steps you can edit Godot projects comfortably in Visual Studio Code.