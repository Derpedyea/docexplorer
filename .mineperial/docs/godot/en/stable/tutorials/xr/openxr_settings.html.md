**OpenXR Settings**  
====================

OpenXR has its own set of settings that are applied when OpenXR starts.  
While it is possible for OpenXR extensions implemented through Godot plugins to add additional settings, we will only discuss the core OpenXR settings that can be configured in Godot.

---

### 1. What are OpenXR Settings?

OpenXR settings in Godot are a collection of options that influence how the engine interacts with the OpenXR runtime and the underlying hardware. These settings can be found in the **Project Settings → XR → OpenXR** panel and are applied automatically whenever a project is launched in VR/AR mode.

### 2. Core Settings

| Setting | Description | Default |
|---------|-------------|---------|
| **Enable XR** | Toggles the entire XR subsystem. | `false` |
| **OpenXR Runtime** | Selects which OpenXR runtime to use (e.g., OpenXR, Oculus, SteamVR). | *auto-detected* |
| **Hand Tracking** | Enables or disables hand‑tracking support. | `false` |
| **Controller Support** | Configures which controller profiles are active. | `OpenXR` |
| **XR Swapchain Resolution** | Sets the resolution for the XR swapchain. | `native` |
| **XR Mirror** | Enables mirroring of the VR view to the main window. | `false` |
| **XR HMD Pose** | Adjusts the HMD pose handling. | `relative` |

> **Tip** – Use the **XR** section of the editor to preview changes immediately.  
> Settings can also be modified at runtime via the `XRServer` singleton.

### 3. Advanced Settings

- **XR Debug Mode** – Enables verbose logging for troubleshooting XR sessions.  
- **XR Input Mode** – Choose between “Discrete” and “Continuous” input handling.  
- **XR Frame Timing** – Fine‑tune frame presentation timing and latency.  
- **XR Tracking Space** – Set the tracking space type (standing, seated, or room‑scale).  

### 4. Interaction with Plugins

If you create or use a plugin that implements OpenXR extensions, you can expose additional settings via the plugin’s own configuration panel. Those settings will be applied *after* the core OpenXR settings are loaded.

### 5. Common Issues & Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| *XR session fails to start.* | Unsupported runtime or driver issue. | Update drivers, check runtime installation, and select correct runtime in settings. |
| *Poor performance or latency.* | Swapchain resolution too high or frame timing misconfigured. | Lower resolution, enable “XR Mirror”, or adjust frame timing. |
| *Controllers not detected.* | Hand tracking disabled or wrong controller profile. | Enable hand tracking or switch controller profile. |

### 6. Next Steps

After configuring the OpenXR settings, you can proceed to:

- **The XR action map** – Define and map input actions to XR controllers.  
- **XR scene setup** – Add `ARVRCamera`, `ARVRController`, and other XR‑related nodes.  
- **Performance tuning** – Use the XR debugging tools in the editor to profile rendering and input latency.

--- 

**References**  
- [Godot Manual – XR](https://docs.godotengine.org/en/stable/tutorials/xr/).  
- [OpenXR Specification](https://www.khronos.org/openxr/).