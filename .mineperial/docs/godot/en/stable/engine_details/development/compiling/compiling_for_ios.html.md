**Compiling for iOS**  
*Godot Engine – Stable Documentation*

---

## Overview

Godot can be compiled for iOS from source. This guide covers the prerequisites, the build process, and how to set up an Xcode project for deployment.

> **Prerequisites**  
> • **Python 3.8+** – required for the SCons build system.  
> • **SCons 4.0+** – the build tool used by Godot.  
> • **Xcode** – the official IDE for macOS and iOS development.  
>   *Launch Xcode once and install the iOS support components.*  
>   If you already have Xcode, go to **Xcode → Preferences → Components** and install the required iOS SDKs.

---

## 1. Clone the Godot source

```bash
git clone https://github.com/godotengine/godot.git
cd godot
git checkout <desired‑branch-or‑tag>
```

> ⚠️ *Tip:* Use a recent stable tag (e.g., `4.2.2`) to avoid early‑release issues.

---

## 2. Configure the build

Create a `config.py` file in the root directory if you need custom build options. The default configuration is sufficient for iOS.

```python
# config.py
target = "iOS"
```

---

## 3. Build the engine

Run SCons from the root of the repository:

```bash
scons platform=iphone target=release
```

This will compile the core engine and generate an Xcode project in the `platforms/iphone/` directory.

### Common build options

| Option | Description | Example |
|--------|-------------|---------|
| `debug` | Build a debug binary | `scons platform=iphone debug=on` |
| `monolithic` | Build a single‑file binary | `scons platform=iphone monolithic=on` |
| `mac` | Target macOS (useful for simulator builds) | `scons platform=mac` |

---

## 4. Open the Xcode project

Navigate to `platforms/iphone/` and open `Godot.xcodeproj`. You’ll see two schemes:

1. **Godot** – runs the engine in a sandboxed iOS simulator or device.  
2. **GodotEditor** – allows you to run and debug the editor itself on iOS (experimental).

---

## 5. Configure the Xcode project

1. **Bundle Identifier** – set a unique identifier under **Signing & Capabilities**.  
2. **Provisioning Profile** – use a development or distribution profile that matches your Apple developer account.  
3. **Deployment Target** – select the minimum iOS version you support (e.g., 12.0).  

> **Note:** If you plan to publish to the App Store, you’ll need to configure App Icons, Launch Images, and other assets in Xcode.

---

## 6. Build and run

- Select a target device or simulator in Xcode.  
- Build (`⌘B`) and run (`⌘R`).  
- Debugging information is available directly in Xcode’s console.

---

## 7. Exporting a project

When exporting a Godot project for iOS, set the following export options:

1. **Export Path** – specify the destination `.ipa` file.  
2. **Include GDScript** – toggle this if you want the engine to compile scripts into the binary.  
3. **Add iOS‑specific features** – e.g., background execution, camera permissions.

Use Godot’s export preset or the command‑line export command:

```bash
scons platform=iphone export_preset=release
```

---

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| **Build fails with `xcodebuild` errors** | Xcode command‑line tools not installed | `xcode-select --install` |
| **Missing iOS SDK** | Xcode not updated | Update Xcode to the latest version |
| **Runtime crashes** | Incorrect bundle identifier or provisioning | Verify in Xcode signing settings |

---

## Further Reading

- [Compiling for Android](https://docs.godotengine.org/en/stable/engine_details/development/compiling/compiling_for_android.html)  
- [Compiling for VisionOS](https://docs.godotengine.org/en/stable/engine_details/development/compiling/compiling_for_visionos.html)  

---