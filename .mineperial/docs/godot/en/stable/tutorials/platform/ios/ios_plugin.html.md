**Creating iOS plugins** – Godot Engine documentation  
================================================================

This guide explains how to write and integrate iOS‑specific extensions (plugins) for the Godot engine.  iOS plugins let you:

* Access third‑party iOS libraries (e.g. Firebase, ARKit, Game Center).
* Use iOS‑specific features such as push notifications, camera, or custom UI elements.
* Keep platform‑specific code isolated from the rest of your game.

> **Tip** – You can use the same plugin structure for Android by creating an Android plugin. The API is identical; only the platform‑specific implementation differs.

---

## 1.  What iOS plugins can do

* **Call native iOS APIs** from your GDScript / C# / GDExtension code.
* **Expose custom signals** and **exported properties** to Godot.
* **Load and unload** plugins at runtime.
* **Interact with Godot’s scene tree** by emitting signals or modifying nodes.

---

## 2.  Using an existing iOS plugin

1. Download the plugin package (typically a `.zip` or `.gdplugin` file).
2. Extract it into your project’s `res://plugins/` folder.
3. Enable the plugin in *Project → Project Settings → Plugins*.
4. Call the exposed methods in GDScript:

   ```gdscript
   var ads = GDNativePlugin.new()
   ads.show_ad()
   ```

> **Note** – If the plugin uses Swift, you will need to create a bridging header and compile the Swift code as a static library that Godot can load.

---

## 3.  Creating a new iOS plugin

The process is split into three main steps:

1. **Set up the project structure.**
2. **Write the native iOS code (Swift or Objective‑C).**
3. **Create the Godot GDExtension wrapper.**

### 3.1  Project layout

```
my_project/
├── res/
│   ├── plugins/
│   │   └── my_ios_plugin/
│   │       ├── ios/
│   │       │   ├── MyPlugin.swift
│   │       │   └── MyPlugin.h
│   │       ├── plugin.cfg
│   │       └── plugin.gd
```

* `plugin.cfg` – Godot plugin descriptor.  
* `plugin.gd` – GDScript wrapper that exposes the native API to the editor.

### 3.2  Swift / Objective‑C implementation

```swift
// MyPlugin.swift
import Foundation
import UIKit

@objc(MyPlugin)
public class MyPlugin: NSObject {

    @objc
    public static func get_version() -> String {
        return "1.0"
    }

    @objc
    public func show_alert(message: String) {
        DispatchQueue.main.async {
            let alert = UIAlertController(title: "Plugin", message: message, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK", style: .default))
            UIApplication.shared.keyWindow?.rootViewController?.present(alert, animated: true)
        }
    }
}
```

> **Swift note** – If you need to expose this class to Objective‑C, make sure the class is marked `@objc` and inherits from `NSObject`.

### 3.3  GDExtension wrapper

Create a minimal `plugin.gd` that loads the compiled library and exposes the methods:

```gdscript
# plugin.gd
extends Node

var _lib = null

func _init():
    _lib = load("res://plugins/my_ios_plugin/ios/libMyPlugin.so")

func get_version():
    return _lib.call("MyPlugin::get_version")

func show_alert(msg):
    _lib.call("MyPlugin::show_alert", msg)
```

* The library (`libMyPlugin.so`) is produced by compiling your Swift/Objective‑C code with Xcode and linking it into the Godot export template’s `plugins/ios` folder.
* The GDExtension `GDNativeLibrary` and `GDNativeClass` entries are defined in `plugin.cfg`.

```ini
# plugin.cfg
[plugin]
name="My iOS Plugin"
description="A simple iOS plugin example."
author="Your Name"
version="1.0"

[script]
class_name=MyIosPlugin
extends=Node
```

### 3.4  Building the plugin

1. Create a **static library** in Xcode with the same architecture as the Godot export template (`arm64`, `x86_64` for simulator).
2. Add the generated `.a` file and headers to the Godot export template’s `plugins/ios` directory.
3. In Godot, enable the plugin and test it with:

   ```gdscript
   var plugin = MyIosPlugin.new()
   plugin.show_alert("Hello from iOS!")
   ```

---

## 4.  Common pitfalls

| Issue | Fix |
|-------|-----|
| `libMyPlugin.so` not found | Ensure the library is in `res://plugins/my_ios_plugin/ios/` and matches the export template path. |
| Crash on iOS 13+ | Add `@available(iOS 13.0, *)` annotations or guard with `if #available` in Swift. |
| Bridging header missing | Create `MyPlugin-Bridging-Header.h` with the needed imports. |
| Plugin disabled in editor | Check `Project → Project Settings → Plugins` and confirm the plugin is listed and enabled. |

---

## 5.  Exporting with the plugin

When exporting to iOS:

1. Add the plugin folder to the export template’s `plugins` directory.
2. Make sure the `Info.plist` contains any required usage descriptions (e.g., camera usage).
3. Build the export. The plugin will be bundled automatically.

---

## 6.  Further reading

* [Godot GDExtension documentation](https://docs.godotengine.org/en/stable/tutorials/export/gdextension.html)
* [Godot plugin development guide](https://docs.godotengine.org/en/stable/tutorials/plugins/index.html)
* iOS SDK documentation for the specific APIs you are using.

---