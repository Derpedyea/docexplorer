**Using an external text editor**  
*Godot Engine (stable) documentation*

---

Godot can be used with an external text editor (e.g. Sublime Text, Visual Studio Code, Atom, etc.) to edit scripts while still enjoying Godot’s built‑in features such as breakpoints, autocompletion and live reloading.

---

## 1. Configuring an external editor

1. Open **Editor → Editor Settings**.  
2. In the left panel, choose **Text Editor → External Editor**.  
3. Fill the following fields:

| Field | What to put |
|-------|-------------|
| **Use external editor** | Check this to enable the feature |
| **External editor path** | Full path to the editor executable (e.g. `C:\Program Files\Microsoft VS Code\Code.exe` or `~/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl`) |
| **Arguments** | String containing placeholders that Godot expands when launching the editor. Common placeholders: |
| | * `{script}` – full path of the script file |
| | * `{line}` – the line number the cursor is on (when a breakpoint or error is selected) |
| | * `{column}` – column number of the cursor (optional) |

> **Example (VS Code):**  
> `--goto {script}:{line}:{column}`

4. Press **Close**.  
5. Now double‑click a script in the **FileSystem** dock or open a script in the **Script Editor**; Godot will launch your external editor instead of its built‑in editor.

---

## 2. Automatically reloading your changes

When a script file is modified, Godot can automatically reload it so the editor or running game sees the updated code.

| Option | Description |
|--------|-------------|
| **Auto‑reload changed scripts** | When checked, Godot watches the file system for changes and reloads the script immediately. |
| **Reload scripts after project start** | Forces a reload of all scripts each time the editor starts. Useful for projects that are edited from outside Godot. |
| **Reload on save** | If you prefer manual control, uncheck auto‑reload and press **Project → Reload Current Project** after saving a script. |

> **Note:** In a large project or on slow filesystems, frequent auto‑reloads can slow down the editor.

---

## 3. Using the external editor in the debugger

Godot’s debugger can launch the external editor at the exact location of a breakpoint or an error.

1. Ensure **Use external editor** is enabled (see §1).  
2. In the **Debugger** panel, click **Debug → Open in external editor** or press the “open file” icon next to a stack frame.  
3. Godot will pass the script path and line number to your editor via the **Arguments** string.

> **Tip:** Many editors support a `--goto` or equivalent flag, so you can jump directly to the problematic line.

---

## 4. Official editor plugins

Godot provides a few community‑approved plugins that improve the external‑editor workflow:

| Plugin | What it does | Install link |
|--------|--------------|--------------|
| **Godot VSCode** | Adds a “Open in VSCode” command and automatic build integration | <https://github.com/godotengine/godot-vscode> |
| **Godot Sublime Text** | Similar integration for Sublime Text | <https://github.com/godotengine/godot-sublime> |
| **Godot Atom** | Integration with the Atom editor | <https://github.com/godotengine/godot-atom> |

Install any of these from the **Asset Library** or manually by cloning the repository into `res://addons/`.

---

## 5. LSP/DAP support

For more advanced editor integration you can use the **Language Server Protocol (LSP)** and the **Debug Adapter Protocol (DAP)**.

* **LSP**: Provides code completion, go‑to‑definition, and linting. Many editors (VS Code, Sublime, Atom, Neovim) have GDScript LSP plugins.  
  *Example:* In VS Code install the *Godot Engine* extension (`ms-vscode.vscode-godot`).  
* **DAP**: Lets you debug Godot projects directly from your editor. Godot ships a DAP server that can be connected to from VS Code, Sublime (via *Sublime Text Debugger*), or other editors with DAP support.  

**Setting up DAP in VS Code**

1. Install the *Godot Engine* extension.  
2. Add a `launch.json` configuration:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Godot",
            "type": "godot",
            "request": "launch",
            "projectDir": "${workspaceFolder}",
            "executable": "/path/to/godot",
            "args": ["--headless", "--debug"]
        }
    ]
}
```

3. Press **F5** to launch the project in debug mode. Breakpoints set in your external editor will work as in the built‑in debugger.

---

### Summary

* Set up an external editor via **Editor → Editor Settings → Text Editor → External Editor**.  
* Use the `{script}`, `{line}`, and `{column}` placeholders to jump to the correct file/line.  
* Enable auto‑reload to see changes immediately.  
* Leverage the debugger’s “Open in external editor” feature for quick navigation.  
* Explore official plugins or LSP/DAP for a richer experience.  

Happy coding!