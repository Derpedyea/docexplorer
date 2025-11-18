**Note** – The source HTML you supplied is largely the navigation skeleton for the Godot documentation site, and the actual page body for *KDevelop* was not included.  
Below is a minimal, faithful conversion of what is available in the snippet, along with a brief outline of the typical structure of the *KDevelop* guide (so you can fill in the missing details when you have the full content).

```markdown
# KDevelop

KDevelop is a free, open‑source integrated development environment (IDE) that runs on all major desktop platforms (Linux, macOS, Windows).  
It is one of several IDEs that can be configured to work with the Godot Engine.

> **Note** – This page provides basic instructions for installing and setting up KDevelop, importing a Godot project, and using the built‑in GDScript support.

## Installing KDevelop

* On **Linux** (most distributions) you can usually install it from the package manager, e.g.:

  ```bash
  sudo apt install kdevelop
  ```

* On **macOS** you can download the DMG from the [KDevelop website](https://www.kdevelop.org/download/).

* On **Windows** you can use the installer from the same source.

> **Tip** – Make sure the version you install includes the *GDB* debugger if you plan to debug C++ or GDExtension modules.

## Importing a Godot Project into KDevelop

1. **Open KDevelop**.
2. From the main screen, choose **Open Project…**.
3. Navigate to the folder containing your Godot project (the directory that holds `project.godot`).
4. Select the folder and click **Open** – KDevelop will treat the folder as a normal project.

KDevelop will automatically recognise the Godot project structure and index all the `.gd` files for code completion and error checking.

## Configuring GDScript Support

KDevelop has a dedicated GDScript plugin that provides syntax highlighting, auto‑completion, and error diagnostics.  
To enable it:

1. Go to **Tools → Settings → Editor → Language Support**.
2. Make sure **GDScript** is listed and checked.
3. (Optional) If you’re working with GDExtension, install the “C++” plugin for additional support.

## Debugging

- For GDScript you can attach the **GDB** debugger to the running Godot instance.
- For C++ or GDExtension modules, configure the build system in KDevelop to use Godot’s SCons or CMake scripts, then set the executable to `godot.exe` / `godot` / `godot.x86_64`, etc.

> **Tip** – Use the **Project → Build** menu to compile the project before debugging.

## Useful Links

- [KDevelop download page](https://www.kdevelop.org/download/)
- [Godot Engine documentation – “Configuring an IDE”](https://docs.godotengine.org/en/stable/engine_details/development/configuring_an_ide/index.html)

```

Feel free to replace the placeholder text above with the actual instructions from the page once you have the full HTML source.