**Advanced Import Settings**

While the regular import panel provides many essential options for imported 3D models, the advanced import settings provides per‑object options, model previews, and animation previews. To open it, click the **Advanced** button in the import dock.

---

## How to Open Advanced Import Settings

1. **Select a 3D asset** (e.g., a `.glb`, `.dae`, `.obj`, or any supported model format) in the FileSystem dock.
2. Click the **Import** button in the editor toolbar.
3. In the import dialog, click **Advanced** to reveal per‑object options and previews.

---

## Model Preview

The *Model* tab shows a live preview of the imported mesh. You can inspect the geometry, check normals, and verify that the import parameters produce the expected result.

- **Keep Quads** – Preserve quad faces during import (useful for models that rely on them).
- **Generate Tangents** – Generate tangent data for normal‑mapping; disables if already present.
- **Use Normals** – Uses vertex normals if available, otherwise generates them.
- **Use Smooth Normals** – Enables smooth shading.

---

## Animation Preview

The *Animation* tab displays all animations contained in the imported file.

- **Default Animation** – Choose which animation plays on import.
- **Animation Names** – Rename or delete imported animations.
- **Looping** – Toggle whether the animation loops.

---

## Import Settings Summary

| Setting | Description | Default |
|---------|-------------|---------|
| **Import Mode** | `Static`, `Rigid`, `Animated`, or `Skeleton` | `Static` |
| **Skeleton** | Enable skeletal animation import | `False` |
| **Blend Shape Mode** | `Keep` or `Discard` | `Keep` |
| **Generate Tangents** | Create tangent data for normal maps | `True` |
| **Keep Quads** | Preserve quad faces | `False` |
| **Use Normals** | Use existing normals | `True` |
| **Use Smooth Normals** | Apply smooth shading | `True` |

---

## Tips

- **Preview before import**: Always use the *Model* and *Animation* preview tabs to confirm the import looks correct.
- **Batch imports**: You can apply the same settings to multiple files by selecting them and hitting **Import All**.
- **Reimport**: If you tweak settings later, select the `.import` file in the FileSystem dock and click **Reimport**.

---

For more detailed information about each setting, refer to the *Import* section in the Godot documentation or explore the settings in the editor itself.