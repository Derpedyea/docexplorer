# Console support in Godot

Console porting is an advanced feature that lets you build and run your Godot projects on dedicated gaming consoles such as Xbox, PlayStation, Nintendo Switch, and others.  
In order to develop for consoles you will need access to the console SDK and export templates for that platform. These export templates must be built either by yourself or by a third‑party service that provides ready‑made templates.

> **⚠️ Note**  
> At the time of writing Godot itself does not ship pre‑compiled console templates.  
> The templates are normally distributed by the console vendor or by the community and must be added manually to your Godot installation.

---

## 1. Prerequisites

| Item | Details | How to obtain |
|------|---------|---------------|
| **Console SDK** | Official development kit for the console (e.g. PlayStation 4/5 SDK, Xbox Development Kit, Nintendo Switch Development Kit). | Register with the console manufacturer as a developer. |
| **Export template source** | Godot source code compiled for the console platform. | Usually provided by the vendor; otherwise you can build the templates yourself following the “Building export templates” guide. |
| **Developer license** | A license to distribute games for the target console. | Purchase or obtain through a publisher partnership. |
| **Hardware** | A development kit or a “homebrew” console that allows custom firmware. | Depends on the console, may require a hardware dev kit. |

---

## 2. Export template workflow

### 2.1. Adding export templates

1. **Download** the console export templates package (e.g. `godot_console_export_templates.tgz`).
2. **Extract** the package into Godot’s export‑templates folder.  
   *On Windows*: `C:\Users\<User>\AppData\Roaming\Godot\export_templates\`.
3. **Restart Godot**. The new templates will appear in the Export menu under the console name.

### 2.2. Building templates yourself

If a pre‑built template is not available:

1. **Get the Godot source** from the official repository.  
   ```bash
   git clone https://github.com/godotengine/godot.git
   cd godot
   ```
2. **Set up the build environment** for your console (this usually involves installing vendor SDKs, cross‑compilers, etc.).  
   The specific steps vary per platform and are typically documented by the vendor.
3. **Compile** the editor and export templates targeting the console.  
   ```bash
   scons platform=<console> target=release
   ```
4. **Copy** the resulting `godot.<ext>` binary into the console export templates folder as described above.

> **Tip** – Some consoles require a signed build step. Make sure to follow the vendor’s signing procedure before uploading the game.

---

## 3. Configuring a project for console export

1. Open the project in Godot Editor.
2. Go to **Project > Project Settings** → **Export**.
3. Create a new export preset for your console, e.g. “Xbox One”.
4. Fill in the required fields (product name, developer name, etc.).  
   Console SDKs usually expect a specific set of metadata.
5. Under the *Advanced* tab, enable **Use console specific features** if available.
6. If your project uses custom shaders or physics, double‑check the compatibility tables for the target console.

---

## 4. Common issues & troubleshooting

| Problem | Likely cause | Fix |
|---------|--------------|-----|
| Export fails with “missing library” | The SDK’s shared libraries are not in the export template’s lib folder | Ensure the SDK libraries are copied into the `platform/console` folder of the templates. |
| Runtime crash when accessing a console‑only API | Code paths that call `OS::get_singleton()->is_console()` are not guarded | Wrap console‑only code with `if (OS::is_console()) { … }`. |
| Build exceeds console size limits | Asset resolution or binary size is too large | Reduce texture sizes, enable texture compression, use simpler shaders. |
| Signing fails | Wrong key or certificate | Verify the correct keychain is installed and the signing command line matches vendor specs. |

---

## 5. Resources

* **Official Godot documentation** – `docs.godotengine.org`
* **Console SDK documentation** – provided by each console manufacturer
* **Community guides** – many developers post their build scripts on GitHub or forums
* **Godot’s export templates repo** – `godot/godot-export-templates`

---

### Quick start checklist

1. Register as a developer with the target console.
2. Acquire the console SDK and any necessary signing credentials.
3. Get the pre‑built or build the console export templates.
4. Add the templates to Godot’s export folder.
5. Create an export preset in your project and fill required metadata.
6. Build and sign your game.
7. Test on the development kit or a compatible testing environment.
8. Submit to the console store once verified.

Happy porting!