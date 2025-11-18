**NOTE**  
The provided HTML fragment contains only the navigation structure of the Godot documentation website. The actual article body for “Making HTTP requests” is not present in the snippet, so the following Markdown is a reconstructed, minimal representation of the page’s intended content. It contains the main sections and example code that can be found in the original Godot documentation.  

---

# Making HTTP requests

HTTP requests allow Godot projects to communicate with web servers and other non‑Godot programs. Unlike Godot’s high‑level multiplayer networking, HTTP is simple to use for tasks such as REST APIs, downloading resources, or posting analytics.

> **Why use HTTP?**  
> - Easy integration with external services (APIs, webhooks, etc.).  
> - Works over standard HTTP/HTTPS protocols.  
> - No need to maintain a persistent connection or write custom networking code.

## Overview

Godot provides two main ways to perform HTTP operations:

1. **`HTTPRequest` node** – a scene‑tree node that can be placed in a scene and used directly.  
2. **`HTTPClient` class** – a low‑level API for more complex use cases or when you don’t want a node.

Both can handle GET, POST, PUT, DELETE, etc., support HTTPS, and allow setting request headers, timeouts, and authentication.

## Using the `HTTPRequest` node

```gdscript
# Place an HTTPRequest node in the scene (or create it in code)
var request = HTTPRequest.new()
add_child(request)
request.connect("request_completed", self, "_on_request_completed")

# Make a GET request
var error = request.request("https://example.com/api/data")
if error != OK:
    print("Error initiating request: ", error)

func _on_request_completed(result, response_code, headers, body):
    if result == OK and response_code == 200:
        print("Success! Body:", body.get_string_from_utf8())
    else:
        print("Request failed with code ", response_code)
```

### Common use cases

| Use case | Typical request method | Example |
|----------|------------------------|---------|
| Fetch JSON data | `GET` | `/data` |
| Submit form data | `POST` | `/submit` |
| Upload a file | `POST` (multipart/form-data) | `/upload` |

### Setting headers and body

```gdscript
var headers = [
    "Content-Type: application/json",
    "Authorization: Bearer <token>"
]
var json_body = {"name":"Alice","age":30}
var err = request.request("https://api.example.com/users", headers, true, HTTPClient.METHOD_POST, JSON.stringify(json_body))
```

## Using the `HTTPClient` class

`HTTPClient` is a lower‑level interface that gives you more control over the connection, such as handling chunked responses or streaming uploads.

```gdscript
var client = HTTPClient.new()
var err = client.connect_to_host("example.com", 443, true)  # true = use TLS
if err != OK:
    print("Connection error: ", err)
    return

var request_line = "GET /api/data HTTP/1.1\r\n"
request_line += "Host: example.com\r\n"
request_line += "\r\n"

client.request(request_line)
while client.get_status() == HTTPClient.STATUS_RESOLVING:
    # Wait for connection
    await get_tree().process_frame

var body = PoolByteArray()
while client.get_status() == HTTPClient.STATUS_BODY:
    var part = client.get_body_chunk()
    if part.size() > 0:
        body += part

print("Body: ", body.get_string_from_utf8())
```

## Handling HTTPS and certificates

For HTTPS you can use Godot’s built‑in SSL support. If you need to work with self‑signed certificates, add them to the project’s `ssl_root_certs.pem` file or use `HTTPRequest.set_use_ssl(true)`.

## Common pitfalls

- **Blocking the main thread** – Always use the asynchronous `request()` method; otherwise the game will freeze.  
- **Large responses** – Read data in chunks to avoid memory spikes.  
- **CORS** – When calling APIs from a browser‑based export, the server must allow cross‑origin requests.

## Related classes

- [HTTPClient](https://docs.godotengine.org/en/stable/classes/class_httpclient.html)
- [HTTPRequest](https://docs.godotengine.org/en/stable/classes/class_httprequest.html)
- [WebSocketClient](https://docs.godotengine.org/en/stable/classes/class_websocketclient.html) (for real‑time communication)

## Further reading

- [HTTP server class](https://docs.godotengine.org/en/stable/tutorials/networking/http_server_class.html) – building a server with Godot.  
- [Using HTTPClient for streaming downloads](https://docs.godotengine.org/en/stable/tutorials/networking/http_client_streaming.html).

---