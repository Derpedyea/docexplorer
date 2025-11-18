**Android in‑app purchases**  
================================

The Godot Engine provides a first‑party *GodotGooglePlayBilling* plugin (compatible with Godot 4.2+) that wraps the Google Play Billing library.  
Below is a quick reference to set up, use, and troubleshoot in‑app purchases on Android.

---

## 1. Prerequisites

| Item | Description |
|------|-------------|
| Godot 4.2+ | The plugin only works with Godot 4.2 or newer. |
| Google Play Console | A published or test package and a signed APK/IPA. |
| Billing library | The plugin uses the latest Google Play Billing library. |

---

## 2. Getting started

1. **Enable the API**  
   In the Google Play Console, enable the *Google Play Billing* API for your project.

2. **Install the plugin**  
   ```text
   # In your Godot project
   add_subdirectory(GodotGooglePlayBilling)
   ```
   or add it via the *Asset Library* in the editor.

3. **Add the plugin to `project.godot`**  
   ```ini
   [plugin]
   GodotGooglePlayBilling = true
   ```

4. **Set up your in‑app products**  
   In the Play Console, create consumable, non‑consumable, or subscription products.  
   Note the product IDs for later use.

---

## 3. Configuring the plugin

| Key | Value | Notes |
|-----|-------|-------|
| `auto_connect` | `true/false` | Connect automatically on project start. |
| `request_inventory` | `true` | Automatically query inventory on connect. |
| `consent_required` | `true/false` | For EU privacy compliance. |

```gdscript
# Example configuration in GDScript
var billing = preload("res://addons/GodotGooglePlayBilling.gd").new()
billing.auto_connect = true
billing.request_inventory = true
add_child(billing)
```

---

## 4. Basic purchase flow

```gdscript
extends Node

var billing

func _ready():
    billing = preload("res://addons/GodotGooglePlayBilling.gd").new()
    add_child(billing)
    billing.connect("connected", self, "_on_connected")
    billing.connect("purchase_updated", self, "_on_purchase_updated")

func _on_connected():
    # Query available products
    billing.query_inventory(["product_sword", "product_potion"])

func buy_product(product_id):
    billing.purchase(product_id)

func _on_purchase_updated(purchase):
    if purchase.state == billing.PURCHASE_STATE_PURCHASED:
        # Grant the item to the player
        grant_item(purchase.sku)
    elif purchase.state == billing.PURCHASE_STATE_PENDING:
        # Handle pending state
        pass
    elif purchase.state == billing.PURCHASE_STATE_CANCELED:
        # Handle cancellation
        pass
```

### Key callbacks

| Signal | Description |
|--------|-------------|
| `connected` | Fired when the billing client connects. |
| `purchase_updated` | Fired for every purchase state change. |
| `inventory_received` | Returns a list of `Purchase` objects. |

---

## 5. Consumables vs. non‑consumables

```gdscript
func consume_product(sku: String):
    billing.consume(sku)

func acknowledge_purchase(purchase_id: int):
    billing.acknowledge(purchase_id)
```

> **Tip** – Always acknowledge non‑consumable purchases to comply with Google Play policies.

---

## 6. Testing

1. **Create a *License Key* and *Test Accounts*** in the Play Console.  
2. Use **Google Play Developer Console** to upload a **signed test APK**.  
3. Call `billing.is_testing()` to detect if the app is running in a test environment.

---

## 7. Debugging

| Issue | Fix |
|-------|-----|
| Billing client fails to connect | Ensure `android.permission.INTERNET` is granted. |
| Purchase state is *PENDING* | Make sure the device is signed with a test account. |
| `acknowledge()` throws exception | The purchase has already been acknowledged. |

---

## 8. Known limitations

- The plugin does **not** handle *Google Play Subscriptions* automatically – you must implement renewal logic.
- For *Android 12+*, the plugin requires `request_permissions` in the AndroidManifest.

---

## 9. References

* Godot official documentation: <https://docs.godotengine.org/en/stable/tutorials/platform/android/android_in_app_purchases.html>  
* Google Play Billing Library: <https://developer.android.com/google/play/billing>  

---