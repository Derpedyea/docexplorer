**Gradle builds for Android** – Godot Engine Documentation (stable)  
=======================================================================

> **NOTE**: The original HTML page contains a large amount of navigation and boilerplate that is not part of the core tutorial content. The following Markdown has been extracted and cleaned from the article itself.  

---

## Overview

Godot 4.0+ allows you to build Android projects using the Gradle build system instead of the pre‑packaged template that ships with the editor.  
With Gradle you get full control over the Java/Kotlin code, Gradle plugins, build flavors, signing, and integration with external Android libraries.

---

## Prerequisites

| Item | Description |
|------|-------------|
| **Java JDK 17+** | The JDK required by the Gradle plugin that Godot uses. |
| **Android SDK** | Installed via the Android Studio or `sdkmanager`. |
| **Android NDK** | Required if you plan to use Godot’s C++ modules or custom native code. |
| **Gradle** | Either use the bundled Gradle wrapper (`gradlew`) or install a recent Gradle version. |

> **Tip**: Make sure `JAVA_HOME`, `ANDROID_HOME`, and `PATH` are set correctly so that Godot can locate the SDK and NDK.

---

## Project structure

When you enable Gradle export in Godot, the following directories are created inside your project folder:

```
/android-gradle/
├─ app/
│  ├─ src/
│  │  ├─ main/
│  │  │  ├─ java/          <-- Java/Kotlin source
│  │  │  ├─ res/           <-- Android resources
│  │  │  └─ AndroidManifest.xml
│  ├─ build.gradle
│  └─ gradle.properties
├─ build.gradle
└─ settings.gradle
```

* `android-gradle/app/build.gradle` – module‑specific build configuration.  
* `build.gradle` – root‑project Gradle file (defines common settings, plugins).  
* `gradle.properties` – properties for the Gradle wrapper.

---

## Configuring Gradle

### 1. `build.gradle` (root)

```groovy
plugins {
    id 'com.android.application' version '7.4.2' apply false
    id 'org.jetbrains.kotlin.android' version '1.8.20' apply false
}

subprojects {
    // Configure common repository sources
    repositories {
        google()
        mavenCentral()
    }
}
```

### 2. `android-gradle/app/build.gradle`

```groovy
apply plugin: 'com.android.application'

android {
    compileSdk 34

    defaultConfig {
        applicationId "org.godotengine.mygame"
        minSdk 21
        targetSdk 34
        versionCode 1
        versionName "1.0"
        // Godot binary location (automatically inserted by Godot)
        // …
    }

    buildTypes {
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'),
                          'proguard-rules.pro'
        }
        debug {
            applicationIdSuffix ".debug"
            debuggable true
        }
    }
}

dependencies {
    implementation fileTree(dir: 'libs', include: ['*.jar'])
    // Add extra libraries here, e.g.
    // implementation 'com.google.android.gms:play-services-ads:21.0.0'
}
```

> **Tip**: The `applicationId` must match the `package_name` set in Godot’s *Project Settings → Android → Package/Bundle Identifier*.

### 3. `gradle.properties`

```properties
org.gradle.jvmargs=-Xmx4g
android.useAndroidX=true
android.enableJetifier=true
```

---

## Exporting with Gradle

1. **Enable Gradle in Godot**  
   * Go to *Project → Export → Android → Android Gradle Project* (or simply click **Export Project** and pick the Gradle option).  
2. **Export**  
   * Godot will copy its own `AndroidManifest.xml`, `libgodot.so`, and other resources into the `app/src/main` directory and generate the `build.gradle` files if they are missing.
3. **Build**  
   ```bash
   cd android-gradle
   ./gradlew assembleDebug   # or assembleRelease for a signed build
   ```
4. **Run**  
   ```bash
   adb install -r app/build/outputs/apk/debug/app-debug.apk
   ```

---

## Signing the APK / App Bundle

Add the following to `android-gradle/app/build.gradle` inside the `signingConfigs` block:

```groovy
signingConfigs {
    release {
        keyAlias 'mykey'
        keyPassword 'keypass'
        storeFile file('/path/to/keystore.jks')
        storePassword 'storepass'
    }
}
```

And enable it for the release build type:

```groovy
buildTypes {
    release {
        signingConfig signingConfigs.release
        ...
    }
}
```

---

## Common Gradle tasks

| Task | Description |
|------|-------------|
| `./gradlew assembleDebug` | Builds a debug APK. |
| `./gradlew assembleRelease` | Builds a signed release APK. |
| `./gradlew bundleDebug` | Generates a debug App Bundle (`.aab`). |
| `./gradlew clean` | Cleans all generated artifacts. |
| `./gradlew installDebug` | Installs the debug build on a connected device. |

---

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---------|--------------|-----|
| `Error: Could not find com.android.tools.build:gradle` | Wrong Gradle wrapper or missing `buildscript` dependencies | Add `classpath 'com.android.tools.build:gradle:7.4.2'` to the root `build.gradle`. |
| `Failed to find target with hash string` | SDK not installed or wrong `compileSdk` | Install the requested SDK level using `sdkmanager`. |
| `libgodot.so` not found | Godot export not copied properly | Re‑export the project and verify `app/src/main/assets/` contains the binary. |

---

## Next steps

* **Add custom Java/Kotlin code** – write native Android logic in `app/src/main/java/` and call it from Godot via the GDNative API or Android Native Interface.
* **Use external libraries** – add `implementation` dependencies in `app/build.gradle` and make sure the library’s native binaries are included.
* **Integrate with Play Services** – add the appropriate Gradle dependencies and configure your `AndroidManifest.xml` permissions.

---

*For more advanced usage such as Gradle flavors, signing with multiple keystores, or using the Android Studio UI, consult the official Android documentation and the Gradle plugin guide.*