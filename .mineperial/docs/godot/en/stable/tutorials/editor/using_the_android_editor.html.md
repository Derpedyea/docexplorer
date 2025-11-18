**Using the Android editor**

In 2023, Godot released an Android port of its editor that lets you create, develop, and export 2D and 3D projects directly on Android devices.  
The app can be downloaded from the Godot download page or from the Google Play Store (for older Godot 4.0 builds) and installed like any other native Android application.

---

## Android devices support

| Device | Android version | Notes |
|--------|-----------------|-------|
| Smartphones | Android 8.0+ | Requires a minimum of 1 GB RAM. |
| Tablets | Android 8.0+ | Larger screen for better workflow. |
| Android TV | Android 9.0+ | Can use controller support. |

> **Tip** – For the best performance, use a device with a recent GPU (e.g., Mali‑G77, Adreno 650) and at least 2 GB of RAM.

---

## Runtime Permissions

The Android editor uses the following runtime permissions:

| Permission | Purpose | Default state |
|------------|---------|---------------|
| `READ_EXTERNAL_STORAGE` / `WRITE_EXTERNAL_STORAGE` | Access to the project folder and resources. | Granted at first run |
| `INTERNET` | Download assets and update the editor. | Granted automatically |
| `VIBRATE` | Provide haptic feedback for certain editor actions. | Optional |

If you encounter permission issues while opening a project, go to **Settings → Apps → Godot → Permissions** and enable the required permissions manually.

---

## Tips & Tricks

- **File browsing** – Use the built‑in file browser to locate projects stored in external storage.  
- **Keyboard shortcut** – When a hardware keyboard is connected, the usual Godot shortcuts (e.g., `Ctrl+S`, `F5`) work.  
- **Screen rotation** – The editor automatically resizes to landscape orientation; you may lock orientation in the device settings if preferred.  
- **ADB debugging** – For advanced use, you can connect the Android device to a PC and launch the editor via ADB:  
  ```bash
  adb shell am start -n org.godotengine.Godot/org.godotengine.godot.Editor
  ```

---

## Limitations & known issues

| Issue | Description | Work‑around |
|-------|-------------|-------------|
| **No native mouse support** | The editor relies on touch or external mouse; some shortcuts may be missing. | Use an OTG mouse or a Bluetooth controller. |
| **Performance on low‑end devices** | Complex scenes may cause frame‑rate drops. | Reduce viewport resolution in the project settings. |
| **Missing “Save As”** | The editor cannot create a new project directly from the mobile interface. | Create projects from the desktop editor and copy them to the mobile device. |
| **Limited plugin support** | Some editor plugins depend on desktop‑only APIs. | Use only the built‑in plugins that are marked as “Android compatible.” |
| **File system limitations** | The Android file system is case‑insensitive; naming collisions can happen. | Keep a strict naming convention and avoid duplicate names with different case. |

For a full list of known issues and their work‑arounds, see the [Godot issue tracker](https://github.com/godotengine/godot/issues?q=android+editor).

---