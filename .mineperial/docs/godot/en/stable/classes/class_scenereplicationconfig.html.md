**SceneReplicationConfig** – Godot Engine Documentation  
============================================

`SceneReplicationConfig` is a `Resource` that allows you to configure which properties of a scene should be synchronized by a `MultiplayerSynchronizer`.  
It is part of Godot’s multiplayer framework and is used to fine‑tune the data that is replicated to remote peers.

---

## Inheritance

```
Resource
  └─ RefCounted
      └─ Object
          └─ SceneReplicationConfig
```

---

## Description

A `SceneReplicationConfig` instance holds a list of `NodePath`s that represent properties to be replicated.  
When attached to a `MultiplayerSynchronizer`, the synchronizer will automatically keep these properties in sync between clients and the server.

---

## Methods

| Method | Parameters | Return Type | Description |
|--------|------------|-------------|-------------|
| `add_property(path: NodePath, index: int = -1)` | `path`, `index` | `void` | Adds a property to the replication list. If `index` is omitted or negative, the property is appended. |
| `add_properties_from_scene(node: Node, recursive: bool = true, exclude: Array[Node] = [], add_child_properties: bool = true)` | `node`, `recursive`, `exclude`, `add_child_properties` | `void` | Recursively collects properties from a scene starting at `node`, optionally excluding nodes or skipping child properties. |
| `get_properties()` | – | `Array[NodePath]` | Returns the list of configured property paths. |
| `has_property(path: NodePath)` | `path` | `bool` | Checks whether a property is already configured for replication. |
| `remove_property(path: NodePath)` | `path` | `void` | Removes a property from the replication list. |
| `clear()` | – | `void` | Clears all replicated properties. |

> **Note:** The method signatures are taken from the official Godot 4.x class reference.  
> Some older versions might have a different set of helpers or additional utility methods.

---

## Example usage

```gdscript
# Create a new replication config
var config = SceneReplicationConfig.new()

# Add a property to sync
config.add_property("player/velocity")

# Attach to a synchronizer
var sync = MultiplayerSynchronizer.new()
sync.set_replication_config(config)

# Or load a pre‑created config resource
var saved_config = preload("res://replication.tres")
sync.set_replication_config(saved_config)
```

---

## Related classes

- `MultiplayerSynchronizer` – Uses a `SceneReplicationConfig` to define what data should be replicated.  
- `NodePath` – Used to reference the properties inside a scene.

---

## Resources

- Official Godot documentation:  
  - [SceneReplicationConfig – Class Reference](https://docs.godotengine.org/en/stable/classes/class_scenereplicationconfig.html)  
  - [MultiplayerSynchronizer – Class Reference](https://docs.godotengine.org/en/stable/classes/class_multiplayersynchronizer.html)

---