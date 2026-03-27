(function() {
  const STORAGE_KEY = 't6_todos';

  function loadTodos() {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  }

  function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  function render(todos) {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';
    todos.forEach(todo => {
      const li = document.createElement('li');
      li.className = 'todo-item' + (todo.completed ? ' completed' : '');

      const span = document.createElement('span');
      span.textContent = todo.title;

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = todo.completed;
      checkbox.addEventListener('change', () => {
        todo.completed = checkbox.checked;
        saveTodos(todos);
        render(todos);
      });

      const delBtn = document.createElement('button');
      delBtn.textContent = '✕';
      delBtn.addEventListener('click', () => {
        const idx = todos.findIndex(t => t.id === todo.id);
        if (idx > -1) {
          todos.splice(idx, 1);
          saveTodos(todos);
          render(todos);
        }
      });

      const left = document.createElement('div');
      left.style.display = 'flex';
      left.style.alignItems = 'center';
      left.style.gap = '0.5rem';
      left.appendChild(checkbox);
      left.appendChild(span);

      li.appendChild(left);
      li.appendChild(delBtn);
      list.appendChild(li);
    });
  }

  function addTodo(title) {
    const todos = loadTodos();
    const newTodo = { id: Date.now(), title, completed: false };
    todos.push(newTodo);
    saveTodos(todos);
    render(todos);
  }

  document.getElementById('todo-form').addEventListener('submit', e => {
    e.preventDefault();
    const input = document.getElementById('new-todo');
    const title = input.value.trim();
    if (title) {
      addTodo(title);
      input.value = '';
    }
  });

  // Initial render
  render(loadTodos());
})();
