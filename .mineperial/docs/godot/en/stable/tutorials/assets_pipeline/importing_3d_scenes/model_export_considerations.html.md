**NOTE:** The HTML snippet you supplied contains the page’s **navigation structure** (the sidebar menus) but does **not include the main article content** that would normally appear in the body of the page (`model_export_considerations.html`).  
Because of that, the conversion below reproduces only the available portion – a clean Markdown representation of the navigation tree that is present in the snippet. If you need the actual tutorial content, you’ll have to provide the full HTML of the article section, not just the navigation.

---

# Model export considerations

*This page is part of the “assets pipeline” section of the Godot documentation.*

---

## Navigation

```
About
├─ Introduction
│   ├─ Before you start
│   ├─ About Godot engine
│   ├─ Organization of the documentation
│   └─ About this documentation
├─ List of features
│   ├─ Platforms
│   ├─ Editor
│   ├─ Rendering
│   ├─ 2D graphics
│   ├─ 2D tools
│   ├─ 2D physics
│   ├─ 3D graphics
│   ├─ 3D tools
│   ├─ 3D physics
│   ├─ Shaders
│   ├─ Scripting
│   ├─ Audio
│   ├─ Import
│   ├─ Input
│   ├─ Navigation
│   ├─ Networking
│   ├─ Internationalization
│   ├─ Windowing and OS integration
│   ├─ Mobile
│   ├─ XR support (AR and VR)
│   ├─ GUI system
│   ├─ Animation
│   ├─ File formats
│   └─ Miscellaneous
├─ System requirements
│   ├─ Godot editor
│   │   ├─ Desktop or laptop PC – Minimum
│   │   ├─ Mobile device (smartphone/tablet) – Minimum
│   │   ├─ Desktop or laptop PC – Recommended
│   │   └─ Mobile device (smartphone/tablet) – Recommended
│   └─ Exported Godot project
│       ├─ Desktop or laptop PC – Minimum
│       ├─ Mobile device (smartphone/tablet) – Minimum
│       ├─ Desktop or laptop PC – Recommended
│       └─ Mobile device (smartphone/tablet) – Recommended
├─ FAQ
│   ├─ What can I do with Godot? How much does it cost? What are the license terms?
│   ├─ Which platforms are supported by Godot?
│   ├─ Which programming languages are supported in Godot?
│   ├─ What is GDScript and why should I use it?
│   ├─ What were the motivations behind creating GDScript?
│   ├─ Which programming language is fastest?
│   ├─ What 3D model formats does Godot support?
│   ├─ Will [insert closed SDK such as FMOD, GameWorks, etc.] be supported in Godot?
│   ├─ How can I extend Godot?
│   ├─ How do I install the Godot editor on my system (for desktop integration)?
│   │   ├─ Windows
│   │   ├─ macOS
│   │   └─ Linux
│   ├─ Is the Godot editor a portable application?
│   ├─ Why does Godot prioritize Vulkan and OpenGL over Direct3D?
│   ├─ Why does Godot aim to keep its core feature set small?
│   ├─ How should assets be created to handle multiple resolutions and aspect ratios?
│   ├─ When is the next release of Godot out?
│   ├─ Which Godot version should I use for a new project?
│   ├─ Should I upgrade my project to use new Godot versions?
│   ├─ Should I use the Forward+, Mobile, or Compatibility renderer?
│   ├─ I would like to contribute! How can I get started?
│   ├─ I have a great idea for Godot. How can I share it?
│   ├─ Is it possible to use Godot to create non‑game applications?
│   ├─ Is it possible to use Godot as a library?
│   ├─ What user interface toolkit does Godot use?
│   ├─ Why does Godot use the SCons build system?
│   ├─ Why does Godot not use STL (Standard Template Library)?
│   ├─ Why does Godot not use exceptions?
│   ├─ Does Godot use an ECS (Entity Component System)?
│   ├─ Why does Godot not force users to implement DOD (Data‑Oriented Design)?
│   └─ How can I support Godot development or contribute?
├─ Complying with licenses
│   ├─ What are licenses?
│   ├─ Requirements
│   ├─ Inclusion
│   │   ├─ Credits screen
│   │   ├─ Licenses screen
│   │   ├─ Output log
│   │   ├─ Accompanying file
│   │   ├─ Printed manual
│   │   └─ Link to the license
│   └─ Third‑party licenses
├─ Godot release policy
│   ├─ Godot versioning
│   ├─ Release support timeline
│   ├─ Which version should I use for a new project?
│   ├─ Should I upgrade my project to use new engine versions?
│   ├─ When is the next release out?
│   └─ What are the criteria for compatibility across engine versions?
├─ Documentation changelog
│   ├─ New pages since version 4.3
│   │   ├─ 2D
│   │   ├─ 3D
│   │   ├─ Debug
│   │   ├─ Editor
│   │   ├─ Performance
│   │   ├─ Physics
│   │   ├─ Rendering
│   │   └─ Shaders
│   ├─ New pages since version 4.2
│   │   ├─ About
│   │   ├─ 2D
│   │   ├─ Contributing
│   │   ├─ GDExtension
│   │   ├─ Migrating
│   │   ├─ Rendering
│   │   └─ XR
│   ├─ New pages since version 4.1
│   │   ├─ C#
│   │   ├─ Development
│   │   ├─ Migrating
│   │   ├─ I/O
│   │   ├─ Platform‑specific
│   ├─ New pages since version 4.0
│   │   ├─ Development
│   │   ├─ Migrating
│   │   └─ Physics
│   ├─ New pages since version 3.6
│   │   ├─ 2D
│   │   ├─ 3D
│   │   ├─ Animation
│   │   ├─ Assets pipeline
│   │   ├─ Development
│   │   ├─ Migrating
│   │   ├─ Physics
│   │   ├─ Scripting
│   │   ├─ Shaders
│   │   └─ XR
│   ├─ New pages since version 3.5
│   ├─ New pages since version 3.4
│   │   ├─ 3D
│   │   ├─ Animation
│   │   └─ Editor
│   ├─ New pages since version 3.3
│   │   └─ GDScript
│   ├─ New pages since version 3.2
│   │   ├─ 3D
│   │   ├─ About
│   │   ├─ Best practices
│   │   ├─ Development
│   │   ├─ Editor
│   │   ├─ Export
│   │   ├─ Input
│   │   ├─ Math
│   │   ├─ Platform‑specific
│   │   ├─ Physics
│   │   ├─ Shaders
│   │   └─ Scripting
│   ├─ New pages since version 3.1
│   │   ├─ Project workflow
│   │   ├─ 2D
│   │   ├─ Audio
│   │   ├─ Math
│   │   ├─ Inputs
│   │   ├─ Internationalization
│   │   ├─ Shading
│   │   ├─ Networking
│   │   ├─ Plugins
│   │   ├─ Multi‑threading
│   │   ├─ Creating content
│   │   ├─ Optimization
│   │   └─ Legal
│   ├─ New pages since version 3.0
│   │   ├─ Step by step
│   │   ├─ Scripting
│   │   ├─ Project workflow
│   │   ├─ 2D
│   │   ├─ 3D
│   │   ├─ Physics
│   │   ├─ Animation
│   │   ├─ GUI
│   │   ├─ Viewports
│   │   ├─ Shading
│   │   ├─ Plugins
│   │   ├─ Platform‑specific
│   │   ├─ Multi‑threading
│   │   ├─ Creating content
│   │   ├─ Miscellaneous
│   │   └─ Compiling
├─ Getting started
│   ├─ Introduction
│   │   ├─ What is Godot?
│   │   ├─ What can the engine do?
│   │   ├─ How does it work and look?
│   │   └─ Programming languages
│   ├─ Learn to code with GDScript
│   ├─ Overview of Godot's key concepts
│   ├─ First look at Godot's interface
│   ├─ Learning new features
│   └─ Godot's design philosophy
├─ Step by step
│   ├─ Nodes and Scenes
│   ├─ Creating instances
│   ├─ Scripting languages
│   ├─ Creating your first script
│   ├─ Listening to player input
│   ├─ Using signals
│   └─ …
├─ Best practices
│   ├─ Introduction
│   ├─ Applying object‑oriented principles in Godot
│   │   ├─ How scripts work in the engine
│   │   └─ Scenes
│   ├─ Scene organization
│   │   ├─ How to build relationships effectively
│   │   └─ Choosing a node tree structure
│   ├─ When to use scenes versus scripts
│   ├─ Autoloads versus regular nodes
│   ├─ When and how to avoid using nodes for everything
│   ├─ Godot interfaces
│   ├─ Godot notifications
│   ├─ Data preferences
│   ├─ Logic preferences
│   ├─ Project organization
│   └─ Version control systems
├─ Troubleshooting
│   ├─ The editor runs slowly and uses all my CPU and GPU resources …
│   ├─ The editor stutters and flickers …
│   ├─ The editor or project takes a very long time to start
│   ├─ The Godot editor appears frozen …
│   ├─ …
├─ Editor introduction
│   ├─ Editor's interface
│   │   ├─ Using the Project Manager
│   │   │   ├─ Creating and importing projects
│   │   │   ├─ Opening and importing projects
│   │   │   ├─ Downloading demos and templates
│   │   │   ├─ Managing projects with tags
│   │   │   └─ Recovery Mode
│   │   ├─ Inspector Dock
│   │   ├─ Project Settings
│   │   ├─ Script Editor
│   │   ├─ Default editor shortcuts
│   │   ├─ Customizing the interface
│   │   └─ …
│   ├─ XR editor
│   ├─ Android editor
│   ├─ Web editor
│   ├─ Advanced features
│   │   ├─ Command line tutorial
│   │   ├─ Using an external text editor
│   │   └─ Using the engine compilation configuration editor
│   └─ Managing editor features
│       ├─ Managing editor features
│       │   ├─ Introduction
│       │   ├─ Creating a profile
│       │   └─ Sharing a profile
│       └─ …
├─ Migrating to a new version
│   ├─ Upgrading from Godot 3 to Godot 4
│   │   ├─ Should I upgrade to Godot 4?
│   │   │   ├─ Advantages of upgrading
│   │   │   ├─ Disadvantages of upgrading
│   │   │   └─ Caveats of upgrading
│   │   ├─ Preparing before the upgrade (optional)
│   │   ├─ Running the project upgrade tool
│   │   │   ├─ Using the Project Manager
│   │   │   └─ Using the command line
│   │   ├─ Fixing the project after running the project upgrade tool
│   │   │   ├─ Automatically renamed nodes and resources
│   │   │   ├─ Manually renaming methods, properties, signals and constants
│   │   │   ├─ Checking project settings
│   │   │   ├─ Checking environment settings
│   │   │   ├─ Updating shaders
│   │   │   ├─ Updating scripts to take backwards‑incompatible changes into account
│   │   │   └─ ArrayMesh resource compatibility breakage
│   │   └─ List of automatically renamed methods, properties, signals and constants
│   ├─ …
```

---

### What you should do next

1. **Get the actual article content.**  
   If you can supply the HTML for the main body of the “Model export considerations” page, I can convert that into clean Markdown.

2. **Alternatively, use the Godot docs directly.**  
   The live documentation at <https://docs.godotengine.org> contains the full text; you can copy that into Markdown if needed.

---

*Feel free to provide the missing HTML or let me know if you’d like a different format for this navigation overview.*