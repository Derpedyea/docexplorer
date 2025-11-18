# BoneMap

`BoneMap` is a Godot resource that defines a mapping between bone names used in a `Skeleton3D` and the canonical bone names defined by a `SkeletonProfile`.  This mapping is used for retargeting animation data from one skeleton to another.

## Inheritance

```
Resource ← RefCounted ← Object
```

## Description

The `BoneMap` class stores a dictionary that maps the names of bones in a source skeleton to the names expected by a target skeleton profile.  It is typically used when you want to reuse animations from one rig on a different rig that shares the same semantic bone structure but uses different bone names.

## Properties

| Property | Type   | Description |
|----------|--------|-------------|
| `map` | `Dictionary` | A dictionary that holds the source‑to‑target bone name mappings. |

> **Note** – The full property list is generated automatically by the Godot engine’s class reference system.  Use the editor or the [class reference](https://docs.godotengine.org/en/stable/classes/class_bonemap.html) for the most up‑to‑date API information.

## Methods

| Method | Return type | Arguments | Description |
|--------|-------------|-----------|-------------|
| `set_mapping(from_name : String, to_name : String)` | `void` | `from_name`, `to_name` | Add or overwrite a mapping entry. |
| `get_mapping(from_name : String) -> String` | `String` | `from_name` | Retrieve the mapped bone name for the given source name. |
| `clear()` | `void` | — | Remove all mappings. |

> The actual method set is subject to change between Godot versions.  Check the online class reference for the current signatures.

## Signals

| Signal | Parameters | Description |
|--------|------------|-------------|
| `mapping_changed` | — | Emitted whenever the mapping dictionary is modified. |

## Usage Example

```gdscript
var bone_map = preload("res://my_bone_map.tres")
var skeleton_profile = SkeletonProfile.new()
skeleton_profile.bone_map = bone_map

# Retarget an animation
skeleton_profile.apply_bone_map(my_skeleton)
```

> For detailed usage, including how to create a `BoneMap` resource in the editor or via script, see the [Godot Docs](https://docs.godotengine.org/en/stable/classes/class_bonemap.html).

---