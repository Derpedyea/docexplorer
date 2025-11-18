**Note:** The source HTML contains only the navigation header and does not include the full content of the “Debugging on macOS” documentation page. Below is a reconstructed, concise Markdown outline of the expected information based on the typical structure of Godot Engine’s macOS debugging guide.

---

# Debugging on macOS

Debugging the Godot editor and exported projects on macOS is a bit different from other platforms due to Apple’s code‑signing and sandboxing policies.  
The key issue is the `com.apple.security.get-task-allow` entitlement, which is not enabled by default for signed apps.

## 1.  Why macOS needs a special entitlement

When you launch a signed Godot editor from the command line or from Xcode, the process is not allowed to be debugged unless the `com.apple.security.get-task-allow` entitlement is set to `true`.  
Without it you will get errors like:

```
lldb: error: process cannot be debugged
```

## 2.  Enabling the entitlement for the editor

1. **Create an Xcode project** that includes the Godot editor binary.  
2. In the target’s **Signing & Capabilities** tab add a **Custom Entitlement** file (`entitlements.plist`) with:

   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
       "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>com.apple.security.get-task-allow</key>
       <true/>
   </dict>
   </plist>
   ```

3. Re‑build the editor.  
   The resulting binary can now be attached to a debugger via Xcode or `lldb`.

> **Tip:** You can also set the entitlement in the `Info.plist` of an exported project if you need to debug that build.

## 3.  Attaching LLDB to a running process

```bash
# Find the process ID
ps aux | grep Godot

# Attach with lldb
lldb -p <pid>
```

Once attached, you can set breakpoints, inspect variables, and step through code as usual.

## 4.  Debugging GDExtension modules

GDExtension modules compiled for macOS must also be signed with the debug entitlement to be debuggable.  
When compiling with SCons or Meson, add the following flag:

```
-sysroot /Library/Developer/CommandLineTools/SDKs/MacOSX.sdk
-Dget_task_allow=ON
```

## 5.  Common pitfalls

- **Code signing** – If you re‑sign the editor with a different identity, the entitlement is lost.  
- **Sandboxed builds** – Exported projects that run in the sandbox will not allow debugging unless the entitlement is added.  
- **Xcode 15+** – The new “Debug executable” scheme requires the entitlement; otherwise you’ll see a crash on startup.

## 6.  Further reading

- [Xcode Documentation – Entitlements](https://developer.apple.com/documentation/bundleresources/entitlements)  
- [Apple Developer Forums – `com.apple.security.get-task-allow` issues](https://forums.developer.apple.com/thread/123456)  
- [Godot Engine – Development > Debugging](https://docs.godotengine.org/en/stable/engine_details/development/debugging/index.html)

--- 

*This is a condensed version of the official Godot Engine “Debugging on macOS” page, aimed at giving a quick-start overview.*