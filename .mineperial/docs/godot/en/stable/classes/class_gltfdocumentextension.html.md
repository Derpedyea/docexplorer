# GLTFDocumentExtension

**Godot Engine (stable) documentation**

> *Extends the functionality of the `GLTFDocument` class by providing hooks for custom import/export behavior.*

---

## Inheritance

```
Resource → RefCounted → Object → GLTFDocumentExtension
```

> *Inherited by:* `GLTFDocumentExtensionConvertImporterMesh`

---

## Description

`GLTFDocumentExtension` is a base class that allows developers to extend the GLTF import/export pipeline in Godot.  
By overriding the virtual methods defined in this class, you can customize how GLTF files are processed, inject additional logic during import, or modify the resulting scene hierarchy before it is added to your project.

> **Key Features**
> - Hook into the GLTF import workflow  
> - Modify meshes, materials, nodes, or scene structure  
> - Register custom extensions for specific GLTF properties

---

## Signals

| Name | Description |
|------|-------------|
| `ready()` | Emitted after the extension has been fully initialized. |

*(If your custom extension emits additional signals, they will appear here.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `enabled` | `bool` | `true` | Toggle whether the extension is active during import/export. |

*(Further properties may be defined in subclasses.)*

---

## Methods

> The following are the core methods you can override in a subclass. All others are inherited from `Object`.

| Method | Signature | Description |
|--------|-----------|-------------|
| `import_scene` | `func import_scene(resource_path: String, root: Node, options: Dictionary) -> Error` | Called to import a GLTF scene. Override to customize the import pipeline. |
| `export_scene` | `func export_scene(resource_path: String, root: Node, options: Dictionary) -> Error` | Called to export a scene to GLTF. Override to customize the export pipeline. |
| `_get_importer_name` | `func _get_importer_name() -> String` | Returns a unique name for the importer. |
| `_get_exporter_name` | `func _get_exporter_name() -> String` | Returns a unique name for the exporter. |

*(Additional helper methods and callbacks may be available depending on Godot version.)*

---

## Example: Custom GLTF Mesh Importer

```gdscript
# my_gltf_extension.gd
extends GLTFDocumentExtension

func import_scene(resource_path, root, options):
    # Custom logic before import
    var err = .import_scene(resource_path, root, options)
    if err != OK:
        return err
    # Post-process nodes
    for child in root.get_children():
        if child is MeshInstance3D:
            child.cast_shadows = false
    return OK
```

Register the extension in `project.godot`:

```text
[gltf]
custom_extension = "res://my_gltf_extension.gd"
```

---

## Documentation References

- [GLTFDocument](/classes/class_gltfdocument.html) – Base class for GLTF handling  
- [GLTFDocumentExtensionConvertImporterMesh](/classes/class_gltfdocumentextensionconvertimportermesh.html) – A concrete implementation for importing meshes

---

### Further Reading

- Godot 4.x documentation on [GLTF](https://docs.godotengine.org/en/stable/tutorials/assets_pipeline/gltf.html)  
- Godot 4.x [Class Reference](https://docs.godotengine.org/en/stable/classes/) for other importers and exporters.