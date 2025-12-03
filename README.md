# Smart To-Do List

A clean, fast, and persistent To-Do List application.
Built with pure JavaScript (Vanilla JS) to demonstrate **DOM manipulation**, **Event Delegation**, and **LocalStorage** management.

## Features

- **Persistent Data:** Tasks are saved in the browser's `localStorage`, so you won't lose them after refreshing the page.
- **Dynamic UI:** Create and delete tasks instantly without page reloads.
- **Smart Validation:** Prevents adding empty tasks.
- **Event Delegation:** Optimized performance by using a single event listener for list items management.

## Demo
Try it live [here](https://awokadev.github.io/todo-list/)

## Tech Stack

- **HTML5:** Semantic structure.
- **CSS3:** Flexbox layout, hover effects, and responsive container.
- **JavaScript (ES6+):**
  - `localStorage` for data persistence.
  - `JSON.stringify` / `JSON.parse` for state management.
  - Arrow functions & Strict mode (`"use strict"`).
  - Array methods (`.filter`, `.push`, `for...of`).

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/AwokaDev/todo-list.git
   ```
2. Open `index.html` in your browser.
3. Start adding your tasks!

## Code Highlights

**State Management logic:**
The app automatically initializes the state from storage or creates a fresh start.
```javascript
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
```

**Deleting with Filter:**
Instead of loops, I used the modern `.filter()` method to remove tasks from the state cleanly.
```javascript
tasks = tasks.filter((t) => t !== event.target.textContent);
```

## License
This project is licensed under the MIT License.
