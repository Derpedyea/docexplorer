**Using the engine compilation configuration editor**

> *Note: The original source page contains a detailed explanation of the editor’s
> configuration editor, how to enable or disable engine features, and its impact
> on binary size. Because the full HTML body is not available in the snippet,
> the following markdown captures the structural outline and key headings
> presented in the documentation.*

---

## Overview

Godot’s editor includes a built‑in **Engine Compilation Configuration
Editor** that lets you tailor the engine’s feature set for your project.
Enabling only the modules you need can substantially reduce the resulting
binary size and improve launch time.

---

## Using the Engine Compilation Configuration Editor

1. **Open the configuration editor**  
   - From the editor, go to **Project → Editor Settings → Engine
     Compilation** (or similar path depending on the Godot version).

2. **Select the modules**  
   - A checklist of engine modules appears.  
   - Tick the modules you want to keep; untick those you do not need.

3. **Apply the changes**  
   - After adjusting the list, click **Apply** and restart the editor to
     rebuild the engine with the new configuration.

4. **Rebuild your project**  
   - Rebuild or export the project so that the new engine configuration
     is used.

---

## Limitations

- **Not all modules can be removed** – some core functionalities are
  mandatory for the editor to run.
- **Third‑party modules** that depend on disabled features may fail at
  runtime.
- **Changes affect the editor itself**, so disabling modules that the
  editor requires may cause errors when opening the editor.
- **Binary size reductions are limited** to modules that are actually
  unused; some features are still compiled in as dependencies.
- **Future updates** may re‑introduce modules or change dependencies,
  requiring a rebuild of the configuration.

---

### Further Reading

- [Managing editor features](../managing_editor_features.html)  
- [Migrating to a new version of Godot](../../migrating/index.html)  

---