# Complying with licenses

Godot is an open‑source game engine that is distributed under the MIT license.  
Because the engine is made from contributions from many people, the license
requirements apply not only to Godot itself but also to any third‑party
libraries and tools that are bundled with it or that you include in your own
projects.

Below is a concise guide to what you need to know and how to comply with the
licensing terms when you use or redistribute Godot.

---

## What are licenses?

* **MIT license** – The Godot engine and all of its source code are released
  under the MIT license.  This is a permissive license that allows free use,
  modification, and distribution of the code, provided that the original
  copyright notice and license text are retained.

* **Contributor license agreements** – Every person who submits code to the
  Godot repository must agree to distribute that code under the same MIT
  license.

* **Third‑party libraries** – The engine also contains various third‑party
  libraries (e.g. OpenSSL, libpng, etc.) that are licensed under different
  terms.  These terms must also be respected in any distribution that
  contains those components.

---

## Requirements

| Requirement | What to do | Where to put it |
|-------------|------------|----------------|
| **Include the MIT license** | Copy the full `LICENSE` file that ships with Godot into your project’s root directory. | Project root |
| **Attribute Godot** | Add a credits screen or an “About” dialog that lists Godot as a dependency. | In‑game UI |
| **List third‑party licenses** | Provide a separate `THIRD_PARTY_LICENSES.txt` file or an “Open Source Licences” screen that enumerates each library and its license. | Project root / UI |
| **Keep license files with source** | If you ship the Godot source with your own project (e.g. for a custom build), ensure the license files are bundled as well. | Source tree |
| **Link to the license** | In the “About” or “Credits” screen, link to the MIT license text (or host it locally). | UI |

---

## Inclusion

### Credits screen

* Add a screen that lists the engine name, version, and a short note that
  the game uses Godot Engine.
* A typical format:
  ```text
  This game uses Godot Engine
  Version: 4.x.x
  Engine: MIT License
  ```
  Place it in the “Settings” or “Help” menu of your game.

### Licenses screen

* Provide a dedicated screen that lists the MIT license and all third‑party
  licenses.
* For each third‑party component, include a short description and the
  license text or a link to it.
* Example entry:
  ```
  libpng 1.6.37
  Copyright (c) 1996-2018, Guy Eric Schalne
  Licensed under the BSD 3‑Clause License
  ```

### Output log

* When you start the engine (e.g. `godot --log`), it prints a banner that
  contains the MIT license notice and a short list of included libraries.
* For custom builds, you can add your own banner to the console output.

### Accompanying file

* Distribute a plain‑text file called `LICENSES.txt` in the top‑level
  directory of your distribution.
* This file should contain the full MIT license for Godot and the license
  texts for all third‑party components.

### Printed manual

* If you publish a printed manual or a PDF that contains excerpts from
  Godot’s source code, you must include the license text in the
  acknowledgments or at the back of the manual.

### Link to the license

* In any UI element that talks about “About” or “Credits”, provide a clickable
  link to `LICENSE` or the MIT license text that is included in the
  distribution.

---

## Third‑party licenses

Below is a non‑exhaustive list of common third‑party libraries bundled with
Godot and their respective licenses.  Make sure to consult the
`THIRD_PARTY_LICENSES.txt` file that ships with the engine for a complete
list.

| Library | Version | License |
|---------|---------|---------|
| **OpenSSL** | 1.1.1 | Apache License 2.0 |
| **libpng** | 1.6.37 | BSD 3‑Clause |
| **zlib** | 1.2.11 | zlib License |
| **libjpeg** | 9d | JPEG License |
| **libtiff** | 4.0.9 | libtiff License |
| **ICU** | 67.1 | ICU License |
| **Freetype** | 2.10.0 | FreeType License |
| **LibSndFile** | 1.0.29 | BSD 3‑Clause |
| **GLSLang** | 10.3.2 | MIT License |
| **SQLite** | 3.32.3 | Public Domain |
| **BZip2** | 1.0.6 | BZip2 License |
| **LZ4** | 1.9.2 | BSD 3‑Clause |
| **libjpeg-turbo** | 2.1.3 | BSD 2‑Clause |

> **Tip:** Use the `godot --license` command to output all licenses
> automatically; this can be redirected to a file for inclusion in your
> distribution.

---

**Note:** The information above is a summary.  For the exact wording and
full list of licenses, refer to the official Godot source tree and the
documentation pages.