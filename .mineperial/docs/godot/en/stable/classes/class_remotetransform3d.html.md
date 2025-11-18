# RemoteTransform3D

> *Inherited from:* `Node3D` → `Node` → `Object`

## Description

`RemoteTransform3D` pushes its own **Transform3D** to another `Node3D`‑derived node in the scene.  
The node you target can be any object that exposes a `transform` property (for example a `Spatial` or a custom `Node3D` subclass). Once a remote node is set, the `RemoteTransform3D` updates the remote node’s transform every frame, keeping it in sync with its own transform.

> **Use case** – If you want one object to *follow* another’s transform (position, rotation, scale) without having to duplicate the transform logic in multiple places, place a `RemoteTransform3D` node as a child of the source and point it at the target node.

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `remote_path` | `NodePath` | `""` | Path to the node whose transform will be updated. |
| `enabled` | `bool` | `true` | When `false` the node will not update the remote transform. |

---

## Methods

| Method | Return type | Parameters | Description |
|--------|------------|------------|-------------|
| `get_remote_path()` | `NodePath` | – | Returns the current remote path. |
| `set_remote_path(path : NodePath)` | `void` | `path` | Sets the node that will receive the transform. |
| `get_remote()` | `Node3D?` | – | Returns the remote node instance (or `null` if it can't be found). |
| `set_enabled(enabled : bool)` | `void` | `enabled` | Enable or disable the transform push. |
| `is_enabled()` | `bool` | – | Returns whether the node is currently enabled. |

> *Note:* The actual list of methods may also contain the inherited `_ready()`, `_process()`, etc., but the key API for remote‑transform functionality is shown above.

---

## Signals

| Signal | Description |
|--------|-------------|
| *None* | `RemoteTransform3D` does not define custom signals. |

---

## Example

```gdscript
# Assume this script is attached to a RemoteTransform3D node
# and a target node named "Target" is a sibling in the scene tree.

func _ready():
    # Point the remote transform at the target node.
    remote_path = "../Target"

    # Optional: disable if you want to pause updates.
    # set_enabled(true)
```

The remote node (`Target`) will now follow this node’s transform every frame.

---

## Documentation Links

- Official Godot 4.x reference: [RemoteTransform3D](https://docs.godotengine.org/en/stable/classes/class_remotetransform3d.html)  
- Related classes: `RemoteTransform2D`, `Spatial`, `Node3D`

---