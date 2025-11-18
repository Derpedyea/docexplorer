**RemoteTransform2D** – Godot Engine 4.x documentation  
==========================================================

> A `RemoteTransform2D` node pushes its own `Transform2D` to another `Node2D`-derived node in the scene.

---

## Inheritance

```
Object
 └─ Node
   └─ CanvasItem
     └─ Node2D
       └─ RemoteTransform2D
```

---

## Description

The `RemoteTransform2D` node is used to synchronize the transform of one node to another.  
While the node itself is positioned and rotated in the scene, its transform can be used to
drive another node that cannot be directly positioned (e.g. a sprite used only for visual
feedback or a physics body that should follow the movement of a non-physics node).

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| **target** | `NodePath` | `""` | Path to the node that will receive this transform. |
| **remote_path** | `NodePath` | `""` | Path to the node whose transform will be sent to the target. |
| **enabled** | `bool` | `true` | Whether the remote sync is active. |
| **sync_mode** | `int` (enum) | `0` | Mode of synchronization. See the *Sync Modes* section below. |

### Sync Modes

| Mode | Value | Description |
|------|-------|-------------|
| `LOCAL_TO_REMOTE` | `0` | Push the local transform to the remote. |
| `REMOTE_TO_LOCAL` | `1` | Pull the remote transform to the local. |
| `BIDIRECTIONAL` | `2` | Both local and remote transforms are kept in sync. |

> All enum values are also accessible via the constants defined on the class, e.g.  
> `RemoteTransform2D.SYNC_LOCAL_TO_REMOTE`.

---

## Methods

| Method | Return | Parameters | Description |
|--------|--------|------------|-------------|
| `get_target()` | `NodePath` | – | Returns the current target path. |
| `set_target(NodePath path)` | – | `path` | Sets the target node. |
| `get_remote_path()` | `NodePath` | – | Returns the remote node path. |
| `set_remote_path(NodePath path)` | – | `path` | Sets the remote node path. |
| `is_syncing()` | `bool` | – | Returns `true` if syncing is enabled. |
| `set_syncing(bool enable)` | – | `enable` | Enables or disables the sync. |
| `get_sync_mode()` | `int` | – | Returns the current sync mode. |
| `set_sync_mode(int mode)` | – | `mode` | Sets the sync mode. |
| `_ready()` | – | – | (Internal) Called when the node enters the scene tree. |
| `_process(float delta)` | – | `delta` | (Internal) Handles the transformation logic each frame. |

> All methods marked with an underscore are part of the internal lifecycle and are not typically called by user scripts.

---

## Signals

| Signal | Description |
|--------|-------------|
| `target_changed()` | Emitted whenever the target node path is modified. |
| `remote_path_changed()` | Emitted whenever the remote node path changes. |

---

## Usage Example

```gdscript
# In a scene that has a RemoteTransform2D node named "SyncNode".
@onready var sync = $SyncNode

func _ready():
    # Point the RemoteTransform2D to another node (e.g., "Player").
    sync.set_target("Player")
    sync.set_remote_path("Player")
    sync.set_sync_mode(RemoteTransform2D.SYNC_BIDIRECTIONAL)
```

In this example the `SyncNode` will continuously mirror the transform of the `Player` node in both directions, as long as `enabled` is `true`.

---

## Further Reading

* **Node2D** – Base class for 2D nodes.  
* **Transform2D** – Structure describing translation, rotation, and scale in 2D space.  
* **Scene Tree** – How nodes are organized hierarchically.

---

*For a full list of properties, methods, and signals, refer to the official Godot Engine reference:  
[RemoteTransform2D – Class Reference](https://docs.godotengine.org/en/stable/classes/class_remotetransform2d.html).*