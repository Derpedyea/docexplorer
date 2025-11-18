**Best practices**  
*(Godot Engine documentation – stable)*  

The *Best practices* section contains a list of concise guides that cover design patterns, project organisation, and optimisation tips.  
Below is a Markdown representation of the page’s table of contents and links to the individual tutorials.

---

## Table of contents

1. **[Introduction](introduction_best_practices.html)**
2. **[Applying object‑oriented principles in Godot](what_are_godot_classes.html)**
   - [How scripts work in the engine](what_are_godot_classes.html#how-scripts-work-in-the-engine)
   - [Scenes](what_are_godot_classes.html#scenes)

3. **[Scene organization](scene_organization.html)**
   - [How to build relationships effectively](scene_organization.html#how-to-build-relationships-effectively)
   - [Choosing a node‑tree structure](scene_organization.html#choosing-a-node-tree-structure)

4. **[When to use scenes versus scripts](scenes_versus_scripts.html)**
   - [Anonymous types](scenes_versus_scripts.html#anonymous-types)
   - [Named types](scenes_versus_scripts.html#named-types)
   - [Performance of Script vs PackedScene](scenes_versus_scripts.html#performance-of-script-vs-packedscene)
   - [Conclusion](scenes_versus_scripts.html#conclusion)

5. **[Autoloads versus regular nodes](autoloads_versus_internal_nodes.html)**
   - [The cutting audio issue](autoloads_versus_internal_nodes.html#the-cutting-audio-issue)
   - [Managing shared functionality or data](autoloads_versus_internal_nodes.html#managing-shared-functionality-or-data)
   - [When you should use an Autoload](autoloads_versus_internal_nodes.html#when-you-should-use-an-autoload)

6. **[When and how to avoid using nodes for everything](node_alternatives.html)**

7. **[Godot interfaces](godot_interfaces.html)**
   - [Acquiring object references](godot_interfaces.html#acquiring-object-references)
   - [Accessing data or logic from an object](godot_interfaces.html#accessing-data-or-logic-from-an-object)

8. **[Godot notifications](godot_notifications.html)**
   - [_process vs. _physics_process vs. _input](godot_notifications.html#process-vs-physics-process-vs-input)
   - [_init vs. initialization vs. export](godot_notifications.html#init-vs-initialization-vs-export)
   - [_ready vs. _enter_tree vs. NOTIFICATION_PARENTED](godot_notifications.html#ready-vs-enter-tree-vs-notification-parented)

9. **[Data preferences](data_preferences.html)**
   - [Array vs. Dictionary vs. Object](data_preferences.html#array-vs-dictionary-vs-object)
   - [Enumerations: int vs. string](data_preferences.html#enumerations-int-vs-string)
   - [AnimatedTexture vs. AnimatedSprite2D vs. AnimationPlayer vs. AnimationTree](data_preferences.html#animatedtexture-vs-animatedsprite2d-vs-animationplayer-vs-animationtree)

10. **[Logic preferences](logic_preferences.html)**
    - [Adding nodes and changing properties: which first?](logic_preferences.html#adding-nodes-and-changing-properties-which-first)
    - [Loading vs. preloading](logic_preferences.html#loading-vs-preloading)
    - [Large levels: static vs. dynamic](logic_preferences.html#large-levels-static-vs-dynamic)

11. **[Project organization](project_organization.html)**
    - [Introduction](project_organization.html#introduction)
    - [Organization](project_organization.html#organization)
    - [Style guide](project_organization.html#style-guide)
    - [Importing](project_organization.html#importing)
      - [Ignoring specific folders](project_organization.html#ignoring-specific-folders)
    - [Case sensitivity](project_organization.html#case-sensitivity)

12. **[Version control systems](version_control_systems.html)**
    - [Introduction](version_control_systems.html#introduction)
    - [Version‑control plugins](version_control_systems.html#version-control-plugins)
      - [Official Git plugin](version_control_systems.html#official-git-plugin)
    - [Files to exclude from VCS](version_control_systems.html#files-to-exclude-from-vcs)
    - [Working with Git on Windows](version_control_systems.html#working-with-git-on-windows)
    - [Git LFS](version_control_systems.html#git-lfs)

---

Feel free to click the links above to dive deeper into each topic.