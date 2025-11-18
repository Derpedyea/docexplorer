**High‑level multiplayer** – Godot Engine (stable) documentation

---

# High‑level multiplayer

This tutorial explains the difference between Godot’s *high‑level* and *low‑level* networking APIs, and covers the basics you’ll need to get started with multiplayer games.

---

## Overview

* **High‑level API** – Convenient, node‑based networking that handles a lot of the plumbing for you.  
* **Low‑level API** – Fine‑grained control over packets and sockets.  
* The following sections discuss when to use each, how to set up a simple server / client, and some of the key concepts that make multiplayer in Godot straightforward.

---

### High‑level vs low‑level API

* **High‑level**:  
  * Uses the `SceneTree` and `NetworkedMultiplayerENet`/`NetworkedMultiplayerUDP` classes.  
  * Handles RPCs, scene syncing, and authority automatically.  
  * Great for most gameplay scenarios where you need quick, reliable state replication.

* **Low‑level**:  
  * Gives direct access to `PacketPeerUDP`/`ENetPacketPeer`.  
  * Ideal for custom protocols, non‑standard data formats, or when you need maximum performance.  

---

### Getting started

1. **Create a networked multiplayer root** – usually a `Node` called `Network`.  
2. **Choose a transport** (`ENet` or `UDP`) and set it up in `_ready()`.  
3. **Configure server / client** roles.  
4. **Use RPC calls** (`remote`, `master`, `puppet`) to share state.  

---

### Example: Basic server

```gdscript
extends Node

var peer : NetworkedMultiplayerENet

func _ready():
    peer = NetworkedMultiplayerENet.new()
    peer.create_server(12345, 32)
    get_tree().set_network_peer(peer)

func _process(delta):
    pass
```

---

### Example: Basic client

```gdscript
extends Node

var peer : NetworkedMultiplayerENet

func _ready():
    peer = NetworkedMultiplayerENet.new()
    peer.create_client("127.0.0.1", 12345)
    get_tree().set_network_peer(peer)

func _on_connected_to_server():
    print("Connected to server")
```

---

### RPC basics

| Keyword | Meaning | Example |
|---------|---------|---------|
| `remote` | Called by a remote peer | `remote func move_player(x, y)` |
| `master` | Runs on the authoritative peer (usually server) | `master func spawn_enemy()` |
| `puppet` | Runs on all clients | `puppet func update_position()` |

---

### Scene ownership

* Assign a node’s **network master** to control who can modify it.  
* Use `set_network_master()` to change ownership dynamically.  

```gdscript
var player = $Player
player.set_network_master(1) # client with ID 1
```

---

### Synchronizing custom data

* Use `rpc_unreliable()` for fast, non‑critical updates.  
* Use `rpc()` for critical, order‑sensitive data.  

```gdscript
remote func sync_score(score):
    $ScoreLabel.text = str(score)
```

---

## Further reading

* **[Making HTTP requests](../http_request_class.html)** – Learn to use `HTTPRequest` for web integration.  
* **[Networked multiplayer guide](../networking/index.html)** – Full reference to networking classes and helpers.  

---

*Note:* The rest of the documentation, navigation, and sidebar are part of the Godot docs site and not included here.