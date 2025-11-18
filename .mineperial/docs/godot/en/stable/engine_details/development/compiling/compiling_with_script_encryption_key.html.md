**Compiling with PCK encryption key**  
*(Documentation – Godot Engine – Stable)*  

> This page explains how to encrypt a project’s PCK file with a 256‑bit AES key during export, ensuring that scenes, scripts and other resources are stored in a protected format. The guide covers the required steps, configuration options, and command‑line usage for both Windows and non‑Windows platforms.

---

## 1. Overview

When you export a Godot project, the editor can optionally encrypt the resulting `.pck` file. The key is a 256‑bit AES key that you provide at export time. Encrypted PCKs keep the project’s scripts and resources hidden from casual inspection, adding a layer of protection for commercial releases.

> **Why use encryption?**  
> * Protect your source code from reverse‑engineering.  
> * Prevent unauthorized modification of assets.  
> * Meet platform‑specific security requirements.

---

## 2. Prerequisites

| Item | Description |
|------|-------------|
| **Godot editor** | Version 4.0+ (the feature was introduced in 4.0). |
| **Export preset** | A configured preset for your target platform. |
| **Encryption key** | A 256‑bit AES key (32 hex characters or a binary file). |

---

## 3. Generating an Encryption Key

You can create a key with various tools. Two common approaches:

### 3.1 Using `openssl`

```bash
# 32‑byte key (64 hex chars)
openssl rand -hex 32 > key.txt
```

### 3.2 Using Godot’s built‑in key generator

1. Open the **Project > Export** dialog.  
2. In the **Export** tab, click **Generate Encryption Key**.  
3. Copy the displayed key to a secure location.

> Store the key securely; losing it will prevent you from running the exported binary.

---

## 4. Exporting with Encryption

### 4.1 Via the Editor GUI

1. Open **Project > Export**.  
2. Select your export preset.  
3. Under **Encryption**:  
   * Tick **Encrypt PCK**.  
   * Paste or load the 256‑bit AES key.  
4. Click **Export Project**.

### 4.2 Via Command Line

```bash
godot --export "Windows Desktop" "build.exe" --encrypt-key <path/to/key.txt>
```

Replace `"Windows Desktop"` with your preset name and `"build.exe"` with the desired output path.

> **Note**: The `--encrypt-key` flag accepts either a hex string or a path to a key file.

---

## 5. Importing an Encrypted PCK

When launching an exported game, the engine automatically reads the key from the `project.godot` file or from a command‑line argument:

```bash
godot --pck "project.pck" --encryption-key <path/to/key.txt>
```

The key is also stored in the compiled binary if you used the editor GUI; the runtime will prompt for it if it cannot find the key.

---

## 6. Security Considerations

* **Key Management**: Store the encryption key in a secure environment (e.g., a secrets manager) and avoid embedding it in public repositories.  
* **Distribution**: When distributing the binary, ensure the key is not exposed; consider using a launcher that injects the key at runtime.  
* **Compatibility**: Not all export targets support encrypted PCKs (e.g., Web). Check the platform documentation.

---

## 7. Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| Export fails with “key is too short” | Key not 256‑bit | Regenerate with a 32‑byte key. |
| Runtime fails to load PCK | Missing key file | Provide the key via `--encryption-key` or store it in `project.godot`. |
| Decryption errors after updates | Key changed | Update the key in the exported binary or re‑export. |

---

## 8. Further Reading

* [Optimizing a build for size](../optimizing_for_size.html)  
* [Compiling with .NET](../compiling_with_dotnet.html)

---