# GLTFDocument

`GLTFDocument` is a Godot Engine class for importing and exporting glTF files in and out of the engine.

> **Inheritance chain**  
> `Resource` → `RefCounted` → `Object`

> **Inherited by**  
> `FBXDocument`

> **Description**  
> `GLTFDocument` supports reading data from a glTF file, converting it into a Godot scene tree (or other resources), and exporting Godot scenes back to glTF format. It provides a set of options and callbacks to customize the import/export process and to track progress or errors.

---

## Methods

| Method | Signature | Description |
|--------|------------|-------------|
| `new()` | `static GLTFDocument new()` | Create a new instance of the document. |
| `load_from_file(path: String, options: Dictionary = {})` | `bool` | Load a glTF file from disk, applying optional import settings. |
| `load_from_bytes(data: PackedByteArray, options: Dictionary = {})` | `bool` | Load a glTF document from raw bytes. |
| `save_to_file(scene: Node, path: String, options: Dictionary = {})` | `bool` | Export a Godot scene (or a subtree) to a glTF file. |
| `save_to_bytes(scene: Node, options: Dictionary = {})` | `PackedByteArray` | Export a Godot scene to a byte array instead of disk. |
| `set_importer(importer: Resource)` | `void` | Attach a custom importer (`GLTFDocumentExtension`). |
| `set_exporter(exporter: Resource)` | `void` | Attach a custom exporter (`GLTFDocumentExtension`). |
| `clear()` | `void` | Reset the internal state. |
| `get_progress()` | `float` | Current progress of the last import/export operation. |
| `get_error()` | `String` | Human‑readable error message for the last operation. |

> **Notes**  
> - The `options` dictionary contains keys such as `use_absolute_path`, `import_textures`, `generate_normals`, etc.  
> - Custom importers/exporters can be written by extending `GLTFDocumentExtension`.

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `progress_changed(progress: float)` |  | Emitted whenever the progress of an import/export operation changes. |
| `operation_finished(success: bool)` |  | Emitted when the operation completes, with a success flag. |
| `error_occurred(message: String)` |  | Emitted when an error occurs. |

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `importer` | `GLTFDocumentExtension` | `null` | Reference to the importer implementation. |
| `exporter` | `GLTFDocumentExtension` | `null` | Reference to the exporter implementation. |
| `progress` | `float` | `0.0` | Current progress value (0–1). |
| `error` | `String` | `""` | Last error message. |

---

## Usage Example

```gdscript
var doc = GLTFDocument.new()

# Import a glTF file
if doc.load_from_file("res://scene.glb"):
    var root = doc.get_scene()
    # Instance it in the current scene
    get_tree().current_scene.add_child(root)
else:
    push_error(doc.get_error())

# Export a scene to glTF
var success = doc.save_to_file(get_tree().current_scene, "user://exported.glb")
if not success:
    push_error(doc.get_error())
```

---

## Further Reading

* [GLTFDocumentExtension](class_gltfdocumentextension.html) – Custom importer/exporter interface.  
* [FBXDocument](class_fbxdocument.html) – Similar class for FBX format.  

For a deeper dive into the options dictionary and the exact set of keys supported, refer to the official Godot Engine reference or the source code (`gl_tfdocument.cpp` in the engine repository).