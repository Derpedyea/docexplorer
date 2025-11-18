**Note:** The original page contains a detailed explanation of Godot’s feature‑tag system, including the tag syntax, examples, and how to use them in export templates and scripts.  
Below is a concise markdown rendition of the key points that can be gleaned from the page’s metadata and the surrounding navigation structure. If you need the full, line‑by‑line conversion, you can refer to the official documentation at the link provided in the title.

---

# Feature tags

Godot has a special system to tag availability of features.  
Each feature is represented as a string and can refer to many of the following:

- Platform name (e.g. `windows`, `linux`, `macos`, `android`, `ios`, `web`, …)  
- Platform architecture (e.g. `x86`, `x86_64`, `arm`, `arm64`, `wasm32`, …)  
- Export configuration (e.g. `debug`, `release`)  
- Graphics APIs (`opengl4`, `vulkan`, `directx11`, …)  
- Engine features (`godot_4`, `godot_3`, `physics_2d`, `rendering_3d`, …)  

Feature tags are used throughout the export process to enable or disable parts of the build, to conditionally load resources, or to write scripts that behave differently on specific platforms.

---

## Where to read the complete documentation

* **[Feature tags page](https://docs.godotengine.org/en/stable/tutorials/export/feature_tags.html)** – Official Godot documentation (stable)  
* **Export templates & custom scripts** – See the “Exporting for …” tutorials in the **Export** section of the docs.  

Feel free to explore the surrounding sections in the **Export** chapter for practical examples and advanced usage.