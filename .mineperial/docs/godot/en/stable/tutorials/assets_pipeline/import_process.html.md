# Import process

Importing assets in Godot is a two‑step operation:

1. **Place the asset files in your project folder** – images, audio, fonts, 3‑D models, etc.  
2. **Let the editor process the files** – creating Godot resources and the corresponding `.import` configuration files.

> **Tip**  
> The editor automatically re‑imports files when you change them or when you delete the `.import` files.

## How the import works

When you add a file to the project folder, Godot:

* Detects the file type from its extension.
* Calls the appropriate *importer* (built‑in or plugin) to convert it to an internal resource format (`.tres`, `.res`, `.import` …).
* Generates a `.import` file that stores import settings (e.g. compression, mipmaps, preview size).

You can edit those settings in the *Inspector* after selecting the asset in the FileSystem dock.

### Import folder

You can create an **Import** folder inside your project to keep the original files.  
Any file placed here is imported automatically, and the editor will create the same‑named resource in the root of the project tree (e.g. `Import/hero.png` → `hero.tres`).

### Reimporting

* Right‑click on an imported resource → **Reimport**  
  Re‑imports the original file using the current import settings.

* Press **Ctrl+R** (or **Command+R** on macOS) with a file selected in the FileSystem dock.

### Disabling automatic import

If you want to keep a file untouched (e.g. a data file), create a `.import` file with `resource_type = "File"` and `importer = ""`.  
Alternatively, add the file type to **Project → Project Settings → Import → Ignore**.

## Supported image formats

Godot supports most common image formats:

| Format | Notes |
|--------|-------|
| PNG | Lossless, supports alpha. |
| JPG/JPEG | Faster compression, no alpha. |
| BMP | Limited support, no compression. |
| TGA | Often used for 3‑D textures. |
| DDS | GPU‑optimized, preserves mipmaps. |
| WEBP | Web‑optimized; only supported on Windows & macOS. |

### Import settings for images

* **Texture > Compression** – *Lossless* (default), *Lossy*, *Decompress on load*, *ETC2*, *PVRTC*, *ASTC*, *BC*, *None*.
* **Texture > Flags** – *Repeat*, *Mipmaps*, *Anisotropic*.
* **Texture > Size** – *Resize*, *Max Size*.
* **Texture > Filters** – *Filter*, *Repeat*.

Change these in the *Inspector* after selecting the image or by editing the generated `.import` file directly.

## Importing audio files

Supported formats include `.ogg`, `.wav`, `.mp3`, `.flac`.  
Import settings are under the **Audio > Import** tab:

* **Loop** – whether the audio should loop.
* **Sample Rate** – choose a lower rate for smaller files.
* **Mono** – convert to mono for small footprint.
* **Stream** – stream large files; otherwise load into memory.

## Importing 3‑D models

Godot can import `.obj`, `.dae`, `.glb`, `.gltf`, `.fbx`.  
During import:

1. The editor converts the file to an internal `Scene` or `Mesh` resource.
2. It automatically creates a preview and extracts materials.

You can adjust:

* **Mesh Import** – generate from geometry or keep separate surfaces.
* **Animation Import** – import or ignore animations.
* **Physics** – auto‑generate collision shapes.

## Custom importers

Plugins can extend Godot’s import system.  
Create a folder named `addons/<plugin_name>/scripts` and register an **Importer** script.  
The plugin will receive callbacks for `import()`, `get_importer_name()`, `get_extensions()`, etc.

## Import order and dependencies

If two resources depend on each other (e.g. a material referencing a texture), Godot ensures that the dependent resource is imported first.  
However, if you modify a resource that is referenced by many others, re‑importing it may trigger a re‑import cascade.

## Cleaning up

* **Delete a file** → the corresponding `.import` file is automatically removed.
* **Clear import cache** → **Project → Tools → Clear Import Cache** – useful after a large batch of changes.

## Useful shortcuts

| Action | Shortcut |
|--------|----------|
| Reimport selected file | **Ctrl+R** |
| Reimport all files | **Ctrl+Shift+R** |
| Reimport changed files | **Ctrl+Shift+S** |
| Open file’s folder | **Alt+F** |

---

Feel free to adjust the settings for each asset type via the editor’s inspector or by editing the `.import` files directly. This gives you fine‑grained control over memory usage, performance, and visual quality.