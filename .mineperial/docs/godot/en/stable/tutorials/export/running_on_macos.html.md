# Running Godot apps on macOS

> By default, macOS will run only applications that are signed and notarized.  
> Depending on how a Godot application is signed and distributed, you may run into several scenarios:

---

## 1. App is signed and notarized

* **What it means**  
  * The binary is signed with an Apple Developer ID and has passed notarization.  
  * The system allows it to run without user intervention.

* **How to do it**  
  * Create a valid Apple Developer account.  
  * Use Xcode or command‑line tools (`codesign`, `xcrun altool`) to sign and notarize the exported bundle.  
  * Verify with `spctl -a -vv /path/to/YourApp.app`.

---

## 2. App is signed but *not* notarized

* **What it means**  
  * The binary carries a Developer ID signature, but the notarization step was skipped or failed.  
  * macOS will warn the user and may block the app on newer macOS releases.

* **How to fix**  
  * Re‑run the notarization step with `xcrun altool`.  
  * Make sure the bundle identifiers and provisioning profiles match.  
  * After successful notarization, re‑sign and re‑export.

---

## 3. App is unsigned

* **What it means**  
  * No code signing applied.  
  * macOS will block the app entirely unless the user explicitly overrides the gatekeeper.

* **How to sign**  
  * Use Xcode or the `codesign` tool.  
  * Generate a **Developer ID Application** certificate from Apple.  
  * Sign the bundle:  
    ```bash
    codesign --deep --force --sign "Developer ID Application: Your Name (TEAMID)" /path/to/YourApp.app
    ```

---

## 4. App is signed with an ad‑hoc or debug identity

* **What it means**  
  * The app may run locally but will not be distributed via the App Store.  
  * Gatekeeper may still allow it if the user disables checks, but it is not recommended for public releases.

---

## 5. App is distributed as a DMG or ZIP

* **What to consider**  
  * The contents inside the archive must maintain the signed structure.  
  * When extracted, the bundle should still be signed; otherwise Gatekeeper will refuse to run it.

---

## Exporting a Godot macOS Project

1. **Build the project** – In Godot’s export presets, select *macOS*.  
2. **Generate an `.app` bundle** – Godot creates a folder with the executable and resources.  
3. **Add an Info.plist** – The exported bundle contains a default plist; customize it if needed (e.g., `CFBundleDisplayName`, `LSApplicationCategoryType`).  
4. **Sign the bundle** – Use the procedure described above.  
5. **Notarize** – Submit to Apple using `xcrun altool`.  
6. **Re‑export or bundle** – After notarization, re‑sign with the *Developer ID Application* certificate to embed the notarization ticket.

---

## Testing the App on macOS

```bash
# Verify signing
spctl -a -vv /path/to/YourApp.app

# If not notarized
xcrun stapler staple /path/to/YourApp.app
```

If the `spctl` command reports **"accepted"**, the app is ready.  
If it reports **"rejected"** or **"policy failed"**, ensure that the notarization ticket is attached and that the bundle hasn’t been altered after signing.

---

## Troubleshooting Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| App refuses to launch with “unverified developer” warning | App is unsigned or not notarized | Sign and/or notarize the bundle. |
| Launch fails with “The app was not signed properly” | Signature missing `--deep` flag or wrong identity | Re‑sign with `--deep --force`. |
| Gatekeeper blocks the app after macOS update | Notarization ticket missing or expired | Staple the ticket again after re‑signing. |

---

## Resources

* [Apple’s Code Signing Guide](https://developer.apple.com/documentation/security/notarizing_macos_software_before_distribution)  
* [Godot Export Documentation – macOS](https://docs.godotengine.org/en/stable/tutorials/export/exporting.html#macos)  
* [Xcode Code Signing Docs](https://developer.apple.com/library/archive/documentation/IDEs/Conceptual/AppStoreDistributionGuide/Chapters/CodeSigning.html)

---