# Architecture Overview

The **t6 Todo App** is a client‑side‑only web application. It consists of three core static assets:

- **index.html** – The entry point containing the markup for the todo list UI.
- **style.css** – Basic styling to make the UI clean and responsive.
- **script.js** – JavaScript that implements the todo model, UI interactions, and persistence using the browser's `localStorage`.

## Design Decisions
1. **No backend** – All data is kept locally; this eliminates any need for a server, database, or authentication.
2. **Vanilla stack** – Using plain HTML/CSS/JS keeps the footprint tiny and avoids build tooling.
3. **LocalStorage persistence** – Provides simple, key‑value storage that survives page reloads.
4. **Modular JavaScript** – The script is organized into a small `TodoApp` object that encapsulates state and behavior.

## File Structure
```
/t6/
├─ index.html
├─ style.css
├─ script.js
├─ README.md
└─ ARCHITECTURE.md
```

## Future Extensions (optional)
- Add drag‑and‑drop reordering of tasks.
- Support for multiple lists.
- Sync across devices using a cloud storage API.
