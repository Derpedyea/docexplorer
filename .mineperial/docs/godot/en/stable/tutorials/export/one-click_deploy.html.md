**One-click deploy**

This page is part of the Godot Engine documentation and explains how to use the one‑click deploy feature to quickly build and run a Godot project on a connected device. Below is a cleaned‑up Markdown version of the main sections that you would find in the original HTML page.

> **NOTE** – The actual documentation contains more detailed information, screenshots, and links to related pages. The Markdown below covers the key concepts and steps.

---

## 1. What is one‑click deploy?

One‑click deploy is a convenience feature that allows you to build and run a Godot project on a supported device with a single button click. Once a platform is correctly configured and a device is connected to the computer, you can launch the app directly from the editor.

---

## 2. Why use one‑click deploy?

* **Fast iteration** – Test changes instantly on your target device without manual export steps.  
* **Device‑specific configuration** – The editor automatically uses the correct build settings for the connected device.  
* **Debugging** – The device runs the editor’s debug mode, making it easier to catch issues early.

---

## 3. Supported platforms

| Platform | Requirements | Notes |
|----------|--------------|-------|
| Android | Android SDK, `adb` installed | Requires device debugging enabled. |
| iOS | Xcode, Apple device | Requires a Mac to build. |
| Windows / macOS / Linux | Desktop build tools | Use USB or network for deployment. |

---

## 4. How to set up a platform

1. **Open Project Settings** → *Export* → *Add Platform*  
2. **Install the required SDK** (Android SDK, Xcode, etc.)  
3. **Configure the export preset** with your app’s bundle identifier, icon, etc.  
4. **Save the preset** – the editor will remember it for future runs.

---

## 5. Connecting a device

| Platform | How to connect |
|----------|----------------|
| Android | Enable `USB debugging` on your phone; connect via USB. |
| iOS | Connect your device via USB and trust the Mac. |
| Desktop | No special connection needed; the editor builds and launches locally. |

---

## 6. Using one‑click deploy

1. Open the editor and load your project.  
2. Click the **`Run`** button (green triangle).  
3. In the *Run* dialog, select your connected device and the appropriate export preset.  
4. Click **`Run`** – the editor will build, install, and launch the app on the device.

---

## 7. Common issues

| Symptom | Cause | Fix |
|---------|-------|-----|
| Build fails with “Missing SDK” | SDK not installed or not found | Install the SDK and update `PATH`. |
| Device not detected | USB drivers missing / USB debugging off | Install drivers or enable debugging. |
| App crashes on launch | Export preset misconfigured | Double‑check bundle ID, permissions, and target SDK. |

---

## 8. Further reading

* [Exporting projects](https://docs.godotengine.org/en/stable/tutorials/export/index.html) – Detailed export settings.  
* [Gradle builds for Android](https://docs.godotengine.org/en/stable/tutorials/export/android_gradle_build.html) – Customizing Android builds.  
* [Exporting for dedicated servers](https://docs.godotengine.org/en/stable/tutorials/export/exporting_for_dedicated_servers.html) – Server‑specific configuration.

---

### See also

* [Export presets](https://docs.godotengine.org/en/stable/tutorials/export/export_presets.html) – Manage multiple deployment targets.  
* [Debugging on device](https://docs.godotengine.org/en/stable/tutorials/debugging/debugging_on_device.html) – Inspect logs and breakpoints.

---