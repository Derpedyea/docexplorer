**Command line tutorial**

> Some developers like using the command line extensively. Godot is designed to be friendly to them, so here are the steps for working entirely from the command line.  
> Given the engine relies on almost everything to be driven from a *single* process, you’ll want to understand the arguments you can pass to the editor, how to create, run and export projects, and how to use the debugger and the GDScript REPL.

---

## 1. Command‑line reference

| Option | Description | Example |
|--------|-------------|---------|
| `--help` | Print help information | `godot --help` |
| `--path <dir>` | Use `<dir>` as the project directory | `godot --path ./MyProject` |
| `--editor` | Open the editor | `godot --editor` |
| `--no-window` | Run without a window (used for head‑less server builds) | `godot --no-window` |
| `--run <scene>` | Run a particular scene file | `godot --run res://Main.tscn` |
| `--debug` | Enable the debugger and print debug output | `godot --debug` |
| `--export <preset> <output>` | Export the current project with the named preset | `godot --export "Linux/X11" output.x86_64` |
| `--compile <file.gd>` | Compile a GDScript file into a binary | `godot --compile myscript.gd` |
| `--script <file.gd>` | Execute a GDScript file | `godot --script myscript.gd` |
| `--version` | Show the Godot version | `godot --version` |

> **Tip** – You can chain multiple flags: `godot --path ./MyProject --debug --run res://Main.tscn`.

---

## 2. Path

Godot requires the project root to be known.  
You can either:

* Run the editor with `--path` each time, or
* Store the project path in the `project.godot` file (see the *project settings* section below).

When a project is opened by the editor, it automatically writes the absolute path to `project.godot`.  That file is also what the command line uses when you run `godot` without a `--path` flag.

---

## 3. Setting the project path

You can create a project from the command line:

```bash
godot --path ./MyNewProject --create-project "My New Project"
```

This will:

1. Create the directory `MyNewProject` if it does not exist.
2. Initialise a minimal project inside it, including a default scene.
3. Write a `project.godot` file containing the project path.

To switch to a different project, just change the argument to `--path`.  For example:

```bash
godot --path ../OtherProject
```

---

## 4. Creating a project

The *create‑project* flag is a convenience wrapper for `godot --editor` that automatically creates the necessary folder structure and default files.  After creation you can edit the new project with any editor of your choice – the Godot editor is not required for a lot of day‑to‑day workflow.

```bash
godot --create-project "Awesome Game" --path /home/you/godot/games
```

If you prefer a more manual approach:

```bash
mkdir /home/you/godot/games/AwesomeGame
cd /home/you/godot/games/AwesomeGame
godot --editor
```

The first run will ask you to create a *root scene* – you can skip that if you plan to work purely from the CLI or from a different editor.

---

## 5. Running the editor

You can start the GUI editor from the command line, optionally opening a specific project:

```bash
godot --editor --path /home/you/godot/games/AwesomeGame
```

When the editor starts, the `project.godot` file in the working directory tells it which project to load.  If you want to run the editor with a *different* project you can do:

```bash
godot --editor --path /home/you/godot/games/OtherProject
```

---

## 6. Erasing a scene

If you need to delete a scene file you can do so with the CLI.  The simplest way is to use the usual shell command:

```bash
rm res://Menu.tscn
```

Inside Godot you can delete a scene from the *FileSystem* dock, but that requires the editor UI.  The command‑line tool does not provide a dedicated “erase” flag – use the OS’s file manager or the editor for that.

---

## 7. Running the game

You can run a project directly from the command line without launching the editor:

```bash
godot --path /home/you/godot/games/AwesomeGame
```

By default this runs the **main scene** defined in the project settings.  If you want to run a specific scene you can pass the `--run` flag:

```bash
godot --path /home/you/godot/games/AwesomeGame --run res://Main.tscn
```

The command line will start Godot in a *headless* mode if you also add `--no-window`.  This is useful for automated tests or servers.

---

## 8. Debugging

Enable the debugger and auto‑reload scripts by adding `--debug`:

```bash
godot --path /home/you/godot/games/AwesomeGame --debug
```

The debugger will print any `print()` statements, errors and warnings directly to the console.  You can also attach external debuggers (e.g., GDB, LLDB) to the process if you need a more advanced debugging session.

---

## 9. Exporting

Exporting a project from the CLI is a one‑liner.  First make sure you have an **Export preset** defined in the project settings.  Then run:

```bash
godot --export "Windows Desktop" ./bin/AwesomeGame.exe
```

This uses the preset name exactly as shown in the Export tab of the editor.  The output file will be created in the directory you specify.  Exporting is fully automated and works for all supported targets – just pass the appropriate preset name.

---

## 10. Running a script

You can execute a single GDScript file directly from the command line without running the editor:

```bash
godot --script res://scripts/utility.gd
```

The script will run in a *headless* environment, so no GUI will be displayed.  This is handy for:

* Utility scripts (e.g., batch processing of resources)
* Unit tests that need to be run in CI pipelines
* Running the GDScript REPL (`--script`) to try out short code snippets

When a script requires the Godot engine (e.g., to load a scene), it will automatically initialise the engine before execution.

---