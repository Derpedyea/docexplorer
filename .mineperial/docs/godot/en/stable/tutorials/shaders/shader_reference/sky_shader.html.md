# Sky shaders

Sky shaders are a special type of shader used for drawing sky backgrounds and for updating radiance cubemaps which are used for image‑based lighting (IBL).  
Unlike most shaders, sky shaders only have one processing function, **fragment()**, and run on the GPU for every direction from the camera. They are written in the same shading language as other Godot shaders, but are bound to a **Sky** resource and can be used with a *WorldEnvironment* node.

> **Note**  
> In Godot 4 the sky shader API has been updated to support a more flexible sky material system.  
> This document covers the current stable API; see the [Godot 4 migration guide] for changes in earlier versions.

---

## 1.  Basic sky shader

A minimal sky shader looks like this:

```glsl
shader_type sky;

uniform vec3  sun_position : hint_direction;
uniform float sun_zenith = 1.0;
uniform float sun_size = 0.01;

uniform vec3  horizon_color : hint_color;
uniform vec3  zenith_color : hint_color;

void fragment() {
    // Direction from the camera into the sky.
    vec3 dir = normalize(VIEW_DIR);

    // Simple linear blend between horizon and zenith based on Y coordinate.
    float t = dir.y * 0.5 + 0.5;            // 0 → horizon, 1 → zenith
    ALBEDO = mix(horizon_color, zenith_color, t);

    // Optional sun
    vec3 sun_dir = normalize(sun_position);
    float sun_luminance = clamp(dot(dir, sun_dir), 0.0, 1.0);
    ALBEDO += vec3(1.0, 0.9, 0.6) * sun_luminance * sun_zenith;
}
```

### 1.1  What `VIEW_DIR` is

`VIEW_DIR` is a built‑in uniform containing the direction vector from the camera to the point being shaded in world space. In a sky shader this represents the direction in the sky that the pixel corresponds to.

---

## 2.  Sky shader parameters

| Parameter | Type | Hint | Description |
|-----------|------|------|-------------|
| `sun_position` | `vec3` | `hint_direction` | Direction of the sun in world space. |
| `sun_zenith` | `float` |  | Brightness multiplier of the sun. |
| `sun_size` | `float` |  | Size of the sun disc (unused in the example). |
| `horizon_color` | `vec3` | `hint_color` | Color at the horizon. |
| `zenith_color` | `vec3` | `hint_color` | Color at the zenith. |
| `sky_transform` | `mat4` | `hint_transform` | Transform for mapping the direction to UVs in the sky texture. |
| `sky_texture` | `samplerCube` |  | Cube map that contains pre‑filtered sky data (used by IBL). |

> **Tip** – In most cases you’ll want to use the built‑in *sky* uniforms instead of hard‑coding colors.  
> These can be set from the inspector on the *Sky* resource or via a script:

```gdscript
var sky : Sky = $WorldEnvironment.environment.sky
sky.set_shader_parameter("horizon_color", Color(0.2, 0.4, 0.7))
sky.set_shader_parameter("sun_position", Vector3(0, 1, 0))
```

---

## 3.  Using sky shaders with *WorldEnvironment*

1. Create a new **WorldEnvironment** node in your scene.  
2. In the **Environment** property, click *New Environment*.  
3. Open the *Environment* inspector and set the **Sky** property to **New Sky**.  
4. In the *Sky* inspector choose **Sky Material** and set it to the shader resource you created.  
5. The sky will now be rendered automatically by the renderer.  

If you also want to use the sky for IBL:

* Enable **Use Sky** in the *Environment* settings.  
* In the *WorldEnvironment* inspector set **Use Sky** to *IBL*.  
* Optionally set a **Sky Mode** (*CubeMap*, *Procedural*, etc.) and provide a **Sky Texture**.

---

## 4.  Advanced examples

### 4.1  Procedural atmospheric scattering

The following shader uses a simple atmospheric scattering model to generate a realistic day‑night cycle.

```glsl
shader_type sky;

uniform vec3 sun_position : hint_direction;
uniform vec3 sun_color : hint_color = vec3(1.0, 0.9, 0.8);
uniform float sun_intensity = 10.0;

uniform vec3 top_color : hint_color = vec3(0.6, 0.7, 1.0);
uniform vec3 bottom_color : hint_color = vec3(0.2, 0.3, 0.5);
uniform float density = 0.5;

vec3 atmospheric_scatter(vec3 dir) {
    float t = max(dot(dir, vec3(0,1,0)), 0.0);
    vec3 base = mix(bottom_color, top_color, t);
    return base + sun_color * sun_intensity * max(dot(dir, normalize(sun_position)), 0.0) * density;
}

void fragment() {
    ALBEDO = atmospheric_scatter(VIEW_DIR);
}
```

### 4.2  HDR sky with cubemap

If you have a high‑dynamic‑range cube map, you can use it directly for IBL and also sample it for the sky color:

```glsl
shader_type sky;

uniform samplerCube sky_texture;
uniform vec3 sun_position : hint_direction;

void fragment() {
    vec3 dir = normalize(VIEW_DIR);
    ALBEDO = texture(sky_texture, dir).rgb;
}
```

---

## 5.  Common pitfalls

| Problem | Cause | Fix |
|---------|-------|-----|
| Sky doesn’t fill the background | `WorldEnvironment` not added or Sky not assigned | Add a **WorldEnvironment** node and assign the Sky material in the Environment inspector. |
| Sky color is wrong | Wrong direction for `sun_position` | Remember the vector is **world‑space**; use `Vector3(0,1,0)` for a sky directly above. |
| IBL doesn’t work | Cube map missing or not marked **Generate Mipmaps** | Import the cube map, set **Generate Mipmaps** in the import settings. |
| Sky renders behind objects | `Cull Mode` set to *Back* | Use `Cull Mode: Disabled` in the shader if you want the sky to always be drawn. |

---

## 6.  Further reading

* [Sky shaders] – for the official Godot docs.  
* [Environment](https://docs.godotengine.org/en/stable/tutorials/rendering/environments.html) – how sky interacts with environment settings.  
* [Shader Reference](https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference.html) – full list of built‑in uniforms and functions.

---

*End of Sky shaders reference.*