**Editor plugins**  
The page is part of the Godot Engine documentation and contains a detailed guide on how to create and use editor plugins. Below is a cleaned‑up Markdown version of the key sections and subsections that appear in the documentation.  

---  

## 1. Installing plugins  
*Where you can find plugins, how to download them, and how to install them into the Godot editor.*  

### 1.1 Downloading a plugin  
* Explanation of the Godot Asset Library and how to import plugins.  

### 1.2 Enabling a plugin  
* Steps to enable the plugin via **Project → Project Settings → Plugins**.  

---

## 2. Making plugins  
*High‑level overview of building a custom editor plugin.*  

### 2.1 Plugin structure  
* Directory layout and required files (`plugin.cfg`, script files).  

### 2.2 Basic plugin example  
```gdscript
extends EditorPlugin

func _enter_tree():
    # Code that runs when the plugin is activated
    pass

func _exit_tree():
    # Cleanup when the plugin is disabled
    pass
```

### 2.3 Using signals  
*How to connect signals to plugin functions for editor events.*  

---

## 3. Making main‑screen plugins  
*Adding custom dock panels or editors to the Godot main screen.*  

### 3.1 Adding a panel  
```gdscript
var panel = PanelContainer.new()
add_control_to_dock(DOCK_SLOT_LEFT_UL, panel)
```

### 3.2 Custom drawing  
*Use `CanvasItem` nodes or `Control` subclasses for drawing UI.*  

---

## 4. Import plugins  
*Plugins that hook into the import pipeline.*  

### 4.1 Creating an import plugin  
*Implement `EditorImportPlugin` and override `import()`.*  

### 4.2 Example: Custom image importer  
```gdscript
class CustomImageImportPlugin extends EditorImportPlugin:
    func import(source_path: String, save_path: String, options: Dictionary, platform_variants: Array, gen_files: Array) -> int:
        # Process and save the image
        return OK
```

---

## 5. 3D gizmo plugins  
*Creating custom gizmos for 3D nodes.*  

### 5.1 Registering a gizmo  
```gdscript
class CustomGizmoPlugin extends EditorSpatialGizmoPlugin:
    func has_gizmo(node: Node) -> bool:
        return node is CustomNode
```

### 5.2 Drawing handles and callbacks  

---

## 6. Inspector plugins  
*Custom controls that appear in the inspector for certain node types.*  

### 6.1 Implementing an inspector plugin  
```gdscript
class CustomInspectorPlugin extends EditorInspectorPlugin:
    func can_handle(object: Object) -> bool:
        return object is CustomNode
```

### 6.2 Adding custom property editors  

---

## 7. Visual Shader plugins  
*Extending the visual shader editor with new nodes or functions.*  

### 7.1 Creating a shader node  
*Use `ShaderNodeCustom` and expose parameters.*  

---

### Further Resources  
* [Installing plugins](installing_plugins.html)  
* [Making plugins](making_plugins.html)  
* [Editor plugin tutorial](editor_plugin_tutorial.html)  

---  

**Note:** The actual Godot documentation page contains additional examples, code snippets, and detailed explanations for each section. This Markdown excerpt captures the structural outline and representative code for the main topics.