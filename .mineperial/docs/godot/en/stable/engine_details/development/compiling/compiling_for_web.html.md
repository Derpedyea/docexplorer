**Compiling for the Web**  
*Godot Engine (stable) – Documentation*

---

# 1. Requirements

To build the Web export templates you need the following:

| Tool | Minimum version | Notes |
|------|-----------------|-------|
| **Emscripten** | 3.1.62+ | Use the official SDK (`emsdk`). |
| **Python** | 3.8+ | Any recent CPython 3 installation. |
| **SCons** | 4.0+ | The build system used by Godot. |
| **Node.js** | 12+ | For some helper scripts (optional). |

> **Tip:** The *emsdk* provides a convenient way to install Emscripten and keep it up‑to‑date.  
> ```bash
> # Linux / macOS
> git clone https://github.com/emscripten-core/emsdk.git
> cd emsdk
> ./emsdk install latest
> ./emsdk activate latest
> source ./emsdk_env.sh
> ```

---

# 2. Building the Export Templates

Before starting, confirm that the required tools are on your `PATH`.

```bash
# Verify versions
emcc --version
python --version
scons --version
```

### 2.1 Clone the source

```bash
git clone https://github.com/godotengine/godot.git
cd godot
```

> **Note:** You can also download a tagged source archive.

### 2.2 Build for Web

```bash
scons platform=web tools=no -j$(nproc)
```

* `platform=web` – selects the Web target.  
* `tools=no` – builds the *export templates* only.  
* `-j` – parallel jobs (optional).  

The command generates a `godot.web` binary and accompanying files in `bin/`.

### 2.3 Build the Editor for Web (Optional)

If you need the editor to run in a browser:

```bash
scons platform=web tools=yes -j$(nproc)
```

The resulting binary (`godot.web`) can be opened in any modern browser.

### 2.4 Export a Project to Web

1. Open the exported templates in the editor (`Project > Install Export Templates`).
2. In the editor, choose **Export → HTML5**.
3. Configure the export options (e.g., resolution, fullscreen).
4. Export – you’ll obtain a set of files (`index.html`, `godot.wasm`, `project.godot` etc.).

---

# 3. Common Issues & Debugging

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| Build fails with “`emcc` not found” | Emscripten not in PATH | Run `source ./emsdk_env.sh` or add the SDK to your `PATH`. |
| `scons` errors “No such file or directory: `emsdk_env.sh`” | Wrong working directory | Ensure you are in the root of the Godot source tree. |
| Browser shows “Refused to load the script due to MIME type” | Wrong MIME types on the web server | Serve `*.wasm` with `application/wasm`. |
| “WebAssembly memory exhausted” | Too large memory budget | Increase `-s TOTAL_MEMORY=1073741824` (1 GB) in the `config.pri` or via `SCons` options. |

---

# 4. Useful Build Options

You can tweak the Web build with several `scons` flags:

| Option | Description | Example |
|--------|-------------|---------|
| `profile=debug` | Enable debug symbols | `scons profile=debug` |
| `export_path=./build` | Output directory | `scons export_path=./build` |
| `verbose=1` | More build output | `scons verbose=1` |

---

# 5. Links & Resources

* **Emscripten SDK** – <https://emscripten.org>  
* **SCons** – <https://scons.org>  
* **Godot source repository** – <https://github.com/godotengine/godot>  
* **Export templates build instructions (legacy)** – see the legacy docs for Godot 3 if you need to build templates for older versions.

---

*End of Compiling for the Web documentation.*