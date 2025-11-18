# Optimizing a build for size

Optimizing a Godot build for size is useful when you need the smallest possible executable (e.g. embedded devices or thin‑client WebAssembly builds).  
Instead of simply compiling a release build, you want to:

* Strip out all unused functions and data from the engine.  
* Use compiler and linker flags that favor a small binary over performance.  

Below is a quick guide to get you started, with the most commonly used options for each platform and compiler.

---

## 1.  Rationale

When you compile Godot for speed, the compiler uses aggressive inlining, vectorisation, and optimisation flags that can increase binary size.  
For a size‑optimised build you need to:

| Goal | Typical flags |
|------|---------------|
| Small binary | `-Os`, `-Oz` (GCC/Clang) |
| Strip symbols | `-s` (GCC/Clang) / `strip` (MSVC) |
| Remove debug info | `-g0` or `-g` omitted |

---

## 2.  Using SCons for size‑optimised builds

Godot uses the SCons build system.  The standard `scons` command accepts a `BUILD_FLAGS` variable that is passed to the compiler.  

Example for a generic build that prioritises size:

```bash
scons platform=windows target=release PROFILE=debug BUILD_FLAGS="-Os -s"
```

The `PROFILE=debug` flag keeps the debug symbols that SCons usually removes from a *release* build (useful for debugging size issues).

---

## 3.  Compiler‑specific flags

### GCC / Clang

| Flag | Purpose |
|------|---------|
| `-Os` | Optimise for size. |
| `-Oz` | Aggressive optimisation for size (available on newer Clang). |
| `-fno-exceptions` | Disable exception handling to cut code size. |
| `-fvisibility=hidden` | Hide non‑public symbols, reducing the exported symbol table. |
| `-s` | Strip debugging symbols from the output. |

Typical command line:

```bash
scons platform=linux target=release BUILD_FLAGS="-Os -fno-exceptions -fvisibility=hidden -s"
```

### MSVC

| Flag | Purpose |
|------|---------|
| `/O1` | Optimise for size (instead of speed). |
| `/Ob0` | Disable inlining. |
| `/GS-` | Disable buffer‑security checks (may slightly reduce binary size). |
| `/MD` | Use the DLL version of the C runtime (smaller than the static one). |
| `/Zl` | Omit the Microsoft runtime library from the output, so you can link it separately. |
| `/Zi-` | Disable debug information. |

Typical command line:

```bash
scons platform=windows target=release BUILD_FLAGS="/O1 /Ob0 /GS- /MD /Zl"
```

---

## 4.  Strip the binary

After building, you can further reduce the executable size by stripping symbols:

- **Linux / macOS (GCC/Clang)**  
  ```bash
  strip --strip-all path/to/godot
  ```

- **Windows**  
  ```bat
  strip.exe --strip-all godot.exe
  ```

- **WebAssembly**  
  Use `wasm-opt -Oz` from Binaryen to reduce the `.wasm` file.

---

## 5.  Removing unused modules and features

Godot can compile many optional modules.  Turning them off removes a large chunk of code.

* Edit `modules/` in the engine source: delete modules you never use or set their `enabled` flag to `false` in `modules.cfg`.  
* Use the **Engine Configuration** tool (in `editor/` or by `scons platform=... target=release CONFIG=release` with a custom config file).  
* Example: disable the GLES2 renderer (if you only need Vulkan):  

  ```bash
  scons platform=linux target=release BUILD_FLAGS="-Os" \
      GLES2_ENABLED=false
  ```

---

## 6.  Example build commands

| Platform | Command |
|----------|---------|
| **Linux** | `scons platform=linux target=release BUILD_FLAGS="-Os -s"` |
| **macOS** | `scons platform=osx target=release BUILD_FLAGS="-Os -s"` |
| **Windows** | `scons platform=windows target=release BUILD_FLAGS="/O1 /Ob0 /GS- /MD /Zl"` |
| **Android (AOT)** | `scons platform=android target=release BUILD_FLAGS="-Os -s" PLATFORM_ANDROID_ARMV7A=true` |
| **Web** | `scons platform=web target=release BUILD_FLAGS="-Os -s"` and then `wasm-opt -Oz godot.wasm -o godot.min.wasm` |

---

## 7.  Tips & pitfalls

| Issue | Solution |
|-------|----------|
| Binary size still large after `-Os` | Enable `-fno-exceptions`, `-fvisibility=hidden`, and strip unused modules. |
| Debugging crashes in size build | Build a separate *debug‑size* variant: `PROFILE=debug` keeps symbols but still uses `-Os`. |
| Missing symbols after `-fvisibility=hidden` | Expose the needed symbols with `__attribute__((visibility("default")))`. |
| WebAssembly size too big | Use `EMCC_OPT_LEVEL=3`, `-Oz`, and `wasm-opt -Oz`. |
| Windows 32‑bit builds are huge | Use `/MTd` or `/MT` appropriately, or compile for 64‑bit if possible. |

---

## 8.  Summary

* Use the compiler’s *size* optimisation flag (`-Os` / `-O1`).  
* Strip symbols and debug information.  
* Disable unused modules and features.  
* Strip the final binary.  

With these steps you can get a significantly smaller Godot build that still retains all functionality you need.