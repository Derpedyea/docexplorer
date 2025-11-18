**Upgrading from Godot 4.2 to Godot 4.3**

---

### Overview

Godot 4.3 is a *minor* release that brings a number of bug‑fixes, performance improvements and new features.  
If you have a project that was built with Godot 4.2, you can upgrade it safely – most changes are
backwards‑compatible and the built‑in *project upgrade tool* will handle the bulk of the work.  
This page details:

- What you can expect after upgrading
- The breaking changes that may require manual fixes
- Steps to run the upgrade tool
- What to do after the tool finishes

> **Tip:** Keep a copy of your 4.2 project or use a version control system before starting the upgrade.

---

## 1.  Breaking changes

Below are the most important API changes that might affect your project.  For a complete list
see the [full changelog](/tutorials/migrating/changelog_4_3.html).

| Category | Description |
|----------|-------------|
| **Core** | `String.format()` now accepts a second argument for argument list.  Old usage may raise errors. |
| **Animation** | `AnimationPlayer` no longer automatically wraps animation loops; you must set `Animation.loop` yourself. |
| **2D nodes** | `TileMap`’s `cell_set_mode` changed from `mode` to `map_mode`. |
| **3D nodes** | `MeshInstance3D` replaced `MeshInstance`. |
| **GUI nodes** | `Control` now has a new `theme` property – old style settings may be ignored. |
| **Physics** | `PhysicsMaterial` default friction changed from 0.5 to 0.8. |
| **Rendering** | Forward‑+ renderer now uses `world_2d` for 2D lighting. |
| **Navigation** | `NavigationServer3D` API updated – `map_add_agent` now requires a `NavigationAgent` node. |
| **Networking** | `WebSocketClient`’s `set_ssl` signature changed to accept a `String` path. |
| **Editor plugins** | The editor API for plugins now uses `EditorPlugin`’s new `_ready` order; old plugin code may need adjustment. |

---

## 2.  Upgrade the project

### 2.1  Using the Project Manager

1. Open Godot 4.3.
2. In the **Project Manager**, click **Tools → Upgrade Project…**.
3. Select your 4.2 project folder and click **Upgrade**.
4. Wait for the tool to finish. It will rename nodes/resources and update script files.

### 2.2  Using the command line

```bash
godot --headless --path /path/to/your/project upgrade
```

The `upgrade` command runs the same process as the Project Manager but without opening the editor.

---

## 3.  After the upgrade

Once the tool has completed, perform the following checks.

### 3.1  Manually rename methods, properties, signals

Some API changes are not automatically converted. Search the project for the old names listed below and replace them.

| Old | New | Example |
|-----|-----|---------|
| `SceneTree::get_tree()` | `SceneTree::root()` | `var root = get_tree().root` |
| `Node2D::move_local_y()` | `Node2D::translate_local()` | `move_local_y(-10)` → `translate_local(Vector2(0,-10))` |

### 3.2  Check project settings

Open **Project → Project Settings**.  Look for any warning icons or new settings that need to be updated.

### 3.3  Environment settings

The new **Environment** settings now support **Directional Shadow** quality presets.  Re‑evaluate your lighting.

### 3.4  Update shaders

If you use **ShaderMaterial** with the old GLSL syntax, replace deprecated `texture()` calls with the new `texture()` function that accepts a `sampler2D`.

### 3.5  Scripts

Run the editor’s **Script → Update → Update All Scripts** command.  
This will adjust syntax for `await` usage in GDScript 4.3.

### 3.6  ArrayMesh compatibility

Some `ArrayMesh` resources may be broken after the upgrade.  Re‑import the mesh files or rebuild the mesh in the editor.

---

## 4.  List of automatically renamed nodes and resources

| Old Class | New Class |
|-----------|-----------|
| `CanvasItem` | `Node2D` |
| `Sprite` | `Sprite2D` |
| `MeshInstance` | `MeshInstance3D` |

*(The full mapping is available in the official docs.)*

---

## 5.  Porting editor settings

If you have custom editor settings in `editor_settings.cfg`, copy them to the new file or import them via the editor’s **Project → Import Settings** dialog.

---

## 6.  Updating version control settings

After upgrading, adjust your `.gitignore` or other VCS ignore files if you use new editor files (e.g., `*.tres` → `*.tscn` changes).  

---

**References**

- [Godot 4.3 Changelog](/tutorials/migrating/changelog_4_3.html)
- [Project Upgrade Tool Guide](/tutorials/migrating/project_upgrade_tool.html)
- [Migration FAQ](/tutorials/migrating/migration_faq.html)

---