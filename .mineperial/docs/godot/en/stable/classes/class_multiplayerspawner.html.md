# MultiplayerSpawner

> **Godot Engine 4.x** – class reference

---

## Inherits

`Node< Object`

> Automatically replicates spawnable nodes from the authority to other multiplayer peers.

---

## Description

`MultiplayerSpawner` is a node that lets you declare *spawnable* scenes that can be instantiated remotely on all connected peers.  
The authority (usually the server or host) is responsible for spawning the nodes, while the `MultiplayerSpawner` handles the replication to other clients for you.  
You can configure the spawnable scenes directly in the editor or add them through code.  

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `spawnables` | `Array[PackedScene]` | `[]` | A list of scenes that can be spawned. The node names of the spawned instances are derived from the scenes’ names. |
| `autospawn` | `bool` | `false` | If `true`, the node automatically spawns the first spawnable in the list on startup. |
| `spawned_scene` | `Node` | `null` | The most recently spawned node (read‑only). |
| `network_mode` | `int` | `NETWORK_MODE_RPC` | Determines how RPCs are sent when spawning (see `MultiplayerSpawner.MODE_*`). |

---

## Signals

| Signal | Arguments | Description |
|--------|-----------|-------------|
| `spawned` | `node: Node` | Emitted when a new instance is spawned and replicated to all peers. |
| `despawned` | `node: Node` | Emitted when an instance is removed from the scene tree. |

---

## Methods

### `add_spawnable(scene: PackedScene) → void`

Adds a scene to the list of spawnable scenes.  
The scene must be a `PackedScene`; otherwise, an error is logged.

### `remove_spawnable(scene: PackedScene) → void`

Removes a scene from the list of spawnables.

### `set_spawnables(spawnables: Array[PackedScene]) → void`

Replaces the entire list of spawnable scenes.

### `get_spawnables() → Array[PackedScene]`

Returns the current list of spawnable scenes.

### `spawn(scene: PackedScene, position: Vector3 = Vector3.ZERO, rotation: Quat = Quat.IDENTITY, name: String = "") → Node`

Instantiates the given scene at the supplied transform and adds it to the tree.  
If the node is created on a peer that is *not* the authority, the instance is created locally and a replicated version of the scene is created on all peers.  
The method returns the node that was created.

### `spawn_from_name(name: String, position: Vector3 = Vector3.ZERO, rotation: Quat = Quat.IDENTITY) → Node`

Convenience wrapper that spawns the first matching scene in `spawnables` whose name matches `name`.  

### `despawn(node: Node) → void`

Removes the given node from the tree and informs all peers. The node must have been spawned by this `MultiplayerSpawner`.  

### `is_spawnable(scene: PackedScene) → bool`

Returns `true` if `scene` is in the `spawnables` list.

### `get_spawned_instances() → Array[Node]`

Returns an array of all nodes currently spawned by this spawner.

---

## Constants

| Constant | Value | Description |
|----------|-------|-------------|
| `MODE_RPC` | `0` | Spawning is performed with `rpc()`. |
| `MODE_RSET` | `1` | Spawning is performed with `rset()`. |

---

## Example

```gdscript
# main.gd
extends Node

@onready var spawner: MultiplayerSpawner = $MultiplayerSpawner

func _ready():
    # Load a scene that you want to spawn
    var enemy_scene = preload("res://Enemy.tscn")
    spawner.add_spawnable(enemy_scene)
    spawner.autospawn = true

    # Spawn an instance manually
    var enemy = spawner.spawn(enemy_scene, Vector3(0, 0, 0))
    enemy.name = "Enemy01"
```

When running in a multiplayer project, only the *authority* will actually create the `Enemy.tscn` instance.  
All other peers will receive an RPC that spawns a copy of the scene at the same transform, keeping the game state in sync.

---

## Notes

* The `MultiplayerSpawner` node must have a `multiplayer_api` set (via `multiplayer` or `NetworkedMultiplayerENet` etc.) for replication to work.
* Spawned nodes are added as children of the `MultiplayerSpawner`. Use `node.set_owner(spawner)` if you need to change the owner.
* If a spawnable scene contains a `Node3D` that uses physics, make sure to set `use_physics_process` on the spawned instances as required.
* The node automatically cleans up spawned instances when it is freed.

---

**See also**

* [`MultiplayerSynchronizer`](https://docs.godotengine.org/en/stable/classes/class_multiplayersynchronizer.html) – for synchronizing properties of spawned nodes.  
* `Node` – the base class for all scene objects.

---