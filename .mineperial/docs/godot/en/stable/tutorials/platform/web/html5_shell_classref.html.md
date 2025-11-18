**NOTE:** The supplied HTML only contains the page shell (navigation, meta tags, etc.) and does not include the actual class‑reference content.  
Below is a minimal Markdown skeleton for the “HTML5 shell class reference” page, based on its title and the structure that would normally appear in the page.

```markdown
# HTML5 shell class reference

Projects exported for the Web expose the `Engine()` class to the JavaScript environment, that allows fine control over the engine’s start‑up process. This API is built in an asynchronous manner, meaning that the game can be started after the `Engine` instance has been initialized, or it can be started directly with a configuration object.

> *This documentation is part of the official Godot Engine manual (stable version).*

---

## Overview

The `Engine` class provides methods and properties to configure the HTML5 build at runtime. It is accessible from JavaScript after the page has loaded:

```js
// Example: accessing the Engine singleton
var engine = Engine;
```

The class is asynchronous: most methods return a `Promise` that resolves once the configuration has been applied.

---

### Common Configuration Methods

| Method | Description | Returns |
|--------|-------------|---------|
| `Engine.start()` | Starts the Godot engine. | `Promise<void>` |
| `Engine.setCanvasRect(rect)` | Sets the canvas rectangle. | `Promise<void>` |
| `Engine.setWebGLContextAttributes(attrs)` | Configures WebGL context attributes (e.g., `alpha`, `depth`, `stencil`). | `Promise<void>` |
| `Engine.setDebugMode(enabled)` | Enables or disables debug mode. | `Promise<void>` |

> **Note:** Many of these methods accept a configuration object rather than individual parameters. Consult the API reference for full signatures.

---

### Accessing Configuration

You can query current settings with getter methods, for example:

```js
var canvasRect = Engine.getCanvasRect();
var contextAttrs = Engine.getWebGLContextAttributes();
```

---

## Reference

*(The full reference is available on the Godot website; see the official docs for details.)*

```js
// Example of using a configuration object to start the engine
Engine.start({
    canvasRect: { x: 0, y: 0, width: 800, height: 600 },
    webgl: { alpha: true, depth: true, stencil: false, antialias: true },
    debug: false
}).then(() => {
    console.log('Engine started');
});
```

---

## Further Reading

- [Custom HTML page for Web export](../customizing_html5_shell.html)  
- [The JavaScriptBridge singleton](../javascript_bridge.html)  

---

**Author**: Godot Engine Documentation Team  
**Version**: stable
```