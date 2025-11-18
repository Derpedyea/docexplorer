# Runtime file loading and saving

> *This tutorial explains how to load and save files at runtime in Godot, covering the `FileAccess`, `File`, `Resource`, and binary serialization APIs.*

---

## Overview

When distributing a project it is often useful to allow users to load **user‑generated content** or save their progress.  
In Godot there are two main ways to access data at runtime:

| Technique | What it loads | Typical use cases | API |
|-----------|---------------|-------------------|-----|
| **`FileAccess`** | Any file – text, binary, or packed data | Custom file formats, logs, simple config | `FileAccess` |
| **`ResourceLoader`/`ResourceSaver`** | Packed Godot resources (`.tres`, `.res`, `.scn`, etc.) | Loading scenes, materials, animations | `ResourceLoader`, `ResourceSaver` |
| **`DirAccess`** | Directory traversal, file existence | Listing mods, assets, saving to user data directory | `DirAccess` |
| **`JSON` / `XML` / `YAML`** | Structured text | Configuration files, level data | `JSON`, `XML`, `YAML` classes |

---

## 1. Loading files

### 1.1 `FileAccess` – the basic API

```gdscript
var file = FileAccess.open("user://savefile.dat", FileAccess.READ)
if file:
    var data = file.get_var()        # Read a Godot variable (e.g. dictionary)
    file.close()
else:
    print("Failed to open file.")
```

* `user://` is a special path that points to the **user data directory** (platform‑specific).  
  Use this for save files or user‑generated content.  
* `res://` is read‑only and contains project resources.  
* `project://` can be used in editor‑only scripts.

**Reading binary data**

```gdscript
var file = FileAccess.open("res://textures/my_image.png", FileAccess.READ)
var image_bytes = file.get_buffer(file.get_length())
file.close()
```

### 1.2 Loading resources

```gdscript
var scene = ResourceLoader.load("res://scenes/enemy.tscn") as PackedScene
var instance = scene.instantiate()
add_child(instance)
```

* `load()` automatically parses the file format and returns a `Resource`.  
* Use `ResourceLoader.exists(path)` to check existence before loading.  

### 1.3 Listing files in a directory

```gdscript
var dir = DirAccess.open("user://mods")
dir.list_dir_begin()
var file_name = dir.get_next()
while file_name != "":
    if not dir.current_is_dir():
        print(file_name)
    file_name = dir.get_next()
dir.list_dir_end()
```

---

## 2. Saving files

### 2.1 `FileAccess` – write mode

```gdscript
var file = FileAccess.open("user://savefile.dat", FileAccess.WRITE)
file.store_var({score=42, level=3})   # Serializes a Godot variable
file.close()
```

* Use `store_line()`, `store_string()`, or `store_buffer()` for different data types.  
* Remember to `close()` before re‑reading.  

### 2.2 `ResourceSaver` – saving packed resources

```gdscript
var tex = preload("res://textures/texture.tres") as Texture2D
ResourceSaver.save(tex, "user://mods/texture_copy.tres")
```

* Useful for exporting user‑created assets or dynamic scenes.  

### 2.3 Packing data into a binary file

For complex binary structures you can use the `BinaryStream` methods:

```gdscript
var file = FileAccess.open("user://model.bin", FileAccess.WRITE)
file.store_32(42)          # 32‑bit integer
file.store_float(3.14)     # 32‑bit float
# ... write more data
file.close()
```

And later read it back with `get_32()`, `get_float()`, etc.

---

## 3. Common pitfalls

| Issue | Cause | Fix |
|-------|-------|-----|
| **File not found** | Wrong path or missing `user://` prefix | Check the full path; use `DirAccess.file_exists()` |
| **Corrupted binary file** | Reading/writing in wrong order or using mismatched sizes | Keep a clear struct definition; use `store_var()`/`get_var()` for safety |
| **Large data loading slows the game** | Blocking main thread | Load in a separate thread or use `ResourceLoader.load_threaded()` |
| **Exported project fails to load user files** | Files not marked as `user://` or exported out of tree | Make sure files are in the exported directory or use `FileAccess.open("user://...")` |

---

## 4. Threaded loading

```gdscript
var loader = ResourceLoader.load_threaded_interactive("res://scenes/scene.tscn")
while true:
    var step = loader.poll()
    if step == OK:
        var scene = loader.get_resource()
        break
    elif step == ERR_FILE_EOF:
        push_error("Failed to load.")
        break
```

Threaded loading prevents frame hitches when loading large assets.

---

## 5. Tips & Tricks

* Use `FileAccess.get_modified_time()` to detect changes to files.  
* Store your own file format as a dictionary and use `store_var()`/`get_var()` for quick serialization.  
* For human‑readable configuration, use JSON:

  ```gdscript
  var config = {"volume": 0.8, "fullscreen": true}
  var json = JSON.stringify(config)
  FileAccess.open("user://config.json", FileAccess.WRITE).store_line(json)
  ```

* When packaging mods, consider a simple zip format and use `ZipPacker` / `ZipReader` from the GDExtension library.

---

## 6. Reference

* [`FileAccess`](https://docs.godotengine.org/en/stable/classes/class_fileaccess.html) – open, read, write, etc.  
* [`ResourceLoader`](https://docs.godotengine.org/en/stable/classes/class_resourceloader.html) – load resources at runtime.  
* [`ResourceSaver`](https://docs.godotengine.org/en/stable/classes/class_resourcesaver.html) – save resources to disk.  
* [`DirAccess`](https://docs.godotengine.org/en/stable/classes/class_diraccess.html) – directory operations.  
* [`JSON`](https://docs.godotengine.org/en/stable/classes/class_json.html) – parse and create JSON strings.  

---