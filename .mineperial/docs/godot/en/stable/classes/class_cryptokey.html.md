**CryptoKey**  
*Godot 4.0 – Class reference*

---

## Description
`CryptoKey` is a resource that represents a cryptographic key, either **RSA** or **elliptic‑curve (EC)**.  
It can be loaded from or saved to a file and used together with `CryptoContext` for encryption, decryption, signing and verification.

> *Inheritance*  
> `CryptoKey` → `Resource` → `RefCounted` → `Object`

---

## Properties

| Property | Type | Description |
|----------|------|-------------|
| `type` | `CryptoKey.Type` | The type of the key (RSA or EC). |
| `length` | `int` | Key size in bits. |
| `private` | `bool` | `true` if the key contains a private part. |
| `public` | `CryptoKey` | The corresponding public key (for private keys). |

> **Note:** Properties are read‑only; use the provided methods for manipulation.

---

## Enums

```gdscript
enum Type { RSA, EC }
enum Algorithm { RSA_PKCS1, ECDSA }
enum Hash { SHA256, SHA384, SHA512 }
enum Format { PEM, DER }
```

---

## Methods

| Signature | Return | Description |
|-----------|--------|-------------|
| `func load_from_file(path: String) -> Error` | `Error` | Loads a key from the given PEM/DER file. |
| `func save_to_file(path: String, format: Format = Format.PEM) -> Error` | `Error` | Saves the key to disk. |
| `func is_valid() -> bool` | `bool` | Checks if the key is properly loaded. |
| `func get_algorithm() -> Algorithm` | `Algorithm` | Returns the signing algorithm. |
| `func get_hash() -> Hash` | `Hash` | Returns the hash used for the key. |
| `func get_length() -> int` | `int` | Returns the key length in bits. |
| `func sign(data: PackedByteArray) -> PackedByteArray` | `PackedByteArray` | Generates a digital signature for the data. |
| `func verify(data: PackedByteArray, signature: PackedByteArray) -> bool` | `bool` | Verifies a signature against the data. |

---

## Example usage

```gdscript
var key = CryptoKey.new()
var err = key.load_from_file("res://private_key.pem")
if err != OK:
    push_error("Failed to load key: %s" % err)

var ctx = CryptoContext.new()
ctx.key = key
ctx.hash = CryptoKey.Hash.SHA256
ctx.algorithm = CryptoKey.Algorithm.RSA_PKCS1

var data = "Hello, world!".to_utf8_buffer()
var signature = ctx.sign(data)

var valid = ctx.verify(data, signature)
print(valid)  # should print 'true'
```

---

### Related classes

- **CryptoContext** – Provides encryption/decryption and signing utilities that consume `CryptoKey` objects.  
- **PackedByteArray** – Used for binary data such as key material or signatures.

---