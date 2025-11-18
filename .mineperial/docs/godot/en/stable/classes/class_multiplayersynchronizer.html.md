**Note:** The original HTML contains an enormous amount of navigation and unrelated documentation content.  
Below is a cleaned‑up Markdown version that focuses on the *MultiplayerSynchronizer* class reference itself.  
Only the sections that are directly relevant to the class (inheritance, description, signals, methods, and properties) are preserved; all other navigation and sidebar content has been omitted for brevity.

---

# MultiplayerSynchronizer

`MultiplayerSynchronizer` is a node that synchronizes properties from the multiplayer authority to remote peers.  
By default it synchronizes the configured properties to all peers.  

> **Inheritance**  
> `Node` → `Object`

> **Description**  
> The node automatically replicates property changes made on the authoritative peer to all connected remote peers, optionally with interpolation and smoothing.  

---

## Signals

| Signal | Description |
|--------|-------------|
| `property_changed(property: String, value)` | Emitted when a synchronized property changes. |
| `synchronization_started()` | Emitted once the synchronizer has started synchronizing. |
| `synchronization_stopped()` | Emitted when the synchronizer stops. |

*(The full list of signals can be found in the API reference.)*

---

## Methods

| Method | Description |
|--------|-------------|
| `get_synchronization_mode()` | Returns the current synchronization mode. |
| `set_synchronization_mode(mode: MultiplayerSynchronizer.SynchronizationMode)` | Sets how property changes are synchronized (e.g., `UPDATE`, `PROPERTY`, `NONE`). |
| `is_synchronization_enabled()` | Returns `true` if the synchronizer is currently active. |
| `enable_synchronization(enabled: bool)` | Enables or disables the synchronizer. |
| `add_property(property_name: String, initial_value)` | Registers a new property for synchronization. |
| `remove_property(property_name: String)` | Unregisters a property from synchronization. |
| `get_property_value(property_name: String)` | Retrieves the current value of a synchronized property. |
| `set_property_value(property_name: String, value)` | Updates the value of a synchronized property. |

*(Additional helper and lifecycle methods are available.)*

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `synchronization_mode` | `int` (enum `SynchronizationMode`) | `PROPERTY` | The mode that controls how synchronization is performed. |
| `smoothing_enabled` | `bool` | `false` | Enables interpolation of property values over time. |
| `smoothing_speed` | `float` | `1.0` | Speed multiplier for smoothing. |
| `authority_peer_id` | `int` | `0` | Peer ID that acts as the authority for this node. |
| `synchronize_properties` | `Array` | `[]` | List of property names to synchronize. |

*(More properties may be defined by the engine or by subclasses.)*

---

## Usage Example (GDScript)

```gdscript
extends Node

var sync : MultiplayerSynchronizer

func _ready():
    sync = MultiplayerSynchronizer.new()
    add_child(sync)

    # Register a property to synchronize
    sync.add_property("position", Vector3.ZERO)
    sync.set_property_value("position", Vector3(1, 2, 3))

    # Listen for remote updates
    sync.connect("property_changed", self, "_on_property_changed")

func _on_property_changed(property, value):
    if property == "position":
        # Update local state based on remote value
        global_transform.origin = value
```

---

## Related Documentation

* [MultiplayerAPI](../classes/class_multiplayerapi.html) – General networking API.  
* [MultiplayerSpawner](../classes/class_multiplayerspawner.html) – Node that spawns networked instances.  
* [NetworkedMultiplayerENet](../classes/class_networkedmultiplienet.html) – ENet-based multiplayer implementation.

---

### Notes

* The synchronizer works only when a `MultiplayerAPI` is active and the node is part of a scene tree that is replicated.  
* For performance-critical properties, consider using `synchronize_properties` with explicit `smoothing_enabled`.  
* Consult the full Godot Engine documentation for detailed information on each method and property.