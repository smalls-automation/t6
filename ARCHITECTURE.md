# Architecture Overview

## Overview
The **t6 Todo App** is a purely client‑side web application. It consists of three static files:
- `index.html` – the markup and container for the UI.
- `styles.css` – minimal styling for a clean, responsive layout.
- `script.js` – JavaScript handling all interactions (add, toggle, delete).

## Technical Stack
- **HTML5** – structure of the page.
- **CSS3** – layout and visual styling (flexbox, simple responsive design).
- **Vanilla JavaScript (ES6+)** – DOM manipulation, event handling, and in‑memory state management.

## Data Model
```json
{
  "id": "string",   // unique identifier (e.g., UUID or timestamp)
  "title": "string",
  "completed": false
}
```
All todo items are kept in an array held in memory while the page is open. No persistence (e.g., localStorage) is required per the original requirements.

## Component Diagram
```
[User] <--interacts with--> [Browser] <--loads--> [index.html]
                                          |
                                          v
                                    [script.js] (handles UI logic)
```

## Non‑Functional Considerations
- **Zero backend** – runs from any static file server or directly from the filesystem.
- **Compatibility** – works in all modern browsers supporting ES6.
- **Performance** – O(n) operations on the in‑memory array are sufficient for typical personal todo lists.

## Future Enhancements (out of scope for Phase‑1)
- Persist todos using `localStorage` or `IndexedDB`.
- Add drag‑and‑drop reordering.
- Mobile‑first responsive improvements.
