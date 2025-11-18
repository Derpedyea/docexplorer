# HTTP client class

The **`HTTPClient`** class provides low‑level access to HTTP communication in Godot.  
For most projects a higher‑level wrapper (`HTTPRequest`) is often more convenient, but `HTTPClient` gives you fine‑grained control over the request/response lifecycle and is useful when you need custom networking logic.

---

## Overview

* **Purpose** – Direct, protocol‑level handling of HTTP requests and responses.  
* **Typical use cases**  
  * Implementing a custom HTTP client that needs to control socket behaviour.  
  * Integrating HTTP communication into a networking‑heavy project where you want to avoid the overhead of the higher‑level `HTTPRequest`.  

---

## Getting Started

```gdscript
var client = HTTPClient.new()

# Connect to a host
var err = client.connect_to_host("example.com", 80)
if err != OK:
    print("Connection failed: ", err)
```

Once connected you can use the `HTTPClient` methods to send a request, read the status line, headers and body, and manage the connection’s state.

---

## Key Methods

| Method | Description |
|--------|-------------|
| `connect_to_host(host, port, use_ssl=false, ssl_ctx=null)` | Opens a TCP or TLS connection to the host. |
| `request(method, url, headers=[], body=PoolByteArray())` | Sends an HTTP request with the given method and headers. |
| `get_status()` | Returns the HTTP status code after a response has been received. |
| `get_response_headers()` | Retrieves all response headers. |
| `read_response_body_chunk()` | Reads a chunk of the response body; useful for streaming. |
| `is_response_finished()` | Checks whether the whole response has been received. |
| `poll()` | Advances the internal state machine – must be called regularly (e.g., in `_process`). |
| `close()` | Closes the connection. |

---

## Sample Usage

```gdscript
var client = HTTPClient.new()
var err = client.connect_to_host("example.com", 80)
if err != OK:
    push_error("Cannot connect.")
    return

client.request(HTTPClient.METHOD_GET, "/api/data")

while client.get_status() == HTTPClient.STATUS_CONNECTING or \
      client.get_status() == HTTPClient.STATUS_BODY:
    client.poll()
    if client.is_response_finished():
        break

var body = PoolByteArray()
while client.get_response_body_length() > 0:
    body += client.read_response_body_chunk()

print("Response:", body.get_string_from_utf8())
client.close()
```

---

## Handling SSL/TLS

If you need to connect over HTTPS, call `connect_to_host` with `use_ssl=true`.  
You can optionally provide a custom `TLSOptions` instance:

```gdscript
var tls_options = TLSOptions.new()
tls_options.set_certificate_mode(TLSOptions.CERTIFICATE_MODE_NONE)  # or other modes
client.connect_to_host("secure.example.com", 443, true, tls_options)
```

---

## Common Pitfalls

| Problem | Fix |
|---------|-----|
| `get_status()` never changes from `STATUS_CONNECTING` | Ensure `poll()` is called regularly in a `_process` or a timer. |
| Response headers not visible | Call `get_response_headers()` **after** `is_response_finished()` is `true`. |
| Data lost on large responses | Read the body in chunks with `read_response_body_chunk()` and append to a buffer. |

---

## Advanced Topics

* **Chunked Transfer Encoding** – `HTTPClient` automatically handles chunked bodies.  
* **Keep‑Alive** – Connections are persistent by default; use `set_request` to add the `Connection: close` header if needed.  
* **Proxy Support** – Use `set_proxy(host, port)` before connecting.  

---

## References

* [`HTTPClient` API Reference](https://docs.godotengine.org/en/stable/classes/class_httpclient.html)  
* Related tutorial: [Making HTTP requests](https://docs.godotengine.org/en/stable/tutorials/networking/http_request_class.html)  

---

*Note*: For a higher‑level interface that handles the whole request lifecycle automatically, consider using `HTTPRequest`.