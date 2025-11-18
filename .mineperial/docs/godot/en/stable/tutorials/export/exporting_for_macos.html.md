**Exporting for macOS**  
*(Godot Engine – Stable Documentation)*

---

# 1.  Overview  

When you export a Godot project to macOS using the official export templates, the result is a **single “Universal 2” binary** inside a standard macOS `.app` bundle.  
The bundle follows the typical macOS structure:

```
MyGame.app/
├─ Contents/
│   ├─ Info.plist
│   ├─ MacOS/
│   │   └─ MyGame          ← executable (x86_64 + arm64)
│   ├─ Resources/
│   │   ├─ godot.windows-templates-.../   ← exported data
│   │   └─ …
│   └─ Frameworks/
│       └─ libgodot.64.dylib   (optional dependencies)
```

* `Contents/Info.plist` – standard macOS metadata.  
* `MacOS/MyGame` – the actual binary, compiled for both **x86_64** and **arm64** (Apple‑silicon).  
* `Resources/` – the project’s exported resources (scenes, textures, audio, etc.).  
* `Frameworks/` – any additional libraries your game needs (rarely used).

---

# 2.  Exporting from the Editor  

1. **Download the export templates**  
   * Open the **Project → Project Settings → Export** tab.  
   * Click **Download** next to the *macOS* export template.  

2. **Create an Export Preset**  
   * In the Export panel, click **Add… → macOS**.  
   * Give the preset a name (e.g., *Release*).  
   * Adjust any of the following options as needed:  
     * **Use `--path`** – path to the compiled binary (default is `./bin`).  
     * **Export all scenes** – check if you want the entire scene tree.  
     * **Compression** – choose “Uncompressed” for debugging or “Gzip” for distribution.  

3. **Export the project**  
   * Press **Export Project…**.  
   * Select a folder; the `.app` will be created automatically.  

> **Tip** – If you only want a *debug* build, enable *Debug* mode in the export preset; this keeps the executable unstripped and includes the Godot debugger.

---

# 3.  Signing the Application  

Apple requires that any macOS app be signed with a valid **Developer ID** or **Mac App Store** certificate.

```bash
# Replace with the correct certificate name
codesign --deep --force --options runtime \
        --entitlements entitlements.plist \
        /path/to/MyGame.app
```

* `--deep` signs all nested binaries.  
* `--entitlements` can be omitted for a simple app without special permissions.  

Check the signature:

```bash
spctl -a -vvv /path/to/MyGame.app
```

If the result is `accepted`, the app is properly signed.

---

# 4.  Notarization  

If you plan to distribute the app outside the App Store, you must notarize it.

```bash
xcrun altool --notarize-app \
             -f MyGame.app.zip \
             --primary-bundle-id com.example.MyGame \
             --username "you@example.com" \
             --password "@keychain:AC_PASSWORD"

# Wait for Apple’s response and then staple
xcrun stapler staple MyGame.app
```

* First zip the app:

```bash
ditto -c -k --sequesterRsrc --keepParent MyGame.app MyGame.app.zip
```

* After notarization completes, the app is ready for distribution.

---

# 5.  Packaging for Distribution  

You can distribute the `.app` directly or create a **disk image** (`.dmg`) or a **zip** for easy download.

```bash
# Create a DMG
hdiutil create -volname "MyGame" \
                -srcfolder MyGame.app \
                -ov -format UDZO MyGame.dmg
```

---

# 6.  Command‑Line Export (Optional)  

If you prefer the command line or want to script exports:

```bash
# Path to the Godot executable
godot --export-pack "macOS" MyGame.app
```

* `--export-pack` uses the preset named **macOS**.  
* `--path` can be added to change the output directory.

---

# 7.  Common Issues  

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| App launches but immediately quits | Wrong architecture, missing `libgodot.64.dylib` | Verify universal binary, re‑export |
| “Invalid signature” error | Code signing failed | Re‑run `codesign` with correct certificate |
| “App is not notarized” | Skipped stapling | Run `xcrun stapler staple` after notarization |
| “Missing entitlement” | Requires specific macOS permission | Add the entitlement in `entitlements.plist` |

---

# 8.  Resources  

* [Official Godot Export Documentation](https://docs.godotengine.org/en/stable/tutorials/export/index.html)  
* [Apple Developer – Sign and Notarize Mac Apps](https://developer.apple.com/documentation/xcode/notarizing_macs_app)  
* [Godot Export Templates](https://download.godotengine.org/export_templates/)

---