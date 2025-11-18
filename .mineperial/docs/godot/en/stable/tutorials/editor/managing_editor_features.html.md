**Managing editor features**  

*Source: <https://docs.godotengine.org/en/stable/tutorials/editor/managing_editor_features.html>*  

---

## Introduction  

In certain workflows it can be useful to restrict the features that are available in the Godot editor.  
For example:

* A UI designer on a team may not need to see 3‑D tools.  
* A teacher may want to provide a simplified editor for students.  
* A developer may want a clean, minimal editor for a specific task.

Godot offers **Editor Profiles** that allow you to enable or disable individual editor features, making the editor easier to use for different roles or projects.

---

## Creating a profile  

1. **Open Project Settings** – `Project → Project Settings…`  
2. **Navigate to the Profiles tab** –  
   `Editor → General → Profiles`.  
3. **Create a new profile** – click the *New* button and give it a descriptive name.  
4. **Configure the profile** – the list shows all editor features (panels, toolbars, 3‑D view, 2‑D view, scripting, debugging, etc.).  
   * Toggle each feature on or off to suit the desired workflow.  
5. **Set the profile as default** (optional) – you can mark it to be the default profile for new projects or for the current project.  
6. **Save** – the changes are applied immediately; the editor will hide or disable the selected features.

> **Tip:** You can copy an existing profile by selecting it and clicking *Copy*.  
> This is handy for creating variations such as a “UI‑only” or “3‑D‑only” profile.

---

## Sharing a profile  

1. **Export the profile** – in the Profiles tab click *Export* to save the profile to a `.profile` file.  
2. **Share the file** – the exported file can be distributed with a project, shared on a Git repository, or sent to team members.  
3. **Import a profile** – other users can load the file via `Project → Project Settings… → Editor → General → Profiles → Import`.  
   The imported profile will appear alongside the built‑in ones and can be enabled like any other profile.

---

### Further reading  

* [Editor settings](https://docs.godotengine.org/en/stable/tutorials/editor/editor_settings.html)  
* [Project Settings](https://docs.godotengine.org/en/stable/tutorials/editor/project_settings.html)  

---