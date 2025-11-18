**Deploying to Android** – Godot Engine documentation

> _This page explains how to configure a Godot project for Android deployment and how to package it for OpenXR-enabled standalone headsets._

---

## 1. Overview

Most standalone XR headsets run on Android, and OpenXR support is gradually arriving on these platforms. Before following the OpenXR‑specific instructions, you’ll need to set up the basic Android export workflow in Godot.  

> *If you’re new to Godot, see the [Setting up XR](../setting_up_xr.html) guide for a quick introduction to XR in the engine.*

---

## 2. Prerequisites

| Item | Description |
|------|-------------|
| **Godot 4.x** | You’ll need the latest stable version of Godot that includes Android export support. |
| **Android SDK / NDK** | Install the Android SDK and NDK (version 23 or later). |
| **Java JDK** | JDK 11+ is required for building APKs. |
| **Google Play Console account** | If you plan to publish to the Play Store. |

> **Tip** – Use the *Godot Android Studio* template to avoid configuration headaches.

---

## 3. Setting up Android Export

1. **Enable Android in Export Presets**  
   Open the **Project → Export** dialog, click **Add… → Android**, then click **Create**.

2. **Configure Export Settings**  
   * `Package Name` – e.g. `com.example.myxrapp`  
   * `Version` – increment for each release.  
   * `Orientation` – typically `Landscape`.  
   * `Screen Orientation` – lock to `landscape`.  
   * `Build Target` – `Android` (API 21+).  
   * `Debug` / `Release` – choose as appropriate.

3. **Sign the APK**  
   Create a keystore (`keytool -genkeypair ...`), then fill in *Keystore Path*, *Keystore Password*, *Key Alias*, and *Key Password* in the export preset.  
   *Tip:* For local testing you can use a debug key; for production use a release key.

4. **Enable OpenXR**  
   In *Project Settings → XR → OpenXR*, set the **Runtime** to *Android* and choose the desired **XR Plugin** (e.g., *OpenXR*).  
   *Optional:* Add the **XR Settings** node to fine‑tune tracking and passthrough.

---

## 4. Building the APK

Run the export:

```bash
godot --export "Android" path/to/your_project.apk
```

or use the editor’s **Export** button.

If you encounter build errors:

- Verify the `JAVA_HOME`, `ANDROID_HOME`, and `ANDROID_NDK_ROOT` environment variables.
- Ensure the Gradle wrapper (`gradlew`) is up to date.
- Check that your project’s `export_presets.cfg` contains the correct values.

---

## 5. Testing on Device

1. **Enable Developer Options** on the Android device.  
2. **Install the APK** via `adb install path/to/your_project.apk`.  
3. Launch the app. If it crashes, inspect logs:

```bash
adb logcat -s GdEngine
```

---

## 6. Common Issues

| Issue | Likely Cause | Fix |
|-------|--------------|-----|
| App doesn’t start | Missing `AndroidManifest.xml` entries | Add `uses-permission android:name="android.permission.INTERNET"` and other required permissions. |
| VR runtime errors | Wrong API level | Target API 26+ and use a recent OpenXR SDK. |
| Performance drop | Unoptimized scene | Use spatial occlusion and limit draw calls. |

---

## 7. Publishing

1. Create a signed release APK or AAB.  
2. Upload to Google Play Console, set screenshots, and privacy policy.  
3. Follow the Play Store guidelines for XR apps, including enabling “VR/AR” in the app’s settings.

---

## 8. Next Steps

* **XR Start Script** – See the [A better XR start script](a_better_xr_start_script.html) guide.  
* **Android Editor** – Explore the [Android editor](../using_the_android_editor.html) for advanced debugging features.  

---

*For more details, refer to the full documentation on the Godot website.*