**NOTE**: The following Markdown captures the main structure and purpose of the “Engine development” documentation page.  
It includes the page title, introductory description, and an outline of the key sub‑pages that are linked from this index.  All links are relative to the current documentation root.

---

# Engine development

The **Engine development** section contains guides for working on the Godot engine’s codebase.  
If you plan to contribute, be sure to also review the [Contribution Guidelines](/contributing/index.html).

> **What you’ll find here**  
> • Configuring an IDE  
> • Building the engine from source  
> • Running the unit test suite  
> • Debugging the engine and its subsystems  
> • Working with the engine’s documentation generator  
> • Using the build and CI tools  

> **Prerequisites**  
> • Basic familiarity with C++ and the Godot codebase structure.  
> • A working Git installation and the ability to compile on your platform.  

> **Additional resources**  
> • [Godot Contribution Guidelines](/contributing/index.html)  
> • [Godot CI documentation](/ci/index.html)  

---

## Table of Contents

| Section | Link |
|---------|------|
| **Configuring an IDE** | [`configuring_an_ide/index.html`](configuring_an_ide/index.html) |
| **Building the engine** | [`building/index.html`](building/index.html) |
| **Running the test suite** | [`unit_testing/index.html`](unit_testing/index.html) |
| **Debugging the engine** | [`debugging/index.html`](debugging/index.html) |
| **Documentation generation** | [`docs_generation/index.html`](docs_generation/index.html) |
| **Release process** | [`release_process/index.html`](release_process/index.html) |
| **Contributing** | [`contributing/index.html`](contributing/index.html) |

> *All of the above topics are also available in the Godot documentation’s navigation panel for quick access.*

---

### 1. Configuring an IDE

- Overview of supported editors (VS Code, CLion, Visual Studio, etc.).  
- C++ language server setup for auto‑completion and diagnostics.  
- Configuring the debugger and run configurations.

> 👉 Learn more: [`configuring_an_ide/index.html`](configuring_an_ide/index.html)

### 2. Building the engine

- System requirements and dependency installation.  
- The SCons build system – how it works and how to customize it.  
- Building for different platforms (Windows, Linux, macOS, Android, etc.).

> 👉 Learn more: [`building/index.html`](building/index.html)

### 3. Unit testing

- Test harness overview.  
- Adding new unit tests.  
- Running tests locally and in CI.

> 👉 Learn more: [`unit_testing/index.html`](unit_testing/index.html)

### 4. Debugging

- In‑process vs. external debugging.  
- Common debugging techniques and tools.  
- Profiling the engine and identifying bottlenecks.

> 👉 Learn more: [`debugging/index.html`](debugging/index.html)

### 5. Documentation generation

- Sphinx‑based documentation workflow.  
- Writing extension docs and keeping them in sync.  
- Publishing and maintaining the online docs.

> 👉 Learn more: [`docs_generation/index.html`](docs_generation/index.html)

### 6. Release process

- Versioning scheme and release policy.  
- Build artifacts and signing.  
- Roll‑back and patching procedure.

> 👉 Learn more: [`release_process/index.html`](release_process/index.html)

### 7. Contributing

- Pull‑request workflow.  
- Code style guidelines.  
- How to submit patches and report bugs.

> 👉 Learn more: [`contributing/index.html`](contributing/index.html)

---

> **Next topic**: [Configuring an IDE](/engine_details/development/configuring_an_ide/index.html)  
> **Previous topic**: [Unit Testing](/engine_details/development/unit_testing.html)

---

*For more detailed information on any of the topics above, click the links or browse the navigation pane on the left.*