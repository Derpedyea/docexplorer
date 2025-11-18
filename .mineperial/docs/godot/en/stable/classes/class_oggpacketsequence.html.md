# OggPacketSequence

*Godot Engine (stable) – Class reference*

---

## Overview

`OggPacketSequence` is a **Resource** (ref‑counted Godot object) that represents a sequence of Ogg packets.  
It is mainly used internally by Godot’s audio subsystem (e.g., `AudioStreamOggVorbis`) to store and manipulate raw Ogg packet data.

```
class OggPacketSequence : Resource
```

---

## Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `granule_positions` | `PackedInt64Array` | `PackedInt64Array()` | The granule position for each packet, used for seeking and duration calculations. |
| `packets` | `Array[ Array[PackedByteArray] ]` | `[]` | The raw packet data. Each inner array holds the byte data for a single packet. |

> **Note** – `granule_positions` and `packets` are kept in sync; the *i*‑th entry in `granule_positions` corresponds to the *i*‑th packet in `packets`.

---

## Methods

| Method | Signature | Returns | Description |
|--------|-----------|---------|-------------|
| `get_packet_count()` | `int` | `int` | Returns the number of packets stored. |
| `get_packet(index: int)` | `PackedByteArray` | `PackedByteArray` | Returns the raw data of the packet at the given index. |
| `set_packet(index: int, data: PackedByteArray, granule_pos: int)` | | | Sets or replaces a packet at the specified index. |
| `add_packet(data: PackedByteArray, granule_pos: int)` | | | Appends a new packet to the sequence. |
| `get_packets()` | `Array[ Array[PackedByteArray] ]` | `Array[ Array[PackedByteArray] ]` | Returns a copy of the packet array. |
| `set_packets(packets: Array[ Array[PackedByteArray] ])` | | | Replaces the entire packet sequence. |
| `get_granule_positions()` | | `PackedInt64Array` | Returns the granule positions array. |
| `set_granule_positions(positions: PackedInt64Array)` | | | Sets the granule positions. |
| `serialize()` | | `PackedByteArray` | Serialises the packet sequence into a single byte array. |
| `deserialize(data: PackedByteArray)` | | | Populates the packet sequence from a serialised byte array. |

> **Tip** – Use `serialize()` to store an `OggPacketSequence` in a file or resource, and `deserialize()` to load it back.

---

## Example Usage

```gdscript
var packet_sequence = OggPacketSequence.new()

# Add a packet
var packet_data = PackedByteArray([0x01, 0x02, 0x03])
var granule = 0
packet_sequence.add_packet(packet_data, granule)

# Read back
var first_packet = packet_sequence.get_packet(0)
print("First packet bytes: ", first_packet)
```

---

## See Also

- [AudioStreamOggVorbis](https://docs.godotengine.org/en/stable/classes/class_audiostreamoggvorbis.html) – uses `OggPacketSequence` under the hood.  
- [Resource](https://docs.godotengine.org/en/stable/classes/class_resource.html) – base class for all Godot resources.  

---