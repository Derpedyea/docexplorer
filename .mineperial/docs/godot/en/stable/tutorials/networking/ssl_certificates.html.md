**__TLS/SSL certificates__**

> This page is part of the Godot Engine documentation and covers how to generate and use TLS/SSL certificates in Godot projects.  
> It contains explanations, code examples, and configuration details for both the server and client sides, as well as tips for working with certificates in Godot's networking classes.

---

## 1. Introduction

TLS (Transport Layer Security) / SSL (Secure Sockets Layer) are widely used to encrypt network traffic and protect against “man‑in‑the‑middle” attacks.  
Godot provides a high‑level wrapper around OpenSSL in the form of `StreamPeerTLS`, which can be used with `StreamPeer`, `HTTPClient`, `WebSocketClient`, etc.

---

## 2. Generating certificates

Godot itself does not create certificates; you need to generate them with a tool such as **OpenSSL**.  
Below are the most common steps for a development environment.

### 2.1 Using OpenSSL

```bash
# 1. Generate a private key (RSA 2048 bits)
openssl genrsa -out server.key 2048

# 2. Create a certificate signing request (CSR)
openssl req -new -key server.key -out server.csr \
  -subj "/CN=localhost/O=Godot Test Server"

# 3. Sign the CSR to produce a self‑signed certificate
openssl x509 -req -days 365 -in server.csr -signkey server.key -out server.crt
```

- `server.key` – the private key file
- `server.crt` – the self‑signed certificate

> **Tip:** For production, obtain a certificate from a trusted CA instead of self‑signing.

### 2.2 Using a Certificate Authority (optional)

If you have a CA, replace step 3 with a proper signing command or use the CA’s tools.  
Store the resulting `server.crt` and `client.crt` (if mutual authentication is required).

---

## 3. Using certificates in Godot

### 3.1 Server side

```gdscript
# server.gd
extends Node

var tls_server : StreamPeerTLS
var tcp_server : TCPServer

func _ready():
    tcp_server = TCPServer.new()
    tcp_server.listen(8443)  # Port you want to expose

    tls_server = StreamPeerTLS.new()
    tls_server.set_certificate_file("res://certs/server.crt")
    tls_server.set_private_key_file("res://certs/server.key")

func _process(_delta):
    if tcp_server.is_connection_available():
        var tcp = tcp_server.take_connection()
        tls_server.set_connection(tcp)
        tls_server.connect("connection_established", self, "_on_connection_established")
        tls_server.connect("data_received", self, "_on_data_received")

func _on_connection_established():
    print("TLS connection established")

func _on_data_received():
    var msg = tls_server.get_string(tls_server.get_available_bytes())
    print("Client says: ", msg)
```

> **Notes**
> * `set_certificate_file()` expects the path to a PEM‑encoded certificate.  
> * `set_private_key_file()` expects the matching PEM‑encoded private key.

### 3.2 Client side

```gdscript
# client.gd
extends Node

var tls_client : StreamPeerTLS

func _ready():
    tls_client = StreamPeerTLS.new()
    tls_client.connect("connection_established", self, "_on_connected")
    tls_client.connect("connection_failed", self, "_on_connection_failed")

    var err = tls_client.connect_to_host("localhost", 8443, true)  # true = use TLS
    if err != OK:
        print("Failed to initiate TLS handshake: ", err)

func _on_connected():
    print("Connected to server via TLS")
    tls_client.put_utf8_string("Hello, secure world!\n")

func _on_connection_failed():
    print("TLS handshake failed")
```

> **Client certificate (mutual authentication)**
>
> ```gdscript
> tls_client.set_peer_certificate("res://certs/client.crt",
>                                 "res://certs/client.key")
> ```
> Only use this if the server requires a client certificate.

### 3.3 HTTPClient with TLS

```gdscript
var client = HTTPClient.new()
var err = client.connect_to_host("example.com", 443, true)  # true = use TLS

if err == OK:
    while client.get_status() == HTTPClient.STATUS_CONNECTING:
        client.poll()
        yield(get_tree(), "idle_frame")

    if client.get_status() == HTTPClient.STATUS_CONNECTED:
        client.request(HTTPClient.METHOD_GET, "/")
        while client.get_status() == HTTPClient.STATUS_REQUESTING:
            client.poll()
            yield(get_tree(), "idle_frame")
        var response = client.read_response_body_chunk()
        print("Response: ", response)
```

> The `connect_to_host` call with `use_tls=true` automatically uses the default OpenSSL verification chain.  
> To provide a custom CA bundle or to disable verification, set the appropriate properties before connecting.

---

## 4. Common pitfalls & troubleshooting

| Issue | Cause | Fix |
|-------|-------|-----|
| `connection_established` never fires | Wrong certificate path or unsupported format | Verify PEM format, check file paths |
| `connection_failed` with “TLS handshake failed” | Client and server certificates do not match, or server expects client cert | Disable client cert on server or provide proper cert |
| Server crashes after `listen` | OpenSSL not linked correctly (unlikely in Godot) | Rebuild Godot with `USE_OPENSSL` enabled |
| Certificate warnings in console | Self‑signed cert not trusted | Add `tls_server.set_verify_mode(StreamPeerTLS.VERIFY_NONE)` for dev only |

---

## 5. Resources

- [OpenSSL command line reference](https://www.openssl.org/docs/)
- [Godot class reference: `StreamPeerTLS`](https://docs.godotengine.org/en/stable/classes/class_streampeer_tls.html)
- [Godot HTTPClient docs](https://docs.godotengine.org/en/stable/classes/class_httpclient.html)

> **Remember:** For production deployments, always use certificates signed by a trusted Certificate Authority and keep private keys secure.  

---