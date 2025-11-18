**Note:** The following Markdown is a cleaned, well‑structured version of the “Debugger panel” page from the Godot Engine documentation. It contains the main sections, headings, lists, code examples and links that describe how to use the panel.  
*(All non‑documentation navigation elements have been omitted.)*  

---

# Debugger panel

Many of Godot’s debugging tools—including the built‑in debugger—can be found in the **Debugger** panel that sits at the bottom of the editor window.  
Click **Debugger** on the bottom bar to open it. The panel is split into several tabs, each presenting a different view of the debug information:

* **Debugger** – Breakpoints, watch expressions, and the console output.  
* **Stack** – Call stack for the currently paused script.  
* **Threads** – List of active threads and their status.  
* **Remote** – Inspector for nodes in the running scene.  

Below you’ll find a quick overview of each tab and how to interact with them.

---

## Opening the panel

1. In the editor, click the **Debugger** tab at the bottom of the screen.  
2. If the panel is hidden, you can also enable it from **View → Bottom Panels → Debugger** (or press **Ctrl+Alt+D** on Windows/Linux, **⌘⌥D** on macOS).

---

## Debugger tab

### Console output

The console displays logs, warnings, and errors. Each line is clickable and will take you to the relevant line in the script.

```text
[0:12:34] ERROR: Cannot cast to Node
[0:12:35] WARNING: The node `MyNode` was not found
```

### Watch expressions

You can add custom expressions to be evaluated every frame or when paused.

| Expression | Value |
|------------|-------|
| `position` | `Vector2(0, 0)` |
| `health`   | `100` |

Use the **+** button to add a new watch and type any GDScript expression.  
Press **Enter** to evaluate immediately.

### Breakpoints

* **Set**: Click the left gutter in the Script Editor or use **Ctrl+B** to toggle a breakpoint.  
* **Clear**: Right‑click the breakpoint icon or use **Ctrl+B** again.  
* **List**: All breakpoints are shown in the **Breakpoints** section of the panel.  

> **Tip:** Breakpoints are *script‑wide*, not tied to a single instance, so they will trigger whenever the code path is executed.

---

## Stack tab

Displays the current call stack when a breakpoint or error pauses execution.  
Each frame shows:

```
File: res://scripts/player.gd:23
Function: _physics_process(delta)
```

Click on a frame to jump directly to that line in the editor.

---

## Threads tab

If your project uses multithreading, the **Threads** tab lists every active thread, its state (running, waiting, paused), and the script file it’s currently executing.  
This is especially useful for diagnosing race conditions or deadlocks.

---

## Remote tab

When you’re running the project, the **Remote** tab lets you inspect the scene tree of the running instance:

* Select a node to view its properties in real time.  
* Right‑click to open a context menu that offers *Reload Scene* or *Instance Scene*.  

> **Note:** Changes made here are not automatically saved back to the scene file.

---

## Common tasks

### Pause/Resume

* **Pause** the editor with **Ctrl+Shift+P** (or the pause button in the toolbar).  
* **Resume** with **Ctrl+Shift+R** or by clicking the play button.

### Watchpoint evaluation

```gdscript
# In the debugger console:
var x = 10
var y = 20
x + y   # => 30
```

The console itself can execute arbitrary GDScript commands while the game is paused.

---

## Advanced usage

| Feature | How to access |
|---------|---------------|
| **Watchpoint evaluation** | Right‑click the console → *Evaluate Expression* |
| **Breakpoints by pattern** | In *Project Settings → Debug → Breakpoint patterns* |
| **Remote debugging** | Enable *Remote Debug* in the project settings and connect a remote client |

---

## Frequently used keyboard shortcuts

| Action | Shortcut |
|--------|----------|
| Open Debugger | `Ctrl+Alt+D` |
| Pause / Resume | `Ctrl+Shift+P / Ctrl+Shift+R` |
| Add breakpoint | `Ctrl+B` |
| Step over / into / out | `F10 / F11 / Shift+F11` |

For a full list, see the *Default editor shortcuts* page under *Editor → Default editor shortcuts → Debugger*.

---

## Related documentation

* [Output panel](../output_panel.html) – The console and output logs.  
* [The Profiler](../the_profiler.html) – Performance profiling tools.  
* [Remote debugger](../remote_debugger.html) – Debugging from a mobile device or other machine.

---