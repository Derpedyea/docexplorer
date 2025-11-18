**Using the Project Manager**

When you start Godot, the first thing you see is the **Project Manager**.  
It gives you all the tools you need to manage your projects: create new ones, import existing projects, open them, delete or rename them, and download starter templates and demos.  
Below is a quick guide on how to use each of the available functions.

---

### Creating and importing projects

| Action | How to do it | Important notes |
|--------|--------------|-----------------|
| **Create a new project** | • Click the **“New Project”** button on the left.<br>• Enter a *Project name* and a *Location* where the folder will be created.<br>• Pick a **renderer** (Forward+, Compatibility, or Mobile).<br>• Click **Create & Edit**. | The project folder will be created with a minimal set of files (`project.godot`, `icon.png`, etc.). |
| **Import an existing project** | • Click the **“Import Project”** button.<br>• Browse to the folder that contains a pre‑existing Godot project.<br>• Click **Import & Edit**. | Importing copies all files into a new folder, keeping the original project unchanged. |

---

### Opening and importing projects

*Once a project is listed in the Project Manager, you can open it in a single click.*

| Action | How to do it |
|--------|--------------|
| **Open** | • Double‑click the project entry.<br>• Or click the **“Open”** button that appears when you hover over an entry. |
| **Delete** | • Click the **trash icon** on the right of a project.<br>• Confirm that you really want to delete the folder. |
| **Rename** | • Right‑click on the project name and select **Rename**.<br>• Edit the name and press **Enter**. |

---

### Downloading demos and templates

Godot ships with a set of templates that contain the core project files and a small demo.  
If you want to try out a new renderer or start from a different example, use the *Download Templates* button.

1. Click **“Download Templates”** in the bottom right corner of the Project Manager.  
2. A list of available templates (e.g. `OpenGL 3.0`, `Vulkan`, `WebGL`) will be displayed.  
3. Select the ones you want and click **“Download”**.  
4. After downloading, the templates become available under **New Project → Template**.

---

### Managing projects with tags

Tags allow you to categorize and filter your projects:

1. Right‑click a project entry and choose **“Add tag…”**.  
2. Enter a tag name (e.g., `2D`, `Mobile`, `Tutorial`) and press **Enter**.  
3. Use the **Filter** box on the top of the Project Manager to display only projects with a particular tag.

---

### Recovery mode

If Godot crashes while you were working on a project, the Project Manager will enter **Recovery Mode** the next time it starts:

* The crashed projects are marked with a **red exclamation mark**.  
* Clicking on them will try to recover the workspace from the last autosave.  
* You can also use the **“Clear Recovery Data”** button (bottom left) if you want to remove the crash‑snapshot files.

---

#### Quick‑access links

| Feature | Page |
|---------|------|
| Project Settings | `/tutorials/editor/project_settings.html` |
| Script Editor | `/tutorials/editor/script_editor.html` |
| Customizing the editor | `/tutorials/editor/customizing_editor.html` |
| Managing editor features | `/tutorials/editor/managing_editor_features.html` |

*(These links are relative to the documentation root and work from the sidebar.)* 

---