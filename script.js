// TodoApp encapsulates state and behavior
const TodoApp = (() => {
  const STORAGE_KEY = 't6_todos';
  let todos = [];

  const load = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      try { todos = JSON.parse(data); }
      catch { todos = []; }
    }
  };

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  };

  const add = (title) => {
    const id = Date.now().toString();
    todos.push({ id, title, completed: false });
    save();
    render();
  };

  const toggle = (id) => {
    const todo = todos.find(t => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      save();
      render();
    }
  };

  const remove = (id) => {
    todos = todos.filter(t => t.id !== id);
    save();
    render();
  };

  const render = () => {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(t => {
      const li = document.createElement('li');
      li.dataset.id = t.id;
      if (t.completed) li.classList.add('completed');

      const span = document.createElement('span');
      span.textContent = t.title;
      span.style.cursor = 'pointer';
      span.onclick = () => toggle(t.id);

      const delBtn = document.createElement('button');
      delBtn.className = 'delete-btn';
      delBtn.textContent = '✖';
      delBtn.onclick = () => remove(t.id);

      li.appendChild(span);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  };

  const init = () => {
    load();
    render();
    const form = document.getElementById('todo-form');
    const input = document.getElementById('new-todo');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = input.value.trim();
      if (title) {
        add(title);
        input.value = '';
      }
    });
  };

  return { init };
})();

document.addEventListener('DOMContentLoaded', TodoApp.init);
