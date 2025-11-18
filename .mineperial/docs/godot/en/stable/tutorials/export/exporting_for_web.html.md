**Exporting for the Web – Godot Engine**

This page explains how to package a Godot project for the browser using the HTML5 export target.  
It covers prerequisites, the export process, configuration options, and how to host the exported files.

---

# 1. Prerequisites

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Browser support | WebAssembly & WebGL 2.0 | Modern browser (Chrome ≥ 49, Firefox ≥ 57, Edge ≥ 79, Safari ≥ 13) |
| Server | Any static file server | HTTPS for best performance |

---

# 2. Exporting to the Web

1. **Enable the HTML5 export template**  
   Open **Project > Install Export Templates** and install the latest template.

2. **Create an export preset**  
   * Go to **Project > Export**.  
   * Click **Add…** → **HTML5**.  
   * Configure the preset options:

   | Option | Description |
   |--------|-------------|
   | **Export Path** | Where the exported files will be written. |
   | **File name** | Suggested: `index.html` for the main page, `index.html?godot_main_scene=Main.tscn` can override the start scene. |
   | **WebGL 2.0** | Checked if the target browsers support WebGL 2.0. |
   | **Memory (MB)** | Default 64 MiB, increase if the project needs more RAM. |
   | **HTML5 Runtime** | `web` or `standalone`. |

3. **Build**  
   Click **Export Project**. Godot generates a folder containing:

   ```
   ├─ index.html
   ├─ index.js
   ├─ index.wasm
   ├─ project.godot
   ├─ files/
   └─ …
   ```

   - `index.html` is the launcher.  
   - `index.wasm` holds the compiled engine and project resources.  
   - `index.js` contains the loader logic.

4. **Run locally**  
   Use a local server (e.g. `python -m http.server 8000`) because browsers block WebAssembly files served via `file://`.

5. **Upload to a web host**  
   Copy the entire export directory to any static host (GitHub Pages, Netlify, Firebase Hosting, etc.).  
   Make sure the server serves `.wasm` files with the correct MIME type `application/wasm`.

---

# 3. Customizing the Export

## 3.1. Changing the launch URL

You can set a custom **index.html** template. Copy the generated `index.html`, modify it, and re‑export.  
Typical changes:

* Change the `<title>` tag.  
* Add meta tags for SEO or social sharing.  
* Insert analytics scripts before the `<script src="index.js"></script>` line.

## 3.2. Using a custom start scene

Add `?godot_main_scene=MyScene.tscn` to the URL.  
Example: `https://example.com/index.html?godot_main_scene=Game.tscn`

## 3.3. Adjusting build size

* Disable unused modules in **Project > Export > Settings > Disabled Modules**.  
* Use **Project > Export > Settings > File compression** (`gzip` or `brotli`) for smaller payloads.

---

# 4. Common Issues & Tips

| Symptom | Fix |
|---------|-----|
| “WebAssembly is not supported” | Check browser compatibility or use `webgl` fallback. |
| “index.wasm: Failed to fetch” | Ensure MIME type `application/wasm` and correct file path. |
| “Memory allocation failed” | Increase the **Memory (MB)** setting. |
| Slow load time | Enable gzip/brotli compression and remove large unused assets. |

---

# 5. Example `index.html` Snippet

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>My Godot Game</title>
    <meta name="description" content="A fun adventure built with Godot." />
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <script src="index.js"></script>
</body>
</html>
```

Place this file in the export directory before exporting.  

---

# 6. Resources

* [Godot 4 Export Templates](https://docs.godotengine.org/en/stable/getting_started/step_by_step/exporting_to_other_platforms.html#export-templates)  
* [WebGL 2.0 and WebAssembly](https://web.dev/webassembly/)

---

**Note:**  
The HTML5 export target is only available in Godot 4. For Godot 3 you need to use the `html5` export preset bundled with the engine.