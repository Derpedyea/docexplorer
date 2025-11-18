**Using the Asset Library**  
*(Godot Engine documentation – stable, English)*

---

### Overview
The Asset Library is a collection of community‑created content (scenes, scripts, shaders, etc.) that can be accessed directly from the Godot editor or via the Godot website.  
When you first visit the web frontend it looks like this:

```
+--------------------------------------------------------+
|  Asset Library  (search bar, categories, …)            |
+--------------------------------------------------------+
```

The library is split into several categories (3D, 2D, scripts, plugins, etc.) and each entry contains a description, a rating, screenshots, and a download button.

### Accessing the Library

#### From the Godot editor
1. Open the **AssetLib** tab in the **Project** panel.  
2. Click **Download** on an item you like.  
3. Godot will automatically import the selected assets into your project’s `res://` folder and add them to the **FileSystem** dock.

#### From the web frontend
1. Navigate to the [Godot Asset Library website](https://godotengine.org/asset-library/).  
2. Search for a keyword or browse categories.  
3. Click **Download** and unpack the ZIP file into your project directory.

### Importing Assets
When an asset is imported, Godot preserves its original folder structure.  
If the asset contains a scene, a script or a plugin, the files are placed in:

```
res://addons/<plugin_name>/            # for plugins
res://scenes/<scene_name>.tscn          # for scenes
res://scripts/<script_name>.gd          # for scripts
```

You may edit these files as any other project files.

### Managing Installed Assets
- **Updating** – If the asset author releases a new version, you’ll see a **Update** button in the AssetLib tab or in the asset’s page on the website.
- **Removing** – To delete an asset, simply delete its folder from the **FileSystem** dock.
- **Listing** – In the editor’s **AssetLib** tab, the **Installed** tab lists all assets you have downloaded.

### Submitting to the Asset Library
(See the companion page *Submitting to the Asset Library* for detailed steps.)

---

> **Tip**: The Asset Library also hosts tutorials, shaders and documentation.  
> Search for “physics 2D” or “3D shaders” to find community‑made examples that you can drop straight into your project.

---