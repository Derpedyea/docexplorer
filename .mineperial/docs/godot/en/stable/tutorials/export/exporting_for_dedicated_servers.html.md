**Exporting for Dedicated Servers**  
====================================

This page explains how to build and run a Godot project on a machine that has no GPU or display server – i.e. a dedicated server.  
Below is a cleaned‑up Markdown version of the key information, including steps, command‑line arguments, and build options.

---

## 1. What Is a Dedicated Server Export?

A dedicated server is a head‑less build of your Godot project that runs on a server machine without a graphical display.  
You’ll typically use this for multiplayer games, simulation back‑ends, or any logic that doesn’t need a user interface.

---

## 2. Prerequisites

| Item | Notes |
|------|-------|
| **Godot 4.x** | The latest stable release is recommended. |
| **Headless Display Server** | Built into Godot – you enable it via command line. |
| **Dummy Physics Server** | Optional, but often useful if no physics is required. |
| **Proper export templates** | Export templates must be installed for the target platform. |
| **Server‑side scripts** | Keep network logic separate from the client code. |

---

## 3. Building the Server

### 3.1 Export the Project as a *Headless* Binary

1. Open the project in Godot Editor.
2. Go to **Project → Export**.
3. Create a new **Export Preset** for the target platform (Linux, Windows, macOS, etc.).
4. In the preset settings, set:
   - **Headless** (checkbox) – this forces Godot to use the headless display server.
   - **Disable Window** (checkbox) – ensures no window is created.
   - **Use Dummy Physics** (if you don’t need physics).

5. Click **Export Project** to generate the binary.

> **Tip:** You can also export directly from the command line using the `--export` flag (see below).

---

## 4. Running the Server

### 4.1 Command‑Line Options

When starting the server binary, use the following arguments:

```bash
godot.x86_64 --headless --no-window --server <your_project.tscn>
```

- `--headless` – runs without any graphics support.
- `--no-window` – suppresses window creation.
- `--server` – loads the specified scene in server mode.

### 4.2 Environment Variables

You may need to set environment variables for certain back‑ends. For example, on Linux:

```bash
export GODEBUG=display=off
```

This disables the default display server.

### 4.3 Example Script

```bash
#!/bin/bash
./godot.x86_64 \
    --headless \
    --no-window \
    --path /path/to/project \
    --run MainScene
```

---

## 5. Debugging & Logging

- **Enable verbose logs**:  
  ```bash
  godot.x86_64 --headless --no-window --log
  ```
- **Redirect output**:  
  ```bash
  ./godot.x86_64 --headless --no-window > server.log 2>&1
  ```
- **Use `--debug`** to start in debug mode for GDScript.

---

## 6. Common Issues

| Issue | Fix |
|-------|-----|
| **No network packets received** | Verify that the server is bound to the correct IP/port. |
| **Godot crashes on start** | Check that all resources referenced in the exported scene exist in the `project.godot` directory. |
| **Graphics errors** | Ensure `--headless` and `--no-window` are specified; remove any graphics‑specific code paths. |

---

## 7. Further Reading

- [Godot Export Documentation](https://docs.godotengine.org/en/stable/tutorials/export/exporting.html)  
- [Godot Networking Guide](https://docs.godotengine.org/en/stable/tutorials/networking/index.html)  
- [Server‑Side Scripting](https://docs.godotengine.org/en/stable/tutorials/scripting/index.html)

---

*End of document.*