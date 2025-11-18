**JetBrains Rider**

JetBrains Rider is a commercial IDE that supports C++, C# and GDScript and uses the same solution system that Visual Studio uses for Godot projects.

---

### Installing Rider

1. Download the latest Rider installer from the JetBrains website.  
2. Run the installer and follow the on‑screen instructions.  
3. (Optional) Install the **GDScript** plugin from the JetBrains plugin repository to get syntax highlighting and other language features for Godot projects.

---

### Importing a Godot project

> If you are starting from scratch, follow the steps below to import an existing Godot project into Rider.

1. **Create a Godot project**  
   *Open Godot → New Project → Choose a location → Create.*
2. **Open Rider**  
   *From the “Open” dialog, navigate to the directory that contains your Godot project.*  
   Rider will automatically detect the `*.sln` file that Godot generates for the project.
3. **Configure the solution**  
   * Rider will build the solution using the Godot C# API.  
   * Ensure that the correct .NET SDK version is selected under *File → Settings → Build, Execution, Deployment → .NET*.
4. **Add GDScript support (optional)**  
   * Install the **GDScript** plugin in Rider if you want code‑completion for GDScript files.*

---

### Debugging with Rider

1. **Set up a debugger**  
   * In Godot, enable the “Remote” debugging mode (Project → Project Settings → Debugging → Remote).  
   * In Rider, go to *Run → Edit Configurations* → *Godot C#* and add the path to your Godot executable.
2. **Launch the game**  
   * Select the newly created configuration and hit *Run* (or *Debug* to start in debugging mode).  
   * Rider will launch Godot and attach the debugger automatically.
3. **Breakpoints & Watches**  
   * Set breakpoints in your C# scripts just as you would in any .NET application.  
   * Use the *Watches* panel to inspect variables and expressions at runtime.

---

### Using Rider with GDScript

While Rider is primarily a C# IDE, the **GDScript** plugin gives you:

* Syntax highlighting
* Autocompletion
* Quick documentation lookup

When editing a GDScript file, Rider will still use the Godot editor’s runtime for execution and debugging.  
To debug GDScript, start Godot in “Remote” mode and attach the Godot debugger in Rider as described above.

---

### Common Issues & Tips

| Issue | Fix |
|-------|-----|
| Rider cannot find the Godot executable | Set the correct path in *Run → Edit Configurations → Godot C#* |
| GDScript not recognized | Install the **GDScript** plugin from JetBrains Marketplace |
| Breakpoints not hit | Ensure that the project is built in “Debug” configuration and that the Godot executable is run in “Remote” debug mode |

---

### Resources

* [Official Rider Documentation](https://www.jetbrains.com/rider/)
* [Godot Docs – Rider](https://docs.godotengine.org/en/stable/engine_details/development/configuring_an_ide/rider.html)  
* [GDScript Plugin on JetBrains Marketplace](https://plugins.jetbrains.com/plugin/13495-gdscript)

---