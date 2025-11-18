**__Custom HTML page for Web export – Godot Engine (stable) documentation__**

---

## Overview

When you export a Godot project to **HTML5** the engine ships with a ready‑to‑use `index.html` that loads the game.  
For most projects the default page is sufficient, but you may want to:

- Add your own branding or splash screen
- Insert analytics, advertising or custom styles
- Load additional assets or modify the initial configuration
- Replace the default loading screen with a custom one

This page explains how to create and use a custom HTML5 shell for a Godot export.

> ⚠️ **Tip** – The default template is already fully functional. Customisation is only needed if you want to modify the look or behaviour of the page that hosts the game.

---

## 1. Where the default `index.html` lives

When you install an export template (e.g. the **HTML5** template for Godot 4.x) the engine ships with:

```
export_templates/web_4.0/  ← Godot export template folder
    index.html           ← the default shell
    engine.js            ← Godot runtime
    <project>.pck        ← compiled game data
```

You can copy `index.html` from the template folder into the directory where you will serve your game and edit it.  
The editor will still use the original template, so you only need to edit the copy that sits in your project’s output folder.

---

## 2. Basic structure of the default shell

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>My Godot Game</title>
    <link rel="stylesheet" href="theme.css"/>
</head>
<body>
    <canvas id="canvas" style="width:100%;height:100%;"></canvas>

    <!-- Godot engine -->
    <script src="engine.js"></script>
    <!-- Project data -->
    <script src="project.pck"></script>
    <!-- Optional: custom scripts -->
    <script src="main.js"></script>
</body>
</html>
```

* `canvas#canvas` – Where the game draws its output.
* `engine.js` – The compiled engine binary.
* `<project>.pck` – The exported project data.
* `main.js` – Your optional custom logic.

> The order of the `<script>` tags matters: `engine.js` must load before the project data, and any custom scripts must load after.

---

## 3. Customising the page

### 3.1 Title, meta and favicon

```html
<title>Adventure Quest</title>
<link rel="icon" href="assets/favicon.ico"/>
<meta name="description" content="An epic adventure in the browser"/>
```

### 3.2 CSS

You can add your own stylesheet or embed styles directly:

```html
<link rel="stylesheet" href="styles.css"/>
<style>
  body { margin: 0; background:#000; }
  #loading { position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); color:white; }
</style>
```

### 3.3 Custom loading screen

The default template shows a simple “Loading… 0%” text.  
Replace it with your own element and update the percentage via JavaScript:

```html
<div id="loading">Loading… <span id="percent">0%</span></div>
```

```js
window.addEventListener('load', () => {
  const percent = document.getElementById('percent');
  Godot.connect('loading', (msg) => {
    const progress = Math.round(msg.progress * 100);
    percent.textContent = `${progress}%`;
  });
});
```

> **Note** – `Godot` is a global object exposed by `engine.js`. Use its signals (`loading`, `ready`, etc.) to hook into the game lifecycle.

### 3.4 Embedding analytics or ads

You can insert third‑party scripts before the Godot scripts:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA-XXXX');
</script>
```

> Make sure no script blocks the loading of `engine.js` and `project.pck`.

---

## 4. Advanced customisation

### 4.1 Changing canvas dimensions

The canvas is automatically resized to fit the browser window.  
To enforce a fixed resolution, override the style:

```css
#canvas { width:800px; height:600px; margin:auto; display:block; }
```

### 4.2 Pre‑loading external assets

If your project uses additional assets that should be available before the engine starts, load them in the HTML and pass a reference to Godot:

```html
<script>
  const preloadImages = [];
  const img = new Image();
  img.src = 'assets/logo.png';
  preloadImages.push(img);
</script>
```

### 4.3 Handling resize events

If you want to react to browser resize events (e.g. to pause the game or show a message):

```js
window.addEventListener('resize', () => {
  Godot.call('set_window_size', window.innerWidth, window.innerHeight);
});
```

---

## 5. Packaging for deployment

1. Export your project with the **HTML5** template (e.g. via “Export Project” → *HTML5*).
2. Copy the generated folder to your web server.
3. Replace the default `index.html` with your customised file.
4. Verify that `engine.js` and `<project>.pck` are in the same folder and that the `<script>` paths match.
5. Open the page in a browser and test the game and custom UI.

---

## 6. Common issues

| Issue | Fix |
|-------|-----|
| `engine.js` not found | Ensure the path in `<script src="engine.js">` is correct. |
| Custom scripts run before the game | Move `<script src="main.js">` **after** the `<script src="project.pck">`. |
| Loading screen stuck at 0% | Make sure you connect to the correct `Godot` signal (`loading`) and that `engine.js` is loaded. |
| Browser console reports `Uncaught ReferenceError: Godot is not defined` | The `engine.js` script hasn't finished loading. Put your script after it or wrap code in a `window.addEventListener('load', …)` callback. |

---

## 7. Further reading

- [HTML5 export documentation](https://docs.godotengine.org/en/stable/tutorials/export/html5.html) – General export guide.
- [Godot API reference](https://docs.godotengine.org/en/stable/classes/class_godot.html) – Look up available signals and methods on the global `Godot` object.

---

*End of documentation.*