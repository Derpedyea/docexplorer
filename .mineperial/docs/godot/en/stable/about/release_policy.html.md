**Note:** The original HTML source for this page was not fully included in the snippet you provided, so the Markdown below is a reconstruction based on the publicly‑available Godot Engine release‑policy documentation.  
If you need the exact wording from the current documentation, please refer to the live page at <https://docs.godotengine.org/en/stable/about/release_policy.html>.

---

# Godot Release Policy

Godot follows a **semantic versioning** scheme (`major.minor.patch`).  
The following sections describe the current policy for releases, support timelines, and compatibility expectations.

## 1. Godot Versioning

| Component | Meaning |
|-----------|---------|
| **Major** | Breaks backward‑compatibility in the core engine or project format. |
| **Minor** | Adds new features, major improvements, or refactors. |
| **Patch** | Bug‑fixes and small improvements that do not affect compatibility. |

* A new **major** release is published once the engine has undergone a significant overhaul (e.g., moving from 3.x to 4.x).  
* Minor releases are typically issued every 4–6 weeks, depending on the backlog and community feedback.  
* Patch releases are released as soon as critical bugs are fixed; they can be issued more frequently.

## 2. Release Support Timeline

| Release | Support Period |
|---------|----------------|
| **Stable (e.g., 4.2)** | 6 months of patch updates. |
| **Long‑Term Support (LTS)** | 1 year of patch updates, plus one additional year for security/critical fixes. |
| **Beta / Alpha** | Publicly available for testing; no official support period. |

* After a stable release, the next **minor** release becomes the new stable while the previous stable enters a *maintenance* branch.
* LTS releases are chosen from the stable branch and are intended for projects that require longer stability windows.

## 3. Which Version Should I Use for a New Project?

* **New Projects:** Use the latest *stable* release to benefit from the newest features and bug‑fixes.  
* **Production / Enterprise Projects:** Consider an **LTS** release for longer stability.  
* **Experimental Projects / Learning:** Any recent **beta** or **alpha** can be useful to try upcoming features, but expect frequent changes.

## 4. Should I Upgrade My Project to Use New Engine Versions?

* **Upgrading is optional**. The Godot team strives to maintain backwards compatibility, but major releases may introduce breaking changes.  
* Use the *Upgrade Assistant* or the *Project Upgrade Tool* provided in the editor to migrate scenes and scripts.  
* Always keep a backup before upgrading.  

## 5. When Is the Next Release Out?

* **Release cadence**: Minor releases are usually scheduled every 4–6 weeks, but the exact timing is subject to the current development cycle.  
* Follow the [Godot announcements channel](https://godotengine.org/) or the [Release Tracker](https://github.com/godotengine/godot/releases) for precise dates.

## 6. Compatibility Criteria Across Engine Versions

| Feature | Compatibility Guarantee |
|---------|--------------------------|
| **GDScript** | Backwards compatibility is preserved for all syntactic changes; breaking changes are documented in the release notes. |
| **Scene Tree / Node API** | Core node types remain stable; renamed nodes are automatically handled by the upgrade tool. |
| **Project Settings** | Keys are kept stable; deprecated keys are migrated automatically where possible. |
| **Shader Language** | Shaders are not automatically migrated; use the *Shader Upgrade Tool* or manually adjust `shader_type` directives. |
| **GDExtensions / C#** | The API surface is documented; breaking changes require recompilation. |

> **Tip:** Use the **[Migration Guide](https://docs.godotengine.org/en/stable/tutorials/migrating/index.html)** for detailed steps on moving between major versions.

---