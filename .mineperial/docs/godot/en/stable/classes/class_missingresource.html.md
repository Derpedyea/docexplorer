**MissingResource**  
=====================

> *Internal editor class intended for keeping the data of unrecognized resources.*

### Inheritance

```
MissingResource → Resource → RefCounted → Object
```

### Description
`MissingResource` is a lightweight internal class used by the Godot editor to store data for resources that the editor cannot recognize. It does not expose a public API for general use; instead, it serves as a placeholder to preserve unknown resource information during project loading and editing.

> *This is an internal editor class intended for keeping the data of unrecognized resources.*

---

#### Available Members

*The `MissingResource` class is largely opaque and does not expose custom properties, methods, or signals beyond those inherited from `Resource`.*

If you encounter a `MissingResource` in your project, it typically indicates that a resource file was loaded that does not match any known Godot resource type. The editor will keep the raw data around so that it can be preserved across saves and loads, but it cannot be interacted with directly in the usual way.

---