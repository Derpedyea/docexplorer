**Using the Web editor**

The Godot Web editor lets you open, edit, and run Godot projects directly in a web browser, without installing the desktop version of the engine.  

---

### Browser support

| Browser | Requirements |
|---------|---------------|
| **Chrome** (v79+) | Must have WebAssembly `SharedArrayBuffer` enabled |
| **Edge** (v79+) | Same as Chrome |
| **Safari** (v14+) | Requires *cross‑origin isolation* to be enabled |
| **Firefox** | Not supported – lacks the required `SharedArrayBuffer` support |

> **Tip** – If you see an error about `SharedArrayBuffer`, enable cross‑origin isolation in Safari via *Preferences → Advanced → Show Develop menu in menu bar → Develop → Disable Cross‑Origin Restrictions*.

---

### Limitations

| Feature | Web editor status |
|---------|-------------------|
| **Editor performance** | Slower than the desktop version; suitable for small or prototype projects |
| **External tools / plugins** | Not available (the editor runs in a sandboxed environment) |
| **Exporting projects** | Not supported from the Web editor |
| **Debugging** | Limited – you can view console output, but breakpoints and stepping are not available |
| **Large assets / complex shaders** | May cause high memory usage or timeouts |

---

### Importing a project

1. Open the Web editor at the official URL.  
2. Click **Import Project**.  
3. Select a *project ZIP archive* or a *local directory* that contains a valid `project.godot` file.  
4. The editor will unpack the project into the browser’s `IndexedDB` storage.

> **Note** – You can also create a brand‑new project from the “New Project” button.

---

### Editing and running a project

- Use the built‑in script editor, inspector, and scene tree as you would in the desktop editor.  
- The **Play** button runs the currently opened scene.  
- All changes are automatically persisted to `IndexedDB`.  
- You can **download** the project at any time by clicking **File → Export Project** or the **Download** button in the project manager.

---

### Where are my project files?

Projects created or edited with the Web editor are stored in the browser’s **IndexedDB** under the key `godot-web`.  
- **Accessing files**: Use the editor’s **File → Export Project** menu or the **Download** button.  
- **Deleting a project**: In the project manager, click the **Delete** button next to the project’s name.

These files are not written to your local filesystem; they stay within the browser’s sandboxed storage unless you choose to export them.

---