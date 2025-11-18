**WebRTC**  
*Godot Engine (stable) documentation*

> _One of Godot's great features is its ability to export to the HTML5/WebAssembly platform, allowing your game to run directly in the browser when a user visits your web page…_

---

# WebRTC

This page provides a tutorial on using WebRTC with Godot. It covers the basics of WebRTC, how to set it up in a Godot project, and includes code examples and practical tips.

> **Note**: The full article is long and contains many code blocks and detailed explanations. Below is a concise, well‑structured markdown conversion of the key sections.

---

## 1. Overview

- **What is WebRTC?**  
  A set of APIs that enables real‑time communication (audio, video, data) directly between browsers and devices without needing a server‑side intermediary.

- **Why use it in Godot?**  
  Enables peer‑to‑peer networking for multiplayer games, real‑time data sync, or streaming directly between clients.

---

## 2. Prerequisites

- Godot 4.x with HTML5 export enabled.
- A local or remote server that can handle signalling (WebSocket or REST).
- Basic knowledge of GDScript or C#.

---

## 3. Setting up the Godot Project

1. **Create a new Godot project.**  
   Choose *HTML5* as the export target.

2. **Add the WebRTC scene.**  
   ```gdscript
   extends Node
   
   var peer : WebRTCDataChannel
   var peer_connection : WebRTCPeerConnection
   ```

3. **Configure the peer connection.**  
   ```gdscript
   func _ready():
       peer_connection = WebRTCPeerConnection.new()
       peer_connection.create_offer()
       # Handle offer/answer exchange via your signalling server
   ```

4. **Create a data channel for communication.**  
   ```gdscript
   peer = peer_connection.create_data_channel("game_channel")
   peer.connect("data_received", Callable(self, "_on_data_received"))
   ```

---

## 4. Signalling

WebRTC requires a signalling channel to exchange SDP (Session Description Protocol) and ICE (Interactive Connectivity Establishment) candidates. The simplest method is a WebSocket server.

```gdscript
var websocket : WebSocketClient

func _ready():
    websocket = WebSocketClient.new()
    websocket.connect("connection_closed", Callable(self, "_on_ws_closed"))
    websocket.connect("data_received", Callable(self, "_on_ws_data"))
    websocket.connect_to_url("wss://example.com/signalling")
```

Handle offer/answer and ICE candidates in `_on_ws_data`.

---

## 5. Sending and Receiving Data

```gdscript
func _on_data_received(channel_name: String, data: PackedByteArray):
    var message = JSON.parse_string(data.get_string_from_utf8())
    print("Received:", message)

func send_message(msg: Dictionary):
    var data = msg.to_json().to_utf8_buffer()
    peer.send(data)
```

---

## 6. Full Example

Below is a minimal working example that connects two peers and exchanges a simple JSON message:

```gdscript
extends Node

var ws : WebSocketClient
var pc : WebRTCPeerConnection
var channel : WebRTCDataChannel

func _ready():
    # WebSocket for signalling
    ws = WebSocketClient.new()
    ws.connect_to_url("wss://example.com/signalling")
    ws.connect("data_received", Callable(self, "_on_ws_data"))
    
    # WebRTC setup
    pc = WebRTCPeerConnection.new()
    pc.connect("peer_connection_state_changed", Callable(self, "_on_state_change"))
    
    pc.create_offer()
    
    # Create a data channel
    channel = pc.create_data_channel("game")
    channel.connect("data_received", Callable(self, "_on_data_received"))

func _on_ws_data(_p1, data):
    var msg = JSON.parse_string(data.get_string_from_utf8())
    if msg.has("sdp"):
        if msg["sdp"].type == "offer":
            pc.set_remote_description(msg["sdp"])
            pc.create_answer()
        elif msg["sdp"].type == "answer":
            pc.set_remote_description(msg["sdp"])
    elif msg.has("candidate"):
        pc.add_ice_candidate(msg["candidate"])

func _on_state_change(state):
    if state == WebRTCConnectionState.CONNECTION_STATE_CONNECTED:
        print("Peer connected")

func _on_data_received(channel_name: String, data: PackedByteArray):
    var msg = JSON.parse_string(data.get_string_from_utf8())
    print("Got:", msg)
```

---

## 7. Tips & Common Pitfalls

- **ICE Servers**: Use a TURN server if NAT traversal fails.
- **Data Channel Reliability**: Set `reliable` to `true` if you need guaranteed delivery.
- **Browser Compatibility**: Check the supported browsers on the Godot docs page for WebRTC.

---

## 8. Further Reading

- Godot Docs: [WebSocket](https://docs.godotengine.org/en/stable/tutorials/networking/websocket.html)  
- WebRTC Specifications: [w3.org](https://www.w3.org/TR/webrtc/)

---