**Plugins for iOS**  
=====================  

The Godot Engine provides a set of iOS‑specific plugins that expose native Apple services such as StoreKit, GameCenter, iCloud, ARKit and the camera to your GDScript code. All plugins follow the same asynchronous callback pattern described below, which keeps the main thread free and lets your game run smoothly on the device.

> **NOTE**  
> The following sections provide an overview of the available plugins, the common call‑pattern and some example usage. For the most up‑to‑date information, always check the online docs or the source code in the Godot engine repository.

---

## 1. Plugin Model

Each iOS plugin is a **singleton** that can be accessed through `OS.get_singleton()` in GDScript.  
Example:

```gdscript
var ios = OS.get_singleton("GodotIOSPlugin")
```

> All plugin methods return immediately and the result is delivered through a signal defined by the plugin.  
> Signals are emitted with a dictionary containing the operation’s return values and a `success` flag.

---

## 2. StoreKit

| Method | Parameters | Signal | Description |
|--------|------------|--------|-------------|
| `request_product_data(product_ids: Array)` | Array of product identifiers | `product_info_received(dict)` | Retrieves metadata for a list of IAP products. |
| `buy_product(product_id: String)` | Product ID | `purchase_finished(dict)` | Initiates the purchase flow. |
| `restore_purchases()` | — | `purchase_restored(dict)` | Restores previous purchases. |

**Example – Request product info**

```gdscript
func _ready():
    var ios = OS.get_singleton("GodotIOSPlugin")
    ios.product_info_received.connect(_on_product_info)
    ios.request_product_data(["com.myapp.coin_pack"])

func _on_product_info(info):
    if info.success:
        var product = info.products[0]
        print("Product: ", product.title, " – ", product.price_text)
```

---

## 3. GameCenter

| Method | Parameters | Signal | Description |
|--------|------------|--------|-------------|
| `authenticate_player()` | — | `player_authenticated(dict)` | Triggers the Game Center authentication dialog. |
| `report_score(score: int, category: String)` | Score and category | `score_reported(dict)` | Submits a leaderboard score. |
| `show_leaderboard(category: String)` | Category | — | Displays the standard Game Center leaderboard UI. |
| `report_achievement(achievement: String, percent: int)` | Achievement ID and progress | `achievement_reported(dict)` | Reports a user’s achievement progress. |

---

## 4. iCloud

| Method | Parameters | Signal | Description |
|--------|------------|--------|-------------|
| `is_icloud_enabled()` | — | `icloud_enabled(dict)` | Returns whether iCloud is available and enabled. |
| `write_file(path: String, data: PoolByteArray)` | Path and data | `file_written(dict)` | Writes a file to the iCloud container. |
| `read_file(path: String)` | Path | `file_read(dict)` | Reads a file from iCloud. |
| `delete_file(path: String)` | Path | `file_deleted(dict)` | Removes a file from iCloud. |

---

## 5. ARKit

| Method | Parameters | Signal | Description |
|--------|------------|--------|-------------|
| `start_session(plane_detection: bool)` | Bool to enable horizontal/vertical plane detection | `ar_session_started(dict)` | Starts an AR session. |
| `add_anchor(position: Vector3, orientation: Quat)` | Position and orientation | `anchor_added(dict)` | Adds a tracking anchor to the scene. |
| `stop_session()` | — | `ar_session_stopped(dict)` | Stops the AR session. |

> **Tip** – Use the `ARFrame` signal to access camera frames and feature points.

---

## 6. Camera

| Method | Parameters | Signal | Description |
|--------|------------|--------|-------------|
| `open_camera()` | — | `camera_ready(dict)` | Opens the device camera. |
| `take_photo()` | — | `photo_taken(dict)` | Captures a still image and returns it as `PoolByteArray`. |
| `close_camera()` | — | `camera_closed(dict)` | Releases the camera. |

---

## 7. Using a Plugin

1. **Enable the plugin** in `Project Settings → Plugins → iOS`.  
2. **Add the plugin script** to your scene or keep it in a singleton autoload.  
3. **Connect the signals** you’re interested in.

```gdscript
var ios = OS.get_singleton("GodotIOSPlugin")
ios.purchase_finished.connect(_on_purchase_finished)

func _on_purchase_finished(result):
    if result.success:
        print("Purchase successful!")
    else:
        print("Purchase failed: ", result.error_message)
```

---

## 8. Common Pattern

All plugin calls are *non‑blocking*.  
When you call a method, it immediately returns, and the result is later delivered via a signal. The signal payload contains:

| Key | Type | Notes |
|-----|------|-------|
| `success` | `bool` | True if the operation succeeded |
| `error_code` | `int` | Platform‑specific error code |
| `error_message` | `String` | Human‑readable error message |
| `payload` | `Variant` | Method‑specific data (e.g., product info, score result) |

---

## 9. Example: In‑App Purchase Flow

```gdscript
func _ready():
    ios = OS.get_singleton("GodotIOSPlugin")
    ios.product_info_received.connect(_on_product_info)
    ios.purchase_finished.connect(_on_purchase_finished)

    ios.request_product_data(["com.mygame.gold_pack"])

func _on_product_info(info):
    if not info.success: return
    var product = info.products[0]
    # Show price in UI
    price_label.text = product.price_text

func buy():
    ios.buy_product("com.mygame.gold_pack")

func _on_purchase_finished(result):
    if result.success:
        # Grant items
        coins += 500
        save_player_data()
    else:
        show_error(result.error_message)
```

---

## 10. Resources

- [Godot iOS Plugin API Reference](https://docs.godotengine.org/en/stable/classes/class_ios.html)  
- [Example project on GitHub](https://github.com/godotengine/godot/tree/master/ios) – shows a minimal in‑app purchase implementation.  
- [Apple Developer Documentation](https://developer.apple.com/documentation/storekit) – for deeper understanding of StoreKit and GameCenter.

---

Feel free to extend the plugin list or add your own custom native iOS modules if you need services not covered by the built‑in plugins. Happy coding!