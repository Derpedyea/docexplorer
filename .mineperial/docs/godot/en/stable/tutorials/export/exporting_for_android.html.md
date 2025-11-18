**Exporting for Android**  
*Godot Engine documentation – stable*

---

## Overview

Exporting a Godot project to Android requires a few prerequisites that are much lighter than compiling the engine itself.  The process is split into two parts:

1.  **Installing the SDK and toolchain** – OpenJDK, Android SDK, NDK and Gradle.
2.  **Configuring Godot** – setting up environment variables and the Android export templates.

Below you’ll find step‑by‑step instructions that work for all recent Godot versions (4.x and 3.x).

---

## 1. Install OpenJDK 17

Godot 4.x requires JDK 17 or newer.  The easiest way is to install a distribution that includes all the necessary tools.

| Platform | Download link | Notes |
|----------|---------------|-------|
| **Windows** | <https://jdk.java.net/17/> | Choose the *Windows x64* binary, unzip it, and remember the install folder. |
| **macOS** | <https://jdk.java.net/17/> | macOS arm64 and x86‑64 binaries are available. |
| **Linux** | Use your distribution’s package manager (`apt install openjdk-17-jdk`, `yum install java-17-openjdk`, etc.) | Alternatively download from the JDK website. |

> **Tip** – Set `JAVA_HOME` to point at the JDK folder after installation (see §2.2).

---

## 2. Install Android SDK / NDK

### 2.1 Using Android Studio

The most straightforward approach is to install **Android Studio**, which bundles the SDK and NDK.

1.  Download Android Studio: <https://developer.android.com/studio>  
2.  During installation, make sure the following are selected:
    * Android SDK
    * Android SDK Command‑Line Tools
    * Android SDK Build‑Tools
    * NDK (current revision)
    * Gradle
3.  Open `Android Studio > Settings (Preferences) > Appearance & Behaviour > System Settings > Android SDK`.  
    * In the **SDK Tools** tab tick the boxes for **NDK** and **CMake**.  
4.  Note the SDK root path (e.g. `C:\Users\<you>\AppData\Local\Android\Sdk` on Windows or `~/Library/Android/sdk` on macOS).

### 2.2 Install via Command‑Line

If you prefer a lightweight install:

```bash
# Windows (PowerShell)
winget install --id=AndroidStudio.ChromiumEdge -e

# macOS (Homebrew)
brew install --cask android-studio

# Linux
sudo apt install android-sdk
```

After installing the SDK, run `sdkmanager "ndk;21.4.7075529"` (replace the version number with the latest) to fetch the NDK.

### 2.3 Set Environment Variables

| Variable | Purpose | Example |
|----------|---------|---------|
| `ANDROID_HOME` or `ANDROID_SDK_ROOT` | Path to the Android SDK | `C:\Users\<you>\AppData\Local\Android\Sdk` |
| `JAVA_HOME` | Path to OpenJDK | `C:\Program Files\Java\jdk-17` |

Add them to your system’s environment variables and restart any terminal or Godot instance to pick up the changes.

---

## 3. Download the Godot Android Export Templates

The Godot editor does not ship with Android export templates; they must be downloaded separately.

1. Open Godot and go to **Project → Install Android Export Templates**.  
2. Click **Download**; the editor will fetch the appropriate ZIP file for your platform.  
3. Extract the ZIP.  
4. The templates should automatically be placed in the folder referenced by the editor.  
   * You can also place the ZIP manually in `~/.config/Godot/export_templates` (Linux) or `%APPDATA%\Godot\export_templates` (Windows).

> **Important** – The template zip contains `export_presets.cfg` that defines the default Android export preset.

---

## 4. Configure the Export Preset

1.  In Godot, go to **Project → Export**.  
2.  Click **Add… → Android**.  
3.  In the preset, set:
    * **Package name** – e.g. `com.example.mygame`.  
    * **Version code / name** – Android’s numeric and string identifiers.  
    * **Key store** – If you have a signing key; otherwise the editor will generate a debug keystore automatically.  

4.  Optional: tweak **APK** vs **App Bundle** output, screen orientation, permission requests, etc.  

5.  When you are ready, click **Export Project** (or **Export Project…** for custom path).

---

## 5. Building and Running on a Device

### 5.1 Connect a Device

* Enable **Developer Options** on the Android device.  
* Enable **USB debugging**.

### 5.2 Install the `adb` tool

It is bundled with the Android SDK (`platform-tools`), so it should already be available.

### 5.3 Run from the Editor

1. In the export dialog, tick **Export with debug**.  
2. Click **Export** and then **Run**.  
3. Godot will push the APK to the device using `adb install`.

### 5.4 Command‑Line Build

You can also build from the terminal:

```bash
godot --export android /path/to/output.apk
```

The same preset and environment variables apply.

---

## 6. Common Issues

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| “Unable to find Java home” | `JAVA_HOME` not set or wrong | Re‑check the path, restart the terminal. |
| “Android SDK not found” | `ANDROID_HOME` missing | Add the variable, verify the path. |
| “Unable to resolve dependency: androidx.core:core:… ” | Out‑of‑date build‑tools or missing AndroidX | Update SDK tools, run `sdkmanager --update`. |
| Export fails with “Permission denied” | Sign‑key not configured | Use `Project → Export → Android → Key store` or use a debug keystore. |

---

## 7. Useful Links

* [Official Godot Android Export Documentation](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_android.html)  
* [Android SDK Platform‑Tools](https://developer.android.com/studio/releases/platform-tools)  
* [OpenJDK Downloads](https://jdk.java.net/17/)  

---