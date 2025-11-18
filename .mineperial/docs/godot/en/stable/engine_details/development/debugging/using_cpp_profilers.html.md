**Using C++ profilers** – Godot Engine (stable) Documentation  
==================================================================

Profiling is essential for understanding where a game or engine spends its time.  
This guide covers the most common profilers used with the Godot C++ engine and shows you how to set them up on each supported platform.

> **TL;DR**  
> • Windows: **VerySleepy** (or *PerfView* for deeper analysis).  
> • Linux: **HotSpot** (or *perf*).  
> • macOS: **Xcode Instruments** (or *Instruments* / *perfetto*).  
> • All platforms: **Godot’s built‑in profiler** (`Project > Project Settings > Rendering > Debug > Enable Profiler`).

---

## Table of Contents

1.  [Prerequisites](#prerequisites)
2.  [Recommended Profiler Packages](#recommended-profilers)
3.  [Platform‑specific Setup](#platform-specific-setup)
    -   Windows
    -   Linux
    -   macOS
4.  [Using Godot’s Built‑in Profiler](#using-godots-built‑in-profiler)
5.  [Analyzing Results](#analyzing-results)
6.  [Tips & Common Pitfalls](#tips-and-common-pitfalls)
7.  [Further Reading](#further-reading)

---

## 1. Prerequisites

| Tool | Purpose | Notes |
|------|---------|-------|
| **Godot 4** | Engine to profile | Compile with `–g` and `–O3` for realistic results. |
| **Visual Studio 2022** | Windows compiler + debugger | Only necessary if you need source‑level profiling. |
| **gcc/clang** | Linux/macOS compilers | Make sure the debug symbols (`-g`) are kept. |
| **CMake** | Build system (optional) | For custom engines or third‑party modules. |

---

## 2. Recommended Profiler Packages

| Platform | Profiler | Usage | Example |
|----------|----------|-------|---------|
| Windows | **VerySleepy** | Lightweight CPU profiler | `VerySleepy.exe --pid <PID> --output prof.txt` |
| Windows | **PerfView** | Advanced tracing + heap profiling | `PerfView.exe -stackwalk -d prof.etl` |
| Linux | **HotSpot** | Simple flame‑graph generator | `HotSpot <PID> -o flame.svg` |
| Linux | **perf** | Full CPU/performance counters | `perf record -F 99 -a -g -- <executable>` |
| macOS | **Instruments (Xcode)** | GUI profiler with CPU, GPU, memory | `instruments -t "Time Profiler" <app>` |
| macOS | **perfetto** | Cross‑platform tracing | `perfetto --trigger <app>` |

> **Choosing a tool** – Use a lightweight profiler for quick feedback (`VerySleepy` / `HotSpot`).  
> For detailed call‑stack and memory allocation analysis, pick a more powerful tool (`PerfView`, `perf`, `Instruments`, or `perfetto`).

---

## 3. Platform‑specific Setup

### Windows

1.  **Build with debug symbols** – In SCons, set `profile = "debug"` or add `-g` to the CXX flags.  
2.  **Start the engine** – Run `godot.exe` in the console to keep the PID visible.  
3.  **Attach the profiler** –  
    ```bash
    VerySleepy.exe --pid <PID> --output prof.txt
    ```  
4.  **Generate flame graph** (optional):  
    ```bash
    verysleepy --parse prof.txt --output flame.svg
    ```

### Linux

1.  `make profile` (or `scons profile=yes -j4`) to enable profiling flags.  
2.  Run the engine: `./bin/godot`.  
3.  Profile using **HotSpot**:  
    ```bash
    HotSpot <PID> -o flame.svg
    ```
4.  For `perf`:  
    ```bash
    sudo perf record -F 99 -a -g -- ./bin/godot
    sudo perf report
    ```

### macOS

1.  Build with `–g` and `–O3`.  
2.  Open Xcode > **Open Developer Tools** > **Instruments**.  
3.  Choose the **Time Profiler** template, then click **Record** and launch Godot.  
4.  After recording, examine the **Call Tree** and **CPU Usage** sections.

> *Tip:* macOS also supports `perf` if you compile with the `llvm` toolchain and install the `perf` package via Homebrew.

---

## 4. Using Godot’s Built‑in Profiler

Godot includes a lightweight profiler accessible from the editor.

```text
Project → Project Settings → Rendering → Debug → Enable Profiler
```

*Run the game:*  
- Press **F5** to launch.  
- In the editor’s **Debugger** panel, switch to the **Profiler** tab.  

The profiler shows:

- **Frames per second**  
- **GPU vs. CPU usage**  
- **Call stack heat‑map** (color‑coded by time spent)

> **Exporting Data** – Click the **Export** icon to save a CSV file for external analysis.

---

## 5. Analyzing Results

1. **Identify hot functions** – Look for entries that consume a large fraction of frame time.  
2. **Check recursion** – Excessive recursion often leads to stack overflows or performance stalls.  
3. **Memory allocation hotspots** – Use heap profilers (PerfView, Instruments, or `-m` flag in `gperftools`).  
4. **GPU stalls** – If the CPU usage is low but frame rate is still poor, investigate GPU bottlenecks.

Example flame‑graph snippet:

```svg
<svg> ... </svg>
```

You can view it in any browser or convert to a PNG for reporting.

---

## 6. Tips & Common Pitfalls

| Problem | Fix | Explanation |
|---------|-----|-------------|
| Profiler slows game | Run in release build (`–O3`) | Debug builds add extra overhead. |
| Profiler shows no data | Ensure symbols are present | Compile with `-g` and avoid stripping symbols. |
| Windows crash after profiling | Update Visual Studio and MSVC toolset | Older toolsets may not support new debug APIs. |
| Linux profiling takes too long | Reduce sampling frequency (`-F 99` → `-F 49`) | Lowering the frequency reduces overhead. |

---

## 7. Further Reading

- [Using sanitizers](using_sanitizers.html) – Detect memory and threading bugs.  
- [Debugging and profiling](index.html) – Overview of Godot’s debug tools.  
- [Godot Engine source](https://github.com/godotengine/godot) – Inspect profiling hooks.  

---

**Enjoy finding those performance bottlenecks!**