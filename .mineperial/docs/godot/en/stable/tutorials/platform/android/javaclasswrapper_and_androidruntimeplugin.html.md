**Integrating with Android APIs**  
*Godot Engine Documentation (Stable)*

> This article explains how to call Android Java APIs and write Android runtime plugins from Godot using the Java Class Wrapper and Android Runtime Plugin systems. It covers the required folder structure, build steps, Java and Kotlin code samples, and how to register your plugin in `plugin.cfg`.  

---

## 1. Overview

Godot allows you to extend its functionality on Android by

- **Calling existing Android APIs** through the Java Class Wrapper.
- **Implementing custom code** that runs on the Android runtime using an Android Runtime Plugin (ARPP).

Both approaches require a minimal Android project layout inside your Godot project and the `gradle` build system.

---

## 2. Java Class Wrapper

### 2.1 What it is

A *Java Class Wrapper* is a thin Godot-side interface that exposes Java class methods to GDScript via the `JavaClass` singleton.

### 2.2 Folder layout

```
res://android/
├─ src/
│  └─ main/
│     ├─ java/
│     │  └─ org/
│     │     └─ godot/
│     │        └─ demo/
│     │           └─ MyJavaWrapper.java
│     └─ res/
├─ AndroidManifest.xml
├─ build.gradle
└─ gradle.properties
```

### 2.3 Example Java class

```java
package org.godot.demo;

import android.content.Context;
import android.widget.Toast;
import org.godotengine.godot.GodotLib;

public class MyJavaWrapper {
    private Context context;
    private GodotLib godotLib;

    public MyJavaWrapper(GodotLib godotLib, Context context) {
        this.godotLib = godotLib;
        this.context = context;
    }

    public void showToast(String msg) {
        Toast.makeText(context, msg, Toast.LENGTH_SHORT).show();
    }
}
```

### 2.4 Registering the wrapper

Add a reference to the class in `plugin.cfg`:

```
[gd_resource type="JavaClass" load_steps=1]
resource="res://android/src/main/java/org/godot/demo/MyJavaWrapper.java"
```

In GDScript:

```gdscript
var java = JavaClass.new()
java.showToast("Hello from Android!")
```

---

## 3. Android Runtime Plugin (ARPP)

### 3.1 What it is

An ARPP is a full Android module compiled into a `.aar` and loaded by Godot at runtime. It can contain any Java/Kotlin code, resources, and native libraries.

### 3.2 Folder layout

```
res://android/
├─ plugin/
│  ├─ build.gradle
│  ├─ src/
│  │  └─ main/
│  │     ├─ java/
│  │     │  └─ org/godot/demo/
│  │     │     └─ MyPlugin.java
│  │     └─ res/
├─ plugin.cfg
```

### 3.3 Example plugin

```java
package org.godot.demo;

import android.app.Activity;
import org.godotengine.godot.GodotPlugin;

public class MyPlugin extends GodotPlugin {
    public MyPlugin(Activity activity) {
        super(activity);
    }

    @Override
    public String getPluginName() {
        return "MyPlugin";
    }

    public void customMethod() {
        // Your native Android code here
    }
}
```

### 3.4 Building the AAR

1. Run `./gradlew assembleDebug`.
2. The AAR will be located at `plugin/build/outputs/aar/plugin-debug.aar`.

### 3.5 Loading the plugin in Godot

In `plugin.cfg`:

```
[gd_resource type="AndroidRuntimePlugin" load_steps=1]
resource="res://android/plugin/build/outputs/aar/plugin-debug.aar"
```

In GDScript:

```gdscript
var plugin = load("res://android/plugin/MyPlugin")
plugin.customMethod()
```

---

## 4. Building and Running

1. **Set up Gradle**: Make sure `gradlew` and `gradlew.bat` are present.  
2. **Sync project**: Godot automatically runs Gradle when the project is exported to Android.  
3. **Export**: Use the Android export template.  

---

## 5. Common Issues

| Problem | Cause | Fix |
|---------|-------|-----|
| `ClassNotFoundException` | Wrong package path | Verify `package` and folder names match |
| `Method not found` | Method signature mismatch | Re‑compile plugin after changes |
| `Missing permission` | AndroidManifest missing | Add permissions in `AndroidManifest.xml` |

---

## 6. Further Reading

- [Android plugins](/tutorials/platform/android/android_plugins.html)  
- [Godot Android SDK](/getting_started/handbook/extension.html)

--- 

*End of tutorial*