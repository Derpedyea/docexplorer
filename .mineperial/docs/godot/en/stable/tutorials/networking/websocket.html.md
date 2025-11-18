**Using WebSockets**  
*(Godot Engine documentation – stable)*

> WebSocket is a protocol that allows bi‑directional, persistent communication between a client (e.g. a browser) and a server.  
> Godot exposes the WebSocket API through the `WebSocketClient` and `WebSocketServer` classes.

---

## 1.  Getting started

### 1.1  What is a WebSocket?

- A single TCP connection that can be used for sending and receiving messages.
- Works over HTTP/1.1 (port 80) or HTTPS/1.1 (port 443) with a handshake that upgrades the protocol.
- Very suitable for games and real‑time applications.

### 1.2  Why use WebSockets in Godot?

| Feature | Client | Server |
|---------|--------|--------|
| Built‑in | `WebSocketClient` | `WebSocketServer` |
| Handles binary & text payloads | ✅ | ✅ |
| Works with HTML5 browsers | ✅ | ✅ |
| Works on mobile and desktop | ✅ | ✅ |

---

## 2.  Basic API overview

```gdscript
# client.gd
extends Node

var ws: WebSocketClient = WebSocketClient.new()

func _ready():
    ws.connect("connected_to_host", self, "_on_connected")
    ws.connect("connection_error", self, "_on_error")
    ws.connect("data_received", self, "_on_data")
    var err = ws.connect_to_url("ws://localhost:8080")
    if err != OK:
        push_error("Could not connect to server")

func _process(_delta):
    ws.poll()
```

```gdscript
# server.gd
extends Node

var server: WebSocketServer = WebSocketServer.new()

func _ready():
    var err = server.listen(8080)
    if err != OK:
        push_error("Could not start WebSocket server")

func _process(_delta):
    server.poll()
    if server.is_connection_available():
        var peer_id = server.take_connection()
        print("New client connected: ", peer_id)

func _on_data():
    var peer_id = server.get_peer_id()
    var payload = server.get_peer(peer_id).get_peer_packet()
    # process payload …
```

### 2.1  Sending data

```gdscript
# client sends a text message
ws.get_peer(0).put_packet( "Hello, server!".to_utf8() )

# server broadcasts to all clients
for peer in server.get_peer_list():
    server.get_peer(peer).put_packet("Echo: ".ascii() + payload)
```

### 2.2  Receiving data

```gdscript
func _on_data():
    var peer_id = ws.get_peer_id()
    var packet = ws.get_peer(peer_id).get_peer_packet()
    var text = packet.get_string_from_utf8()
    print("Received: ", text)
```

---

## 3.  Using WebSockets from the editor

You can use the built‑in **Remote** inspector to monitor WebSocket traffic:

1. Open **Debug → Remote**.
2. Connect to the server from the editor or a browser.
3. Inspect the `WebSocketClient` / `WebSocketServer` node and view sent / received packets.

---

## 4.  Common pitfalls

| Problem | Fix |
|---------|-----|
| **Connection refused** | Make sure the server is listening on the correct port and that the firewall allows it. |
| **`get_peer()` fails** | Call `poll()` before attempting to fetch a peer. |
| **Large data** | Use binary packets (`put_packet()` with a `PackedByteArray`). |
| **CORS / Origin** | For browsers, the server must send the `Access-Control-Allow-Origin` header. |

---

## 5.  Further reading

- [WebRTC](https://docs.godotengine.org/en/stable/tutorials/networking/webrtc.html)
- [TCP & UDP](https://docs.godotengine.org/en/stable/tutorials/networking/tcp.html)
- [High‑level multiplayer](https://docs.godotengine.org/en/stable/tutorials/networking/high_level_multiplayer.html)

---