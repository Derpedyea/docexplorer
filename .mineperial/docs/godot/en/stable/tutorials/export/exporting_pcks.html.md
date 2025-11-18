**Exporting packs, patches, and mods**  
*Godot Engine – Stable Documentation*  

> *Use cases: Oftentimes, one would like to add functionality to one’s game after it has been deployed. Examples of this include…*  

---

## Overview  

This section explains how to create and use **packs** (a collection of resources), **patches** (updates that replace or modify existing resources), and **mods** (fully self‑contained content that can be loaded at runtime). These techniques let you add downloadable content (DLC) to a Godot project without rebuilding the entire game.

---

## Use cases  

* **Downloadable Content** – Adding new levels, skins, or assets after the game is released.  
* **Patch System** – Fixing bugs or tweaking gameplay by replacing resources.  
* **Modding Support** – Allowing community‑made content that can be installed on top of the base game.

---

## How to create a pack

1. **Prepare the resources**  
   * Organise the files in a folder structure you want to expose.  
   * Ensure all resources are inside a dedicated folder (e.g. `res://mods/my_mod/`).

2. **Export as a PCK**  
   * In the **Export** dialog, select **“Export Project” → “Export to PCK”**.  
   * Point the destination to where the pack should live (e.g. `my_mod.pck`).  
   * Exclude any files that should *not* be part of the pack using the *exclude* list.

3. **Load the pack at runtime**  

   ```gdscript
   var pck_path = "res://mods/my_mod.pck"
   if ProjectSettings.load_resource_pack(pck_path, true):
       print("Pack loaded successfully")
   else:
       print("Failed to load pack")
   ```

   The second argument (`true`) forces a reload of resources already in use; set it to `false` for a simple load.

---

## Patches

Patches work similarly to packs but are intended to override existing files in the project:

```gdscript
ProjectSettings.load_resource_pack("res://patches/bug_fix.pck", true)
```

- All files in the patch replace those with the same path in the base project.  
- Useful for hot‑fixes or small updates without shipping a full new build.

---

## Mods

Mods are full‑blown projects that can be added or removed at runtime:

1. **Structure a mod**  
   * Place the mod folder in a known location (e.g., `res://mods/`).

2. **Load a mod**  

   ```gdscript
   func load_mod(mod_name: String) -> bool:
       var path = "res://mods/%s/%s.pck" % [mod_name, mod_name]
       return ProjectSettings.load_resource_pack(path, true)
   ```

3. **Unloading a mod** – Godot does not provide a native unload operation; you must restart or reload affected resources manually.

---

## Tips & Caveats

| Issue | Solution |
|-------|----------|
| **Resource path conflicts** | Keep mod resources in a dedicated namespace or use a unique folder structure. |
| **Version compatibility** | Store a mod version file and verify against the base game version before loading. |
| **Performance** | Avoid loading large packs on the main thread; use `yield(get_tree(), "idle_frame")` or a background thread for heavy operations. |
| **Security** | Validate mod files with checksums or digital signatures if you plan to allow user‑generated mods. |

---

## Resources

* [Godot Docs – Resource PCK](https://docs.godotengine.org/en/stable/tutorials/export/exporting_pcks.html)  
* [ProjectSettings](https://docs.godotengine.org/en/stable/classes/class_projectsettings.html#method-load-resource-pack)  

---