# AudioBusLayout

*Inherits:* `Resource`

> **AudioBusLayout** stores the state of the audio bus system.  
> It contains information such as bus positions, muting/solo/bypass states, volume, effect chains, effect positions, and the connections between buses.

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `bus_count` | `int` | Read‑only – the number of buses in the layout. |
| `bus_names` | `Array[String]` | Read‑only – the names of all buses. |
| `bus_positions` | `Array[int]` | Read‑only – the order of buses. |
| `bus_connections` | `Array[Dictionary]` | Read‑only – connection information between buses (source, target, volume, etc.). |

> All bus‑specific data is accessed through the methods listed below; the properties above are provided for convenience and are read‑only.

---

## Methods

| Method | Signature | Description |
|--------|-----------|-------------|
| `get_bus_count()` | `int` | Returns the number of buses. |
| `get_bus_name(bus_index: int)` | `String` | Returns the name of the bus at *bus_index*. |
| `set_bus_name(bus_index: int, name: String)` | `void` | Renames the bus at *bus_index* to *name*. |
| `get_bus_muted(bus_index: int)` | `bool` | Returns `true` if the bus is muted. |
| `set_bus_muted(bus_index: int, muted: bool)` | `void` | Mutes or unmutes the bus at *bus_index*. |
| `get_bus_solo(bus_index: int)` | `bool` | Returns `true` if the bus is soloed. |
| `set_bus_solo(bus_index: int, solo: bool)` | `void` | Soloes or unsoloes the bus at *bus_index*. |
| `get_bus_bypass(bus_index: int)` | `bool` | Returns `true` if the bus is bypassed. |
| `set_bus_bypass(bus_index: int, bypass: bool)` | `void` | Bypasses or un‑bypasses the bus at *bus_index*. |
| `get_bus_volume_db(bus_index: int)` | `float` | Returns the volume of the bus in decibels. |
| `set_bus_volume_db(bus_index: int, volume_db: float)` | `void` | Sets the volume of the bus. |
| `add_bus(bus_name: String, parent_bus_index: int = -1)` | `int` | Adds a new bus under the specified parent (or at the root if `-1`) and returns its index. |
| `remove_bus(bus_index: int)` | `void` | Removes the bus and all its connections. |
| `move_bus(bus_index: int, new_index: int)` | `void` | Changes the order of the bus in the layout. |
| `get_bus_effect_count(bus_index: int)` | `int` | Returns the number of effects on the bus. |
| `get_bus_effect(bus_index: int, effect_index: int)` | `AudioEffect` | Returns the effect at the specified index. |
| `add_bus_effect(bus_index: int, effect: AudioEffect, position: int = -1)` | `void` | Adds an effect to the bus. |
| `remove_bus_effect(bus_index: int, effect_index: int)` | `void` | Removes an effect from the bus. |
| `move_bus_effect(bus_index: int, from_index: int, to_index: int)` | `void` | Moves an effect within the bus chain. |
| `get_bus_connection_count()` | `int` | Returns the number of bus‑to‑bus connections. |
| `add_bus_connection(from_bus: int, to_bus: int, volume_db: float = 0.0, pitch_scale: float = 1.0)` | `void` | Creates a new connection between two buses. |
| `remove_bus_connection(connection_id: int)` | `void` | Removes the specified connection. |
| `get_bus_connection(connection_id: int)` | `Dictionary` | Returns a dictionary containing connection data (`from`, `to`, `volume_db`, `pitch_scale`). |
| `set_bus_connection(connection_id: int, from_bus: int, to_bus: int, volume_db: float, pitch_scale: float)` | `void` | Updates an existing connection. |
| `copy()` | `AudioBusLayout` | Creates a deep copy of the layout. |
| `duplicate()` | `AudioBusLayout` | Alias of `copy()`. |

---

## Signals

| Signal | Description |
|--------|-------------|
| `bus_added(index: int)` | Emitted when a bus is added. |
| `bus_removed(index: int)` | Emitted when a bus is removed. |
| `bus_reordered()` | Emitted after the bus order changes. |
| `effect_added(bus_index: int, effect_index: int)` | Emitted when an effect is added to a bus. |
| `effect_removed(bus_index: int, effect_index: int)` | Emitted when an effect is removed from a bus. |
| `effect_reordered(bus_index: int)` | Emitted when the effect chain of a bus changes. |
| `effect_changed(bus_index: int, effect_index: int)` | Emitted when an effect's parameters are modified. |
| `bus_muted(bus_index: int, muted: bool)` | Emitted when a bus is muted/unmuted. |
| `bus_solo(bus_index: int, solo: bool)` | Emitted when a bus is soloed/unsoloed. |
| `bus_bypass(bus_index: int, bypass: bool)` | Emitted when a bus is bypassed/unbypassed. |
| `bus_volume_changed(bus_index: int, volume_db: float)` | Emitted when a bus volume changes. |
| `bus_connection_changed(connection_id: int)` | Emitted when a connection is modified. |

---

## Usage Example

```gdscript
var layout = AudioServer.get_bus_layout()
print("There are %d buses in the project" % layout.get_bus_count())

# Mute the main bus
var main_bus = 0
layout.set_bus_muted(main_bus, true)

# Add a reverb effect to the main bus
var reverb = AudioEffectReverb.new()
layout.add_bus_effect(main_bus, reverb)

# Connect the main bus to a group bus
var group_bus = layout.get_bus_index("Group")
layout.add_bus_connection(main_bus, group_bus, volume_db=0.0)
```

---

### Notes

* The layout is typically edited through the **Audio** settings panel in the editor, but can be manipulated programmatically as shown above.
* When changing bus names or indices, remember that all connections and effects reference the bus by its index, so the order of operations is important.
* The `copy()`/`duplicate()` methods are useful for creating temporary layouts or for undo/redo systems.

---