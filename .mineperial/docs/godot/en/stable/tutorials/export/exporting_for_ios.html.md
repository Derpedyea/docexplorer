**Exporting for iOS**  
=======================

Exporting a Godot project for iOS is a two‑step process:  

1. **Generate a Xcode project** from Godot.  
2. **Build and run** that project with Xcode (or the command‑line tools).  

Below is a practical, step‑by‑step guide that covers all the details you need to get a Godot game onto an iOS device or the App Store.

---

## 1. Prerequisites

| Item | Description | Why it matters |
|------|-------------|----------------|
| **macOS** | A macOS machine (any recent version). | Xcode and iOS SDKs only run on macOS. |
| **Xcode** | The latest stable Xcode from the App Store. | Needed for the iOS toolchain, provisioning, signing, and building. |
| **Godot Export Templates** | Install the iOS export templates inside Godot. | Without them you can’t generate a usable Xcode project. |
| **Apple Developer Account** | Either a free account (for testing) or a paid one (for App Store release). | Required for code signing and provisioning profiles. |
| **Provisioning profile + Signing certificate** | Create or download a *development* and/or *distribution* profile in Xcode. | Needed for building and running on a device or submitting to the App Store. |

> **Tip:** If you’re only testing on the simulator, a *free* Apple Developer account is enough. For real devices and App Store publishing you need a paid account.

---

## 2. Install the iOS Export Templates

1. Open **Godot**.  
2. Go to **Project → Install Export Templates…**.  
3. If a download is required, click *Download* and let Godot install the templates.  
4. Once installed, the Export dialog will show an **iOS** preset.

> **Important:** The iOS preset requires the Xcode toolchain installed on the machine where you are exporting.

---

## 3. Configure a Project Export Preset

1. Open your project in Godot.  
2. Navigate to **Project → Export**.  
3. Click **Add…** and select **iOS**.  
4. Fill in the required fields:

   | Field | Example / Notes |
   |-------|-----------------|
   | **App bundle ID** | `com.yourcompany.yourgame` |
   | **App icon** | `res://icon.png` or a folder of 1x/2x/3x PNGs |
   | **Orientation** | `Portrait`, `Landscape`, or both |
   | **Build number** | `1` (increment with each new build) |

5. Optionally, add any **export options** such as enabling the `Debug` build, setting an `appstore` key, or specifying `iPhone`/`iPad` support.

6. Save the preset (e.g., name it *iOS – Release*).

---

## 4. Export the Project

### 4.1 From the Editor

1. In the Export window, choose the *iOS – Release* preset.  
2. Click **Export Project**.  
3. Choose a destination folder.  
4. Godot will create an `YourGame.xcodeproj` and an `YourGame.app` bundle inside that folder.

### 4.2 From the Command Line

If you prefer to script the export, use the built‑in command‑line exporter:

```bash
godot --export-release "iOS" /path/to/YourGame.xcodeproj
```

Replace `"iOS"` with the exact preset name (case‑sensitive).  
Use `--export` for a debug build instead of `--export-release`.

---

## 5. Open the Xcode Project

1. Double‑click the generated `YourGame.xcodeproj`.  
2. Xcode will open the workspace with the Godot-generated project.  
3. If this is your first time opening the project, Xcode may ask you to **import the iOS SDK** – confirm.  

### 5.1 Configure Signing

1. In the **Project Navigator**, click the top‑level project node.  
2. Select the **Signing & Capabilities** tab.  
3. Choose your **Team**.  
4. Xcode will automatically select a **Provisioning Profile** if one is available.  
5. If you want a custom profile, select *Manual signing* and pick the appropriate profile from the dropdown.

---

## 6. Build and Run

* **To run on a simulator**:  
  1. Select a simulator from the top toolbar.  
  2. Click the **Run** button (or `⌘R`).  

* **To run on a real device**:  
  1. Connect your iOS device via USB.  
  2. Make sure the device is trusted and that you have a valid **development profile**.  
  3. Select your device from the device list.  
  4. Click **Run**.

If you see “Signing requires a free developer account”, sign in with your Apple ID in Xcode.

---

## 7. Create an App Store Release

1. In Xcode, **Product → Archive** to create an archive.  
2. In the Organizer that opens, click **Distribute App**.  
3. Choose **App Store Connect** → **Upload**.  
4. Follow the wizard to submit the build, add metadata, screenshots, etc.

> **Note:** For a distribution build you must use a **distribution** provisioning profile and enable the **iOS Distribution** signing identity.

---

## 8. Common Troubleshooting

| Symptom | Fix |
|---------|-----|
| Xcode complains `Command failed: 'godot' not found` | Make sure the Godot binary is in your `PATH`, or set the full path in the export options. |
| The bundle ID is rejected | Ensure it is unique and matches your Apple Developer account. |
| Build fails due to “Unknown architecture” | Verify you’re using the latest Godot export templates and that Xcode is up‑to‑date. |

---

## 9. Helpful Links

* **Godot Export Templates download** – <https://godotengine.org/download>  
* **iOS Developer Documentation** – <https://developer.apple.com/documentation/>  
* **Apple’s App Store Connect** – <https://appstoreconnect.apple.com>  

---

### Quick Reference Checklist

- [ ] Xcode installed  
- [ ] Godot export templates (iOS) installed  
- [ ] Apple Developer account + provisioning profiles  
- [ ] Export preset configured (bundle ID, icon, orientation)  
- [ ] Xcode project signed correctly  
- [ ] Build & run on simulator/device  
- [ ] Archive and upload to App Store (if required)

---