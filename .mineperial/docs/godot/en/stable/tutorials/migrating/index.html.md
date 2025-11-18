**Migrating to a new version**  
*Godot Engine (stable) documentation – English*

---

Godot loosely follows a semantic versioning system, where compatibility is assumed between minor and patch releases, while major releases can break it. As such, it is generally not recommended to migrate a project directly from a major version to a later one unless you are willing to adapt the project to the changes introduced by that new release.

---

## Overview of the migration process

The migration documentation is split into several focused sections.  Each of those sections can be opened as a separate page for detailed information.  The most common migration paths are:

* **Upgrading from Godot 3 to Godot 4** – covers the major jump to Godot 4 and explains the required steps.
* **Upgrading from Godot 4.0 to Godot 4.1** – lists breaking changes and behavioral adjustments between consecutive 4.x releases.
* **Porting editor settings** – describes how to transfer project‑wide editor settings between versions.
* **Updating version control settings** – explains the changes to `.gitignore` or other VCS files when moving to a newer engine.

Each section contains:

| Section | Description |
|---------|-------------|
| *Should I upgrade to Godot 4?* | Advantages, disadvantages and caveats for upgrading. |
| *Preparing before the upgrade (optional)* | Tips for backing up and preparing the project. |
| *Running the project upgrade tool* | How to use the built‑in upgrade tool via the Project Manager or command line. |
| *Fixing the project after running the tool* | Handling automatically renamed nodes, scripts, shaders, and other resources. |
| *List of automatically renamed methods, properties, signals and constants* | A reference table for all renamed APIs. |
| *Updating shaders* | How to migrate GLSL/EGL shaders to the new Godot 4 rendering pipeline. |
| *ArrayMesh resource compatibility* | Workarounds for breaking changes in the ArrayMesh format. |

> **Note**  
> The migration process is largely automated by the *Project Upgrade Tool*.  
> After running it, you’ll still need to review and fix manual changes, especially for scripts that rely on removed or renamed APIs.

---

### Quick links

- [Upgrading from Godot 3 to Godot 4](upgrading_to_godot_4.html)  
- [Upgrading from Godot 4.0 to Godot 4.1](upgrading_to_godot_4.1.html)  
- [List of automatically renamed methods, properties, signals and constants](upgrading_to_godot_4.html#list-of-automatically-renamed-methods-properties-signals-and-constants)  
- [Porting editor settings](upgrading_to_godot_4.html#porting-editor-settings)  
- [Updating version control settings](upgrading_to_godot_4.html#updating-version-control-settings)

---

### Additional Resources

- **Manual** → *Editor introduction* → *Managing editor features*  
- **Best practices** → *Scene organization*  
- **Troubleshooting** → *Editor or project freezes after resuming from suspend*  

Feel free to explore the individual subpages for detailed step‑by‑step guidance on migrating your project safely and efficiently.