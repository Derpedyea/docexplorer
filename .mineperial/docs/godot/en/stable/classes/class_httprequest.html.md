**Note:** The provided HTML snippet contains only the navigation framework and meta information for the `HTTPRequest` class page, but does not include the actual class documentation content (methods, properties, signals, etc.). Therefore, the following Markdown is a concise summary based on the available information.

---

# HTTPRequest

**Inheritance**

```
Node ← Object
```

**Description**

`HTTPRequest` is a Godot node that provides the ability to send HTTP(S) requests. It internally uses `HTTPClient` and can be used to make HTTP requests from within Godot projects.

---

## Key Features

- **Send HTTP(S) requests**  
  Supports GET, POST, PUT, DELETE, and other common HTTP methods.

- **Asynchronous handling**  
  Emits signals when a request completes or fails, allowing non-blocking network operations.

- **Configurable**  
  Allows setting headers, timeout values, and handling of redirects.

---

## Basic Usage (GDScript Example)

```gdscript
# Create an HTTPRequest node
var request = HTTPRequest.new()
add_child(request)

# Connect to the "request_completed" signal
request.connect("request_completed", Callable(self, "_on_request_completed"))

# Make a GET request
request.request("https://example.com/api/data")
```

```gdscript
func _on_request_completed(result, response_code, headers, body):
    if result == OK:
        print("Request succeeded: ", response_code, body.get_string_from_utf8())
    else:
        print("Request failed with result code: ", result)
```

---

## Signals

| Signal | Description |
|--------|-------------|
| `request_completed(result, response_code, headers, body)` | Emitted when the HTTP request finishes. |
| `connection_failed()` | Emitted if the connection to the server fails. |
| `connection_error()` | Emitted if there is an error during the connection. |
| `connection_established()` | Emitted when a connection to the server is successfully established. |
| `connection_closed()` | Emitted when the connection is closed. |

---

## Methods

| Method | Description |
|--------|-------------|
| `request(url, method=GET, headers=[], body=null, ssl=false)` | Sends a request to the specified URL. |
| `set_http_client_timeout(timeout)` | Sets the timeout for HTTP client operations. |
| `set_http_client_max_redirects(max_redirects)` | Sets the maximum number of redirects allowed. |
| `set_use_threads(use_threads)` | Enables or disables the use of a separate thread for networking. |
| `get_response_body()` | Returns the body of the last response. |
| `get_response_headers()` | Returns the headers of the last response. |
| `get_response_code()` | Returns the HTTP status code of the last response. |

*(Note: The full list of methods can be found on the official Godot documentation.)*

---

## Example: POST Request

```gdscript
var data = { "username": "alice", "score": 42 }
var json_data = JSON.stringify(data)

request.set_http_client_timeout(10)  # 10 seconds timeout
request.request(
    "https://example.com/api/submit",
    HTTPClient.METHOD_POST,
    [ "Content-Type: application/json" ],
    json_data.to_utf8_buffer()
)
```

---

### Common Use Cases

- **Fetching remote configuration or updates.**
- **Sending analytics or telemetry data.**
- **Integrating with REST APIs.**
- **Downloading assets or patches at runtime.**

---

### References

- [Godot Official Documentation – HTTPRequest Class](https://docs.godotengine.org/en/stable/classes/class_httprequest.html)  
- [HTTPClient Class](https://docs.godotengine.org/en/stable/classes/class_httpclient.html)

---