**Installing plugins**  
======================

Godot’s editor can be extended with community‑written plugins.  
This guide walks you through the different ways to add and enable a plugin in a Godot project.

---

## 1.  What is a plugin?

A plugin is a collection of scripts, resources and optionally custom editors that extend the Godot editor with new tools, nodes, docks, or convenience features.  
Plugins are stored inside the project folder under a sub‑directory called `addons/`.

---

## 2.  Installing a plugin from the Asset Library

1.  Open the Godot editor and go to **Project → Asset Library**.  
2.  Browse or search for the desired plugin.  
3.  Click **Download** to fetch the plugin files.  
4.  The editor automatically unpacks the plugin into `res://addons/<plugin_name>`.

> **Tip** – You can also install a plugin by dragging a downloaded `.zip` file into the editor’s **Filesystem** dock; the editor will unpack it for you.

---

## 3.  Installing a plugin manually

1.  Download the plugin’s source (e.g. from GitHub or any other host).  
2.  Unzip the archive.  
3.  Copy the unpacked folder into `res://addons/` of your project.  

```text
my_project/
├─ addons/
│  └─ my_plugin/
│     ├─ plugin.cfg
│     └─ ...
```

4.  Open **Project → Project Settings → Plugins**.  
5.  Enable the plugin by checking the box next to its name.  

> **Important** – A plugin is only loaded when it’s enabled in Project Settings.  

---

## 4.  Enabling and disabling plugins

1.  Open **Project → Project Settings**.  
2.  Select the **Plugins** tab.  
3.  Find the plugin you installed.  
4.  Toggle the checkbox to enable or disable it.  
5.  The editor may ask you to **restart** to apply changes; do so if prompted.

---

## 5.  Common pitfalls

| Problem | Fix |
|---------|-----|
| Plugin does not appear in the list | Ensure the directory contains a `plugin.cfg` file with a valid `plugin` section. |
| Plugin fails to load | Check the **Output** panel for errors; missing dependencies or syntax errors in GDScript can prevent loading. |
| Plugin is disabled after a project update | Some plugins may use old API names; update the plugin or disable it until a compatible version is released. |

---

## 6.  Uninstalling a plugin

1.  Disable it in **Project Settings → Plugins**.  
2.  Delete the plugin’s folder from `addons/`.  
3.  Optionally, remove any residual configuration in `project.godot`.

---

## 7.  Next steps

* [Making plugins](../making_plugins.html) – Learn how to write your own editor extensions.  
* [Using plugins](../using_plugins.html) – How to use an enabled plugin in the editor.  

---