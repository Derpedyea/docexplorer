**Getting the source**  
========================

The Godot engine is open‑source and hosted on GitHub.  
Before you can build the engine with the SCons build system you need to
download the source tree.  This page explains how to fetch the source,
check out specific releases, and keep your local copy up‑to‑date.

---

### 1. Clone the repository

```bash
# Clone the entire source tree, including all submodules
git clone --recursive https://github.com/godotengine/godot.git
```

> **Tip** – If you only need a *shallow* copy (e.g. for a quick test) you
> can limit the history:

```bash
git clone --depth 1 https://github.com/godotengine/godot.git
```

> **Tip** – When the repository contains many submodules (see
> `submodule` directory), the `--recursive` flag will also fetch all of
> them automatically.

#### Checkout a specific release

```bash
cd godot
git fetch --all --tags
git checkout tags/<TAG_NAME>   # e.g. tags/4.2
```

> If you want to build a development branch:

```bash
git checkout dev
```

### 2. Updating an existing copy

```bash
cd godot
git pull
git submodule update --init --recursive
```

### 3. Alternative: Download a ZIP archive

If you don’t want to use Git:

1. Visit the [Godot GitHub releases page](https://github.com/godotengine/godot/releases).
2. Choose a release and click the **Source code (ZIP)** link.
3. Extract the archive and navigate into the `godot` folder.

> The ZIP contains only the main repository; any optional modules that
> are separate sub‑repositories are not included.

### 4. Building from source

> After obtaining the source, see the *Introduction to the buildsystem* page
> for a step‑by‑step guide on compiling Godot with SCons.

### 5. Submodules

The Godot source tree contains a number of sub‑modules (e.g.
`modules`, `platforms`, `thirdparty`).  When cloning or pulling the
repository, Git automatically fetches these sub‑modules if the
`--recursive` flag is used.  If you forget the flag, you can initialise
the sub‑modules later:

```bash
git submodule init
git submodule update
```

---

**Links**

- [Godot GitHub repository](https://github.com/godotengine/godot)  
- [Godot releases page](https://github.com/godotengine/godot/releases)  

---