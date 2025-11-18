**Exporting projects**  
*Godot Engine (stable) documentation*

---

### Overview

The **Exporting projects** guide explains how to package a Godot project for distribution on different platforms.  
It covers why exporting is useful, the tools available in the editor, creating export templates, setting up export presets, handling platform‑specific settings, and troubleshooting common issues.

---

### Table of Contents

1. [Why export?](#why-export)  
2. [Export templates](#export-templates)  
3. [Creating a new export preset](#creating-a-new-export-preset)  
4. [Exporting to desktop and mobile platforms](#exporting-to-desktop-and-mobile-platforms)  
   - 4.1 [Windows](#windows)  
   - 4.2 [macOS](#macos)  
   - 4.3 [Linux](#linux)  
   - 4.4 [Android](#android)  
   - 4.5 [iOS](#ios)  
   - 4.6 [Web](#web)  
5. [Exporting from the command line](#exporting-from-the-command-line)  
6. [Exporting packs, patches, and mods](#exporting-packs-patches-and-mods)  
7. [Troubleshooting export issues](#troubleshooting-export-issues)  

*(The original HTML contains a comprehensive navigation menu; see the Godot documentation website for the full hierarchy.)*

---

#### 1. Why export?

* Historically, Godot required developers to manually compile binaries and package projects for each platform.  
* Exporting automates this process, letting you generate installers, executables, or web builds directly from the editor.

#### 2. Export templates

Export templates are precompiled binaries of the Godot engine for each target platform.  
* **Download** the latest templates from the official website.  
* Place them in the `templates/` folder of your project or install globally via the editor’s **Editor → Manage Export Templates**.

#### 3. Creating a new export preset

1. Open **Project → Export**.  
2. Click **Add…** and choose a platform.  
3. Configure settings: **Name**, **Icon**, **Version**, etc.  
4. Save the preset.  

You can duplicate or delete presets as needed.

#### 4. Exporting to desktop and mobile platforms

##### 4.1 Windows  
* Choose **Windows Desktop** preset.  
* Set **Use PNG icons?**, **Use the Win32 subsystem**, and optionally enable **Use the 32‑bit/64‑bit binary**.  
* Click **Export Project** and choose a folder.

##### 4.2 macOS  
* Choose **macOS Desktop** preset.  
* Specify **Bundle identifier**, **App name**, and **Icon**.  
* Enable **Code signing** if required.

##### 4.3 Linux  
* Select **Linux Desktop**.  
* Provide an executable name and optional icon.  

##### 4.4 Android  
* Create an **Android** preset.  
* Supply **Package name**, **Minimum/Target SDK**, and **Signing key**.  
* Export as an **APK** or **App Bundle**.

##### 4.5 iOS  
* Set up an **iOS** preset (requires a macOS machine).  
* Provide **Bundle identifier**, **Team ID**, and **Signing certificate**.  
* Export to a **.ipa** file.

##### 4.6 Web  
* Choose **HTML5** preset.  
* Configure **Canvas size**, **WebGL settings**, and **HTTP header**.  
* Export as a folder with `index.html`, `web_export.zip`, etc.

#### 5. Exporting from the command line

Use the `godot` command with the `--export` flag:

```bash
godot --export "Windows Desktop" output.exe
```

Other options include `--export-pack`, `--export-release`, and `--path`.

#### 6. Exporting packs, patches, and mods

For larger projects, consider using the **Export PCK** system to bundle resources separately from the executable.  
* `godot --export-pack output.pck`  
* Load packs at runtime via `ResourceLoader.load()`.

#### 7. Troubleshooting export issues

| Issue | Possible Cause | Fix |
|-------|----------------|-----|
| Export fails with “Could not load export template” | Templates missing or corrupted | Re‑download templates |
| Android build signs “Insecure signing” | Wrong keystore or alias | Verify keystore path and password |
| Web export shows “CORS error” | Missing server configuration | Serve files via a web server |
| iOS build fails due to “Missing provisioning profile” | Xcode not set up | Generate or import a profile |

For detailed solutions, consult the **Exporting packs, patches, and mods** page.

---