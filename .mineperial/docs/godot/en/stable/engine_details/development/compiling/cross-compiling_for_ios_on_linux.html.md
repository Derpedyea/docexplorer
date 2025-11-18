# Cross‑compiling for iOS on Linux

The procedure for compiling Godot for iOS on a Linux machine is a bit involved and requires several steps.  Once the environment is set up correctly, you can rebuild the engine for iOS at any time.  

> **Disclaimer** – the process is complex and may change between Godot releases.  Make sure to follow the instructions that match the version of Godot you are building.

---

## 1. Overview

Cross‑compiling for iOS from Linux involves:

1.  **Obtaining the Xcode toolchain** – the only official iOS SDK, which must run on macOS.
2.  **Setting up the Android‑NDK** – used for some of the build scripts.
3.  **Installing the required tools** – such as `cocoapods`, `llvm`, `cmake`, `ninja`, etc.
4.  **Fetching and building the Godot source** – with the `scons` build system.

The process is described in detail below.

---

## 2. Prerequisites

-   **A Linux machine** (Ubuntu 18.04+, Debian, Fedora, Arch, etc.).
-   **A macOS machine** (to host the Xcode toolchain).  
    *You cannot compile iOS binaries directly on Linux without the macOS SDK.*
-   **Git** – to clone the Godot repository.
-   **A recent version of Python 3** (≥ 3.6) – required by `scons`.
-   **OpenSSL, zlib, libpng, and other build dependencies** – see below.

---

## 3. Installing the iOS toolchain on macOS

1.  Install Xcode (any recent release is fine – e.g., Xcode 12.2 or newer) from the App Store or the Apple Developer website.  
2.  Open Xcode once and accept the license.  
3.  Install the command line tools:

    ```bash
    xcode-select --install
    ```

4.  Verify the presence of the SDKs:

    ```bash
    ls /Applications/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/
    ```

    You should see something like `iPhoneOS.sdk`.

---

## 4. Building on Linux

### 4.1 Install required packages

```bash
# Debian/Ubuntu
sudo apt update
sudo apt install \
    build-essential \
    clang \
    cmake \
    ninja-build \
    python3 \
    git \
    libssl-dev \
    zlib1g-dev \
    libpng-dev

# Fedora
sudo dnf install \
    gcc-c++ \
    clang \
    cmake \
    ninja-build \
    python3 \
    git \
    openssl-devel \
    zlib-devel \
    libpng-devel
```

### 4.2 Clone the Godot source

```bash
git clone https://github.com/godotengine/godot.git
cd godot
git checkout <your-desired-branch>
```

### 4.3 Configure the build

Create a `config.pri` file in the root of the repository with the following content:

```ini
# config.pri – iOS cross‑compile configuration

# Path to the Xcode SDK on your macOS machine (used via `rsync` or `scp`)
macos_sdk_path=/path/to/Xcode.app/Contents/Developer/Platforms/iPhoneOS.platform/Developer/SDKs/iPhoneOS.sdk

# Set the target architecture
platform=iOS
arch=arm64

# Use clang as the compiler
CXX=clang++
CXXFLAGS=-std=c++17
```

> **Note**: Adjust `macos_sdk_path` to point to the correct SDK location on your mac.

### 4.4 Build the engine

```bash
scons platform=iphone arch=arm64 production=yes tools=no
```

The command above will generate an `iOS` folder with the compiled binaries and necessary files to create an Xcode project for your Godot game.

---

## 5. Exporting an iOS project

Once the engine is built, you can export a Godot project:

1.  Open the Godot editor on macOS and load your project.  
2.  Go to **Project → Install Android / iOS** → **Export to iOS**.  
3.  Configure the export preset (bundle ID, code signing, etc.).  
4.  Export.  
5.  Open the generated `.xcodeproj` in Xcode and build/run on a device or simulator.

---

## 6. Common Issues

| Problem | Possible Fix |
|---------|--------------|
| **`llvm` not found** | Install the proper LLVM package or set `CXX=clang++` in `config.pri`. |
| **SDK not found** | Verify the `macos_sdk_path` points to the correct directory on your mac. |
| **Missing `openssl`** | Install `libssl-dev` (Debian) or `openssl-devel` (Fedora). |
| **`scons` errors** | Ensure Python 3 is installed and accessible as `python3`. |

---

## 7. Summary

Cross‑compiling Godot for iOS from Linux is possible by leveraging the macOS Xcode toolchain.  The steps involve installing the SDK on macOS, configuring the Linux build environment, and running the appropriate `scons` commands.  After building the engine, you can use the Godot editor on macOS to export a full iOS project.  

For more detailed, up‑to‑date information, consult the official Godot documentation and the community forum.